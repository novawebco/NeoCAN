// Static SEO QA for the built site (dist/). Content-track script; does not touch images or visuals.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const site = 'https://neocan.net';
const pages = [];
const walk = (d) => { for (const n of readdirSync(d)) { const f = join(d, n); if (statSync(f).isDirectory()) walk(f); else if (n.endsWith('.html')) pages.push(f); } };
walk(root);

const errors = [], warnings = [];
const titles = new Map(), descs = new Map();
const decode = (s) => s.replace(/&#39;|&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const visible = (h) => decode(h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));

for (const file of pages) {
  const route = '/' + relative(root, file).split(sep).join('/').replace(/index\.html$/, '');
  const html = readFileSync(file, 'utf8');
  if (route === '/about/amandeep-singh/') continue; // redirect stub
  const is404 = route === '/404.html';
  const title = decode((html.match(/<title>([^<]*)<\/title>/) || [])[1] || '');
  const desc = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '');
  const canon = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
  const ogUrl = (html.match(/<meta property="og:url" content="([^"]*)"/) || [])[1];
  const expected = is404 ? null : site + route;

  if (!title) errors.push(`${route}: missing title`); else if (title.length > 60) warnings.push(`${route}: title ${title.length} chars`);
  if (!desc) errors.push(`${route}: missing description`); else if (desc.length < 70 || desc.length > 160) warnings.push(`${route}: description ${desc.length} chars`);
  if (titles.has(title)) errors.push(`${route}: duplicate title with ${titles.get(title)}`); else titles.set(title, route);
  if (descs.has(desc)) errors.push(`${route}: duplicate description with ${descs.get(desc)}`); else descs.set(desc, route);
  if (!canon) errors.push(`${route}: missing canonical`);
  else if (expected && canon !== expected) errors.push(`${route}: canonical ${canon} != ${expected}`);
  if (canon && ogUrl && canon !== ogUrl) errors.push(`${route}: og:url differs from canonical`);
  if (!/<meta name="robots" content="noindex, nofollow"/.test(html)) errors.push(`${route}: noindex missing`);

  // Heading hierarchy: exactly one h1, no skipped levels in document order.
  const heads = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => +m[1]);
  if (heads.filter((x) => x === 1).length !== 1) errors.push(`${route}: ${heads.filter((x) => x === 1).length} h1 elements`);
  for (let i = 1; i < heads.length; i++) if (heads[i] - heads[i - 1] > 1) { warnings.push(`${route}: heading jump h${heads[i - 1]} to h${heads[i]}`); break; }

  // Structured data: parses, no rating/review markup, FAQ schema matches visible questions.
  const text = visible(html);
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  for (const b of blocks) {
    let data;
    try { data = JSON.parse(decode(b)); } catch (e) { errors.push(`${route}: invalid JSON-LD`); continue; }
    for (const node of Array.isArray(data) ? data : [data]) {
      const type = node['@type'];
      if (/AggregateRating|Review/.test(JSON.stringify(node))) errors.push(`${route}: rating/review schema present`);
      if (type === 'FAQPage') {
        for (const q of node.mainEntity || []) if (!text.includes(q.name)) errors.push(`${route}: FAQ schema question not visible: ${q.name.slice(0, 50)}`);
      }
      if (type === 'ProfessionalService' || type === 'LocalBusiness') {
        const a = node.address || {};
        if (node.name !== 'NeoCAN Global Migration Consulting') errors.push(`${route}: schema name mismatch`);
        if (a.streetAddress !== '69, H Block' || a.postalCode !== '335001' || a.addressLocality !== 'Sri Ganganagar') errors.push(`${route}: schema address mismatch`);
        if (node.telephone !== '+919950529700') errors.push(`${route}: schema phone mismatch`);
        const h = (node.openingHoursSpecification || [])[0] || {};
        if (h.opens !== '09:00' || h.closes !== '18:00' || (h.dayOfWeek || []).length !== 7) errors.push(`${route}: schema hours mismatch`);
      }
    }
  }
  const ogImage = (html.match(/<meta property="og:image" content="([^"]*)"/) || [])[1];
  if (ogImage && ogImage.startsWith(site)) { const p = join(root, ogImage.slice(site.length)); if (!existsSync(p)) errors.push(`${route}: og:image file missing ${ogImage}`); }
}

const sitemap = existsSync(join(root, 'sitemap-index.xml')) || existsSync(join(root, 'sitemap.xml'));
const robots = existsSync(join(root, 'robots.txt'));
console.log(`${pages.length} HTML files checked; sitemap: ${sitemap ? 'present' : 'not generated (expected while noindex)'}; robots.txt: ${robots ? 'present' : 'absent (expected while noindex)'}`);
console.log(`ERRORS: ${errors.length ? '\n' + errors.join('\n') : 'none'}`);
console.log(`WARNINGS: ${warnings.length ? '\n' + warnings.join('\n') : 'none'}`);
process.exit(errors.length ? 1 : 0);
