import Link from "next/link";
import { Shield, Phone, Mail, MapPin, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
                <Shield className="w-7 h-7 text-accent" />
              </div>
              <span className="font-heading text-2xl font-bold text-accent">
                Trans Security
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              PT Trans Kontinental Indonesia - Penyedia solusi keamanan terintegrasi yang terpercaya dan berizin resmi Mabes Polri sejak 2013.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold mb-6 text-accent">
              Link Cepat
            </h3>
            <ul className="space-y-3">
              {["Beranda", "Tentang Kami", "Layanan", "Klien", "Karir", "Kontak"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold mb-6 text-accent">
              Layanan Kami
            </h3>
            <ul className="space-y-3">
              {[
                "Security Services",
                "Security Consultant",
                "Security Training",
                "K9 Unit",
                "Electronic Security",
                "Guard Tour System",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold mb-6 text-accent">
              Hubungi Kami
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Jl. Raya Serpong KM 7<br />
                  Tangerang Selatan, Banten
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  021-XXXXXXX<br />
                  (Command Center 24/7)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  info@trans-security.co.id
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-6">
          <p className="text-center text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} PT Trans Kontinental Indonesia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}