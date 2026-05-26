import type { Metadata } from "next";
import { Geist, Space_Grotesk, Great_Vibes } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const grotesk = Space_Grotesk({ variable: "--font-grotesk", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const script = Great_Vibes({ variable: "--font-script", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Nawton – Web Development Agency",
  description: "We build digital products that make your vision impossible to ignore.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${grotesk.variable} ${script.variable} antialiased`}>
      <body className="bg-[#080810] text-white overflow-x-hidden">
        {/* Ambient background orbs */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-violet-900/20 blur-[120px]" />
          <div className="absolute top-[40%] right-[-15%] w-[500px] h-[500px] rounded-full bg-indigo-900/15 blur-[100px]" />
          <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] rounded-full bg-purple-900/10 blur-[100px]" />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
