import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Halo Trans Security,%0A%0ANama: ${formData.name}%0APerusahaan: ${formData.company}%0ATelp: ${formData.phone}%0AEmail: ${formData.email}%0ASubjek: ${formData.subject}%0A%0APesan:%0A${formData.message}`;
    window.open(`https://wa.me/6281234567890?text=${whatsappMessage}`, "_blank");
  };

  return (
    <>
      <SEO
        title="Kontak Kami - Trans Security"
        description="Hubungi Trans Security untuk konsultasi keamanan dan penawaran layanan. Tersedia 24/7."
      />
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-20">
          <section className="relative h-[400px] bg-primary flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
            <div className="container relative z-10 text-center">
              <nav className="text-primary-foreground/60 text-sm mb-4">
                <span>Beranda</span> <span className="mx-2">/</span> <span className="text-accent">Kontak</span>
              </nav>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4">
                Hubungi Kami
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                Kami siap melayani kebutuhan keamanan Anda 24/7
              </p>
            </div>
          </section>

          <section className="py-24 bg-background">
            <div className="container">
              <div className="grid lg:grid-cols-5 gap-12">
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h2 className="font-heading text-3xl font-bold text-primary mb-8">
                      Informasi Kontak
                    </h2>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground mb-1">Alamat Kantor</p>
                          <p className="text-foreground/70 text-sm leading-relaxed">
                            Jl. Raya Serpong KM 7, Pondok Jagung,<br />
                            Tangerang Selatan, Banten 15326
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground mb-1">Telepon</p>
                          <p className="text-foreground/70 text-sm">021-5379-8888</p>
                          <p className="text-foreground/70 text-sm">0812-3456-7890 (WhatsApp)</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground mb-1">Email</p>
                          <p className="text-foreground/70 text-sm">info@trans-security.co.id</p>
                          <p className="text-foreground/70 text-sm">career@trans-security.co.id</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground mb-1">Jam Operasional</p>
                          <p className="text-foreground/70 text-sm">Command Center: 24 Jam Nonstop</p>
                          <p className="text-foreground/70 text-sm">Kantor: Senin - Jumat, 08:00 - 17:00</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-[300px] bg-muted rounded-lg overflow-hidden border border-border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56402891815!2d106.6880984!3d-6.2146274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8e9c1d22305%3A0x1e4c4b8d6b8c3a1c!2sSerpong%2C%20Tangerang%20Selatan%20City%2C%20Banten!5e0!3m2!1sen!2sid!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Trans Security Location"
                    />
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <div className="bg-white p-8 rounded-lg border border-border">
                    <h2 className="font-heading text-3xl font-bold text-primary mb-2">
                      Kirim Pesan
                    </h2>
                    <p className="text-foreground/70 mb-8">
                      Isi form di bawah dan tim kami akan segera menghubungi Anda
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Nama Lengkap *
                          </label>
                          <Input
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Masukkan nama Anda"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Nama Perusahaan *
                          </label>
                          <Input
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Nama perusahaan"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            No. Telepon *
                          </label>
                          <Input
                            required
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="08xx xxxx xxxx"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Email *
                          </label>
                          <Input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="email@perusahaan.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Subjek *
                        </label>
                        <Input
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="Apa yang bisa kami bantu?"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Pesan *
                        </label>
                        <Textarea
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Jelaskan kebutuhan Anda secara detail..."
                          rows={6}
                        />
                      </div>

                      <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-lg py-6">
                        Kirim Pesan
                      </Button>
                    </form>
                  </div>
                </div>
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