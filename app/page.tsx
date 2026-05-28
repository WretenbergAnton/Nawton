import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LaptopSection from "@/components/LaptopSection";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LaptopSection />
        <Work />
        <Contact />
      </main>
    </>
  );
}
