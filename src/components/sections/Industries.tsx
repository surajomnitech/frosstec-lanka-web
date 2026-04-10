'use client';

import { useEffect, useRef } from 'react';

const INDUSTRIES = [
  {
    title: "Industrial Refrigeration",
    description: "Large-scale cooling systems for manufacturing plants and industrial facilities requiring precise temperature control.",
    tag: "Critical Cooling",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  },
  {
    title: "HVAC Systems",
    description: "Complete heating, ventilation, and air conditioning solutions for commercial and industrial buildings.",
    tag: "Climate Control",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Food Processing Facilities",
    description: "Specialized refrigeration and cooling systems for food processing, storage, and preservation operations.",
    tag: "Food Safety",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    title: "Pharmaceutical Cold Storage",
    description: "Precision temperature-controlled environments for pharmaceutical manufacturing and storage facilities.",
    tag: "High Precision",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: "Commercial Buildings",
    description: "Energy-efficient HVAC and cooling solutions for office complexes, retail spaces, and commercial properties.",
    tag: "Energy Efficient",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Hospitality & Retail Cooling",
    description: "Specialized cooling systems for hotels, restaurants, supermarkets, and retail establishments.",
    tag: "Customer Comfort",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  }
];

interface IndustriesProps {}

export default function Industries({}: IndustriesProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.industry-card');
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            
            cards.forEach((card, index) => {
              if (prefersReducedMotion) {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
              } else {
                setTimeout(() => {
                  card.classList.add('animate-fade-in-up');
                }, index < 2 ? index * 80 : index * 120);
              }
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background" role="region" aria-labelledby="industries-heading">
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .industry-card {
          opacity: 0;
          transform: translateY(10px);
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .industry-card {
            opacity: 1;
            transform: translateY(0);
          }
          .animate-fade-in-up {
            animation: none;
          }
        }
      `}</style>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="industries-heading" className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-primary-dark/70 max-w-3xl mx-auto">
            Specialized refrigeration and HVAC solutions engineered for unique demands of Sri Lanka's industrial and commercial sectors
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((industry, index) => (
            <div
              key={industry.title}
              className="industry-card group bg-white/95 backdrop-blur-sm border border-neutral/50 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-xl"
              tabIndex={0}
              role="article"
              aria-labelledby={`industry-${index}-title`}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-focus-within:scale-105">
                <div className="text-white">
                  {industry.icon}
                </div>
              </div>

              {/* Content */}
              <h3 id={`industry-${index}-title`} className="text-xl font-semibold text-primary-dark mb-3 group-hover:text-primary transition-colors duration-300">
                {industry.title}
              </h3>

              <p className="text-primary-dark/70 leading-relaxed mb-4">
                {industry.description}
              </p>

              {/* Tag */}
              <div className="inline-flex items-center px-3 py-1 bg-primary/5 text-primary font-medium text-sm rounded-full border border-primary/20 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors duration-300 group-focus-within:bg-primary/20">
                {industry.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}