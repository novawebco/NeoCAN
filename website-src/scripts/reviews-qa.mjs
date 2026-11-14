// Headless Chrome QA for the Google Reviews carousel. Serves dist/ locally; no network use.
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { mkdirSync, readFileSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const out = fileURLToPath(new URL('../../audit/browser-qa/reviews/', import.meta.url));
const dist = fileURLToPath(new URL('../dist/', import.meta.url));
mkdirSync(out, { recursive: true });
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.png': 'image/png', '.woff2': 'font/woff2', '.ico': 'image/x-icon' };
const server = createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  let f = join(dist, p);
  if (existsSync(f) && statSync(f).isDirectory()) f = join(f, 'index.html');
  if (!existsSync(f)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'content-type': mime[extname(f)] ?? 'application/octet-stream' }); res.end(readFileSync(f));
}).listen(4399);

const port = 9333;
const proc = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', ['--headless=new', '--no-sandbox', '--disable-gpu', '--no-first-run', `--remote-debugging-port=${port}`, `--user-data-dir=${join(out, 'profile')}`, 'about:blank'], { stdio: 'ignore' });
let version;
for (let i = 0; i < 80; i++) { try { version = await (await fetch(`http://127.0.0.1:${port}/json/version`)).json(); break; } catch { await new Promise(r => setTimeout(r, 100)); } }
const target = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: 'PUT' })).json();
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });
let id = 0; const pending = new Map(); const events = [];
ws.onmessage = ({ data }) => { const m = JSON.parse(data); if (m.id) { const p = pending.get(m.id); pending.delete(m.id); m.error ? p.reject(new Error(m.error.message)) : p.resolve(m.result); } else events.push(m); };
const call = (method, params = {}) => new Promise((resolve, reject) => { const n = ++id; pending.set(n, { resolve, reject }); ws.send(JSON.stringify({ id: n, method, params })); });
const ev = async (e) => (await call('Runtime.evaluate', { expression: e, returnByValue: true, awaitPromise: true })).result?.value;
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const results = []; const log = (name, ok, detail = '') => { results.push({ name, ok, detail }); console.log(`${ok ? 'PASS' : 'FAIL'} ${name} ${detail}`); };

await call('Page.enable'); await call('Runtime.enable');
const state = `(() => { const t = document.querySelector('[data-gr-track]'); const s = document.querySelector('#google-reviews'); const cs = [...t.children].map(c => c.getBoundingClientRect());
  const vis = cs.filter(r => r.left >= t.getBoundingClientRect().left - 2 && r.right <= t.getBoundingClientRect().right + 2).length;
  return { left: Math.round(t.scrollLeft), max: t.scrollWidth - t.clientWidth, vis, heights: [...new Set(cs.map(r => Math.round(r.height)))],
    dots: document.querySelectorAll('.gr-dot').length, cur: [...document.querySelectorAll('.gr-dot')].findIndex(d => d.getAttribute('aria-current') === 'true'),
    prevDis: document.querySelector('[data-gr-prev]').disabled, nextDis: document.querySelector('[data-gr-next]').disabled,
    overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth, secOverflow: s.scrollWidth > s.clientWidth + 1 }; })()`;

for (const [w, h] of [[390, 844], [768, 1024], [1024, 768], [1440, 900]]) {
  await call('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 1, mobile: w < 700 });
  await call('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'no-preference' }] });
  await call('Page.navigate', { url: 'http://localhost:4399/' }); await sleep(1500);
  await ev(`document.querySelector('[data-gr-toggle]').click()`); // pause autoplay for deterministic tests
  await ev(`document.querySelector('#google-reviews').scrollIntoView({behavior:'instant'})`); await sleep(900);
  let s = await ev(state);
  console.log(w, JSON.stringify(s));
  if (s.overflow) console.log('  overflow culprits:', await ev(`[...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > document.documentElement.clientWidth + 1 && !e.closest('[data-gr-track]')).slice(0,6).map(e => e.tagName + '.' + String(e.className).slice(0,40) + ' in ' + (e.closest('section')?.id || e.closest('header,footer')?.tagName))`));
  const expectVis = w >= 1100 ? 3 : w >= 768 ? 2 : 1;
  log(`${w}px visible cards`, s.vis === expectVis, `${s.vis} (expected ${expectVis})`);
  log(`${w}px equal card heights`, s.heights.length === 1, JSON.stringify(s.heights));
  if (s.overflow) { const without = await ev(`(() => { const sec = document.querySelector('#google-reviews'); const nx = sec.nextSibling; const par = sec.parentNode; sec.remove(); const r = document.documentElement.scrollWidth > document.documentElement.clientWidth; par.insertBefore(sec, nx); return r; })()`); console.log('  overflow persists without reviews section:', without); s.overflowPreexisting = without; }
  log(`${w}px no page overflow from reviews section`, (!s.overflow || s.overflowPreexisting) && !s.secOverflow, s.overflowPreexisting ? 'page overflow is pre-existing (hero), not the reviews section' : '');
  const shot = async (n) => { const r = await call('Page.captureScreenshot', { format: 'png' }); writeFileSync(join(out, `${w}-${n}.png`), Buffer.from(r.data, 'base64')); };
  await ev(`document.querySelector('#google-reviews').scrollIntoView({behavior:'instant'})`); await shot('start');
  log(`${w}px prev disabled at start`, s.prevDis);
  // Next button
  await ev(`document.querySelector('[data-gr-next]').click()`); await sleep(900); s = await ev(state);
  log(`${w}px next moves`, s.left > 0 && s.cur === 1, JSON.stringify({ left: s.left, cur: s.cur }));
  await shot('next');
  // Go to end & check next disabled
  for (let i = 0; i < 5; i++) { await ev(`document.querySelector('[data-gr-next]').click()`); await sleep(700); }
  s = await ev(state);
  log(`${w}px reaches end`, s.nextDis && s.cur === s.dots - 1 && s.left >= s.max - 2, JSON.stringify({ cur: s.cur, dots: s.dots }));
  // Dot click back to first
  await ev(`document.querySelector('.gr-dot').click()`); await sleep(900); s = await ev(state);
  log(`${w}px dot returns to first`, s.left === 0 && s.cur === 0);
  // Keyboard
  await ev(`document.querySelector('[data-gr-track]').focus()`);
  await call('Input.dispatchKeyEvent', { type: 'keyDown', key: 'ArrowRight', code: 'ArrowRight', windowsVirtualKeyCode: 39 });
  await call('Input.dispatchKeyEvent', { type: 'keyUp', key: 'ArrowRight', code: 'ArrowRight', windowsVirtualKeyCode: 39 }); await sleep(900);
  s = await ev(state); log(`${w}px keyboard ArrowRight`, s.left > 0);
  await ev(`document.querySelector('.gr-cta').focus()`);
  const ring = await ev(`getComputedStyle(document.querySelector('.gr-cta')).outlineStyle`);
  log(`${w}px focus outline on controls`, ring !== 'none', ring);
  // Link
  const link = await ev(`(() => { const a = document.querySelector('.gr-cta'); return a.href + '|' + a.target + '|' + a.rel; })()`);
  log(`${w}px CTA link`, link.startsWith('https://share.google/dDUL109YwSEoFcQYV|_blank|noopener'), link);
  // Duplicates
  const dup = await ev(`(() => { const t = [...document.querySelectorAll('.gr-text')].map(e => e.textContent); return t.length + '/' + new Set(t).size; })()`);
  log(`${w}px no duplicate reviews`, dup === '4/4', dup);
  // Swipe (touch) on mobile
  if (w === 390) {
    await ev(`document.querySelector('[data-gr-track]').scrollTo({left:0,behavior:'instant'})`); await sleep(400);
    const y = 600;
    await call('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: 330, y }] });
    for (let x = 330; x >= 90; x -= 30) { await call('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x, y }] }); await sleep(16); }
    await call('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] }); await sleep(900);
    s = await ev(state); log('390px touch swipe advances', s.left > 100, `left=${s.left}`);
  }
}

// Reduced motion + autoplay
await call('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
await call('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
await call('Page.navigate', { url: 'http://localhost:4399/' }); await sleep(8000);
let s = await ev(state);
log('reduced-motion: no autoplay', s.left === 0);
log('reduced-motion: scroll-behavior auto', (await ev(`getComputedStyle(document.querySelector('[data-gr-track]')).scrollBehavior`)) === 'auto');
log('reduced-motion: toggle says Resume', (await ev(`document.querySelector('[data-gr-toggle-label]').textContent`)) === 'Resume auto-scroll');
await call('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'no-preference' }] });
await call('Page.navigate', { url: 'http://localhost:4399/' }); await sleep(8500);
s = await ev(state); log('autoplay advances when motion allowed', s.left > 0, `left=${s.left}`);
await ev(`document.querySelector('[data-gr-toggle]').click()`); await sleep(100);
const l1 = (await ev(state)).left; await sleep(7500); const l2 = (await ev(state)).left;
log('pause button stops autoplay', l1 === l2, `${l1}->${l2}`);

// Headings & console
const h = await ev(`(() => { const s = document.querySelector('#google-reviews'); return [s.querySelector('.eyebrow').textContent.trim(), s.querySelector('h2').textContent.trim(), s.querySelectorAll('h1,h2,h3').length, /What Our Clients Say|Explore customer experiences/.test(s.textContent)]; })()`);
log('heading text', h[0] === 'Google Reviews' && h[1] === 'NeoCAN Client Reviews' && h[2] === 1 && h[3] === false, JSON.stringify(h));
const errs = events.filter(e => e.method === 'Runtime.exceptionThrown').length;
log('no JS exceptions', errs === 0, String(errs));

writeFileSync(join(out, 'results.json'), JSON.stringify(results, null, 2));
console.log(`${results.filter(r => r.ok).length}/${results.length} passed`);
ws.close(); proc.kill(); server.close(); process.exit(results.every(r => r.ok) ? 0 : 1);
