"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Send, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ChatWidget() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: t.chatWidget.greeting,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Keep the initial greeting in sync if the language changes before the
  // visitor has sent a message. Adjusted during render (not in an effect)
  // per https://react.dev/learn/you-might-not-need-an-effect.
  const [lastGreeting, setLastGreeting] = useState(t.chatWidget.greeting);
  if (t.chatWidget.greeting !== lastGreeting) {
    setLastGreeting(t.chatWidget.greeting);
    if (messages.length === 1 && messages[0].role === "assistant") {
      setMessages([{ role: "assistant", content: t.chatWidget.greeting }]);
    }
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.message || data.error || t.chatWidget.genericError }]);
    } catch {
      setMessages([...next, { role: "assistant", content: t.chatWidget.connectionError }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="w-[340px] rounded-2xl border border-white/10 bg-[#10101a] shadow-2xl flex flex-col overflow-hidden"
            style={{ maxHeight: "480px" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.07]">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-violet-600 flex items-center justify-center">
                  <Image src="/logo.png" alt="" width={20} height={20} className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Nawton</p>
                  <p className="text-xs text-white/40">{t.chatWidget.subtitle}</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/40 hover:text-white transition-colors">
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3" style={{ minHeight: 0 }}>
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`text-sm px-4 py-2.5 rounded-2xl max-w-[80%] leading-relaxed ${
                      m.role === "user"
                        ? "bg-violet-600 text-white rounded-br-sm"
                        : "bg-white/[0.06] text-white/80 rounded-bl-sm"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/[0.06] rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-white/40"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-white/[0.07] flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send()}
                placeholder={t.chatWidget.placeholder}
                className="flex-1 bg-white/[0.05] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-violet-500/50 transition-colors"
              />
              <button
                onClick={send}
                disabled={!input.trim() || loading}
                className="w-9 h-9 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors flex-shrink-0"
              >
                <Send size={14} className="text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 rounded-full bg-violet-600 hover:bg-violet-500 shadow-lg shadow-violet-900/40 flex items-center justify-center transition-colors"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={20} className="text-white" />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle size={20} className="text-white" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
