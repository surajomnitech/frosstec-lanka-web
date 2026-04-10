'use client';

import { useEffect, useRef } from 'react';

const REASONS = [
  {
    title: "20+ Years of Industry Experience",
    description: "Decades of hands-on expertise in refrigeration and HVAC systems across Sri Lanka's most demanding industrial environments.",
    tag: "Proven Track Record",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    title: "Certified Engineering Team",
    description: "Our engineers hold internationally recognised certifications in refrigeration, HVAC, and energy management systems.",
    tag: "Qualified Experts",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    title: "End-to-End Project Delivery",
    description: "From initial consultation and design through installation, commissioning, and long-term maintenance — we manage every phase in-house.",
    tag: "Full Lifecycle",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    title: "24/7 Emergency Support",
    description: "Round-the-clock response teams ready to minimise downtime for critical cooling and HVAC systems when it matters most.",
    tag: "Always Available",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Energy-Optimised Solutions",
    description: "We design systems with energy efficiency at the core, reducing operational costs and environmental impact without compromising performance.",
    tag: "Cost Savings",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Local Expertise, Global Standards",
    description: "Deep knowledge of Sri Lanka's climate and regulatory landscape, combined with internationally benchmarked engineering practices.",
    tag: "Best of Both",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

interface WhyChooseUsProps {}

export default function WhyChooseUs({}: WhyChooseUsProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.reason-card');
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
    <section ref={sectionRef} className="py-20 bg-background" role="region" aria-labelledby="why-choose-us-heading">
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

        .reason-card {
          opacity: 0;
          transform: translateY(10px);
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .reason-card {
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
          <h2 id="why-choose-us-heading" className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Why Choose Frosstec Lanka
          </h2>
          <p className="text-lg text-primary-dark/70 max-w-3xl mx-auto">
            Trusted by leading industries across Sri Lanka for our engineering excellence, reliability, and commitment to long-term performance
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((reason, index) => (
            <div
              key={reason.title}
              className="reason-card group bg-white/95 backdrop-blur-sm border border-neutral/50 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary/20"
              tabIndex={0}
              role="article"
              aria-labelledby={`reason-${index}-title`}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-focus-within:scale-105">
                <div className="text-white">
                  {reason.icon}
                </div>
              </div>

              {/* Content */}
              <h3 id={`reason-${index}-title`} className="text-xl font-semibold text-primary-dark mb-3 group-hover:text-primary transition-colors duration-300">
                {reason.title}
              </h3>

              <p className="text-primary-dark/70 leading-relaxed mb-4">
                {reason.description}
              </p>

              {/* Tag */}
              <div className="inline-flex items-center px-3 py-1 bg-primary/5 text-primary font-medium text-sm rounded-full border border-primary/20 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors duration-300 group-focus-within:bg-primary/20">
                {reason.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
