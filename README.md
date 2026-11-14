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
indexing. The repository's `main` branch is the GitHub Pages source; this
project source branch can be reviewed without publishing the site.
