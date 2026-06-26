export const IMAGES = {
  heroHome: "https://images.unsplash.com/photo-1547621869-1ae8a191cb5f?auto=format&fit=crop&w=2000&q=80",
  heroAbout: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=2000&q=80",
  heroWork: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=2000&q=80",
  heroTransparency: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=2000&q=80",
  heroHelp: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=2000&q=80",
  heroNews: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=2000&q=80",
  heroContact: "https://images.unsplash.com/photo-1524634126442-357e0eac3c14?auto=format&fit=crop&w=2000&q=80",
  community: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1600&q=80",
  drums: "https://images.unsplash.com/photo-1524650359799-842906ca1c06?auto=format&fit=crop&w=1600&q=80",
  dance: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=1600&q=80",
  children: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80",
  hands: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1600&q=80",
  elder: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=1600&q=80",
  workshop: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1600&q=80",
  culture: "https://images.unsplash.com/photo-1604431696980-07e518647b74?auto=format&fit=crop&w=1600&q=80",
  ceremony: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=1600&q=80",
  group: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&w=1600&q=80",
};

export const NAV = [
  { label: "Início", to: "/" },
  {
    label: "Quem Somos",
    to: "/quem-somos",
    children: [
      { label: "Quem Somos", to: "/quem-somos" },
      { label: "Nosso Culto", to: "/nosso-culto" },
      { label: "Transparência", to: "/transparencia" },
      { label: "Equipe", to: "/equipe" },
    ],
  },
  { label: "Projetos", to: "/projetos" },
  { label: "Notícias", to: "/noticias" },
  { label: "Galeria", to: "/galeria" },
  { label: "Contato", to: "/contato" },
];

export const PROJETOS = [
  {
    titulo: "Centro Curumim Tobossì",
    descricao: "Espaço dedicado a crianças e adolescentes, promovendo cultura, educação e fortalecimento da identidade.",
    imagem: IMAGES.children,
  },
  {
    titulo: "Maracatu Acorte",
    descricao: "Grupo cultural que preserva ritmos, danças e tradições populares afro-brasileiras.",
    imagem: IMAGES.drums,
  },
  {
    titulo: "Rota dos Voduns",
    descricao: "Roteiro de turismo cultural pelos espaços de memória e religiosidade da tradição jeje.",
    imagem: IMAGES.ceremony,
  },
  {
    titulo: "Filhos do Axé LGBTQIA+",
    descricao: "Acolhimento, escuta e fortalecimento de pessoas LGBTQIA+ dentro da tradição de terreiro.",
    imagem: IMAGES.hands,
  },
  {
    titulo: "Calendário Cultural",
    descricao: "Programação anual de festejos, celebrações, encontros e atividades abertas à comunidade.",
    imagem: IMAGES.dance,
  },
  {
    titulo: "Ações Comunitárias",
    descricao: "Distribuição de alimentos, campanhas de cidadania e mutirões em parceria com a vizinhança.",
    imagem: IMAGES.community,
  },
];

export const AREAS = [
  { titulo: "Cultura e Ancestralidade", texto: "Preservação das tradições, celebrações, saberes e práticas culturais de matriz africana.", imagem: IMAGES.ceremony, id: "cultura" },
  { titulo: "Projetos Sociais", texto: "Ações voltadas ao acolhimento, cidadania, educação, convivência e fortalecimento comunitário.", imagem: IMAGES.community, id: "projetos" },
  { titulo: "Ponto de Cultura", texto: "Atuação integrada à Política Nacional de Cultura Viva, fortalecendo expressões culturais e comunitárias.", imagem: IMAGES.workshop, id: "ponto" },
  { titulo: "Turismo Cultural", texto: "Experiências, visitas e roteiros que valorizam a memória, a religiosidade e a cultura afro-brasileira.", imagem: IMAGES.culture, id: "turismo" },
  { titulo: "Acervo e Memória", texto: "Registro, preservação e difusão da história, das imagens, dos documentos e das narrativas da instituição.", imagem: IMAGES.elder, id: "acervo" },
  { titulo: "Educação e Formação", texto: "Atividades formativas, oficinas e ações educativas para diferentes públicos.", imagem: IMAGES.workshop, id: "educacao" },
];

export type Noticia = {
  id: number;
  slug: string;
  categoria: string;
  titulo: string;
  resumo: string;
  conteudo: string[];
  imagem: string;
  galeria: string[];
  data: string;
  autor?: string;
};

const CONTEUDO_PADRAO = [
  "A Família Hùndésô segue firme em sua missão de preservar tradições afro-brasileiras, fortalecer vínculos comunitários e promover ações que valorizam a ancestralidade, a memória e a cultura popular.",
  "Esta ação reuniu integrantes da instituição, lideranças comunitárias, apoiadores e moradores da região em uma programação dedicada ao encontro, à escuta e à partilha de saberes.",
  "Durante o dia, foram realizadas atividades culturais, rodas de conversa, oficinas formativas e momentos de celebração, reforçando a importância das práticas tradicionais como ferramenta de educação, pertencimento e cuidado.",
  "A iniciativa também marcou o compromisso da Família Hùndésô com a continuidade dos seus projetos sociais, culturais e educativos, atendendo crianças, jovens, adultos e idosos em diferentes frentes de atuação.",
  "A organização agradece a presença, o engajamento e o apoio de todos os envolvidos, reafirmando a relevância da cultura de matriz africana na construção de uma sociedade mais justa, plural e respeitosa.",
  "Para conhecer outras ações e acompanhar a programação institucional, acompanhe nossos canais oficiais e fique por dentro das próximas iniciativas.",
];

const GALERIA_PADRAO = [
  IMAGES.community,
  IMAGES.drums,
  IMAGES.dance,
  IMAGES.workshop,
  IMAGES.ceremony,
  IMAGES.hands,
];

export const NOTICIAS: Noticia[] = [
  { id: 1, slug: "celebracao-tradicional-reune-comunidade", categoria: "Cultura", titulo: "Celebração tradicional reúne comunidade em torno do tambor", resumo: "Encontro anual marcou o calendário com apresentações, partilha e roda de conversa entre gerações.", conteudo: CONTEUDO_PADRAO, imagem: IMAGES.drums, galeria: GALERIA_PADRAO, data: "12 mar 2026" },
  { id: 2, slug: "centro-curumim-amplia-atividades", categoria: "Projetos", titulo: "Centro Curumim Tobossì amplia atividades para 2026", resumo: "Novas oficinas de percussão, dança e contação de histórias começam neste semestre.", conteudo: CONTEUDO_PADRAO, imagem: IMAGES.children, galeria: GALERIA_PADRAO, data: "28 fev 2026" },
  { id: 3, slug: "acervo-ganha-novo-espaco", categoria: "Memória", titulo: "Acervo institucional ganha novo espaço de exposição", resumo: "Documentos, fotografias e objetos históricos passam a integrar mostra permanente aberta ao público.", conteudo: CONTEUDO_PADRAO, imagem: IMAGES.elder, galeria: GALERIA_PADRAO, data: "15 fev 2026" },
  { id: 4, slug: "calendario-cultural-2026", categoria: "Eventos", titulo: "Calendário cultural anuncia datas das celebrações", resumo: "Confira a programação completa de festejos, encontros e atividades abertas ao público.", conteudo: CONTEUDO_PADRAO, imagem: IMAGES.dance, galeria: GALERIA_PADRAO, data: "02 fev 2026" },
  { id: 5, slug: "mutirao-cidadania", categoria: "Comunidade", titulo: "Mutirão reúne voluntários em ação de cidadania", resumo: "Atividade fortaleceu vínculos com a vizinhança e apoiou famílias da região.", conteudo: CONTEUDO_PADRAO, imagem: IMAGES.community, galeria: GALERIA_PADRAO, data: "20 jan 2026" },
  { id: 6, slug: "roda-conversa-memoria", categoria: "Memória", titulo: "Roda de conversa marca dia da memória ancestral", resumo: "Encontro reuniu gerações para partilha de histórias e saberes tradicionais.", conteudo: CONTEUDO_PADRAO, imagem: IMAGES.elder, galeria: GALERIA_PADRAO, data: "10 jan 2026" },
  { id: 7, slug: "oficina-percussao-jovens", categoria: "Cultura", titulo: "Oficina de percussão forma novos jovens tocadores", resumo: "Atividade integra programação formativa do Ponto de Cultura.", conteudo: CONTEUDO_PADRAO, imagem: IMAGES.drums, galeria: GALERIA_PADRAO, data: "05 jan 2026" },
  { id: 8, slug: "transparencia-relatorio-anual", categoria: "Transparência", titulo: "Relatório anual de atividades é publicado", resumo: "Documento detalha ações, parcerias, projetos e prestação de contas do último ciclo.", conteudo: CONTEUDO_PADRAO, imagem: IMAGES.workshop, galeria: GALERIA_PADRAO, data: "20 dez 2025" },
  { id: 9, slug: "festa-tradicional-fim-de-ano", categoria: "Eventos", titulo: "Festa tradicional encerra ciclo anual", resumo: "Comunidade celebrou conquistas, memórias e fortalecimento das tradições.", conteudo: CONTEUDO_PADRAO, imagem: IMAGES.ceremony, galeria: GALERIA_PADRAO, data: "15 dez 2025" },
  { id: 10, slug: "acao-cultural-com-a-comunidade", categoria: "Cultura", titulo: "Família Hùndésô realiza ação cultural com a comunidade", resumo: "Encontro fortaleceu vínculos comunitários, memória ancestral e valorização das tradições afro-brasileiras.", conteudo: CONTEUDO_PADRAO, imagem: IMAGES.group, galeria: GALERIA_PADRAO, data: "01 dez 2025" },
  { id: 11, slug: "parceria-cultural-anunciada", categoria: "Projetos", titulo: "Nova parceria fortalece projetos culturais", resumo: "Acordo amplia recursos para oficinas, atividades formativas e ações comunitárias.", conteudo: CONTEUDO_PADRAO, imagem: IMAGES.hands, galeria: GALERIA_PADRAO, data: "18 nov 2025" },
  { id: 12, slug: "encontro-de-lideres-tradicionais", categoria: "Comunidade", titulo: "Encontro reúne lideranças de comunidades tradicionais", resumo: "Evento promoveu intercâmbio de experiências, saberes e estratégias de fortalecimento coletivo.", conteudo: CONTEUDO_PADRAO, imagem: IMAGES.culture, galeria: GALERIA_PADRAO, data: "05 nov 2025" },
];

export const HERO_SLIDES = [
  {
    image: IMAGES.community,
    eyebrow: "Família Hùndésô",
    title: "Ancestralidade, cultura e",
    highlight: "comunidade",
    subtitle: "A Família Hùndésô preserva tradições de matriz africana e fortalece ações culturais, sociais e educativas junto à comunidade.",
    buttonLabel: "Conheça nossa história",
    buttonLink: "/quem-somos",
  },
  {
    image: IMAGES.drums,
    eyebrow: "Memória viva",
    title: "Saberes que atravessam",
    highlight: "gerações",
    subtitle: "Valorizamos a memória, a oralidade, os territórios tradicionais e a transmissão dos saberes ancestrais.",
    buttonLabel: "Ver projetos",
    buttonLink: "/projetos",
  },
  {
    image: IMAGES.ceremony,
    eyebrow: "Apoie a missão",
    title: "Apoie essa",
    highlight: "missão",
    subtitle: "Com sua contribuição, fortalecemos projetos sociais, culturais, educativos e ações de preservação da memória ancestral.",
    buttonLabel: "Apoie agora",
    buttonLink: "/como-ajudar",
  },
];

export const TIMELINE = [
  { ano: "—", titulo: "Fundação", texto: "Início da trajetória da Família Hùndésô, a partir da força ancestral e do compromisso com a tradição." },
  { ano: "—", titulo: "Reconhecimento institucional", texto: "Formalização da organização e estruturação das primeiras ações culturais e sociais." },
  { ano: "—", titulo: "Consolidação cultural", texto: "Ampliação das atividades, projetos e celebrações em diálogo com a comunidade." },
  { ano: "—", titulo: "Ponto de Cultura", texto: "Atuação reconhecida no âmbito da Política Nacional de Cultura Viva." },
  { ano: "Hoje", titulo: "Projetos em andamento", texto: "Atuação contínua em cultura, ancestralidade, educação, memória e cuidado comunitário." },
];