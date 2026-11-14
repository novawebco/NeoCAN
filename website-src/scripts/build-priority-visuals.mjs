// Original NeoCAN-branded abstract visuals (navy/red/white). No photographs, landmarks, people or office imagery.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const out = (n) => fileURLToPath(new URL(`../src/assets/editorial/${n}.webp`, import.meta.url));
const W = 1200, H = 750;
const defs = `<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#123068"/><stop offset="1" stop-color="#03152f"/></linearGradient>
<radialGradient id="glow" cx=".72" cy=".35" r=".6"><stop offset="0" stop-color="#e93435" stop-opacity=".28"/><stop offset="1" stop-color="#e93435" stop-opacity="0"/></radialGradient></defs>`;
const frame = (inner) => `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">${defs}<rect width="${W}" height="${H}" fill="url(#bg)"/><rect width="${W}" height="${H}" fill="url(#glow)"/>${inner}<rect x="0" y="${H - 10}" width="${W}" height="10" fill="#e93435"/></svg>`;

// Globe with graticule; rot shifts the meridians so each destination card is visibly distinct.
function globe(cx, cy, r, rot) {
  let g = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#071f49" stroke="#fff" stroke-opacity=".55" stroke-width="3"/>`;
  for (let i = -2; i <= 2; i++) { const ry = r * Math.abs(Math.sin((i * Math.PI) / 6 + 0.001)); g += `<ellipse cx="${cx}" cy="${cy + (i * r) / 3}" rx="${Math.sqrt(Math.max(r * r - ((i * r) / 3) ** 2, 1))}" ry="${ry * 0.18 + 6}" fill="none" stroke="#fff" stroke-opacity=".22" stroke-width="2"/>`; }
  for (let i = 0; i < 6; i++) { const rx = Math.abs(Math.cos(((i * 30 + rot) * Math.PI) / 180)) * r; g += `<ellipse cx="${cx}" cy="${cy}" rx="${rx + 2}" ry="${r}" fill="none" stroke="#fff" stroke-opacity=".22" stroke-width="2"/>`; }
  return g;
}
const arc = (x1, y1, x2, y2, lift) => `<path d="M${x1} ${y1} Q${(x1 + x2) / 2} ${Math.min(y1, y2) - lift} ${x2} ${y2}" fill="none" stroke="#ff8080" stroke-width="6" stroke-linecap="round" stroke-dasharray="2 16"/><circle cx="${x1}" cy="${y1}" r="11" fill="#fff"/><circle cx="${x2}" cy="${y2}" r="13" fill="#e93435" stroke="#fff" stroke-width="4"/>`;
const mono = (t) => `<text x="70" y="650" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="150" fill="#fff" fill-opacity=".92" letter-spacing="8">${t}</text><rect x="74" y="682" width="120" height="8" rx="4" fill="#e93435"/>`;

const countries = { cyprus: ['CY', 20, 880, 320], italy: ['IT', 50, 860, 280], netherlands: ['NL', 80, 900, 250], russia: ['RU', 110, 840, 230], 'czech-republic': ['CZ', 140, 870, 300], greece: ['GR', 10, 890, 340], mauritius: ['MU', 170, 850, 400] };
const jobs = [];
for (const [slug, [code, rot, x2, y2]] of Object.entries(countries)) {
  jobs.push([`${slug}-destination-research-pending-card`, frame(`${globe(760, 330, 250, rot)}${arc(430, 520, x2, y2, 160)}${mono(code)}`)]);
}
// Immigration: globe with route and a generic document card.
jobs.push(['immigration-enquiry-route-document', frame(`${globe(820, 330, 240, 40)}${arc(560, 520, 880, 250, 150)}<g transform="translate(120 170)"><rect width="330" height="420" rx="26" fill="#fff"/><rect x="40" y="50" width="150" height="16" rx="8" fill="#071f49"/><rect x="40" y="95" width="250" height="10" rx="5" fill="#c9d3e3"/><rect x="40" y="125" width="220" height="10" rx="5" fill="#c9d3e3"/><rect x="40" y="155" width="240" height="10" rx="5" fill="#c9d3e3"/><circle cx="95" cy="300" r="52" fill="none" stroke="#e93435" stroke-width="8"/><path d="M70 300l18 18 36-40" fill="none" stroke="#e93435" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/></g>`)]);
// Visa: generic passport-style booklet with a stamp ring; no emblem or national marks.
jobs.push(['visa-enquiry-passport-stamp', frame(`<g transform="translate(330 90)"><rect width="540" height="570" rx="34" fill="#fff"/><rect x="26" y="26" width="488" height="518" rx="22" fill="none" stroke="#071f49" stroke-width="4"/><circle cx="270" cy="210" r="84" fill="none" stroke="#071f49" stroke-width="8"/><ellipse cx="270" cy="210" rx="36" ry="84" fill="none" stroke="#071f49" stroke-width="5"/><path d="M186 210h168M200 165h140M200 255h140" stroke="#071f49" stroke-width="5" fill="none"/><rect x="130" y="350" width="280" height="16" rx="8" fill="#071f49"/><rect x="170" y="390" width="200" height="10" rx="5" fill="#c9d3e3"/><g transform="rotate(-14 400 470)"><rect x="300" y="440" width="190" height="64" rx="12" fill="none" stroke="#e93435" stroke-width="7"/><rect x="316" y="462" width="110" height="12" rx="6" fill="#e93435"/></g></g>`)]);

for (const [name, svg] of jobs) {
  await sharp(Buffer.from(svg)).resize({ width: 1200 }).webp({ quality: 82, effort: 6 }).toFile(out(name));
  console.log('wrote', name);
}
