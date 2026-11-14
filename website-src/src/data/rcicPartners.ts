// RCIC Members and Partners: owner-confirmed public statement.
// RECORD (internal; do not render the record fields):
// - Statement confirmed by Aman Maan (reported 2026-11-13); wording updated on the owner's instruction 2026-11-14 to describe one RCIC partner. Status: OWNER CONFIRMED.
// - The partner's name and registration number are intentionally not published (owner request).
// - Individual registration verification: PENDING. No names, R-numbers, certificates or CICC register
//   lookups are held. Do not add any until documents are received and checked on the public CICC register.
// - This statement does NOT claim NeoCAN itself is licensed by the CICC, and does not by itself change
//   canAdvertisePR() in authorization.ts. PR remains gated there.
export const rcicRecord = {
  status: 'OWNER_CONFIRMED',
  confirmedBy: 'Aman Maan',
  recordedOn: '2026-11-13',
  individualVerification: 'PENDING',
} as const;

export const rcicPartners = {
  heading: 'Canadian immigration and our RCIC partner',
  statement: 'For Canadian immigration matters, NeoCAN works with a Regulated Canadian Immigration Consultant (RCIC) partner.',
  note: 'Aman Maan personally handles PR enquiries, discusses your requirements and coordinates the work. No outcome is guaranteed, and decisions are made by the relevant Canadian authority.',
} as const;
