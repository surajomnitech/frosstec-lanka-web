'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NAVIGATION_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Why Us', href: '#why-choose' },
  { name: 'Industries', href: '#industries' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        mobileMenuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className="relative z-[200] bg-[#071B3A] border-b border-white/10 shadow-[0_4px_18px_rgba(0,0,0,0.12)]"
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="h-[72px] flex items-center justify-between">
            {/* Brand */}
            <Link
              href="#home"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-white/20 rounded-md"
              onClick={closeMobileMenu}
            >
              <Image
                src="/ft-logo-notext.webp"
                alt="Frosstec Lanka logo"
                width={42}
                height={42}
                priority
                className="w-10 h-10 object-contain"
              />

              <span className="text-white text-[0.95rem] sm:text-[1rem] font-extrabold uppercase tracking-wide group-hover:text-accent transition-colors duration-300">
                Frosstec Lanka
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center gap-8"
              role="navigation"
              aria-label="Main navigation"
            >
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-white/80 hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 rounded-md px-1 py-2"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              ref={mobileMenuButtonRef}
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-white hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              type="button"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed left-0 right-0 top-[72px] z-[199] bg-[#071B3A] border-b border-white/10 shadow-xl transition-all duration-300 ease-out ${isMobileMenuOpen
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-3 pointer-events-none'
          }`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="px-6 py-5 space-y-2">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block rounded-lg px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
              onClick={closeMobileMenu}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}