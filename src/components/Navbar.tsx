import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenWhatsApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhatsApp }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#apresentacao', label: 'Apresentação' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#logos', label: 'Logos' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#depoimentos', label: 'Reconhecimento' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E8E8E8] py-3.5 shadow-sm'
          : 'bg-[#FFFFFF]/80 backdrop-blur-sm py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#apresentacao"
          className="text-lg md:text-xl font-display font-semibold tracking-[0.2em] text-[#1A1A1A] hover:text-[#C9A646] transition-colors uppercase whitespace-nowrap"
        >
          Nívea Oliveira
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide text-[#4A4A4A]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 hover:text-[#C9A646] transition-colors group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action (Rosê com hover em Dourado) */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenWhatsApp}
            className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase bg-[#E8C7C8] hover:bg-[#D4AF37] text-[#1A1A1A] hover:text-white rounded transition-all duration-200 shadow-sm active:scale-95"
            aria-label="Abrir conversa no WhatsApp"
          >
            <span>Falar no WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1A1A1A] hover:text-[#C9A646] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] rounded"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFFFF] border-b border-[#E8E8E8] px-6 py-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#4A4A4A] hover:text-[#C9A646] transition-colors py-2 border-b border-[#F5F5F5]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold tracking-wider uppercase bg-[#E8C7C8] hover:bg-[#D4AF37] text-[#1A1A1A] hover:text-white rounded transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
