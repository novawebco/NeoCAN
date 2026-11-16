// Confirmed service scope and application workflow for the 11 destination pages.
// SOURCE OF CONFIRMATION: Aman Maan's instruction of 15 Nov 2026 (see audit/owner-approval-record.md and
// audit/38-country-service-workflow-run.md). It confirms, for all 11 destinations, these services:
// Immigration assistance, Visa assistance, IELTS preparation help, Student Visa, Permanent Residency (PR),
// Visitor Visa and Tourist Visa assistance; and this workflow: Aman Maan personally oversees the application;
// NeoCAN reviews documents, fills in forms, books required appointments and handles submission where the
// official process allows (SUPERSEDED 16 Nov 2026 by applicationRoles.ts: Aman now tells each applicant whether NeoCAN can book and who submits); Aman tells applicants what to provide, what to sign and which appointments to attend.
// Country-specific lines below are limited to official route names and steps already read in audit/18, audit/20
// and audit/countries/*, or stated as general official process. Regulated-advice notices stay as they were;
// no licence claim is made (authorization.ts gate unchanged). Partner duties for Canada are NOT documented, so none are described.
import type { Faq } from './services';
import { roleAnswers } from './applicationRoles';
import { rcicPartners } from './rcicPartners';

export interface HelpRoute { name: string; text: string }
export interface CountryHelp {
  authority: string;        // who decides, short form used in sentences
  study: HelpRoute;
  visit: HelpRoute;
  tourist: HelpRoute;
  pr: HelpRoute;
  ielts: string;            // relevance of IELTS preparation help for this destination
  roleSubmit?: string;     // who submits: ONLY when verified from an official source for this route (else omit)
  roleYou?: string;        // route-specific things the applicant does, ONLY when verified (else omit)
  notice?: string;         // optional country-specific line shown under the help block
}

export const serviceGroups = {
  immigration: 'Immigration assistance',
  visa: 'Visa assistance',
  ielts: 'IELTS preparation help',
};

export const countryHelp: Record<string, CountryHelp> = {
  canada: {
    authority: 'Immigration, Refugees and Citizenship Canada (IRCC)',
    study: { name: 'Study permit', text: 'Usually needs a letter of acceptance from a designated learning institution (DLI) and, for most applicants, a provincial or territorial attestation letter (PAL or TAL).' },
    visit: { name: 'Visitor visa (temporary resident visa)', text: 'For a family visit. Parents and grandparents may be looking at the super visa, which is a separate IRCC visa.' },
    tourist: { name: 'Visitor visa (temporary resident visa)', text: 'Tourism uses the same IRCC visitor visa application as a family visit.' },
    pr: { name: 'Permanent residence', text: 'IRCC lists several routes, including Express Entry, family sponsorship and Provincial Nominee Programs. For Canadian immigration matters NeoCAN works with an RCIC partner, and Aman Maan personally handles PR enquiries and coordinates the work.' },
    ielts: 'Many Canadian schools ask for IELTS, and IRCC accepts IELTS results for some PR routes such as Express Entry. Your school or route sets the score you need, so check it before you book the test.',
    roleSubmit: `${rcicPartners.statement} Aman tells you which parts of your case involve the partner.`,
    roleYou: 'For Canada, that includes giving biometrics (fingerprints and a photo) in person at the collection site IRCC directs you to, if IRCC asks for them, and having a medical exam with an IRCC-approved panel physician, if IRCC asks for one.',
  },
  usa: {
    authority: 'the US Department of State for visas and US Citizenship and Immigration Services (USCIS) for green cards',
    study: { name: 'F-1 student visa (or M-1)', text: 'Starts with a Form I-20 from a school certified by the Student and Exchange Visitor Program (SEVP). You then pay the SEVIS fee, complete the DS-160 and book your visa interview.' },
    visit: { name: 'B-2 visitor visa', text: 'The B-2 visa covers visits to family and friends. The consular officer must be satisfied that you will return to India.' },
    tourist: { name: 'B-2 visitor visa for tourism', text: 'Tourism also uses the B-2 visa and the same DS-160 application.' },
    pr: { name: 'Lawful permanent residence (green card)', text: 'USCIS decides green card applications, which often start with a family petition such as Form I-130. Which category fits you depends on your situation.' },
    ielts: 'The US visa itself does not ask for an IELTS score. Some US universities accept IELTS as proof of English for admission, and your university decides what it accepts.',
    roleSubmit: 'For a US visa, you confirm that your DS-160 is true before it is submitted.',
    roleYou: 'For the US, read your DS-160 carefully and confirm every answer before it is submitted. You attend your biometrics appointment and your visa interview in person, because nobody can attend them for you, and you answer the consular officer\u2019s questions yourself.',
    notice: 'USCIS says only an attorney or an accredited representative can give legal advice about a US immigration case. NeoCAN helps you with documents, forms and appointments and does not replace legal advice.',
  },
  uk: {
    authority: 'UK Visas and Immigration (UKVI)',
    study: { name: 'Student visa', text: 'Needs a Confirmation of Acceptance for Studies (CAS) from a licensed student sponsor. You apply within 6 months of receiving it.' },
    visit: { name: 'Standard Visitor visa', text: 'Covers visiting family or friends, generally for up to 6 months. It does not allow work or long study.' },
    tourist: { name: 'Standard Visitor visa', text: 'Tourism uses the same Standard Visitor visa application as a family visit.' },
    pr: { name: 'Settlement (indefinite leave to remain)', text: 'In the UK, permanent residence is called settlement or indefinite leave to remain (ILR). It usually follows time in the UK on an eligible visa, so Aman first looks at which route you are on or plan to use.' },
    ielts: 'Some UK courses need a Secure English Language Test, such as IELTS for UKVI. For other courses the university assesses your English and records it on the CAS, so ask your university which applies.',
    roleYou: 'For the UK, that includes giving your biometrics, either in person at a visa application centre or with the UKVI ID Check app if GOV.UK says that applies to you, and following any extra request from UKVI, such as for a document or an interview.',
  },
  'new-zealand': {
    authority: 'Immigration New Zealand (INZ)',
    study: { name: 'Student Visa', text: 'Most students studying for more than 3 months need an offer of place from an approved education provider. INZ also checks funds, insurance, health and character.' },
    visit: { name: 'Visitor Visa', text: 'For a visit to family or friends. INZ publishes the document checklist for Indian applicants.' },
    tourist: { name: 'Visitor Visa', text: 'Tourism uses the same INZ Visitor Visa as a family visit.' },
    pr: { name: 'Resident Visa', text: 'INZ’s resident routes include the Skilled Migrant Category. Which one fits you depends on your work, qualifications and situation.' },
    ielts: 'Many New Zealand providers ask for IELTS, and INZ accepts IELTS as proof of English for some visas. Your provider or visa category sets the score you need.',
    roleYou: 'For New Zealand, that includes giving biometrics, taking a medical exam or getting a police certificate if INZ asks for them, and setting up the online login INZ asks for if Aman says your case needs it.',
  },
  cyprus: {
    authority: 'the Civil Registry and Migration Department (CRMD) of Cyprus',
    study: { name: 'Student entry permit and residence permit', text: 'Non-EU students need a visa or entry permit from the CRMD before arriving, and must then apply for a residence permit within 10 days of arrival. The list includes an acceptance letter, certified academic copies, a police record and medical exams.' },
    visit: { name: 'Visit to family or friends', text: 'Aman checks the entry rule for your passport and your trip against the Cyprus Ministry of Foreign Affairs list, because this guide could not confirm it for Indian passport holders.' },
    tourist: { name: 'Tourist visit', text: 'Tourist entry is checked the same way: Aman confirms whether you need a visa and what to carry.' },
    pr: { name: 'Residence and permanent residence permits', text: 'These are handled by the CRMD. Aman explains which permit route fits your situation and what the CRMD asks for.' },
    ielts: 'Many English-taught programmes in Cyprus ask for IELTS or another English test. Your university sets the score you need.',
    roleYou: 'For a Cyprus student application, that also includes the medical examinations and police record that the CRMD list asks for.',
  },
  italy: {
    authority: 'the Italian Ministry of Foreign Affairs and the Italian mission that covers you',
    study: { name: 'National visa (type D) for study', text: 'For stays over 90 days. The Italian office that covers you publishes the current study checklist, and Aman checks it with you.' },
    visit: { name: 'Schengen visa (type C) for a family visit', text: 'For stays of up to 90 days in any 180-day period. The Italian office that covers you publishes the document list, and Aman checks it with you.' },
    tourist: { name: 'Schengen visa (type C) for tourism', text: 'Tourism uses the same Schengen type C visa. Aman checks the current Italian document list with you.' },
    pr: { name: 'Permesso di soggiorno and long-term residence', text: 'In Italy, a residence permit (permesso di soggiorno) follows arrival on a national visa, and long-term residence comes later. Aman explains which route fits your situation.' },
    ielts: 'Many English-taught university programmes in Italy ask for IELTS or a similar test. Your university sets the score you need.',
  },
  netherlands: {
    authority: 'the Immigration and Naturalisation Service (IND)',
    study: { name: 'Student residence permit with an MVV', text: 'Your educational institution applies to the IND for the student residence permit. An MVV (provisional residence permit) is collected from the Dutch embassy or consulate, and you then have 90 days to travel.' },
    visit: { name: 'Schengen short-stay visa (family and friends)', text: 'Netherlands Worldwide publishes a checklist for visiting family and friends in India, which lists what your host must provide.' },
    tourist: { name: 'Schengen short-stay visa (tourism)', text: 'Tourism uses the same Schengen short-stay visa, with an itinerary, accommodation and travel insurance.' },
    pr: { name: 'Residence permit and permanent residence', text: 'The IND handles Dutch residence permits. Permanent residence usually comes after several years on a residence permit. Aman explains which route fits you.' },
    ielts: 'Many English-taught programmes in the Netherlands ask for IELTS or a similar test. Your institution sets the score you need.',
    roleSubmit: 'For a Dutch student residence permit, your educational institution submits the application to the IND, not you or NeoCAN.',
    roleYou: 'For a Dutch student residence permit, send your institution the documents it asks for (NeoCAN reviews them with you first) and pay the IND fee to your institution. You then collect your MVV from the Dutch embassy or consulate and have 90 days to travel.',
  },
  russia: {
    authority: 'the Russian authorities',
    study: { name: 'Student visa', text: 'This guide does not describe study entry, and the e-visa does not cover study. Aman checks the Embassy of the Russian Federation in India’s published requirements with you.' },
    visit: { name: 'E-visa or private (guest) visit visa', text: 'The unified e-visa is applied for online and covers a private or business visit. For a longer family visit, Aman checks whether the e-visa or a regular visa fits.' },
    tourist: { name: 'Unified e-visa', text: 'Tourism can use the unified e-visa on the official portal. The portal and the Government of India page show the permitted stay differently, so confirm it on the portal before you book.' },
    pr: { name: 'Temporary residence permit (RVP) and residence permit (VNZh)', text: 'Russia’s residence routes are the temporary residence permit and the residence permit. Aman explains which one fits and what the authorities ask for.' },
    ielts: 'Many degree courses in Russia are taught in Russian, where Russian-language proof matters more. IELTS is relevant only if your English-taught programme asks for it.',
    roleSubmit: 'For the Russian e-visa, you submit the application yourself from your own personal account on the official portal, and the e-visa needs no appointment.',
    roleYou: 'For Russia, that includes creating your account on the official e-visa portal, submitting the application yourself and keeping a passport valid for at least 6 months.',
  },
  'czech-republic': {
    authority: 'the Embassy of the Czech Republic in New Delhi',
    study: { name: 'Long-term visa (type D) for study', text: 'The Embassy says everyone applying for a long-term visa must submit the application at the Embassy personally, after booking an appointment during its registration windows.' },
    visit: { name: 'Schengen short-stay visa (family and friends)', text: 'For stays of up to 90 days. Applicants legally residing in India apply at a VFS Global centre, no earlier than six months and no later than 15 days before travel.' },
    tourist: { name: 'Schengen short-stay visa (tourism)', text: 'Tourism uses the same short-stay visa. The Embassy links purpose-specific document lists, and the minimum travel medical insurance cover is EUR 30,000 from insurers on its approved list.' },
    pr: { name: 'Long-term residence and permanent residence', text: 'Czech residence rules are set by Czech authorities. Aman explains which route fits your situation and what they ask for.' },
    ielts: 'Many English-taught programmes in the Czech Republic ask for IELTS or a similar test. Your university sets the score you need.',
    roleSubmit: 'You submit a Czech long-term visa yourself, in person at the Embassy in New Delhi after you have an appointment; the Embassy says every long-term applicant must apply personally. For a short-stay visa, applicants legally residing in India apply at a VFS Global centre.',
    roleYou: 'For the Czech Republic, take your passport and documents to the Embassy for a long-term visa, or to a VFS Global centre for a short stay, and arrange travel insurance for the whole trip, as Aman tells you.',
  },
  greece: {
    authority: 'the Greek authorities',
    study: { name: 'National visa (type D) for study', text: 'Study longer than 90 days generally needs a national visa and admission to a recognised institution. This guide could not confirm the Greek study visa list for India, so Aman checks it with the Greek mission.' },
    visit: { name: 'Schengen visa (type C) for a family visit', text: 'Indian passport holders apply for a Schengen visa for short stays. We could not read the Greek document list for India, so Aman checks the current list with you.' },
    tourist: { name: 'Schengen visa (type C) for tourism', text: 'Tourism uses the same Schengen type C visa. Aman checks the current Greek document list with you.' },
    pr: { name: 'Residence permit', text: 'Greek residence permits are decided by the Greek authorities. Aman explains which route fits your situation and what they ask for.' },
    ielts: 'Many English-taught programmes in Greece ask for IELTS or a similar test. Your university sets the score you need.',
  },
  mauritius: {
    authority: 'the Mauritian authorities',
    study: { name: 'Entry or residence permit to study', text: 'The Passport and Immigration Office publishes guidelines and advises students to travel only after their study application has been approved.' },
    visit: { name: 'Visit permission', text: 'Two Government of India pages differ on whether a visa is needed in advance, and neither gives a reliable stay length. Confirm the rule and the permitted stay with the Mauritian authorities before you book.' },
    tourist: { name: 'Visit permission', text: 'A holiday follows the same entry rule. Aman helps you check what you must show on arrival.' },
    pr: { name: 'Occupation, residence and permanent residence permits', text: 'Mauritius has separate permits for work, residence and permanent residence. Aman explains which route fits your situation and what the authorities ask for.' },
    ielts: 'IELTS is relevant if your college or course in Mauritius asks for proof of English. A short visit does not need an IELTS score.',
    roleYou: 'For Mauritius, you show your documents to the immigration officer when you arrive.',
  },
};

export const FEE_FAQ: Faq = {
  q: 'How much will I pay, and what does the fee cover?',
  a: 'Before you agree to any paid work, Aman Maan will explain NeoCAN\u2019s service fee and what it covers. He\u2019ll also explain which government, appointment or test fees you need to pay separately.',
};

// The three application-role answers are shown once, in the "Who does what in your application?" section
// (see CountryHelp.astro and applicationRoles.ts), so they are not repeated as FAQs.
export function workflowFaqs(slug: string): Faq[] {
  return countryHelp[slug] ? [FEE_FAQ] : [];
}

export function countryRoleAnswers(slug: string): Faq[] {
  const h = countryHelp[slug];
  return roleAnswers({ submit: h?.roleSubmit, you: h?.roleYou });
}
