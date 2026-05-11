"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Shield, Clock, Award } from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  {
    icon: <Users className="w-10 h-10" />,
    value: 100,
    suffix: "+",
    label: "Klien Korporat",
  },
  {
    icon: <Shield className="w-10 h-10" />,
    value: 1000,
    suffix: "+",
    label: "Personel Terlatih",
  },
  {
    icon: <Award className="w-10 h-10" />,
    value: 10,
    suffix: "+",
    label: "Tahun Pengalaman",
  },
  {
    icon: <Clock className="w-10 h-10" />,
    value: 24,
    suffix: "/7",
    label: "Operational Center",
  },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const increment = end / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span className="text-5xl font-bold text-accent">
      {count}
      {suffix}
    </span>
  );
}

export function StatisticsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center text-primary">
                {stat.icon}
              </div>
              {isVisible ? (
                <Counter end={stat.value} suffix={stat.suffix} />
              ) : (
                <span className="text-5xl font-bold text-accent">0</span>
              )}
              <p className="text-foreground/70 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}