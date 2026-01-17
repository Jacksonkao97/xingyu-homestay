import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import GlimpseGallery from "@/components/GlimpseGallery";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <GlimpseGallery />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
