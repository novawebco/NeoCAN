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
    "answer": "NeoCAN helps with study permits, visitor visas for family visits and tourism, PR enquiries and IELTS preparation for Canada. Aman Maan personally oversees your application. For Canadian immigration matters, NeoCAN works with a Regulated Canadian Immigration Consultant (RCIC) partner.",
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
        "text": "A super visa is a separate IRCC visa for parents and grandparents. It comes under visitor visa assistance. Read IRCC’s eligibility page, including the insurance it asks for, and Aman will tell you which documents to provide.",
        "points": [
          "Your relationship to your Canadian host",
          "Your host’s status in Canada",
          "How long you hope to stay"
        ]
      },
      {
        "title": "PR or other immigration matters",
        "text": "Aman Maan personally handles PR enquiries and coordinates the work. For Canadian immigration matters NeoCAN works with an RCIC partner, and Aman tells you which parts of your case involve the partner. IRCC alone decides every application.",
        "points": [
          "Whether you will apply alone or with family",
          "Your work, study and language-test situation in brief"
        ]
      }
    ],
    "askTitle": "Things to talk through about Canada",
    "askAman": [
      "I’m visiting my family in Canada. My host’s status and my travel dates are…",
      "I have an acceptance letter. Do I also have a PAL or TAL, or does my programme not need one?",
      "My parents want a super visa. Their Canadian host is…",
      "I want to explore PR. My work, study and English test situation is…"
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
        "title": "Know what to provide, sign and attend",
        "text": "He tells you which documents and information to provide, which forms you need to sign and which appointments you must attend in person. For Canadian immigration matters, NeoCAN works with an RCIC partner, and he tells you which parts involve the partner. He also tells you any fee before work begins."
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
        "q": "I’m visiting family in Canada. What should I tell Aman?",
        "a": "Tell him who you are visiting, their status in Canada, how you are related, your dates and who will pay. NeoCAN then reviews your documents and helps prepare the visitor visa application. Aman tells you who will submit it."
      },
      {
        "q": "Do I need an invitation letter for a Canadian visitor visa?",
        "a": "IRCC describes what the letter should contain, but check the current document list for your visa office to see whether it is required for you. A letter does not guarantee approval. Aman tells you what your host should include."
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
        "a": "Yes, as part of visitor visa assistance. A super visa is a separate IRCC visa for parents and grandparents, so read IRCC’s eligibility page, including the insurance it asks for, and tell Aman your relationship and your Canadian host’s status."
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
    "answer": "NeoCAN helps with UK Student visas, Standard Visitor visas for family visits and tourism, settlement (PR) enquiries and IELTS preparation. Aman Maan personally oversees your application. This page lists what GOV.UK asks for first, so you know what to bring.",
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
    "askTitle": "Things to talk through about the UK",
    "askAman": [
      "I’m travelling to the UK to visit my family. My host’s status and my travel dates are…",
      "I have a CAS from a UK university. It was issued on… and my funds come from…",
      "Which English evidence does my course need: sponsor assessment or a Secure English Language Test?",
      "I want to explore settlement (PR) in the UK. My current route and plans are…"
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
        "title": "Know what to provide, sign and attend",
        "text": "He tells you which documents and information to provide, what to sign and which appointments you must attend in person, such as your biometrics appointment. He also tells you any fee before work begins."
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
        "q": "I’m visiting family in the UK. What should I tell Aman?",
        "a": "Tell him who you are visiting, their status in the UK, how you are related, your dates, where you will stay and who will pay. NeoCAN then reviews your documents and helps prepare the Standard Visitor visa application. Aman tells you who will submit it."
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
        "a": "GOV.UK says you must show you can pay the first year’s outstanding course fees and living costs for up to 9 months. The amounts and how long the money must be held are set in the Immigration Rules and change, so check the current GOV.UK figures. Aman tells you what evidence to gather."
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
    "seoDescription": "Studying in or visiting family in New Zealand? NeoCAN in Sri Ganganagar helps with Student and Visitor Visas, PR and IELTS. Aman Maan oversees your application.",
    "h1": "New Zealand: how NeoCAN can help with your study or visit plans",
    "answer": "NeoCAN helps with New Zealand Student Visas, Visitor Visas for family visits and tourism, Resident Visa (PR) enquiries and IELTS preparation. Aman Maan personally oversees your application. This page lists what Immigration New Zealand (INZ) asks for first.",
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
    "askTitle": "Things to talk through about New Zealand",
    "askAman": [
      "I’m travelling to New Zealand to visit my family. My host’s status and my travel dates are…",
      "I have an offer of place. My funds will come from… and my start date is…",
      "I want to explore a Resident Visa. My work, qualifications and English test situation is…"
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
        "title": "Know what to provide, sign and attend",
        "text": "He tells you which documents and information to provide, what to sign and which appointments you must attend in person, such as biometrics if INZ asks for them. He also tells you any fee before work begins."
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
        "q": "I’m visiting family in New Zealand. What should I tell Aman?",
        "a": "Tell him who you are visiting, their status in New Zealand, how you are related, your dates, where you will stay and who will pay. NeoCAN then reviews your documents and helps prepare the Visitor Visa application. Aman tells you who will submit it."
      },
      {
        "q": "Do I need a visa to visit New Zealand on an Indian passport?",
        "a": "Yes. INZ requires Indian passport holders to hold a visitor visa. Read the current INZ visitor visa checklist before you plan. Aman tells you what evidence to gather."
      },
      {
        "q": "I have an offer of place from a New Zealand provider. What next?",
        "a": "A student visa application needs the offer of place, and INZ asks for funds, insurance, health and character evidence. Read the INZ page for your visa, and tell Aman once you have your offer."
      },
      {
        "q": "How much money must I show for a New Zealand student visa?",
        "a": "INZ publishes the amount of funds you must show and where the money may come from, and it can change. Check the current INZ figure. Aman tells you what evidence to gather."
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
    "seoDescription": "Studying in or visiting the USA? NeoCAN in Sri Ganganagar helps with F-1 and B-2 visas, green card enquiries and IELTS under Aman Maan.",
    "h1": "United States: how NeoCAN can help with your study or visit plans",
    "answer": "NeoCAN helps with F-1 student visas, B-2 visitor visas for family visits and tourism, green card (permanent residence) enquiries and IELTS preparation. Aman Maan personally oversees your application. This page shows the order of the US steps.",
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
    "askTitle": "Things to talk through about the USA",
    "askAman": [
      "I’m travelling to the USA to visit my family. My host’s status and my travel dates are…",
      "I have a Form I-20. My school is… and my funds come from…",
      "I want to explore a green card. My relative or category is…"
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
        "title": "Know what to provide, sign and attend",
        "text": "He tells you which documents and information to provide, what to sign and which appointments you must attend in person: your biometrics appointment and your visa interview. He also tells you any fee before work begins."
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
        "q": "I have an admission offer. When do I get the Form I-20?",
        "a": "The school issues the Form I-20 after it accepts you, and an F-1 application needs it. Ask your school when it will be sent, and tell Aman once you have it."
      },
      {
        "q": "In what order do the US student visa steps happen?",
        "a": "The official sources describe: school accepts you and issues the Form I-20, you pay the SEVIS fee, you complete the DS-160, then you schedule an interview. Check the current fees and appointment steps on the official pages, Aman tells you what you need before each step."
      },
      {
        "q": "What should I take to the US visa interview?",
        "a": "State Department guidance lists the DS-160 confirmation page, the fee payment receipt if you are asked to pay before the interview, the original signed Form I-20 for students, your passport and a photograph that meets the rules. Check the embassy page for the current list."
      },
      {
        "q": "How long will I wait for a US visa appointment?",
        "a": "Appointment availability and wait times vary by consulate and date, so no general estimate is reliable. Check the official US visa appointment information, Aman tells you what to prepare while you wait."
      },
      {
        "q": "Why are US visitor visas refused, and what can I do?",
        "a": "Applicants must show they will return home, so officers ask about your job, home and ties in India. Answer honestly and specifically; a refusal does not bar you for life, but each new application is decided afresh. Aman tells you what to prepare before you reapply."
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
    "seoDescription": "Studying in or visiting Cyprus? NeoCAN in Sri Ganganagar helps with entry permits, visas, residence enquiries and IELTS. Aman Maan oversees your application.",
    "h1": "Cyprus: how NeoCAN can help with your study, visit or residence plans",
    "answer": "NeoCAN helps with Cyprus student entry permits, visitor and tourist visa checks, residence permit (PR) enquiries and IELTS preparation. Aman Maan personally oversees your application. This page sets out the official steps for non-EU students, and what we could not confirm for a short visit by an Indian passport holder.",
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
        "text": "We could not confirm from official pages whether Indian passport holders need a visa for a short visit, because the Cyprus Ministry of Foreign Affairs and Civil Registry and Migration Department pages could not be opened. Check the Ministry of Foreign Affairs or the Cyprus mission serving India for the current rule. Aman checks the entry rule for your passport and trip with you.",
        "points": [
          "The purpose and dates of your visit",
          "Who you will stay with, if anyone"
        ]
      }
    ],
    "askTitle": "Things to talk through about Cyprus",
    "askAman": [
      "I’m planning to study in Cyprus. My university is… and I have/do not have an acceptance letter.",
      "These are the documents I already have, and I am not sure which need certifying or translating…",
      "I’m travelling to Cyprus for a visit or holiday. My dates and my host (if any) are…"
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
        "title": "Know what to provide, sign and attend",
        "text": "He tells you which documents and information to provide, what to sign and which appointments you must attend in person, and who submits each step. He also tells you any fee before work begins."
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
        "q": "Do I need a visa to study in Cyprus?",
        "a": "The Ministry of Education says students from non-EU countries need a visa or entry permit from the CRMD and advises contacting the Cyprus diplomatic mission in your country. Confirm the exact route for Indian passport holders with the mission."
      },
      {
        "q": "Which documents does the Cyprus entry permit need?",
        "a": "The Ministry’s list includes an acceptance letter for a full-time programme, certified academic copies, a long-validity passport, a criminal record certificate, medical examinations, a bank letter and proof of an advance tuition payment. NeoCAN checks your papers against the current list, and Aman tells you which need certifying or translating."
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
        "label": "Cyprus Ministry of Foreign Affairs: visa information",
        "url": "https://www.gov.cy/mfa/"
      }
    ]
  },
  italy: {
    "seoTitle": "Italy Visa Information for Indian Applicants | NeoCAN",
    "seoDescription": "Visiting or studying in Italy? NeoCAN in Sri Ganganagar helps with Schengen and study visas, residence enquiries and IELTS. Aman Maan oversees your application.",
    "h1": "Italy: how NeoCAN can help with your Schengen, study or residence plans",
    "answer": "NeoCAN helps with Italy Schengen (type C) visas for family visits and tourism, national (type D) study visas, residence enquiries and IELTS preparation. Aman Maan personally oversees your application. This page explains the two visa types and where to check which Italian office covers you.",
    "situationsTitle": "Which Italy plan are you making?",
    "situations": [
      {
        "title": "A short visit, including family and friends",
        "text": "The Italian Ministry of Foreign Affairs describes the Schengen (type C) visa for stays of up to 90 days in any 180-day period. The Italian office or visa application centre that covers you publishes the document list for a visit to family or friends, so Aman checks the current list with you before you book anything.",
        "points": [
          "Who you are visiting in Italy and how you are related",
          "Your travel dates and where you will stay",
          "Who will pay for the trip"
        ]
      },
      {
        "title": "Study beyond 90 days",
        "text": "The national (type D) visa covers stays over 90 days. Vistoperitalia, Italy’s visa portal, lists study purposes such as university enrolment. The Italian mission that covers you publishes the current study document checklist, so Aman checks it with you.",
        "points": [
          "Your university and course",
          "Whether you hold an admission or enrolment confirmation from your university",
          "Your planned start date"
        ]
      }
    ],
    "askTitle": "Things to talk through about Italy",
    "askAman": [
      "I’m travelling to Italy to visit family. My host’s documents and my travel dates are…",
      "I plan to study in Italy. My university is… and I have/have not received an admission or enrolment confirmation.",
      "Which Italian office covers me in Sri Ganganagar?"
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
        "title": "Know what to provide, sign and attend",
        "text": "He tells you which documents and information to provide, what to sign and which appointments you must attend in person, such as an appointment at the Italian office or its visa application centre. He also tells you any fee before work begins."
      },
      {
        "title": "Check the right checklist",
        "text": "You are pointed to the checklist published by the Italian office that covers you, and you work through it."
      },
      {
        "title": "Agree the next step",
        "text": "You decide whether to go ahead. The Italian authorities decide every application, and Aman oversees follow-up."
      }
    ],
    "faqs": [
      {
        "q": "Which Italian office handles applications from Rajasthan?",
        "a": "Vistoperitalia says to apply to the Italian diplomatic or consular office competent for your place of stable residence. We could not confirm from an official page which office covers Rajasthan, so check Vistoperitalia and the Italian mission before you book. Aman checks which office applies to you."
      },
      {
        "q": "What is the difference between a Schengen visa and a study visa for Italy?",
        "a": "A Schengen (type C) visa covers stays of up to 90 days in any 180-day period. A national (type D) visa covers longer stays, including study. Vistoperitalia is Italy’s official visa portal."
      },
      {
        "q": "My relative in Italy is inviting me. What does my host need to give me?",
        "a": "The Italian office that covers you publishes the document list, and what your host must provide depends on it. Read your office’s list. Aman tells you what your host should prepare."
      },
      {
        "q": "What do I need from my university before a study visa?",
        "a": "Ask your university what it will give you for the visa, and read the study checklist published by the Italian office that covers you. Tell Aman once you have your admission or enrolment confirmation."
      }
    ],
    "official": [
      {
        "label": "Vistoperitalia: Italian visa portal",
        "url": "https://vistoperitalia.esteri.it/"
      },
      {
        "label": "VFS Global: Italy visa information, New Delhi",
        "url": "https://visa.vfsglobal.com/one-pager/italy/india/new-delhi/english/"
      }
    ]
  },
  netherlands: {
    "seoTitle": "Netherlands Student & Family Visit Visa Basics | NeoCAN",
    "seoDescription": "Studying in or visiting the Netherlands? NeoCAN in Sri Ganganagar helps with the MVV, student permits, visas, residence enquiries and IELTS under Aman Maan.",
    "h1": "Netherlands: how NeoCAN can help with your study, visit or residence plans",
    "answer": "NeoCAN helps with the Dutch student residence permit and MVV, Schengen short-stay visas for family visits and tourism, residence enquiries and IELTS preparation. Aman Maan personally oversees your application. This page explains who applies for a Dutch student permit, and where visit applications from India go.",
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
    "askTitle": "Things to talk through about the Netherlands",
    "askAman": [
      "I’m travelling to the Netherlands to visit family. My host’s documents and my travel dates are…",
      "My institution is applying for my permit. I have sent it these documents…",
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
        "title": "Know what to provide, sign and attend",
        "text": "He tells you which documents and information to provide, what to sign and which appointments you must attend in person. For a student permit he also tells you which steps your institution handles. He tells you any fee before work begins."
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
        "a": "Netherlands Worldwide publishes a checklist for visiting family and friends in India, and it lists what your host must provide. Read it with your host. NeoCAN then reviews your documents and helps prepare the visa application. Aman tells you who will submit it."
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
    "seoDescription": "Planning a trip to Russia? NeoCAN in Sri Ganganagar helps with e-visa and visa applications, residence enquiries and IELTS. Check the official rules first.",
    "h1": "Russia: how NeoCAN can help, and what to check on the e-visa first",
    "answer": "NeoCAN helps with Russian e-visa and visa applications for family visits and tourism, student visa enquiries, residence permit (PR) enquiries and IELTS preparation. Aman Maan personally oversees your application. Read the Government of India advisory and the official e-visa page first, and confirm the permitted stay on the Russian portal before you book.",
    "situationsTitle": "Which Russia plan are you making?",
    "situations": [
      {
        "title": "A short visit on the e-visa",
        "text": "The Russian portal says the unified e-visa is single-entry, valid for 120 days from issue, applied for no earlier than 86 and no later than 4 days before entry, with a machine-readable passport valid for at least 6 months. The permitted stay is shown differently on the Russian portal and on the Government of India’s visa facility page, so we do not give a figure here: confirm it on the portal before you book.",
        "points": [
          "The purpose and dates of your trip",
          "Who you will stay with, if anyone",
          "Whether your passport is valid for at least 6 months",
          "How long you plan to stay"
        ]
      },
      {
        "title": "A family visit or a longer stay",
        "text": "The e-visa has a fixed stay limit and covers a private or business visit, tourism and certain events, and the portal says other purposes need a regular visa. Aman checks whether the e-visa or a regular visa fits your family visit or longer stay. Regular visa rules are not described on this page.",
        "points": [
          "Who you are visiting and how long you want to stay"
        ]
      },
      {
        "title": "Study in Russia",
        "text": "This guide does not describe study entry, and the portal says the e-visa does not cover other purposes such as study. Check the Embassy of the Russian Federation in India for the student visa requirements. Aman checks them with you and tells you what to provide.",
        "points": [
          "Your institution and course"
        ]
      }
    ],
    "askTitle": "Things to talk through about Russia",
    "askAman": [
      "I’m travelling to Russia to visit family. My dates and how long I want to stay are…",
      "My trip is… Does it fit the e-visa, or do I need a regular visa?",
      "I have read the Indian government advisory and my questions about my dates are…"
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
        "title": "Know what to provide, sign and attend",
        "text": "He tells you which documents and information to provide, what to sign and which appointments you must attend in person, if your visa type needs one. He also tells you any fee before work begins."
      },
      {
        "title": "Check the official pages",
        "text": "You read the Indian government advisory and the Russian portal, and confirm the permitted stay on the portal."
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
        "text": "The Russian portal says the e-visa is single-entry, valid for 120 days from issue, and that applications are made between 86 and 4 days before entry. The permitted stay is shown differently on the portal and on the Government of India’s visa facility page, so confirm it on the portal. The portal says no invitation letter or hotel booking is needed."
      },
      {
        "title": "Other conditions",
        "text": "The portal lists a machine-readable passport valid for at least 6 months, and medical insurance with exemptions by reciprocity. A regular visa in the passport follows its own rules."
      },
      {
        "title": "Study routes",
        "text": "Check the Embassy of the Russian Federation in India for student visa requirements. This guide does not describe them."
      },
      {
        "title": "Information last checked",
        "text": "Official pages were last reviewed between 13 and 16 November 2026. The Russian Embassy pages and the Government of India advisory text could not be opened, so check them yourself. Rules, fees and appointment windows change, so confirm them on the official source before you act."
      }
    ],
    "faqs": [
      {
        "q": "Can Indian citizens use the Russian e-visa?",
        "a": "India appears on the official e-visa country list on the Russian electronic visa site. Check the portal for the current conditions before applying. This page does not describe any visa-free arrangement."
      },
      {
        "q": "How long can I stay on the Russian e-visa?",
        "a": "The Russian portal and the Government of India’s visa facility page show the permitted stay differently, so we do not state a number here. Confirm the stay limit on the Russian portal when you apply, and plan your dates with that in mind."
      },
      {
        "q": "Should I read the Indian government advisory before I plan?",
        "a": "Yes. The Ministry of External Affairs lists a travel advisory for Indians travelling to Russia. Read the current advisory first. Aman can point you to it when you speak."
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
    "seoDescription": "Study or visit family in Czechia? NeoCAN in Sri Ganganagar helps with long-term and Schengen visas, residence enquiries and IELTS under Aman Maan.",
    "h1": "Czech Republic: how NeoCAN can help with your study, visit or residence plans",
    "answer": "NeoCAN helps with Czech long-term study visas, Schengen short-stay visas for family visits and tourism, residence enquiries and IELTS preparation. Aman Maan personally oversees your application. This page shows the official application routes for Indian applicants, with links to the Embassy’s current instructions.",
    "situationsTitle": "Which Czech Republic plan are you making?",
    "situations": [
      {
        "title": "Study in the Czech Republic",
        "text": "The Embassy in New Delhi says everyone applying for a long-term visa or long-term residence permit must submit the application at the Embassy personally. Appointments are booked by email during fixed registration windows that the Embassy announces. Its study page lists the documents and its fees page lists the consular fee, so Aman checks the current notices with you.",
        "points": [
          "Your institution and course",
          "Whether you hold the admission letter or proof of the study purpose",
          "Which documents the Embassy’s study page asks for",
          "Your planned start date"
        ]
      },
      {
        "title": "Visit family or friends (up to 90 days)",
        "text": "The Embassy says applicants legally residing in India apply at a VFS Global visa application centre, no earlier than six months and no later than 15 days before travel, and gives up to 15 calendar days as the normal processing time. The minimum travel medical insurance cover is EUR 30,000, and the Embassy accepts only insurers on its approved list for India. Family members of EU citizens can apply at the Embassy by appointment.",
        "points": [
          "Who you are visiting and where they live",
          "Your travel dates and where you will stay",
          "Who will pay for the trip"
        ]
      }
    ],
    "askTitle": "Things to talk through about the Czech Republic",
    "askAman": [
      "I’m travelling to the Czech Republic to visit family. My host’s details and my travel dates are…",
      "I plan to study in the Czech Republic. My university and start date are…, and my documents are…",
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
        "title": "Know what to provide, sign and attend",
        "text": "He tells you which documents and information to provide, what to sign and which appointments you must attend in person. For a long-term visa, you hand in the application yourself at the Embassy, because the Embassy takes it in person. He also tells you any fee before work begins."
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
        "title": "Study: appointment",
        "text": "The Embassy in New Delhi says everyone applying for a long-term visa or residence permit must submit the application at the Embassy personally, and that appointments are booked by email during fixed registration windows. We could not confirm a processing deadline, so check the Embassy’s study page."
      },
      {
        "title": "Study: documents",
        "text": "The Embassy’s study page lists the documents for a long-term study visa. Aman checks the current list with you, including anything that needs a translation or other legalisation."
      },
      {
        "title": "Consular fee",
        "text": "The Embassy fees page lists 2,500 CZK (10,900 INR) for a long-term visa (except for business purposes) and for a residence permit, and says fees are updated every month for the exchange rate. Confirm the current amount."
      },
      {
        "title": "Short visits",
        "text": "For stays up to 90 days, the Embassy says applicants legally residing in India apply at a VFS Global centre, no earlier than six months and no later than 15 days before travel. The minimum travel medical insurance cover is EUR 30,000, from insurers on the Embassy’s approved list. Check the Embassy page for the VFS centre address and the document list for your purpose."
      },
      {
        "title": "Information last checked",
        "text": "Official pages were last reviewed on 13 and 14 November 2026. Rules, fees and appointment windows change, so confirm them on the official source before you act."
      }
    ],
    "faqs": [
      {
        "q": "How do I get an appointment for a Czech study visa from India?",
        "a": "The Embassy says a long-term visa application must be submitted at the Embassy personally. Appointments are booked by email during fixed registration windows, and the Embassy tells applicants the result of the registration. Read the current booking notice on the Embassy page before you send anything."
      },
      {
        "q": "How long does a Czech study visa take?",
        "a": "We could not confirm a processing deadline for a long-term study visa from the Embassy’s current pages, so plan well ahead and check the Embassy’s study page. Aman tells you what to prepare while you wait."
      },
      {
        "q": "I’m visiting family in the Czech Republic. What do I need?",
        "a": "The Embassy’s Schengen pages say the documents depend on your purpose and link to purpose-specific lists. They also set the minimum travel medical insurance at EUR 30,000 from insurers on the Embassy’s approved list. NeoCAN checks your documents against the current list and helps prepare the application, and Aman tells you what to provide and sign."
      },
      {
        "q": "How early can I apply for a Czech short-stay visa?",
        "a": "The Embassy says applicants legally residing in India apply at a VFS Global centre, no earlier than six months and no later than 15 days before travel. Check the current rules on the Embassy page."
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
    "seoDescription": "Visiting or studying in Greece? NeoCAN in Sri Ganganagar helps with Schengen and study visas, residence enquiries and IELTS under Aman Maan.",
    "h1": "Greece: how NeoCAN can help with your Schengen, study or residence plans",
    "answer": "NeoCAN helps with Greek Schengen (type C) visas for family visits and tourism, national (type D) study visas, residence permit (PR) enquiries and IELTS preparation. Aman Maan personally oversees your application. This page explains the Schengen basics and what we could not confirm about Greece’s India application route.",
    "situationsTitle": "Which Greece plan are you making?",
    "situations": [
      {
        "title": "A short visit, including family and friends",
        "text": "EU Regulation 2018/1806 lists the countries whose nationals need a visa, and Indian passport holders apply for a Schengen visa for short stays. We could not read the Greek document list for Indian applicants, so we do not list its contents here. Aman checks the current list with you before you book anything.",
        "points": [
          "Who you are visiting, if anyone, and where they live",
          "Your travel dates and where you will stay",
          "Who will pay for the trip"
        ]
      },
      {
        "title": "Study beyond 90 days",
        "text": "Study longer than 90 days generally needs a national visa and admission to a recognised institution. We could not find the Greek study visa list for India, so Aman confirms it with the Greek mission for your course.",
        "points": [
          "Your institution and course",
          "Whether you hold an admission letter"
        ]
      }
    ],
    "askTitle": "Things to talk through about Greece",
    "askAman": [
      "I’m travelling to Greece to visit family. My host’s details and my travel dates are…",
      "Which centre or provider takes a Greek visa application from Sri Ganganagar at the moment?",
      "I plan to study in Greece. My institution and start date are…"
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
        "title": "Know what to provide, sign and attend",
        "text": "He tells you which documents and information to provide, what to sign and which appointments you must attend in person, and which Greek office takes your application. He also tells you any fee before work begins."
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
        "q": "Do I need a visa to visit Greece?",
        "a": "EU Regulation 2018/1806 lists the countries whose nationals need a visa, and Indian passport holders apply for a Schengen visa for short stays. Check the Greek Ministry of Foreign Affairs and the Embassy in New Delhi for the document list."
      },
      {
        "q": "Where do I submit a Greek visa application from India?",
        "a": "We could not confirm from an official Greek page where applications from India are submitted, and the sources we saw name different providers. Confirm the current office or provider on the Greek Ministry of Foreign Affairs or Embassy page before you book. Aman tells you which one applies to your application."
      },
      {
        "q": "I’m visiting family in Greece. What should I prepare?",
        "a": "We could not read the Greek document list for Indian applicants, so we do not list its contents here. Read the current list on the Greek Ministry of Foreign Affairs or Embassy page. NeoCAN checks your documents against it and fills in the application, and Aman tells you what to provide and sign."
      },
      {
        "q": "Can I study in Greece on a short-stay visa?",
        "a": "Study longer than 90 days generally needs a national visa and admission to a recognised institution. Confirm the current requirements with the Greek mission."
      }
    ]
  },
  mauritius: {
    "seoTitle": "Mauritius Entry Information for Indians | NeoCAN",
    "seoDescription": "Planning a trip to Mauritius? NeoCAN in Sri Ganganagar helps with entry checks, study permits, residence enquiries and IELTS under Aman Maan.",
    "h1": "Mauritius: how NeoCAN can help with your trip, study or residence plans",
    "answer": "NeoCAN helps with entry checks and documents for visits and tourism, study permit enquiries, residence and permanent residence permit (PR) enquiries and IELTS preparation for Mauritius. Aman Maan personally oversees your application. Whether an Indian passport holder needs a visa in advance, and for how long they may stay, must be confirmed with the Mauritian authorities.",
    "situationsTitle": "Which Mauritius plan are you making?",
    "situations": [
      {
        "title": "A visit or holiday",
        "text": "Two Government of India pages disagree on whether Indian passport holders need a visa for Mauritius, and the Mauritian Passport and Immigration Office’s list of persons not requiring a visa does not name India. We therefore do not state a visa rule or stay length here. Confirm both with the Passport and Immigration Office or the High Commission of India in Port Louis before you book tickets.",
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
    "askTitle": "Things to talk through about Mauritius",
    "askAman": [
      "I’m travelling to Mauritius for a holiday. My dates and how long I want to stay are…",
      "I’m visiting family in Mauritius. My host’s details and my travel dates are…",
      "I’m thinking of studying in Mauritius. My course and start date are…"
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
        "title": "Know what to provide, sign and attend",
        "text": "He tells you which documents and information to provide, what to sign and which appointments you must attend in person, if your plan needs any. He also tells you any fee before work begins."
      },
      {
        "title": "Check the official pages",
        "text": "You compare the Government of India pages with the Mauritian Passport and Immigration Office, and confirm the visa rule and the permitted stay with the Mauritian authorities."
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
        "text": "The Government of India’s older visa-free facilities page (2020) and its current visa facility page disagree, and the Passport and Immigration Office’s list of persons not requiring a visa does not name India. Confirm the visa rule and the permitted stay with the Mauritian authorities before you book."
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
        "text": "Official pages were last reviewed between 13 and 16 November 2026. The Passport and Immigration Office’s country table and the travel digital form it links to could not be read, so check them yourself. Rules, fees and appointment windows change, so confirm them on the official source before you act."
      }
    ],
    "faqs": [
      {
        "q": "Do Indian citizens need a visa for Mauritius?",
        "a": "We could not confirm this. The Government of India’s pages differ (the older visa-free facilities page says no visa is needed, the current visa facility page lists Mauritius under visa on arrival), and the Passport and Immigration Office’s list of persons not requiring a visa does not name India. If a visa is needed, that office says to apply through Mauritian diplomatic or consular representatives at least one month before travel. Confirm the rule with the Mauritian authorities before you book tickets."
      },
      {
        "q": "How long can I stay in Mauritius?",
        "a": "We could not confirm a stay length for Indian passport holders: the Government of India’s pages differ and the Mauritian office gives no India-specific figure. The immigration officer decides how long a visitor may stay. Check with the Passport and Immigration Office or the High Commission of India in Port Louis before you plan your dates."
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
