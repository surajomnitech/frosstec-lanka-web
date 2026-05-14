'use client';

import Image from 'next/image';
import { PhoneCall, ArrowRight } from 'lucide-react';

interface HeroProps { }

export default function Hero({ }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[620px] lg:min-h-[680px] overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#031225]/92 via-[#071B3A]/65 to-[#071B3A]/15"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/45 to-transparent"></div>

        {/* Subtle Orange Accent Glow */}
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl translate-x-12 translate-y-12"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-10 min-h-[620px] lg:min-h-[680px] flex items-start pt-24 lg:pt-28">
        <div className="max-w-[540px] ml-0 text-left pb-32 lg:pb-40">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full 
bg-[#04142D]/98 
border border-[#ff7a45]/40 
shadow-[0_8px_30px_rgba(0,0,0,0.45)] 
backdrop-blur-xl 
mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a45] shadow-[0_0_12px_rgba(255,122,69,0.9)]"></span>
            <span className="text-[#ff7a45] font-bold text-[0.7rem] uppercase tracking-[0.12em]">
              COMMERCIAL REFRIGERATION EXPERTS
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2.4rem,5.5vw,3.75rem)] font-extrabold text-white leading-[1.1] mb-7">
            Commercial<br />Refrigeration Solutions<br />
            You Can Rely On
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-[1.0625rem] text-white/78 leading-[1.75] max-w-[48ch] mb-10">
            From emergency repairs to custom installations and preventative maintenance — we keep your business cool, efficient, and always running smoothly.
          </p>

          {/* CTA Buttons - Refined Hierarchy */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* PRIMARY CTA - Dominant Call Hotline */}
            <a
              href="tel:0777399999"
              className="bg-accent text-white px-8 py-3.5 rounded-full text-[0.95rem] font-extrabold tracking-[0.01em] 
              shadow-[0_4px_20px_rgba(224,92,26,0.4),0_0_40px_rgba(224,92,26,0.15)] 
              hover:shadow-[0_6px_28px_rgba(224,92,26,0.5),0_0_50px_rgba(224,92,26,0.2)] 
              hover:bg-[#D35419] 
              active:scale-[0.98] 
              transition-all duration-300 ease-out
              focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2 focus:ring-offset-transparent
              flex items-center justify-center gap-2.5 group
              relative overflow-hidden"
            >
              <PhoneCall className="w-[18px] h-[18px] flex-shrink-0 relative z-10" strokeWidth={2.5} />
              <span className="whitespace-nowrap relative z-10">Call Hotline 077 739 9999</span>

              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            {/* SECONDARY CTA - Subdued Our Services */}
            <a
              href="#services"
              className="bg-transparent border border-white/40 text-white px-7 py-3.5 rounded-full text-[0.9rem] font-bold tracking-[0.01em] 
              hover:border-white/70 hover:bg-white/5
              active:scale-[0.98] 
              transition-all duration-300 ease-out
              focus:outline-none focus:ring-2 focus:ring-white/20
              flex items-center justify-center gap-2 group"
            >
              <span className="whitespace-nowrap">Our Services</span>
              <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}