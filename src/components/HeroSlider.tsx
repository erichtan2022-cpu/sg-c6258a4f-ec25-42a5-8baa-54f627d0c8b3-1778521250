"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    title: "Solusi Keamanan Terintegrasi untuk Bisnis Anda",
    subtitle: "PT Trans Kontinental Indonesia - Berizin Resmi Mabes Polri",
    cta: "Konsultasi Gratis",
    image: "/generated/hero-security-1.png",
  },
  {
    title: "Tenaga Security Profesional & Bersertifikat",
    subtitle: "Dilatih, Disiplin, Siap 24/7 Menjaga Aset Anda",
    cta: "Lihat Layanan",
    image: "/generated/hero-security-2.png",
  },
  {
    title: "Teknologi Keamanan Modern",
    subtitle: "CCTV, Access Control, Guard Tour System Terintegrasi",
    cta: "Hubungi Kami",
    image: "/generated/hero-security-3.png",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden bg-primary">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          {/* Background Image with Ken Burns Effect */}
          <div
            className={cn(
              "absolute inset-0 bg-cover bg-center",
              index === currentSlide && "animate-ken-burns"
            )}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent" />

          {/* Content */}
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                {slide.subtitle}
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-bold text-lg px-8 shadow-2xl hover:shadow-accent/30 transition-all"
              >
                {slide.cta}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-accent/90 text-white p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-accent/90 text-white p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentSlide
                ? "bg-accent w-8"
                : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}