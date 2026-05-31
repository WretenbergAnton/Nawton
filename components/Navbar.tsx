"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

const services = [
  { label: "Websites", description: "Fast, modern websites" },
  { label: "Web Apps", description: "Scalable applications" },
  { label: "Mobile Apps", description: "Apps for iOS & Android" },
  { label: "SEO", description: "Visibility in search engines" },
];

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "#services", dropdown: true },
  { label: "Projects & Case Studies", href: "/work" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navigate = (href: string) => {
    setDropdownOpen(false);
    setMobileOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#080810]/70 backdrop-blur-xl border-b border-white/8 shadow-[0_1px_40px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center"
          >
            <img src="/logo.svg" alt="Nawton" className="h-10 w-auto" />
          </button>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen((v) => !v)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-xl text-sm transition-all duration-200 ${
                      dropdownOpen
                        ? "border border-white/30 text-white"
                        : "border border-transparent text-white/60 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-64 bg-[#141418] border border-white/10 rounded-2xl p-2 shadow-2xl"
                        initial={{ opacity: 0, y: -8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.96 }}
                        transition={{ duration: 0.18, ease: [0.33, 1, 0.68, 1] }}
                      >
                        {services.map((s) => (
                          <button
                            key={s.label}
                            onClick={() => navigate(link.href)}
                            className="w-full flex flex-col text-left px-4 py-3 rounded-xl hover:bg-white/5 transition-colors duration-150 group"
                          >
                            <span className="text-sm text-white font-medium group-hover:text-white/80">
                              {s.label}
                            </span>
                            <span className="text-xs text-white/35 mt-0.5">{s.description}</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : link.href.startsWith("/") ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 rounded-xl text-sm text-white/60 hover:text-white border border-transparent hover:border-white/15 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => navigate(link.href)}
                  className="px-4 py-2 rounded-xl text-sm text-white/60 hover:text-white border border-transparent hover:border-white/15 transition-all duration-200"
                >
                  {link.label}
                </button>
              )
            )}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("#contact")}
              className="hidden md:block bg-white text-black text-sm font-medium px-5 py-2 rounded-full hover:bg-white/85 transition-colors duration-200"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden text-white p-1"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col px-6 pt-24 pb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => navigate(link.href)}
                  className="text-left text-3xl font-light text-white/80 hover:text-white py-3 border-b border-white/10 transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <button
              onClick={() => navigate("#contact")}
              className="mt-10 bg-white text-black font-medium py-4 rounded-full text-base"
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
