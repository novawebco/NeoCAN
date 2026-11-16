// Verified local facts per State / UT, used by the generated State pages (states.ts).
// Evidence log: audit/states/research-log.md and audit/states/rollout-research.md (read 16 Nov 2026).
// Only two kinds of local fact are used:
//  1. ielts: IELTS.org test-centre listings that were actually READ (third-party IDP Education India centres).
//  2. nlVfs / nl: cities named on the Netherlands Worldwide pages (updated 2026-10-19 and 2026-08-26) for Netherlands visas.
// Anything not listed here was NOT confirmed. Search summaries and aggregator pages are never used as facts.
// Do not add visa-centre addresses, US consulate details, fees or dates unless read from an official page.

export interface IeltsCentre { city: string; place: string; note?: string; ukvi?: 'listed' | 'not-listed' }
export interface StateFacts {
  slug: string;
  name: string;
  kind: 'State' | 'Union Territory';
  short?: string;               // short name for titles
  towns: string;                // main cities, for plain-English examples (NOT a coverage claim)
  ielts: IeltsCentre[];         // centres read on ielts.org
  nlVfs?: string;               // city as named in the Dutch government's list of India VFS centres
  near?: string[];              // slugs of neighbouring States/UTs whose READ IELTS.org listings may be pointed to
  nlPost?: string;              // Dutch post named for MVV collection
  extra?: string[];             // other verified, official, location-specific facts (one sentence each)
  review: string[];             // publication-review items for the tracker
}

export const OFFICIAL_NL_VFS_CITIES = 'Ahmedabad, Bangalore, Chandigarh, Chennai, Cochin, Hyderabad, Jalandhar, Kolkata, Lucknow, Mumbai, Pune and New Delhi';

export const stateFacts: StateFacts[] = [
  { slug: 'rajasthan', name: 'Rajasthan', kind: 'State', towns: 'Jaipur, Jodhpur, Bikaner, Udaipur and Kota', ielts: [{ city: 'Jaipur', place: 'Jaipur Centre Mall, Tonk Road' }], review: [] },
  { slug: 'maharashtra', name: 'Maharashtra', kind: 'State', towns: 'Mumbai, Pune, Nagpur and Nashik', ielts: [{ city: 'Mumbai', place: 'Kanakia Wall Street, Andheri East', note: 'computer-delivered Academic, General Training and UKVI tests are listed', ukvi: 'listed' }], nlVfs: 'Mumbai and Pune', nlPost: 'the Consulate General of the Netherlands in Mumbai', review: ['US consulate and visa application centre details for Mumbai not verified (travel.state.gov and in.usembassy.gov returned 403)', 'IELTS.org pages for Pune and Nagpur not read'] },
  { slug: 'andhra-pradesh', name: 'Andhra Pradesh', kind: 'State', towns: 'Visakhapatnam, Vijayawada, Guntur and Tirupati', ielts: [{ city: 'Vijayawada', place: 'Santhi Plaza, near Benz Circle', note: 'Academic, General Training and UKVI tests are listed', ukvi: 'listed' }], review: ['IELTS.org page for Visakhapatnam not read (404 on the slug tried)', 'No visa application centre confirmed in the state'] },
  { slug: 'tamil-nadu', name: 'Tamil Nadu', kind: 'State', towns: 'Chennai, Coimbatore, Madurai and Tiruchirappalli', ielts: [{ city: 'Chennai', place: 'Canberra House, Pantheon Road, Egmore', note: 'Academic, General Training and UKVI tests are listed', ukvi: 'listed' }], nlVfs: 'Chennai', review: ['US consulate Chennai details not verified', 'IELTS.org page for Coimbatore not read'] },
  { slug: 'kerala', name: 'Kerala', kind: 'State', towns: 'Kochi, Thiruvananthapuram, Kozhikode and Thrissur', ielts: [{ city: 'Kochi', place: 'Kadavanthra', note: 'Academic, General Training and UKVI tests are listed', ukvi: 'listed' }], nlVfs: 'Cochin (Kochi)', review: ['IELTS.org pages for other Kerala cities not read'] },
  { slug: 'uttar-pradesh', name: 'Uttar Pradesh', kind: 'State', towns: 'Lucknow, Noida, Kanpur, Varanasi and Agra', ielts: [{ city: 'Lucknow', place: 'Aliganj', ukvi: 'listed' }, { city: 'Noida', place: 'Sector 18', ukvi: 'listed' }], nlVfs: 'Lucknow', review: ['IELTS.org pages for other UP cities not read'] },
  { slug: 'haryana', name: 'Haryana', kind: 'State', towns: 'Gurugram, Faridabad, Ambala and Karnal', ielts: [{ city: 'Gurugram', place: 'Global Gateway Towers, Sector 26', note: 'only the Academic test is listed there', ukvi: 'not-listed' }, { city: 'Karnal', place: 'Shyam Nagar', ukvi: 'listed' }, { city: 'Ambala', place: 'Model Town', ukvi: 'not-listed' }], review: ['Gurugram listing shows the Academic test only (read twice on 16 Nov 2026); the page tells applicants to check the booking page', 'No visa application centre confirmed in the state', 'IELTS.org pages for Faridabad, Hisar, Rohtak, Panipat and Sirsa not read'] },
  { slug: 'delhi', name: 'Delhi', kind: 'Union Territory', towns: 'New Delhi, South Delhi, West Delhi and East Delhi', ielts: [{ city: 'New Delhi', place: 'International Trade Tower, Nehru Place', note: 'Academic, General Training and UKVI tests are listed', ukvi: 'listed' }], nlVfs: 'New Delhi', nlPost: 'the Dutch embassy in New Delhi', extra: ['The Czech Embassy is at 50-M Niti Marg, Chanakyapuri, New Delhi, and opens Monday to Friday, 08:00 to 16:30. For a long-term study visa it takes appointment requests by email in announced booking windows, so check its booking page for the current window.'], review: ['US Embassy New Delhi, VFS UK, Canada and Italy pages not read (403)', 'Czech booking windows change; the page does not quote dates'] },
  { slug: 'punjab', name: 'Punjab', kind: 'State', towns: 'Ludhiana, Jalandhar, Amritsar, Patiala and Bathinda', ielts: [{ city: 'Jalandhar', place: 'Chotti Baradari, opposite PIMS Hospital', ukvi: 'listed' }, { city: 'Ludhiana', place: 'Model Town', ukvi: 'listed' }, { city: 'Amritsar', place: 'Ranjit Avenue', ukvi: 'listed' }, { city: 'Bathinda', place: 'Goniana Road', ukvi: 'listed' }, { city: 'Moga', place: 'Ludhiana Road' }, { city: 'Patiala', place: 'Leela Bhawan Market', note: 'UKVI tests listed', ukvi: 'listed' }, { city: 'Hoshiarpur', place: 'Sutheri Road', note: 'no UKVI test is listed', ukvi: 'not-listed' }], nlVfs: 'Jalandhar', review: ['LEGAL REVIEW: Punjab Travel Professionals Regulation Rules 2013 license consultancies and IELTS coaching firms with premises in Punjab; the Act text was not read and applicability to an out-of-state firm is unknown (audit/states/punjab-evaluation.md). Do not publish before owner and legal review.', 'VFS Canada Jalandhar page not readable (403)'] },
  { slug: 'chandigarh', name: 'Chandigarh', kind: 'Union Territory', towns: 'Chandigarh, Mohali and Panchkula', ielts: [{ city: 'Chandigarh', place: 'Sector 17A', note: 'Academic, General Training and UKVI tests are listed', ukvi: 'listed' }], nlVfs: 'Chandigarh', review: ['LEGAL REVIEW: same Punjab licensing question (the area includes Mohali); do not publish before owner and legal review', 'VFS Canada Chandigarh page not readable (403); dated notices only'] },
  { slug: 'gujarat', name: 'Gujarat', kind: 'State', towns: 'Ahmedabad, Surat, Vadodara and Rajkot', ielts: [{ city: 'Ahmedabad', place: 'Gulbai Tekra', ukvi: 'listed' }, { city: 'Surat', place: 'Piplod, Dumas Road', ukvi: 'listed' }, { city: 'Vadodara', place: 'Chakli Circle', ukvi: 'listed' }], nlVfs: 'Ahmedabad', review: ['VFS Canada Ahmedabad address conflict (Paldi versus Motera); live page 403, so no centre address is published', 'Vadodara listing shows an apparent PIN error; no PIN published', 'Fraud-awareness wording deliberately not used; needs legal and owner review', 'Rajkot centre not confirmed'] },
  { slug: 'west-bengal', name: 'West Bengal', kind: 'State', towns: 'Kolkata, Siliguri, Howrah and Durgapur', ielts: [{ city: 'Kolkata', place: 'Park Street', ukvi: 'listed' }], nlVfs: 'Kolkata', review: ['US consulate Kolkata and visa application centre details not verified', 'IELTS.org pages for Siliguri and other Kolkata venues not read'] },
  { slug: 'karnataka', name: 'Karnataka', kind: 'State', towns: 'Bengaluru, Mysuru, Mangaluru and Hubballi', ielts: [], nlVfs: 'Bangalore', nlPost: 'the Consulate General of the Netherlands in Bangalore', review: ['No IELTS.org listing could be read for Bengaluru (slugs tried returned 404)'] },
  { slug: 'telangana', name: 'Telangana', kind: 'State', towns: 'Hyderabad, Warangal, Karimnagar and Nizamabad', ielts: [{ city: 'Hyderabad', place: 'Begumpet and Kukatpally', ukvi: 'listed' }], nlVfs: 'Hyderabad', review: ['US consulate Hyderabad details not verified (sources conflict on the interview location)', 'Other Telangana cities not read'] },
];

export const slugify = (n: string) => n.toLowerCase().replace(/ /g, '-');

// Locations with no verified local fact beyond the Dutch VFS city list. Pages for these say plainly what could not be confirmed.
const none = (slug: string, name: string, kind: 'State' | 'Union Territory', towns: string, opts: { ielts?: IeltsCentre[]; near?: string[]; review?: string[] } = {}): StateFacts => ({
  slug, name, kind, towns, ielts: opts.ielts ?? [], near: opts.near,
  review: [...(opts.ielts?.length ? [] : ['No IELTS.org listing could be read for the main city (slugs tried returned 404, 429 or no listing)']), 'No visa application centre confirmed', ...(opts.review ?? [])],
});
export const otherFacts: StateFacts[] = [
  none('arunachal-pradesh', 'Arunachal Pradesh', 'State', 'Itanagar, Naharlagun and Pasighat'),
  none('assam', 'Assam', 'State', 'Guwahati, Dibrugarh, Silchar and Jorhat', { near: ['west-bengal'], review: ['ielts.org Guwahati page returned 404 when fetched (a search summary mentions Hotel Rajmahal, AT Road; unverified)'] }),
  none('bihar', 'Bihar', 'State', 'Patna, Gaya, Muzaffarpur and Bhagalpur', { near: ['uttar-pradesh', 'west-bengal'] }),
  none('chhattisgarh', 'Chhattisgarh', 'State', 'Raipur, Bilaspur, Bhilai and Durg', { near: ['madhya-pradesh', 'odisha', 'telangana'], review: ['ielts.org Raipur pages returned 404 when fetched (search summaries mention Hotel Ivy, Ring Road; unverified)'] }),
  none('goa', 'Goa', 'State', 'Panaji, Margao, Vasco da Gama and Mapusa', { ielts: [{ city: 'Panaji', place: 'MG Road, Magnum Centre', ukvi: 'listed' }] }),
  none('himachal-pradesh', 'Himachal Pradesh', 'State', 'Shimla, Dharamshala, Solan and Mandi', { near: ['punjab', 'haryana', 'uttarakhand'] }),
  none('jharkhand', 'Jharkhand', 'State', 'Ranchi, Jamshedpur, Dhanbad and Bokaro', { near: ['west-bengal', 'odisha'] }),
  none('madhya-pradesh', 'Madhya Pradesh', 'State', 'Indore, Bhopal, Jabalpur and Gwalior', { ielts: [{ city: 'Bhopal', place: 'MP Nagar', ukvi: 'listed' }], review: ['ielts.org Indore page returned 404 when fetched'] }),
  none('manipur', 'Manipur', 'State', 'Imphal and Churachandpur'),
  none('meghalaya', 'Meghalaya', 'State', 'Shillong and Tura'),
  none('mizoram', 'Mizoram', 'State', 'Aizawl and Lunglei', { review: ['ielts.org Aizawl (aizwal) page returned 404 when fetched (a search summary mentions Hrangbana College; unverified)'] }),
  none('nagaland', 'Nagaland', 'State', 'Kohima and Dimapur'),
  none('odisha', 'Odisha', 'State', 'Bhubaneswar, Cuttack, Rourkela and Berhampur', { ielts: [{ city: 'Bhubaneswar', place: 'Kharvela Nagar', ukvi: 'listed' }] }),
  none('sikkim', 'Sikkim', 'State', 'Gangtok and Namchi', { near: ['west-bengal'] }),
  none('tripura', 'Tripura', 'State', 'Agartala and Dharmanagar'),
  none('uttarakhand', 'Uttarakhand', 'State', 'Dehradun, Haridwar, Haldwani and Roorkee', { ielts: [{ city: 'Dehradun', place: 'Ballupur Chowk', ukvi: 'listed' }], review: ['ielts.org Rudrapur page returned 404 when fetched'] }),
  none('andaman-and-nicobar-islands', 'Andaman and Nicobar Islands', 'Union Territory', 'Port Blair'),
  { ...none('dadra-and-nagar-haveli-and-daman-and-diu', 'Dadra and Nagar Haveli and Daman and Diu', 'Union Territory', 'Silvassa, Daman and Diu', { near: ['gujarat', 'maharashtra'] }), short: 'Dadra, Nagar Haveli, Daman, Diu' },
  none('jammu-and-kashmir', 'Jammu and Kashmir', 'Union Territory', 'Srinagar and Jammu', { near: ['punjab'], review: ['ielts.org Jammu page returned 404 when fetched (a search summary mentions KK Resorts, Talab Tillo; unverified)'] }),
  none('ladakh', 'Ladakh', 'Union Territory', 'Leh and Kargil'),
  none('lakshadweep', 'Lakshadweep', 'Union Territory', 'Kavaratti'),
  none('puducherry', 'Puducherry', 'Union Territory', 'Puducherry and Karaikal', { near: ['tamil-nadu'], review: ['ielts.org Pondicherry page returned 404 when fetched (a search summary mentions Hotel Annamalai International; unverified)'] }),
];
export const allFacts: StateFacts[] = [...stateFacts, ...otherFacts];
