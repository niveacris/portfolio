export interface LogoItem {
  id: string;
  name: string;
  type: string;
  segment: string;
  concept: string;
  symbol: string; // SVG or glyph representation
  accent: 'rose' | 'gold' | 'champagne';
}

export const CURATED_LOGOS: LogoItem[] = [
  {
    id: 'logo-atelier-no',
    name: 'Atelier Nívea Oliveira',
    type: 'Monograma & Selo Pessoal',
    segment: 'Direção Criativa & Design de Luxo',
    concept: 'Entrelaçamento das iniciais "N" e "O" com traços de proporção áurea e remates geométricos clássicos.',
    symbol: 'N·O',
    accent: 'rose'
  },
  {
    id: 'logo-aurum-botanica',
    name: 'Aurum Botanica',
    type: 'Marca Tipográfica & Emblema',
    segment: 'Perfumaria de Nicho & Óleos Essenciais',
    concept: 'Tipografia serifada de alto contraste combinada com arco celestial e folhagem esculpida.',
    symbol: 'AB',
    accent: 'gold'
  },
  {
    id: 'logo-velar-couture',
    name: 'VÉLAR Haute Couture',
    type: 'Wordmark Contemporâneo',
    segment: 'Alfaiataria & Vestuário Sob Medida',
    concept: 'Kerning ampliado, letras geométricas com corte afiado inspirado em tesouras artesanais de alfaiate.',
    symbol: 'V',
    accent: 'rose'
  },
  {
    id: 'logo-elysian-estate',
    name: 'Elysian Estates',
    type: 'Brasão Arquitetônico',
    segment: 'Residências Privadas & Empreendimentos',
    concept: 'Símbolo em linhas finas unindo elementos estruturais modernos e simetria neoclássica.',
    symbol: 'EE',
    accent: 'gold'
  },
  {
    id: 'logo-solene-clinic',
    name: 'Solène Dermatologia',
    type: 'Selo Minimalista',
    segment: 'Medicina Estética & Longevidade',
    concept: 'Forma circular orgânica que traduz harmonia, renovação celular e precisão científica discreta.',
    symbol: 'S',
    accent: 'champagne'
  },
  {
    id: 'logo-lumina-capital',
    name: 'Lúmina Private Equity',
    type: 'Monograma Geométrico',
    segment: 'Gestão de Patrimônio & Fundos Globais',
    concept: 'Hexágono facetado que evoca solidez, refração de luz e perenidade de legado familiar.',
    symbol: 'L',
    accent: 'gold'
  }
];
