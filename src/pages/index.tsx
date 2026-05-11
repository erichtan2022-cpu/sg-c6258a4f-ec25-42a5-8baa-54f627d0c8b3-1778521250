import { Navigation } from "@/components/Navigation";
import { HeroSlider } from "@/components/HeroSlider";
import { StatisticsCounter } from "@/components/StatisticsCounter";
import { ServicesSection } from "@/components/ServicesSection";
import { WhySection } from "@/components/WhySection";
import { ClientsCarousel } from "@/components/ClientsCarousel";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Trans Security - Solusi Keamanan Terintegrasi Terpercaya"
        description="PT Trans Kontinental Indonesia menyediakan layanan keamanan profesional berizin Mabes Polri untuk korporat, pabrik, mall, dan perumahan."
      />
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-20">
          <HeroSlider />
          <StatisticsCounter />
          <ServicesSection />
          <WhySection />
          <ClientsCarousel />
          <CTASection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}