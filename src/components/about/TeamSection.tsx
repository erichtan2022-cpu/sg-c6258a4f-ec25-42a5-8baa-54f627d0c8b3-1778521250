"use client";

import { useState } from "react";
import Image from "next/image";

const team = [
  {
    name: "Budi Santoso",
    position: "Direktur Utama",
    photo: "/generated/team-1.png",
  },
  {
    name: "Siti Nurhaliza",
    position: "Direktur Operasional",
    photo: "/generated/team-2.png",
  },
  {
    name: "Ahmad Fauzi",
    position: "Direktur Keuangan",
    photo: "/generated/team-3.png",
  },
];

export function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
          Tim Manajemen
        </h2>
        <p className="text-foreground/70 text-center mb-16 max-w-2xl mx-auto">
          Dipimpin oleh profesional berpengalaman di bidang keamanan dan manajemen
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-primary/10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary/80" />
                
                <div
                  className={`absolute inset-0 bg-accent/90 flex flex-col items-center justify-center p-6 transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h3 className="font-heading text-2xl font-bold text-primary mb-2 text-center">
                    {member.name}
                  </h3>
                  <p className="text-primary/80 text-lg text-center">
                    {member.position}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-heading text-xl font-bold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-white/80 text-sm">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}