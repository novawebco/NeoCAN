// Page-job copy for the eleven destination pages (14 Nov 2026 SEO run). Facts here are limited to what the
// existing guides already state from official pages read on 13 Nov 2026 (audit/18, audit/20) and the school-
// style process facts in them. Nothing here confirms that NeoCAN offers a given service for a given country:
// every page tells the visitor to ask Aman Maan. Research record: audit/34-countries-run.md.
import type { Faq } from './services';

export interface CountryExtra {
  seoTitle: string;
  seoDescription: string;
  h1: string;
  answer: string;
  situationsTitle: string;
  situations: { title: string; text: string; points?: string[] }[];
  askTitle: string;
  askAman: string[];
  whatsappText: string;
  ctaLabel: string;
  faqs: Faq[];
  extraLinks?: { label: string; href: string }[];
  readyTitle?: string; readyText?: string; processTitle?: string; process?: { title: string; text: string }[]; official?: { label: string; url: string }[]; considerations?: { title: string; text: string }[];
}

const ASK = (what: string) => `Tell Aman ${what}. He will confirm what help NeoCAN offers for that purpose; this guide is general information only.`;

export const countryExtras: Record<string, CountryExtra> = {
  canada: {
    "seoTitle": "Canada Study, Visitor Visa & PR Help | NeoCAN",
    "seoDescription": "Study, visit family or settle in Canada? Talk to Aman Maan at NeoCAN in Sri Ganganagar. For Canadian immigration matters, NeoCAN works with an RCIC partner.",
    "h1": "Canada: how NeoCAN can help with your study, visit or PR plans",
    "answer": "Tell Aman Maan whether you plan to study, visit family or explore PR in Canada. For Canadian immigration matters, NeoCAN works with a Regulated Canadian Immigration Consultant (RCIC) partner, and Aman confirms what help applies to your case.",
    "situationsTitle": "Which Canada plan are you making?",
    "situations": [
      {
        "title": "Study in Canada",
        "text": "IRCC says your school gives you a letter of acceptance, and the school must be a designated learning institution (DLI). Most applicants also need a provincial or territorial attestation letter (PAL/TAL) from the province where they will study. IRCC lists exceptions, such as master’s and doctoral programmes at public institutions from 1 January 2026, and Quebec uses its own acceptance certificate. Rules change, so read the IRCC page for your case.",
        "points": [
          "Your school’s name and whether it is on the DLI list",
          "Whether you hold the acceptance letter and the PAL/TAL",
          "Your course level and intake",
          "Your English test status (see IELTS preparation)"
        ]
      },
      {
        "title": "Visit family in Canada",
        "text": "IRCC’s guidance on an invitation letter asks the host for their full name, date of birth, address and phone number, their relationship to you, the purpose and length of the visit, where you will stay and who pays, with a copy of their status document. Check the current IRCC document list to see whether the letter is required for you. A letter does not guarantee approval.",
        "points": [
          "Your host’s name, status in Canada and address",
          "Your relationship to your host",
          "Your travel dates, where you will stay and who will pay",
          "Earlier travel you can describe"
        ]
      },
      {
        "title": "Parents or grandparents visiting",
        "text": "A super visa is a separate IRCC visa for parents and grandparents. Ask Aman whether NeoCAN assists with it, and read IRCC’s eligibility page, including the insurance it asks for.",
        "points": [
          "Your relationship to your Canadian host",
          "Your host’s status in Canada",
          "How long you hope to stay"
        ]
      },
      {
        "title": "PR or other immigration matters",
        "text": "Aman Maan personally handles PR enquiries and coordinates the work. Ask which parts of your case he will handle and which the RCIC partner will handle. IRCC alone decides every application.",
        "points": [
          "Whether you will apply alone or with family",
          "Your work, study and language-test situation in brief"
        ]
      }
    ],
    "askTitle": "Questions to ask Aman about Canada",
    "askAman": [
      "I’m visiting my family in Canada. Can NeoCAN help me prepare my application, and who will fill in and submit the form?",
      "I have an acceptance letter. Can NeoCAN help me check the documents IRCC asks for with a study permit, including the PAL or TAL?",
      "Can NeoCAN help with a super visa for my parents?",
      "Which parts of my PR enquiry will Aman handle, and which will the RCIC partner handle?"
    ],
    "whatsappText": "Hello NeoCAN, I would like to discuss Canada. City: ... Purpose (study / family visit / super visa / PR / other): ... Where I am in the process (for example: have an acceptance letter / no offer yet): ... Planned date (optional): ... Help I need: ...",
    "ctaLabel": "Discuss your Canada plans with Aman Maan",
    "readyTitle": "What to tell Aman first",
    "readyText": "Your city, your purpose (study, family visit, super visa or PR), where you are in the process, your planned date if you have one, and the help you want. Keep any acceptance, invitation or refusal letter ready, but do not send passport scans or other sensitive documents in your first message; Aman will tell you how to share them.",
    "processTitle": "What happens after you speak with Aman Maan",
    "process": [
      {
        "title": "Speak with Aman Maan",
        "text": "Call, WhatsApp, email or visit the Sri Ganganagar office. Aman listens to your situation and your question."
      },
      {
        "title": "Confirm what help applies",
        "text": "He tells you whether NeoCAN can help with your Canada plan, which parts he handles and, for Canadian immigration matters, which parts the RCIC partner handles, and any fee before work begins."
      },
      {
        "title": "Check the official requirements",
        "text": "You are pointed to the IRCC page and document list for your route, and you work through a checklist."
      },
      {
        "title": "Agree the next step",
        "text": "You decide whether to go ahead. IRCC alone decides the application, and Aman oversees follow-up."
      }
    ],
    "faqs": [
      {
        "q": "Can NeoCAN help with the kind of Canada visa I need?",
        "a": "Tell Aman whether you need a study permit, a visitor visa, a super visa or PR guidance. He will confirm what help NeoCAN offers for that purpose; this guide is general information only. For Canadian immigration matters, NeoCAN works with an RCIC partner."
      },
      {
        "q": "I’m visiting family in Canada. What should I tell Aman?",
        "a": "Tell him who you are visiting, their status in Canada, how you are related, your dates and who will pay. Ask whether NeoCAN can help you prepare the application and who will fill in and submit the form."
      },
      {
        "q": "Do I need an invitation letter for a Canadian visitor visa?",
        "a": "IRCC describes what the letter should contain, but check the current document list for your visa office to see whether it is required for you. A letter does not guarantee approval. Ask Aman what your host should include."
      },
      {
        "q": "What is a PAL or TAL, and do I need one for a study permit?",
        "a": "It is a provincial or territorial attestation letter issued by the province or territory where you plan to study, and most study permit applicants need one. IRCC lists exceptions, such as master’s and doctoral programmes at public institutions from 1 January 2026. Ask your school whether it is getting yours, and check IRCC’s page for your case."
      },
      {
        "q": "I want to study in Canada but have no acceptance letter yet. What should I do?",
        "a": "A study permit application starts with an acceptance letter from a designated learning institution, so the institution comes first. You can still talk to Aman about your plan and what to check on the IRCC website while you apply."
      },
      {
        "q": "Can NeoCAN help with a super visa for my parents?",
        "a": "Ask Aman whether NeoCAN assists with super visa applications. A super visa is a separate IRCC visa for parents and grandparents, so read IRCC’s eligibility page and tell Aman your relationship and your Canadian host’s status."
      },
      {
        "q": "Can NeoCAN help with PR or other Canadian immigration matters?",
        "a": "Yes. For Canadian immigration matters, NeoCAN works with a Regulated Canadian Immigration Consultant (RCIC) partner. Aman Maan personally handles PR enquiries, discusses your requirements and coordinates the work. You can check any Canadian immigration consultant on the public register of the College of Immigration and Citizenship Consultants. No outcome is guaranteed; IRCC decides every application."
      }
    ],
    "extraLinks": [
      {
        "label": "PR (Permanent Residency) enquiries",
        "href": "/services/pr/"
      }
    ],
    "official": [
      {
        "label": "IRCC: study permit, provincial attestation letter",
        "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/provincial-attestation-letter.html"
      },
      {
        "label": "IRCC: letter of invitation for visitors",
        "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/letter-invitation.html"
      },
      {
        "label": "IRCC: how to apply for a visitor visa",
        "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/apply-visitor-visa.html"
      },
      {
        "label": "Immigration, Refugees and Citizenship Canada (IRCC)",
        "url": "https://www.canada.ca/en/immigration-refugees-citizenship.html"
      },
      {
        "label": "College of Immigration and Citizenship Consultants",
        "url": "https://college-ic.ca/"
      }
    ]
  },
  uk: {
    "seoTitle": "UK Student & Visitor Visa Help | NeoCAN Sri Ganganagar",
    "seoDescription": "Studying in or visiting family in the UK? Talk to Aman Maan at NeoCAN in Sri Ganganagar about your next step. GOV.UK links and questions to ask are here.",
    "h1": "United Kingdom: how NeoCAN can help with your study or visit plans",
    "answer": "Tell Aman Maan whether you plan to study in the UK or visit family or friends. He confirms what help NeoCAN offers for that purpose. This page lists what GOV.UK asks for first, so you know what to bring to the conversation.",
    "situationsTitle": "Which UK plan are you making?",
    "situations": [
      {
        "title": "Study in the UK",
        "text": "GOV.UK says a Student visa needs a Confirmation of Acceptance for Studies (CAS) from a licensed student sponsor, and that you must apply within 6 months of receiving it. You must also show you can pay the first year’s outstanding course fees and living costs for up to 9 months, and prove your English. The amounts change, so read the current GOV.UK page.",
        "points": [
          "Your university and whether you hold a CAS yet",
          "The date your CAS was issued",
          "How your English will be assessed: by the sponsor or by a Secure English Language Test",
          "Who will pay for your course and living costs"
        ]
      },
      {
        "title": "Visit family or friends",
        "text": "A Standard Visitor visa covers tourism and seeing family or friends, and generally allows a stay of up to 6 months. GOV.UK says you must show you will leave at the end of your visit and can support yourself, and pay for your return journey or have someone else fund it. It does not allow work or long study.",
        "points": [
          "Who you are visiting, their status in the UK and how you are related",
          "Your travel dates and where you will stay",
          "Who will pay for the trip",
          "Why you will return to India, in a line or two"
        ]
      }
    ],
    "askTitle": "Questions to ask Aman about the UK",
    "askAman": [
      "I’m travelling to the UK to visit my family. Can NeoCAN help me prepare my application, and who will fill in and submit the form?",
      "I have a CAS from a UK university. Can NeoCAN help me organise the documents for my Student visa?",
      "Which English evidence does my course need, and can NeoCAN help me check it?",
      "Who will book my appointment, if one is needed?"
    ],
    "whatsappText": "Hello NeoCAN, I would like to discuss the UK. City: ... Purpose (study / family visit / other): ... Stage (for example: have a CAS / waiting for an offer / my host has invited me): ... Planned travel or start date (optional): ... Help I need: ...",
    "ctaLabel": "Discuss your UK plans with Aman Maan",
    "readyTitle": "What to tell Aman first",
    "readyText": "Your city, your purpose (study or a family visit), where you are in the process, your planned date if you have one, and the help you want. Keep your CAS or your host’s details ready, but do not send passport scans or other sensitive documents in your first message; Aman will tell you how to share them.",
    "processTitle": "What happens after you speak with Aman Maan",
    "process": [
      {
        "title": "Speak with Aman Maan",
        "text": "Call, WhatsApp, email or visit the Sri Ganganagar office. Aman listens to your situation and your question."
      },
      {
        "title": "Confirm what help applies",
        "text": "He tells you whether NeoCAN can help with your UK plan, who will fill in the application and who will submit it, and any fee before work begins."
      },
      {
        "title": "Check what GOV.UK asks for",
        "text": "For study: CAS, funds and English. For a visit: your purpose, your host and your reasons to return. You work through a checklist against the GOV.UK page."
      },
      {
        "title": "Agree the next step",
        "text": "You decide whether to go ahead. UK Visas and Immigration decides every application, and Aman oversees follow-up."
      }
    ],
    "faqs": [
      {
        "q": "Can NeoCAN help with the UK visa I need?",
        "a": "Tell Aman whether you plan to study or visit. He will confirm what help NeoCAN offers for that purpose; this guide is general information only."
      },
      {
        "q": "I’m visiting family in the UK. What should I tell Aman?",
        "a": "Tell him who you are visiting, their status in the UK, how you are related, your dates, where you will stay and who will pay. Ask whether NeoCAN can help you prepare the application and who will fill in and submit the form."
      },
      {
        "q": "How long can I stay on a UK visitor visa?",
        "a": "GOV.UK says a Standard Visitor visa generally allows a stay of up to 6 months for tourism or seeing family. You must show you will leave at the end of your visit and can support yourself. Check the current GOV.UK page before you plan your dates."
      },
      {
        "q": "I have an offer from a UK university. What is a CAS, and when do I get it?",
        "a": "A CAS is the Confirmation of Acceptance for Studies that a licensed student sponsor issues to you, and a Student visa application needs it. You must apply within 6 months of receiving it, so ask your university when it will be issued. Tell Aman once you have it."
      },
      {
        "q": "How much money must I show for a UK Student visa?",
        "a": "GOV.UK says you must show you can pay the first year’s outstanding course fees and living costs for up to 9 months. The amounts and how long the money must be held are set in the Immigration Rules and change, so check the current GOV.UK figures and ask Aman what evidence to gather."
      },
      {
        "q": "Do I need an English test for the UK?",
        "a": "For some courses the sponsor can assess your English and record it on the CAS, and for others a Secure English Language Test at an approved centre is needed. Ask your university which applies before you book, and see the IELTS page if you need to prepare."
      },
      {
        "q": "Can I work or study on a UK visitor visa?",
        "a": "A Standard Visitor visa generally does not allow work or long study. GOV.UK lists the allowed activities and the length of stay, so read it before you plan."
      }
    ],
    "official": [
      {
        "label": "GOV.UK: Student visa",
        "url": "https://www.gov.uk/student-visa"
      },
      {
        "label": "GOV.UK: Student visa documents you will need",
        "url": "https://www.gov.uk/student-visa/documents-you-must-provide"
      },
      {
        "label": "GOV.UK: Standard Visitor visa",
        "url": "https://www.gov.uk/standard-visitor"
      },
      {
        "label": "GOV.UK: Visas and immigration",
        "url": "https://www.gov.uk/browse/visas-immigration"
      }
    ]
  },
  'new-zealand': {
    "seoTitle": "New Zealand Student & Visitor Visa Help | NeoCAN",
    "seoDescription": "Studying in or visiting family in New Zealand? Talk to Aman Maan at NeoCAN in Sri Ganganagar. INZ links and questions to ask are on this page.",
    "h1": "New Zealand: how NeoCAN can help with your study or visit plans",
    "answer": "Tell Aman Maan whether you plan to study in or visit New Zealand. He confirms what help NeoCAN offers for that purpose. This page lists what Immigration New Zealand (INZ) asks for first, so you know what to bring to the conversation.",
    "situationsTitle": "Which New Zealand plan are you making?",
    "situations": [
      {
        "title": "Study in New Zealand",
        "text": "INZ says most international students studying for more than 3 months need an offer of place from an approved education provider, and the provider confirms the course suits you and that you have the English and academic ability to pass it. You also need to show funds that INZ can confirm, hold insurance for your stay, and be in good health and of good character. INZ publishes the funds amount and it changes, so read the current page.",
        "points": [
          "Your provider and course, and whether you hold an offer of place",
          "Who will fund your studies: you, a sponsor or a guarantor",
          "Your health and any police-certificate questions",
          "Your planned start date"
        ]
      },
      {
        "title": "Visit family or travel",
        "text": "An Indian passport holder needs a visitor visa for New Zealand, and INZ publishes document checklists for visitor visas, so check the current one for Indian applicants. INZ expects evidence of your plans in New Zealand and of your ties to home. A granted visa does not guarantee entry.",
        "points": [
          "Who you are visiting, their status and how you are related",
          "Your travel dates, where you will stay and who will pay",
          "Why you will return to India, in a line or two"
        ]
      }
    ],
    "askTitle": "Questions to ask Aman about New Zealand",
    "askAman": [
      "I’m travelling to New Zealand to visit my family. Can NeoCAN help me prepare my application, and who will fill in and submit the form?",
      "I have an offer of place. Can NeoCAN help me organise the documents INZ asks for a student visa, including evidence of funds?",
      "Who will book my appointment, if one is needed?"
    ],
    "whatsappText": "Hello NeoCAN, I would like to discuss New Zealand. City: ... Purpose (study / family visit / other): ... Stage (for example: have an offer of place / my host has invited me): ... Planned travel or start date (optional): ... Help I need: ...",
    "ctaLabel": "Discuss your New Zealand plans with Aman Maan",
    "readyTitle": "What to tell Aman first",
    "readyText": "Your city, your purpose (study or a visit), where you are in the process, your planned date if you have one, and the help you want. Keep your offer of place or your host’s details ready, but do not send passport scans or other sensitive documents in your first message; Aman will tell you how to share them.",
    "processTitle": "What happens after you speak with Aman Maan",
    "process": [
      {
        "title": "Speak with Aman Maan",
        "text": "Call, WhatsApp, email or visit the Sri Ganganagar office. Aman listens to your situation and your question."
      },
      {
        "title": "Confirm what help applies",
        "text": "He tells you whether NeoCAN can help with your New Zealand plan, who will fill in the application and who will submit it, and any fee before work begins."
      },
      {
        "title": "Check what INZ asks for",
        "text": "For study: offer of place, funds, insurance, health and character. For a visit: the current visitor visa checklist, your plans and your ties home. You work through a checklist against the INZ page."
      },
      {
        "title": "Agree the next step",
        "text": "You decide whether to go ahead. INZ decides every application, and Aman oversees follow-up."
      }
    ],
    "faqs": [
      {
        "q": "Does NeoCAN help with visas for New Zealand?",
        "a": "Tell Aman whether you plan to study or visit. He will confirm what help NeoCAN offers for that purpose; this guide is general information only."
      },
      {
        "q": "I’m visiting family in New Zealand. What should I tell Aman?",
        "a": "Tell him who you are visiting, their status in New Zealand, how you are related, your dates, where you will stay and who will pay. Ask whether NeoCAN can help you prepare the application and who will fill in and submit the form."
      },
      {
        "q": "Do I need a visa to visit New Zealand on an Indian passport?",
        "a": "Yes. INZ requires Indian passport holders to hold a visitor visa. Read the current INZ visitor visa checklist before you plan, and ask Aman what evidence to gather."
      },
      {
        "q": "I have an offer of place from a New Zealand provider. What next?",
        "a": "A student visa application needs the offer of place, and INZ asks for funds, insurance, health and character evidence. Read the INZ page for your visa, and tell Aman once you have your offer."
      },
      {
        "q": "How much money must I show for a New Zealand student visa?",
        "a": "INZ publishes the amount of funds you must show and where the money may come from, and it can change. Check the current INZ figure and ask Aman what evidence to gather."
      },
      {
        "q": "Which English score do I need for New Zealand?",
        "a": "Course providers set their own English requirements, and many accept IELTS. Ask your provider for the exact score before you book a test."
      },
      {
        "q": "Who is allowed to give immigration advice in New Zealand?",
        "a": "New Zealand law requires immigration advice to come from a licensed immigration adviser or an exempt person such as a lawyer. NeoCAN does not claim to give licensed New Zealand advice, so check any adviser’s licence before you pay."
      }
    ],
    "official": [
      {
        "label": "INZ: visas for studying in New Zealand",
        "url": "https://www.immigration.govt.nz/study/study-visas/visas-for-studying-in-new-zealand/"
      },
      {
        "label": "INZ: student fund requirements",
        "url": "https://www.immigration.govt.nz/process-to-apply/applying-for-a-visa/providing-evidence-and-documents-to-support-your-visa-application/student-fund-requirements/"
      },
      {
        "label": "INZ: visitor visa checklist for India",
        "url": "https://www.immigration.govt.nz/visas/visitor-visa/"
      },
      {
        "label": "Immigration New Zealand",
        "url": "https://www.immigration.govt.nz/"
      }
    ]
  },
  usa: {
    "seoTitle": "USA Student & Visitor Visa Help | NeoCAN Sri Ganganagar",
    "seoDescription": "Studying in or visiting family in the USA? Talk to Aman Maan at NeoCAN in Sri Ganganagar. Official US links and questions to ask are on this page.",
    "h1": "United States: how NeoCAN can help with your study or visit plans",
    "answer": "Tell Aman Maan whether you plan to study in or visit the USA. He confirms what help NeoCAN offers for that purpose. This page shows the order of the US steps, so you know what to have before each one.",
    "situationsTitle": "Which US plan are you making?",
    "situations": [
      {
        "title": "Study in the USA (F-1 or M-1)",
        "text": "The US State Department and the Student and Exchange Visitor Program describe the order: your SEVP-certified school accepts you and issues a Form I-20, you pay the SEVIS fee, you complete the DS-160 (which asks for the SEVIS ID on your I-20), and then you schedule a visa interview. Fees and appointment waits change, so check the official pages.",
        "points": [
          "Your school and course, and whether you hold a Form I-20",
          "Your intended start date",
          "Who will pay for your studies",
          "Your English test status (see IELTS preparation)"
        ]
      },
      {
        "title": "Visit family or travel (B-2)",
        "text": "B-1/B-2 visas cover short business or tourism visits. The officer must be satisfied you will return home, which is why applicants are asked about their job, home and ties in India. Honest, specific answers matter, and a refusal is decided again on each new application.",
        "points": [
          "Who you are visiting in the USA and how you are related",
          "Your travel dates and how long you plan to stay",
          "Who will pay for the trip",
          "Your job or business and your return date"
        ]
      }
    ],
    "askTitle": "Questions to ask Aman about the USA",
    "askAman": [
      "I’m travelling to the USA to visit my family. Can NeoCAN help me prepare my application, and who will fill in and submit the DS-160?",
      "I have a Form I-20. Can NeoCAN help me organise what to take to the visa interview?",
      "Who will book my interview, if one is needed?"
    ],
    "whatsappText": "Hello NeoCAN, I would like to discuss the USA. City: ... Purpose (study / family visit / other): ... Stage (for example: have a Form I-20 / waiting for admission / my relative has invited me): ... Planned travel or start date (optional): ... Help I need: ...",
    "ctaLabel": "Discuss your US plans with Aman Maan",
    "readyTitle": "What to tell Aman first",
    "readyText": "Your city, your purpose (study or a visit), where you are in the process, your planned date if you have one, and the help you want. Keep your Form I-20 or your relative’s details ready, but do not send passport scans or other sensitive documents in your first message; Aman will tell you how to share them.",
    "processTitle": "What happens after you speak with Aman Maan",
    "process": [
      {
        "title": "Speak with Aman Maan",
        "text": "Call, WhatsApp, email or visit the Sri Ganganagar office. Aman listens to your situation and your question."
      },
      {
        "title": "Confirm what help applies",
        "text": "He tells you whether NeoCAN can help with your US plan, who will fill in the DS-160 and who will book the interview, and any fee before work begins."
      },
      {
        "title": "Check what the US pages ask for",
        "text": "For study: Form I-20, SEVIS fee, DS-160. For a visit: your purpose, your return plans and your ties home. You work through a checklist against the official pages."
      },
      {
        "title": "Agree the next step",
        "text": "You decide whether to go ahead. The US consular officer decides every visa, and Aman oversees follow-up."
      }
    ],
    "faqs": [
      {
        "q": "Can NeoCAN help with the US visa I need?",
        "a": "Tell Aman whether you plan to study (F-1) or visit (B-1/B-2). He will confirm what help NeoCAN offers for that purpose; this guide is general information only."
      },
      {
        "q": "I have an admission offer. When do I get the Form I-20?",
        "a": "The school issues the Form I-20 after it accepts you, and an F-1 application needs it. Ask your school when it will be sent, and tell Aman once you have it."
      },
      {
        "q": "In what order do the US student visa steps happen?",
        "a": "The official sources describe: school accepts you and issues the Form I-20, you pay the SEVIS fee, you complete the DS-160, then you schedule an interview. Check the current fees and appointment steps on the official pages, and ask Aman what you need before each step."
      },
      {
        "q": "What should I take to the US visa interview?",
        "a": "State Department guidance lists the DS-160 confirmation page, the fee payment receipt if you are asked to pay before the interview, the original signed Form I-20 for students, your passport and a photograph that meets the rules. Check the embassy page for the current list."
      },
      {
        "q": "How long will I wait for a US visa appointment?",
        "a": "Appointment availability and wait times vary by consulate and date, so no general estimate is reliable. Check the official US visa appointment information, and ask Aman what to prepare while you wait."
      },
      {
        "q": "Why are US visitor visas refused, and what can I do?",
        "a": "Applicants must show they will return home, so officers ask about your job, home and ties in India. Answer honestly and specifically; a refusal does not bar you for life, but each new application is decided afresh. Ask Aman what to prepare before you reapply."
      }
    ],
    "official": [
      {
        "label": "US State Department: student visa",
        "url": "https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html"
      },
      {
        "label": "US State Department: visitor visa",
        "url": "https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html"
      },
      {
        "label": "Study in the States: Form I-20",
        "url": "https://studyinthestates.dhs.gov/"
      },
      {
        "label": "US Embassy in India: visas",
        "url": "https://in.usembassy.gov/visas/"
      },
      {
        "label": "USCIS: find legal services",
        "url": "https://www.uscis.gov/avoid-scams/find-legal-services"
      }
    ]
  },
  cyprus: {
    "seoTitle": "Study in Cyprus from India: Visa Basics | NeoCAN",
    "seoDescription": "Considering Cyprus? See the official entry-permit steps for non-EU students and ask Aman Maan at NeoCAN in Sri Ganganagar what help applies to you.",
    "h1": "Cyprus: what to check first, and what you can ask NeoCAN",
    "answer": "Tell Aman Maan why you are considering Cyprus. He confirms what help NeoCAN offers for your case. This page sets out the official steps for non-EU students, and what we could not confirm for a short visit by an Indian passport holder.",
    "situationsTitle": "Which Cyprus plan are you making?",
    "situations": [
      {
        "title": "Study in the Republic of Cyprus",
        "text": "The Cyprus Ministry of Education says non-EU students need a visa or entry permit from the Civil Registry and Migration Department (CRMD) before arriving, and must apply for a residence permit within 10 days of arrival. Its document list includes an acceptance letter for a full-time programme, certified academic copies, a passport valid for at least two years or the length of studies, a criminal record certificate, medical examinations, a bank letter and proof of an advance tuition payment. The list can change, so confirm it with the CRMD or a Cyprus mission.",
        "points": [
          "Your institution and programme, and whether you hold the acceptance letter",
          "Whether your institution is in the Republic of Cyprus",
          "Your planned start date",
          "Which documents must be certified or translated"
        ]
      },
      {
        "title": "Visit Cyprus",
        "text": "We could not confirm from official pages whether Indian passport holders need a visa for a short visit. The Cyprus Ministry of Foreign Affairs publishes a list of countries whose nationals do not need a visa, so check it, and ask Aman what to look for.",
        "points": [
          "The purpose and dates of your visit",
          "Who you will stay with, if anyone"
        ]
      }
    ],
    "askTitle": "Questions to ask Aman about Cyprus",
    "askAman": [
      "I’m planning to study in Cyprus. Can NeoCAN help me organise the entry-permit documents, and who will submit them?",
      "Can NeoCAN help me check which of my documents need certifying or translating?",
      "I’m travelling to Cyprus for a visit. Can NeoCAN help me check whether I need a visa and prepare my application?"
    ],
    "whatsappText": "Hello NeoCAN, I would like to discuss Cyprus. City: ... Purpose (study / visit / other): ... Stage (for example: have an acceptance letter / still choosing an institution): ... Planned date (optional): ... Help I need: ...",
    "ctaLabel": "Discuss your Cyprus plans with Aman Maan",
    "readyTitle": "What to tell Aman first",
    "readyText": "Your city, your purpose (study or a visit), where you are in the process, your planned date if you have one, and the help you want. Keep your acceptance letter ready, but do not send passport scans, criminal-record or medical papers in your first message; Aman will tell you how to share them.",
    "processTitle": "What happens after you speak with Aman Maan",
    "process": [
      {
        "title": "Speak with Aman Maan",
        "text": "Call, WhatsApp, email or visit the Sri Ganganagar office. Aman listens to your situation and your question."
      },
      {
        "title": "Confirm what help applies",
        "text": "He tells you whether NeoCAN can help with your Cyprus plan, who will submit the application, and any fee before work begins."
      },
      {
        "title": "Check the official list",
        "text": "You are pointed to the Ministry of Education page and the Cyprus mission for the current document list, and you work through a checklist."
      },
      {
        "title": "Agree the next step",
        "text": "You decide whether to go ahead. The Cypriot authorities decide every application, and Aman oversees follow-up."
      }
    ],
    "faqs": [
      {
        "q": "Can NeoCAN help with a visa for Cyprus?",
        "a": "Tell Aman whether you plan to study or visit. He will confirm what help NeoCAN offers for that purpose; this guide is general information only."
      },
      {
        "q": "Do I need a visa to study in Cyprus?",
        "a": "The Ministry of Education says students from non-EU countries need a visa or entry permit from the CRMD and advises contacting the Cyprus diplomatic mission in your country. Confirm the exact route for Indian passport holders with the mission."
      },
      {
        "q": "Which documents does the Cyprus entry permit need?",
        "a": "The Ministry’s list includes an acceptance letter for a full-time programme, certified academic copies, a long-validity passport, a criminal record certificate, medical examinations, a bank letter and proof of an advance tuition payment. Ask Aman to help you check the current list, and which papers need certifying or translating."
      },
      {
        "q": "What happens after I arrive in Cyprus?",
        "a": "The official higher-education page says the student must apply to the CRMD for a residence permit within 10 days of arrival."
      },
      {
        "q": "Is Cyprus the same as North Cyprus?",
        "a": "Some study adverts promote institutions in North Cyprus, which has different authorities from the Republic of Cyprus. Check where your institution is, which authority issues your permit, and, if you plan to practise a profession in India afterwards, whether the course is recognised by the Indian regulator."
      }
    ],
    "official": [
      {
        "label": "Cyprus Ministry of Education: applications from outside the EU",
        "url": "https://www.highereducation.ac.cy/en/spoudes-cyprus/aitiseis-ektos-ee"
      },
      {
        "label": "Cyprus Ministry of Education: required documents",
        "url": "https://www.highereducation.ac.cy/index.php/en/spoudes-cyprus/apaitoumena-engrafa"
      },
      {
        "label": "Cyprus Ministry of Foreign Affairs: countries whose nationals do not need a visa",
        "url": "https://mfa.gov.cy/no-visa-requirement.html"
      }
    ]
  },
  italy: {
    "seoTitle": "Italy Visa Information for Indian Applicants | NeoCAN",
    "seoDescription": "Planning a visit or study in Italy? See which Italian office handles Rajasthan and ask Aman Maan at NeoCAN in Sri Ganganagar what help applies to you.",
    "h1": "Italy: Schengen or national visa, and what to ask NeoCAN",
    "answer": "Tell Aman Maan whether your Italy plan is a short visit or study beyond 90 days. He confirms what help NeoCAN offers for your case. This page explains the two visa types and which Italian office the VFS checklist lists for Rajasthan.",
    "situationsTitle": "Which Italy plan are you making?",
    "situations": [
      {
        "title": "A short visit, including family and friends",
        "text": "The Italian Ministry of Foreign Affairs describes the Schengen (type C) visa for stays of up to 90 days in any 180-day period. For a visit to family or friends, Italian embassy and VFS checklists ask for an invitation or the host’s hospitality declaration, a copy of the host’s ID, proof of the family link and accommodation, and Schengen travel insurance. Checklists differ by office, so read the one for yours.",
        "points": [
          "Who you are visiting in Italy and how you are related",
          "Whether your host can give a hospitality declaration or invitation and an ID copy",
          "Your travel dates and where you will stay",
          "Who will pay for the trip"
        ]
      },
      {
        "title": "Study beyond 90 days",
        "text": "The national (type D) visa covers stays over 90 days. The New Delhi study checklist asks for the Italian university’s admission or pre-enrolment confirmation from the Universitaly portal, a Declaration of Value or CIMEA certificate where the institution requires one, proof of language ability, financial proof and medical insurance. Fees and amounts differ between pages, so check the current checklist.",
        "points": [
          "Your university and course",
          "Whether you hold the admission or Universitaly confirmation",
          "Whether your institution needs a Declaration of Value or CIMEA certificate",
          "Your planned start date"
        ]
      }
    ],
    "askTitle": "Questions to ask Aman about Italy",
    "askAman": [
      "I’m travelling to Italy to visit my family. Can NeoCAN help me prepare my application, and who will fill in and submit the form?",
      "Can NeoCAN help me organise the documents on the Italian study visa checklist, including the Universitaly confirmation?",
      "Which Italian office and VFS centre should I use from Sri Ganganagar?"
    ],
    "whatsappText": "Hello NeoCAN, I would like to discuss Italy. City: ... Purpose (short visit / family visit / study / other): ... Stage (for example: have an admission letter / my host has invited me): ... Planned date (optional): ... Help I need: ...",
    "ctaLabel": "Discuss your Italy plans with Aman Maan",
    "readyTitle": "What to tell Aman first",
    "readyText": "Your city, your purpose (short visit, family visit or study), where you are in the process, your planned date if you have one, and the help you want. Keep your admission letter or your host’s details ready, but do not send passport scans or other sensitive documents in your first message; Aman will tell you how to share them.",
    "processTitle": "What happens after you speak with Aman Maan",
    "process": [
      {
        "title": "Speak with Aman Maan",
        "text": "Call, WhatsApp, email or visit the Sri Ganganagar office. Aman listens to your situation and your question."
      },
      {
        "title": "Confirm what help applies",
        "text": "He tells you whether NeoCAN can help with your Italy plan, who will fill in the application and who will submit it, and any fee before work begins."
      },
      {
        "title": "Check the right checklist",
        "text": "You are pointed to the VFS and embassy checklist for the Italian office that covers you, and you work through it."
      },
      {
        "title": "Agree the next step",
        "text": "You decide whether to go ahead. The Italian authorities decide every application, and Aman oversees follow-up."
      }
    ],
    "faqs": [
      {
        "q": "Does NeoCAN help with visas for Italy?",
        "a": "Tell Aman whether your plan is a short visit or longer study. He will confirm what help NeoCAN offers for that purpose; this guide is general information only."
      },
      {
        "q": "Which Italian office handles applications from Rajasthan?",
        "a": "The VFS Italy New Delhi page lists Rajasthan among the states handled by the Embassy of Italy in New Delhi, and says to apply where you have lived for the last six months. Offices and lists change, so confirm on the current VFS Italy page."
      },
      {
        "q": "What is the difference between a Schengen visa and a study visa for Italy?",
        "a": "A Schengen (type C) visa covers stays of up to 90 days in any 180-day period. A national (type D) visa covers longer stays, including study. Italy’s visa portal has a guided questionnaire to help you find the right one."
      },
      {
        "q": "My relative in Italy is inviting me. What does my host need to give me?",
        "a": "Embassy and VFS checklists ask for the invitation or hospitality declaration, a copy of the host’s ID and proof of the family link and accommodation. Some offices want original documents, so read your office’s checklist and ask Aman what your host should prepare."
      },
      {
        "q": "Do I need to register on Universitaly before a study visa?",
        "a": "The New Delhi study checklist asks for the university’s admission letter or the enrolment confirmation downloaded from the Universitaly portal. Ask your university how to register, and tell Aman once you have it."
      }
    ],
    "official": [
      {
        "label": "VFS Global: Italy visa information, New Delhi",
        "url": "https://visa.vfsglobal.com/one-pager/italy/india/new-delhi/english/"
      },
      {
        "label": "VFS Global: requisite documents for a study visa, New Delhi",
        "url": "https://visa.vfsglobal.com/one-pager/italy/india/new-delhi/english/pdf/Requisite-Documents-for-Study-Visa.pdf"
      },
      {
        "label": "Vistoperitalia: Italian visa portal",
        "url": "https://vistoperitalia.esteri.it/"
      }
    ]
  },
  netherlands: {
    "seoTitle": "Netherlands Student & Family Visit Visa Basics | NeoCAN",
    "seoDescription": "Studying in or visiting family in the Netherlands? See who applies for the student permit and the MVV, and ask Aman Maan at NeoCAN in Sri Ganganagar.",
    "h1": "Netherlands: how the student permit and family visit work, and what to ask NeoCAN",
    "answer": "Tell Aman Maan whether you plan to study in or visit the Netherlands. He confirms what help NeoCAN offers for your case. This page explains who applies for a Dutch student permit, and where visit applications from India go.",
    "situationsTitle": "Which Netherlands plan are you making?",
    "situations": [
      {
        "title": "Study in the Netherlands",
        "text": "The IND says the educational institution applies for the student residence permit, and that an MVV (provisional residence permit) is needed. The student pays the fee to the institution, which passes it to the IND. After approval you collect the MVV sticker from the Dutch embassy or consulate; the Dutch guidance for India says it can take up to 10 working days, and you then have 90 days to travel.",
        "points": [
          "Your institution and course",
          "Whether the institution has started your permit application",
          "Your planned start date",
          "Who will pay your fees"
        ]
      },
      {
        "title": "Visit family or friends",
        "text": "Indian passport holders need a Schengen short-stay visa for the Netherlands. Netherlands Worldwide publishes a page on applying for a short-stay visa in India and a checklist for visiting family and friends, which lists what your host must provide. Read the checklist for the office that covers you.",
        "points": [
          "Who you are visiting and their status in the Netherlands",
          "Whether your host can prepare the invitation papers the checklist asks for",
          "Your travel dates and where you will stay",
          "Who will pay for the trip"
        ]
      }
    ],
    "askTitle": "Questions to ask Aman about the Netherlands",
    "askAman": [
      "I’m travelling to the Netherlands to visit my family. Can NeoCAN help me prepare my application, and who will fill in and submit the form?",
      "My institution is applying for my permit. Can NeoCAN help me prepare for the MVV step?",
      "Which application centre should I use from Sri Ganganagar?"
    ],
    "whatsappText": "Hello NeoCAN, I would like to discuss the Netherlands. City: ... Purpose (study / family visit / other): ... Stage (for example: have an offer / my host has invited me): ... Planned date (optional): ... Help I need: ...",
    "ctaLabel": "Discuss your Netherlands plans with Aman Maan",
    "readyTitle": "What to tell Aman first",
    "readyText": "Your city, your purpose (study or a family visit), where you are in the process, your planned date if you have one, and the help you want. Keep your offer letter or your host’s details ready, but do not send passport scans or other sensitive documents in your first message; Aman will tell you how to share them.",
    "processTitle": "What happens after you speak with Aman Maan",
    "process": [
      {
        "title": "Speak with Aman Maan",
        "text": "Call, WhatsApp, email or visit the Sri Ganganagar office. Aman listens to your situation and your question."
      },
      {
        "title": "Confirm what help applies",
        "text": "He tells you whether NeoCAN can help with your Netherlands plan, who will fill in the application and who will submit it, and any fee before work begins."
      },
      {
        "title": "Check the official steps",
        "text": "For study: what your institution files and what you do at the Dutch embassy. For a visit: the Netherlands Worldwide family and friends checklist."
      },
      {
        "title": "Agree the next step",
        "text": "You decide whether to go ahead. The Dutch authorities decide every application, and Aman oversees follow-up."
      }
    ],
    "faqs": [
      {
        "q": "Can NeoCAN help with Netherlands visas?",
        "a": "Tell Aman whether you plan to study or visit. He will confirm what help NeoCAN offers for that purpose; this guide is general information only."
      },
      {
        "q": "Who applies for my Dutch student residence permit?",
        "a": "The IND says the educational institution applies for the student residence permit. Ask your institution whether it has started the application, and what it needs from you."
      },
      {
        "q": "What is an MVV, and how long does it take?",
        "a": "The MVV is a provisional residence permit. After approval you collect the sticker at the Dutch embassy or consulate, which the Dutch guidance for India says can take up to 10 working days, and you then have 90 days to travel. Check the current Dutch pages for your case."
      },
      {
        "q": "Who pays the IND application fee?",
        "a": "The student pays the fee to the educational institution, which makes sure it reaches the IND. Confirm the current amount on the IND website, and pay only as the institution’s own paperwork directs."
      },
      {
        "q": "I’m visiting family in the Netherlands. What does my host need to give me?",
        "a": "Netherlands Worldwide publishes a checklist for visiting family and friends in India, and it lists what your host must provide. Read it with your host, and ask Aman whether NeoCAN can help you prepare the application and who will submit it."
      }
    ],
    "official": [
      {
        "label": "IND: student residence permit",
        "url": "https://ind.nl/en/residence-permits/study/student-residence-permit-for-university-or-higher-professional-education"
      },
      {
        "label": "Netherlands Worldwide: applying for an MVV in India",
        "url": "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-india"
      },
      {
        "label": "Netherlands Worldwide: short-stay Schengen visa in India",
        "url": "https://www.netherlandsworldwide.nl/countries/india/travel/applying-for-a-short-stay-schengen-visa"
      },
      {
        "label": "Netherlands Worldwide: family and friends checklist, India",
        "url": "https://www.netherlandsworldwide.nl/visa-the-netherlands/checklist-schengen-visa-family-friends/india"
      }
    ]
  },
  russia: {
    "seoTitle": "Russia Visa Information for Indian Applicants | NeoCAN",
    "seoDescription": "Planning a visit to Russia? Read the e-visa basics, the stay-length difference between official pages and the Indian advisory, then ask Aman Maan at NeoCAN.",
    "h1": "Russia: check the advisory and e-visa rules first, then ask NeoCAN",
    "answer": "Tell Aman Maan why you plan to go to Russia. He confirms what help NeoCAN offers for your case. Read the Indian government advisory and the official e-visa page first; two official pages give different stay lengths, so confirm the figure when you apply.",
    "situationsTitle": "Which Russia plan are you making?",
    "situations": [
      {
        "title": "A short visit on the e-visa",
        "text": "The Russian portal says the unified e-visa is single-entry, valid for 120 days from issue, with a stay of up to 30 days from entry, applied for no earlier than 86 and no later than 4 days before entry, with a machine-readable passport valid for at least 6 months. The Government of India’s visa facility page describes a shorter stay of up to 16 days, so check both pages and confirm the figure on the Russian portal.",
        "points": [
          "The purpose and dates of your trip",
          "Who you will stay with, if anyone",
          "Whether your passport is valid for at least 6 months",
          "How long you plan to stay"
        ]
      },
      {
        "title": "A family visit or a longer stay",
        "text": "The e-visa has a fixed stay limit, so ask Aman whether the e-visa or a regular visa fits a family visit or a longer stay. A regular visa follows its own rules, which this guide does not describe.",
        "points": [
          "Who you are visiting and how long you want to stay"
        ]
      },
      {
        "title": "Study in Russia",
        "text": "This guide does not describe study entry. Check the Russian Embassy in India and the Indian Embassy in Moscow for the requirements, and tell Aman what you find.",
        "points": [
          "Your institution and course"
        ]
      }
    ],
    "askTitle": "Questions to ask Aman about Russia",
    "askAman": [
      "I’m travelling to Russia to visit my family. Can NeoCAN help me prepare my application, and who will fill in and submit the form?",
      "Does my trip fit the e-visa, or do I need a regular visa?",
      "Can NeoCAN help me check the Indian government advisory for my dates?"
    ],
    "whatsappText": "Hello NeoCAN, I would like to discuss Russia. City: ... Purpose (visit / family visit / study / other): ... Planned dates and length of stay (optional): ... Help I need: ...",
    "ctaLabel": "Discuss your Russia plans with Aman Maan",
    "readyTitle": "What to tell Aman first",
    "readyText": "Your city, your purpose (visit, family visit or study), your planned dates and length of stay, and the help you want. Keep your passport validity in mind, but do not send passport scans or other sensitive documents in your first message; Aman will tell you how to share them.",
    "processTitle": "What happens after you speak with Aman Maan",
    "process": [
      {
        "title": "Speak with Aman Maan",
        "text": "Call, WhatsApp, email or visit the Sri Ganganagar office. Aman listens to your situation and your question."
      },
      {
        "title": "Confirm what help applies",
        "text": "He tells you whether NeoCAN can help with your Russia plan, who will fill in the application and who will submit it, and any fee before work begins."
      },
      {
        "title": "Check the official pages",
        "text": "You read the Indian government advisory and the Russian portal, and compare the stay length they give."
      },
      {
        "title": "Agree the next step",
        "text": "You decide whether to go ahead. The Russian authorities decide every application, and Aman oversees follow-up."
      }
    ],
    "considerations": [
      {
        "title": "Check the advisory first",
        "text": "The Ministry of External Affairs lists a travel advisory for Indians travelling to Russia. Read the current advisory before you make plans."
      },
      {
        "title": "E-visa basics",
        "text": "The Russian portal says the e-visa is single-entry, valid for 120 days from issue, with a stay of up to 30 days from entry, and that applications are made between 86 and 4 days before entry. The Government of India’s visa facility page gives a stay of up to 16 days, so confirm the figure on the Russian portal. No processing time is stated here."
      },
      {
        "title": "Other conditions",
        "text": "The portal lists a machine-readable passport valid for at least 6 months, and medical insurance with exemptions by reciprocity. A regular visa in the passport follows its own rules."
      },
      {
        "title": "Study routes",
        "text": "Check the Russian Embassy in India and the Indian Embassy in Moscow for study entry requirements. This guide does not describe them."
      },
      {
        "title": "Information last checked",
        "text": "Official pages were last reviewed on 13 and 14 November 2026. Rules, fees and appointment windows change, so confirm them on the official source before you act."
      }
    ],
    "faqs": [
      {
        "q": "Can NeoCAN help me with a Russian visa?",
        "a": "Tell Aman your trip purpose and dates. He will confirm what help NeoCAN offers for that purpose; this guide is general information only."
      },
      {
        "q": "Can Indian citizens use the Russian e-visa?",
        "a": "India appears on the official e-visa country list on the Russian electronic visa site. Check the portal for the current conditions before applying. This page does not describe any visa-free arrangement."
      },
      {
        "q": "How long can I stay on the Russian e-visa?",
        "a": "The Russian portal states up to 30 days from the date of entry, while the Government of India’s visa facility page describes up to 16 days. Confirm the figure on the Russian portal when you apply, and plan your dates with that in mind."
      },
      {
        "q": "Should I read the Indian government advisory before I plan?",
        "a": "Yes. The Ministry of External Affairs lists a travel advisory for Indians travelling to Russia. Read the current advisory first, and ask Aman if you want help finding it."
      }
    ],
    "official": [
      {
        "label": "Russia unified e-visa portal",
        "url": "https://evisa.kdmid.ru/"
      },
      {
        "label": "Official list of e-visa eligible countries",
        "url": "https://electronic-visa.kdmid.ru/country.html"
      },
      {
        "label": "Government of India: visa facility for Indian nationals",
        "url": "https://www.mea.gov.in/vffin"
      },
      {
        "label": "Government of India: travel advisories",
        "url": "https://www.mea.gov.in/travel-advisories"
      }
    ]
  },
  'czech-republic': {
    "seoTitle": "Czech Republic Visa Info for Indian Applicants | NeoCAN",
    "seoDescription": "Study or visit family in Czechia? See how Indian applicants book with the Embassy in New Delhi and VFS, and ask Aman Maan at NeoCAN in Sri Ganganagar.",
    "h1": "Czech Republic: how Indian applicants apply, and what to ask NeoCAN",
    "answer": "Tell Aman Maan whether your Czech plan is study or a short visit. He confirms what help NeoCAN offers for your case. This page shows the official application routes for Indian applicants and where the Embassy’s pages disagree.",
    "situationsTitle": "Which Czech Republic plan are you making?",
    "situations": [
      {
        "title": "Study in the Czech Republic",
        "text": "The Embassy in New Delhi says long-term visa applications, including study, are submitted in person after a prior appointment, and that its booking notices set how to request one. Its pages give different email addresses for these requests, so use the current Embassy page. The Embassy’s processing deadline for a long-term study visa is 60 days. Long-term documents must be originals or official copies under 180 days old, with apostilles for foreign documents and Czech or certified translations.",
        "points": [
          "Your institution and course",
          "Whether you hold the admission letter or proof of the study purpose",
          "Which of your documents need an apostille or translation",
          "Your planned start date"
        ]
      },
      {
        "title": "Visit family or friends (up to 90 days)",
        "text": "The Embassy says applicants living in India apply through VFS Global, no earlier than six months and no later than 15 days before travel. The Embassy’s Schengen checklist lists a passport valid three months beyond the return date, photos, a return flight reservation, proof of lodging, travel insurance for the whole trip and the last three months of bank statements. Family members of EU or Czech citizens can apply at the Embassy by appointment.",
        "points": [
          "Who you are visiting and where they live",
          "Your travel dates and where you will stay",
          "Who will pay for the trip"
        ]
      }
    ],
    "askTitle": "Questions to ask Aman about the Czech Republic",
    "askAman": [
      "I’m travelling to the Czech Republic to visit my family. Can NeoCAN help me prepare my application, and who will fill in and submit the form?",
      "Can NeoCAN help me request the Embassy appointment for a study visa and organise my documents?",
      "Which VFS centre should I use from Sri Ganganagar?"
    ],
    "whatsappText": "Hello NeoCAN, I would like to discuss the Czech Republic. City: ... Purpose (study / family visit / other): ... Stage (for example: have an admission letter / my host has invited me): ... Planned date (optional): ... Help I need: ...",
    "ctaLabel": "Discuss your Czech plans with Aman Maan",
    "readyTitle": "What to tell Aman first",
    "readyText": "Your city, your purpose (study or a visit), where you are in the process, your planned date if you have one, and the help you want. Keep your admission letter or your host’s details ready, but do not send passport scans or other sensitive documents in your first message; Aman will tell you how to share them.",
    "processTitle": "What happens after you speak with Aman Maan",
    "process": [
      {
        "title": "Speak with Aman Maan",
        "text": "Call, WhatsApp, email or visit the Sri Ganganagar office. Aman listens to your situation and your question."
      },
      {
        "title": "Confirm what help applies",
        "text": "He tells you whether NeoCAN can help with your Czech plan, who will request the appointment and fill in the application, who will submit it, and any fee before work begins."
      },
      {
        "title": "Check the Embassy and VFS pages",
        "text": "You read the current Embassy page for study, or the Schengen checklist for a visit, and work through it."
      },
      {
        "title": "Agree the next step",
        "text": "You decide whether to go ahead. The Czech authorities decide every application, and Aman oversees follow-up."
      }
    ],
    "considerations": [
      {
        "title": "Study: appointment and processing",
        "text": "The Embassy in New Delhi says long-term visa applications are submitted in person after a prior appointment, and gives 60 days as its processing deadline for a long-term study visa. Its pages show different email addresses for appointment requests, so use the current page."
      },
      {
        "title": "Study: documents",
        "text": "Documents must be originals or official copies under 180 days old, foreign documents need an apostille, and translations must be Czech or officially certified."
      },
      {
        "title": "Consular fee",
        "text": "The Embassy fees page showed 2,500 CZK (10,900 INR at the time) for a long-term visa and for a residence permit, updated monthly for the exchange rate. Confirm the current amount."
      },
      {
        "title": "Short visits",
        "text": "For stays up to 90 days, the Embassy says applicants in India apply through VFS Global, no earlier than six months and no later than 15 days before travel. The Embassy news page says the VFS Delhi centre moved to 27 K.G. Marg, Connaught Place from 19 January 2026."
      },
      {
        "title": "Information last checked",
        "text": "Official pages were last reviewed on 13 and 14 November 2026. Rules, fees and appointment windows change, so confirm them on the official source before you act."
      }
    ],
    "faqs": [
      {
        "q": "Can NeoCAN help with a Czech visa?",
        "a": "Tell Aman whether you plan to study or visit. He will confirm what help NeoCAN offers for that purpose; this guide is general information only."
      },
      {
        "q": "How do I get an appointment for a Czech study visa from India?",
        "a": "The Embassy says long-term visa applications are submitted in person after a prior appointment, and its news page posts the booking notices. Its pages give different email addresses for requests, so read the current Embassy page before you send anything."
      },
      {
        "q": "How long does a Czech study visa take?",
        "a": "The Embassy’s page gives 60 days as its processing deadline for a long-term visa for study. Plan well ahead, and ask Aman what to prepare while you wait."
      },
      {
        "q": "I’m visiting family in the Czech Republic. What do I need?",
        "a": "The Embassy’s Schengen checklist lists a passport valid three months beyond your return, photos, a return flight reservation, proof of lodging, travel insurance and three months of bank statements. Ask Aman whether NeoCAN can help you prepare it and who will submit it."
      },
      {
        "q": "How early can I apply for a Czech short-stay visa?",
        "a": "The Embassy says applicants in India apply through VFS Global, no earlier than six months and no later than 15 days before travel. Check the current rules on the Embassy page."
      }
    ],
    "official": [
      {
        "label": "Embassy of the Czech Republic, New Delhi: long-term visa",
        "url": "https://mzv.gov.cz/newdelhi/en/ko/visa_information/long_term_visa_long_term_residence/long_term_visa_and_long_term_residence.html"
      },
      {
        "label": "Embassy of the Czech Republic, New Delhi: visa and consular information",
        "url": "https://mzv.gov.cz/newdelhi/en/ko/index.html"
      },
      {
        "label": "VFS Global: Czech Republic visa information, India",
        "url": "https://visa.vfsglobal.com/one-pager/Czechrepublic/India/index.html"
      }
    ]
  },
  greece: {
    "seoTitle": "Greece Visa Information for Indian Applicants | NeoCAN",
    "seoDescription": "Visiting family or studying in Greece? See the Schengen basics for Indian passport holders and ask Aman Maan at NeoCAN in Sri Ganganagar what help applies.",
    "h1": "Greece: Schengen visa basics, and what to ask NeoCAN",
    "answer": "Tell Aman Maan whether your Greece plan is a short visit or longer study. He confirms what help NeoCAN offers for your case. This page explains the Schengen basics and what we could not confirm about Greece’s India application route.",
    "situationsTitle": "Which Greece plan are you making?",
    "situations": [
      {
        "title": "A short visit, including family and friends",
        "text": "EU Regulation 2018/1806 lists the countries whose nationals need a visa, and Indian passport holders apply for a Schengen visa for short stays. Greek and Schengen checklists we saw ask for a hotel booking or an invitation with the host’s details, three months of bank statements, a return flight reservation and travel insurance of at least €30,000. Those checklists were for other countries, so the India list may differ.",
        "points": [
          "Who you are visiting, if anyone, and where they live",
          "Your travel dates and where you will stay",
          "Who will pay for the trip"
        ]
      },
      {
        "title": "Study beyond 90 days",
        "text": "Study longer than 90 days generally needs a national visa and admission to a recognised institution. We could not find the Greek study visa list for India, so confirm it with the Greek mission.",
        "points": [
          "Your institution and course",
          "Whether you hold an admission letter"
        ]
      }
    ],
    "askTitle": "Questions to ask Aman about Greece",
    "askAman": [
      "I’m travelling to Greece to visit my family. Can NeoCAN help me prepare my application, and who will fill in and submit the form?",
      "Which centre or provider should I use for a Greek visa from Sri Ganganagar?",
      "Can NeoCAN help with a Greek national visa for study?"
    ],
    "whatsappText": "Hello NeoCAN, I would like to discuss Greece. City: ... Purpose (visit / family visit / study / other): ... Stage (for example: have an admission letter / my host has invited me): ... Planned date (optional): ... Help I need: ...",
    "ctaLabel": "Discuss your Greece plans with Aman Maan",
    "readyTitle": "What to tell Aman first",
    "readyText": "Your city, your purpose (visit, family visit or study), where you are in the process, your planned date if you have one, and the help you want. Keep your host’s details or admission letter ready, but do not send passport scans or other sensitive documents in your first message; Aman will tell you how to share them.",
    "processTitle": "What happens after you speak with Aman Maan",
    "process": [
      {
        "title": "Speak with Aman Maan",
        "text": "Call, WhatsApp, email or visit the Sri Ganganagar office. Aman listens to your situation and your question."
      },
      {
        "title": "Confirm what help applies",
        "text": "He tells you whether NeoCAN can help with your Greece plan, who will fill in the application and who will submit it, and any fee before work begins."
      },
      {
        "title": "Check the Greek pages",
        "text": "You read the Greek Ministry of Foreign Affairs and Embassy pages for the document list and the current application provider in India."
      },
      {
        "title": "Agree the next step",
        "text": "You decide whether to go ahead. The Greek authorities decide every application, and Aman oversees follow-up."
      }
    ],
    "faqs": [
      {
        "q": "Can NeoCAN help with a Greek visa?",
        "a": "Tell Aman whether you plan to visit or study. He will confirm what help NeoCAN offers for that purpose; this guide is general information only."
      },
      {
        "q": "Do I need a visa to visit Greece?",
        "a": "EU Regulation 2018/1806 lists the countries whose nationals need a visa, and Indian passport holders apply for a Schengen visa for short stays. Check the Greek Ministry of Foreign Affairs and the Embassy in New Delhi for the document list."
      },
      {
        "q": "Where do I submit a Greek visa application from India?",
        "a": "The provider that takes Greek applications in India has changed over time, and the sources we saw disagree. Confirm the current provider on the Greek Embassy page before you book, and ask Aman if you want help finding it."
      },
      {
        "q": "I’m visiting family in Greece. What should I prepare?",
        "a": "Greek and Schengen checklists we saw ask for a hotel booking or an invitation with the host’s details, bank statements, a return flight reservation and travel insurance. Read the current India list, and ask Aman whether NeoCAN can help you prepare it and who will submit it."
      },
      {
        "q": "Can I study in Greece on a short-stay visa?",
        "a": "Study longer than 90 days generally needs a national visa and admission to a recognised institution. Confirm the current requirements with the Greek mission."
      }
    ]
  },
  mauritius: {
    "seoTitle": "Mauritius Entry Information for Indians | NeoCAN",
    "seoDescription": "Planning a trip to Mauritius? See what the Government of India and the Mauritian office say about entry, and ask Aman Maan at NeoCAN in Sri Ganganagar.",
    "h1": "Mauritius: entry rules to check, and what to ask NeoCAN",
    "answer": "Tell Aman Maan about your Mauritius trip. He confirms what help NeoCAN offers for your case. This page shows what the Government of India’s list and the Mauritian office say about entry, including where they differ.",
    "situationsTitle": "Which Mauritius plan are you making?",
    "situations": [
      {
        "title": "A visit or holiday",
        "text": "The Government of India’s visa facility page lists Mauritius as a country where Indian ordinary passport holders do not need a visa in advance and receive a visit permission on arrival, initially 60 days and extendable. An older Indian High Commission brief gives up to one month, and the Mauritian Passport and Immigration Office page we read does not name India. Confirm the current rule and stay length before you book tickets.",
        "points": [
          "Your travel dates and how long you plan to stay",
          "Where you will stay",
          "Whether you hold a return ticket"
        ]
      },
      {
        "title": "Study in Mauritius",
        "text": "The Passport and Immigration Office publishes guidelines for the entry or residence permit to study, and advises prospective students to travel only after their study application has been approved.",
        "points": [
          "Your institution and course",
          "Whether your study application has been approved"
        ]
      }
    ],
    "askTitle": "Questions to ask Aman about Mauritius",
    "askAman": [
      "I’m travelling to Mauritius for a holiday. Can NeoCAN help me check the entry rules for my dates and what to carry?",
      "I’m visiting family in Mauritius. Can NeoCAN help me prepare, and who will fill in any forms?",
      "Can NeoCAN help with a study permit enquiry?"
    ],
    "whatsappText": "Hello NeoCAN, I would like to discuss Mauritius. City: ... Purpose (holiday / family visit / study / other): ... Planned dates and length of stay (optional): ... Help I need: ...",
    "ctaLabel": "Discuss your Mauritius plans with Aman Maan",
    "readyTitle": "What to tell Aman first",
    "readyText": "Your city, your purpose (holiday, family visit or study), your planned dates and length of stay, and the help you want. Do not send passport scans or other sensitive documents in your first message; Aman will tell you how to share them.",
    "processTitle": "What happens after you speak with Aman Maan",
    "process": [
      {
        "title": "Speak with Aman Maan",
        "text": "Call, WhatsApp, email or visit the Sri Ganganagar office. Aman listens to your situation and your question."
      },
      {
        "title": "Confirm what help applies",
        "text": "He tells you whether NeoCAN can help with your Mauritius plan, who will fill in any forms, and any fee before work begins."
      },
      {
        "title": "Check the official pages",
        "text": "You compare the Government of India list with the Mauritian Passport and Immigration Office page, and confirm the entry conditions."
      },
      {
        "title": "Agree the next step",
        "text": "You decide whether to go ahead. The Mauritian authorities decide entry and permits, and Aman oversees follow-up."
      }
    ],
    "considerations": [
      {
        "title": "Entry requirements",
        "text": "The Passport and Immigration Office lists for every traveller a passport valid beyond the intended stay, a valid return ticket, adequate funds, and a confirmed hotel booking or accommodation sponsorship."
      },
      {
        "title": "Visa requirement for Indian citizens",
        "text": "The Government of India’s visa facility page lists Mauritius as a country where Indian ordinary passport holders do not need a visa in advance, with an initial stay of 60 days that can be extended. The Mauritian office’s visa requirements page we reviewed does not name India, and an older Indian High Commission brief gives up to one month. Confirm with the Mauritian authorities before you book."
      },
      {
        "title": "Work and residence",
        "text": "Gainful activity is not allowed without a valid permit. Travel for residence or work needs a valid entry or residence permit."
      },
      {
        "title": "Study",
        "text": "The Passport and Immigration Office has published guidelines for the entry or residence permit to study in Mauritius, and advises prospective students to travel only after their study application has been approved."
      },
      {
        "title": "Information last checked",
        "text": "Official pages were last reviewed on 13 and 14 November 2026. Rules, fees and appointment windows change, so confirm them on the official source before you act."
      }
    ],
    "faqs": [
      {
        "q": "Can NeoCAN help me with a trip to Mauritius?",
        "a": "Tell Aman your travel dates and purpose. He will confirm what help NeoCAN offers for that purpose; this guide is general information only."
      },
      {
        "q": "Do Indian citizens need a visa for Mauritius?",
        "a": "The Government of India’s visa facility page lists Mauritius among countries where Indian ordinary passport holders do not need a visa in advance. The Mauritian office page we reviewed does not name India, so confirm the current rule with the Mauritian authorities before you book tickets."
      },
      {
        "q": "How long can I stay in Mauritius?",
        "a": "The Government of India’s page says visit permission is granted on arrival, initially 60 days and extendable, while an older High Commission brief says up to one month. Confirm the figure for your trip, and ask Aman if you want help finding the official page."
      },
      {
        "q": "What do I need to show on arrival in Mauritius?",
        "a": "The Passport and Immigration Office lists a passport valid beyond the intended stay, a valid return ticket, adequate funds and a confirmed hotel booking or accommodation sponsorship. Gainful activity is not allowed without a valid permit."
      }
    ],
    "official": [
      {
        "label": "Government of India: visa facility for Indian nationals",
        "url": "https://www.mea.gov.in/vffin"
      },
      {
        "label": "Government of India: visa-free facilities",
        "url": "https://www.mea.gov.in/visa-free-facilities"
      },
      {
        "label": "Mauritius Passport and Immigration Office",
        "url": "https://passport.govmu.org/"
      },
      {
        "label": "High Commission of India, Port Louis: types of visa and requirements",
        "url": "https://www.hcimauritius.gov.in/page/types-of-visa-and-requirements/"
      }
    ]
  },
};
