import React from 'react';
import { ArrowUp, MessageSquare, Mail } from 'lucide-react';

interface FooterProps {
  onOpenWhatsApp: () => void;
  emailAddress: string;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsApp, emailAddress }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A1A] border-t border-[#333333] text-[#A0A0A0] py-14">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#2C2C2C]">
          {/* Brand Wordmark em Dourado Metálico */}
          <div>
            <a
              href="#apresentacao"
              className="text-lg font-display tracking-[0.2em] font-semibold text-[#FFFFFF] hover:text-[#D4AF37] transition-colors uppercase"
            >
              Nívea Oliveira
            </a>
            <p className="text-xs text-[#D4AF37] mt-1 font-serif tracking-wider">
              Direção Criativa, Marcas & Design Estratégico
            </p>
          </div>

          {/* Quick Section Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs tracking-wider uppercase text-[#E0E0E0]">
            <a href="#apresentacao" className="hover:text-[#D4AF37] transition-colors">
              Apresentação
            </a>
            <a href="#sobre" className="hover:text-[#D4AF37] transition-colors">
              Sobre
            </a>
            <a href="#logos" className="hover:text-[#D4AF37] transition-colors">
              Logos
            </a>
            <a href="#projetos" className="hover:text-[#D4AF37] transition-colors">
              Projetos
            </a>
            <a href="#depoimentos" className="hover:text-[#D4AF37] transition-colors">
              Reconhecimento
            </a>
            <a href="#contato" className="hover:text-[#D4AF37] transition-colors">
              Contato
            </a>
          </nav>

          {/* Direct channels & Back to Top */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenWhatsApp}
              className="p-2.5 rounded bg-[#2A2A2A] border border-[#3A3A3A] text-[#E8C7C8] hover:text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all"
              title="Abrir WhatsApp"
              aria-label="Abrir WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </button>

            <a
              href={`mailto:${emailAddress}`}
              className="p-2.5 rounded bg-[#2A2A2A] border border-[#3A3A3A] text-[#E8C7C8] hover:text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all"
              title="Enviar e-mail direto"
              aria-label="Enviar e-mail para Nívea Oliveira"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded bg-[#2A2A2A] border border-[#3A3A3A] text-[#E8C7C8] hover:text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all"
              title="Voltar ao início"
              aria-label="Voltar ao topo da página"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Fine Print */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-light text-[#888888] gap-4">
          <p>© {new Date().getFullYear()} Nívea Oliveira. Todos os direitos reservados.</p>
          <p className="text-center sm:text-right">
            Paleta de Luxo: Rosê Suave (#E8C7C8), Dourado Metálico (#D4AF37), Branco Puro e Preto Profundo
          </p>
        </div>
      </div>
    </footer>
  );
};
