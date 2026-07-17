"use client";

import { useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const STORAGE_KEY = "cookie-consent";

let listeners: Array<() => void> = [];

function subscribe(listener: () => void) {
  listeners = [...listeners, listener];
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function getSnapshot() {
  return localStorage.getItem(STORAGE_KEY);
}

// No consent decision exists during SSR — nothing to show yet.
function getServerSnapshot() {
  return "pending";
}

function setConsent(value: "accepted" | "declined") {
  localStorage.setItem(STORAGE_KEY, value);
  listeners.forEach((l) => l());
}

export default function CookieBanner() {
  const { t } = useLanguage();
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const visible = consent === null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-sm z-[100]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }}
        >
          <div className="bg-[#111111] border border-white/10 p-6 rounded-lg">
            <p className="text-sm text-white font-medium mb-1">{t.cookieBanner.title}</p>
            <p className="text-xs text-white/40 leading-relaxed mb-5">
              {t.cookieBanner.description}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setConsent("accepted")}
                className="flex-1 bg-white text-black text-xs font-medium py-2.5 uppercase tracking-widest hover:bg-white/90 transition-colors duration-200"
              >
                {t.cookieBanner.accept}
              </button>
              <button
                onClick={() => setConsent("declined")}
                className="flex-1 border border-white/20 text-white/60 text-xs font-medium py-2.5 uppercase tracking-widest hover:border-white/40 hover:text-white transition-colors duration-200"
              >
                {t.cookieBanner.decline}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
