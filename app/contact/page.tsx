"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { sendContact } from "@/app/actions/contact";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const inputBase =
  "w-full bg-transparent border-b border-white/15 focus:border-white/50 outline-none text-white placeholder:text-white/25 text-base py-4 transition-colors duration-200";

const selectBase =
  "w-full bg-transparent border-b border-white/15 focus:border-white/50 outline-none text-base py-4 transition-colors duration-200 appearance-none cursor-pointer text-white";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const result = await sendContact(new FormData(e.currentTarget));
    setLoading(false);
    if (result.success) setSuccess(true);
    else setError(result.error ?? "Something went wrong.");
  };

  return (
    <div className="min-h-screen bg-[#080810] flex flex-col">
      {/* Ambient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-violet-900/25 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] rounded-full bg-indigo-900/20 blur-[100px]" />
      </div>

      {/* Nav */}
      <header className="relative z-10 flex items-center justify-between px-6 md:px-16 py-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200 group"
        >
          <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform duration-200" />
          Back
        </Link>
        <span className="text-white font-semibold text-lg tracking-tight">Nawton</span>
      </header>

      {/* Content */}
      <main className="relative z-10 flex-1 flex items-center px-6 md:px-16 py-16">
        <div className="w-full max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success"
                className="flex flex-col items-center justify-center gap-6 text-center py-32"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <CheckCircle size={48} className="text-violet-400" />
                <h1 className="text-4xl md:text-5xl font-bold text-white">Message sent!</h1>
                <p className="text-white/50 text-lg">We'll get back to you within 24 hours.</p>
                <Link
                  href="/"
                  className="mt-4 flex items-center gap-2 text-sm text-white/50 hover:text-white border-b border-white/20 hover:border-white pb-0.5 transition-colors duration-200"
                >
                  Back to home <ArrowRight size={13} />
                </Link>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                {/* Left — headline */}
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-white/30 tracking-[0.2em] uppercase mb-6">
                      · Get in touch ·
                    </p>
                    <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-8">
                      Let&apos;s build something great together.
                    </h1>
                    <p className="text-white/40 text-base leading-relaxed">
                      Tell us about your project and we'll get back to you within 24 hours with a plan forward.
                    </p>
                  </div>

                  <div className="hidden md:flex flex-col gap-2 mt-16">
                    <p className="text-xs text-white/20 uppercase tracking-widest mb-3">Or reach us directly</p>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/40 hover:text-white transition-colors duration-200"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/40 hover:text-white transition-colors duration-200"
                    >
                      Instagram
                    </a>
                  </div>
                </div>

                {/* Right — form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs text-white/30 uppercase tracking-widest block mb-2">Name</label>
                      <input name="name" type="text" placeholder="Full name" required className={inputBase} />
                    </div>
                    <div>
                      <label className="text-xs text-white/30 uppercase tracking-widest block mb-2">Email</label>
                      <input name="email" type="email" placeholder="Work email" required className={inputBase} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs text-white/30 uppercase tracking-widest block mb-2">Project type</label>
                      <select name="projectType" required defaultValue="" className={selectBase}>
                        <option value="" disabled className="bg-[#0e0e1a]">Select type</option>
                        <option value="Website" className="bg-[#0e0e1a]">Website</option>
                        <option value="Web App" className="bg-[#0e0e1a]">Web App</option>
                        <option value="Mobile App" className="bg-[#0e0e1a]">Mobile App</option>
                        <option value="SEO" className="bg-[#0e0e1a]">SEO</option>
                        <option value="Other" className="bg-[#0e0e1a]">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-white/30 uppercase tracking-widest block mb-2">Budget</label>
                      <select name="budget" defaultValue="" className={selectBase}>
                        <option value="" disabled className="bg-[#0e0e1a]">Select budget</option>
                        <option value="Under 10k" className="bg-[#0e0e1a]">Under 10 000 kr</option>
                        <option value="10k–30k" className="bg-[#0e0e1a]">10 000 – 30 000 kr</option>
                        <option value="30k–50k" className="bg-[#0e0e1a]">30 000 – 50 000 kr</option>
                        <option value="50k+" className="bg-[#0e0e1a]">50 000 kr+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-white/30 uppercase tracking-widest block mb-2">Message</label>
                    <textarea
                      name="message"
                      placeholder="Describe your project, goals, and any relevant timeline or constraints…"
                      required
                      rows={5}
                      className={`${inputBase} resize-none`}
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-400/80 bg-red-500/10 rounded-xl px-4 py-3">{error}</p>
                  )}

                  <div className="flex items-center justify-between pt-2">
                    <p className="text-xs text-white/20">We reply within 24 hours.</p>
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex items-center gap-2 bg-white text-[#080810] font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors duration-200 disabled:opacity-50"
                    >
                      {loading
                        ? <><Loader2 size={14} className="animate-spin" /> Sending…</>
                        : <>Send message <ArrowRight size={14} /></>
                      }
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
