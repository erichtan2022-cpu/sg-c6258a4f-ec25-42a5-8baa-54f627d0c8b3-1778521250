import { CheckCircle2, Shield, FileCheck, Award } from "lucide-react";

const documents = [
  {
    icon: Shield,
    title: "Izin Mabes Polri",
    description: "Terdaftar resmi dengan nomor izin operasional dari Markas Besar Kepolisian Republik Indonesia",
  },
  {
    icon: FileCheck,
    title: "SIA (Surat Izin Anggota)",
    description: "Memiliki SIA yang valid untuk seluruh personel keamanan sesuai peraturan perundangan",
  },
  {
    icon: Award,
    title: "ABUJAPI",
    description: "Anggota Asosiasi Badan Usaha Jasa Pengamanan Indonesia yang terpercaya",
  },
];

export function LegalitySection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
            Legalitas & Sertifikasi
          </h2>
          <p className="text-foreground/70 text-center mb-16 max-w-2xl mx-auto">
            Kami beroperasi dengan legalitas lengkap dan sesuai regulasi keamanan nasional
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {documents.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <div
                  key={index}
                  className="bg-muted p-8 rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex items-start gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <h3 className="font-heading text-xl font-bold text-primary">
                      {doc.title}
                    </h3>
                  </div>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    {doc.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-6 bg-accent/5 border-l-4 border-accent rounded">
            <p className="text-foreground/80 leading-relaxed">
              <strong className="text-primary">Komitmen Compliance:</strong> Semua personel kami telah lulus pelatihan Gada Pratama dan Gada Utama, serta menjalani background check menyeluruh. Kami secara rutin melakukan audit internal dan eksternal untuk memastikan standar operasional selalu sesuai dengan regulasi Mabes Polri dan best practices industri keamanan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}