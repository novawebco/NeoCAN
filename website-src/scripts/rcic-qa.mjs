import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { readFileSync, existsSync, mkdirSync, writeFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const out = fileURLToPath(new URL('../../audit/browser-qa/rcic/', import.meta.url));
mkdirSync(out, { recursive: true });
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.ico': 'image/x-icon', '.png': 'image/png' };
const srv = createServer((q, r) => { let p = join(dist, decodeURIComponent(q.url.split('?')[0])); if (existsSync(p) && statSync(p).isDirectory()) p = join(p, 'index.html'); if (!existsSync(p)) { r.writeHead(404); return r.end(); } r.writeHead(200, { 'content-type': types[extname(p)] || 'application/octet-stream' }); r.end(readFileSync(p)); }).listen(4399);
const port = 9331;
const proc = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', '--no-sandbox', '--disable-gpu', '--no-first-run', `--remote-debugging-port=${port}`, `--user-data-dir=${join(out, 'profile')}`, 'about:blank'], { stdio: 'ignore' });
let v; for (let i = 0; i < 80; i++) { try { v = await (await fetch(`http://127.0.0.1:${port}/json/version`)).json(); break; } catch { await new Promise(r => setTimeout(r, 100)); } }
const t = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: 'PUT' })).json();
const ws = new WebSocket(t.webSocketDebuggerUrl); await new Promise(r => ws.onopen = r);
let id = 0; const pend = new Map(); const evs = [];
ws.onmessage = ({ data }) => { const m = JSON.parse(data); if (m.id) pend.get(m.id)?.(m.result ?? m); else evs.push(m.method); };
const call = (method, params = {}) => new Promise(r => { const n = ++id; pend.set(n, r); ws.send(JSON.stringify({ id: n, method, params })); });
const ev = async (e) => (await call('Runtime.evaluate', { expression: e, returnByValue: true, awaitPromise: true })).result?.value;
const pages = { home: '/', services: '/services/', canada: '/countries/canada/' };
const report = [];
for (const [name, path] of Object.entries(pages)) for (const w of [390, 768, 1024, 1440]) {
  await call('Emulation.setDeviceMetricsOverride', { width: w, height: 900, deviceScaleFactor: 1, mobile: w < 700 });
  await call('Page.navigate', { url: `http://localhost:4399${path}` });
  await new Promise(r => setTimeout(r, 1500));
  await ev('document.fonts.ready.then(()=>1)');
  const m = await ev(`(()=>{document.documentElement.style.scrollBehavior='auto';const s=document.getElementById('rcic-members-partners');window.scrollTo(0,s.getBoundingClientRect().top+scrollY-120);const b=s.querySelector('a.btn');const h=s.querySelector('h2');const p=s.querySelector('p.text-lg');const r=s.getBoundingClientRect();const cs=getComputedStyle(h);const br=b.getBoundingClientRect();return {overflowX:document.documentElement.scrollWidth>innerWidth,secW:Math.round(r.width),h2:cs.fontSize,h2color:cs.color,pColor:getComputedStyle(p).color,bg:getComputedStyle(s.firstElementChild.firstElementChild).backgroundImage.slice(0,60),btn:b.getAttribute('href'),btnH:Math.round(br.height),btnW:Math.round(br.width),btnInside:br.right<=innerWidth&&br.left>=0,count:document.querySelectorAll('#rcic-members-partners').length,h1:document.querySelectorAll('h1').length}})()`);
  await new Promise(r => setTimeout(r, 700));
  const shot = await call('Page.captureScreenshot', { format: 'png' });
  writeFileSync(join(out, `${name}-${w}.png`), Buffer.from(shot.data, 'base64'));
  report.push({ name, w, ...m });
}
console.log(JSON.stringify(report, null, 0).replace(/\},\{/g, '},\n{'));
ws.close(); proc.kill(); srv.close(); process.exit(0);
