import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import ProductsSection from "@/components/ProductsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <PhilosophySection />
        <HowWeWorkSection />
        <div className="section-divider" />
        <ProductsSection />
        <div className="section-divider" />
        <TeamSection />
        <div className="section-divider" />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
