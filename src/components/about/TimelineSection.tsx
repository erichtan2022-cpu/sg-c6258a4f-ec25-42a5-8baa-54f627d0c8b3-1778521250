"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, Users, Radio, TrendingUp } from "lucide-react";

const milestones = [
  {
    year: "2013",
    title: "Berdiri",
    description: "PT Trans Kontinental Indonesia resmi berdiri dengan izin Mabes Polri",
    icon: Building2,
  },
  {
    year: "2015",
    title: "Ekspansi Jabodetabek",
    description: "Membuka layanan di seluruh wilayah Jakarta, Bogor, Depok, Tangerang, dan Bekasi",
    icon: TrendingUp,
  },
  {
    year: "2018",
    title: "500+ Personel",
    description: "Mencapai milestone 500 personel terlatih dan 50+ klien aktif",
    icon: Users,
  },
  {
    year: "2023",
    title: "Command Center",
    description: "Launching command center 24/7 dengan teknologi monitoring terintegrasi dan 1000+ personel",
    icon: Radio,
  },
];

export function TimelineSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = sectionRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-muted">
      <div className="container">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
          Perjalanan Kami
        </h2>
        <p className="text-foreground/70 text-center mb-16 max-w-2xl mx-auto">
          Dari awal berdiri hingga menjadi salah satu penyedia jasa keamanan terpercaya di Indonesia
        </p>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent/20" />

            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isVisible = visibleItems.includes(index);
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  data-index={index}
                  className={`relative flex items-center mb-16 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-full md:w-5/12 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0"
                    } transition-all duration-700`}
                    style={{
                      transitionDelay: `${index * 200}ms`,
                      transform: isVisible
                        ? "translateX(0)"
                        : isLeft
                        ? "translateX(-50px)"
                        : "translateX(50px)",
                    }}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md border border-border hover:shadow-lg hover:border-accent transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center flex-shrink-0">
                          <Icon className="w-7 h-7 text-accent" />
                        </div>
                        <div>
                          <span className="font-heading text-2xl font-bold text-accent">
                            {milestone.year}
                          </span>
                          <h3 className="font-heading text-xl font-bold text-primary mt-1 mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-foreground/70 leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-accent border-4 border-muted" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}