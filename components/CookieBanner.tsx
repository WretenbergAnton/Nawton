"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

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
            <p className="text-sm text-white font-medium mb-1">Vi använder cookies</p>
            <p className="text-xs text-white/40 leading-relaxed mb-5">
              Vi använder cookies för att förbättra din upplevelse på vår webbplats.
            </p>
            <div className="flex gap-3">
              <button
                onClick={accept}
                className="flex-1 bg-white text-black text-xs font-medium py-2.5 uppercase tracking-widest hover:bg-white/90 transition-colors duration-200"
              >
                Acceptera
              </button>
              <button
                onClick={decline}
                className="flex-1 border border-white/20 text-white/60 text-xs font-medium py-2.5 uppercase tracking-widest hover:border-white/40 hover:text-white transition-colors duration-200"
              >
                Avböj
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
