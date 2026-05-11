"use client";

import { Shield, Award, Clock, Headphones } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Shield,
    title: "Berizin Resmi",
    description: "Terdaftar dan berizin resmi dari Mabes Polri sesuai regulasi keamanan nasional",
  },
  {
    icon: Award,
    title: "SDM Bersertifikat",
    description: "Personel terlatih dengan sertifikasi Gada Pratama dan Gada Utama",
  },
  {
    icon: Clock,
    title: "Pengawasan Ketat",
    description: "Command center 24/7 dengan sistem monitoring dan koordinasi real-time",
  },
  {
    icon: Headphones,
    title: "Respons Cepat",
    description: "Tim siaga darurat siap merespons dalam hitungan menit",
  },
];

export function WhySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-primary"
      style={{
        backgroundImage: "url('/generated/hero-security-2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-primary/95 backdrop-blur-sm" />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Mengapa Trans Security?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Komitmen kami untuk memberikan layanan keamanan terbaik dengan standar profesional tertinggi
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`text-center transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 backdrop-blur-md border-2 border-accent">
                  <Icon className="w-10 h-10 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}