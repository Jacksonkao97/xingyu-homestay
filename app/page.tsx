import ContactSection from "@/components/ContactSection";
import GlimpseGallery from "@/components/GlimpseGallery";
import Hero from "@/components/Hero";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <GlimpseGallery />
      <PricingSection />
      <ContactSection />
    </main>
  );
}
