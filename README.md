# NeoCAN

NeoCAN website source lives in [`website-src/`](website-src/). It is an Astro
static site with its dependencies locked in `package-lock.json`.

```sh
cd website-src
npm ci
npm run build
node scripts/qa.mjs
node scripts/scope-qa.mjs
node scripts/seo-qa.mjs
```

The site currently emits `noindex, nofollow` and is not ready for public
indexing. Pushing `main` runs the GitHub Pages workflow, which builds the site
and adapts internal links for `https://novawebco.github.io/NeoCAN/`.
