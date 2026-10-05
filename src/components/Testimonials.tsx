import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        'A Nívea transformou completamente a percepção de valor da nossa joalheria. O manual de marca e a escolha dos acabamentos em ouro e papéis finos elevaram nosso tíquete médio de imediato.',
      author: 'Heloísa Montalbán',
      role: 'Fundadora & Curadora',
      company: 'Maison Éléonore Joias',
      metric: '+140% tíquete médio'
    },
    {
      quote:
        'Trabalhar com a Nívea no livro comemorativo de 20 anos do escritório foi uma experiência primorosa. O rigor editorial, a sensibilidade fotográfica e a pontualidade foram impecáveis.',
      author: 'Eduardo Guimarães',
      role: 'Sócio-Diretor de Arquitetura',
      company: 'Guimarães & Associados',
      metric: 'Tiragem de 2.000 cópias esgotada'
    },
    {
      quote:
        'Em um mercado financeiro dominado por interfaces frias e sem personalidade, o design criado por Nívea nos concedeu uma elegância silenciosa que impressionou nossos cotistas mais exigentes.',
      author: 'Bernardo Castilho',
      role: 'Diretor de Operações',
      company: 'Aura Capital Family Office',
      metric: '98% aprovação dos investidores'
    },
  ];

  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-[#F5F5F5] border-t border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-[0.2em] text-[#C9A646] font-semibold mb-3">
            Reconhecimento & Clientes
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-normal leading-tight">
            Parcerias pautadas pela confiança, precisão e excelência.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] p-8 rounded-lg border border-[#E8E8E8] hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md hover:shadow-[#D4AF37]/10"
            >
              <div>
                <Quote className="w-6 h-6 text-[#C9A646] mb-4" />
                <p className="text-sm sm:text-base text-[#4A4A4A] font-light leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0F0F0]">
                <div className="font-serif text-base text-[#1A1A1A] font-medium">
                  {item.author}
                </div>
                <div className="text-xs text-[#757575] font-light mt-0.5">
                  {item.role} · <span className="text-[#1A1A1A]">{item.company}</span>
                </div>
                <div className="text-xs font-semibold text-[#C9A646] mt-2 tabular-nums">
                  {item.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
