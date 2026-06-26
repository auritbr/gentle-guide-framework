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

export const NOTICIAS = [
  { categoria: "Cultura", titulo: "Celebração tradicional reúne comunidade em torno do tambor", resumo: "Encontro anual marcou o calendário com apresentações, partilha e roda de conversa entre gerações.", imagem: IMAGES.drums, data: "12 mar 2025" },
  { categoria: "Projetos", titulo: "Centro Curumim Tobossì amplia atividades para 2025", resumo: "Novas oficinas de percussão, dança e contação de histórias começam neste semestre.", imagem: IMAGES.children, data: "28 fev 2025" },
  { categoria: "Memória", titulo: "Acervo institucional ganha novo espaço de exposição", resumo: "Documentos, fotografias e objetos históricos passam a integrar mostra permanente aberta ao público.", imagem: IMAGES.elder, data: "15 fev 2025" },
];

export const TIMELINE = [
  { ano: "—", titulo: "Fundação", texto: "Início da trajetória da Família Hùndésô, a partir da força ancestral e do compromisso com a tradição." },
  { ano: "—", titulo: "Reconhecimento institucional", texto: "Formalização da organização e estruturação das primeiras ações culturais e sociais." },
  { ano: "—", titulo: "Consolidação cultural", texto: "Ampliação das atividades, projetos e celebrações em diálogo com a comunidade." },
  { ano: "—", titulo: "Ponto de Cultura", texto: "Atuação reconhecida no âmbito da Política Nacional de Cultura Viva." },
  { ano: "Hoje", titulo: "Projetos em andamento", texto: "Atuação contínua em cultura, ancestralidade, educação, memória e cuidado comunitário." },
];