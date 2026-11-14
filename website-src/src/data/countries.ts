// Approved destination countries (owner-approved, documentary evidence pending). Detail pages follow the route index phases 1-2.
import type { Faq } from './services';
import { countryExtras } from './countryExtras';

export type RegulatedKind = 'canada' | 'australia' | 'uk' | 'nz' | null;

export interface Country {
  slug: string;
  name: string;
  code: string; // text monogram (no flag emoji)
  group: 'Americas' | 'Europe' | 'Asia-Pacific & Middle East' | 'Africa & Indian Ocean';
  blurb: string;
  intro: string[];
  services: string[];
  considerations: { title: string; text: string }[];
  process: { title: string; text: string }[];
  official: { label: string; url: string }[];
  regulated: RegulatedKind;
  faqs: Faq[];
  seoTitle?: string;
  seoDescription?: string;
  tone: 'navy' | 'red' | 'light';
  // page-job extras (see countryExtras.ts)
  h1?: string; answer?: string; situationsTitle?: string; situations?: { title: string; text: string; points?: string[] }[];
  askTitle?: string; askAman?: string[]; whatsappText?: string; ctaLabel?: string; extraLinks?: { label: string; href: string }[];
  readyTitle?: string; readyText?: string; processTitle?: string;
}

export const regulatedNotices: Record<Exclude<RegulatedKind, null>, string> = {
  canada: 'For Canadian immigration matters, NeoCAN works with a Regulated Canadian Immigration Consultant (RCIC) partner. Aman Maan personally handles PR enquiries, discusses your requirements and coordinates the work. Under Canadian law, paid immigration advice or representation must come from a licensee of the College of Immigration and Citizenship Consultants, a Canadian lawyer or a Quebec notary.',
  australia: 'NeoCAN provides general guidance and helps you organise documents. We are not registered migration agents and do not provide regulated Australian migration advice. For migration advice, consult a registered migration agent (MARA) or a legal practitioner.',
  uk: 'NeoCAN provides general guidance and helps you organise documents. We do not provide regulated UK immigration advice. For advice on your situation, consult an adviser regulated by the Immigration Advice Authority (IAA) or an appropriately regulated solicitor.',
  nz: 'NeoCAN provides general guidance and helps you organise documents. We do not provide regulated New Zealand immigration advice. For immigration advice, consult a licensed immigration adviser or a lawyer.',
};

const historicalCountries: Country[] = [
  {
    slug: 'canada', name: 'Canada', code: 'CA', group: 'Americas', tone: 'red', regulated: 'canada',
    blurb: 'Study permits, visitor visas and work-related application support for Canada.',
    intro: [
      'Canada is a widely chosen destination for international students and workers. Its immigration programmes are published and updated by Immigration, Refugees and Citizenship Canada (IRCC).',
      'NeoCAN can discuss your plans, explain the general application stages and help you organise documents for services such as study permit and visitor visa applications.',
    ],
    services: ['study-visa', 'visitor-visa', 'work-visa', 'ielts-coaching', 'visa-refusal', 'spouse-visa'],
    considerations: [
      { title: 'Study permits', text: 'Study permit applications generally require an acceptance letter from a designated learning institution. Additional requirements may apply and rules change, so check IRCC before applying.' },
      { title: 'Language tests', text: 'Many programmes and categories ask for an approved English test such as IELTS. Check the exact score required for your institution or category.' },
      { title: 'Policy changes', text: 'Canadian policy on international students and work permits has changed frequently. Always confirm current rules on the official IRCC website.' },
    ],
    process: [
      { title: 'Discuss your plan', text: 'We talk through your goals, background and timeline.' },
      { title: 'Choose a route', text: 'We outline the general application type relevant to your plan.' },
      { title: 'Prepare documents', text: 'We help you build and review your document checklist.' },
      { title: 'Follow up', text: 'We stay in touch on next steps while you apply through official channels.' },
    ],
    official: [{ label: 'Immigration, Refugees and Citizenship Canada (IRCC)', url: 'https://www.canada.ca/en/immigration-refugees-citizenship.html' }],
    faqs: [
      { q: 'Can NeoCAN guarantee a Canadian visa?', a: 'No. IRCC alone makes the decision on each application.' },
      { q: 'Can NeoCAN help with PR or other Canadian immigration matters?', a: 'Yes. For Canadian immigration matters, NeoCAN works with a Regulated Canadian Immigration Consultant (RCIC) partner. Aman Maan personally handles PR enquiries, discusses your requirements and coordinates the work. You can check any Canadian immigration consultant on the public register of the College of Immigration and Citizenship Consultants. No outcome is guaranteed; IRCC decides every application.' },
      { q: 'Where can I check current rules?', a: 'On the official IRCC website, linked on this page.' },
    ],
  },
  {
    slug: 'australia', name: 'Australia', code: 'AU', group: 'Asia-Pacific & Middle East', tone: 'navy', regulated: 'australia',
    blurb: 'Student visa and skilled-migration information and document support for Australia.',
    intro: [
      'Australia\'s visa system is administered by the Department of Home Affairs. It covers student, visitor, work and skilled categories.',
      'NeoCAN can explain the general steps of student and visitor applications and help you organise documents. For migration advice, a registered migration agent is required.',
    ],
    services: ['study-visa', 'skilled-migration', 'visitor-visa', 'work-visa', 'ielts-coaching', 'pte-coaching'],
    considerations: [
      { title: 'Student visa', text: 'Student visa applications generally require a confirmation of enrolment and evidence that you meet requirements such as the genuine student requirement. Check Home Affairs for current details.' },
      { title: 'Skilled routes', text: 'Skilled categories typically involve an occupation list, a skills assessment and a points test. These settings are updated by the government.' },
      { title: 'English tests', text: 'IELTS and PTE Academic are among the accepted tests for many categories; check which applies to you.' },
    ],
    process: [
      { title: 'Discuss your plan', text: 'We talk through your goals, background and timeline.' },
      { title: 'Choose a route', text: 'We outline the general visa type relevant to your plan.' },
      { title: 'Prepare documents', text: 'We help you build and review your document checklist.' },
      { title: 'Follow up', text: 'We stay in touch on next steps while you apply through official channels.' },
    ],
    official: [{ label: 'Department of Home Affairs — Australian visas', url: 'https://immi.homeaffairs.gov.au/' }],
    faqs: [
      { q: 'Is NeoCAN a registered migration agent?', a: 'No. We provide general guidance and document support. For migration advice, consult a registered migration agent.' },
      { q: 'Which English tests may be used?', a: 'It depends on the visa. Check the requirement on the Home Affairs website.' },
    ],
  },
  {
    slug: 'uk', name: 'United Kingdom', code: 'UK', group: 'Europe', tone: 'navy', regulated: 'uk',
    blurb: 'Student, visitor and work visa application support for the United Kingdom.',
    intro: [
      'The UK Home Office runs the visa system through GOV.UK. Study and work routes typically need sponsorship from a licensed institution or employer.',
      'NeoCAN can explain the general stages and help you organise documents for your application.',
    ],
    services: ['study-visa', 'work-visa', 'visitor-visa', 'ielts-coaching', 'scholarship-guidance', 'visa-refusal'],
    considerations: [
      { title: 'Student route', text: 'Student visa applications generally require a Confirmation of Acceptance for Studies from a licensed sponsor, plus evidence such as funds and English ability.' },
      { title: 'Work routes', text: 'Skilled Worker applications generally require a certificate of sponsorship from a licensed employer in an eligible occupation.' },
      { title: 'Frequent changes', text: 'UK immigration rules are updated often. Check GOV.UK for current requirements.' },
    ],
    process: [
      { title: 'Discuss your plan', text: 'We talk through your goals and timeline.' },
      { title: 'Choose a route', text: 'We outline the general visa type relevant to you.' },
      { title: 'Prepare documents', text: 'We help you build and review your checklist.' },
      { title: 'Follow up', text: 'We stay in touch on next steps while you apply through official channels.' },
    ],
    official: [{ label: 'GOV.UK — Student visa', url: 'https://www.gov.uk/student-visa' }, { label: 'GOV.UK — Visas and immigration', url: 'https://www.gov.uk/browse/visas-immigration' }],
    faqs: [
      { q: 'Does NeoCAN provide regulated UK immigration advice?', a: 'No. We provide general guidance and document support.' },
      { q: 'Where do I check the latest rules?', a: 'Use the official GOV.UK links on this page.' },
    ],
  },
  {
    slug: 'usa', name: 'United States', code: 'US', group: 'Americas', tone: 'light', regulated: null,
    blurb: 'F-1 student and visitor visa application support for the United States.',
    intro: [
      'US visas are issued through the Department of State at US embassies and consulates. Student and visitor visas involve an application form and an interview.',
      'NeoCAN can explain the general steps and help you prepare your documents and interview materials.',
    ],
    services: ['study-visa', 'visitor-visa', 'toefl-coaching', 'visa-refusal', 'scholarship-guidance', 'sop-support'],
    considerations: [
      { title: 'F-1 student visa', text: 'F-1 applicants generally need a Form I-20 from a SEVP-certified school, pay the SEVIS fee, complete a DS-160 and attend a visa interview.' },
      { title: 'Appointment waiting times', text: 'Waiting times for interview appointments vary by location and time of year. Check official sources.' },
      { title: 'Test requirements', text: 'Universities set their own English test requirements; TOEFL and IELTS are commonly accepted.' },
    ],
    process: [
      { title: 'Discuss your plan', text: 'We talk through your goals and timeline.' },
      { title: 'Choose a route', text: 'We outline the general visa type relevant to you.' },
      { title: 'Prepare documents', text: 'We help you build and review your checklist.' },
      { title: 'Follow up', text: 'We stay in touch on next steps as you move through official steps.' },
    ],
    official: [{ label: 'US Department of State — Visas', url: 'https://travel.state.gov/content/travel/en/us-visas.html' }],
    faqs: [
      { q: 'Can you guarantee a US visa?', a: 'No. Consular officers decide each application.' },
      { q: 'Do you help with TOEFL?', a: 'Yes, see our TOEFL preparation page.' },
    ],
  },
  {
    slug: 'new-zealand', name: 'New Zealand', code: 'NZ', group: 'Asia-Pacific & Middle East', tone: 'navy', regulated: 'nz',
    blurb: 'Student and visitor visa application support for New Zealand.',
    intro: [
      'Immigration New Zealand administers visas for study, work and visits.',
      'NeoCAN can explain the general steps and help organise documents for your application.',
    ],
    services: ['study-visa', 'skilled-migration', 'visitor-visa', 'work-visa', 'pte-coaching', 'ielts-coaching'],
    considerations: [
      { title: 'Student visas', text: 'Student visa applications generally require an offer of place from an approved provider and evidence of funds and identity.' },
      { title: 'Official guidance', text: 'Check Immigration New Zealand for current requirements and fees.' },
    ],
    process: [
      { title: 'Discuss your plan', text: 'We talk through your goals and timeline.' },
      { title: 'Choose a route', text: 'We outline the general visa type relevant to you.' },
      { title: 'Prepare documents', text: 'We help you build and review your checklist.' },
      { title: 'Follow up', text: 'We stay in touch on next steps.' },
    ],
    official: [{ label: 'Immigration New Zealand', url: 'https://www.immigration.govt.nz/' }],
    faqs: [{ q: 'Does NeoCAN provide licensed immigration adviser services for New Zealand?', a: 'No. We provide general guidance and document support.' }],
  },
  {
    slug: 'germany', name: 'Germany', code: 'DE', group: 'Europe', tone: 'red', regulated: null,
    blurb: 'Study, work and Opportunity Card (Chancenkarte) information for Germany.',
    intro: [
      'Germany attracts international students and skilled professionals. The Opportunity Card (Chancenkarte) is a points-based route that lets qualified applicants look for work in Germany.',
      'NeoCAN can explain the general route and help you organise your documents.',
    ],
    services: ['study-visa', 'work-visa', 'skilled-migration', 'document-preparation', 'visitor-visa'],
    considerations: [
      { title: 'Opportunity Card', text: 'The Opportunity Card is points-based and generally considers qualifications, language ability, experience, age and ties to Germany. Check official guidance for current criteria.' },
      { title: 'Study', text: 'German universities set their own admission and language requirements.' },
      { title: 'Official guidance', text: 'The Make it in Germany portal and German missions publish current information.' },
    ],
    process: [
      { title: 'Discuss your plan', text: 'We talk through your goals and timeline.' },
      { title: 'Choose a route', text: 'We outline the relevant route at a general level.' },
      { title: 'Prepare documents', text: 'We help you organise qualification and identity documents.' },
      { title: 'Follow up', text: 'We stay in touch on next steps.' },
    ],
    official: [{ label: 'Make it in Germany', url: 'https://www.make-it-in-germany.com/en/' }],
    faqs: [{ q: 'Can NeoCAN guarantee an Opportunity Card?', a: 'No. Applications are assessed by the German authorities.' }],
  },
  {
    slug: 'ireland', name: 'Ireland', code: 'IE', group: 'Europe', tone: 'navy', regulated: null,
    blurb: 'Study and visitor visa application support for Ireland.',
    intro: [
      'Ireland is an English-speaking EU country with a range of universities and colleges.',
      'NeoCAN can help you understand the general steps and organise documents for your application.',
    ],
    services: ['study-visa', 'visitor-visa', 'work-visa', 'ielts-coaching', 'document-preparation'],
    considerations: [
      { title: 'Study', text: 'Irish institutions set their own admission requirements, and applicants generally need to meet visa documentation requirements published by Irish Immigration.' },
      { title: 'Official guidance', text: 'Check the official Irish Immigration pages for current rules.' },
    ],
    process: [
      { title: 'Discuss your plan', text: 'We talk through your goals and timeline.' },
      { title: 'Choose a route', text: 'We outline the relevant route at a general level.' },
      { title: 'Prepare documents', text: 'We help you build your checklist.' },
      { title: 'Follow up', text: 'We stay in touch on next steps.' },
    ],
    official: [{ label: 'Irish Immigration Service', url: 'https://www.irishimmigration.ie/' }],
    faqs: [{ q: 'Which services apply to Ireland?', a: 'Study, visitor and work application support and language coaching are relevant.' }],
  },
  {
    slug: 'singapore', name: 'Singapore', code: 'SG', group: 'Asia-Pacific & Middle East', tone: 'red', regulated: null,
    blurb: 'Study pass and work pass guidance for Singapore.',
    intro: [
      'Singapore is a regional hub for education and business. Student and work passes are handled by government agencies.',
      'NeoCAN can explain the general process and help you organise documents.',
    ],
    services: ['study-visa', 'work-visa', 'visitor-visa', 'business-visa', 'ielts-coaching'],
    considerations: [
      { title: 'Student pass', text: 'Student\'s Pass applications are generally submitted through the educational institution and processed by ICA.' },
      { title: 'Work passes', text: 'Work passes such as the Employment Pass are generally applied for by the employer through the Ministry of Manpower.' },
    ],
    process: [
      { title: 'Discuss your plan', text: 'We talk through your goals and timeline.' },
      { title: 'Choose a route', text: 'We outline the relevant pass at a general level.' },
      { title: 'Prepare documents', text: 'We help you build your checklist.' },
      { title: 'Follow up', text: 'We stay in touch on next steps.' },
    ],
    official: [{ label: 'Immigration & Checkpoints Authority (ICA)', url: 'https://www.ica.gov.sg/' }, { label: 'Ministry of Manpower (MOM)', url: 'https://www.mom.gov.sg/' }],
    faqs: [{ q: 'Who applies for a Singapore work pass?', a: 'Generally the employer. We can help you prepare your own documents.' }],
  },
  {
    slug: 'uae', name: 'United Arab Emirates', code: 'AE', group: 'Asia-Pacific & Middle East', tone: 'light', regulated: null,
    blurb: 'Work, business and visit visa guidance for the UAE.',
    intro: [
      'The UAE draws professionals and business travellers. Visa categories include visit, employment and business routes.',
      'NeoCAN can explain general steps and help you organise your documents.',
    ],
    services: ['work-visa', 'business-visa', 'visitor-visa', 'document-preparation'],
    considerations: [
      { title: 'Employment visas', text: 'Employment visas are generally sponsored by the employer.' },
      { title: 'Official guidance', text: 'The UAE government portal lists current visa types and requirements.' },
    ],
    process: [
      { title: 'Discuss your plan', text: 'We talk through your goals and timeline.' },
      { title: 'Choose a route', text: 'We outline the relevant route at a general level.' },
      { title: 'Prepare documents', text: 'We help you build your checklist.' },
      { title: 'Follow up', text: 'We stay in touch on next steps.' },
    ],
    official: [{ label: 'UAE Government Portal — Visas', url: 'https://u.ae/en/information-and-services/visa-and-emirates-id' }],
    faqs: [{ q: 'Does NeoCAN place candidates in UAE jobs?', a: 'No. We do not offer overseas job placement.' }],
  },
];

// Other approved destinations — detail pages are not yet built (route index phase 3 / hold).
// The seven further approved priorities need research and service/authorization checks
// before any individual guide or country-service combination is published.
export const pendingCountries = ['Cyprus', 'Italy', 'Netherlands', 'Russia', 'Czech Republic (Czechia)', 'Greece', 'Mauritius'];

const activeSlugs = ['canada', 'uk', 'new-zealand', 'usa'];

// Content-owned, country-specific copy for the four existing guides. Facts are limited to stable,
// official-process basics; every page tells the reader to confirm current rules on the official source.
// Research record and source dates: audit/18-eleven-country-content-research.md (13 Nov 2026).
const guideCopy: Record<string, Pick<Country, 'seoTitle' | 'seoDescription' | 'intro' | 'considerations' | 'faqs' | 'official'>> = {
  canada: {
    seoTitle: 'Canada Study & Visitor Visa Info for India | NeoCAN',
    seoDescription: 'Plain-language guide to Canada study permits and visitor visas for applicants in India, with IRCC links. Ask Aman Maan at NeoCAN, Sri Ganganagar.',
    intro: [
      'Canada’s study permits and visitor visas are decided by Immigration, Refugees and Citizenship Canada (IRCC). Applicants from India generally need a visa or permit before travel, and the rules for international students have changed several times in recent years.',
      'Aman Maan listens to your plans and coordinates your enquiry at NeoCAN in Sri Ganganagar. Whether NeoCAN can assist with a particular Canada service is confirmed individually; this guide is general information, not a promise of eligibility or an outcome.',
    ],
    considerations: [
      { title: 'Study permits', text: 'A study permit application generally starts with an offer from a designated learning institution (DLI). IRCC also sets provincial or territorial attestation and financial-proof requirements that change, so read the current IRCC instructions for your programme level.' },
      { title: 'Visitor visas', text: 'A visitor visa is for a temporary stay such as tourism or visiting family. It does not allow you to study or work beyond what IRCC permits, and an invitation letter does not guarantee approval.' },
      { title: 'English test results', text: 'Many institutions ask for IELTS or another approved English test. The required score is set by the institution or programme, so check it before booking a test.' },
      { title: 'Licensed advice', text: 'The College of Immigration and Citizenship Consultants states that anyone giving Canadian immigration or citizenship advice or representation for a fee or other benefit must be a licensee of the College, a member of a Canadian law society or a member of the Chambre des notaires du Québec, and that unlicensed paid advice is an offence under the College Act. You can check a consultant on the College’s public register.' },
    ],
    faqs: [
      { q: 'Do I need a visa to visit Canada from India?', a: 'Indian citizens generally need a visitor visa (an eTA applies only in limited cases defined by IRCC). Check the IRCC “Visit Canada” tool for your own situation.' },
      { q: 'What do I need before applying for a Canada study permit?', a: 'Usually an acceptance letter from a designated learning institution plus the documents IRCC lists for your programme. The list is updated, so use the current IRCC page.' },
      { q: 'Does NeoCAN offer a Canada visa service?', a: 'Ask Aman Maan to confirm current availability and the exact support for your case. NeoCAN does not guarantee any visa decision. Regulated Canadian immigration representation must come from an authorised licensee, not from this website.' },
    ],
    official: [{ label: 'IRCC — Study in Canada', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html' }, { label: 'IRCC — Visit Canada', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html' }, { label: 'IRCC — Home', url: 'https://www.canada.ca/en/immigration-refugees-citizenship.html' }, { label: 'College of Immigration and Citizenship Consultants (check a licensed consultant)', url: 'https://college-ic.ca/' }],
  },
  uk: {
    seoTitle: 'UK Student & Visitor Visa Info for India | NeoCAN',
    seoDescription: 'General guide to the UK Student visa and Standard Visitor visa for applicants in India, with GOV.UK links. Ask Aman Maan at NeoCAN, Sri Ganganagar.',
    intro: [
      'The UK visa system is run by the Home Office and explained on GOV.UK. Indian nationals generally need a visa before travelling to the UK for study or a visit.',
      'Aman Maan coordinates enquiries at NeoCAN in Sri Ganganagar and confirms what support is available for your case. This page is general destination information, not a promise of any service or visa decision.',
    ],
    considerations: [
      { title: 'Student visa', text: 'A Student visa application normally needs a Confirmation of Acceptance for Studies (CAS) from a licensed student sponsor, plus evidence of funds and English ability set out on GOV.UK.' },
      { title: 'Standard Visitor visa', text: 'A Standard Visitor visa covers short visits such as tourism or seeing family. It generally does not allow work or long study; the allowed activities and stay length are listed on GOV.UK.' },
      { title: 'English requirements', text: 'Some routes need a Secure English Language Test taken at an approved centre. Ask your university which test and score it needs before you book.' },
      { title: 'Rules change', text: 'UK immigration rules, fees and financial requirements are updated often. Always check the current GOV.UK page.' },
    ],
    faqs: [
      { q: 'What do I need for a UK Student visa?', a: 'Typically a CAS from a licensed sponsor, proof of funds and English ability, and the documents GOV.UK lists for your course. Check the current list before applying.' },
      { q: 'Is IELTS needed for the UK?', a: 'It depends on the course and route. Some universities and visa routes require a specific test, so confirm with the institution and GOV.UK.' },
      { q: 'Does NeoCAN provide regulated UK immigration advice?', a: 'No. Immigration advice in the UK must come from an adviser authorised to give it. NeoCAN offers general enquiry coordination; Aman Maan will tell you what it can and cannot help with.' },
    ],
    official: [{ label: 'GOV.UK — Student visa', url: 'https://www.gov.uk/student-visa' }, { label: 'GOV.UK — Standard Visitor visa', url: 'https://www.gov.uk/standard-visitor' }, { label: 'GOV.UK — Visas and immigration', url: 'https://www.gov.uk/browse/visas-immigration' }],
  },
  'new-zealand': {
    seoTitle: 'New Zealand Student & Visitor Visa Info | NeoCAN',
    seoDescription: 'General guide to New Zealand student and visitor visas for applicants in India, with Immigration New Zealand links. Ask Aman Maan at NeoCAN.',
    intro: [
      'Immigration New Zealand (INZ) decides student and visitor visa applications. Indian passport holders generally need a visa before travelling to New Zealand.',
      'Aman Maan coordinates enquiries at NeoCAN in Sri Ganganagar and confirms what support is available for your case. This is general information, not a promise of any service or outcome.',
    ],
    considerations: [
      { title: 'Student visa', text: 'A student visa application generally requires an offer of place from an approved education provider, plus evidence of funds, health and character as described by INZ.' },
      { title: 'Visitor visa', text: 'A visitor visa is for a temporary stay such as tourism or visiting family. INZ lists the permitted activities and the evidence it expects.' },
      { title: 'English test results', text: 'Course providers set their own English requirements; many accept IELTS. Confirm the score with the provider before booking.' },
      { title: 'Licensed advice', text: 'In New Zealand, immigration advice must be given by a licensed immigration adviser or an exempt person such as a lawyer. NeoCAN does not claim to provide licensed advice.' },
    ],
    faqs: [
      { q: 'What do I need to apply for a New Zealand student visa?', a: 'Usually an offer of place, proof of funds and the other documents INZ lists for your course. Check the current INZ requirements before applying.' },
      { q: 'Can a visitor visa be used to study?', a: 'Only very short courses may be permitted. INZ sets the limits, so check the visitor visa conditions before relying on this.' },
      { q: 'Does NeoCAN offer a New Zealand visa service?', a: 'Ask Aman Maan to confirm current availability and exact support. NeoCAN does not guarantee a visa decision and is not presented as a licensed New Zealand immigration adviser.' },
    ],
    official: [{ label: 'Immigration New Zealand — Study', url: 'https://www.immigration.govt.nz/new-zealand-visas/preparing-a-visa-application/studying-in-new-zealand' }, { label: 'Immigration New Zealand — Visit', url: 'https://www.immigration.govt.nz/new-zealand-visas/preparing-a-visa-application/visiting-new-zealand' }, { label: 'Immigration New Zealand — Home', url: 'https://www.immigration.govt.nz/' }],
  },
  usa: {
    seoTitle: 'USA Student & Visitor Visa Info for India | NeoCAN',
    seoDescription: 'General guide to US student (F-1/M-1) and visitor (B-1/B-2) visas for applicants in India, with US government links. Ask Aman Maan at NeoCAN.',
    intro: [
      'US visas are decided by the Department of State through the US Embassy and Consulates in India. Indian citizens need a visa for study and for most visits, and an in-person interview is normally part of the process.',
      'Aman Maan coordinates enquiries at NeoCAN in Sri Ganganagar and confirms what support is available. This is general information, not a promise of any service or visa decision.',
    ],
    considerations: [
      { title: 'Student visas', text: 'F-1 and M-1 student visas generally require admission to a school certified by the Student and Exchange Visitor Program (SEVP) and a Form I-20 from that school. The SEVIS fee and the DS-160 application are part of the process.' },
      { title: 'Visitor visas', text: 'B-1/B-2 visas cover short business or tourism visits. Applicants must show they will return home and cannot work in the US on this visa.' },
      { title: 'Interview and timing', text: 'Appointment availability and wait times vary by consulate and date. Check the official US visa appointment information rather than relying on a general estimate.' },
      { title: 'Who may represent you', text: 'USCIS says only licensed US attorneys, accredited representatives of recognised organisations and supervised law students may represent you before USCIS. NeoCAN is not presented as any of these.' },
      { title: 'Be honest and accurate', text: 'Information in a visa application must be truthful. Be wary of anyone who promises a certain result or offers false documents.' },
    ],
    faqs: [
      { q: 'What is the first step for a US student visa?', a: 'Get admitted to an SEVP-certified school and receive the Form I-20. Then follow the Department of State steps for the DS-160, fees and interview.' },
      { q: 'Is a visa interview required?', a: 'Most applicants attend an interview, but waiver rules exist and change. Check the current US Department of State guidance.' },
      { q: 'Does NeoCAN offer a US visa service?', a: 'Ask Aman Maan to confirm current availability and exact support. NeoCAN cannot guarantee a visa and cannot influence a consular decision.' },
    ],
    official: [{ label: 'US Department of State — Student visa', url: 'https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html' }, { label: 'US Department of State — Visitor visa', url: 'https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html' }, { label: 'US Embassy & Consulates in India', url: 'https://in.usembassy.gov/visas/' }, { label: 'USCIS: find legal services', url: 'https://www.uscis.gov/avoid-scams/find-legal-services' }],
  },
};

// General destination guides for the seven further priority countries (owner-approved priorities).
// These are INFORMATION pages. They do not state that NeoCAN offers any country-specific service.
// Facts come only from official pages read on 13 Nov 2026 (see audit/20); anything not read is sent to the official source.
const genericProcess = [
  { title: 'Share your plan', text: 'Tell Aman Maan your purpose, destination and timing.' },
  { title: 'Check the official route', text: 'Identify the visa category and document list on the official source.' },
  { title: 'Confirm what NeoCAN can do', text: 'Aman Maan confirms whether NeoCAN can assist with your specific case.' },
  { title: 'Follow up', text: 'He oversees communication about the next step.' },
];
const checked = { title: 'Information last checked', text: 'Official pages were last reviewed on 13 November 2026. Rules, fees and appointment windows change, so confirm them on the official source before you act.' };
const availFaq = (name: string) => ({ q: `Does NeoCAN offer a specific ${name} visa service?`, a: 'This page is general destination information. Ask Aman Maan to confirm what NeoCAN can help with for your case. No visa outcome is guaranteed.' });

const newGuides: Country[] = [
  {
    slug: 'cyprus', name: 'Cyprus', code: 'CY', group: 'Europe', tone: 'navy', regulated: null, services: [], process: genericProcess,
    blurb: 'General Cyprus study and visitor information for applicants in India. Ask NeoCAN to confirm current service availability.',
    seoTitle: 'Cyprus Student & Visitor Visa Info for India | NeoCAN',
    seoDescription: 'General guide to studying in or visiting Cyprus from India, based on official sources. Ask Aman Maan at NeoCAN, Sri Ganganagar, about availability.',
    intro: [
      'Cyprus is an EU member state but is not part of the Schengen area, so it applies its own entry rules. Study entry for students from outside the EU is handled through the Civil Registry and Migration Department (CRMD).',
      'Aman Maan coordinates enquiries at NeoCAN in Sri Ganganagar. This guide is general information and does not confirm that NeoCAN offers a Cyprus-specific service.',
    ],
    considerations: [
      { title: 'Student entry', text: 'The Cyprus Ministry of Education states that students from non-EU countries need a visa or entry permit from the Civil Registry and Migration Department. It advises contacting the Cyprus diplomatic mission in your country for entry procedures.' },
      { title: 'Residence permit', text: 'After arrival, the official higher-education page says the student must apply to the CRMD for a residence permit within 10 days.' },
      { title: 'Documents for the entry permit', text: 'The Ministry of Education lists, among others: an acceptance letter for a full-time programme, certified academic and passport copies, a criminal record certificate and medical examinations from your country of residence, a bank letter showing you can cover costs, a receipt for an advance tuition payment of €3,000, and the CRMD application forms. Check the full list before preparing documents.' },
      { title: 'Whether you need a visa', text: 'Check the Cyprus Ministry of Foreign Affairs and CRMD pages for the visa requirement that applies to Indian passport holders and for your purpose of visit.' },
      checked,
    ],
    official: [{ label: 'Cyprus Ministry of Education: applications from non-EU students', url: 'https://highereducation.ac.cy/index.php/en/spoudes-cyprus/aitiseis-ektos-ee' }, { label: 'Cyprus Ministry of Education: required documents', url: 'https://highereducation.ac.cy/en/spoudes-cyprus/apaitoumena-engrafa' }, { label: 'Civil Registry and Migration Department (CRMD)', url: 'https://www.moi.gov.cy/moi/crmd/crmd.nsf/index_en/index_en?OpenDocument' }],
    faqs: [
      { q: 'Is Cyprus part of the Schengen area?', a: 'No. Cyprus is an EU member but has its own entry rules. Check the official Cyprus sources for the visa category that applies to you.' },
      { q: 'Who applies for a student residence permit in Cyprus?', a: 'The Ministry of Education page says the student submits the residence permit application to the CRMD within 10 days of arrival.' },
      availFaq('Cyprus'),
    ],
  },
  {
    slug: 'italy', name: 'Italy', code: 'IT', group: 'Europe', tone: 'red', regulated: null, services: [], process: genericProcess,
    blurb: 'General Italy study and tourist visa information for applicants in India. Ask NeoCAN to confirm current service availability.',
    seoTitle: 'Italy Study & Tourist Visa Info for India | NeoCAN',
    seoDescription: 'General guide to Italy visas for applicants in India: Schengen short stays and study beyond 90 days, with official links. Ask Aman Maan at NeoCAN.',
    intro: [
      'Italy is part of the Schengen area. Short visits of up to 90 days in any 180-day period are covered by a Schengen visa, while longer stays such as a university course use a national visa. Italian visas for Indian applicants are handled through the Italian Embassy and Consulates in India.',
      'Aman Maan coordinates enquiries at NeoCAN in Sri Ganganagar. This guide is general information and does not confirm that NeoCAN offers an Italy-specific service.',
    ],
    considerations: [
      { title: 'Short visits', text: 'The Italian Ministry of Foreign Affairs describes the Schengen (type C) visa for stays of up to 90 days in any 180-day period. It can be issued for one, two or multiple entries, and holding a visa does not give an automatic right of entry. Check the Italian mission for the document list, fees and appointment process.' },
      { title: 'Study beyond 90 days', text: 'The national (type D) visa covers stays over 90 days. Italy’s visa portal lists study types such as a single university course, university enrolment, post-graduate study, professional training and exchange programmes, and states that a type D visa lasts 91 to 365 days. Confirm the document checklist with the Italian mission.' },
      { title: 'Where to read the rules', text: 'Italy’s visa portal, Vistoperitalia, has a guided questionnaire. The Consulate in Kolkata states that Italian visas for India are issued by the Embassy in New Delhi or the Consulates in Kolkata, Mumbai or Bangalore, lists VFS Global application points for its own area, and says using the outsourcing partner is not mandatory. Check which office covers your place of residence.' },
      checked,
    ],
    official: [{ label: 'Italian Ministry of Foreign Affairs: types of visa and duration', url: 'https://www.esteri.it/en/servizi-opportunita/ingressosoggiornoinitalia/visto_ingresso/tipologie_visto_durata/' }, { label: 'Vistoperitalia: Italian visa portal', url: 'https://vistoperitalia.esteri.it/home.aspx' }, { label: 'Consulate General of Italy, Kolkata: visa information', url: 'https://conscalcutta.esteri.it/en/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/visti' }, { label: 'Italian Ministry of Foreign Affairs', url: 'https://www.esteri.it/en/' }],
    faqs: [
      { q: 'Is a Schengen visa enough for a full-time Italian degree?', a: 'Generally not. Study longer than 90 days normally needs a national visa. Check the Italian mission for your course.' },
      { q: 'Who decides an Italian visa application?', a: 'The Italian diplomatic mission decides. Check its website for how applications are submitted from India.' },
      availFaq('Italy'),
    ],
  },
  {
    slug: 'netherlands', name: 'Netherlands', code: 'NL', group: 'Europe', tone: 'navy', regulated: null, services: [], process: genericProcess,
    blurb: 'General Netherlands student and short-stay visa information for applicants in India, based on the Dutch IND. Ask NeoCAN about availability.',
    seoTitle: 'Netherlands Student Visa Info for India | NeoCAN',
    seoDescription: 'How the Dutch student residence permit and MVV work, based on the IND, plus short-stay visa pointers. Ask Aman Maan at NeoCAN, Sri Ganganagar.',
    intro: [
      'The Immigration and Naturalisation Service (IND) decides residence permits for study in the Netherlands. For a student residence permit, the IND states that only the educational institution can submit the application on the student’s behalf.',
      'Aman Maan coordinates enquiries at NeoCAN in Sri Ganganagar. This guide is general information and does not confirm that NeoCAN offers a Netherlands-specific service.',
    ],
    considerations: [
      { title: 'Student residence permit', text: 'The IND page says a provisional residence permit (MVV) is needed and that the institution applies for the MVV and the student residence permit. The MVV sticker is placed by the Dutch representation and is valid for 90 days.' },
      { title: 'Fee', text: 'The IND page showed an application cost of €254, paid through the educational institution. Confirm the current amount on the IND website.' },
      { title: 'Short stays', text: 'The IND says that in most cases a visa is needed to travel to the Netherlands and that it is requested at the Dutch representation in the country where you live. Check Netherlands Worldwide for the rule that applies to Indian nationals.' },
      checked,
    ],
    official: [{ label: 'IND: student residence permit for university or higher professional education', url: 'https://ind.nl/en/residence-permits/study/student-residence-permit-for-university-or-higher-professional-education' }, { label: 'IND: short-stay visa for a holiday or business trip', url: 'https://ind.nl/en/short-stay/short-stay-holiday-or-business-visa' }],
    faqs: [
      { q: 'Can I apply for a Dutch student residence permit myself?', a: 'According to the IND, only the educational institution can apply for it on your behalf.' },
      { q: 'What is an MVV?', a: 'A provisional residence permit that allows entry for the student residence permit. The IND page says the MVV is valid for 90 days.' },
      availFaq('Netherlands'),
    ],
  },
  {
    slug: 'russia', name: 'Russia', code: 'RU', group: 'Europe', tone: 'red', regulated: null, services: [], process: genericProcess,
    blurb: 'General Russia visa information for applicants in India. Check official sources and Government of India advisories before planning.',
    seoTitle: 'Russia Visa Information for Indians | NeoCAN',
    seoDescription: 'General Russia e-visa facts from the official portal and a pointer to Government of India advisories. Ask Aman Maan at NeoCAN about availability.',
    intro: [
      'Russia operates an electronic visa for citizens of countries on a list set by the Russian government, and India appears on the official e-visa country list. Check the portal and the Russian Embassy in India for the current conditions and for any other visa arrangements.',
      'Before planning any travel, read the Government of India’s current advisory for Russia. Aman Maan coordinates enquiries at NeoCAN in Sri Ganganagar; this guide is general information and does not confirm that NeoCAN offers a Russia-specific service.',
    ],
    considerations: [
      { title: 'Check the advisory first', text: 'The Ministry of External Affairs lists a travel advisory for Indians travelling to Russia. Read the current advisory before you make plans.' },
      { title: 'E-visa basics', text: 'The official portal says the e-visa is single-entry, valid for 120 days from issue, with a stay of up to 30 days from entry. Applications are made between 86 and 4 days before arrival, with processing of up to 4 calendar days.' },
      { title: 'Other conditions', text: 'The portal lists a passport valid for at least 6 months and medical insurance, with exemptions by reciprocity. A regular visa in the passport follows its own rules.' },
      { title: 'Study routes', text: 'Check the Russian Embassy in India and the Indian Embassy in Moscow for study entry requirements. This guide does not describe them.' },
      checked,
    ],
    official: [{ label: 'Russia unified e-visa portal', url: 'https://evisa.kdmid.ru/' }, { label: 'Official list of e-visa eligible countries', url: 'https://electronic-visa.kdmid.ru/country.html' }, { label: 'Government of India: travel advisories', url: 'https://www.mea.gov.in/travel-advisories' }],
    faqs: [
      { q: 'Can Indian citizens use the Russian e-visa?', a: 'India appears on the official e-visa country list on the Russian electronic visa site. Check the portal for the current conditions before applying. This page does not describe any visa-free arrangement.' },
      { q: 'How long can I stay on the Russian e-visa?', a: 'The portal states up to 30 days from the date of entry. Arrival and departure days each count as a day.' },
      availFaq('Russia'),
    ],
  },
  {
    slug: 'czech-republic', name: 'Czech Republic (Czechia)', code: 'CZ', group: 'Europe', tone: 'navy', regulated: null, services: [], process: genericProcess,
    blurb: 'General Czech Republic study and Schengen visa information for applicants in India, from the Embassy in New Delhi. Ask NeoCAN about availability.',
    seoTitle: 'Czech Republic Study Visa Info for India | NeoCAN',
    seoDescription: 'How Indian applicants book Czech long-term study visa appointments, fees and the Schengen route, from the Czech Embassy in New Delhi. Ask NeoCAN.',
    intro: [
      'The Czech Republic is part of the Schengen area. For stays longer than three months, such as a university programme, Indian applicants apply for a long-term visa or long-term residence permit through the Czech Embassy in New Delhi.',
      'Aman Maan coordinates enquiries at NeoCAN in Sri Ganganagar. This guide is general information and does not confirm that NeoCAN offers a Czech Republic-specific service.',
    ],
    considerations: [
      { title: 'Appointment registration for study', text: 'The Embassy page says Indian applicants register by email during fixed windows, one email per applicant, with a passport copy and proof of the study purpose. Emails outside the window are disqualified. The page listed 14 December 2026 as the next window.' },
      { title: 'Consular fee', text: 'The Embassy fees page showed 2,500 CZK (10,900 INR at the time) for a long-term visa and for a residence permit. The amount is updated monthly for the exchange rate.' },
      { title: 'Short visits', text: 'For stays up to 90 days, the Embassy says applicants in India apply through VFS Global, no earlier than six months and no later than 15 days before travel. A fee of 90 EUR was listed.' },
      checked,
    ],
    official: [{ label: 'Czech Embassy New Delhi: study long-term visa booking', url: 'https://mzv.gov.cz/newdelhi/en/ko/visa_information/long_term_visa_long_term_residence/booking_appointments_for_submission_of.html' }, { label: 'Czech Embassy New Delhi: consular and visa fees', url: 'https://mzv.gov.cz/newdelhi/en/ko/consular_and_visa_fees/index.html' }, { label: 'Czech Embassy New Delhi: visa up to 90 days', url: 'https://mzv.gov.cz/newdelhi/en/ko/visa_information/schengen_visa_up_to_90_days/how_to_apply_for_a_visa_up_to_90_days.html' }],
    faqs: [
      { q: 'How do I get an appointment for a Czech study visa from India?', a: 'Register by email during a published window as described on the Embassy page. Slots are limited and the dates change, so check the page.' },
      { q: 'Is the Czech visa fee the same for everyone?', a: 'Fees depend on the visa type and are updated for the exchange rate. Check the Embassy fees page.' },
      availFaq('Czech Republic'),
    ],
  },
  {
    slug: 'greece', name: 'Greece', code: 'GR', group: 'Europe', tone: 'red', regulated: null, services: [], process: genericProcess,
    blurb: 'General Greece visa information for applicants in India. Ask NeoCAN to confirm current service availability.',
    seoTitle: 'Greece Visa Information for Indians | NeoCAN',
    seoDescription: 'General guide to Greece visas for applicants in India: Schengen short stays and longer study, with official links. Ask Aman Maan at NeoCAN.',
    intro: [
      'Greece is part of the Schengen area. Short visits of up to 90 days in any 180-day period are covered by a Schengen visa; longer stays such as study use a national visa. Visa applications from India go through the Greek diplomatic mission.',
      'Aman Maan coordinates enquiries at NeoCAN in Sri Ganganagar. This guide is general information and does not confirm that NeoCAN offers a Greece-specific service.',
    ],
    considerations: [
      { title: 'Visa requirement', text: 'EU Regulation 2018/1806 lists the countries whose nationals need a visa to cross the Schengen external borders; Indian passport holders apply for a Schengen visa for short stays. Check the Regulation on EUR-Lex for the legal basis.' },
      { title: 'Short visits', text: 'Check the Greek Ministry of Foreign Affairs and the Embassy of Greece in New Delhi for the Schengen document list, fees and how to apply.' },
      { title: 'Study beyond 90 days', text: 'Study longer than 90 days generally needs a national visa and admission to a recognised institution. Confirm the current requirements with the Greek mission.' },
      { title: 'Official pages', text: 'Some Greek government pages restrict automated access, so open the official sites directly in your browser to read them.' },
      checked,
    ],
    official: [{ label: 'Hellenic Ministry of Foreign Affairs', url: 'https://www.mfa.gr/en/' }, { label: 'EU Regulation 2018/1806 (visa list) on EUR-Lex', url: 'https://eur-lex.europa.eu/eli/reg/2018/1806/oj' }],
    faqs: [
      { q: 'Do I need a visa to visit Greece from India?', a: 'Indian passport holders need a Schengen visa for short stays (EU Regulation 2018/1806 lists the countries requiring one). Check the Greek mission for how to apply.' },
      { q: 'Can I study in Greece on a Schengen visa?', a: 'Generally not for courses longer than 90 days. Check the national visa requirements with the Greek mission.' },
      availFaq('Greece'),
    ],
  },
  {
    slug: 'mauritius', name: 'Mauritius', code: 'MU', group: 'Africa & Indian Ocean', tone: 'navy', regulated: null, services: [], process: genericProcess,
    blurb: 'General Mauritius entry and study information for applicants in India, from the Passport and Immigration Office. Ask NeoCAN about availability.',
    seoTitle: 'Mauritius Entry & Study Info for India | NeoCAN',
    seoDescription: 'Mauritius entry requirements from the Passport and Immigration Office and where to check visa and study permit rules. Ask Aman Maan at NeoCAN.',
    intro: [
      'The Passport and Immigration Office of Mauritius publishes the entry requirements and visa information for visitors. Check it, or the Mauritian diplomatic mission, for the rule that applies to Indian passport holders and for your purpose of travel.',
      'Aman Maan coordinates enquiries at NeoCAN in Sri Ganganagar. This guide is general information and does not confirm that NeoCAN offers a Mauritius-specific service.',
    ],
    considerations: [
      { title: 'Entry requirements', text: 'The Passport and Immigration Office lists for every traveller: a passport valid beyond the intended stay, a valid return ticket, adequate funds, and a confirmed hotel booking or accommodation sponsorship.' },
      { title: 'Work and residence', text: 'Gainful activity is not allowed without a valid permit. Travel for residence or work needs a valid entry or residence permit.' },
      { title: 'Study', text: 'The Passport and Immigration Office has published guidelines for the entry or residence permit to study in Mauritius, and advises prospective students to travel only after their study application has been approved. Read the current guidelines before applying.' },
      { title: 'Visa requirement', text: 'The Passport and Immigration Office’s Visa Requirements page lists the persons who do not need a visa. In the text we reviewed, Indian citizens are not named, and country-specific requirements are shown separately. Confirm with the Mauritius High Commission in New Delhi before booking travel; do not assume visa-free entry.' },
      { title: 'Applying for a visa', text: 'The office says visas are issued free of charge and applications go through Mauritian diplomatic or consular missions. It advises applying at least one month before travel and states a processing time of about 12 working days where practicable.' },
      checked,
    ],
    official: [{ label: 'Passport and Immigration Office: visa requirements', url: 'https://passport.govmu.org/passport/?page_id=605' }, { label: 'Passport and Immigration Office: application for a visa', url: 'https://passport.govmu.org/passport/?page_id=620' }, { label: 'Mauritius High Commission, New Delhi', url: 'https://foreign.govmu.org/Pages/Embassies%20and%20Consulates/Mauritius%20Diplomatic%20Missions%20Overseas/MAURITIUS-HIGH-COMMISSION----NEW-DELHI%2c-REPUBLIC-OF-INDIA.aspx' }, { label: 'Passport and Immigration Office: travel requirements', url: 'https://passport.govmu.org/passport/?page_id=587' }, { label: 'Passport and Immigration Office of Mauritius', url: 'https://passport.govmu.org/' }],
    faqs: [
      { q: 'Do Indian citizens need a visa for Mauritius?', a: 'Check the official Visa Requirements page and the Mauritius High Commission in New Delhi. The office’s list of persons who do not need a visa, as reviewed, does not name Indian citizens, so do not assume visa-free entry.' },
      { q: 'What must I show when arriving in Mauritius?', a: 'The official office lists a passport valid beyond your stay, a return ticket, adequate funds and confirmed accommodation.' },
      { q: 'Can I work on a visitor entry?', a: 'No. The office says gainful activity needs a valid permit.' },
      availFaq('Mauritius'),
    ],
  },
];

const baseCountries: Country[] = [...activeSlugs.map((slug) => {
  const old = historicalCountries.find((country) => country.slug === slug)!;
  return {
    ...old,
    ...guideCopy[slug],
    blurb: `General ${old.name} study and visitor visa information for applicants in India. Ask NeoCAN to confirm current service availability before making plans.`,
    services: [],
  };
}), ...newGuides];
export const countries: Country[] = baseCountries.map((c) => ({ ...c, ...(countryExtras[c.slug] ?? {}) }));
// Slug lookup for the homepage and directory (labels keep the owner-supplied names).
export const guideSlugByLabel: Record<string, string> = { Cyprus: 'cyprus', Italy: 'italy', Netherlands: 'netherlands', Russia: 'russia', 'Czech Republic (Czechia)': 'czech-republic', Greece: 'greece', Mauritius: 'mauritius' };

export const getCountry = (slug: string) => countries.find((c) => c.slug === slug);
