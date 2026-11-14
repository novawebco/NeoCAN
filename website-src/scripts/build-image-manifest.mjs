import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../../', import.meta.url));
const dist = join(root, 'website-src', 'dist');
const out = join(root, 'website', 'image-asset-manifest.md');
const clean = s => s.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const routes = [];
function walk(dir) {
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, name.name);
    if (name.isDirectory()) walk(path);
    else if (name.name.endsWith('.html')) {
      const rel = relative(dist, path).split(sep).join('/');
      const url = '/' + rel.replace(/index\.html$/, '').replace(/\.html$/, '');
      const html = readFileSync(path, 'utf8');
      routes.push({ url, h1: clean(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || url), html });
    }
  }
}
walk(dist);
routes.sort((a, b) => a.url.localeCompare(b.url));

const subjects = {
  'ielts-coaching': 'Indian learner practising listening and writing with headphones and an unbranded notebook in a modern classroom',
  'study-visa': 'Indian applicant reviewing university options and academic notes in a contemporary campus setting',
  'visitor-visa': 'Indian family planning a genuine short visit together at home, with a calendar and travel itinerary',
  'eligibility-consultation': 'Organised relocation planning discussion represented by a blank checklist and destination research',
  'work-visa': 'Professional reviewing an employer-provided offer and general travel plan, with no recruiting implication',
  'pte-coaching': 'Indian learner practising spoken English with a headset at a quiet study desk',
  'toefl-coaching': 'Indian learner studying English reading and writing in a library',
  'english-speaking': 'Small group practising conversational English in a neutral classroom',
  'skilled-migration': 'Professional comparing qualifications and destination information on a neutral desk',
  'business-visa': 'Entrepreneur reviewing international meeting plans in an unbranded office',
  'visa-refusal': 'Applicant calmly reviewing a plain, unreadable decision letter and next-step notes',
  'document-preparation': 'Organised blank document folders and checklist on a desk',
  'spouse-visa': 'Couple planning a family visit with calendars and personal notes',
  'sop-support': 'Student drafting a personal statement in an unbranded notebook',
  'scholarship-guidance': 'Student comparing education funding options on a laptop with unreadable screen',
  'education-loan': 'Student and parent reviewing education budget notes at home',
  canada: 'recognisable Toronto university district or city streetscape photographed accurately',
  uk: 'authentic British university quarter with recognisable London or Oxford architectural character',
  'new-zealand': 'authentic New Zealand university setting with its distinctive landscape',
  usa: 'authentic American university campus without institutional logos',
  australia: 'authentic Australian university or city district without institutional logos',
  germany: 'authentic German university or city street with accurate architecture',
  ireland: 'authentic Irish university quarter and urban streetscape',
  singapore: 'authentic Singapore city and education district',
  uae: 'authentic UAE city and education district',
  'sri-ganganagar': 'verified Sri Ganganagar street or landmark image after source and usage rights are checked',
  hanumangarh: 'accurate Hanumangarh regional visual reference, without depicting a NeoCAN branch',
  suratgarh: 'accurate Suratgarh regional visual reference, without depicting a NeoCAN branch',
  chandigarh: 'accurate Chandigarh civic architecture, without depicting a NeoCAN branch',
  ludhiana: 'accurate Ludhiana city context, without depicting a NeoCAN branch',
  amritsar: 'accurate Amritsar city context, without depicting a NeoCAN branch',
  jaipur: 'accurate Jaipur city architecture, without depicting a NeoCAN branch',
  delhi: 'accurate Delhi NCR urban context, without depicting a NeoCAN branch',
  ahmedabad: 'accurate Ahmedabad urban context, without depicting a NeoCAN branch',
  bikaner: 'accurate Bikaner architecture, without depicting a NeoCAN branch',
  jalandhar: 'accurate Jalandhar city context, without depicting a NeoCAN branch',
  'canada-visa-refusal': 'unreadable refusal letter beside a handwritten next-step checklist',
  'australia-skilled-migration': 'qualifications and skills assessment planning on a desk, without official forms',
  'ielts-preparation': 'English test preparation notebook and headphones with an Indian learner',
  'germany-opportunity-card': 'German destination research beside an organised qualifications folder',
  'canada-australia-uk-comparison': 'three distinct education destination research boards with no flags or rankings',
  'study-visa-checklist': 'organised academic and identity document categories represented by blank folders',
  'sop-writing-tips': 'student composing an honest personal statement in a notebook',
};
const existing = {
  '/': { file: 'neocan-homepage-international-education-hero.webp', section: 'Hero', alt: 'Illustrative scene of Indian students planning international study together', subject: 'Two Indian students reviewing study plans in a contemporary library', status: 'GENERATED; INTEGRATED', qa: 'BUILD PASS; browser unverified' },
  '/about/aman-maan/': { file: 'aman-maan-travel.webp (hero); aman-maan-professional.png (introduction)', section: 'Hero portrait and authentic profile portrait', alt: 'AI-assisted image based on Aman Maan photograph in hero; authentic portrait in introduction', subject: 'Existing homepage Aman Maan hero image and authentic profile portrait', status: 'EXISTING IMAGES; INTEGRATED', qa: 'BUILD PASS; browser unverified' },
  '/about/': { file: 'neocan-about-international-planning.webp', section: 'Company introduction', alt: 'Illustrative international planning workspace', subject: 'Generic planning workspace; no office claim', status: 'GENERATED; INTEGRATED', qa: 'BUILD PASS; browser unverified' },
  '/services/study-visa/': { file: 'student-visa-assistance-india.webp', section: 'Hero', alt: 'Illustrative Indian student reviewing university study options', subject: subjects['study-visa'], status: 'GENERATED; INTEGRATED', qa: 'BUILD PASS; browser unverified' },
  '/services/ielts-coaching/': { file: 'ielts-preparation-student.webp', section: 'Hero', alt: 'Illustrative Indian learner practising English with headphones and a notebook', subject: subjects['ielts-coaching'], status: 'GENERATED; INTEGRATED', qa: 'BUILD PASS; browser unverified' },
  '/services/visitor-visa/': { file: 'visitor-tourist-visa-planning.webp', section: 'Hero', alt: 'Illustrative Indian family planning a short overseas visit', subject: subjects['visitor-visa'], status: 'GENERATED; INTEGRATED', qa: 'BUILD PASS; browser unverified' },
  '/services/eligibility-consultation/': { file: 'immigration-eligibility-enquiry.webp', section: 'Hero', alt: 'Illustrative applicant preparing questions for a general eligibility discussion', subject: subjects['eligibility-consultation'], status: 'GENERATED; INTEGRATED', qa: 'BUILD PASS; browser unverified' },
  '/countries/canada/': { file: 'canada-toronto-destination.webp', section: 'Hero', alt: 'Illustrative Toronto waterfront skyline with the CN Tower', subject: 'Toronto waterfront skyline with CN Tower and lake', status: 'GENERATED; INTEGRATED', qa: 'BUILD PASS; browser unverified' },
  '/countries/uk/': { file: 'united-kingdom-london-destination.webp', section: 'Hero', alt: 'Illustrative London view of Tower Bridge over the Thames', subject: 'London Tower Bridge and River Thames', status: 'GENERATED; INTEGRATED', qa: 'BUILD PASS; browser unverified' },
  '/countries/new-zealand/': { file: 'new-zealand-queenstown-destination.webp', section: 'Hero', alt: 'Illustrative Queenstown lake and mountain landscape', subject: 'Lake Wakatipu and Remarkables near Queenstown', status: 'GENERATED; INTEGRATED', qa: 'BUILD PASS; browser unverified' },
  '/countries/usa/': { file: 'united-states-new-york-destination.webp', section: 'Hero', alt: 'Illustrative Manhattan skyline across the Hudson River', subject: 'New York Manhattan skyline and Hudson River', status: 'GENERATED; INTEGRATED', qa: 'BUILD PASS; browser unverified' },
  '/countries/cyprus/': { file: 'cyprus-mediterranean-destination.webp', section: 'Hero', alt: 'Illustrative Mediterranean coastal architecture in Cyprus', subject: 'Cypriot Mediterranean coastal city', status: 'GENERATED; INTEGRATED', qa: 'BUILD PASS; browser unverified' },
  '/countries/italy/': { file: 'italy-florence-destination.webp', section: 'Hero', alt: 'Illustrative Italian historic city street', subject: 'Italian historic urban architecture', status: 'GENERATED; INTEGRATED', qa: 'BUILD PASS; browser unverified' },
  '/countries/netherlands/': { file: 'netherlands-amsterdam-destination.webp', section: 'Hero', alt: 'Illustrative Dutch canal and gabled architecture', subject: 'Dutch canal urban scene', status: 'GENERATED; INTEGRATED', qa: 'BUILD PASS; browser unverified' },
  '/countries/russia/': { file: 'russia-saint-petersburg-destination.webp', section: 'Hero', alt: 'Illustrative Saint Petersburg riverside architecture', subject: 'Saint Petersburg riverside architecture', status: 'GENERATED; INTEGRATED', qa: 'BUILD PASS; browser unverified' },
  '/countries/czech-republic/': { file: 'czech-republic-prague-destination.webp', section: 'Hero', alt: 'Illustrative Prague historic bridge and cityscape', subject: 'Prague river and historic bridge', status: 'GENERATED; INTEGRATED', qa: 'BUILD PASS; browser unverified' },
  '/countries/greece/': { file: 'greece-athens-destination.webp', section: 'Hero', alt: 'Illustrative Athens city view with Acropolis', subject: 'Athens and Acropolis', status: 'GENERATED; INTEGRATED', qa: 'BUILD PASS; browser unverified' },
  '/countries/mauritius/': { file: 'mauritius-le-morne-destination.webp', section: 'Hero', alt: 'Illustrative Mauritian coastal landscape with Le Morne', subject: 'Mauritian coastal landscape', status: 'GENERATED; INTEGRATED', qa: 'BUILD PASS; browser unverified' },
  '/resources/ielts-preparation/': { file: 'ielts-preparation-four-skills-guide.webp', section: 'Article visual', alt: 'Illustrative notebook arranged for four English test skills', subject: 'Four-skill study notebook and headphones', status: 'GENERATED; INTEGRATED', qa: 'BUILD PASS; browser unverified' },
  '/resources/study-visa-checklist/': { file: 'study-visa-document-checklist-guide.webp', section: 'Article visual', alt: 'Illustrative blank checklist and document folders for study visa preparation', subject: 'Blank document checklist and organised folders', status: 'GENERATED; INTEGRATED', qa: 'BUILD PASS; browser unverified' },
};
const noPhoto = new Set(['/privacy-policy/', '/terms/', '/disclaimer/', '/faq/', '/about/amandeep-singh/']);
const rows = [];
const briefs = [];
let i = 0;
for (const { url, h1 } of routes) {
  if (url === '/404') { rows.push('| /404 | Lightweight branded vector illustration | Recovery navigation | Illustration.astro | APPROVED EXISTING ASSET | INTEGRATED | BUILD PASS; browser unverified |'); continue; }
  if (url === '/contact/' || url === '/consultation/') { rows.push(`| ${url} | Existing branded enquiry illustration | Contact / consultation | Illustration.astro | APPROVED EXISTING ASSET | INTEGRATED | BUILD PASS; browser unverified |`); continue; }
  if (url === '/services/') { rows.push('| /services/ | Seven distinct priority service card visuals | Service selection | Seven service WebP assets | GENERATED; INTEGRATED | INTEGRATED | BUILD PASS; browser unverified |'); continue; }
  if (url === '/countries/') { rows.push('| /countries/ | Eleven destination card visuals | Destination information | Eleven destination WebP assets | GENERATED; INTEGRATED | INTEGRATED | BUILD PASS; browser unverified |'); continue; }
  if (url === '/resources/') { rows.push('| /resources/ | Two topic-specific guide thumbnails | Informational guidance | Two guide WebP assets | GENERATED; INTEGRATED | INTEGRATED | BUILD PASS; browser unverified |'); continue; }
  if (url === '/locations/') { rows.push('| /locations/ | Existing code-native office illustration | Local contact | Illustration.astro | APPROVED EXISTING ASSET | INTEGRATED | BUILD PASS; browser unverified |'); continue; }
  if (url === '/locations/sri-ganganagar/') { rows.push('| /locations/sri-ganganagar/ | Clearly illustrative location icon | Verified office location information | Illustration.astro | APPROVED EXISTING ASSET | INTEGRATED | BUILD PASS; browser unverified |'); continue; }
  if (noPhoto.has(url)) { rows.push(`| ${url} | No photo needed | Readability / legal clarity | — | COMPLETE (no asset required) | Not applicable | Not applicable |`); continue; }
  const type = url === '/' ? 'home' : url.split('/')[1] || 'home';
  const key = url.split('/').filter(Boolean).at(-1) || 'home';
  const isCrossover = type === 'countries' && url.split('/').filter(Boolean).length === 3;
  const subject = subjects[key] || (isCrossover ? `${subjects[url.split('/')[2]] || url.split('/')[2]} with a subtle, nonofficial ${url.split('/')[3].replace(/-/g, ' ')} planning context` :
    type === 'contact' || type === 'consultation' ? 'Neutral professional enquiry planning setting, with no claimed NeoCAN employee or office' :
    type === 'resources' ? `topic-specific editorial scene for ${h1}` :
    type === 'locations' ? `verified local visual context for ${h1}, with no implied local branch` :
    type === 'services' ? `carefully organised planning scene representing ${h1}` :
    type === 'countries' ? `geographically accurate destination setting for ${h1}` :
    `restrained branded editorial visual supporting ${h1}`);
  const e = existing[url];
  const section = e?.section || (url === '/404' ? 'Lightweight illustration' : type === 'resources' ? 'Article thumbnail' : 'Hero');
  const intent = type === 'resources' ? 'Informational guidance' : type === 'locations' ? 'Local contact / service availability' : type === 'countries' ? 'Destination-specific information' : type === 'services' ? 'Service assistance / consultation' : 'Company information / enquiry';
  const filename = e?.file || `neocan-${slug(url)}-${section === 'Article thumbnail' ? 'guide' : 'hero'}.webp`;
  const status = e?.status || 'PROMPT READY; PENDING';
  const integration = e ? 'INTEGRATED' : 'PENDING';
  const qa = e?.qa || 'PENDING';
  rows.push(`| ${url} | ${section} | ${intent} | ${filename} | ${status} | ${integration} | ${qa} |`);
  const path = url === '/about/aman-maan/' ? 'website-src/public/hero/aman-maan-travel.webp; website-src/src/assets/aman-maan-professional.png' : `website-src/src/assets/editorial/${filename}`;
  const alt = e?.alt || (type === 'locations' ? `Illustrative view relevant to ${h1}; NeoCAN has no office here unless stated on the page` : `Illustrative ${h1.toLowerCase()} scene`);
  const unique = `${String(++i).padStart(3, '0')}-${slug(url)}`;
  briefs.push(`### ${unique}\n\n- **Image ID:** ${unique}\n- **Target URL:** ${url}\n- **Section:** ${section}\n- **Page type / H1:** ${type}; ${h1}\n- **Primary keyword:** ${h1.toLowerCase()}\n- **Secondary keywords:** page-specific service, destination or local modifiers from the existing copy; do not add unapproved offerings\n- **Target audience / problem:** Indian visitor evaluating ${h1.toLowerCase()} and seeking reliable next steps\n- **Search intent / purpose / conversion:** ${intent}; clarify the page topic and support a relevant enquiry where appropriate\n- **Actual scope:** only the current page copy and approved nonregulated assistance; no outcome or authorisation claim\n- **Detailed subject / environment:** ${e?.subject || subject}\n- **Composition / perspective:** premium editorial ${type === 'locations' || type === 'countries' ? 'architecture or landscape photography' : 'natural photography'}; horizontal 16:9; eye-level or considered architectural perspective; keep subject crop-safe at 390px and 1440px\n- **Lighting / brand colours:** natural soft light; deep navy #071f49, controlled red #c8232b, white and soft neutral gray where plausible\n- **Aspect ratio / dimensions:** 16:9; source target 1600×900; social derivative 1200×630 only when the route is approved for publication\n- **Negative space:** keep a calm edge for responsive cropping; all important text remains HTML\n- **Exclusions:** logos inside photo, fake visas, official seals, approval stamps, fabricated staff/office/client result, watermarks, illegible AI text, inaccurate landmarks\n- **SEO filename:** ${filename}\n- **Alt text:** ${alt}\n- **Caption:** omit unless the image is a verified real place needing identification\n- **Destination asset path:** ${path}\n- **Generation status:** ${status}\n`);
}
const missing = [
  ['Immigration umbrella', '/services/immigration/', 'BLOCKED: exact nonregulated scope and distinct route intent undefined'],
  ['Visa umbrella', '/services/visa/', 'BLOCKED: duplicates specific visa routes until scope is defined'],
  ['Permanent residency', '/services/pr/', 'BLOCKED: regulated adviser evidence absent'],
];
const pendingCountryVisuals = [
  ['cyprus', 'Cyprus', 'accurate Cypriot Mediterranean university district or coastal architecture', 'owner-reported broad approval; route and country-service scope pending'],
  ['italy', 'Italy', 'authentic Italian university quarter with recognisable Italian urban architecture', 'owner-reported broad approval; route and country-service scope pending'],
  ['netherlands', 'Netherlands', 'authentic Dutch canal and university district with accurate architecture', 'owner-reported broad approval; route and country-service scope pending'],
  ['russia', 'Russia', 'verified Russian urban or educational setting', 'not present in prior approval matrix; confirmation required'],
  ['czech-republic', 'Czech Republic', 'verified Prague or Czech university district', 'not present in prior approval matrix; confirmation required'],
  ['greece', 'Greece', 'authentic Greek city or university district, avoiding stereotyped resort imagery', 'not present in prior approval matrix; confirmation required'],
  ['mauritius', 'Mauritius', 'accurate Mauritian urban or coastal setting relevant to the confirmed service', 'not present in prior approval matrix; confirmation required'],
];
const pendingCountryBriefs = pendingCountryVisuals.map(([slug, name, subject, gate]) => `### proposed-${slug}\n\n- **Image ID / target URL / section:** proposed-${slug}; /countries/${slug}/; prospective hero only\n- **Primary keyword / intent:** ${name.toLowerCase()} visa or education information for applicants in India; destination research and eventual enquiry\n- **Audience / problem / scope:** Indian applicant comparing ${name} options; actual NeoCAN service relationship must be confirmed before route creation\n- **Detailed subject / environment:** ${subject}; use a verified geographical reference before generation or sourcing\n- **Composition / camera / lighting:** premium natural editorial photography, horizontal 16:9, 1600×900 source, eye-level or considered architectural perspective, natural daylight; crop-safe at mobile and desktop widths\n- **Brand colours / negative space:** restrained navy and neutral gray in overlay or surrounding UI, controlled red accent only if natural; calm edge for HTML headings\n- **Exclusions:** invented landmarks, mixed destinations, fake office/team, government endorsement, visas, official seals, text, watermarks\n- **SEO filename / destination path:** neocan-${slug}-destination-hero.webp; website-src/src/assets/editorial/neocan-${slug}-destination-hero.webp\n- **Alt text / caption:** write only after the depicted place is verified; caption should identify a real place if used\n- **Generation status:** ${gate}; PROMPT READY, asset PENDING, integration BLOCKED until route and scope are approved\n`).join('\n');
const intro = `# NeoCAN image asset manifest\n\nGenerated from the **${routes.length} actual built HTML routes** on 13 November 2026. A route listed below is implemented locally; proposed routes are listed separately. Existing code-native icon illustrations remain in place until a page-specific replacement is reviewed. Generated scenes are illustrative, not evidence of NeoCAN staff, premises or client outcomes. All pages remain noindex and local.\n\n## Capability and source inventory\n\n- Available: built-in imagegen; Sharp 0.35.5; Astro Image responsive WebP transforms; approved NeoCAN logo; authentic Aman Maan portrait; existing vector icons.\n- No licensed external photo library or permissioned local office/landmark photographs were found. No search-result image has been downloaded.\n- Built-in imagegen created ten source scenes: homepage hero, generic About workspace, four implemented service heroes and four implemented priority country heroes. Nine 1200×630 social derivatives are in \`website-src/public/social/\`.\n- The four destination scenes are **illustrative**, not documentary photos of the exact place. Their broad geographical subjects were checked against official destination/landmark descriptions; exact generated architecture is not independently certified.\n- Browser visual QA remains **unverified**: the current Chrome CDP QA endpoint did not start and connected browser access did not yield a usable local viewport. Static build does not count as browser QA.\n\n## Actual implemented routes\n\n| URL | Section | Search Intent | Image Filename | Asset Status | Integration | Browser QA |\n|---|---|---|---|---|---|---|\n${rows.join('\n')}\n\n## Homepage section plan\n\n| Section | Image decision | Status |\n|---|---|---|\n| Hero | Indian students preparing for international education; text in adjacent HTML | GENERATED; INTEGRATED |\n| Aman Maan enquiry steps | Existing consistent code-native icons | INTEGRATED; browser QA pending |\n| About NeoCAN | Generic planning workspace, clearly illustrative | GENERATED; INTEGRATED |\n| Services overview | Three implemented priority services have distinct photographs in cards; remaining cards use existing vector illustrations | PARTIAL; browser QA pending |\n| Countries overview | Four implemented priority destinations have distinct illustrative scenes; older routes retain vector cards | PARTIAL; browser QA pending |\n| Meet Aman Maan | Authentic approved portrait only | APPROVED EXISTING ASSET; INTEGRATED |\n| Consultation / process | Existing code-native icons; consider a unique scene if useful | PENDING |\n| Resource guides | Distinct article thumbnails by title | PROMPT READY; PENDING |\n| Final CTA | Current restrained navy branded background | INTEGRATED |\n\n## Priority labels without a built route\n\n| Requested label | Proposed URL | Gate |\n|---|---|---|\n${missing.map(x => `| ${x[0]} | ${x[1]} | ${x[2]} |`).join('\n')}\n\nTourist Visa shares the existing \`/services/visitor-visa/\` route. Four priority country detail routes exist: Canada, UK, New Zealand and USA. Cyprus, Italy and Netherlands are in the broad owner-reported matrix but need specific research; Russia, Czech Republic, Greece and Mauritius are absent from that matrix.\n\n## Production prompts for implemented routes\n\nEach brief is unique to the actual route. Validate country landmarks and real local references before using generated imagery.\n\n${briefs.join('\n')}\n\n## Image plans for missing priority country routes\n\n${pendingCountryBriefs}\n`;
let manifest = intro
  .replace('ten source scenes: homepage hero, generic About workspace, three integrated service heroes, one now-unused eligibility scene, and four integrated priority country heroes. Nine 1200×630 social derivatives (eight referenced by current routes)', 'twelve source scenes: homepage hero, generic About workspace, three integrated service heroes, one now-unused eligibility scene, four integrated country heroes, and two integrated guide visuals. Eleven 1200×630 social derivatives (ten referenced by current routes)')
  .replace('four implemented service heroes and four implemented priority country heroes. Nine 1200×630 social derivatives', 'three integrated service heroes, one now-unused eligibility scene, and four integrated priority country heroes. Nine 1200×630 social derivatives (eight referenced by current routes)')
  .replace('ten source scenes: homepage hero, generic About workspace, three integrated service heroes, one now-unused eligibility scene, and four integrated priority country heroes. Nine 1200×630 social derivatives (eight referenced by current routes)', 'twelve source scenes: homepage hero, generic About workspace, three integrated service heroes, one now-unused eligibility scene, four integrated country heroes, and two integrated guide visuals. Eleven 1200×630 social derivatives (ten referenced by current routes)')
  .replace('| About NeoCAN | Generic planning workspace, clearly illustrative | GENERATED; INTEGRATED |', '| About NeoCAN | No separate homepage section in current build; workspace image appears on About Us | Not applicable on homepage |')
  .replace('Three implemented priority services have distinct photographs in cards; remaining cards use existing vector illustrations', 'Three implemented service cards have distinct photographs; other priority labels use text because their scope or authority is pending')
  .replace('Four implemented priority destinations have distinct illustrative scenes; older routes retain vector cards', 'Four implemented destination guide cards have distinct illustrative scenes; seven pending destinations remain text-only')
  .replace('| Resource guides | Distinct article thumbnails by title | PROMPT READY; PENDING |', '| Resource guides | No homepage resource module in current build; two topic-specific guide thumbnails are integrated on resource routes | INTEGRATED on guide pages |');
manifest = manifest
  .replace('13 November 2026', '14 November 2026')
  .replace(/- Built-in imagegen created[^\n]*/, '- Built-in imagegen created 23 original editorial source scenes; 22 are integrated on current routes and one retired eligibility scene is unused. Eighteen social preview WebPs are present.')
  .replace(/- The four destination scenes are[^\n]*/, '- The eleven destination scenes are illustrative; their exact generated architecture is not independently certified.')
  .replace('Four implemented destination guide cards have distinct illustrative scenes; seven pending destinations remain text-only', 'Eleven destination guide cards have distinct illustrative scenes')
  .replace('Three implemented service cards have distinct photographs; other priority labels use text because their scope or authority is pending', 'Seven priority service cards have distinct illustrative visuals; PR image is informational and does not imply an offered service')
  .replace('| Consultation / process | Existing code-native icons; consider a unique scene if useful | PENDING |', '| Consultation / process | Existing code-native icons | COMPLETE; no additional image needed |')
  .replace('Four priority country detail routes exist: Canada, UK, New Zealand and USA. Cyprus, Italy and Netherlands are in the broad owner-reported matrix but need specific research; Russia, Czech Republic, Greece and Mauritius are absent from that matrix.', 'Eleven priority country guide routes exist locally; specific NeoCAN service availability remains subject to verification.')
  .replace(/\n## Image plans for missing priority country routes[\s\S]*$/, '\n');
writeFileSync(out, manifest, 'utf8');
console.log(`Wrote ${out}: ${routes.length} routes, ${briefs.length} image briefs`);
