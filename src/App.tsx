import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { LogoShowcase } from './components/LogoShowcase';
import { Gallery } from './components/Gallery';
import { ProjectModal } from './components/ProjectModal';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Project } from './data/projects';
import { MessageSquare, X } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showFloatingTip, setShowFloatingTip] = useState(true);

  // Direct contact credentials
  const emailAddress = 'niveacristinas@gmail.com';
  const rawWhatsAppDigits = '5511987654321';
  const displayWhatsApp = '+55 (11) 98765-4321';

  const handleOpenWhatsApp = (customMessage?: string) => {
    const text =
      customMessage ||
      'Olá, Nívea Oliveira! Conheci seu portfólio e gostaria de agendar uma conversa sobre um projeto de design, logotipo e estratégia.';
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${rawWhatsAppDigits}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1A1A1A] relative flex flex-col font-sans selection:bg-[#F4D3D5] selection:text-[#1A1A1A]">
      {/* Navigation Bar */}
      <Navbar onOpenWhatsApp={() => handleOpenWhatsApp()} />

      {/* Main Content Landmark */}
      <main className="flex-1">
        {/* Section 1: Presentation & Hero (Fundo Branco Puro) */}
        <Hero
          onOpenWhatsApp={() => handleOpenWhatsApp()}
          emailAddress={emailAddress}
        />

        {/* Section 2: Trajectory & Philosophy (Fundo Cinza Claro #F5F5F5) */}
        <About />

        {/* Section 3: Logos, Monogramas & Visualizador Interativo (Fundo Branco Puro) */}
        <LogoShowcase onOpenWhatsApp={(msg) => handleOpenWhatsApp(msg)} />

        {/* Section 4: Projects Gallery & Lightbox (Molduras em Dourado sobre Fundo Neutro) */}
        <Gallery onSelectProject={(project) => setSelectedProject(project)} />

        {/* Section 5: Social Proof & Testimonials (Fundo Cinza Claro #F5F5F5) */}
        <Testimonials />

        {/* Section 6: Contact with WhatsApp & Secure Email Form (Campos em Branco/Cinza, Botão em Rosê) */}
        <Contact
          emailAddress={emailAddress}
          whatsappNumber={displayWhatsApp}
          onOpenWhatsApp={(msg) => handleOpenWhatsApp(msg)}
        />
      </main>

      {/* Footer (Preto Profundo para Contraste) */}
      <Footer
        onOpenWhatsApp={() => handleOpenWhatsApp()}
        emailAddress={emailAddress}
      />

      {/* Fullscreen Project Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenWhatsApp={(projectName) =>
          handleOpenWhatsApp(
            `Olá, Nívea! Gostei muito do projeto "${projectName}" em seu portfólio e gostaria de solicitar uma proposta para uma iniciativa similar.`
          )
        }
      />

      {/* Subtle Floating WhatsApp Action Button */}
      <aside
        aria-label="Atendimento rápido via WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
      >
        {showFloatingTip && (
          <div className="hidden sm:flex items-center gap-2 bg-[#FFFFFF] text-[#1A1A1A] border border-[#D4AF37]/50 text-xs py-2 px-3 rounded-md shadow-lg animate-in fade-in duration-300">
            <span>Conversar diretamente com Nívea</span>
            <button
              onClick={() => setShowFloatingTip(false)}
              className="text-[#757575] hover:text-[#1A1A1A] ml-1 p-0.5"
              aria-label="Fechar dica"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        <button
          onClick={() => handleOpenWhatsApp()}
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#E8C7C8] hover:bg-[#D4AF37] text-[#1A1A1A] hover:text-white shadow-lg shadow-black/10 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2"
          aria-label="Falar com Nívea Oliveira no WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="sr-only">Falar no WhatsApp</span>

          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full border border-[#D4AF37]/50 animate-ping pointer-events-none" />
        </button>
      </aside>
    </div>
  );
}
