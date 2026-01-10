import Hero from "@/components/Hero";
import HouseGallery from "@/components/HouseGallery";
import Amenities from "@/components/Amenities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <HouseGallery />
      <Amenities />
      <Contact />
      <Footer />
    </main>
  );
}
