import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Shield, Search, GraduationCap, Dog, Cctv, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    slug: "security-services",
    icon: Shield,
    title: "Security Services",
    description: "Penyediaan satpam profesional, bodyguard personal, dan event security untuk berbagai kebutuhan",
    features: ["Satpam Pabrik & Kantor", "Bodyguard Personal", "Event Security", "Patrol Security"],
  },
  {
    slug: "security-consultant",
    icon: Search,
    title: "Security Consultant",
    description: "Layanan konsultasi keamanan komprehensif: risk assessment, audit, dan penyusunan SOP",
    features: ["Risk Assessment", "Security Audit", "SOP Development", "Emergency Planning"],
  },
  {
    slug: "security-training",
    icon: GraduationCap,
    title: "Security Training",
    description: "Pelatihan keamanan bersertifikat Gada Pratama, Gada Madya, dan in-house training",
    features: ["Gada Pratama", "Gada Madya", "In-House Training", "First Aid Training"],
  },
  {
    slug: "k9-unit",
    icon: Dog,
    title: "K9 Unit",
    description: "Unit anjing pelacak terlatih untuk deteksi bahan peledak, narkotika, dan keamanan perimeter",
    features: ["Explosive Detection", "Narcotic Detection", "Perimeter Security", "Handler Certified"],
  },
  {
    slug: "electronic-security",
    icon: Cctv,
    title: "Electronic Security",
    description: "Instalasi dan maintenance sistem CCTV, Access Control, Alarm, dan Fire Detection",
    features: ["CCTV Installation", "Access Control", "Alarm System", "Fire Detection"],
  },
  {
    slug: "guard-tour-system",
    icon: Radio,
    title: "Guard Tour System",
    description: "Sistem monitoring patroli real-time berbasis aplikasi dengan GPS tracking dan reporting",
    features: ["GPS Tracking", "Real-Time Monitoring", "Automated Reporting", "Mobile App"],
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Layanan Kami - Trans Security"
        description="Solusi keamanan lengkap: Security Services, Konsultan, Training, K9 Unit, Electronic Security, dan Guard Tour System."
      />
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-20">
          <section className="relative h-[400px] bg-primary flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
            <div className="container relative z-10 text-center">
              <nav className="text-primary-foreground/60 text-sm mb-4">
                <span>Beranda</span> <span className="mx-2">/</span> <span className="text-accent">Layanan</span>
              </nav>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-white">
                Layanan Kami
              </h1>
              <p className="text-primary-foreground/80 text-lg mt-4 max-w-2xl mx-auto">
                Solusi keamanan terintegrasi untuk kebutuhan bisnis Anda
              </p>
            </div>
          </section>

          <section className="py-24 bg-background">
            <div className="container">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-xl hover:scale-[1.03] hover:border-accent transition-all duration-300 group"
                    >
                      <div className="p-8">
                        <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-accent" />
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                          {service.title}
                        </h3>
                        <p className="text-foreground/70 leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-foreground/60 flex items-start gap-2">
                              <span className="text-accent mt-0.5">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Link href={`/services/${service.slug}`}>
                          <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                            Lihat Detail
                          </Button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}