import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import type { TranslationDictionary } from '../data/i18n';

interface NavbarProps {
  t: TranslationDictionary['nav'];
  onBookViewing: () => void;
}

export function Navbar({ t, onBookViewing }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#catalog', label: t.catalog },
    { href: '#estate', label: t.estate },
    { href: '#standards', label: t.standards },
    { href: '#contact', label: t.contact },
  ];

  const handleMobileLink = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F7F6F3]/95 backdrop-blur-md border-b border-[#181715]/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <a
          href="#"
          className="font-display text-2xl font-semibold tracking-tight text-[#181715] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46] rounded-sm"
        >
          Ала-Тоо Асыл Тукум
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label={t.ariaLabel}
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A4640]"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#181715] underline-offset-4 hover:underline transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46] rounded-sm py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onBookViewing}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-[#F7F6F3] bg-[#181715] hover:bg-[#2F2C27] transition-colors duration-150 rounded-sm whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F6F3]"
          >
            {t.cta}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t.closeMenu : t.openMenu}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#181715] hover:bg-[#EEECE7] rounded-sm transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6D46]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#181715]/10 bg-[#F7F6F3] px-4 py-4 space-y-3">
          <nav aria-label={t.mobileAriaLabel} className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleMobileLink(link.href);
                }}
                className="py-2.5 px-2 text-base font-medium text-[#181715] hover:bg-[#EEECE7] rounded-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onBookViewing();
            }}
            className="w-full py-3 px-4 text-sm font-medium text-[#F7F6F3] bg-[#181715] hover:bg-[#2F2C27] rounded-sm transition-colors cursor-pointer"
          >
            {t.cta}
          </button>
        </div>
      )}
    </header>
  );
}
