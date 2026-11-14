import type { Faq } from './services';
export interface FaqGroup { id: string; label: string; items: Faq[] }
export const faqGroups: FaqGroup[] = [
  { id: 'general', label: 'NeoCAN', items: [
    { q: 'What does NeoCAN do?', a: 'NeoCAN handles enquiries about Student Visa, Visitor Visa, Tourist Visa, IELTS preparation and PR. Immigration and Visa enquiries are starting points for other situations, and Aman Maan confirms the tasks case by case.' },
    { q: 'Who is my contact?', a: 'Aman Maan oversees daily operations, talks directly with clients, listens to individual requirements and coordinates NeoCAN team follow-up.' },
    { q: 'Where is the office?', a: '69, H Block, Sri Ganganagar, Rajasthan 335001, India.' },
    { q: 'What are the customer-facing hours?', a: 'Monday–Sunday, 9:00 AM–6:00 PM. Call +91 99505 29700 if you want to arrange a visit.' },
  ] },
  { id: 'services', label: 'Services', items: [
    { q: 'Which service areas are current priorities?', a: 'Immigration, Visa, IELTS, Student Visa, PR, Visitor Visa and Tourist Visa. The scope and availability of each area differ, and Aman Maan confirms what applies to your case when you enquire.' },
    { q: 'Can NeoCAN help with a student visa enquiry?', a: 'Yes. Discuss your study plan and general document organisation with Aman Maan. Specific destination availability and tasks are confirmed during enquiry.' },
    { q: 'Are Visitor Visa and Tourist Visa covered together?', a: 'Yes. Both labels share a short-visit information page. The official visa category depends on destination and purpose.' },
    { q: 'Does NeoCAN guarantee a visa or IELTS result?', a: 'No. Visa decisions are made by the relevant authority, and preparation cannot guarantee a test score.' },
    { q: 'Can NeoCAN help with PR (Permanent Residency)?', a: 'Yes. Aman Maan personally handles PR enquiries, discusses your requirements and coordinates the work. For Canadian immigration matters, NeoCAN works with a Regulated Canadian Immigration Consultant (RCIC) partner. Ask Aman which support applies to your destination and case. No outcome is guaranteed.' },
  ] },
  { id: 'countries', label: 'Destinations', items: [
    { q: 'Which destinations are priorities?', a: 'Canada, United Kingdom, New Zealand, Cyprus, United States, Italy, Netherlands, Russia, Czech Republic (Czechia), Greece and Mauritius.' },
    { q: 'Are services available for all eleven destinations?', a: 'No such claim is made. Each destination has a general information guide with official links, but NeoCAN confirms which services it can help with for your country and case when you enquire.' },
    { q: 'Where can I check current visa rules?', a: 'Use the official authority for your destination and route. Existing destination guides link to official sources.' },
  ] },
  { id: 'consultation', label: 'Enquiries', items: [
    { q: 'How do I begin?', a: 'Call or WhatsApp +91 99505 29700, email contact@neocan.net, or visit 69, H Block, Sri Ganganagar, Rajasthan 335001, India during Monday–Sunday, 9:00 AM–6:00 PM.' },
    { q: 'What should I share?', a: 'Your purpose, intended destination, timing and any relevant documents. Do not send passwords or one-time codes.' },
    { q: 'Can I book online?', a: 'Online booking is not currently available. Contact Aman Maan to arrange a discussion and confirm the format and any fee.' },
    { q: 'I live outside Sri Ganganagar. How can I speak to Aman?', a: 'Call NeoCAN and ask to speak with Aman Maan. If you’d prefer an online consultation, ask Aman whether it’s available for your case.' },
    { q: 'Can NeoCAN help me fill in my visa form, and who will submit it?', a: 'Ask Aman whether NeoCAN can help with the form for your service and destination. Also confirm who will submit the application.' },
    { q: 'When will I know what the help will cost, and what’s included?', a: 'Before agreeing to paid work, ask Aman what NeoCAN will charge for your case and what that fee includes. Ask separately about any official fees you will pay to the authority.' },
  ] },
];
// Homepage-only FAQs (not shared with /faq/). Limited to confirmed scope: Student Visa, Visitor/Tourist Visa, IELTS.
export const homeFaqs: Faq[] = [
  { q: 'Can I contact NeoCAN before I have an offer letter or have chosen a country?', a: 'Yes. You can discuss your plan at an early stage. Aman Maan can explain the general steps, but the exact requirements depend on your destination and route, which you should confirm from the official source.' },
  { q: 'Does NeoCAN guarantee a visa or an IELTS band score?', a: 'No. Visa decisions are made by the destination authority, and preparation cannot guarantee a test result.' },
  { q: 'Are visitor visa and tourist visa different services?', a: 'They share one NeoCAN page because the help is similar. The official visa category depends on your destination and the purpose of your trip.' },
  { q: 'Does NeoCAN help with PR (Permanent Residency)?', a: 'Yes. Aman Maan personally handles PR enquiries, discusses your requirements and coordinates the work. For Canadian immigration matters, NeoCAN works with a Regulated Canadian Immigration Consultant (RCIC) partner. Ask Aman which support applies to your destination and case.' },
  { q: 'Do you cover every destination listed on this website?', a: 'Each destination has an information guide that links to official sources. Whether NeoCAN can help with a particular service for that country is confirmed when you enquire.' },
  { q: 'Who will I speak to and what does a consultation cost?', a: 'Aman Maan is your main contact. Fees are discussed directly; none are published on this website and online booking is not available yet.' },
  { q: 'How do I reach the office?', a: 'Call or WhatsApp +91 99505 29700, email contact@neocan.net, or visit 69, H Block, Sri Ganganagar, Rajasthan 335001, India, Monday–Sunday, 9:00 AM–6:00 PM.' },
];
