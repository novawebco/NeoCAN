// INTERNAL RECORD. Never import this file's contents into a rendered page.
// Only `canAdvertisePR()` (a boolean) may be used by public pages.
//
// Purpose: hold the professional-authorization evidence for PR advice or representation so it can be
// verified and enabled later without changing the site architecture.
//
// RULES
// - Nothing here is public. No licence number, holder or certificate is rendered anywhere.
// - `ownerStatement` is a recorded claim, NOT verification.
// - `canAdvertisePR()` returns true only when status is 'VERIFIED' AND every licence and verification
//   field below is filled in. Until then the PR label keeps its "not offered" notice.
// - Even when verified, advertising scope (jurisdictions, tasks) must follow the verified record only.
// See audit/authorization/pr-authorization-record.md for the verification procedure.

export type AuthorizationStatus =
  | 'AWAITING_OWNER_DOCUMENTATION'
  | 'DOCUMENTS_RECEIVED_PENDING_VERIFICATION'
  | 'VERIFIED'
  | 'REJECTED';

export interface ProfessionalAuthorization {
  id: string;
  scope: string;
  status: AuthorizationStatus;
  ownerStatement: { text: string; recordedOn: string; source: string; verified: false };
  licence: {
    holderName: string | null;
    holderRelationshipToNeoCAN: string | null; // e.g. employee, director, partner (as documented)
    licenceNumber: string | null;
    issuingAuthority: string | null;
    jurisdiction: string | null;
    licenceClassOrType: string | null;
    validFrom: string | null;
    validUntil: string | null;
    certificateFileRef: string | null; // path in a private store, never in the public site
  };
  verification: {
    method: string | null; // e.g. regulator's public register lookup
    registerUrl: string | null;
    verifiedBy: string | null;
    verifiedOn: string | null;
    evidenceRef: string | null;
  };
}

// Current service scope: NeoCAN offers PR assistance. Aman Maan handles enquiries and coordinates the work.
// Canadian immigration matters involve an RCIC partner whose identity is not published here.
// This controls PR *assistance* copy only. It does NOT verify any licence: canAdvertisePR() below is unchanged
// and stays false, so no page may say NeoCAN or any named person is licensed, registered or authorised.
// Representation duties may be described only where business records support them (none recorded yet).
export const prOffering = {
  status: 'OWNER_DIRECTED',
  recordedOn: '2026-11-14',
  contact: 'Aman Maan',
  canadianPartnerModel: 'RCIC partner (name and registration number intentionally not published)',
  partnerVerification: 'PENDING',
  nonCanadianPrArrangement: 'NOT DOCUMENTED',
} as const;
export const isPROffered = () => prOffering.status === 'OWNER_DIRECTED';

export const prAuthorization: ProfessionalAuthorization = {
  id: 'pr-regulated-advice',
  scope: 'Permanent residence (PR) advice or representation, jurisdiction to be documented',
  status: 'AWAITING_OWNER_DOCUMENTATION',
  ownerStatement: {
    text: 'Professional authorization is pending verification.',
    recordedOn: '2026-11-13',
    source: 'Internal verification status; no licence document or number supplied',
    verified: false,
  },
  licence: {
    holderName: null,
    holderRelationshipToNeoCAN: null,
    licenceNumber: null,
    issuingAuthority: null,
    jurisdiction: null,
    licenceClassOrType: null,
    validFrom: null,
    validUntil: null,
    certificateFileRef: null,
  },
  verification: { method: null, registerUrl: null, verifiedBy: null, verifiedOn: null, evidenceRef: null },
};

const filled = (o: Record<string, string | null>) => Object.values(o).every((v) => typeof v === 'string' && v.trim() !== '');

/** True only with a VERIFIED status and complete licence and verification evidence. */
export function canAdvertisePR(a: ProfessionalAuthorization = prAuthorization): boolean {
  return a.status === 'VERIFIED' && filled(a.licence) && filled(a.verification);
}
