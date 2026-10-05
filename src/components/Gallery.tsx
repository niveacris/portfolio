import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project, PROJECTS_DATA, CATEGORIES } from '../data/projects';

interface GalleryProps {
  onSelectProject: (project: Project) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="projetos" className="py-20 lg:py-32 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Title & Description */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C9A646] font-semibold mb-3">
              Galeria de Projetos
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-normal leading-tight">
              Obras selecionadas com rigor e acabamento nobre.
            </h2>
            <p className="mt-4 text-[#4A4A4A] text-base font-light">
              Uma curadoria de identidades visuais, projetos editoriais, plataformas digitais
              e embalagens de alto padrão desenvolvidas para marcas exigentes.
            </p>
          </div>

          {/* Filter Tabs / Segmented Control com Rosê e Dourado */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F5F5F5] rounded-lg border border-[#E8E8E8]">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 rounded whitespace-nowrap ${
                    isActive
                      ? 'bg-[#E8C7C8] text-[#1A1A1A] font-semibold border border-[#D4AF37]/50 shadow-xs'
                      : 'text-[#4A4A4A] hover:text-[#C9A646] hover:bg-[#FFFFFF]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid: Molduras em Dourado sobre Fundo Neutro */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer bg-[#FFFFFF] rounded-lg border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-lg hover:shadow-[#D4AF37]/10"
            >
              {/* Media Slot com moldura e respiro */}
              <div className="relative aspect-[4/3] bg-[#F5F5F5] overflow-hidden border-b border-[#E8E8E8]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center filter contrast-[1.01] transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.classList.add(
                        'flex',
                        'items-center',
                        'justify-center',
                        'p-6',
                        'text-[#757575]'
                      );
                      parent.innerHTML = `<span class="text-xs uppercase tracking-wider">${project.title}</span>`;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Floating view detail icon: Rosê com hover Dourado */}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md border border-[#D4AF37]/50 flex items-center justify-center text-[#1A1A1A] group-hover:text-white group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all shadow-sm">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Information */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Unboxed Metadata (Zero pills) */}
                  <div className="flex items-center gap-2 text-xs text-[#757575] tracking-wider uppercase mb-2.5">
                    <span>{project.categoryLabel}</span>
                    <span aria-hidden="true" className="text-[#C9A646]">·</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A] font-normal group-hover:text-[#C9A646] transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-[#4A4A4A] font-light leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F0F0F0] flex items-center justify-between text-xs">
                  <span className="text-[#757575] font-light truncate max-w-[200px]">
                    {project.client}
                  </span>
                  <span className="text-[#C9A646] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explorar
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs text-[#757575]">
          Mostrando {filteredProjects.length} de {PROJECTS_DATA.length} projetos selecionados
        </div>
      </div>
    </section>
  );
};
