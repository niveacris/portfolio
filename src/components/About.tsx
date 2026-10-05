import React from 'react';
import { Compass, Feather, Layers, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      index: '01',
      title: 'Estratégia e Distinção de Marca',
      description:
        'Não desenho apenas logotipos: construo universos de marca com fundamentação cultural, pesquisa aprofundada de mercado e diferenciação autêntica.',
      icon: Compass,
      tags: ['Diagnóstico de Marca', 'Narrativa Institucional', 'Arquitetura de Portfólio']
    },
    {
      index: '02',
      title: 'Design Editorial e Materiais Nobres',
      description:
        'Paixão visceral por livros de mesa, relatórios anuais de luxo, papéis de alta gramatura, vernizes pontuais e gravações metálicas com acabamento impecável.',
      icon: Feather,
      tags: ['Livros de Arte', 'Papelaria Fina', 'Hot Stamping & Relevos']
    },
    {
      index: '03',
      title: 'Ecossistemas Digitais Sofisticados',
      description:
        'Interfaces contemporâneas, limpas e responsivas que traduzem prestígio para telas móveis e desktop, com código performático e sem fricção.',
      icon: Layers,
      tags: ['UI/UX Design', 'Design Systems', 'Experiências Web Privativas']
    },
    {
      index: '04',
      title: 'Confidencialidade e Atendimento Exclusivo',
      description:
        'Trabalho com número reduzido de clientes por ciclo, garantindo imersão total do início ao pós-lançamento sob rigorosos acordos de sigilo (NDA).',
      icon: ShieldCheck,
      tags: ['Contrato Seguro', 'Atendimento Direto', 'Entrega Pontual']
    },
  ];

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#F5F5F5] border-t border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="text-xs uppercase tracking-[0.2em] text-[#C9A646] font-semibold mb-3">
            Trajetória & Filosofia
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-normal leading-tight">
            A convergência entre a tradição dos clássicos e o dinamismo do contemporâneo.
          </h2>
          <p className="mt-5 text-[#4A4A4A] text-base sm:text-lg leading-relaxed font-light">
            Acredito que o verdadeiro luxo não reside no excesso, mas na precisão. Cada proporção,
            escolha tipográfica e contraste cromático é calculado para gerar respeito imediato
            e valor perceptível antes mesmo da primeira palavra ser dita.
          </p>
        </div>

        {/* 4 Editorial Pillars Grid (Cards em Branco com detalhes em dourado) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.index}
                className="bg-[#FFFFFF] p-8 sm:p-10 rounded-lg border border-[#E8E8E8] hover:border-[#D4AF37] transition-all duration-300 relative group shadow-sm hover:shadow-md hover:shadow-[#D4AF37]/10"
              >
                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-serif text-3xl text-[#C9A646] font-light">
                    {pillar.index}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#F4D3D5]/40 border border-[#E8C7C8] flex items-center justify-center text-[#1A1A1A] group-hover:text-[#C9A646] group-hover:border-[#D4AF37] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-[#1A1A1A] font-normal mb-3 group-hover:text-[#C9A646] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm sm:text-base text-[#4A4A4A] font-light leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Zero-pill metadata tags */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#757575] pt-4 border-t border-[#F0F0F0]">
                  {pillar.tags.map((tag, i) => (
                    <React.Fragment key={tag}>
                      <span>{tag}</span>
                      {i < pillar.tags.length - 1 && (
                        <span className="text-[#C9A646]" aria-hidden="true">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Work Methodology Ribbon */}
        <div className="mt-16 pt-12 border-t border-[#E8E8E8] grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#C9A646] font-semibold mb-1">Fase 01</div>
            <div className="font-serif text-lg text-[#1A1A1A]">Diagnóstico & Imersão</div>
            <p className="text-xs text-[#757575] mt-1.5 leading-normal">
              Entrevistas com stakeholders, análise de concorrência e manifesto conceitual.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-[#C9A646] font-semibold mb-1">Fase 02</div>
            <div className="font-serif text-lg text-[#1A1A1A]">Direção & Protótipo</div>
            <p className="text-xs text-[#757575] mt-1.5 leading-normal">
              Exploração visual rigorosa, testes de materiais, tipografia e grids arquitetônicos.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-[#C9A646] font-semibold mb-1">Fase 03</div>
            <div className="font-serif text-lg text-[#1A1A1A]">Refinamento Fino</div>
            <p className="text-xs text-[#757575] mt-1.5 leading-normal">
              Microajustes milimétricos de espaçamento, hierarquia e provas técnicas de impressão/código.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-[#C9A646] font-semibold mb-1">Fase 04</div>
            <div className="font-serif text-lg text-[#1A1A1A]">Entrega & Governança</div>
            <p className="text-xs text-[#757575] mt-1.5 leading-normal">
              Manuais de marca completos, assets organizados e acompanhamento de produção.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
