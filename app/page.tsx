import ContactSection from "@/components/ContactSection";
import GlimpseGallery from "@/components/GlimpseGallery";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <GlimpseGallery />
      <PricingSection />
      <ContactSection />
    </main>
  );
}
