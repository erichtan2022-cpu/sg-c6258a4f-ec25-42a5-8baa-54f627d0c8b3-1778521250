"use client";

import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{
        backgroundImage: "url('/generated/hero-security-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/95" />
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Amankan Bisnis Anda Sekarang
          </h2>
          <p className="text-primary-foreground/90 text-lg md:text-xl mb-10 leading-relaxed">
            Jangan tunggu hingga terjadi insiden. Lindungi aset, karyawan, dan reputasi perusahaan Anda dengan solusi keamanan terintegrasi dari profesional bersertifikat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Hubungi Kami
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 hover:border-white font-semibold px-8 py-6 text-lg rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Minta Penawaran
              </Button>
            </Link>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-primary-foreground/70 text-sm">
              Command Center 24/7 • Respons Cepat • Konsultasi Gratis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}