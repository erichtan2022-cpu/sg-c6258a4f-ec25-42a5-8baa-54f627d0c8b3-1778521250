import { Shield, FileSearch, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Penyedia Tenaga Keamanan",
    description:
      "Personel security profesional bersertifikat Gada Pratama & Utama, siap menjaga aset perusahaan Anda 24/7 dengan disiplin tinggi.",
  },
  {
    icon: <FileSearch className="w-12 h-12" />,
    title: "Konsultan Keamanan",
    description:
      "Layanan risk assessment, audit keamanan, dan penyusunan SOP keamanan untuk mengidentifikasi dan memitigasi risiko bisnis Anda.",
  },
  {
    icon: <GraduationCap className="w-12 h-12" />,
    title: "Sistem Keamanan Elektronik",
    description:
      "Instalasi dan maintenance CCTV, Access Control, Alarm System, dan Fire Alarm terintegrasi dengan Command Center kami.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Layanan Unggulan Kami
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Solusi keamanan terintegrasi yang dirancang untuk melindungi bisnis
            Anda dengan standar profesional tertinggi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-muted rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-2 hover:border-accent cursor-pointer"
            >
              <div className="text-primary group-hover:text-accent transition-colors mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-accent hover:text-primary hover:border-accent font-semibold group-hover:bg-accent group-hover:text-primary group-hover:border-accent"
                >
                  Pelajari Lebih Lanjut
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}