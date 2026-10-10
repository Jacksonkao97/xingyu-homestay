import ContactSection from "@/components/ContactSection";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery />
      <PricingSection />
      <ContactSection />
    </main>
  );
}
