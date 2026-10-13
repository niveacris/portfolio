import React from 'react';

interface OfficialLogoMarkProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'image' | 'vector';
  showSubtitle?: boolean;
}

export const OfficialLogoMark: React.FC<OfficialLogoMarkProps> = ({
  className = '',
  size = 'md',
  variant = 'image',
  showSubtitle = false
}) => {
  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-14 h-14',
    lg: 'w-24 h-24',
    xl: 'w-48 h-48 sm:w-64 sm:h-64'
  }[size];

  if (variant === 'image') {
    return (
      <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
        <div
          className={`${sizeClasses} flex items-center justify-center`}
        >
          <img
            src="/src/assets/images/logo_nivea_oliveira_transparente.png"
            alt="Logo oficial Nívea Oliveira — Monograma Ouro com assinatura caligráfica em rosé"
            className="w-full h-full object-contain object-center"
            loading="lazy"
          />
        </div>
        {showSubtitle && (
          <span className="block text-[10px] uppercase tracking-widest text-[#C9A646] font-semibold mt-1">
            Marca Registrada
          </span>
        )}
      </div>
    );
  }

  // Crisp Vector Representation of the exact uploaded logo (Gold Monogram + Rose Script with horizontal line extenders)
  return (
    <div className={`relative inline-flex flex-col items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 500 400"
        className={`${sizeClasses} overflow-visible`}
        aria-label="Logo Nívea Oliveira"
      >
        <defs>
          <linearGradient id="goldFoilGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C9A646" />
            <stop offset="25%" stopColor="#E5C778" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="75%" stopColor="#B3892B" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
          <linearGradient id="roseScriptGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E88B8C" />
            <stop offset="50%" stopColor="#E8A5A6" />
            <stop offset="100%" stopColor="#D67B7C" />
          </linearGradient>
          <filter id="goldShimmer" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#D4AF37" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Background Monogram: Classical serif N and O in Textured Gold Foil */}
        <g filter="url(#goldShimmer)">
          <text
            x="190"
            y="265"
            fontFamily="Cormorant Garamond, serif"
            fontSize="220"
            fontWeight="400"
            fill="url(#goldFoilGradient)"
            textAnchor="middle"
          >
            N
          </text>
          <text
            x="310"
            y="265"
            fontFamily="Cormorant Garamond, serif"
            fontSize="220"
            fontWeight="400"
            fill="url(#goldFoilGradient)"
            textAnchor="middle"
          >
            O
          </text>
        </g>

        {/* Extended Horizontal Baseline Line trailing left and right */}
        <line
          x1="0"
          y1="225"
          x2="110"
          y2="225"
          stroke="url(#roseScriptGradient)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="390"
          y1="225"
          x2="500"
          y2="225"
          stroke="url(#roseScriptGradient)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Foreground Calligraphic Script Signature in Rosé Suave */}
        <text
          x="250"
          y="235"
          fontFamily="Cormorant Garamond, italic, serif"
          fontSize="56"
          fontStyle="italic"
          fontWeight="500"
          letterSpacing="1.5"
          fill="url(#roseScriptGradient)"
          textAnchor="middle"
        >
          Nívea Oliveira
        </text>
      </svg>
    </div>
  );
};
