import { Navigation } from "@/components/Navigation";
import { HeroSlider } from "@/components/HeroSlider";
import { StatisticsCounter } from "@/components/StatisticsCounter";
import { ServicesSection } from "@/components/ServicesSection";
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
        </main>
      </div>
    </>
  );
}