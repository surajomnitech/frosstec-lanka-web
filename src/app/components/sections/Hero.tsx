'use client';

import Image from 'next/image';
import { PhoneCall } from 'lucide-react';

interface HeroProps { }

export default function Hero({ }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[700px] lg:min-h-[780px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-refrigeration-system.png"
          alt="Commercial refrigeration systems"
          fill
          className="object-cover object-[72%_center]"
          priority
          sizes="100vw"
        />

        {/* Refined Dark Navy Gradient Overlay - Better Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031225]/95 via-[#071B3A]/85 to-[#071B3A]/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>

        {/* Subtle Orange Accent Glow */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/15 rounded-full filter blur-3xl translate-x-16 translate-y-16"></div>
      </div>

      {/* Hero Content - Centered Brand */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-10 min-h-[700px] lg:min-h-[780px] flex flex-col items-center justify-center text-center py-24">
        
        {/* Oversized Frosstec Lanka Logo */}
        <div className="mb-8 lg:mb-10">
          <div className="flex flex-col items-center">
            {/* Logo Icon */}
            <div className="mb-6 lg:mb-8">
              <Image
                src="/ft-logo-notext.webp"
                alt="Frosstec Lanka"
                width={180}
                height={180}
                priority
                className="w-[140px] h-[140px] lg:w-[180px] lg:h-[180px] drop-shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              />
            </div>
            
            {/* Brand Name - Oversized */}
            <div className="space-y-2">
              <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black text-[#2B7FFF] leading-[0.95] tracking-tight">
                FROSSTEC
              </h1>
              <h2 className="text-[clamp(2rem,6vw,4rem)] font-black text-accent leading-[0.95] tracking-wide">
                LANKA
              </h2>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="mb-8 lg:mb-10">
          <p className="text-[0.875rem] lg:text-[0.95rem] text-white/90 font-semibold uppercase tracking-[0.15em] mb-3">
            COMMERCIAL REFRIGERATION SPECIALISTS
          </p>
        </div>

        {/* Headline */}
        <h3 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-white leading-[1.2] mb-5 max-w-[800px]">
          Commercial Refrigeration Solutions You Can Rely On
        </h3>

        {/* Supporting Paragraph */}
        <p className="text-[1rem] lg:text-[1.0625rem] text-white/75 leading-[1.7] max-w-[600px] mb-10 lg:mb-12">
          From emergency repairs to custom installations and preventative maintenance, we keep your business cool, efficient, and always running smoothly.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          {/* PRIMARY CTA - Call Hotline */}
          <a
            href="tel:0777399999"
            className="bg-accent text-white px-8 py-4 rounded-full text-[0.95rem] font-bold tracking-[0.01em] 
            shadow-[0_4px_24px_rgba(224,92,26,0.45),0_0_40px_rgba(224,92,26,0.2)] 
            hover:shadow-[0_6px_32px_rgba(224,92,26,0.55),0_0_50px_rgba(224,92,26,0.25)] 
            hover:bg-[#D35419] 
            active:scale-[0.98] 
            transition-all duration-300 ease-out
            focus:outline-none focus:ring-2 focus:ring-accent/30
            flex items-center justify-center gap-2.5 group
            relative overflow-hidden min-w-[240px]"
          >
            <PhoneCall className="w-5 h-5 flex-shrink-0 relative z-10" strokeWidth={2.5} />
            <span className="whitespace-nowrap relative z-10">Call Hotline 077 739 9999</span>

            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          {/* SECONDARY CTA - Our Services */}
          <a
            href="#services"
            className="bg-transparent border-2 border-white/50 text-white px-8 py-4 rounded-full text-[0.95rem] font-bold tracking-[0.01em] 
            hover:border-white/80 hover:bg-white/10
            active:scale-[0.98] 
            transition-all duration-300 ease-out
            focus:outline-none focus:ring-2 focus:ring-white/30
            flex items-center justify-center group min-w-[200px]"
          >
            <span className="whitespace-nowrap">Our Services</span>
          </a>
        </div>

      </div>
    </section>
  );
}