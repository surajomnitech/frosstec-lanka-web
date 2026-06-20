'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';

type LinkItem = {
  label: string;
  href: string;
};

type SocialLink = {
  label: string;
  href: string;
  renderIcon: () => ReactNode;
};

const FOOTER_LINKS: LinkItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    renderIcon: () => (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    renderIcon: () => (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/94777399999',
    renderIcon: () => (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:info@frossteclanka.lk',
    renderIcon: () => (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        footer.querySelectorAll<HTMLElement>('.footer-animate').forEach((element, index) => {
          const timer = setTimeout(() => {
            element.classList.add('is-visible');
          }, index * 100);

          timers.push(timer);
        });

        observer.disconnect();
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <footer ref={footerRef} className="relative bg-footer-navy border-t border-white/10">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/[0.045] to-transparent pointer-events-none"
      />

      <style jsx>{`
        .footer-animate {
          opacity: 0;
          transform: translateY(16px);
          transition:
            opacity 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .footer-animate.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-animate {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1.2fr] gap-10 md:gap-12 lg:gap-12">
          <div className="footer-animate">
            <Link href="#home" className="flex items-center gap-2.5 mb-5 w-fit group">
              <Image
                src="/ft-logo-notext.webp"
                alt="Frosstec Lanka logo"
                width={40}
                height={40}
                loading="lazy"
              />

              <span className="text-base font-bold text-white uppercase tracking-wide group-hover:text-accent transition-colors duration-300">
                Frosstec Lanka
              </span>
            </Link>

            <p className="text-sm text-white/60 leading-[1.7] mb-6 max-w-[260px]">
              Refrigeration you can rely on, service you can trust.
            </p>

            <div className="flex gap-2.5">
              {SOCIAL_LINKS.map(({ label, href, renderIcon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-accent hover:border-accent transition-all duration-300 hover:scale-105"
                >
                  {renderIcon()}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-animate">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white hover:translate-x-0.5 transition-all duration-300 inline-block leading-[1.6]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-animate">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-5">
              Contact Us
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent mt-[3px] flex-shrink-0" />

                <div className="flex flex-col gap-1">
                  <a
                    href="tel:0777399999"
                    className="text-sm text-white hover:text-accent transition-colors duration-300 block font-medium leading-[1.5]"
                  >
                    077 739 9999
                  </a>
                  <span className="text-xs text-white/50 leading-[1.4]">24/7 Hotline</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-accent mt-[3px] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>

                <div className="flex flex-col gap-1">
                  <a
                    href="https://wa.me/94777399999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white hover:text-accent transition-colors duration-300 block font-medium leading-[1.5]"
                  >
                    077 739 9999
                  </a>
                  <span className="text-xs text-white/50 leading-[1.4]">WhatsApp</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent mt-[3px] flex-shrink-0" />

                <div>
                  <a
                    href="mailto:info@frossteclanka.lk"
                    className="text-sm text-white hover:text-accent transition-colors duration-300 block leading-[1.5]"
                  >
                    info@frossteclanka.lk
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-[3px] flex-shrink-0" />

                <div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=219+Station+Road+Udahamulla+Nugegoda+Sri+Lanka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white hover:text-accent transition-colors duration-300 block leading-[1.6]"
                  >
                    219, Station Road, Udahamulla,<br />
                    Nugegoda, Sri Lanka
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-animate mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50 text-center md:text-left">
            © {new Date().getFullYear()} Frosstec Lanka. All Rights Reserved.
          </p>

          <nav aria-label="Legal links" className="flex gap-6">
            <Link
              href="#privacy"
              className="text-xs text-white/50 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="#terms"
              className="text-xs text-white/50 hover:text-white transition-colors duration-300"
            >
              Terms & Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}