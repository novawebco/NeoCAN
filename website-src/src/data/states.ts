// India State / Union Territory pages (applicant-location pages, NOT offices).
// Tracker of all 36 locations lives in audit/states/tracker.md; this file holds only pages that have been written.
// Rule: NeoCAN's only office is in Sri Ganganagar. A State/UT page represents an applicant location and may
// describe only contact options that are confirmed. Remote (online) consultation is NOT confirmed: use the
// approved wording "ask Aman whether an online consultation is available for your case".
// Visa-centre and biometrics locations are NOT listed unless read from an official page (VFS and several
// embassy pages returned 403 on 16 Nov 2026). Third-party test centres are labelled as third-party.
import type { Faq } from './services';

export type StateStatus = 'ready' | 'draft' | 'hub-provisional' | 'not-started';
export interface StateEntry { slug: string; name: string; kind: 'State' | 'Union Territory'; status: StateStatus }

// Decisions recorded 2026-11-16 (see audit/states/tracker.md). 'ready' = page built, release-review ready;
// 'draft' = no page yet, a named official source must be read in a browser first; 'hub-provisional' = covered by /locations/ for now; revisit when official reads or enquiry data exist.
const DRAFT = ['Delhi', 'Maharashtra', 'Tamil Nadu', 'Telangana', 'West Bengal', 'Punjab', 'Chandigarh', 'Gujarat'];
const STATES = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];
const UTS = ['Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'];
const slug = (n: string) => n.toLowerCase().replace(/ /g, '-');
const status = (n: string): StateStatus => (DRAFT.includes(n) ? 'draft' : 'hub-provisional');
export const stateTracker: StateEntry[] = [
  { slug: 'rajasthan', name: 'Rajasthan', kind: 'State', status: 'ready' },
  ...STATES.map((name): StateEntry => ({ slug: slug(name), name, kind: 'State', status: status(name) })),
  ...UTS.map((name): StateEntry => ({ slug: slug(name), name, kind: 'Union Territory', status: status(name) })),
];

export interface StatePage {
  slug: string; name: string;
  seoTitle: string; seoDescription: string; h1: string; lead: string;
  answerQ: string; answer: string[];
  goals: { title: string; text: string; href: string; label: string }[];
  startTitle: string; startSteps: string[];
  inPersonTitle: string; inPerson: string[];
  ieltsTitle: string; ielts: string[];
  firstTitle: string; first: string[]; whatsappText: string;
  faqs: Faq[];
}

export const statePages: Record<string, StatePage> = {
  rajasthan: {
    slug: 'rajasthan', name: 'Rajasthan',
    seoTitle: 'Visa and IELTS Help for Rajasthan Applicants | NeoCAN',
    seoDescription: 'Live in Rajasthan? NeoCAN’s office is in Sri Ganganagar. Call or WhatsApp Aman Maan about study, visitor or tourist visas, PR and IELTS help.',
    h1: 'Visa and IELTS help for applicants in Rajasthan',
    lead: 'NeoCAN’s only office is in Sri Ganganagar. If you live elsewhere in Rajasthan, you can start with a call or WhatsApp message to Aman Maan.',
    answerQ: 'I live in Rajasthan. Can NeoCAN help me, and how do I start?',
    answer: [
      'Yes. Call or WhatsApp NeoCAN to discuss your plans with Aman Maan. Tell him your city, where you plan to go and what help you need. He’ll explain what you can do next and whether you need to attend an appointment in person. If you’d like to meet at our Sri Ganganagar office, please call first.',
      'You can start an enquiry by phone or WhatsApp. An office visit, a full online consultation and attendance at an official visa appointment depend on the service and your case, and Aman tells you which apply. NeoCAN has one office, in Sri Ganganagar, and no office or branch in Jaipur, Jodhpur, Bikaner, Udaipur, Kota or any other Rajasthan city.',
    ],
    goals: [
      { title: 'Study abroad', text: 'Student visa help, from choosing a destination to preparing documents after you hold an offer.', href: '/services/study-visa/', label: 'Student visa help' },
      { title: 'Visit family or travel', text: 'Visitor and tourist visa help for a family visit or a holiday.', href: '/services/visitor-visa/', label: 'Visitor and tourist visa help' },
      { title: 'Permanent residency', text: 'PR enquiries are handled by Aman Maan. For Canadian immigration matters, NeoCAN works with a Regulated Canadian Immigration Consultant (RCIC) partner.', href: '/services/pr/', label: 'PR assistance' },
      { title: 'English test', text: 'IELTS preparation help. NeoCAN is not an IELTS test centre; you book the test with the official provider.', href: '/services/ielts-coaching/', label: 'IELTS preparation' },
    ],
    startTitle: 'How to start from Rajasthan',
    startSteps: [
      'Call or WhatsApp +91 99505 29700, or email contact@neocan.net.',
      'Tell Aman your city, where you plan to go and what help you need. Please do not send passport scans, passwords or one-time codes in a first message.',
      'Aman explains what you can do next and whether you need to attend an appointment in person. If you would like an online consultation, ask whether it is available for your case.',
      'If you would like to meet at our Sri Ganganagar office, please call first so Aman can plan time for you. The office is open Monday to Sunday, 9:00 AM to 6:00 PM.',
    ],
    inPersonTitle: 'Will I need to visit the office, or attend an appointment?',
    inPerson: [
      'You can start an enquiry by phone or WhatsApp. An office visit, a full online consultation and attendance at an official visa appointment depend on the service and your case. Directions and opening hours for the Sri Ganganagar office are on the office page.',
      'Some official steps must be attended in person, and this depends on the visa route. For example, the United States asks you to attend your biometrics appointment and visa interview yourself, and the Czech Republic takes a long-term visa application in person at its Embassy. Aman tells you which steps apply to your case.',
      'We could not confirm from official pages which visa application centres in Rajasthan take applications for each route, so this page does not list any. Aman tells you which centre your route uses, and the official page for your destination is the place to check it.',
    ],
    ieltsTitle: 'IELTS: preparation and the test are different',
    ielts: [
      'Ask Aman about IELTS preparation help from NeoCAN. NeoCAN does not run the IELTS test.',
      'IELTS.org lists a test centre run by IDP Education India in Jaipur, at Office No. 402, 4th Floor, Jaipur Centre Mall, Tonk Road, B2 Bypass Junction, Sector B4, Jaipur 302018 (page read 16 November 2026). This is a third-party test centre, not a NeoCAN office. Use ielts.org or the test provider to check current test centres, dates and fees, including for other Rajasthan cities.',
    ],
    firstTitle: 'What to send in your first message',
    first: ['Your city in Rajasthan', 'The purpose: study, family visit, holiday, PR or IELTS', 'Your destination, if you know it', 'Your current stage, for example no offer yet, offer received or documents being collected', 'The help you need'],
    whatsappText: 'Hello NeoCAN, I’m from [city] in Rajasthan. I need help with [visa purpose] for [destination, if known]. I’m currently at [application stage].',
    faqs: [
      { q: 'Can I start without visiting your office?', a: 'Yes. Call or WhatsApp NeoCAN to discuss your plans with Aman Maan. Tell him your city, where you plan to go and what help you need. He’ll explain what you can do next and whether you need to attend an appointment in person. If you’d like to meet at our Sri Ganganagar office, please call first.' },
      { q: 'Does NeoCAN have an office in Jaipur, Bikaner, Jodhpur or my city?', a: 'No. NeoCAN’s only office is in Sri Ganganagar, and there are no other offices or branches.' },
      { q: 'Where will I give biometrics or attend a visa interview?', a: 'It depends on the visa route and the official booking system. This page does not list centres because we could not confirm them from official pages. Aman tells you which centre and appointment your route needs, and he tells you whether NeoCAN can book your appointment.' },
      { q: 'Is there an IELTS test centre near me in Rajasthan?', a: 'IELTS.org lists an IDP Education India test centre in Jaipur. It is a third-party centre, not NeoCAN. Check ielts.org or the test provider for current centres and dates in your city. NeoCAN is not an IELTS test centre.' },
      { q: 'How will I know what I pay?', a: 'Before you pay, we’ll send you a written quote showing the total NeoCAN service fee, the charge for each stage, and any government, appointment or test fees you’ll pay separately. The refund rules are in the Terms.' },
    ],
  },
};
