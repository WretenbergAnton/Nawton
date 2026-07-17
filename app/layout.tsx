import type { Metadata } from "next";
import { Geist, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
import ChatWidget from "@/components/ChatWidget";
import { SITE_URL } from "@/lib/site-config";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const grotesk = Space_Grotesk({ variable: "--font-grotesk", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], weight: ["500"] });

const title = "Nawton – Webbyrå | Design & Webbutveckling i Sverige";
const description =
  "Nawton är en webbyrå som designar och bygger snabba, moderna hemsidor och webbappar för småföretag i hela Sverige.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s | Nawton",
  },
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Nawton",
    images: ["/og-image.png"],
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${geist.variable} ${grotesk.variable} ${playfair.variable} antialiased`} data-scroll-behavior="smooth">
      <body className="bg-[#080810] text-white overflow-x-hidden">
        <LanguageProvider>
          {/* Ambient background orbs */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-violet-900/20 blur-[120px]" />
            <div className="absolute top-[40%] right-[-15%] w-[500px] h-[500px] rounded-full bg-indigo-900/15 blur-[100px]" />
            <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] rounded-full bg-purple-900/10 blur-[100px]" />
          </div>
          <LoadingScreen />
          <div className="relative z-10">
            {children}
          </div>
          <ChatWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}
