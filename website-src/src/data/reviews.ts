// Verified Google review data, kept separate from the UI (GoogleReviews.astro).
// Provenance: exact, complete excerpts visible in owner-supplied Google Maps screenshots (13 Nov 2026).
// The live Google profile could not be opened (browser extension unavailable), so this is NOT a full
// crawl. Dates and per-review links were not visible in the screenshots and are therefore null.
// Do NOT add an aggregate rating or review count; none has been verified.
export interface GoogleReview {
  id: string;
  name: string;
  stars: 1 | 2 | 3 | 4 | 5;
  quote: string;
  date: string | null;
  sourceUrl: string | null;
}

export const reviewSource = {
  platform: 'Google',
  verification: 'owner-supplied screenshots',
  retrievedCount: 4,
};

export const reviews: GoogleReview[] = [
  { id: 'arshdeep-singh', name: 'Arshdeep Singh', stars: 5, quote: 'Amazing experience with Aman sir. Very kind and helpful person 💗', date: null, sourceUrl: null },
  { id: 'rajpal-singh', name: 'Rajpal Singh', stars: 5, quote: "My experience with neocan consultants was awesome and I'll be, the staff and the man himself Aman sir is too supportive and humble. I recommend them extremely to each and everyone who wanna begin their abroad journey.", date: null, sourceUrl: null },
  { id: 'harman-ghuman', name: 'Harman Ghuman', stars: 5, quote: 'Hats off to the staff and guidance that I got from neocan ❤️', date: null, sourceUrl: null },
  { id: 'armaan-brar', name: 'Armaan brar', stars: 5, quote: 'Very smooth filing proces and the behaviour of staff is excellent .', date: null, sourceUrl: null },
];
