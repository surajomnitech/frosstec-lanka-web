'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  ShieldCheck,
  Snowflake,
  Warehouse,
  Wrench,
} from 'lucide-react';

const HERO_SLIDES = [
  {
    image: '/images/hero/hero-technician.jpg',
    alt: 'Technician servicing commercial refrigeration equipment',
  },
  {
    image: '/images/hero/hero-cold-room.jpg',
    alt: 'Commercial cold room and freezer room interior',
  },
  {
    image: '/images/hero/hero-display-fridge.jpg',
    alt: 'Supermarket commercial display refrigeration units',
  },
  {
    image: '/images/hero/hero-chiller.jpg',
    alt: 'Commercial rooftop refrigeration and chiller system',
  },
];

const SERVICE_SHORTCUTS = [
  {
    icon: Wrench,
    label: 'Emergency Repairs',
  },
  {
    icon: ShieldCheck,
    label: 'Preventative Maintenance',
  },
  {
    icon: Snowflake,
    label: 'Cold Room Solutions',
  },
  {
    icon: Warehouse,
    label: 'Equipment Sales',
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-white to-[#F8F9FA]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-18 lg:py-24">
        <div className="grid lg:grid-cols-[0.86fr_1.14fr] gap-12 lg:gap-16 xl:gap-20 items-center">
          <div className="max-w-[560px]">
            <p className="text-[0.76rem] sm:text-[0.84rem] font-extrabold uppercase tracking-[0.24em] text-accent mb-5">
              Frosstec Lanka
            </p>

            <h1 className="text-[clamp(2.05rem,4vw,3.55rem)] font-extrabold text-primary-dark leading-[1.06] tracking-tight mb-6">
              Commercial Refrigeration Support for Sri Lankan Businesses
            </h1>

            <p className="text-[1.08rem] sm:text-[1.18rem] lg:text-[1.28rem] font-bold text-primary leading-[1.4] mb-5">
              Silent Coils, Perfect Degrees, Peace of Mind.
            </p>

            <p className="text-[1rem] lg:text-[1.08rem] text-gray-600 leading-[1.75] max-w-[52ch] mb-8">
              Responsive service, quality repairs, and practical refrigeration
              support for businesses that depend on continuous cooling.
            </p>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-sm sm:text-[0.95rem] font-bold text-white shadow-[0_10px_26px_rgba(191,66,21,0.25)] transition-all duration-300 hover:bg-[#A93610] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(191,66,21,0.32)] focus:outline-none focus:ring-4 focus:ring-accent/20"
            >
              Our Services
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </a>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 max-w-[590px]">
              {SERVICE_SHORTCUTS.map((item) => (
                <a
                  key={item.label}
                  href="#services"
                  className="group flex items-center gap-3.5 rounded-xl border border-primary/12 bg-white px-4 py-3.5 shadow-[0_10px_28px_rgba(39,58,115,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/45 hover:shadow-[0_14px_34px_rgba(39,58,115,0.13)]"
                >
                  <div className="w-11 h-11 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-accent group-hover:border-accent">
                    <item.icon
                      className="w-5 h-5 text-accent transition-colors duration-300 group-hover:text-white"
                      strokeWidth={2.4}
                    />
                  </div>

                  <span className="text-[0.84rem] sm:text-[0.9rem] font-extrabold text-primary-dark leading-snug group-hover:text-primary transition-colors duration-300">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-[2.25rem] bg-gradient-to-br from-[#071B3A] via-primary-dark to-[#0E1630] p-4 sm:p-5 lg:p-6 xl:p-7 shadow-[0_26px_80px_rgba(14,22,48,0.32)] overflow-hidden">
              <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -left-24 -bottom-24 w-80 h-80 rounded-full bg-black/20 blur-3xl" />

              <div className="relative">
                <div className="relative aspect-[16/11] min-h-[330px] sm:min-h-[430px] lg:min-h-[520px] xl:min-h-[560px] overflow-hidden rounded-[1.5rem] border border-white/20 bg-[#071B3A] shadow-[0_20px_54px_rgba(0,0,0,0.26)]">
                  {HERO_SLIDES.map((slide, index) => {
                    const isActive = activeSlide === index;

                    return (
                      <div
                        key={slide.image}
                        className={`absolute inset-0 transition-all duration-[850ms] ease-out ${isActive
                          ? 'opacity-100 translate-x-0 scale-100'
                          : 'opacity-0 translate-x-5 scale-[1.02]'
                          }`}
                      >
                        <Image
                          src={slide.image}
                          alt={slide.alt}
                          fill
                          priority={index === 0}
                          sizes="(max-width: 1024px) 100vw, 58vw"
                          className="object-cover object-center"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/28 via-transparent to-transparent" />
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 flex items-center justify-center gap-2">
                  {HERO_SLIDES.map((slide, index) => (
                    <button
                      key={slide.image}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${activeSlide === index
                        ? 'w-8 bg-white'
                        : 'w-2 bg-white/45 hover:bg-white/70'
                        }`}
                      aria-label={`Show hero image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}