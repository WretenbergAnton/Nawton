import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LaptopSection from "@/components/LaptopSection";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <CookieBanner />
      <Navbar />
      <main>
        <Hero />
        <LaptopSection />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
