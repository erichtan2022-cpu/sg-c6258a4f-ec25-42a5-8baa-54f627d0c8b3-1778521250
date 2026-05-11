"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/about" },
    { label: "Layanan", href: "/services" },
    { label: "Klien", href: "/clients" },
    { label: "Karir", href: "/career" },
    { label: "Kontak", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-primary/90"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Shield className="w-10 h-10 text-accent transition-transform group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="text-accent font-bold text-xl tracking-tight">
                TRANS SECURITY
              </span>
              <span className="text-white/80 text-xs tracking-wider">
                PT Trans Kontinental Indonesia
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/90 hover:text-accent transition-colors font-medium text-sm tracking-wide"
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold px-6 shadow-lg hover:shadow-accent/20">
              Minta Penawaran
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden transition-all duration-300 overflow-hidden",
            isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/90 hover:text-accent transition-colors font-medium py-2 border-b border-white/10"
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold mt-2 w-full">
              Minta Penawaran
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}