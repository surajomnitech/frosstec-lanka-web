'use client';

import { useEffect, useRef } from 'react';

interface CTAProps {}

export default function CTA({}: CTAProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.cta-animate');
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            elements.forEach((element, index) => {
              if (prefersReducedMotion) {
                (element as HTMLElement).style.opacity = '1';
                (element as HTMLElement).style.transform = 'translateY(0)';
              } else {
                setTimeout(() => {
                  element.classList.add('animate-fade-in-up');
                }, index * 150);
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
    <section ref={sectionRef} className="pt-28 lg:pt-32 pb-20 lg:pb-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container mx-auto px-4 relative">
        <style jsx>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .cta-animate {
            opacity: 0;
            transform: translateY(20px);
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }

          @media (prefers-reduced-motion: reduce) {
            .cta-animate {
              opacity: 1;
              transform: translateY(0);
            }
            .animate-fade-in-up {
              animation: none;
            }
          }
        `}</style>

        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="cta-animate text-[clamp(2rem,4.5vw,3rem)] font-extrabold text-primary-dark mb-6 leading-[1.12] max-w-[24ch] mx-auto">
            Ready to Transform Your Industrial Cooling Systems?
          </h2>

          {/* Subheading */}
          <p className="cta-animate text-[1.125rem] text-primary-dark/70 mb-12 leading-[1.75] max-w-[60ch] mx-auto">
            Join leading Sri Lankan industries who trust Frosstec Lanka for reliable, 
            energy-efficient refrigeration and HVAC solutions that deliver lasting performance.
          </p>

          {/* CTA Buttons */}
          <div className="cta-animate flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary CTA */}
            <a
              href="tel:+94112345678"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/20 focus-within:ring-4 focus-within:ring-primary/20"
            >
              <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us Now
            </a>

            {/* Secondary CTA */}
            <a
              href="mailto:info@frosstec.lk"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-white/90 backdrop-blur-sm text-primary-dark font-semibold rounded-xl border border-primary/30 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:bg-white hover:border-primary/50 focus:outline-none focus:ring-4 focus:ring-primary/20 focus-within:ring-4 focus-within:ring-primary/20"
            >
              <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Inquiry
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="cta-animate mt-16 pt-8 border-t border-neutral/30">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-primary-dark/60">
              {/* Response Time */}
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                24/7 Emergency Response
              </div>

              {/* Experience */}
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                20+ Years Experience
              </div>

              {/* Certified */}
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Certified Engineers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}