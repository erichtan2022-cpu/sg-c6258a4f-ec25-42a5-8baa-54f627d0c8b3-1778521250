import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileText, Users, GraduationCap, MapPin } from "lucide-react";
import { useState } from "react";

const jobs = [
  {
    id: "satpam",
    title: "Satpam / Security Guard",
    location: "Jakarta, Tangerang, Bekasi",
    type: "Full Time",
    requirements: [
      "Pria, usia maksimal 35 tahun",
      "Tinggi badan minimal 165 cm",
      "Pendidikan minimal SMA/SMK",
      "Sehat jasmani dan rohani",
      "Bersedia bekerja shift",
      "Memiliki sertifikat Gada Pratama (diutamakan)",
    ],
  },
  {
    id: "danru",
    title: "Danru (Kepala Regu)",
    location: "Jakarta, Tangerang",
    type: "Full Time",
    requirements: [
      "Pria/Wanita, usia maksimal 40 tahun",
      "Pendidikan minimal SMA/SMK",
      "Pengalaman sebagai satpam minimal 2 tahun",
      "Memiliki sertifikat Gada Madya",
      "Mampu memimpin tim",
      "Kemampuan komunikasi baik",
    ],
  },
  {
    id: "supervisor",
    title: "Supervisor Security",
    location: "Jakarta, Tangerang, Bekasi",
    type: "Full Time",
    requirements: [
      "Pria/Wanita, usia maksimal 45 tahun",
      "Pendidikan minimal D3",
      "Pengalaman sebagai supervisor security minimal 3 tahun",
      "Memiliki sertifikat Gada Utama",
      "Leadership dan management skills",
      "Menguasai Microsoft Office",
    ],
  },
];

const recruitmentSteps = [
  {
    icon: FileText,
    title: "Pendaftaran",
    description: "Submit CV dan dokumen lengkap melalui form atau email",
  },
  {
    icon: Users,
    title: "Seleksi",
    description: "Interview, tes kesehatan, background check",
  },
  {
    icon: GraduationCap,
    title: "Training",
    description: "Pelatihan Gada Pratama/Madya dan SOP perusahaan",
  },
  {
    icon: MapPin,
    title: "Penempatan",
    description: "Deployment ke lokasi client sesuai kompetensi",
  },
];

export default function Career() {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    phone: "",
    email: "",
    message: "",
    cv: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Halo Trans Security, saya ingin melamar posisi *${formData.position}*%0A%0ANama: ${formData.name}%0ATelp: ${formData.phone}%0AEmail: ${formData.email}%0A%0APesan: ${formData.message}%0A%0A(CV akan dikirim via email)`;
    window.open(`https://wa.me/6281234567890?text=${whatsappMessage}`, "_blank");
  };

  return (
    <>
      <SEO
        title="Karir - Trans Security"
        description="Bergabunglah dengan tim profesional Trans Security. Lowongan: Satpam, Danru, Supervisor Security."
      />
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-20">
          <section className="relative h-[400px] bg-primary flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
            <div className="container relative z-10 text-center">
              <nav className="text-primary-foreground/60 text-sm mb-4">
                <span>Beranda</span> <span className="mx-2">/</span> <span className="text-accent">Karir</span>
              </nav>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4">
                Bergabung Bersama Kami
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                Jadilah bagian dari pasukan profesional Trans Security
              </p>
            </div>
          </section>

          <section className="py-24 bg-background">
            <div className="container">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-4">
                Lowongan Tersedia
              </h2>
              <p className="text-foreground/70 text-center mb-16 max-w-2xl mx-auto">
                Temukan posisi yang sesuai dengan keahlian Anda
              </p>

              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {jobs.map((job) => (
                    <AccordionItem
                      key={job.id}
                      value={job.id}
                      className="border border-border rounded-lg px-6 bg-white hover:border-accent transition-colors"
                    >
                      <AccordionTrigger className="hover:no-underline py-6">
                        <div className="text-left">
                          <h3 className="font-heading text-xl font-bold text-primary mb-2">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
                            <span className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-accent" />
                              {job.location}
                            </span>
                            <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                              {job.type}
                            </span>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-4 pb-6">
                        <div className="mb-6">
                          <p className="font-semibold text-foreground mb-3">Persyaratan:</p>
                          <ul className="space-y-2">
                            {job.requirements.map((req, index) => (
                              <li key={index} className="text-foreground/70 text-sm flex items-start gap-2">
                                <span className="text-accent mt-0.5">•</span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button className="bg-accent hover:bg-accent/90">
                          Lamar Sekarang
                        </Button>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          <section className="py-24 bg-muted">
            <div className="container">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-4">
                Alur Rekrutmen
              </h2>
              <p className="text-foreground/70 text-center mb-16">
                Proses seleksi yang transparan dan profesional
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {recruitmentSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-20 h-20 rounded-full bg-accent text-accent-foreground mx-auto mb-6 flex items-center justify-center relative">
                        <Icon className="w-10 h-10" />
                        <div className="absolute -bottom-3 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-heading text-lg font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-primary mb-3">
                        {step.title}
                      </h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="py-24 bg-background">
            <div className="container">
              <div className="max-w-2xl mx-auto">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
                  Form Lamaran
                </h2>
                <p className="text-foreground/70 text-center mb-12">
                  Lengkapi form di bawah untuk melamar posisi yang tersedia
                </p>

                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg border border-border space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nama Lengkap *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Posisi yang Dilamar *
                    </label>
                    <Input
                      required
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      placeholder="Contoh: Satpam, Danru, Supervisor"
                    />
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
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Upload CV (PDF/DOC)
                    </label>
                    <Input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) =>
                        setFormData({ ...formData, cv: e.target.files?.[0] || null })
                      }
                    />
                    <p className="text-xs text-foreground/50 mt-1">
                      Atau kirim CV ke email: career@trans-security.co.id
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Pesan / Motivasi
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ceritakan mengapa Anda tertarik bergabung dengan Trans Security..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                    Kirim Lamaran via WhatsApp
                  </Button>
                </form>
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