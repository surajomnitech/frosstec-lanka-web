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
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-14 pb-24 sm:py-[4.5rem] lg:py-24">
        <div className="grid min-w-0 lg:grid-cols-[0.86fr_1.14fr] gap-x-12 lg:gap-x-16 xl:gap-x-20 gap-y-7 sm:gap-y-10 lg:gap-y-0 items-center">
          {/* Text Content */}
          <div className="max-w-[560px] min-w-0 order-1 lg:col-start-1 lg:row-start-1">
            <p className="text-[0.76rem] sm:text-[0.84rem] font-extrabold uppercase tracking-[0.24em] text-accent mb-5">
              Frosstec Lanka
            </p>

            <h1 className="text-[clamp(1.75rem,7vw,3.55rem)] font-extrabold text-primary-dark leading-[1.06] tracking-tight mb-6 break-words hyphens-auto">
              Commercial Refrigeration Services for Sri Lankan Businesses
            </h1>

            <p className="text-[1.02rem] sm:text-[1.18rem] lg:text-[1.28rem] font-bold text-primary leading-[1.4] mb-5">
              Silent Coils, Perfect Degrees, Peace of Mind.
            </p>

            <p className="text-[0.98rem] lg:text-[1.08rem] text-gray-600 leading-[1.75] max-w-[52ch] mb-8">
              For companies that rely on constant cooling, responsive service,
              high-quality maintenance, and useful refrigeration support.
            </p>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-sm sm:text-[0.95rem] font-bold text-white shadow-[0_10px_26px_rgba(191,66,21,0.25)] transition-all duration-300 hover:bg-[#A93610] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(191,66,21,0.32)] focus:outline-none focus:ring-4 focus:ring-accent/20"
            >
              Our Services
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </a>
          </div>

          {/* Image Slider */}
          <div className="relative order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 w-full max-w-full min-w-0">
            <div className="relative mx-auto w-full max-w-[480px] lg:max-w-none rounded-[1.6rem] sm:rounded-[2.25rem] bg-gradient-to-br from-[#071B3A] via-primary-dark to-[#0E1630] p-2.5 sm:p-5 lg:p-6 xl:p-7 shadow-[0_18px_56px_rgba(14,22,48,0.24)] lg:shadow-[0_26px_80px_rgba(14,22,48,0.32)] overflow-hidden">
              <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -left-24 -bottom-24 w-80 h-80 rounded-full bg-black/20 blur-3xl" />

              <div className="relative">
                <div className="relative h-[220px] sm:h-[360px] lg:h-auto lg:aspect-[16/11] lg:min-h-[520px] xl:min-h-[560px] overflow-hidden rounded-[1.15rem] sm:rounded-[1.5rem] border border-white/20 bg-[#071B3A] shadow-[0_16px_42px_rgba(0,0,0,0.24)]">
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
                          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 92vw, 58vw"
                          className="object-cover object-center"
                          {...(index === 0
                            ? { priority: true }
                            : { loading: 'lazy' as const })}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/28 via-transparent to-transparent" />
                      </div>
                    );
                  })}
                </div>

                <div className="mt-3 lg:mt-5 flex items-center justify-center gap-2">
                  {HERO_SLIDES.map((slide, index) => (
                    <button
                      key={slide.image}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark ${activeSlide === index
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

          {/* Service Shortcuts */}
          <div className="order-3 lg:col-start-1 lg:row-start-2 mt-5 lg:mt-8 min-w-0">
            <p className="mb-3 text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-primary/70">
              Explore key services
            </p>

            <div className="grid grid-cols-2 gap-3 max-w-[590px]">
              {SERVICE_SHORTCUTS.map((item) => (
                <a
                  key={item.label}
                  href="#services"
                  className="group min-w-0 flex flex-row items-center gap-3 rounded-xl border border-primary/12 bg-white px-3 py-3 sm:px-4 sm:py-3.5 text-left shadow-[0_8px_22px_rgba(39,58,115,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/45 hover:shadow-[0_14px_34px_rgba(39,58,115,0.13)] focus:outline-none focus:ring-4 focus:ring-primary/15"
                >
                  <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-accent group-hover:border-accent">
                    <item.icon
                      className="w-4 h-4 text-accent transition-colors duration-300 group-hover:text-white"
                      strokeWidth={2.4}
                    />
                  </div>

                  <span className="min-w-0 text-[0.75rem] sm:text-[0.9rem] font-extrabold text-primary-dark leading-[1.25] group-hover:text-primary transition-colors duration-300 break-words">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}