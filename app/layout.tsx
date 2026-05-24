import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nawton – Webbutvecklingsbyrå i Sundsvall",
  description:
    "Vi bygger moderna hemsidor, webbappar och mobilappar för företag som vill växa online.",
  keywords: ["webbutveckling", "hemsida", "webbapp", "mobilapp", "Sundsvall"],
  openGraph: {
    title: "Nawton – Webbutvecklingsbyrå i Sundsvall",
    description:
      "Vi bygger moderna hemsidor, webbappar och mobilappar för företag som vill växa online.",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#0a0a0a] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
