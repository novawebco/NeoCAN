// Adapt the built site for this repository's GitHub Pages project URL.
// Run after build and QA; source routes and canonical/indexing rules stay intact.
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const base = '/NeoCAN';
let pages = 0;

function prefix(value) {
  if (value.startsWith('/') && !value.startsWith('//') && !value.startsWith(`${base}/`)) {
    return base + value;
  }
  return value;
}

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const file = join(dir, name);
    if (statSync(file).isDirectory()) { walk(file); continue; }
    if (file.endsWith('.css')) {
      const css = readFileSync(file, 'utf8').replace(/url\((['"]?)(\/(?!\/|NeoCAN\/)[^)'" ]+)\1\)/g,
        (_, quote, url) => `url(${quote}${prefix(url)}${quote})`);
      writeFileSync(file, css);
      continue;
    }
    if (!file.endsWith('.html')) continue;

    let html = readFileSync(file, 'utf8');
    html = html.replace(/\b(href|src|srcset|action|poster)="([^"]*)"/g, (match, attr, value) => {
      const rewritten = attr === 'srcset'
        ? value.split(',').map((entry) => entry.replace(/^(\s*)(\/\S+)/, (_, space, url) => space + prefix(url))).join(',')
        : prefix(value);
      return `${attr}="${rewritten}"`;
    });
    // Astro's redirect stub uses an HTML refresh rather than an href.
    html = html.replace(/(content="\d+;url=)(\/[^" ]+)/gi, (_, lead, url) => lead + prefix(url));
    if (/\b(?:href|src|action|poster)="\/(?!\/|NeoCAN\/)/.test(html)) {
      throw new Error(`Unprefixed root URL remains in ${file}`);
    }
    writeFileSync(file, html);
    pages++;
  }
}

walk(dist);
writeFileSync(join(dist, '.nojekyll'), '');
console.log(`Prepared ${pages} HTML pages for ${base}/`);
