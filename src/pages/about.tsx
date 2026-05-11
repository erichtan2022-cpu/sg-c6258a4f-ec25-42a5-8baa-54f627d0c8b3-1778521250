import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { ProfileSection } from "@/components/about/ProfileSection";
import { TimelineSection } from "@/components/about/TimelineSection";
import { LegalitySection } from "@/components/about/LegalitySection";
import { TeamSection } from "@/components/about/TeamSection";

export default function About() {
  return (
    <>
      <SEO
        title="Tentang Kami - Trans Security"
        description="PT Trans Kontinental Indonesia adalah perusahaan jasa keamanan berizin resmi Mabes Polri yang telah melayani lebih dari 100 klien korporat sejak 2013."
      />
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-20">
          <section className="relative h-[400px] bg-primary flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
            <div className="container relative z-10 text-center">
              <nav className="text-primary-foreground/60 text-sm mb-4">
                <span>Beranda</span> <span className="mx-2">/</span> <span className="text-accent">Tentang Kami</span>
              </nav>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-white">
                Tentang Kami
              </h1>
              <p className="text-primary-foreground/80 text-lg mt-4 max-w-2xl mx-auto">
                Mengenal lebih dekat PT Trans Kontinental Indonesia
              </p>
            </div>
          </section>

          <ProfileSection />
          <TimelineSection />
          <LegalitySection />
          <TeamSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}