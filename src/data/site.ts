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

export const PILARES = [
  { titulo: "Cultura", texto: "Valorizar, salvaguardar e difundir a memória, os saberes e o patrimônio cultural afro-brasileiro, afro-indígena e de matriz africana." },
  { titulo: "Assistência social", texto: "Desenvolver ações de acolhimento, suporte material, escuta e fortalecimento comunitário para famílias em situação de vulnerabilidade social." },
  { titulo: "Direitos humanos", texto: "Combater o racismo estrutural, o racismo religioso, a intolerância e as violações de direitos, promovendo cidadania, dignidade e justiça social." },
  { titulo: "Educação", texto: "Promover o acesso ao conhecimento, à formação cidadã e à valorização da história e cultura afro-brasileira e indígena como ferramentas de emancipação social." },
  { titulo: "Saúde", texto: "Incentivar o cuidado integral, articulando saúde comunitária, bem-estar, prevenção e saberes tradicionais." },
];

export const POLITICAS = [
  {
    titulo: "Cultura",
    paragrafos: [
      "A cultura é uma das principais frentes de atuação da organização. Reconhecida como Ponto de Cultura, a Família Hùndésô atua na preservação das tradições ancestrais, na difusão da cultura afro-brasileira e no fortalecimento da economia criativa em territórios rurais e periféricos.",
      "Sua participação em editais, conselhos e ações culturais contribui para descentralizar recursos, ampliar o acesso à cultura e valorizar expressões tradicionais.",
    ],
  },
  {
    titulo: "Direitos humanos e combate ao racismo",
    paragrafos: [
      "A instituição atua no enfrentamento ao racismo estrutural, ao racismo religioso e às diversas formas de intolerância. Suas ações fortalecem a cidadania, a liberdade religiosa, a diversidade sexual e de gênero, a dignidade humana e o direito à existência plena das comunidades tradicionais.",
    ],
  },
  {
    titulo: "Educação",
    paragrafos: [
      "No campo educacional, a Família Hùndésô promove ações socioeducativas com ênfase na valorização da história e cultura afro-brasileira e indígena, em diálogo com as Leis nº 10.639/03 e nº 11.645/08.",
      "A atuação busca combater preconceitos desde a base, promover letramento racial e histórico e aproximar escolas, educadores e estudantes dos saberes tradicionais.",
    ],
  },
  {
    titulo: "Assistência social e saúde",
    paragrafos: [
      "Na assistência social, a instituição atua junto a famílias em situação de vulnerabilidade, promovendo acolhimento, apoio comunitário, soberania alimentar, geração de renda e acesso a direitos.",
      "Na saúde, a organização pauta o cuidado integral, o bem-estar físico e mental, o combate ao racismo institucional e o respeito aos saberes tradicionais e de matriz africana.",
    ],
  },
];

export type ProjetoSecao = { titulo?: string; paragrafos: string[] };
export type ProjetoCard = { titulo: string; texto?: string };
export type ProjetoCardGrupo = { titulo?: string; cards: ProjetoCard[] };

export type ProjetoDetalhe = {
  slug: string;
  titulo: string;
  label: string;
  resumo: string;
  subtitulo: string;
  imagem: string;
  secoes: ProjetoSecao[];
  cardGrupos?: ProjetoCardGrupo[];
  galeria?: string[];
};

export const PROJETOS_LISTA: ProjetoDetalhe[] = [
  {
    slug: "ponto-de-cultura",
    titulo: "Ponto de Cultura",
    label: "Cultura Viva",
    resumo:
      "O Ponto de Cultura Família Hùndésô fortalece ações de memória, ancestralidade, cultura afro-indígena, educação, afroturismo e cidadania ativa. A iniciativa valoriza os saberes tradicionais e amplia o acesso da comunidade a atividades culturais e formativas.",
    subtitulo:
      "Cultura Viva é resistência e transformação social por meio da arte, da memória e da ancestralidade.",
    imagem: IMAGES.culture,
    secoes: [
      {
        titulo: "Cultura Viva",
        paragrafos: [
          "A Família Hùndésô não é apenas um espaço de tradição ancestral. É um território de resistência, memória e continuidade.",
          "Ao longo de sua trajetória, a instituição tem se dedicado à preservação das culturas, saberes e práticas deixadas pelos ancestrais, que, com coragem, fé e resistência, mantiveram viva a essência de seu povo.",
          "Cultivar aquilo que vem das raízes africanas, dos povos originários e das comunidades tradicionais é afirmar a identidade, fortalecer a memória coletiva e abrir caminhos para as futuras gerações.",
          "Em 2024, a Família Hùndésô foi aprovada com o projeto Ponto de Cultura Família Hùndésô, realizado com recursos da Política Nacional Aldir Blanc (PNAB), do Governo Federal, por meio do Ministério da Cultura, e operacionalizado pelo Governo de Alagoas, através da Secretaria de Estado da Cultura e Economia Criativa de Alagoas.",
          "O projeto reúne oficinas, ações de afroturismo e diversas atividades culturais que celebram as tradições afro-indígenas, fortalecendo a identidade, a cidadania e o protagonismo comunitário em uma região historicamente marcada pelo isolamento e pela ausência de políticas públicas.",
          "Em 2025, a Família Hùndésô recebeu a certificação do Ministério da Cultura como Ponto de Cultura Rural, ID 1566444, em consonância com a Política Nacional de Cultura Viva, instituída pela Lei nº 13.018/2014.",
          "Esse reconhecimento fortalece ainda mais o compromisso da instituição com a ancestralidade, a cultura tradicional, a cidadania ativa e o desenvolvimento comunitário.",
          "Ser um Ponto de Cultura é reafirmar a missão de promover educação, arte, memória e identidade em territórios historicamente esquecidos.",
          "Cultura Viva é resistência e transformação social por meio da arte, da memória e da ancestralidade.",
        ],
      },
    ],
    cardGrupos: [
      {
        titulo: "Destaques",
        cards: [
          { titulo: "Memória" },
          { titulo: "Ancestralidade" },
          { titulo: "Cultura afro-indígena" },
          { titulo: "Cidadania ativa" },
          { titulo: "Ponto de Cultura Rural" },
          { titulo: "Política Nacional de Cultura Viva" },
        ],
      },
    ],
  },
  {
    slug: "sopao-solidario",
    titulo: "Sopão Solidário",
    label: "Assistência social",
    resumo:
      "O Sopão Solidário da Família Hùndésô é uma ação de acolhimento e partilha voltada às famílias em situação de vulnerabilidade social. Mais do que oferecer alimento, o projeto fortalece vínculos comunitários, promove cuidado e reafirma a solidariedade como prática coletiva.",
    subtitulo:
      "Uma ação de união, cuidado e partilha para famílias da zona rural em situação de vulnerabilidade.",
    imagem: IMAGES.community,
    secoes: [
      {
        paragrafos: [
          "O Sopão Solidário da Família Hùndésô é uma ação de união, cuidado e partilha que alimenta o corpo e fortalece a fé de quem vive no campo.",
          "A iniciativa é um apoio importante para famílias da zona rural de Joaquim Gomes, em Alagoas, que enfrentam situações de vulnerabilidade social, insegurança alimentar e isolamento geográfico.",
          "Mais do que distribuir alimento, o Sopão Solidário cria um momento de encontro, escuta e fortalecimento comunitário. Cada ação reafirma o compromisso da Família Hùndésô com a solidariedade, a dignidade humana e o cuidado com as pessoas que mais precisam.",
          "O projeto nasce da compreensão de que a alimentação é um direito fundamental e que a partilha é uma prática ancestral de cuidado coletivo.",
          "Por meio dessa iniciativa, a Família Hùndésô busca amenizar dificuldades imediatas, fortalecer vínculos e levar acolhimento às famílias do território.",
        ],
      },
    ],
    cardGrupos: [
      {
        titulo: "Destaques",
        cards: [
          { titulo: "Alimentação" },
          { titulo: "Partilha" },
          { titulo: "Acolhimento" },
          { titulo: "Fortalecimento comunitário" },
          { titulo: "Dignidade humana" },
        ],
      },
    ],
  },
  {
    slug: "juridico",
    titulo: "Jurídico",
    label: "Direitos e cidadania",
    resumo:
      "A frente de apoio jurídico da Família Hùndésô contribui para ampliar o acesso da comunidade à informação, à cidadania e aos direitos. Por meio de parcerias e ações específicas, a instituição atua como ponte entre famílias vulneráveis e serviços de orientação jurídica.",
    subtitulo:
      "Apoio jurídico, orientação e acesso a direitos para comunidades em situação de vulnerabilidade.",
    imagem: IMAGES.hands,
    secoes: [
      {
        titulo: "Serviços jurídicos",
        paragrafos: [
          "A Família Hùndésô auxilia a comunidade no acesso a serviços judiciais e oferece apoio jurídico voltado especialmente a grupos em situação de vulnerabilidade.",
          "Essa frente de atuação é essencial para garantir cidadania, orientação e acesso a direitos para pessoas que vivem em territórios isolados ou que enfrentam diferentes formas de violação.",
        ],
      },
      {
        titulo: "Como funciona o atendimento jurídico?",
        paragrafos: ["A atuação jurídica da instituição acontece principalmente de duas formas:"],
      },
    ],
    cardGrupos: [
      {
        cards: [
          {
            titulo: "Ponte para a justiça",
            texto:
              "A Família Hùndésô contribui no mapeamento das necessidades da comunidade e no direcionamento adequado das pessoas para órgãos como a Defensoria Pública e outros serviços do sistema de justiça.",
          },
          {
            titulo: "Ações e mutirões especiais",
            texto:
              "A instituição também abre as portas de sua sede, no Povoado Riacho Branco, para receber defensores públicos e parceiros em ações específicas. Nesses encontros, são realizadas rodas de conversa, atendimentos jurídicos gratuitos e orientações sobre direitos, ampliando o acesso da população local à informação e à cidadania.",
          },
        ],
      },
    ],
  },
  {
    slug: "natal-da-gente",
    titulo: "Natal da Gente",
    label: "Solidariedade",
    resumo:
      "O Natal da Gente é uma ação de solidariedade ativa que leva doações, escuta, afeto e esperança a famílias do campo em situação de vulnerabilidade social. O projeto fortalece os laços comunitários e reafirma o compromisso da instituição com o cuidado coletivo.",
    subtitulo:
      "Doações, escuta, afeto e esperança para famílias do campo em situação de vulnerabilidade.",
    imagem: IMAGES.group,
    secoes: [
      {
        paragrafos: [
          "O Natal da Gente é um projeto de solidariedade ativa promovido pela Família Hùndésô.",
          "A iniciativa leva doações, escuta, afeto e esperança a famílias do campo em situação de vulnerabilidade social.",
          "Essa ação nasce com o objetivo de romper o isolamento geográfico e social vivido por muitas comunidades rurais. Mais do que entregar doações, o projeto busca oferecer acolhimento, fé e presença às famílias que enfrentam caminhos de difícil acesso e dificuldades cotidianas.",
          "O Natal da Gente transforma a solidariedade em ponte de união, mostrando que nenhuma comunidade deve ser esquecida.",
          "A iniciativa busca garantir um momento de dignidade, alegria e apoio social, fortalecendo os laços comunitários e reafirmando a força da coletividade.",
        ],
      },
    ],
    cardGrupos: [
      {
        titulo: "Destaques",
        cards: [
          { titulo: "Doações" },
          { titulo: "Escuta" },
          { titulo: "Afeto" },
          { titulo: "Esperança" },
          { titulo: "Apoio social" },
          { titulo: "Coletividade" },
        ],
      },
    ],
  },
  {
    slug: "alfabetizacao",
    titulo: "Alfabetização",
    label: "Educação",
    resumo:
      "O projeto de alfabetização promove acesso à leitura, à escrita e à inclusão digital para jovens, adultos e pessoas em situação de vulnerabilidade, atendendo tanto a zona rural quanto comunidades periféricas de Maceió.",
    subtitulo:
      "Leitura, escrita, inclusão digital e cidadania para jovens, adultos e comunidades em situação de vulnerabilidade.",
    imagem: IMAGES.workshop,
    secoes: [
      {
        paragrafos: [
          "As aulas de alfabetização da Família Hùndésô atendem pessoas da zona rural e também das periferias de Maceió.",
          "A instituição compreende que a falta de oportunidades afeta tanto quem vive em territórios geograficamente isolados quanto quem está nas comunidades vulneráveis da capital.",
          "O objetivo é claro: resgatar oportunidades e fortalecer a dignidade por meio da educação.",
        ],
      },
    ],
    cardGrupos: [
      {
        cards: [
          {
            titulo: "Alfabetização",
            texto:
              "Promover o acesso à leitura e à escrita como caminhos de autonomia, cidadania e inclusão social.",
          },
          {
            titulo: "Inclusão digital",
            texto:
              "Oferecer aulas de informática com computadores doados pelo Ministério das Comunicações, ampliando o acesso ao mundo digital e às novas possibilidades de aprendizagem.",
          },
          {
            titulo: "Acolhimento",
            texto:
              "Criar um ambiente seguro, respeitoso e acolhedor para o aprendizado de jovens e adultos, valorizando o tempo, a história e a trajetória de cada pessoa.",
          },
        ],
      },
    ],
  },
  {
    slug: "bazar-da-gente",
    titulo: "Bazar da Gente",
    label: "Solidariedade e sustentabilidade",
    resumo:
      "O Bazar da Gente mobiliza doações de roupas, calçados, acessórios, brinquedos e utensílios em bom estado, promovendo solidariedade, consumo consciente, sustentabilidade e apoio direto às comunidades atendidas.",
    subtitulo:
      "Doações em bom estado que geram apoio social, consumo consciente e cuidado comunitário.",
    imagem: IMAGES.hands,
    secoes: [
      {
        paragrafos: [
          "O Bazar da Gente é uma iniciativa voltada ao apoio das comunidades atendidas pela Família Hùndésô, especialmente famílias da zona rural de Joaquim Gomes, em Alagoas.",
          "Realizar ou apoiar o bazar gera impactos sociais, comunitários e ambientais importantes.",
        ],
      },
      {
        titulo: "O que você pode doar?",
        paragrafos: ["Tudo que estiver em bom estado de conservação pode fazer a diferença para quem mais precisa."],
      },
    ],
    cardGrupos: [
      {
        titulo: "Impactos do bazar",
        cards: [
          {
            titulo: "Ação social direta",
            texto:
              "Roupas, calçados, utensílios e outros itens em bom estado ganham uma nova vida e chegam a famílias que enfrentam isolamento geográfico, vulnerabilidade social e falta de recursos.",
          },
          {
            titulo: "Captação de recursos",
            texto:
              "Os valores simbólicos arrecadados nas vendas podem ser revertidos para a compra de alimentos e para a manutenção de projetos locais desenvolvidos pela Família Hùndésô no Povoado Riacho Branco.",
          },
          {
            titulo: "Consciência ambiental",
            texto:
              "Ao doar itens em bom estado, a comunidade contribui para combater o descarte excessivo, reduzir a produção de lixo e estimular o consumo consciente.",
          },
        ],
      },
      {
        titulo: "Itens para doação",
        cards: [
          {
            titulo: "Vestuário",
            texto:
              "Roupas masculinas, femininas e infantis, especialmente peças confortáveis para o dia a dia no campo.",
          },
          {
            titulo: "Calçados",
            texto: "Tênis, sandálias e sapatos de todos os tamanhos.",
          },
          {
            titulo: "Acessórios",
            texto: "Cintos, bolsas, mochilas, bonés e outros itens de uso cotidiano.",
          },
          {
            titulo: "Infantil",
            texto: "Brinquedos, jogos e livros educativos para crianças da região.",
          },
        ],
      },
    ],
  },
  {
    slug: "comunidade-riacho-branco",
    titulo: "Comunidade Riacho Branco",
    label: "Território e memória",
    resumo:
      "A Comunidade Riacho Branco é um território afro-indígena localizado na Região Serrana dos Quilombos, na zona rural de Joaquim Gomes, em Alagoas. Sua história é marcada pela resistência, pela ancestralidade e pela preservação da memória oral, da cultura e dos modos de vida tradicionais.",
    subtitulo:
      "Um território afro-indígena de memória, ancestralidade, resistência e continuidade entre gerações.",
    imagem: IMAGES.elder,
    secoes: [
      {
        titulo: "Apresentação da Comunidade Riacho Branco",
        paragrafos: [
          "A Comunidade Riacho Branco é formada por 65 famílias afro-indígenas que preservam, há mais de dois séculos, uma trajetória marcada pela resistência, pela ancestralidade e pela profunda conexão com a natureza.",
          "Localizada na Região Serrana dos Quilombos, na zona rural do município de Joaquim Gomes, em Alagoas, a comunidade mantém vivas tradições culturais, espirituais e modos de vida transmitidos entre gerações.",
        ],
      },
      {
        titulo: "A origem do Riacho Branco",
        paragrafos: [
          "Segundo relatos dos mais velhos, Riacho Branco existe há mais de 200 anos. A família Leodino é lembrada como a primeira a chegar e se estabelecer no território.",
          "De acordo com a memória familiar, um homem chamado João do Santo teria trabalhado abrindo terras junto de um homem conhecido como “Dom Pedro”. Ao final do trabalho, Dom Pedro teria oferecido dinheiro ou um pedaço de terra como pagamento. João do Santo escolheu a terra para criar sua família, e o lugar passou a ser conhecido como Sítio Riacho Branco.",
          "Outra narrativa sobre a origem do nome da comunidade afirma que ele surgiu a partir de uma nascente que brota debaixo de um antigo gameleiro, formando um riacho de águas claras. Dessa imagem teria nascido o nome Riacho Branco.",
          "O gameleiro permanece até hoje como símbolo ancestral da comunidade, reconhecido pelos moradores como a árvore mais antiga do território.",
          "Também há, na comunidade, um antigo pé de orobô, guardado na memória local como parte importante da paisagem e da ancestralidade do lugar.",
        ],
      },
      {
        titulo: "Cultura popular e memória oral",
        paragrafos: [
          "A cultura popular da comunidade é preservada por meio das histórias, cantos, lembranças e ensinamentos transmitidos oralmente entre gerações.",
          "Uma moradora recorda músicas cantadas por seu marido, inspiradas no gameleiro e na vida do sertão, como:",
          "“Alô, gameleiro pesado...”",
          "“O poema é nordestino...”",
          "“Vaqueiro chamando gado...”",
          "Grande parte das memórias sobre a história local vem dos ensinamentos dos mais velhos, especialmente de Antônio Laurentino, lembrado como um grande contador de histórias da região.",
          "Segundo esses relatos, antigamente o território era “todo mato”, existindo “tocas” ou buracos onde negros antigos se escondiam ou moravam. Também são lembradas figuras conhecidas por apelidos, como “Pé de Espeto”, “Nego Nú”, “Nego Fujão” e “Negro Caboclo”.",
          "Essas histórias permanecem vivas como parte da memória coletiva da comunidade e revelam a importância da tradição oral na preservação da identidade do povo de Riacho Branco.",
          "Os moradores demonstram profundo respeito pelos antigos, reconhecendo neles os guardiões da memória e da história do território.",
        ],
      },
      {
        titulo: "Identidade, território e modos de vida",
        paragrafos: [
          "Ao longo do tempo, a comunidade construiu sua identidade a partir da união de saberes afrodescendentes e indígenas, fortalecendo laços comunitários e práticas ancestrais de cuidado com a terra.",
          "Atualmente, as famílias vivem principalmente da agricultura e do auxílio de programas do Governo Federal. O cultivo da terra representa não apenas uma fonte de sustento, mas também a preservação de conhecimentos tradicionais relacionados à alimentação, à espiritualidade e à convivência harmoniosa com o meio ambiente.",
          "Riacho Branco está situada em uma região de grande riqueza natural, cercada por serras, matas nativas, nascentes, rios e animais silvestres. O território integra o cenário da Reserva Ecológica de Murici, importante área de preservação ambiental de Alagoas, reconhecida por sua biodiversidade e beleza cênica.",
          "O acesso à comunidade acontece pela BR-101, passando pelo território indígena Wassu Cocal e pelo Sítio Canto, até chegar a Riacho Branco. São aproximadamente 15 quilômetros de estrada de barro a partir da rodovia e cerca de 30 quilômetros da cidade de Joaquim Gomes.",
          "Durante o percurso, o visitante atravessa paisagens exuberantes, marcadas por vegetação abundante, nascentes e histórias que revelam a riqueza cultural da região.",
        ],
      },
      {
        titulo: "Espiritualidade e fortalecimento comunitário",
        paragrafos: [
          "No coração da comunidade está o Hùnkpámè Ayónó Hùndésô, terreiro de Candomblé do culto Fonbe, da tradição Jeje Mahi, que também atua como Organização da Sociedade Civil de caráter social, cultural e ancestral.",
          "Por meio do Ponto de Cultura Família Hùndésô, são desenvolvidas ações voltadas ao fortalecimento comunitário, à promoção da cultura afro-indígena e à valorização dos saberes ancestrais.",
          "Entre as iniciativas desenvolvidas, destaca-se o afroturismo comunitário, que promove experiências de imersão cultural, espiritual e ecológica. Os visitantes têm a oportunidade de conhecer sabores, saberes e tradições locais, além de adquirir produtos naturais produzidos pelas famílias da comunidade, como frutas, verduras, peixes e alimentos cultivados de forma tradicional.",
          "Outro importante atrativo é a experiência ancestral dos Caminhos dos Voduns, uma trilha ecológica e sagrada que conecta natureza, espiritualidade e memória ancestral. O percurso proporciona aos visitantes uma vivência de conexão com a mata, com os elementos sagrados da tradição Jeje Mahi e com a história preservada pela comunidade.",
        ],
      },
      {
        titulo: "Um território de memória e resistência",
        paragrafos: [
          "Mais do que um território, Riacho Branco representa um espaço de memória, resistência e preservação cultural.",
          "A comunidade segue fortalecendo suas raízes, valorizando sua ancestralidade e construindo caminhos de autonomia, sustentabilidade e reconhecimento para as futuras gerações.",
          "Riacho Branco não é apenas um lugar de moradia. É um território de memória, família e continuidade entre gerações.",
          "As informações históricas, culturais e territoriais da comunidade estão guardadas e protegidas no acervo da instituição.",
        ],
      },
    ],
  },
  {
    slug: "rota-dos-voduns",
    titulo: "Rota dos Voduns",
    label: "Afroturismo rural",
    resumo:
      "A Rota dos Voduns é uma experiência de afroturismo rural e comunitário que apresenta a história, os símbolos, os espaços sagrados e as tradições do Hùnkpámè Ayónó Hùndésô, localizado na Comunidade Quilombola Riacho Branco.",
    subtitulo:
      "Uma experiência de afroturismo rural e comunitário pela história, memória, natureza e espiritualidade do Hùnkpámè Ayónó Hùndésô.",
    imagem: IMAGES.ceremony,
    secoes: [
      {
        titulo: "Afroturismo rural",
        paragrafos: [
          "A Rota dos Voduns é uma imersão cultural na história da roça de Candomblé Jeje, o Hùnkpámè Ayónó Hùndésô, localizado na Comunidade Riacho Branco, na Região Serrana dos Quilombos, zona rural do município de Joaquim Gomes, em Alagoas.",
          "A experiência apresenta rituais, símbolos, espaços sagrados, memórias e saberes que integram a trajetória da instituição e da comunidade.",
        ],
      },
      {
        titulo: "Hùnkpámè Ayónó Hùndésô",
        paragrafos: [
          "O Hùnkpámè Ayónó Hùndésô nasceu como um espaço de preservação das tradições afro-brasileiras, especialmente da cultura Jeje-Dahomé, dos Voduns e dos Encantados da Jurema Sagrada.",
          "Fundado em 2003, o terreiro tornou-se um importante centro religioso, cultural, social e educacional, dedicado à valorização da ancestralidade africana e afro-indígena em Alagoas.",
          "Mais do que uma casa de culto, o Hùnkpámè representa um território de resistência contra o racismo religioso, a intolerância e a invisibilização das tradições de matriz africana.",
          "É também um espaço de fortalecimento da identidade negra, da memória ancestral e da promoção dos direitos humanos, desenvolvendo ações culturais, educativas e sociais voltadas para comunidades urbanas e rurais.",
        ],
      },
      {
        titulo: "Espaço sagrado e memória ancestral",
        paragrafos: [
          "O espaço sagrado abriga trilhas dos Voduns, áreas de preservação ambiental, esculturas ritualísticas, acervos históricos, manifestações culturais e saberes transmitidos entre gerações.",
          "A floresta sagrada do terreiro é compreendida como lugar de conexão entre os seres humanos, a natureza e as divindades, preservando conhecimentos ancestrais fundamentais para a continuidade das tradições religiosas afro-brasileiras.",
          "Sua importância para Alagoas ultrapassa o campo religioso. A instituição tornou-se referência na preservação da memória afro-brasileira, integrando cultura, educação, cidadania, geração de renda e turismo de base comunitária.",
          "Em 2025, a Família Hùndésô foi certificada como Ponto de Cultura Rural, fortalecendo ainda mais sua atuação na promoção das expressões culturais afro-indígenas e no desenvolvimento comunitário.",
        ],
      },
      {
        titulo: "Trilhas dos Voduns",
        paragrafos: [
          "O afroturismo desenvolvido pela comunidade busca proporcionar uma experiência autêntica de imersão na ancestralidade afro-brasileira, valorizando a cultura local e fortalecendo a economia das famílias quilombolas, indígenas e agricultoras da região.",
          "Além da visitação ao terreiro, os roteiros podem incluir artesanato, gastronomia tradicional, manifestações culturais, vivências ancestrais e contato com a natureza da Região Serrana dos Quilombos.",
          "Por meio da Rota dos Voduns, visitantes têm a oportunidade de conhecer a história do povoado Riacho Branco, suas famílias afro-indígenas, seus artesãos, suas tradições e o universo sagrado dos Voduns e dos Encantados da Jurema.",
          "Todas as experiências devem acontecer com respeito aos protocolos religiosos, culturais e comunitários da Família Hùndésô.",
        ],
      },
      {
        titulo: "Patrimônio cultural e espiritual",
        paragrafos: [
          "O Hùnkpámè Ayónó Hùndésô se consolida como um importante patrimônio cultural e espiritual de Alagoas, unindo fé, memória, cultura, educação, natureza e turismo de base comunitária.",
          "A Rota dos Voduns contribui para a valorização da história e da identidade do povo negro e afro-indígena, fortalecendo a comunidade, preservando saberes tradicionais e apresentando ao público uma experiência marcada pela ancestralidade, pelo respeito e pela continuidade.",
        ],
      },
    ],
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