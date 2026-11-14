import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const original = new URL('../src/assets/branding/neocan-logo-original.png', import.meta.url);
const trimmed = await sharp(fileURLToPath(original)).trim({ background: '#ffffff', threshold: 12 }).toBuffer();

for (const placement of ['header', 'footer']) {
  await sharp(trimmed)
    .resize({ width: 1100, withoutEnlargement: true })
    .webp({ quality: 90, effort: 6 })
    .toFile(fileURLToPath(new URL(`../src/assets/branding/neocan-logo-${placement}.webp`, import.meta.url)));
}

const background = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#071f49"/>
  <rect x="65" y="125" width="1070" height="340" rx="22" fill="white"/>
  <text x="65" y="550" fill="white" font-family="Arial, sans-serif" font-size="30">Sri Ganganagar, Rajasthan</text>
</svg>`);
const logo = await sharp(trimmed).resize({ width: 980 }).png().toBuffer();
await sharp(background)
  .composite([{ input: logo, gravity: 'centre' }])
  .png()
  .toFile(fileURLToPath(new URL('../public/og-neocan.png', import.meta.url)));
