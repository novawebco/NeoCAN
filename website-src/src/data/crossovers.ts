// Service x country pages with distinct intent (route index). Held for regulatory review (not built):
//   /countries/canada/express-entry/  (PR-adjacent; PR is regulatory blocked)
//   /countries/singapore/work-pass/   (route index phase 3)
import type { Faq } from './services';

export interface Crossover {
  country: string;
  slug: string;
  service: string;
  title: string;
  h1: string;
  description: string;
  intent: string;
  scope: string[];
  requirements: string[];
  notes: string;
  official: { label: string; url: string };
  faqs: Faq[];
  phase: 1 | 2;
}

export const crossovers: Crossover[] = [
  {
    country: 'canada', slug: 'study-visa', service: 'study-visa', phase: 1,
    title: 'Canada Study Permit Assistance from India | NeoCAN',
    h1: 'Canada Study Permit Assistance for Students in India',
    description: 'General guidance on preparing a Canadian study permit application, from NeoCAN in Sri Ganganagar. Information only; not regulated advice.',
    intent: 'You want to study in Canada and need to understand what a study permit application usually involves and how to organise your file.',
    scope: ['Explaining the general study permit stages', 'Helping you organise your document checklist', 'Reviewing your file for completeness before you submit', 'Language-test preparation through our IELTS and PTE coaching'],
    requirements: ['An acceptance letter from a designated learning institution', 'Passport and identity documents', 'Evidence of funds as specified by IRCC', 'Language-test results where the institution requires them', 'Any additional documents IRCC requests for your situation'],
    notes: 'Canadian rules for international students have been revised several times recently, so always check the current requirements on the IRCC website.',
    official: { label: 'IRCC — Study in Canada', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html' },
    faqs: [
      { q: 'Can you guarantee a Canadian study permit?', a: 'No. IRCC alone decides every application.' },
      { q: 'Does NeoCAN give regulated Canadian immigration advice?', a: 'No. We offer general guidance and document support.' },
    ],
  },
  {
    country: 'australia', slug: 'study-visa', service: 'study-visa', phase: 1,
    title: 'Australia Student Visa Assistance from India | NeoCAN',
    h1: 'Australia Student Visa Assistance for Students in India',
    description: 'General guidance on preparing an Australian student visa application from NeoCAN in Sri Ganganagar. Not migration advice.',
    intent: 'You plan to study in Australia and want to understand the usual student visa steps and the documents involved.',
    scope: ['Explaining the general student visa stages', 'Organising enrolment and financial documents', 'Preparing explanations for the genuine student requirement', 'IELTS and PTE preparation through our coaching'],
    requirements: ['Confirmation of enrolment from the institution', 'Passport and identity documents', 'Evidence of funds as specified by Home Affairs', 'English-test results where required', 'Health and character documentation as requested'],
    notes: 'Student visa settings are updated by the Australian government. Confirm current criteria with Home Affairs.',
    official: { label: 'Home Affairs — Student visa', url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500' },
    faqs: [
      { q: 'Are you a registered migration agent?', a: 'No. We provide general guidance and document support only.' },
      { q: 'Which English tests are accepted?', a: 'It varies. Check the Home Affairs website and your institution.' },
    ],
  },
  {
    country: 'australia', slug: 'skilled-migration', service: 'skilled-migration', phase: 1,
    title: 'Australia Skilled Migration Information | NeoCAN',
    h1: 'Australia Skilled Migration: General Information and Document Support',
    description: 'General information on Australian skilled migration and skills assessment documents from NeoCAN. Not migration advice.',
    intent: 'You are a skilled worker wanting to understand how Australian skilled migration generally works and what evidence is gathered.',
    scope: ['Explaining skilled migration concepts in general terms', 'Helping you gather qualification and employment evidence', 'Directing you to official sources for occupation lists and assessing bodies', 'English-test preparation'],
    requirements: ['Qualification certificates and transcripts', 'Employment references and evidence', 'English-test results', 'Skills-assessment documents for your occupation', 'Identity documents'],
    notes: 'Australian migration advice is a regulated activity. NeoCAN does not provide it. Consult a registered migration agent for advice on your case.',
    official: { label: 'Home Affairs — Skilled visas', url: 'https://immi.homeaffairs.gov.au/visas/working-in-australia/skillselect' },
    faqs: [
      { q: 'Can you tell me if I qualify?', a: 'We can discuss your profile in general terms. A formal assessment of eligibility must come from a registered practitioner or the authority.' },
    ],
  },
  {
    country: 'uk', slug: 'study-visa', service: 'study-visa', phase: 1,
    title: 'UK Student Visa Assistance from India | NeoCAN',
    h1: 'UK Student Visa Assistance for Students in India',
    description: 'General guidance on preparing a UK Student visa application from NeoCAN in Sri Ganganagar. Not regulated advice.',
    intent: 'You want to study in the UK and need to understand the Student visa steps and the documents involved.',
    scope: ['Explaining the general Student visa stages', 'Organising your CAS and financial documents', 'Language-test preparation', 'File review before submission'],
    requirements: ['Confirmation of Acceptance for Studies (CAS)', 'Passport and identity documents', 'Evidence of funds as specified by the Home Office', 'English ability evidence where required', 'Other documents requested for your case'],
    notes: 'UK rules change frequently. Always confirm on GOV.UK.',
    official: { label: 'GOV.UK — Student visa', url: 'https://www.gov.uk/student-visa' },
    faqs: [{ q: 'Does NeoCAN provide IAA-regulated UK immigration advice?', a: 'No. We provide general guidance and document support. For regulated advice, consult an adviser authorised by the Immigration Advice Authority (IAA) or another appropriately regulated legal professional.' }],
  },
  {
    country: 'germany', slug: 'opportunity-card', service: 'skilled-migration', phase: 1,
    title: 'Germany Opportunity Card (Chancenkarte) for Indians | NeoCAN',
    h1: 'Germany Opportunity Card (Chancenkarte): General Information for Applicants from India',
    description: 'General information on Germany\'s points-based Opportunity Card and the documents typically involved, from NeoCAN in Sri Ganganagar.',
    intent: 'You are a qualified professional curious about Germany\'s Opportunity Card and what preparing an application involves.',
    scope: ['Explaining the points-based approach in general terms', 'Helping you gather qualification and experience evidence', 'Document checklists and organisation', 'Pointing you to official sources'],
    requirements: ['Recognised qualification evidence', 'Language-ability evidence where points are claimed', 'Proof of funds as specified by German authorities', 'Passport and identity documents', 'Work-experience evidence'],
    notes: 'The Opportunity Card criteria are set by German authorities and can be updated. Verify with the official Make it in Germany portal.',
    official: { label: 'Make it in Germany — Opportunity Card', url: 'https://www.make-it-in-germany.com/en/' },
    faqs: [{ q: 'Does the Opportunity Card guarantee a job?', a: 'No. It permits you to look for work in Germany; it does not provide a job.' }],
  },
  {
    country: 'usa', slug: 'student-visa', service: 'study-visa', phase: 2,
    title: 'USA F-1 Student Visa Assistance from India | NeoCAN',
    h1: 'USA F-1 Student Visa Assistance for Students in India',
    description: 'General guidance for the F-1 student visa application and interview preparation from NeoCAN in Sri Ganganagar.',
    intent: 'You have or are seeking admission to a US university and want help understanding the F-1 visa process.',
    scope: ['Explaining the I-20, SEVIS fee, DS-160 and interview stages', 'Document organisation', 'Interview preparation', 'TOEFL or IELTS preparation'],
    requirements: ['Form I-20 from a SEVP-certified school', 'SEVIS fee payment receipt', 'DS-160 confirmation', 'Passport and photographs', 'Financial evidence'],
    notes: 'Interview wait times and requirements change. Check the official State Department pages.',
    official: { label: 'US Department of State — Student visa', url: 'https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html' },
    faqs: [{ q: 'Can you guarantee an F-1 visa?', a: 'No. Consular officers decide each application.' }],
  },
  {
    country: 'uk', slug: 'work-visa', service: 'work-visa', phase: 2,
    title: 'UK Skilled Worker Visa Assistance from India | NeoCAN',
    h1: 'UK Skilled Worker Visa: Application Support for Applicants in India',
    description: 'General guidance on UK Skilled Worker visa application documents from NeoCAN. Not regulated advice; no job placement.',
    intent: 'You hold a UK job offer and want help organising a Skilled Worker visa application.',
    scope: ['Explaining the general stages after a sponsored job offer', 'Organising documents', 'File review', 'CV and interview support'],
    requirements: ['Certificate of Sponsorship from a licensed employer', 'Passport and identity documents', 'English-ability evidence where required', 'Financial evidence where required', 'Other documents requested for your case'],
    notes: 'NeoCAN does not find jobs or recruit for overseas employers.',
    official: { label: 'GOV.UK — Skilled Worker visa', url: 'https://www.gov.uk/skilled-worker-visa' },
    faqs: [{ q: 'Can you find me a UK job?', a: 'No. We do not provide job placement or recruitment.' }],
  },
  {
    country: 'canada', slug: 'visitor-visa', service: 'visitor-visa', phase: 2,
    title: 'Canada Visitor Visa Assistance from India | NeoCAN',
    h1: 'Canada Visitor Visa Assistance for Travellers in India',
    description: 'General guidance on preparing a Canadian visitor visa application from NeoCAN in Sri Ganganagar.',
    intent: 'You plan to visit family or travel to Canada and want to organise your visitor visa application.',
    scope: ['Explaining general visitor visa steps', 'Document checklists', 'Help preparing a purpose-of-visit explanation', 'File review'],
    requirements: ['Passport', 'Evidence of purpose of travel', 'Financial documents', 'Invitation letter where applicable', 'Other documents requested by IRCC'],
    notes: 'IRCC makes all decisions. Check their site for current requirements.',
    official: { label: 'IRCC — Visit Canada', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html' },
    faqs: [{ q: 'Can you guarantee approval?', a: 'No. IRCC decides each application.' }],
  },
  {
    country: 'new-zealand', slug: 'study-visa', service: 'study-visa', phase: 2,
    title: 'New Zealand Student Visa Assistance from India | NeoCAN',
    h1: 'New Zealand Student Visa Assistance for Students in India',
    description: 'General guidance on preparing a New Zealand student visa application from NeoCAN in Sri Ganganagar.',
    intent: 'You want to study in New Zealand and need to understand the student visa steps and documents.',
    scope: ['Explaining general student visa stages', 'Document organisation', 'PTE or IELTS preparation', 'File review'],
    requirements: ['Offer of place from an approved provider', 'Passport and identity documents', 'Evidence of funds', 'Health and character documents as requested', 'English-test results where required'],
    notes: 'Immigration New Zealand publishes current requirements.',
    official: { label: 'Immigration New Zealand — Student visa', url: 'https://www.immigration.govt.nz/' },
    faqs: [{ q: 'Are you a licensed immigration adviser?', a: 'No. We provide general guidance and document support.' }],
  },
];

export const getCrossover = (country: string, slug: string) => crossovers.find((c) => c.country === country && c.slug === slug);
