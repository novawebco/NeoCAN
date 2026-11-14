// India location pages (route index P1-P2). Only Sri Ganganagar has a physical office.
// Remote consultation availability is pending confirmation. These pages invite contact without promising it.
import type { Faq } from './services';

export interface Location {
  slug: string;
  name: string;
  state: string;
  office: boolean;
  distance?: string;
  headline: string;
  description: string;
  about: string[];
  angle: { title: string; text: string }[];
  popularServices: string[];
  faqs: Faq[];
  phase: 1 | 2;
}

const historicalLocations: Location[] = [
  {
    slug: 'sri-ganganagar', name: 'Sri Ganganagar', state: 'Rajasthan', office: true, phase: 1,
    headline: 'Immigration Consultant in Sri Ganganagar',
    description: 'NeoCAN Global Migration Consulting is based at 69 H Block, Mukherjee Nagar, Sri Ganganagar. Phone ahead before visiting.',
    about: [
      'NeoCAN\'s office is in Mukherjee Nagar, Sri Ganganagar. Residents can call to arrange a discussion about study, work, visitor and family visa application support, as well as IELTS and PTE coaching.',
      'Having the office and coaching in one place means language preparation and application planning can be discussed together.',
    ],
    angle: [
      { title: 'Visit in person', text: 'Meet the team at 69 H Block, Mukherjee Nagar. Please phone ahead to arrange a time.' },
      { title: 'Language coaching on site', text: 'IELTS, PTE, TOEFL and spoken English preparation can be asked about during the same visit.' },
      { title: 'Direct contact', text: 'Aman Maan is the primary contact for enquiries and consultation coordination.' },
    ],
    popularServices: ['study-visa', 'ielts-coaching', 'visitor-visa', 'work-visa'],
    faqs: [
      { q: 'Where is the NeoCAN office?', a: '69 H Block, Mukherjee Nagar, Sri Ganganagar, Rajasthan 335001.' },
      { q: 'Do I need an appointment?', a: 'Please call or message before visiting so the right person is available.' },
    ],
  },
  {
    slug: 'hanumangarh', name: 'Hanumangarh', state: 'Rajasthan', office: false, distance: 'about 60 km from our Sri Ganganagar office', phase: 1,
    headline: 'Immigration Consultant Services for Hanumangarh',
    description: 'Hanumangarh residents can contact NeoCAN in Sri Ganganagar about visa and study services. The office is about 60 km away.',
    about: [
      'NeoCAN does not have an office in Hanumangarh. Residents can call or message our Sri Ganganagar office to ask about their requirements and available discussion formats.',
      'Hanumangarh residents who prefer in-person discussion can plan one visit to cover documents and questions together.',
    ],
    angle: [
      { title: 'Plan a single visit', text: 'The Sri Ganganagar office is around 60 km away, so we suggest sharing your questions and documents list by phone or WhatsApp first.' },
      { title: 'Ask about the format', text: 'Call first to confirm whether a phone or online consultation is available for your enquiry.' },
    ],
    popularServices: ['study-visa', 'ielts-coaching', 'visitor-visa'],
    faqs: [
      { q: 'Does NeoCAN have an office in Hanumangarh?', a: 'No. Our office is in Sri Ganganagar. You can call to ask about your enquiry.' },
      { q: 'Can I start without travelling?', a: 'Call Aman Maan to explain your enquiry and confirm the available consultation format.' },
    ],
  },
  {
    slug: 'suratgarh', name: 'Suratgarh', state: 'Rajasthan', office: false, distance: 'about 40 km from our Sri Ganganagar office', phase: 1,
    headline: 'Immigration Consultant Services for Suratgarh',
    description: 'Suratgarh residents can contact NeoCAN about visa and study services; the Sri Ganganagar office is about 40 km away.',
    about: [
      'Suratgarh residents are within a short drive of NeoCAN\'s Sri Ganganagar office. Phone ahead to discuss your needs and arrange a visit.',
      'We can discuss study, visitor and family visa application support and language coaching.',
    ],
    angle: [
      { title: 'Short trip to the office', text: 'The Sri Ganganagar office is around 40 km away. Phone ahead to confirm a time.' },
      { title: 'Contact first', text: 'Ask what information to prepare and which discussion format is available.' },
    ],
    popularServices: ['study-visa', 'visitor-visa', 'ielts-coaching'],
    faqs: [
      { q: 'Is there a NeoCAN office in Suratgarh?', a: 'No. Our office is in Sri Ganganagar.' },
      { q: 'Can coaching be attended from Suratgarh?', a: 'Ask the team about current coaching formats and timings.' },
    ],
  },
  {
    slug: 'chandigarh', name: 'Chandigarh', state: 'Chandigarh (UT)', office: false, phase: 1,
    headline: 'Immigration Consultant Services for Chandigarh Residents',
    description: 'Chandigarh residents can enquire about NeoCAN\'s visa application support. The only office is in Sri Ganganagar.',
    about: [
      'Chandigarh is the shared capital of Punjab and Haryana. NeoCAN is based in Sri Ganganagar; residents can contact the office about relevant services.',
      'Ask about study, work and visitor visa application support and confirm the available discussion format.',
    ],
    angle: [
      { title: 'Start with an enquiry', text: 'Call or message Aman Maan to explain your requirements before planning any travel.' },
      { title: 'Clear about our base', text: 'Our physical office is in Sri Ganganagar, Rajasthan. We do not have a Chandigarh office.' },
    ],
    popularServices: ['study-visa', 'work-visa', 'visitor-visa'],
    faqs: [
      { q: 'Is there a Chandigarh office?', a: 'No. The NeoCAN office is in Sri Ganganagar. Call to ask about consultation options.' },
      { q: 'How do I share documents?', a: 'Discuss options with the team; they will advise a secure approach.' },
    ],
  },
  {
    slug: 'ludhiana', name: 'Ludhiana', state: 'Punjab', office: false, phase: 1,
    headline: 'Immigration Consultant Services for Ludhiana Residents',
    description: 'Ludhiana residents can enquire about NeoCAN services. Our only office is in Sri Ganganagar.',
    about: [
      'Ludhiana is one of Punjab\'s largest cities. NeoCAN is based in Sri Ganganagar; residents can call to ask about relevant services.',
      'We can discuss study, visitor, work and family visa application support, as well as English test preparation.',
    ],
    angle: [
      { title: 'Contact options', text: 'Ask whether a phone or online consultation is available for your enquiry.' },
      { title: 'No local office', text: 'We do not have an office or staff in Ludhiana.' },
    ],
    popularServices: ['study-visa', 'visitor-visa', 'spouse-visa'],
    faqs: [{ q: 'Do you have a Ludhiana branch?', a: 'No. Our office is in Sri Ganganagar. Call to confirm consultation options.' }],
  },
  {
    slug: 'amritsar', name: 'Amritsar', state: 'Punjab', office: false, phase: 1,
    headline: 'Immigration Consultant Services for Amritsar Residents',
    description: 'Amritsar residents can enquire about NeoCAN services. Our only office is in Sri Ganganagar.',
    about: [
      'Amritsar is a major city in Punjab. Residents can contact NeoCAN\'s Sri Ganganagar office to discuss available services.',
      'We can discuss study, visitor and family visa application support.',
    ],
    angle: [
      { title: 'Contact options', text: 'Ask whether a phone or online consultation is available for your enquiry.' },
      { title: 'No local office', text: 'We do not have an office in Amritsar.' },
    ],
    popularServices: ['study-visa', 'visitor-visa', 'ielts-coaching'],
    faqs: [{ q: 'Is there an Amritsar office?', a: 'No. Our office is in Sri Ganganagar. Call to confirm consultation options.' }],
  },
  {
    slug: 'jaipur', name: 'Jaipur', state: 'Rajasthan', office: false, phase: 1,
    headline: 'Immigration Consultant Services for Jaipur Residents',
    description: 'Jaipur residents can enquire about NeoCAN services from our Sri Ganganagar office.',
    about: [
      'Jaipur is the capital of Rajasthan. NeoCAN\'s office is in Sri Ganganagar; Jaipur residents can contact the team about relevant services.',
      'Ask about study, work, visitor and family visa application support and confirm the available discussion format.',
    ],
    angle: [
      { title: 'Rajasthan-based team', text: 'Our team is based in Sri Ganganagar, Rajasthan.' },
      { title: 'No Jaipur office', text: 'We do not have an office in Jaipur. Ask about available consultation formats.' },
    ],
    popularServices: ['study-visa', 'work-visa', 'visitor-visa'],
    faqs: [{ q: 'Do you have a Jaipur office?', a: 'No. Our office is in Sri Ganganagar.' }],
  },
  {
    slug: 'delhi', name: 'Delhi NCR', state: 'Delhi / NCR', office: false, phase: 2,
    headline: 'Immigration Consultant Services for Delhi NCR Residents',
    description: 'Delhi, Noida and Gurugram residents can enquire about NeoCAN services. Our only office is in Sri Ganganagar.',
    about: [
      'This page covers residents of Delhi and the surrounding NCR including Noida and Gurugram.',
      'NCR residents can contact NeoCAN in Sri Ganganagar to ask about services and consultation options.',
    ],
    angle: [
      { title: 'One page for the NCR', text: 'Delhi, Noida and Gurugram are covered together.' },
      { title: 'No NCR office', text: 'Our office is in Sri Ganganagar. Confirm the available discussion format before making plans.' },
    ],
    popularServices: ['study-visa', 'work-visa', 'visitor-visa'],
    faqs: [{ q: 'Is there an office in Delhi?', a: 'No. NeoCAN\'s office is in Sri Ganganagar.' }],
  },
  {
    slug: 'ahmedabad', name: 'Ahmedabad', state: 'Gujarat', office: false, phase: 2,
    headline: 'Immigration Consultant Services for Ahmedabad and Surat',
    description: 'Ahmedabad and Surat residents can enquire about NeoCAN services. There is no local office.',
    about: [
      'This page covers residents of Ahmedabad and Surat in Gujarat.',
      'Gujarat residents can contact NeoCAN\'s Sri Ganganagar office about relevant services.',
    ],
    angle: [
      { title: 'Gujarat clients', text: 'Ahmedabad and Surat are covered together.' },
      { title: 'No Gujarat office', text: 'Ask whether a remote discussion is available for your enquiry.' },
    ],
    popularServices: ['study-visa', 'work-visa', 'visitor-visa'],
    faqs: [{ q: 'Is there an office in Ahmedabad?', a: 'No. NeoCAN\'s office is in Sri Ganganagar.' }],
  },
  {
    slug: 'bikaner', name: 'Bikaner', state: 'Rajasthan', office: false, distance: 'about 175 km from our Sri Ganganagar office', phase: 2,
    headline: 'Immigration Consultant Services for Bikaner',
    description: 'Bikaner residents can enquire about NeoCAN services; the Sri Ganganagar office is about 175 km away.',
    about: [
      'Bikaner is a Rajasthan city roughly 175 km from our Sri Ganganagar office.',
      'Call before travelling to explain your enquiry and confirm what consultation format is available.',
    ],
    angle: [
      { title: 'Contact first', text: 'Given the distance, we suggest calling before planning a visit.' },
      { title: 'No Bikaner office', text: 'We do not have an office in Bikaner.' },
    ],
    popularServices: ['study-visa', 'visitor-visa', 'ielts-coaching'],
    faqs: [{ q: 'Do you have a Bikaner office?', a: 'No. Our office is in Sri Ganganagar.' }],
  },
  {
    slug: 'jalandhar', name: 'Jalandhar', state: 'Punjab', office: false, phase: 2,
    headline: 'Immigration Consultant Services for Jalandhar Residents',
    description: 'Jalandhar residents can enquire about NeoCAN services. Our only office is in Sri Ganganagar.',
    about: [
      'Jalandhar is a major city in Punjab. Residents can contact NeoCAN\'s Sri Ganganagar office about relevant services.',
      'We can discuss study, visitor and family visa application support.',
    ],
    angle: [
      { title: 'Contact options', text: 'Ask whether a phone or online consultation is available for your enquiry.' },
      { title: 'No local office', text: 'We do not have an office in Jalandhar.' },
    ],
    popularServices: ['study-visa', 'visitor-visa', 'spouse-visa'],
    faqs: [{ q: 'Is there a Jalandhar office?', a: 'No. Our office is in Sri Ganganagar.' }],
  },
];
export const locations: Location[] = historicalLocations.filter((location) => location.slug === 'sri-ganganagar').map((location) => ({
  ...location,
  headline: "NeoCAN Office in Sri Ganganagar: Visa & IELTS Help",
  description: "Visit NeoCAN at 69, H Block, Sri Ganganagar for student visa, visitor visa, IELTS and PR enquiries. Open Monday–Sunday, 9 AM–6 PM. Call before you travel.",
  about: ["NeoCAN’s only office is at 69, H Block, Sri Ganganagar. Aman Maan, your main contact, oversees daily operations, speaks directly with clients and coordinates enquiries and follow-up.", "Call or WhatsApp before you travel so Aman can plan time for your discussion. If you cannot visit, call and ask whether an online consultation is available for your case."],
  angle: [{"title": "One office", "text": "69, H Block, Sri Ganganagar, Rajasthan 335001, India."}, {"title": "Opening hours", "text": "Monday–Sunday, 9:00 AM–6:00 PM."}, {"title": "Aman Maan", "text": "Primary contact for enquiries and follow-up."}],
  popularServices: ['study-visa', 'ielts-coaching', 'visitor-visa'],
  faqs: [{"q": "Where is the NeoCAN office?", "a": "NeoCAN’s only office is at 69, H Block, Sri Ganganagar, Rajasthan 335001, India. You can open it in Google Maps from the buttons on this page."}, {"q": "Do I need to call before I visit?", "a": "Please call or WhatsApp first so Aman Maan can plan time for your discussion. The office is open Monday to Sunday, 9:00 AM to 6:00 PM."}, {"q": "Which services can I ask about at the office?", "a": "Student visa, visitor and tourist visa, IELTS preparation and PR enquiries. Aman confirms what help applies to your case and destination."}, {"q": "What should I bring to my first visit?", "a": "Bring your plan in your head and any offer or decision letter you already hold. You do not need other documents for the first conversation, and Aman will tell you how to share anything sensitive."}],
}));

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
