import React, { useState, useRef } from 'react';
import {
  Upload,
  Sliders,
  CheckCircle,
  Trash2,
  MessageSquare,
  Feather
} from 'lucide-react';
import { CURATED_LOGOS } from '../data/logos';

interface LogoShowcaseProps {
  onOpenWhatsApp: (message?: string) => void;
}

export const LogoShowcase: React.FC<LogoShowcaseProps> = ({ onOpenWhatsApp }) => {
  const [selectedMockupStyle, setSelectedMockupStyle] = useState<
    'rose-linen' | 'gold-pure-white' | 'noir-gold' | 'marble'
  >('rose-linen');
  const [userLogos, setUserLogos] = useState<
    { id: string; name: string; url: string; invert: boolean }[]
  >([]);
  const [activeLogoIndex, setActiveLogoIndex] = useState<number>(0);
  const [logoScale, setLogoScale] = useState<number>(100);
  const [invertUserLogo, setInvertUserLogo] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle local user logo file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newLogos = Array.from(files).map((file) => ({
      id: Math.random().toString(36).substring(2, 9),
      name: file.name.replace(/\.[^/.]+$/, ''),
      url: URL.createObjectURL(file),
      invert: false
    }));

    setUserLogos((prev) => [...newLogos, ...prev]);
    setActiveLogoIndex(0);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (!files || files.length === 0) return;

    const newLogos = Array.from(files).map((file) => ({
      id: Math.random().toString(36).substring(2, 9),
      name: file.name.replace(/\.[^/.]+$/, ''),
      url: URL.createObjectURL(file),
      invert: false
    }));

    setUserLogos((prev) => [...newLogos, ...prev]);
    setActiveLogoIndex(0);
  };

  const currentCustomLogo = userLogos[activeLogoIndex] || null;

  return (
    <section id="logos" className="py-20 lg:py-28 relative bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C9A646] font-semibold mb-3">
              Marcas & Logotipos
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-normal leading-tight">
              Símbolos concebidos com alma, harmonia e impacto.
            </h2>
            <p className="mt-4 text-[#4A4A4A] text-base font-light">
              Monogramas e identidades gráficas desenhados para imprimir autoridade imediata.
              Abaixo você confere criações selecionadas e pode também testar a aplicação dos seus próprios logos.
            </p>
          </div>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-2.5 px-5 py-3 text-xs font-semibold tracking-wider uppercase bg-[#E8C7C8] hover:bg-[#D4AF37] text-[#1A1A1A] hover:text-white rounded transition-all duration-200 self-start md:self-auto shadow-sm"
          >
            <Upload className="w-4 h-4" />
            <span>Testar Meus Logos</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>

        {/* Feature 1: Interactive Logo Visualizer & Mockup Lab */}
        <div className="bg-[#F5F5F5] border border-[#E8E8E8] rounded-xl p-6 sm:p-8 lg:p-10 mb-16 shadow-xs">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Visual Preview Frame */}
            <div className="w-full lg:w-7/12 space-y-4">
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                className={`relative w-full aspect-[16/10] rounded-lg overflow-hidden flex items-center justify-center p-8 transition-all duration-500 border border-[#D4AF37]/30 shadow-md ${
                  selectedMockupStyle === 'rose-linen'
                    ? 'bg-gradient-to-br from-[#FBF0F1] via-[#F4D3D5] to-[#E8C7C8] text-[#1A1A1A]'
                    : selectedMockupStyle === 'gold-pure-white'
                    ? 'bg-[#FFFFFF] text-[#1A1A1A]'
                    : selectedMockupStyle === 'noir-gold'
                    ? 'bg-[#1A1A1A] text-[#FFFFFF]'
                    : 'bg-[#EFEAE4] text-[#1A1A1A]'
                }`}
              >
                {/* The Logo (User uploaded OR Default Monogram) */}
                {currentCustomLogo ? (
                  <div
                    className="relative z-10 transition-transform duration-200 max-w-[85%] max-h-[85%] flex items-center justify-center"
                    style={{ transform: `scale(${logoScale / 100})` }}
                  >
                    <img
                      src={currentCustomLogo.url}
                      alt={currentCustomLogo.name}
                      className={`object-contain max-h-[180px] sm:max-h-[220px] transition-all duration-300 ${
                        invertUserLogo ? 'filter invert' : ''
                      } ${
                        selectedMockupStyle === 'gold-pure-white' || selectedMockupStyle === 'rose-linen'
                          ? 'drop-shadow-[0_4px_12px_rgba(201,166,70,0.3)]'
                          : selectedMockupStyle === 'noir-gold'
                          ? 'drop-shadow-[0_4px_16px_rgba(212,175,55,0.45)]'
                          : 'drop-shadow-[0_2px_6px_rgba(0,0,0,0.15)]'
                      }`}
                    />
                  </div>
                ) : (
                  <div
                    className="relative z-10 text-center transition-transform duration-200"
                    style={{ transform: `scale(${logoScale / 100})` }}
                  >
                    {/* Default Elegant Monogram Stamp */}
                    <div className="inline-block p-6 rounded-full border border-[#D4AF37]/60 mb-3 bg-[#FFFFFF]/80 backdrop-blur-sm shadow-sm">
                      <span className="font-serif text-5xl sm:text-6xl font-light tracking-[0.25em] text-[#C9A646] pl-2">
                        NO
                      </span>
                    </div>
                    <div className="font-serif text-xl sm:text-2xl tracking-[0.2em] uppercase font-medium">
                      Nívea Oliveira
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.3em] text-[#9E7D2B] mt-1 font-medium">
                      Atelier de Criação & Marcas
                    </div>
                  </div>
                )}

                {/* Subtle Mockup Frame watermark */}
                <div className="absolute bottom-3 right-4 text-[10px] tracking-widest uppercase opacity-60 font-mono">
                  {selectedMockupStyle === 'rose-linen'
                    ? 'Acabamento: Relevo Dourado em Papel Rosé'
                    : selectedMockupStyle === 'gold-pure-white'
                    ? 'Acabamento: Hot Stamping Dourado em Branco Puro'
                    : selectedMockupStyle === 'noir-gold'
                    ? 'Acabamento: Ouro Nobre em Fundo Preto Profundo'
                    : 'Acabamento: Relevo Seco em Travertino'}
                </div>
              </div>

              {/* Mockup Style Buttons: Rosê com hover Dourado */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs text-[#757575] mr-2">
                  Estilo da Apresentação:
                </span>
                {[
                  { id: 'rose-linen', label: 'Papel Rosé Suave' },
                  { id: 'gold-pure-white', label: 'Branco Puro & Ouro' },
                  { id: 'noir-gold', label: 'Preto Profundo & Ouro' },
                  { id: 'marble', label: 'Travertino Minimal' }
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() =>
                      setSelectedMockupStyle(
                        s.id as
                          | 'rose-linen'
                          | 'gold-pure-white'
                          | 'noir-gold'
                          | 'marble'
                      )
                    }
                    className={`px-3 py-1.5 text-xs rounded transition-colors ${
                      selectedMockupStyle === s.id
                        ? 'bg-[#E8C7C8] text-[#1A1A1A] font-semibold border border-[#D4AF37]/50 shadow-xs'
                        : 'bg-[#FFFFFF] text-[#4A4A4A] hover:bg-[#E8C7C8] hover:text-[#1A1A1A] border border-[#E8E8E8]'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Controls & Uploaded Logos Drawer */}
            <div className="w-full lg:w-5/12 space-y-6">
              <div className="border-b border-[#E8E8E8] pb-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-serif text-xl text-[#1A1A1A]">
                    Simulador & Laboratório de Logos
                  </h3>
                  <span className="text-[11px] text-[#C9A646] uppercase tracking-wider font-semibold">
                    Ao Vivo
                  </span>
                </div>
                <p className="text-xs text-[#757575] leading-relaxed">
                  Envie seus arquivos de logo (PNG com fundo transparente, SVG ou JPG)
                  para visualizá-los sob os acabamentos de luxo da paleta Rosé e Dourado.
                </p>
              </div>

              {/* Upload Zone */}
              <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                className="border-2 border-dashed border-[#D4AF37]/40 hover:border-[#D4AF37] rounded-lg p-5 text-center cursor-pointer transition-colors bg-[#FFFFFF] hover:bg-[#FBF0F1]"
              >
                <Upload className="w-6 h-6 text-[#C9A646] mx-auto mb-2" />
                <div className="text-xs font-semibold text-[#1A1A1A]">
                  Clique para selecionar ou arraste seus logos aqui
                </div>
                <div className="text-[11px] text-[#757575] mt-1">
                  Formatos aceitos: PNG transparente, SVG ou JPG
                </div>
              </div>

              {/* Scale & Invert Controls */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-xs text-[#4A4A4A]">
                  <span className="flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-[#C9A646]" />
                    <span>Escala do Símbolo:</span>
                  </span>
                  <span className="font-mono text-[#1A1A1A] font-semibold">{logoScale}%</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="160"
                  value={logoScale}
                  onChange={(e) => setLogoScale(Number(e.target.value))}
                  className="w-full accent-[#C9A646] cursor-pointer"
                />

                {currentCustomLogo && (
                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => setInvertUserLogo(!invertUserLogo)}
                      className="text-xs text-[#4A4A4A] hover:text-[#C9A646] underline underline-offset-4 flex items-center gap-1"
                    >
                      <span>Inverter cores (preto/branco)</span>
                    </button>

                    <button
                      onClick={() => {
                        const updated = userLogos.filter((_, i) => i !== activeLogoIndex);
                        setUserLogos(updated);
                        setActiveLogoIndex(0);
                      }}
                      className="text-xs text-red-600 hover:text-red-700 flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remover</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Uploaded items selector */}
              {userLogos.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-[#E8E8E8]">
                  <div className="text-xs text-[#757575] font-medium">
                    Seus Logos Carregados ({userLogos.length}):
                  </div>
                  <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                    {userLogos.map((item, idx) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveLogoIndex(idx)}
                        className={`px-3 py-1.5 text-xs rounded border transition-colors flex items-center gap-2 ${
                          activeLogoIndex === idx
                            ? 'border-[#D4AF37] bg-[#E8C7C8] text-[#1A1A1A] font-semibold'
                            : 'border-[#E8E8E8] bg-white text-[#4A4A4A] hover:border-[#D4AF37]'
                        }`}
                      >
                        <span className="truncate max-w-[120px]">{item.name}</span>
                        {activeLogoIndex === idx && (
                          <CheckCircle className="w-3 h-3 text-[#1A1A1A]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Direct Action for Logos: Rosê com hover Dourado */}
              <div className="pt-2">
                <button
                  onClick={() =>
                    onOpenWhatsApp(
                      'Olá, Nívea! Gostaria de conversar sobre a criação ou modernização do meu logotipo/marca com a paleta Rosé e Dourado.'
                    )
                  }
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold tracking-wider uppercase bg-[#E8C7C8] hover:bg-[#D4AF37] text-[#1A1A1A] hover:text-white rounded transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Conversar sobre projeto de logo no WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Curated Brand & Monogram Showcase Grid */}
        <div className="mb-8">
          <div className="text-xs uppercase tracking-wider text-[#C9A646] font-semibold mb-2">
            Portfólio de Marcas & Monogramas
          </div>
          <h3 className="font-serif text-2xl text-[#1A1A1A]">
            Estudos de Forma, Proporção e Tipografia
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURATED_LOGOS.map((logo) => (
            <div
              key={logo.id}
              className="bg-[#FFFFFF] p-6 rounded-lg border border-[#E8E8E8] hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-md hover:shadow-[#D4AF37]/10"
            >
              <div>
                {/* Visual Emblem Badge com Moldura Dourada */}
                <div className="aspect-[16/9] rounded-md bg-[#F5F5F5] border border-[#E8E8E8] flex items-center justify-center mb-5 group-hover:border-[#D4AF37]/50 transition-colors">
                  <div className="w-16 h-16 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-[#FFFFFF] shadow-sm">
                    <span className="font-serif text-2xl font-light text-[#C9A646] tracking-wider">
                      {logo.symbol}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#757575] tracking-wider uppercase mb-2">
                  <span>{logo.type}</span>
                  <span aria-hidden="true" className="text-[#C9A646]">·</span>
                  <span>{logo.segment}</span>
                </div>

                <h4 className="font-serif text-xl text-[#1A1A1A] group-hover:text-[#C9A646] transition-colors mb-2">
                  {logo.name}
                </h4>

                <p className="text-xs text-[#4A4A4A] font-light leading-relaxed">
                  {logo.concept}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F0F0F0] flex items-center justify-between text-[11px] text-[#757575]">
                <span className="flex items-center gap-1.5">
                  <Feather className="w-3.5 h-3.5 text-[#C9A646]" />
                  <span>Geometria Vetorial & Tipografia Exclusiva</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
