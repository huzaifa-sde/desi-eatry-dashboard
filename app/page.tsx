import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import MenuGallery from "@/components/landing/MenuGallery";
import Reviews from "@/components/landing/Reviews";
import B2BSection from "@/components/landing/B2BSection";
import Footer from "@/components/landing/Footer";
import WhatsAppFloat from "@/components/landing/WhatsAppFloat";

export default function LandingPage() {
  return (
    <main className="bg-desi-brown">
      <Navbar />
      <Hero />
      <Services />
      <MenuGallery />
      <Reviews />
      <B2BSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
