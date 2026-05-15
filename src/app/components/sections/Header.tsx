'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PhoneCall , Menu, X } from 'lucide-react';

const NAVIGATION_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Industries', href: '#industries' },
  { name: 'About Us', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

interface HeaderProps { }

export default function Header({ }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
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

        // Update active section based on scroll position
        const sections = NAVIGATION_LINKS.map(link => link.href.slice(1));
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        
        if (currentSection) {
          setActiveSection(currentSection);
        }
      });
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpenRef.current) {
        setIsMobileMenuOpen(false);
        mobileMenuButtonRef.current?.focus();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleKeyDown);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
    <>
    <header 
      className={`sticky top-0 z-[200] transition-all duration-500 ease-out bg-white border-b border-transparent ${
        isScrolled ? 'shadow-lg border-neutral/20' : ''
      }`}
      style={{ height: '72px' }}
      role="banner"
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
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
                width={40}
                height={40}
                priority
                className="mr-3 transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <span className="text-xl font-bold tracking-tight text-primary transition-colors duration-300">
                FROSSTEC LANKA
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav 
            className="hidden md:flex items-center space-x-8 flex-1 justify-center"
            role="navigation"
            aria-label="Main navigation"
          >
            {NAVIGATION_LINKS.map((link) => {
              const sectionId = link.href.slice(1);
              const isActive = activeSection === sectionId || (sectionId === 'home' && activeSection === 'home');
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-md px-2 py-1 group ${
                    isActive 
                      ? 'text-accent' 
                      : 'text-primary hover:text-accent'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full" aria-hidden="true"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
  href="tel:0777399999" 
  className="bg-accent text-white px-5 py-2.5 rounded-full font-bold transition-all duration-300 hover:bg-accent/90 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent/20 flex items-center space-x-2"
>
  <PhoneCall className="w-4 h-4" />
  <span className="font-semibold">077 739 9999</span>
</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              ref={mobileMenuButtonRef}
              onClick={toggleMobileMenu}
              className="relative z-[10000] p-2 text-primary hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg cursor-pointer"
              style={{ touchAction: 'manipulation' }}
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
      </div>
    </header>

    {/* Mobile Menu - Outside Header */}
    <div 
      ref={mobileMenuRef}
      id="mobile-menu"
      className={`md:hidden fixed left-0 right-0 top-[72px] bg-white border-b border-neutral/20 shadow-xl transition-all duration-300 ease-out z-[9999] ${
        isMobileMenuOpen 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 -translate-y-3 pointer-events-none'
      }`}
      role="navigation"
      aria-label="Mobile navigation"
    >
          <div className="py-6 space-y-2">
            {NAVIGATION_LINKS.map((link, index) => {
              const sectionId = link.href.slice(1);
              const isActive = activeSection === sectionId || (sectionId === 'home' && activeSection === 'home');
              
              return (
                <Link
                  key={link.name}
                  ref={(el) => {
                    mobileMenuLinksRef.current[index] = el;
                  }}
                  href={link.href}
                  className={`block font-medium py-3 px-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                    isActive 
                      ? 'text-accent bg-accent/5' 
                      : 'text-primary hover:text-accent hover:bg-accent/5'
                  }`}
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-neutral/20">
              <Link 
                href="tel:0777399999"
                className="bg-accent text-white px-4 py-3 rounded-full font-medium transition-all duration-300 hover:bg-accent/90 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent/20 flex items-center justify-center space-x-2 w-full"
                onClick={closeMobileMenu}
              >
                <PhoneCall className="w-4 h-4" />
                <span>077 739 9999</span>
              </Link>
            </div>
          </div>
    </div>
  </>
  );
}