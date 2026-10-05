export interface Project {
  id: string;
  title: string;
  category: 'branding' | 'editorial' | 'digital' | 'packaging';
  categoryLabel: string;
  year: string;
  client: string;
  summary: string;
  description: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  results: string;
  image: string;
  featured?: boolean;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'rose-gold-monograms',
    title: 'Coleção de Identidades & Logos Rosé Gold',
    category: 'branding',
    categoryLabel: 'Identidade & Branding',
    year: '2026',
    client: 'Marcas Pessoais & Boutiques de Luxo',
    summary: 'Conjunto de monogramas e logotipos desenvolvidos com acabamento em folha metálica de ouro rosê sobre papéis finos de algodão.',
    description: 'Estudo de marcas e símbolos autorais desenvolvido por Nívea Oliveira. O projeto foca em logomarcas que transmitem alta sofisticação através de linhas mínimas, proporções neoclássicas e contrastes sutis em tons rosê e dourado champanhe.',
    challenge: 'Criar marcas femininas e contemporâneas sem cair no lugar-comum de tons saturados ou elementos decorativos supérfluos.',
    solution: 'Paleta equilibrada entre o rosê suave e o ouro fosco, tipografia customizada com kerning editorial e testes de aplicação tátil.',
    deliverables: [
      'Desenvolvimento de monogramas exclusivos',
      'Versões vetoriais para impressão e telas (SVG/AI/PNG)',
      'Simulações 3D de relevo e hot stamping rosê',
      'Guia de aplicações mínimas e respiro de marca'
    ],
    results: 'Adoção imediata por profissionais liberais de alto padrão e marcas de bem-estar.',
    image: '/src/assets/images/showcase_rose_logos_1790951730858.jpg',
    featured: true
  },
  {
    id: 'maison-eleonore',
    title: 'Maison Éléonore',
    category: 'branding',
    categoryLabel: 'Identidade & Branding',
    year: '2025',
    client: 'Alta Joalheria & Gemas Raras',
    summary: 'Identidade de marca e sistema de papelaria em papel café textural com tipografia e relevo dourado champanhe.',
    description: 'Desenvolvimento integral do posicionamento de marca para uma joalheria de alta gama. O projeto abrangeu monograma tipográfico exclusivo, manual de marca completo, embalagens com toque aveludado e paleta equilibrada entre tons de marrom espresso e dourado fosco.',
    challenge: 'A marca necessitava de uma presença visual que expressasse herança artesanal e sofisticação atemporal, diferenciando-se de concorrentes genéricos.',
    solution: 'Criamos um monograma com proporções clássicas, apoiado em papéis com fibra aparente, gravação a quente em folha dourada e fotografia de produto com iluminação difusa.',
    deliverables: [
      'Logotipia e monograma proprietário',
      'Guia de identidade visual e aplicações',
      'Papelaria institucional com relevo seco e hot stamping',
      'Diretrizes de direção de arte para ensaios fotográficos'
    ],
    results: '+140% no tíquete médio das coleções de estreia e expansão internacional.',
    image: '/src/assets/images/project_luxury_branding_1790951222099.jpg',
    featured: true
  },
  {
    id: 'chronicle-arch',
    title: 'Chronicle Architecture & Space',
    category: 'editorial',
    categoryLabel: 'Design Editorial',
    year: '2024',
    client: 'Estúdio de Arquitetura Contemporânea',
    summary: 'Livro de mesa e compêndio de arquitetura contemporânea com capa em linho natural e acabamentos em bronze e ouro.',
    description: 'Concepção gráfica e direção de arte para monografia editorial de 320 páginas. O design prioriza o respiro do espaço em branco, tipografia serifa refinada e reprodução cromática de altíssima fidelidade.',
    challenge: 'Traduzir a escala monumental de projetos arquitetônicos em uma experiência tátil intimista e elegante no formato impresso.',
    solution: 'Grid editorial assimétrico que dialoga com os planos das construções, encadernação artesanal em costura aparente e cinta com tipografia metálica.',
    deliverables: [
      'Projeto gráfico completo de 320 páginas',
      'Curadoria fotográfica e tratamento cromático',
      'Especificação técnica de papéis finos e acabamentos',
      'Caixa protetora rígida personalizada'
    ],
    results: 'Vencedor de prêmio editorial e tiragem esgotada na pré-venda exclusiva.',
    image: '/src/assets/images/project_editorial_design_1790951232210.jpg',
    featured: true
  },
  {
    id: 'aura-capital',
    title: 'Aura Capital Wealth',
    category: 'digital',
    categoryLabel: 'Plataformas & UI/UX',
    year: '2025',
    client: 'Family Office & Gestão de Ativos',
    summary: 'Interface web exclusiva para gestão patrimonial privada, com navegação intuitiva em tons terrosos escuros e detalhes dourados.',
    description: 'Design de produto digital e arquitetura de informação para clientes de patrimônio elevado. O sistema apresenta dashboards analíticos que aliam discrição visual, segurança e altíssima clareza na visualização de dados financeiros.',
    challenge: 'Transformar relatórios densos de fundos e investimentos complexos em uma experiência digital serena, clara e convidativa.',
    solution: 'Ambiente dark refinado com paleta de café escuro, indicadores em ouro acetinado e hierarquia tipográfica com números tabulares impecáveis.',
    deliverables: [
      'Design System corporativo completo',
      'Mais de 40 telas responsivas em alta fidelidade',
      'Protótipos de alta precisão e microinterações',
      'Diretrizes de acessibilidade e segurança de dados'
    ],
    results: '98% de satisfação dos cotistas na migração para a nova plataforma.',
    image: '/src/assets/images/project_digital_platform_1790951243333.jpg',
    featured: true
  },
  {
    id: 'atelier-vernisse',
    title: 'Atelier Vernisse Botanicals',
    category: 'packaging',
    categoryLabel: 'Packaging & Luxo',
    year: '2024',
    client: 'Perfumaria e Cuidados da Pele',
    summary: 'Linha de frascos em vidro âmbar com tampas usinadas em dourado e rótulos serigrafados em relevo.',
    description: 'Criação da embalagem e identidade dos frascos de uma maison de cosméticos biológicos de luxo. A pesquisa volumétrica resultou em recipientes de peso nobre que harmonizam rusticidade e requinte.',
    challenge: 'Equilibrar a sustentabilidade dos materiais com o desejo de uma embalagem colecionável digna de penteadeiras finas.',
    solution: 'Vidro reciclado âmbar com proteção UV, tampas de metal escovado recarregáveis e rótulos de algodão puro resistentes à umidade.',
    deliverables: [
      'Modelagem e especificação 3D de frascos',
      'Design de embalagens secundárias e unboxing',
      'Rótulos com serigrafia tátil e carimbo em ouro',
      'Guia de produção industrial com fornecedores homologados'
    ],
    results: 'Crescimento de 210% nas vendas online e destaque em publicações de design.',
    image: '/src/assets/images/project_packaging_atelier_1790951253616.jpg',
    featured: true
  },
  {
    id: 'symphony-residences',
    title: 'Symphony Private Residences',
    category: 'branding',
    categoryLabel: 'Identidade & Branding',
    year: '2024',
    client: 'Empreendimento Imobiliário de Alto Padrão',
    summary: 'Posicionamento e branding para condomínio boutique com acabamento em tons de carvalho, bronze e dourado.',
    description: 'Branding imobiliário integral para residencial de luxo nos Jardins. Desenvolvemos desde o naming e narrativa de marca até o showroom sensorial e material para investidores privados.',
    challenge: 'Apresentar um imóvel de valor histórico preservado com comodidades ultra-modernas para compradores exigentes.',
    solution: 'Linguagem visual inspirada na arquitetura modernista brasileira com toques contemporâneos de ouro antigo e marrom nobre.',
    deliverables: [
      'Naming e narrativa de marca',
      'Identidade visual e catálogo capa dura em linho',
      'Comunicação ambiental do estande de vendas',
      'Landing page com agendamento privativo'
    ],
    results: '100% das unidades comercializadas em menos de 45 dias do lançamento.',
    image: '/src/assets/images/project_luxury_branding_1790951222099.jpg'
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'Todos os Projetos' },
  { id: 'branding', label: 'Identidade & Branding' },
  { id: 'editorial', label: 'Design Editorial' },
  { id: 'digital', label: 'Plataformas & UI/UX' },
  { id: 'packaging', label: 'Packaging & Luxo' },
] as const;
