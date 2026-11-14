import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const pages = [];
function walk(dir) { for (const name of readdirSync(dir)) { const file = join(dir, name); if (statSync(file).isDirectory()) walk(file); else if (name.endsWith('.html')) pages.push(file); } }
walk(root);
const retired = /\b(?:work visa|family visa|spouse visa|PTE|TOEFL|business visa|scholarship|education loan|Australia|Germany|Ireland|Singapore|United Arab Emirates|UAE|France|Spain|Portugal|Malta|Poland|Finland|Sweden|Denmark|Norway|Switzerland|Japan|Mukherjee Nagar)\b/i;
const mapsUrl = readFileSync(new URL('../src/data/business.ts', import.meta.url), 'utf8').match(/maps:\s*'([^']+)'/)[1];
const authStatus = (readFileSync(new URL('../src/data/authorization.ts', import.meta.url), 'utf8').match(/status: '([A-Z_]+)'/) || [])[1];
const licenceClaim = /\bwe are (a )?licen[sc]ed\b|\bneocan is (a )?(licen[sc]ed|registered|authori[sz]ed)\b|\bour licen[sc]ed\b|\blicen[sc]e (number|no\.?)|\bRCIC (number|no\.?)|\bregistration number\b/i;
const errors = [];
for (const file of pages) {
  const route = '/' + relative(root, file).split(sep).join('/').replace(/index\.html$/, '');
  if (route === '/about/amandeep-singh/' || route === '/404.html') continue;
  const html = readFileSync(file, 'utf8');
  const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&(?:amp|nbsp|quot|#\d+);/g, ' ');
  const match = body.match(retired);
  if (match) errors.push(`${route}: retired promotion ${match[0]}`);
  if (authStatus !== 'VERIFIED' && licenceClaim.test(body)) errors.push(`${route}: unverified licence claim wording`);
  if (!html.includes('name="robots" content="noindex, nofollow"')) errors.push(`${route}: noindex missing`);
  if (!html.includes(mapsUrl)) errors.push(`${route}: Maps link missing from footer`);
}
const home = readFileSync(join(root, 'index.html'), 'utf8');
for (const label of ['Immigration', 'Visa', 'IELTS', 'Student Visa', 'PR (Permanent Residency)', 'Visitor Visa', 'Tourist Visa']) if (!home.includes(label)) errors.push(`home missing service ${label}`);
for (const name of ['Canada', 'United Kingdom', 'New Zealand', 'Cyprus', 'United States', 'Italy', 'Netherlands', 'Russia', 'Czech Republic (Czechia)', 'Greece', 'Mauritius']) if (!home.includes(name)) errors.push(`home missing destination ${name}`);
for (const path of ['services/work-visa/', 'countries/australia/', 'countries/canada/study-visa/', 'locations/hanumangarh/']) if (existsSync(join(root, path, 'index.html'))) errors.push(`retired route found ${path}`);
console.log(`${pages.length} HTML files checked; ${errors.length} scope errors`);
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
