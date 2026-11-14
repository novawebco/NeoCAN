// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://neocan.net',
  // Bind dev/preview to IPv4 so http://127.0.0.1 and http://localhost both work.
  server: { host: '127.0.0.1' },
  devToolbar: { enabled: false },
  // Old profile URL (renamed to the public-facing name).
  redirects: { '/about/amandeep-singh/': '/about/aman-maan/' },
  vite: { plugins: [tailwindcss()] },
});
