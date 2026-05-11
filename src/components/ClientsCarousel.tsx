"use client";

import { useEffect, useRef } from "react";

const clients = [
  "PT Bank Mandiri",
  "PT Astra International",
  "Mall Alam Sutera",
  "Summarecon Serpong",
  "PT Pertamina",
  "BSD City",
  "AEON Mall",
  "PT Unilever Indonesia",
  "Living World",
  "Lippo Karawaci",
];

export function ClientsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const intervalId = setInterval(scroll, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Dipercaya Oleh Perusahaan Terkemuka
        </h2>
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden whitespace-nowrap"
            style={{ scrollBehavior: "auto" }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center min-w-[280px] h-24 px-8 bg-white rounded-lg shadow-sm border border-border hover:shadow-md hover:border-accent transition-all duration-300"
              >
                <p className="font-heading text-xl font-bold text-primary">
                  {client}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}