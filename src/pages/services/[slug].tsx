import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Shield, Search, GraduationCap, Dog, Cctv, Radio, Check } from "lucide-react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useState } from "react";

interface ServiceDetail {
  slug: string;
  iconName: string;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  process: string[];
}

const servicesData: ServiceDetail[] = [
  {
    slug: "security-services",
    iconName: "Shield",
    title: "Security Services",
    description: "Penyediaan satpam profesional, bodyguard personal, dan event security",
    longDescription: "Kami menyediakan tenaga keamanan profesional yang telah terlatih dan bersertifikat Gada Pratama/Utama. Personel kami siap ditempatkan di berbagai sektor: pabrik, kantor, retail, perumahan, hingga event khusus. Dengan pengalaman lebih dari 10 tahun, kami memahami kebutuhan keamanan spesifik setiap industri.",
    benefits: [
      "Personel bersertifikat dan background check lengkap",
      "Supervision ketat oleh supervisor berpengalaman",
      "Seragam lengkap dan peralatan komunikasi standar",
      "Shift scheduling fleksibel sesuai kebutuhan operasional",
      "Replacement cepat jika terjadi ketidakhadiran",
      "Laporan harian dan monthly evaluation"
    ],
    process: [
      "Konsultasi kebutuhan & site survey",
      "Proposal penawaran & quotation",
      "Seleksi & penempatan personel",
      "Briefing & SOP training di lokasi"
    ],
  },
  {
    slug: "security-consultant",
    iconName: "Search",
    title: "Security Consultant",
    description: "Konsultasi keamanan komprehensif: risk assessment, audit, dan SOP",
    longDescription: "Layanan konsultan keamanan profesional untuk mengidentifikasi gap, menilai risiko, dan merancang sistem keamanan yang efektif. Tim konsultan kami terdiri dari praktisi keamanan berpengalaman yang memahami standar ISO 31000 dan best practices internasional.",
    benefits: [
      "Identifikasi vulnerability dan threat analysis",
      "Risk assessment berbasis standar internasional",
      "Rekomendasi improvement terstruktur",
      "Penyusunan SOP dan emergency response plan",
      "Gap analysis sistem keamanan existing",
      "Compliance audit untuk regulasi keamanan"
    ],
    process: [
      "Initial meeting & scope definition",
      "Site assessment & data collection",
      "Analysis & report preparation",
      "Presentation & implementation support"
    ],
  },
  {
    slug: "security-training",
    iconName: "GraduationCap",
    title: "Security Training",
    description: "Pelatihan Gada Pratama, Gada Madya, dan in-house training",
    longDescription: "Program pelatihan keamanan bersertifikat dan diakui Mabes Polri. Kami menyelenggarakan pelatihan Gada Pratama untuk satpam pemula, Gada Madya untuk supervisor, serta customized in-house training sesuai kebutuhan perusahaan Anda.",
    benefits: [
      "Instruktur bersertifikat dan berpengalaman",
      "Materi berbasis regulasi terbaru Mabes Polri",
      "Sertifikat resmi yang diakui nasional",
      "Praktik lapangan & simulasi situasi nyata",
      "Modul customizable untuk corporate training",
      "Post-training support & refreshment course"
    ],
    process: [
      "Pendaftaran & verifikasi peserta",
      "Pelatihan teori & praktik (40 jam)",
      "Ujian sertifikasi Mabes Polri",
      "Penerbitan sertifikat & alumni network"
    ],
  },
  {
    slug: "k9-unit",
    iconName: "Dog",
    title: "K9 Unit",
    description: "Unit anjing pelacak terlatih untuk deteksi dan keamanan perimeter",
    longDescription: "Layanan K9 Unit dengan anjing terlatih untuk explosive detection, narcotic detection, dan perimeter security. Handler kami telah tersertifikasi dan anjing-anjing kami menjalani training berkelanjutan untuk menjaga performa optimal.",
    benefits: [
      "Anjing terlatih dengan breed terpilih (Belgian Malinois, German Shepherd)",
      "Handler bersertifikat dan berpengalaman",
      "Deteksi akurat untuk bahan peledak & narkotika",
      "Efektif untuk sweeping area luas",
      "Deterrent effect yang kuat untuk crime prevention",
      "Regular health check & veterinary support"
    ],
    process: [
      "Konsultasi kebutuhan & threat assessment",
      "Deployment planning & SOP briefing",
      "On-site deployment dengan handler",
      "Regular reporting & performance review"
    ],
  },
  {
    slug: "electronic-security",
    iconName: "Cctv",
    title: "Electronic Security",
    description: "Instalasi CCTV, Access Control, Alarm, dan Fire Detection",
    longDescription: "Solusi keamanan elektronik terintegrasi menggunakan teknologi terkini. Kami menyediakan instalasi, konfigurasi, maintenance, dan monitoring untuk sistem CCTV IP/Analog, Access Control fingerprint/kartu, Alarm System, dan Fire Detection sesuai standar NFPA.",
    benefits: [
      "Hardware berkualitas dari brand terpercaya (Hikvision, Dahua, ZKTeco)",
      "Instalasi oleh teknisi bersertifikat",
      "Remote monitoring via mobile app",
      "Storage capacity sesuai kebutuhan retention",
      "Integration dengan guard tour system",
      "Maintenance contract & 24/7 technical support"
    ],
    process: [
      "Site survey & technical assessment",
      "System design & proposal",
      "Procurement & installation",
      "Testing, commissioning, & user training"
    ],
  },
  {
    slug: "guard-tour-system",
    iconName: "Radio",
    title: "Guard Tour System",
    description: "Monitoring patroli real-time dengan GPS tracking dan reporting",
    longDescription: "Sistem monitoring patroli modern berbasis aplikasi mobile dengan GPS tracking, checkpoint scanning via QR/NFC, dan automated reporting. Command center dapat memonitor aktivitas patroli secara real-time dan menerima alert jika terjadi anomali.",
    benefits: [
      "GPS tracking real-time untuk setiap personel",
      "Checkpoint verification via QR code/NFC tag",
      "Automated incident reporting dengan photo evidence",
      "Dashboard analytics untuk management review",
      "Geofencing & alert notification",
      "Export report ke Excel/PDF untuk audit trail"
    ],
    process: [
      "System setup & checkpoint installation",
      "Mobile app training untuk security team",
      "Integration dengan existing CCTV/Access Control",
      "Go-live & ongoing technical support"
    ],
  },
];

const iconMap = {
  Shield,
  Search,
  GraduationCap,
  Dog,
  Cctv,
  Radio,
};

interface ServicePageProps {
  service: ServiceDetail;
}

export default function ServicePage({ service }: ServicePageProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Halo Trans Security, saya tertarik dengan layanan *${service.title}*%0A%0ANama: ${formData.name}%0APerusahaan: ${formData.company}%0ATelp: ${formData.phone}%0AEmail: ${formData.email}%0A%0APesan: ${formData.message}`;
    window.open(`https://wa.me/6281234567890?text=${whatsappMessage}`, "_blank");
  };

  const Icon = iconMap[service.iconName as keyof typeof iconMap];

  return (
    <>
      <SEO
        title={`${service.title} - Trans Security`}
        description={service.description}
      />
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-20">
          <section className="relative h-[400px] bg-primary flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
            <div className="container relative z-10 text-center">
              <nav className="text-primary-foreground/60 text-sm mb-4">
                <span>Beranda</span> <span className="mx-2">/</span>
                <span>Layanan</span> <span className="mx-2">/</span>
                <span className="text-accent">{service.title}</span>
              </nav>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4">
                {service.title}
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                {service.description}
              </p>
            </div>
          </section>

          <section className="py-24 bg-background">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                  Deskripsi Layanan
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-12 text-lg">
                  {service.longDescription}
                </p>

                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                  Keunggulan
                </h2>
                <div className="grid md:grid-cols-2 gap-4 mb-12">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <p className="text-foreground/80">{benefit}</p>
                    </div>
                  ))}
                </div>

                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                  Proses Layanan
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {service.process.map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground font-heading text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                        {index + 1}
                      </div>
                      <p className="text-foreground/80 text-sm leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-muted">
            <div className="container">
              <div className="max-w-2xl mx-auto">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
                  Minta Penawaran
                </h2>
                <p className="text-foreground/70 text-center mb-12">
                  Isi form di bawah untuk mendapatkan penawaran khusus layanan {service.title}
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
                      placeholder="Masukkan nama lengkap Anda"
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
                      placeholder="Nama perusahaan atau organisasi"
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
                        placeholder="email@perusahaan.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Pesan / Kebutuhan Khusus
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Jelaskan kebutuhan atau pertanyaan Anda..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                    Kirim via WhatsApp
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = servicesData.map((service) => ({
    params: { slug: service.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ServicePageProps> = async ({ params }) => {
  const service = servicesData.find((s) => s.slug === params?.slug);

  if (!service) {
    return { notFound: true };
  }

  return {
    props: { service },
  };
};