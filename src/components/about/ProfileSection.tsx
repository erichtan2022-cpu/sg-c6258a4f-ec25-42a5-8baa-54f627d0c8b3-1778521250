import { Target, Eye } from "lucide-react";

export function ProfileSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            Profil Perusahaan
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/80 leading-relaxed mb-6">
              PT Trans Kontinental Indonesia (Trans Security) adalah perusahaan jasa pengamanan yang berdiri sejak 2013 dengan izin resmi dari Mabes Polri. Kami berkomitmen untuk memberikan solusi keamanan terintegrasi yang profesional, terpercaya, dan sesuai dengan standar keamanan nasional.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-8">
              Dengan pengalaman lebih dari 10 tahun melayani berbagai sektor industri — mulai dari korporat, perbankan, retail, hingga residensial — kami telah membangun reputasi sebagai partner keamanan yang handal. Didukung oleh lebih dari 1000 personel terlatih dan bersertifikat, serta command center yang beroperasi 24/7, kami siap menjaga keamanan aset dan kenyamanan operasional bisnis Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-muted p-8 rounded-lg border border-border">
              <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">Visi</h3>
              <p className="text-foreground/70 leading-relaxed">
                Menjadi perusahaan jasa pengamanan terdepan di Indonesia yang dikenal dengan profesionalisme, integritas, dan solusi keamanan inovatif yang mengutamakan kepuasan klien.
              </p>
            </div>

            <div className="bg-muted p-8 rounded-lg border border-border">
              <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">Misi</h3>
              <ul className="text-foreground/70 leading-relaxed space-y-2">
                <li>• Memberikan layanan keamanan berkualitas tinggi dengan SDM profesional</li>
                <li>• Mengintegrasikan teknologi modern dalam sistem keamanan</li>
                <li>• Membangun kepercayaan jangka panjang dengan klien</li>
                <li>• Mengutamakan keselamatan dan keamanan di setiap aspek layanan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}