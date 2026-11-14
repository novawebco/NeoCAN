import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = fileURLToPath(new URL('../', import.meta.url));
const project = fileURLToPath(new URL('../../', import.meta.url));
const sources = [];
function walk(dir, predicate) {
  for (const item of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, item.name);
    if (item.isDirectory()) walk(p, predicate);
    else if (predicate(p)) sources.push(p);
  }
}
walk(join(root, 'src'), p => /\.astro$/.test(p));
const astro = sources.map(p => ({ path: relative(project, p).replaceAll('\\', '/'), body: readFileSync(p, 'utf8') }));
const files = [];
walk(join(root, 'src', 'assets'), p => /\.(png|webp|avif|svg)$/i.test(p));
walk(join(root, 'public'), p => /\.(png|webp|avif|svg|ico)$/i.test(p));
for (const p of sources.filter(p => !p.endsWith('.astro'))) {
  const rel = relative(project, p).replaceAll('\\', '/');
  const name = p.split(/[\\/]/).at(-1);
  let dimensions = 'vector / unknown';
  if (extname(p).toLowerCase() !== '.svg' && extname(p).toLowerCase() !== '.ico') {
    try { const m = await sharp(p).metadata(); dimensions = `${m.width}×${m.height}`; } catch {}
  }
  const uses = astro.filter(f => f.body.includes(name)).map(f => f.path);
  files.push({ rel, name, dimensions, bytes: statSync(p).size, uses });
}
files.sort((a,b) => a.rel.localeCompare(b.rel));
const built = [];
function builtWalk(dir) { for (const item of readdirSync(dir, { withFileTypes: true })) { const p = join(dir, item.name); if (item.isDirectory()) builtWalk(p); else if (p.endsWith('.html')) built.push(p); } }
builtWalk(join(root, 'dist'));
const lines = ['# NeoCAN complete image audit and generation', '', '**Date:** 14 November 2026 (IST)', '', '## Current scope and results', '', `- Built site: ${built.length - 1} Astro pages plus a 404 output (${built.length} HTML files).`, `- Asset inventory: ${files.length} raster/vector files in source assets and public.`, '- Built-in imagegen is available and was used for the editorial assets described below. No image from the design-reference sites was copied.', '- Static build and local route/image checks pass with one existing homepage emoji warning. Responsive browser QA and current before/after screenshots are **unverified** because Chrome debugging and connected local browser access failed.', '- No deployment, production setting change or noindex removal occurred.', '', '## File inventory', '', '| Filename | Dimensions | Format | Size | Source use count | Classification |', '|---|---:|---|---:|---:|---|'];
for (const f of files) {
  const type = extname(f.rel).slice(1).toUpperCase();
  const classification = /logo-original|logo-header|logo-footer|aman-maan-professional/.test(f.name) ? 'APPROVED — KEEP' :
    /pending-card/.test(f.name) ? 'GENERIC — REPLACE (unused old globe card)' :
    /immigration-eligibility-enquiry/.test(f.name) ? 'DUPLICATE — REVIEW (route removed)' :
    f.uses.length === 0 && !f.rel.includes('/social/') ? 'NOT NEEDED / unused — REVIEW' :
    f.rel.includes('/social/') ? 'KEEP locally if referenced; owner review pending' : 'KEEP locally; owner review pending';
  lines.push(`| ${f.rel} | ${f.dimensions} | ${type} | ${(f.bytes/1024).toFixed(1)} KiB | ${f.uses.length} | ${classification} |`);
}
lines.push('', '## Page and section usage', '', '| File | Referenced in Astro source |', '|---|---|');
for (const f of files) lines.push(`| ${f.name} | ${f.uses.join(', ') || 'No direct Astro filename reference (check runtime paths, social metadata or unused status)'} |`);
lines.push('', '## Section audit', '', '- **Homepage:** Current source contains a hero carousel, seven priority service cards, eleven destination cards, RCIC wording, Aman Maan portrait, Google reviews and contact CTA. Genuine portrait and review text remain; no reviewer or RCIC identity photos were invented. Eleven destinations now have distinct illustrative visuals.', '- **Services:** Three implemented detail routes have distinct images: Student Visa, IELTS and shared Visitor/Tourist. Immigration and Visa are umbrella enquiry labels; PR imagery is not an offered-service claim.', '- **Countries:** Eleven current guide routes have distinct illustrative destination views and social previews. These images are illustrative and should not be treated as documentary landmark photographs.', '- **About / contact:** Authentic Aman Maan portrait is retained. The About workspace is illustrative. Contact and consultation use code-native illustrations without fake office or staff photos.', '- **Locations:** Sri Ganganagar remains the only office route. The code-native location icon and address avoid a fabricated branch photograph.', '- **Resources:** Two current draft articles have unique topic visuals and social previews. FAQ, legal and 404 use restrained vectors or no decorative photo.', '', '## Generation, replacement and optimization', '', '- Seven repeated globe destination cards were replaced by seven unique illustrative country scenes on the homepage and country directory; the old globe files remain unused for review.', '- The seven new scenes were saved as WebP at 1200px width without upscaling and have separate 1200×630 social previews. Existing NeoCAN logo and Aman Maan portrait were retained.', '- Astro Image generates responsive widths, sizes and intrinsic dimensions for editorial/card imagery. The public hero carousel uses fixed width/height markup.', '- Pending: exact provenance/approval status of five pre-existing `public/hero` images, final owner review of generated landmark scenes, and live 390/768/1024/1440 viewport checks.', '', '## QA and evidence', '', `- \`npm run build\`: pass, ${built.length - 1} pages plus 404.`, '- `node scripts/qa.mjs`: zero errors; one homepage emoji warning.', '- The Chrome CDP browser QA script could not start its debugging endpoint. No current before/after screenshot pair was captured; previous files in `audit/browser-qa/` predate these changes and are not presented as proof.', '- [Detailed route manifest](../website/image-asset-manifest.md) records implemented vs missing routes and asset status.', '- [Earlier image QA](14-website-image-qa.md) records the work sequence.', '');
const scopeEnd = lines.indexOf('## File inventory');
lines.splice(scopeEnd, 0, '- Seven of seven priority service cards now have distinct integrated WebP visuals on the homepage and Services page. Four new scenes completed Immigration, Visa, PR information and Tourist Visa.', '');
const sectionStart = lines.indexOf('## Section audit');
const qaStart = lines.indexOf('## QA and evidence');
lines.splice(sectionStart, qaStart - sectionStart,
  '## Section audit', '',
  '- **Homepage and Services:** All seven priority labels have distinct card images. Immigration and Visa graphics were replaced, PR gained neutral information imagery, and Tourist Visa gained its own scene. PR imagery does not imply an offered regulated service.',
  '- **Detail services:** Three current detail routes retain distinct images: Student Visa, IELTS and the shared Visitor/Tourist page.',
  '- **Countries:** Eleven guide routes have distinct illustrative destination views and social previews. These are not documentary landmark photographs.',
  '- **About, contact and locations:** The About Aman Maan hero now uses the existing AI-assisted Aman Maan image from the homepage, while the authentic portrait remains in the introduction. Illustrative workspace and code-native icons avoid fabricated staff and offices. Sri Ganganagar remains the only office route.',
  '- **Resources and utility pages:** Two current draft articles have unique topic visuals. FAQ, legal and 404 use restrained vectors or no decorative photo.', '',
  '## Generation, replacement and optimization', '',
  '- Four new 1200px WebP service scenes completed the seven card image set on both main pages.',
  '- Seven repeated globe destination cards were replaced by unique country scenes. Superseded graphics remain unused in source assets.',
  '- Astro Image generates responsive widths, sizes and intrinsic dimensions for card and editorial images.',
  '- No active card image is pending. Review items: provenance of five existing hero images, owner review of illustrative landmarks, and 390/768/1024/1440 browser viewport checks.', '');
writeFileSync(join(project, 'audit', '27-complete-image-audit-and-generation.md'), lines.join('\n'), 'utf8');
console.log(`Wrote image audit for ${files.length} assets and ${astro.length} Astro source files`);
