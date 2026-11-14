// Local QA: route coverage, internal links, H1/title/description, banned claims, leftover demo branding.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const files = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.html')) files.push(p);
  }
})(dist);
const rel = (f) => relative(dist, f).split(sep).join('/');
const toRoute = (f) => '/' + rel(f).replace(/index\.html$/, '').replace(/\.html$/, '');
const routes = new Set(files.map(toRoute));
routes.add('/404'); routes.add('/404/');

const banned = [
  /guarantee[ds]?\s+(visa|approval|success)/i, /100%/, /fastest/i, /government[- ]approved/i,
  /free (first )?consultation/i, /immigway/i, /bravis/i, /lorem ipsum/i, /\d+\+? years of experience/i,
  /licensed immigration consultant/i, /\bfounder\b/i, /\bco-founder\b/i,
];
const negated = /\b(not|no|cannot|never|nor|without)\b/i;
const errors = [];
const warn = [];
let linkCount = 0;
const titles = new Map();
const descriptions = new Map();

for (const f of files) {
  const html = readFileSync(f, 'utf8');
  const page = toRoute(f);
  for (const m of html.matchAll(/<img\b[^>]*\bsrc="(\/[^"]+)"/g)) {
    if (!existsSync(join(dist, m[1].slice(1)))) errors.push(`${page}: missing local image ${m[1]}`);
  }
  for (const m of html.matchAll(/<meta\b[^>]*property="og:image"[^>]*content="https:\/\/neocan\.net(\/[^\"]+)"/g)) {
    if (!existsSync(join(dist, m[1].slice(1)))) errors.push(`${page}: missing social image ${m[1]}`);
  }
  // Astro emits a minimal redirect document for the old owner URL.
  if (page === '/about/amandeep-singh/') {
    if (!html.includes('url=/about/aman-maan/') || !html.includes('name="robots" content="noindex"')) errors.push(`${page}: invalid redirect`);
    continue;
  }
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) errors.push(`${page}: ${h1} <h1> elements`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const desc = html.match(/<meta name="description" content="(.*?)"/)?.[1];
  if (!title) errors.push(`${page}: missing title`);
  else {
    if (title.length > 70) warn.push(`${page}: title length ${title.length}`);
    if (titles.has(title)) errors.push(`${page}: duplicate title with ${titles.get(title)}`);
    titles.set(title, page);
  }
  if (!desc) errors.push(`${page}: missing meta description`);
  else {
    if (desc.length > 170) warn.push(`${page}: description length ${desc.length}`);
    if (descriptions.has(desc)) errors.push(`${page}: duplicate description with ${descriptions.get(desc)}`);
    descriptions.set(desc, page);
  }
  if (!html.includes('name="robots" content="noindex, nofollow"')) errors.push(`${page}: missing noindex`);
  if (!html.includes('rel="canonical"')) errors.push(`${page}: missing canonical`);
  const text = html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ');
  for (const re of banned) {
    const m = text.match(re);
    if (m) {
      const ctx = text.slice(Math.max(0, m.index - 80), m.index + 60).replace(/\s+/g, ' ');
      if (!negated.test(ctx)) errors.push(`${page}: banned phrase "${m[0]}" ...${ctx}...`);
    }
  }
  if (/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(text)) warn.push(`${page}: emoji present`);
  for (const m of html.matchAll(/<img[^>]*>/g)) if (!/alt=/.test(m[0])) errors.push(`${page}: img without alt`);
  for (const m of html.matchAll(/href="(\/[^"#?]*)(?:[#?][^"]*)?"/g)) {
    linkCount++;
    let h = m[1];
    if (/\.(svg|ico|png|jpg|css|js|xml|txt)$/.test(h)) { if (!existsSync(join(dist, h))) errors.push(`${page}: missing asset ${h}`); continue; }
    if (!h.endsWith('/')) h += '/';
    if (!routes.has(h)) errors.push(`${page}: broken link ${m[1]}`);
  }
  for (const m of html.matchAll(/href="#([^"]+)"/g)) if (m[1] !== 'main' && !html.includes(`id="${m[1]}"`)) errors.push(`${page}: dead anchor #${m[1]}`);
  for (const m of html.matchAll(/href="(\/[^"#?]*)#([^"]+)"/g)) {
    const t = join(dist, m[1], 'index.html');
    if (existsSync(t) && !readFileSync(t, 'utf8').includes(`id="${m[2]}"`)) errors.push(`${page}: anchor ${m[1]}#${m[2]} missing`);
  }
  for (const m of html.matchAll(/(?:src|href)="(?!https?:|mailto:|tel:|#|\/)([^"]+)"/g)) warn.push(`${page}: relative url ${m[1]}`);
}

console.log(`pages: ${files.length}, internal links checked: ${linkCount}`);
console.log([...routes].sort().join('\n'));
console.log('\nWARNINGS:', warn.length ? '\n' + [...new Set(warn)].join('\n') : 'none');
console.log('\nERRORS:', errors.length ? '\n' + [...new Set(errors)].join('\n') : 'none');
process.exit(errors.length ? 1 : 0);
