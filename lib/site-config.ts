// Central place for contact details, social links and other site-wide
// constants. Update the values below as real information becomes available —
// links left empty are simply not rendered (see components that import this).

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nawton.net";

export const CONTACT_EMAIL = "support@nawton.net";

export const LOCATION = "Sverige";

// Tomt värde döljer org.nr-raden i footern (se SiteFooter.tsx) tills ett
// riktigt organisationsnummer fylls i här.
export const ORG_NR = "";

// TODO: fyll i riktiga profil-url:er. Tomma värden renderas inte i footern.
export const SOCIAL_LINKS = {
  linkedin: "",
  github: "",
  instagram: "",
} as const;
