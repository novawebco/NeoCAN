// Editorial drafts. No publication dates are shown; all articles are marked as drafts pending owner review.
// Held (regulatory review): /resources/canada-pr-guide/ — PR is a regulatory-blocked service.

export interface Resource {
  slug: string;
  category: 'Study' | 'Visa' | 'Language Tests' | 'Comparison';
  title: string;
  excerpt: string;
  icon: string;
  tone: 'navy' | 'red' | 'light';
  sections: { h: string; p: string[] }[];
  related: string[]; // service slugs
  source?: { label: string; url: string };
}

const historicalResources: Resource[] = [
  {
    slug: 'canada-visa-refusal', category: 'Visa', icon: 'refresh', tone: 'red',
    title: 'Canada Visa Refused? Steps to Consider',
    excerpt: 'How to read a refusal letter and think through what to do next.',
    sections: [
      { h: 'Start with the refusal letter', p: ['The letter generally gives the reasons the officer relied on. Read it slowly and note each reason.'] },
      { h: 'Check your original application', p: ['Compare the reasons with what you submitted. Sometimes documents were missing or unclear.'] },
      { h: 'Decide your options', p: ['Options can include reapplying with improved documents or seeking advice from a regulated practitioner. Appeals and legal review should go to a licensed lawyer or consultant.'] },
    ],
    related: ['visa-refusal', 'document-preparation'],
    source: { label: 'IRCC', url: 'https://www.canada.ca/en/immigration-refugees-citizenship.html' },
  },
  {
    slug: 'australia-skilled-migration', category: 'Visa', icon: 'star', tone: 'navy',
    title: 'Australia Skilled Migration: An Introduction',
    excerpt: 'A general overview of how Australia\'s skilled visa system is structured.',
    sections: [
      { h: 'The basic idea', p: ['Australia invites skilled workers in certain occupations. Applicants often need a skills assessment and an English-language result.'] },
      { h: 'Points and invitations', p: ['Some categories use a points test and an invitation system. The government publishes settings and may update them.'] },
      { h: 'Where to get advice', p: ['Migration advice is regulated in Australia. For advice on your case, speak with a registered migration agent.'] },
    ],
    related: ['skilled-migration', 'ielts-coaching'],
    source: { label: 'Home Affairs', url: 'https://immi.homeaffairs.gov.au/' },
  },
  {
    slug: 'ielts-preparation', category: 'Language Tests', icon: 'book', tone: 'red',
    title: 'IELTS Preparation: Where to Start',
    excerpt: 'Where to start with IELTS: the four modules, practice habits and how to find the target score your institution or visa route requires.',
    sections: [
      { h: 'The four modules', p: ['IELTS tests Listening, Reading, Writing and Speaking. Learn the format of each before you begin intensive practice.'] },
      { h: 'Know your target', p: ['Different institutions and visa categories ask for different scores. Confirm yours before choosing a study plan.'] },
      { h: 'Practise regularly', p: ['Short daily practice across all four skills tends to be more useful than occasional long sessions.'] },
    ],
    related: ['ielts-coaching', 'pte-coaching'],
  },
  {
    slug: 'germany-opportunity-card', category: 'Visa', icon: 'globe', tone: 'navy',
    title: 'Germany Opportunity Card: A General Guide',
    excerpt: 'What the points-based Chancenkarte is and how to prepare.',
    sections: [
      { h: 'What it is', p: ['The Opportunity Card is a points-based residence permit allowing qualified applicants to look for work in Germany.'] },
      { h: 'Typical evidence', p: ['Applicants usually document qualifications, language ability, work experience and funds. Criteria are set by the authorities and may change.'] },
      { h: 'Check official sources', p: ['Use the Make it in Germany portal and your nearest German mission for current rules.'] },
    ],
    related: ['skilled-migration', 'document-preparation'],
    source: { label: 'Make it in Germany', url: 'https://www.make-it-in-germany.com/en/' },
  },
  {
    slug: 'canada-australia-uk-comparison', category: 'Comparison', icon: 'chart', tone: 'light',
    title: 'Canada, Australia and UK: Study Destinations Compared',
    excerpt: 'Questions to ask when comparing three popular study destinations.',
    sections: [
      { h: 'Start with your course', p: ['Course availability and recognition may matter more than the country itself.'] },
      { h: 'Compare practical factors', p: ['Consider tuition, living costs, language-test requirements and how long applications generally take.'] },
      { h: 'Policies change', p: ['Study-visa policies in all three countries have been updated frequently. Always check official government websites.'] },
    ],
    related: ['study-visa', 'eligibility-consultation'],
  },
  {
    slug: 'study-visa-checklist', category: 'Study', icon: 'file', tone: 'navy',
    title: 'A General Study Visa Document Checklist',
    excerpt: 'A general checklist of document categories students are commonly asked for in a study visa application. Always confirm the official list.',
    sections: [
      { h: 'Identity and academic', p: ['Passport, transcripts and certificates are usually needed.'] },
      { h: 'Admission and finances', p: ['An offer letter and evidence of funds are commonly requested.'] },
      { h: 'Country specifics', p: ['Each country publishes its own list. Use it as the final authority.'] },
    ],
    related: ['study-visa', 'document-preparation'],
  },
  {
    slug: 'sop-writing-tips', category: 'Study', icon: 'pen', tone: 'red',
    title: 'Statement of Purpose: General Writing Tips',
    excerpt: 'Keep it honest, specific and consistent with your documents.',
    sections: [
      { h: 'Be specific', p: ['Explain why you chose the course and institution, with concrete reasons.'] },
      { h: 'Stay consistent', p: ['Details should match your documents and application.'] },
      { h: 'Use your own voice', p: ['A statement should reflect your own experiences.'] },
    ],
    related: ['sop-support', 'study-visa'],
  },
];
export const resources: Resource[] = historicalResources
  .filter((resource) => ['ielts-preparation', 'study-visa-checklist'].includes(resource.slug))
  .map((resource) => ({ ...resource, related: resource.related.filter((slug) => ['ielts-coaching', 'study-visa', 'visitor-visa'].includes(slug)) }));

export const getResource = (slug: string) => resources.find((r) => r.slug === slug);
