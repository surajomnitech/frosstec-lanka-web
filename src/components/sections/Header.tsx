'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NAVIGATION_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const isMobileMenuOpenRef = useRef(isMobileMenuOpen);

  // Update ref when state changes
  useEffect(() => {
    isMobileMenuOpenRef.current = isMobileMenuOpen;
  }, [isMobileMenuOpen]);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setIsScrolled((prev) => {
          const next = window.scrollY > 10;
          return prev !== next ? next : prev;
        });
      });
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        !mobileMenuButtonRef.current?.contains(target) &&
        isMobileMenuOpenRef.current
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpenRef.current) {
        setIsMobileMenuOpen(false);
        mobileMenuButtonRef.current?.focus();
      }
      
      // Handle arrow key navigation in mobile menu
      if (event.key === 'ArrowDown' && isMobileMenuOpenRef.current) {
        event.preventDefault();
        const firstLink = mobileMenuLinksRef.current[0];
        firstLink?.focus();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('pointerdown', handleClickOutside, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('pointerdown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      cancelAnimationFrame(rafId);
    };
  }, []); // Empty dependency array - listeners run only once

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    
    // Focus first menu item when opening
    if (newState) {
      setTimeout(() => {
        mobileMenuLinksRef.current[0]?.focus();
      }, 100);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    mobileMenuLinksRef.current = [];
  };

  // Mobile UX: Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-md border-b border-neutral/50 shadow-lg' 
          : 'bg-background'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="#home" 
              className="flex items-center group focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg p-2"
              aria-label="Go to homepage"
            >
              <Image
                src="/ft-logo-notext.webp"
                alt="FROSSTEC LANKA"
                width={48}
                height={48}
                priority
                className="mr-3 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-0.5"
              />
              <span className="text-2xl font-semibold tracking-tight text-primary-dark transition-colors duration-300 group-hover:text-primary">
                FROSSTEC LANKA
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav 
            className="hidden md:flex items-center space-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-primary-dark font-medium transition-all duration-300 hover:text-primary-light hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-md px-2 py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-light transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="#contact" className="btn-primary transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent/20">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              ref={mobileMenuButtonRef}
              onClick={toggleMobileMenu}
              className="relative p-2 text-primary-dark hover:text-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              type="button"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center" aria-hidden="true">
                <span 
                  className={`absolute w-5 h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                  }`}
                ></span>
                <span 
                  className={`w-5 h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span 
                  className={`absolute w-5 h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          ref={mobileMenuRef}
          id="mobile-menu"
          className={`md:hidden transition-all duration-500 ease-out ${
            isMobileMenuOpen 
              ? 'opacity-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 -translate-y-2 pointer-events-none absolute left-0 top-full w-full'
          }`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="py-6 space-y-2 border-t border-neutral/50 mt-4">
            {NAVIGATION_LINKS.map((link, index) => (
              <Link
                key={link.name}
                ref={(el) => {
                  mobileMenuLinksRef.current[index] = el;
                }}
                href={link.href}
                className="block text-primary-dark hover:text-primary-light hover:bg-primary/5 font-medium py-3 px-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                onClick={closeMobileMenu}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-neutral/50 mt-4">
              <Link 
                href="#contact"
                className="btn-primary w-full transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent/20"
                onClick={closeMobileMenu}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
