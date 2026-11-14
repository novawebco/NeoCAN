import { spawn } from 'node:child_process';
import { mkdirSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../../audit/browser-qa/', import.meta.url));
const dist = fileURLToPath(new URL('../dist/', import.meta.url));
mkdirSync(root, { recursive: true });
const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const port = 9226;
const proc = spawn(chrome, ['--headless=new', '--no-sandbox', '--disable-gpu', '--disable-crash-reporter', '--disable-breakpad', '--no-first-run', '--no-default-browser-check', `--remote-debugging-port=${port}`, `--user-data-dir=${join(root, 'cdp-profile-final')}`, 'about:blank'], { stdio: 'ignore' });
let version;
for (let i = 0; i < 80; i++) {
  try { version = await (await fetch(`http://127.0.0.1:${port}/json/version`)).json(); break; } catch { await new Promise(r => setTimeout(r, 100)); }
}
if (!version) throw new Error('Chrome debugging endpoint unavailable');
const target = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: 'PUT' })).json();
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { ws.onopen = resolve; ws.onerror = reject; });
let id = 0;
const pending = new Map();
const events = new Map();
ws.onmessage = ({ data }) => {
  const msg = JSON.parse(data);
  if (msg.id) { const p = pending.get(msg.id); if (p) { pending.delete(msg.id); msg.error ? p.reject(new Error(msg.error.message)) : p.resolve(msg.result); } }
  else if (msg.method) { for (const fn of events.get(msg.method) ?? []) fn(msg.params); }
};
function call(method, params = {}) { return new Promise((resolve, reject) => { const n = ++id; pending.set(n, { resolve, reject }); ws.send(JSON.stringify({ id: n, method, params })); }); }
function on(method, fn) { if (!events.has(method)) events.set(method, new Set()); events.get(method).add(fn); return () => events.get(method).delete(fn); }
async function evaluate(expression) { const r = await call('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true }); return r.result?.value; }
async function navigate(url, timeout = 12000) {
  let loaded = false;
  const off = on('Page.loadEventFired', () => { loaded = true; });
  const nav = await call('Page.navigate', { url });
  const start = Date.now();
  while (!loaded && Date.now() - start < timeout) await new Promise(r => setTimeout(r, 80));
  off();
  await evaluate('Promise.race([document.fonts.ready.then(() => true), new Promise(r => setTimeout(() => r(false), 2000))])');
  return { nav, loaded };
}
async function viewport(width, height = 900) { await call('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: width < 600 }); }
async function screenshot(name) { const r = await call('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false }); writeFileSync(join(root, name), Buffer.from(r.data, 'base64')); }
await Promise.all([call('Page.enable'), call('Runtime.enable'), call('Network.enable'), call('Log.enable')]);
const consoleErrors = [], networkErrors = [], responses = [];
on('Runtime.exceptionThrown', x => consoleErrors.push({ url: current, text: x.exceptionDetails?.text, description: x.exceptionDetails?.exception?.description }));
on('Log.entryAdded', x => { if (x.entry.level === 'error') consoleErrors.push({ url: current, text: x.entry.text }); });
on('Network.loadingFailed', x => networkErrors.push({ url: current, error: x.errorText, requestId: x.requestId }));
on('Network.responseReceived', x => { if (x.response.status >= 400) responses.push({ url: current, status: x.response.status, resource: x.response.url }); });
let current = '';
const routes = [];
function walk(p) { for (const x of readdirSync(p)) { const f = join(p, x); if (statSync(f).isDirectory()) walk(f); else if (x.endsWith('.html')) { const rel = relative(dist, f).split(sep).join('/'); routes.push('/' + rel.replace(/index\.html$/, '').replace(/\.html$/, '')); } } }
walk(dist);
routes.sort();
const key = { '/': 'home', '/about/aman-maan/': 'owner', '/services/study-visa/': 'service', '/countries/canada/': 'country', '/countries/': 'country-directory', '/locations/sri-ganganagar/': 'location', '/resources/ielts-preparation/': 'resource', '/faq/': 'faq', '/contact/': 'contact', '/privacy-policy/': 'legal' };
const phase = process.argv[2] || 'before';
const results = [];
for (const route of routes) {
  current = route;
  await viewport(1440);
  const { nav, loaded } = await navigate('http://127.0.0.1:4321' + (route === '/404' ? '/404.html' : route));
  await evaluate('Promise.all([...document.images].filter(i => i.loading !== "lazy").map(i => i.decode().catch(() => null)))');
  const data = await evaluate(`(() => {
    const q = s => document.querySelector(s);
    const svg = q('a[href*="wa.me"] svg');
    const css = [...document.styleSheets].map(s => s.href || 'inline');
    const fonts = document.fonts.check('16px "Inter Variable"') && document.fonts.check('16px "Plus Jakarta Sans Variable"');
    const links = [...document.querySelectorAll('a[href^="/"]')].map(a => a.getAttribute('href'));
    return { title: document.title, h1: q('h1')?.innerText, css, fonts, bodyFont: getComputedStyle(document.body).fontFamily, headerDisplay: getComputedStyle(q('#site-header')).display, width: document.documentElement.scrollWidth, viewport: innerWidth, height: document.documentElement.scrollHeight, svg: svg && { width: svg.getBoundingClientRect().width, height: svg.getBoundingClientRect().height }, brokenImages: [...document.images].filter(i => i.loading !== 'lazy' && (!i.complete || i.naturalWidth === 0)).map(i => i.src), links, noindex: q('meta[name="robots"]')?.content, ukRegulatorText: location.pathname.startsWith('/countries/uk/') ? document.body.innerText.includes('Immigration Advice Authority (IAA)') : null, ownerHeadings: [...document.querySelectorAll('h1,h2,h3')].map(e=>e.textContent.trim()).filter(x => /aman maan|amandeep|sukhcharan/i.test(x)) };
  })()`);
  results.push({ route, status: nav.errorText ? 'FAIL' : loaded ? 'PASS' : 'BLOCKED', nav, ...data });
  if (key[route]) await screenshot(`${phase}-${key[route]}-1440.png`);
}
for (const [route, slug] of Object.entries(key)) {
  for (const width of [390, 768]) {
    current = `${route}@${width}`;
    await viewport(width, 900);
    await navigate('http://127.0.0.1:4321' + route);
    const data = await evaluate('({ width: document.documentElement.scrollWidth, viewport: innerWidth, height: document.documentElement.scrollHeight, menuVisible: getComputedStyle(document.querySelector("#menu-open")).display })');
    results.push({ route, width, ...data });
    await screenshot(`${phase}-${slug}-${width}.png`);
  }
}
current = 'interactions';
await viewport(390);
await navigate('http://127.0.0.1:4321/');
await evaluate('document.querySelector("#menu-open").click()');
const mobileMenu = await evaluate('({open: document.querySelector("#menu-open").getAttribute("aria-expanded"), visible: getComputedStyle(document.querySelector("#mobile-panel")).display, overflow: document.body.style.overflow})');
await evaluate('document.querySelector("#menu-close").click()');
await viewport(1440);
await navigate('http://127.0.0.1:4321/');
await evaluate('document.querySelector("[data-mega-btn]").click()');
const megaMenu = await evaluate('({open: document.querySelector("[data-mega-btn]").getAttribute("aria-expanded"), visible: !document.querySelector("#mega-services").hidden})');
await evaluate('document.querySelector(".faq summary")?.click()');
const faq = await evaluate('({open: document.querySelector(".faq details")?.open})');
await evaluate('document.querySelector("[data-slide-index=\\"2\\"]")?.click()');
const heroSlide = await evaluate(`(() => {
  const hero = document.querySelector('[data-home-carousel]');
  const selected = hero?.querySelector('[data-slide-index="2"]');
  return {
    title: hero?.querySelector('h1')?.textContent,
    image: hero?.querySelector('#home-hero-image')?.getAttribute('src'),
    selected: selected?.getAttribute('aria-pressed'),
  };
})()`);
await evaluate('document.querySelector("[data-pause]")?.click()');
heroSlide.paused = await evaluate('document.querySelector("[data-pause]")?.getAttribute("aria-pressed")');
const countryCarousel = null; // The scoped homepage uses an accessible grid instead of a carousel.
const contactLinks = await evaluate(`(() => { const a = [...document.querySelectorAll('a[href]')].map(x => x.href); return { phone: a.find(x => x.startsWith('tel:')), whatsapp: a.find(x => x.startsWith('https://wa.me/')), email: a.find(x => x.startsWith('mailto:')) }; })()`);
const external = [];
if (phase === 'after') {
  for (const [slug, url] of [['reference-home', 'https://demo.bravisthemes.com/immigway/'], ['reference-home-02', 'https://demo.bravisthemes.com/immigway/home-02/'], ['production', 'https://neocan.net/']]) {
    current = slug;
    await viewport(1440);
    try {
      const { nav, loaded } = await navigate(url, 15000);
      const info = await evaluate('({title: document.title, url: location.href, h1: document.querySelector("h1")?.innerText, width: document.documentElement.scrollWidth, height: document.documentElement.scrollHeight})');
      external.push({ slug, url, nav, loaded, ...info });
      if (!nav.errorText && loaded) await screenshot(`${slug}-1440.png`);
    } catch (e) { external.push({ slug, url, error: String(e) }); }
  }
}
const output = { phase, browser: version.Browser, routes: results, mobileMenu, megaMenu, faq, heroSlide, countryCarousel, contactLinks, consoleErrors, networkErrors, responses, external };
writeFileSync(join(root, `${phase}-results.json`), JSON.stringify(output, null, 2));
console.log(JSON.stringify({ phase, browser: version.Browser, routes: routes.length, failures: results.filter(x => x.status === 'FAIL' || x.width > x.viewport), mobileMenu, megaMenu, faq, heroSlide, countryCarousel, contactLinks, consoleErrors: consoleErrors.slice(0, 10), networkErrors: networkErrors.slice(0, 10), responses: responses.slice(0, 10), external }, null, 2));
ws.close();
proc.kill();
