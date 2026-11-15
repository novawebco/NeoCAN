import type { Faq } from './services';
export interface FaqGroup { id: string; label: string; items: Faq[] }
export const faqGroups: FaqGroup[] = [
  { id: 'general', label: 'NeoCAN', items: [
    { q: 'What does NeoCAN do?', a: 'NeoCAN offers immigration and visa assistance. Immigration includes PR assistance. Visa includes Student Visa, Visitor Visa and Tourist Visa assistance. NeoCAN also offers IELTS preparation help. Aman Maan personally oversees the application process.' },
    { q: 'Who is my contact?', a: 'Aman Maan oversees daily operations, talks directly with clients, listens to individual requirements and coordinates NeoCAN team follow-up.' },
    { q: 'Where is the office?', a: '69, H Block, Sri Ganganagar, Rajasthan 335001, India.' },
    { q: 'What are the customer-facing hours?', a: 'Monday–Sunday, 9:00 AM–6:00 PM. Call +91 99505 29700 if you want to arrange a visit.' },
  ] },
  { id: 'services', label: 'Services', items: [
    { q: 'Which service areas are current priorities?', a: 'Immigration, Visa, IELTS, Student Visa, PR, Visitor Visa and Tourist Visa. Immigration and Visa are broad categories: Immigration includes PR assistance, and Visa includes Student, Visitor and Tourist Visa assistance.' },
    { q: 'Can NeoCAN help with a student visa enquiry?', a: 'Yes. NeoCAN reviews your documents, helps prepare your forms, books the appointments you need, and Aman explains who submits your application. Aman Maan oversees the process and tells you what to provide and sign.' },
    { q: 'Are Visitor Visa and Tourist Visa covered together?', a: 'Yes. Both labels share a short-visit information page. The official visa category depends on destination and purpose.' },
    { q: 'Does NeoCAN guarantee a visa or IELTS result?', a: 'No. Visa decisions are made by the relevant authority, and preparation cannot guarantee a test score.' },
    { q: 'Can NeoCAN help with PR (Permanent Residency)?', a: 'Yes. Aman Maan personally handles PR enquiries, discusses your requirements and coordinates the work. For Canadian immigration matters, NeoCAN works with a Regulated Canadian Immigration Consultant (RCIC) partner. Aman tells you what to provide, what to sign and which appointments to attend. No outcome is guaranteed.' },
  ] },
  { id: 'countries', label: 'Destinations', items: [
    { q: 'Which destinations are priorities?', a: 'Canada, United Kingdom, New Zealand, Cyprus, United States, Italy, Netherlands, Russia, Czech Republic (Czechia), Greece and Mauritius.' },
    { q: 'Are services available for all eleven destinations?', a: 'Yes. NeoCAN helps with its services for all eleven destinations. Each destination guide gives general information and official links, lists that country’s route names and says which steps you must do in person.' },
    { q: 'Where can I check current visa rules?', a: 'Use the official authority for your destination and route. Existing destination guides link to official sources.' },
  ] },
  { id: 'consultation', label: 'Enquiries', items: [
    { q: 'How do I begin?', a: 'Call or WhatsApp +91 99505 29700, email contact@neocan.net, or visit 69, H Block, Sri Ganganagar, Rajasthan 335001, India during Monday–Sunday, 9:00 AM–6:00 PM.' },
    { q: 'What should I share?', a: 'Your purpose, intended destination, timing and any relevant documents. Do not send passwords or one-time codes.' },
    { q: 'Can I book online?', a: 'Online booking is not currently available. Contact Aman Maan to arrange a discussion and confirm the format and any fee.' },
    { q: 'I live outside Sri Ganganagar. How can I speak to Aman?', a: 'Call NeoCAN and ask to speak with Aman Maan. If you’d prefer an online consultation, ask Aman whether it’s available for your case.' },
    { q: 'Who will check my documents and fill in my forms?', a: 'NeoCAN will. Aman Maan personally oversees your application. The NeoCAN team checks your documents against the official requirements and fills in your forms using the information you give. Aman tells you which information and documents to provide.' },
    { q: 'Who will prepare and submit my application?', a: 'Aman Maan personally oversees your application. NeoCAN reviews your documents and helps prepare your forms. Aman will explain who submits your application and which steps you need to complete yourself.' },
    { q: 'Who will book my appointment?', a: 'NeoCAN books the appointments you need, where the booking system allows it. Aman tells you which appointments you must attend in person, such as giving fingerprints or attending an interview.' },
    { q: 'What will I need to do myself?', a: 'Give Aman the information and documents he asks for, check your answers, sign what he tells you to sign and attend in person the appointments he says you must attend.' },
    { q: 'How much will I pay, and what does the fee cover?', a: 'Before you agree to any paid work, Aman Maan will explain NeoCAN’s service fee and what it covers. He’ll also explain which government, appointment or test fees you need to pay separately.' },
  ] },
];
// Homepage-only FAQs (not shared with /faq/). Limited to confirmed scope: Student Visa, Visitor/Tourist Visa, IELTS.
export const homeFaqs: Faq[] = [
  { q: 'Can I contact NeoCAN before I have an offer letter or have chosen a country?', a: 'Yes. You can discuss your plan at an early stage. Aman Maan can explain the general steps, but the exact requirements depend on your destination and route, which you should confirm from the official source.' },
  { q: 'Does NeoCAN guarantee a visa or an IELTS band score?', a: 'No. Visa decisions are made by the destination authority, and preparation cannot guarantee a test result.' },
  { q: 'Are visitor visa and tourist visa different services?', a: 'They share one NeoCAN page because the help is similar. The official visa category depends on your destination and the purpose of your trip.' },
  { q: 'Does NeoCAN help with PR (Permanent Residency)?', a: 'Yes. Aman Maan personally handles PR enquiries, discusses your requirements and coordinates the work. For Canadian immigration matters, NeoCAN works with a Regulated Canadian Immigration Consultant (RCIC) partner. Aman tells you what to provide, what to sign and which appointments to attend.' },
  { q: 'Do you cover every destination listed on this website?', a: 'Each destination has an information guide that links to official sources. NeoCAN helps with its services for all 11 destinations: Canada, the United Kingdom, the United States, New Zealand, Cyprus, Italy, the Netherlands, Russia, the Czech Republic (Czechia), Greece and Mauritius. Each destination page lists its own route names and any step you must do in person.' },
  { q: 'Who will I speak to, and how will I know what I pay?', a: 'Aman Maan is your main contact. Before you agree to any paid work, Aman Maan will explain NeoCAN’s service fee and what it covers. He’ll also explain which government, appointment or test fees you need to pay separately. Online booking is not available yet.' },
  { q: 'How do I reach the office?', a: 'Call or WhatsApp +91 99505 29700, email contact@neocan.net, or visit 69, H Block, Sri Ganganagar, Rajasthan 335001, India, Monday–Sunday, 9:00 AM–6:00 PM.' },
];
