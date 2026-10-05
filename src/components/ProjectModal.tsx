import React, { useEffect } from 'react';
import { X, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenWhatsApp: (projectName?: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenWhatsApp,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FFFFFF] border border-[#D4AF37]/40 rounded-xl shadow-2xl text-[#1A1A1A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E8E8E8]">
          {/* Unboxed Metadata in header */}
          <div className="flex items-center gap-2 text-xs text-[#757575] tracking-wider uppercase font-medium">
            <span>{project.categoryLabel}</span>
            <span aria-hidden="true" className="text-[#C9A646]">·</span>
            <span>Ano {project.year}</span>
            <span aria-hidden="true" className="text-[#C9A646]">·</span>
            <span>{project.client}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#757575] hover:text-[#1A1A1A] hover:bg-[#F5F5F5] rounded transition-colors"
            aria-label="Fechar janela de detalhes"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Visual in Modal */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-[#F5F5F5] overflow-hidden border-b border-[#E8E8E8]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 lg:p-10 space-y-8">
          <div>
            <h2
              id="modal-project-title"
              className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-normal leading-tight"
            >
              {project.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#4A4A4A] font-light leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Challenge & Solution Grid (Fundo Cinza Claro) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#E8E8E8]">
            <div className="bg-[#F5F5F5] p-5 sm:p-6 rounded-lg border border-[#E8E8E8]">
              <div className="text-xs uppercase tracking-wider text-[#C9A646] font-semibold mb-2">
                O Desafio
              </div>
              <p className="text-sm text-[#4A4A4A] font-light leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-5 sm:p-6 rounded-lg border border-[#E8E8E8]">
              <div className="text-xs uppercase tracking-wider text-[#C9A646] font-semibold mb-2">
                A Solução Conceitual
              </div>
              <p className="text-sm text-[#4A4A4A] font-light leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deliverables List */}
          <div className="pt-4 border-t border-[#E8E8E8]">
            <div className="text-xs uppercase tracking-wider text-[#C9A646] font-semibold mb-4">
              Entregáveis & Especificações Técnicas
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#4A4A4A]">
              {project.deliverables.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A646] shrink-0 mt-0.5" />
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quantitative Impact / Results com Botão Rosê com hover Dourado */}
          <div className="bg-[#FBF0F1] p-5 rounded-lg border border-[#E8C7C8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#C9A646] font-semibold">
                Impacto Mensurado
              </div>
              <div className="text-base text-[#1A1A1A] font-serif mt-1 font-medium">
                {project.results}
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenWhatsApp(project.title);
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase bg-[#E8C7C8] hover:bg-[#D4AF37] text-[#1A1A1A] hover:text-white rounded whitespace-nowrap transition-colors shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Solicitar similar no WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
