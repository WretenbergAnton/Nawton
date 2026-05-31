import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import CookieBanner from "@/components/CookieBanner";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <CookieBanner />
      <Navbar />
      <main>
        <Hero />
        <Work />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
