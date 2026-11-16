// One approved answer set for "Who does what in your application?" (owner-supplied wording, 16 Nov 2026).
// Service pages, destination pages and any FAQ that repeats these questions must import from here,
// so the customer gets the same answer everywhere. Do not reword these three answers inline.
// Country pages add a route-specific sentence ONLY where the step is verified for that visa route
// (see countryHelp.ts: roleSubmit / roleYou). Where the answer varies by route, the general wording stands alone.
import type { Faq } from './services';

export const ROLES_HEADING = 'Who does what in your application?';

export const ROLE_HELP: Faq = {
  q: 'What will NeoCAN help me with?',
  a: 'We’ll review your documents and help prepare your application forms.',
};
export const ROLE_SUBMIT: Faq = {
  q: 'Who will book my appointment and submit my application?',
  a: 'Aman Maan personally oversees your application. He’ll tell you whether NeoCAN can book your appointment and who will submit your application.',
};
export const ROLE_YOU: Faq = {
  q: 'What do I need to do myself?',
  a: 'You’ll provide the requested documents, check that your details are correct, sign where required and attend any appointment that requires you to be there in person.',
};

// extra = verified, route-specific sentence(s) appended after the general answer.
export function roleAnswers(extra?: { submit?: string; you?: string }): Faq[] {
  return [
    ROLE_HELP,
    extra?.submit ? { ...ROLE_SUBMIT, a: `${ROLE_SUBMIT.a} ${extra.submit}` } : ROLE_SUBMIT,
    extra?.you ? { ...ROLE_YOU, a: `${ROLE_YOU.a} ${extra.you}` } : ROLE_YOU,
  ];
}
