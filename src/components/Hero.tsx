import React, { useState, useRef } from 'react';
import { ArrowDown, MessageSquare, Mail, Check, Sparkles, Camera, Upload, RotateCcw } from 'lucide-react';

interface HeroProps {
  onOpenWhatsApp: () => void;
  emailAddress: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWhatsApp, emailAddress }) => {
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [portraitPhoto, setPortraitPhoto] = useState<string>(() => {
    try {
      return (
        localStorage.getItem('nivea_portrait_photo') ||
        '/src/assets/images/nivea_oliveira_portrait_official_1791923596017.jpg'
      );
    } catch {
      return '/src/assets/images/nivea_oliveira_portrait_official_1791923596017.jpg';
    }
  });

  const [isCustomPhoto, setIsCustomPhoto] = useState<boolean>(() => {
    try {
      return !!localStorage.getItem('nivea_portrait_photo');
    } catch {
      return false;
    }
  });

  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const processPhotoFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setPortraitPhoto(result);
        setIsCustomPhoto(true);
        try {
          localStorage.setItem('nivea_portrait_photo', result);
        } catch {
          // If storage quota exceeded, remains active in current session state
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processPhotoFile(file);
    }
  };

  const handleDropPhoto = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processPhotoFile(file);
    }
  };

  const handleResetPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      localStorage.removeItem('nivea_portrait_photo');
    } catch {}
    setPortraitPhoto('/src/assets/images/nivea_oliveira_portrait_official_1791923596017.jpg');
    setIsCustomPhoto(false);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section
      id="apresentacao"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#FFFFFF]"
    >
      {/* Subtle ambient light glows (Rosê suave e Dourado) */}
      <div
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-3xl pointer-events-none opacity-40 bg-[#F4D3D5]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20 bg-[#D4AF37]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Typography & Value Proposition */}
          <div className="lg:col-span-7 space-y-8">
            {/* Top Logo & Unboxed metadata kicker em Dourado Metálico */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <img
                src="/src/assets/images/logo_nivea_oliveira_transparente.png"
                alt="Logo oficial Nívea Oliveira"
                className="h-14 sm:h-16 w-auto max-w-[220px] sm:max-w-[280px] object-contain shrink-0 hover:scale-105 transition-transform"
              />
              <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm tracking-[0.18em] uppercase text-[#C9A646] font-semibold">
                <span>Direção Criativa</span>
                <span className="text-[#D4AF37]/50" aria-hidden="true">·</span>
                <span>Identidade de Marca</span>
                <span className="text-[#D4AF37]/50" aria-hidden="true">·</span>
                <span>Design Editorial</span>
              </div>
            </div>

            {/* Display Headline em Preto Profundo com Dourado */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[4.1rem] text-[#1A1A1A] font-normal leading-[1.12] tracking-tight">
              Elegância com propósito para marcas que buscam{' '}
              <span className="italic font-normal text-[#C9A646] gold-metallic-text">
                distinção duradoura.
              </span>
            </h1>

            {/* Descriptive Body Prose (Não cansa a leitura) */}
            <p className="text-base sm:text-lg text-[#4A4A4A] font-light leading-relaxed max-w-2xl">
              Sou Nívea Oliveira, estrategista visual e designer dedicada à criação
              de identidades de marca marcantes, logotipos atemporais, livros de arte e
              ecossistemas digitais de prestígio. Através de um olhar refinado em tons
              de rosê e dourado, transformo conceitos complexos em presenças visuais inesquecíveis.
            </p>

            {/* Actions: Botões em Rosê com hover em Dourado */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenWhatsApp}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#E8C7C8] hover:bg-[#D4AF37] text-[#1A1A1A] hover:text-white rounded transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-[#D4AF37]/20 active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4 text-current" />
                <span>Conversar no WhatsApp</span>
              </button>

              <a
                href="#logos"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-medium tracking-wider uppercase text-[#1A1A1A] hover:text-[#C9A646] border border-[#D4AF37]/40 hover:border-[#D4AF37] bg-white rounded transition-all duration-200 shadow-xs"
              >
                <span>Ver Logos & Projetos</span>
                <ArrowDown className="w-4 h-4 text-[#C9A646]" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-normal text-[#757575] hover:text-[#C9A646] transition-colors"
                title="Copiar e-mail de contato"
                aria-label="Copiar endereço de e-mail de Nívea Oliveira"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#C9A646]" />
                    <span className="text-[#C9A646] font-medium">E-mail copiado!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-[#757575]" />
                    <span>{emailAddress}</span>
                  </>
                )}
              </button>
            </div>

            {/* Credibility & Precision Metrics */}
            <div className="pt-8 border-t border-[#E8E8E8] grid grid-cols-3 gap-6 max-w-xl">
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-medium text-[#1A1A1A] tabular-nums">
                  12<span className="text-[#C9A646] font-normal">+</span>
                </div>
                <div className="text-xs text-[#757575] mt-1 font-light tracking-wide">
                  Anos de experiência
                </div>
              </div>

              <div>
                <div className="font-serif text-2xl sm:text-3xl font-medium text-[#1A1A1A] tabular-nums">
                  85<span className="text-[#C9A646] font-normal">+</span>
                </div>
                <div className="text-xs text-[#757575] mt-1 font-light tracking-wide">
                  Projetos desenvolvidos
                </div>
              </div>

              <div>
                <div className="font-serif text-2xl sm:text-3xl font-medium text-[#1A1A1A] tabular-nums">
                  100<span className="text-[#C9A646] font-normal">%</span>
                </div>
                <div className="text-xs text-[#757575] mt-1 font-light tracking-wide">
                  Dedicação exclusiva
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Framed Editorial Portrait Container (Moldura em Dourado sobre Fundo Neutro) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold frame */}
              <div
                className="absolute -inset-2.5 rounded-lg border border-[#D4AF37]/50 pointer-events-none -z-10 translate-x-2 translate-y-2 hidden sm:block"
                aria-hidden="true"
              />

              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDraggingOver(true);
                }}
                onDragLeave={() => setIsDraggingOver(false)}
                onDrop={handleDropPhoto}
                className={`relative overflow-hidden rounded-md bg-[#F5F5F5] border shadow-xl aspect-[3/4] group transition-all duration-300 ${
                  isDraggingOver
                    ? 'border-[#D4AF37] ring-4 ring-[#D4AF37]/30 scale-[1.01]'
                    : 'border-[#D4AF37]/40'
                }`}
              >
                <img
                  src={portraitPhoto}
                  alt="Retrato de Nívea Oliveira, diretora de arte e estrategista criativa"
                  className="w-full h-full object-cover object-center filter contrast-[1.01] transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.classList.add('flex', 'items-center', 'justify-center', 'p-8', 'text-center');
                    }
                  }}
                />

                {/* Hidden File Input for Real Photo Upload */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoUpload}
                />

                {/* Direct Action Button to Upload Real Photo */}
                <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    type="button"
                    title="Substituir pela sua foto original sem alterações"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFFFFF]/95 hover:bg-[#FFFFFF] text-[#1A1A1A] border border-[#D4AF37] shadow-md text-[11px] font-medium tracking-wide backdrop-blur-sm transition-all hover:scale-105 hover:border-[#B3892B] active:scale-95 cursor-pointer"
                  >
                    <Camera className="w-3.5 h-3.5 text-[#C9A646]" />
                    <span>{isCustomPhoto ? 'Trocar Foto Real' : 'Carregar Foto Real'}</span>
                  </button>

                  {isCustomPhoto && (
                    <button
                      onClick={handleResetPhoto}
                      type="button"
                      title="Restaurar padrão"
                      className="p-1.5 rounded-full bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#757575] hover:text-[#1A1A1A] border border-[#E0E0E0] shadow-sm text-xs backdrop-blur-sm transition-all cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                    </button>
                  )}
                </div>

                {isDraggingOver && (
                  <div className="absolute inset-0 bg-[#FFFFFF]/90 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center z-30 border-2 border-dashed border-[#D4AF37]">
                    <Upload className="w-8 h-8 text-[#C9A646] mb-2 animate-bounce" />
                    <p className="text-xs font-semibold text-[#1A1A1A]">Solte sua foto real aqui</p>
                    <p className="text-[10px] text-[#757575] mt-1">Carrega o arquivo original sem nenhuma alteração</p>
                  </div>
                )}

                {/* Subtle light scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 via-transparent to-transparent pointer-events-none" />

                {/* Bottom signature caption */}
                <div className="absolute bottom-4 left-4 right-4 text-xs text-white font-light flex items-center justify-between pointer-events-none">
                  <span className="font-serif tracking-widest text-[#E8C7C8] font-medium">
                    NÍVEA OLIVEIRA
                  </span>
                  <span className="text-[11px] text-white/80">São Paulo · Brasil</span>
                </div>
              </div>

              {/* Discreet floating credibility card with official logo */}
              <div className="absolute -bottom-5 -left-5 bg-[#FFFFFF] border border-[#D4AF37]/50 p-3 rounded-lg shadow-xl hidden sm:flex items-center gap-3">
                <img
                  src="/src/assets/images/logo_nivea_oliveira_letradourada_1791316714086.jpg"
                  alt="Selo oficial Nívea Oliveira"
                  className="w-10 h-10 rounded-full border border-[#D4AF37]/60 object-cover shadow-xs shrink-0"
                />
                <div className="text-left">
                  <div className="text-xs font-semibold text-[#1A1A1A]">Marca d'Água Oficial</div>
                  <div className="text-[11px] text-[#C9A646] font-medium">Atelier Nívea Oliveira</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
