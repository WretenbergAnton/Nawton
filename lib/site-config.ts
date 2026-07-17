// Central place for contact details, social links and other site-wide
// constants. Update the values below as real information becomes available —
// links left empty are simply not rendered (see components that import this).

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const CONTACT_EMAIL = "support@nawton.net";

export const LOCATION = "Sverige";

// TODO: fyll i riktigt organisationsnummer när det finns.
export const ORG_NR = "TODO: ORGANISATIONSNUMMER";

// TODO: fyll i riktiga profil-url:er. Tomma värden renderas inte i footern.
export const SOCIAL_LINKS = {
  linkedin: "",
  github: "",
  instagram: "",
} as const;
