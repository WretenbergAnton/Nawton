"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { sendContact } from "@/app/actions/contact";
import { Mail, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons";

const EASE: [number, number, number, number] = [0.33, 1, 0.68, 1];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: EASE },
  },
});

const errorVariant = {
  hidden: { opacity: 0, y: -4 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

type Fields = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof Fields, string>>;

function validate(fields: Fields): FieldErrors {
  const errors: FieldErrors = {};
  if (!fields.name || fields.name.trim().length < 2)
    errors.name = "Namnet måste vara minst 2 tecken";
  if (!fields.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errors.email = "Ogiltig e-postadress";
  if (!fields.projectType) errors.projectType = "Välj typ av projekt";
  if (!fields.budget) errors.budget = "Välj budget";
  if (!fields.message || fields.message.trim().length < 20)
    errors.message = "Meddelandet måste vara minst 20 tecken";
  return errors;
}

export default function Contact() {
  const reduced = useReducedMotion();
  const vp = { once: true };
  const formRef = useRef<HTMLFormElement>(null);

  const [fields, setFields] = useState<Fields>({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const set =
    (key: keyof Fields) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setFields((prev) => ({ ...prev, [key]: e.target.value }));
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fieldErrors = validate(fields);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    setLoading(true);
    setServerError("");
    const fd = new FormData();
    Object.entries(fields).forEach(([k, v]) => fd.append(k, v));
    const result = await sendContact(fd);
    setLoading(false);
    if (result.success) {
      setSuccess(true);
    } else {
      setServerError(result.error ?? "Något gick fel.");
    }
  };

  const inputClass = (key: keyof Fields) =>
    `w-full bg-transparent border-b py-3 text-white placeholder:text-white/20 focus:outline-none transition-colors duration-300 text-sm ${
      errors[key]
        ? "border-red-500/60"
        : "border-white/10 focus:border-white/40"
    }`;

  const selectClass = (key: keyof Fields) =>
    `w-full bg-[#0a0a0a] border-b py-3 text-sm focus:outline-none transition-colors duration-300 appearance-none ${
      errors[key]
        ? "border-red-500/60 text-white"
        : "border-white/10 focus:border-white/40 text-white/50"
    }`;

  return (
    <section
      id="contact"
      className="px-6 md:px-12 py-32 md:py-40 border-t border-white/10"
    >
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          className="text-center mb-16 md:mb-20"
          variants={reduced ? undefined : fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
            Har du ett projekt?
          </h2>
          <p className="text-white/40 text-sm">
            Hör av dig – vi svarar inom 24 timmar.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {success ? (
            <motion.div
              className="flex flex-col items-center gap-4 py-16 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <CheckCircle size={40} className="text-white/60" />
              <p className="text-2xl font-bold text-white">Tack!</p>
              <p className="text-white/40 text-sm">
                Vi hör av oss inom 24 timmar.
              </p>
            </motion.div>
          ) : (
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-8"
              variants={
                reduced
                  ? undefined
                  : {
                      hidden: {},
                      show: { transition: { staggerChildren: 0.07 } },
                    }
              }
              initial="hidden"
              whileInView="show"
              viewport={vp}
              noValidate
            >
              {/* Namn */}
              <motion.div variants={reduced ? undefined : fadeUp()}>
                <input
                  type="text"
                  name="name"
                  placeholder="Namn"
                  value={fields.name}
                  onChange={set("name")}
                  className={inputClass("name")}
                  autoComplete="name"
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      className="text-xs text-red-400 mt-1"
                      variants={errorVariant}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* E-post */}
              <motion.div variants={reduced ? undefined : fadeUp()}>
                <input
                  type="email"
                  name="email"
                  placeholder="E-post"
                  value={fields.email}
                  onChange={set("email")}
                  className={inputClass("email")}
                  autoComplete="email"
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      className="text-xs text-red-400 mt-1"
                      variants={errorVariant}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Projekttyp */}
              <motion.div variants={reduced ? undefined : fadeUp()}>
                <select
                  name="projectType"
                  value={fields.projectType}
                  onChange={set("projectType")}
                  className={selectClass("projectType")}
                >
                  <option value="" disabled>
                    Typ av projekt
                  </option>
                  <option value="Hemsida">Hemsida</option>
                  <option value="Webbapp">Webbapp</option>
                  <option value="Mobilapp">Mobilapp</option>
                  <option value="SEO">SEO</option>
                  <option value="Annat">Annat</option>
                </select>
                <AnimatePresence>
                  {errors.projectType && (
                    <motion.p
                      className="text-xs text-red-400 mt-1"
                      variants={errorVariant}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                    >
                      {errors.projectType}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Budget */}
              <motion.div variants={reduced ? undefined : fadeUp()}>
                <select
                  name="budget"
                  value={fields.budget}
                  onChange={set("budget")}
                  className={selectClass("budget")}
                >
                  <option value="" disabled>
                    Budget
                  </option>
                  <option value="Under 10 000 kr">Under 10 000 kr</option>
                  <option value="10 000–30 000 kr">10 000–30 000 kr</option>
                  <option value="30 000 kr+">30 000 kr+</option>
                  <option value="Vet ej">Vet ej</option>
                </select>
                <AnimatePresence>
                  {errors.budget && (
                    <motion.p
                      className="text-xs text-red-400 mt-1"
                      variants={errorVariant}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                    >
                      {errors.budget}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Meddelande */}
              <motion.div variants={reduced ? undefined : fadeUp()}>
                <textarea
                  name="message"
                  placeholder="Meddelande"
                  value={fields.message}
                  onChange={set("message")}
                  rows={5}
                  className={`${inputClass("message")} resize-none`}
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      className="text-xs text-red-400 mt-1"
                      variants={errorVariant}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {serverError && (
                <motion.div
                  className="flex items-center gap-2 text-sm text-red-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <AlertCircle size={15} />
                  {serverError}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black font-medium py-4 text-sm uppercase tracking-widest hover:bg-white/90 transition-colors duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                variants={reduced ? undefined : fadeUp()}
                whileHover={reduced ? undefined : { scale: 1.01 }}
                whileTap={reduced ? undefined : { scale: 0.99 }}
              >
                {loading ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    Skickar...
                  </>
                ) : (
                  "Skicka"
                )}
              </motion.button>
            </motion.form>
          )}

          <motion.div
            className="flex flex-col md:flex-row gap-6 md:gap-10 mt-14 pt-10 border-t border-white/10"
            variants={reduced ? undefined : fadeUp(0.3)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            <a
              href="mailto:anton.wretenberg04@outlook.com"
              className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-300"
            >
              <Mail size={14} />
              anton.wretenberg04@outlook.com
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-300"
            >
              <LinkedInIcon size={14} />
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-300"
            >
              <GitHubIcon size={14} />
              GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
