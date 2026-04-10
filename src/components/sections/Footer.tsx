'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ─── Types ────────────────────────────────────────────────────────────────────

type LinkItem = {
  label: string;
  href: string;
  type?: 'action' | 'info';
};

type SocialLink = {
  label: string;
  href: string;
  renderIcon: () => React.ReactNode;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const FOOTER_LINKS: {
  company: LinkItem[];
  services: LinkItem[];
  contact: LinkItem[];
} = {
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Projects', href: '#projects' },
    { label: 'Industries Served', href: '#industries' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
  ],
  services: [
    { label: 'Industrial Refrigeration', href: '#refrigeration' },
    { label: 'HVAC Systems', href: '#hvac' },
    { label: 'Cold Storage Solutions', href: '#cold-storage' },
    { label: 'Maintenance & Support', href: '#maintenance' },
  ],
  contact: [
    { label: '+94 11 234 5678', href: 'tel:+94112345678', type: 'action' },
    { label: 'info@frosstec.lk', href: 'mailto:info@frosstec.lk', type: 'action' },
    { label: 'Colombo, Sri Lanka', href: '#', type: 'info' },
    { label: '24/7 Emergency Support', href: 'tel:+94112345678', type: 'action' },
  ],
};

// Fix: renderIcon as functions (not inline JSX) — external hrefs use <a>, not Link
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
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function FooterLinkList({ title, links }: { title: string; links: LinkItem[] }) {
  return (
    <div className="footer-animate">
      <h3 className="text-xs font-semibold text-primary-dark uppercase tracking-widest mb-4">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={`text-sm transition-all duration-200 inline-block hover:translate-x-1 focus-visible:underline focus-visible:outline-none ${link.type === 'action'
                  ? 'text-primary hover:text-primary/75'
                  : 'text-primary-dark/55 hover:text-primary'
                }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

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
        footer.querySelectorAll<HTMLElement>('.footer-animate').forEach((el, i) => {
          const t = setTimeout(() => el.classList.add('is-visible'), i * 100);
          timers.push(t);
        });
        observer.disconnect();
      },
      { threshold: 0.1 },
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <footer ref={footerRef} className="py-20 bg-background border-t border-neutral/40">
      <style jsx>{`
        .footer-animate {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94),
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

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand */}
          <div className="footer-animate space-y-5">
            {/* Fix: group on the shared parent so hover works across logo + text */}
            <div className="flex items-center gap-3 group">
              <Image
                src="/ft-logo-notext.webp"
                alt="Frosstec Lanka logo"
                width={48}
                height={48}
                loading="lazy"
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-lg font-bold text-primary-dark transition-colors duration-300 group-hover:text-primary">
                Frosstec Lanka
              </span>
            </div>

            <p className="text-sm text-primary-dark/55 leading-relaxed max-w-[15rem]">
              Leading provider of industrial refrigeration and HVAC solutions in Sri Lanka,
              delivering engineering excellence since 2004.
            </p>

            {/* Fix: external links → <a>, not <Link> */}
            <div className="flex gap-2.5">
              {SOCIAL_LINKS.map(({ label, href, renderIcon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-white border border-neutral/40 rounded-lg flex items-center justify-center text-primary-dark/50 hover:text-primary hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                >
                  {renderIcon()}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <FooterLinkList title="Company" links={FOOTER_LINKS.company} />
          <FooterLinkList title="Services" links={FOOTER_LINKS.services} />
          <FooterLinkList title="Contact" links={FOOTER_LINKS.contact} />
        </div>

        {/* Bottom bar */}
        <div className="footer-animate mt-16 pt-8 border-t border-neutral/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-dark/40">
            © {new Date().getFullYear()} Frosstec Lanka. All rights reserved.
          </p>
          <nav aria-label="Legal links" className="flex gap-6">
            <Link
              href="#privacy"
              className="text-sm text-primary-dark/40 hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="#terms"
              className="text-sm text-primary-dark/40 hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:underline"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}