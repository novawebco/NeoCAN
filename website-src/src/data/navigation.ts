import { priorityServices } from './services';
import { countries, pendingCountries } from './countries';

export const serviceMenu = priorityServices.map((s) => ({ id: s.label, label: s.label, href: s.href, items: [] as {label: string; href: string}[] }));

const group = (g: string) => countries.filter((c) => c.group === g).map((c) => ({ label: c.name, href: `/countries/${c.slug}/` }));
export const countryMenu = [
  { label: 'Americas', items: group('Americas') },
  { label: 'Europe', items: group('Europe') },
  { label: 'Asia-Pacific & Middle East', items: group('Asia-Pacific & Middle East') },
  { label: 'Africa & Indian Ocean', items: group('Africa & Indian Ocean') },
];
// All eleven priority destinations now have a general guide; nothing is listed as pending in the menu.
export const pendingCountryNames: string[] = [];

export const nav = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/', mega: 'services' },
    { label: 'Countries', href: '/countries/', mega: 'countries' },
    { label: 'Locations', href: '/locations/' },
    { label: 'Aman Maan', href: '/about/aman-maan/' },
  ],
  footer: {
    quick: [
      { label: 'About NeoCAN', href: '/about/' },
      { label: 'About Aman Maan', href: '/about/aman-maan/' },
      { label: 'Consultation', href: '/consultation/' },
      { label: 'FAQ', href: '/faq/' },
      { label: 'Resources', href: '/resources/' },
      { label: 'Locations', href: '/locations/' },
      { label: 'Contact', href: '/contact/' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy-policy/' },
      { label: 'Terms', href: '/terms/' },
      { label: 'Disclaimer', href: '/disclaimer/' },
    ],
  },
};
