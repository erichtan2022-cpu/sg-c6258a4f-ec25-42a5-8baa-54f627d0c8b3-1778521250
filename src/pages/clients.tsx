import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useState } from "react";

const clientLogos = [
  "PT Bank Mandiri", "PT Telkom Indonesia", "PT Pertamina", "PT PLN", "PT Astra International",
  "PT Unilever Indonesia", "PT Indofood", "PT Toyota Astra", "PT Samsung Electronics",
  "PT LG Electronics", "PT Panasonic Gobel", "PT Sharp Electronics", "Mall Grand Indonesia",
  "Mall Pacific Place", "Mall Plaza Indonesia", "Mall Summarecon", "Mall Alam Sutera",
  "RSUD Tangerang", "RS Premier Bintaro", "RS Omni Alam Sutera",
];

const testimonials = [
  {
    name: "Budi Santoso",
    position: "Security Manager",
    company: "PT Astra Manufacturing",
    photo: "/generated/testimonial-1.png",
    text: "Trans Security memberikan solusi keamanan yang sangat profesional. Personel mereka disiplin, responsif, dan memahami SOP dengan baik. Kami sangat puas dengan layanannya.",
  },
  {
    name: "Siti Aminah",
    position: "General Affairs Manager",
    company: "Mall Grand Indonesia",
    photo: "/generated/testimonial-2.png",
    text: "Sejak menggunakan jasa Trans Security, insiden keamanan di mall kami menurun drastis. Tim mereka sangat terlatih dan memiliki appearance yang profesional.",
  },
  {
    name: "Agus Wijaya",
    position: "Plant Manager",
    company: "PT Indofood Sukses Makmur",
    photo: "/generated/testimonial-3.png",
    text: "Electronic security system yang dipasang Trans Security sangat membantu monitoring 24/7. Technical support mereka juga responsif. Highly recommended!",
  },
];

const caseStudies = [
  {
    title: "Implementasi Sistem Keamanan Terintegrasi di Manufacturing Plant",
    client: "PT Astra Manufacturing",
    challenge: "Pabrik seluas 10 hektar membutuhkan sistem keamanan terintegrasi yang dapat memonitor seluruh area secara real-time.",
    solution: "Instalasi 120 CCTV IP cameras, 15 access points, guard tour system, dan command center 24/7 dengan 50 personel terlatih.",
    result: "Zero incident dalam 2 tahun operasional. Efisiensi monitoring meningkat 85%. Penghematan biaya operasional 40% dibanding sistem lama.",
  },
  {
    title: "Security Upgrade untuk Retail Mall Class A",
    client: "Mall Pacific Place Jakarta",
    challenge: "Mall dengan traffic 50.000+ pengunjung per hari memerlukan upgrade security system dan penambahan personel terlatih.",
    solution: "Deployment 80 security officers, instalasi facial recognition system, upgrade 200+ CCTV to 4K resolution, panic button integration.",
    result: "Response time to incidents reduced dari 5 menit menjadi 90 detik. Customer satisfaction score naik dari 7.2 ke 8.9 (scale 10).",
  },
];

export default function Clients() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <>
      <SEO
        title="Klien Kami - Trans Security"
        description="Dipercaya oleh perusahaan terkemuka di Indonesia untuk solusi keamanan profesional."
      />
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-20">
          <section className="relative h-[400px] bg-primary flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
            <div className="container relative z-10 text-center">
              <nav className="text-primary-foreground/60 text-sm mb-4">
                <span>Beranda</span> <span className="mx-2">/</span> <span className="text-accent">Klien</span>
              </nav>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-white">
                Klien Kami
              </h1>
              <p className="text-primary-foreground/80 text-lg mt-4 max-w-2xl mx-auto">
                Dipercaya oleh perusahaan terkemuka di Indonesia
              </p>
            </div>
          </section>

          <section className="py-24 bg-background">
            <div className="container">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-4">
                Klien yang Mempercayai Kami
              </h2>
              <p className="text-foreground/70 text-center mb-16 max-w-2xl mx-auto">
                Lebih dari 100 perusahaan korporat, pabrik, retail, dan perumahan telah mempercayakan keamanan mereka kepada Trans Security
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {clientLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-6 border border-border rounded-lg bg-white hover:border-accent transition-all duration-300 group grayscale hover:grayscale-0"
                  >
                    <p className="text-sm font-medium text-foreground/60 group-hover:text-accent text-center transition-colors">
                      {logo}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-muted">
            <div className="container">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-4">
                Testimoni Klien
              </h2>
              <p className="text-foreground/70 text-center mb-16">
                Apa kata mereka tentang layanan kami
              </p>

              <div className="max-w-5xl mx-auto">
                <div className="relative">
                  <Card className="p-12 bg-white border-2 border-accent/20">
                    <Quote className="w-12 h-12 text-accent/30 mb-6" />
                    <p className="text-foreground/80 text-lg leading-relaxed mb-8 italic">
                      {testimonials[activeTestimonial].text}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-heading text-2xl font-bold">
                        {testimonials[activeTestimonial].name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-heading font-bold text-primary">
                          {testimonials[activeTestimonial].name}
                        </p>
                        <p className="text-sm text-foreground/60">
                          {testimonials[activeTestimonial].position}
                        </p>
                        <p className="text-sm text-accent font-medium">
                          {testimonials[activeTestimonial].company}
                        </p>
                      </div>
                    </div>
                  </Card>

                  <div className="flex justify-center gap-3 mt-8">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          activeTestimonial === index
                            ? "bg-accent w-12"
                            : "bg-foreground/20 hover:bg-foreground/40"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-background">
            <div className="container">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-4">
                Studi Kasus
              </h2>
              <p className="text-foreground/70 text-center mb-16 max-w-2xl mx-auto">
                Kisah sukses implementasi solusi keamanan kami
              </p>

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {caseStudies.map((study, index) => (
                  <Card key={index} className="p-8 bg-white border border-border hover:border-accent hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                      <span className="text-accent font-heading text-xl font-bold">{index + 1}</span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                      {study.title}
                    </h3>
                    <p className="text-sm text-accent font-medium mb-6">
                      Client: {study.client}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2">Tantangan:</p>
                        <p className="text-foreground/70 text-sm leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2">Solusi:</p>
                        <p className="text-foreground/70 text-sm leading-relaxed">
                          {study.solution}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2">Hasil:</p>
                        <p className="text-foreground/70 text-sm leading-relaxed">
                          {study.result}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
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