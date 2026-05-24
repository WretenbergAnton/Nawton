"use client";

import { LinkedInIcon, GitHubIcon } from "@/components/icons";

const links = [
  { label: "Om oss", href: "#about" },
  { label: "Tjänster", href: "#services" },
  { label: "Projekt", href: "#portfolio" },
  { label: "Kontakt", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="px-6 md:px-12 py-8 border-t border-white/10">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs text-white/30">
          © 2025 Nawton. Alla rättigheter förbehållna.
        </p>

        <nav className="flex gap-8">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-xs uppercase tracking-widest text-white/30 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex gap-5">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/30 hover:text-white transition-colors duration-300"
          >
            <LinkedInIcon size={16} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white/30 hover:text-white transition-colors duration-300"
          >
            <GitHubIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
