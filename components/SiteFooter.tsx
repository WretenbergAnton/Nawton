"use client";

import { CONTACT_EMAIL, LOCATION, ORG_NR, SOCIAL_LINKS } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function SiteFooter() {
  const { t } = useLanguage();

  const socialLinks = [
    { label: t.contact.social.linkedin, href: SOCIAL_LINKS.linkedin },
    { label: t.contact.social.github, href: SOCIAL_LINKS.github },
    { label: t.contact.social.instagram, href: SOCIAL_LINKS.instagram },
  ].filter((s) => s.href);

  return (
    <footer className="px-6 md:px-16 py-6 border-t border-white/8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
      <div className="flex items-center gap-6 flex-wrap">
        <span className="text-xs text-white/25">© {new Date().getFullYear()} Nawton — {LOCATION}</span>
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-xs text-white/25 hover:text-white/60 transition-colors duration-200">
          {CONTACT_EMAIL}
        </a>
        <span className="text-xs text-white/15">{t.contact.orgNrLabel} {ORG_NR}</span>
      </div>
      {socialLinks.length > 0 && (
        <div className="flex gap-6">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/25 hover:text-white/60 transition-colors duration-200"
            >
              {s.label}
            </a>
          ))}
        </div>
      )}
    </footer>
  );
}
