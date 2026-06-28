import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { IMAGES } from "@/data/site";

export const Route = createFileRoute("/projetos/presidente")({
  head: () => ({
    meta: [
      { title: "Página do Presidente — Rei Doté Elias — Família Hùndésô" },
      { name: "description", content: "Trajetória de liderança religiosa, cultural e social do Rei Doté Elias em Alagoas." },
    ],
  }),
  component: PresidentePage,
});

const INFANCIA = [
  "Everaldo Geraldo de Melo, conhecido carinhosamente como “caboclinho Elias”, nasceu no bairro do Pina, em Boa Viagem, Recife, no ano de 1978. Filho de José Geraldo de Melo e Marta Maria das Dores, ambos hoje em memória, veio ao mundo em uma época marcada pelo regime militar e por fortes tradições cristãs dentro de sua família. Caçula de sua mãe, Elias cresceu entre silêncios, afetos e desafios, sendo filho de pais surdos e carregando desde cedo uma sensibilidade singular.",
  "Sua mãe, dona de casa dedicada, contava com o apoio de sua mãe, dona Otávia, membra da igreja Batista do Pina, mulher de fé e presença marcante em sua criação. Naturais de Palmeira dos Índios, em Alagoas, mãe e avó materna cultivavam fortes raízes indígena e um profundo apego familiar. Já seu pai, pernambucano de Recife, trabalhava como chefe de cozinha da Marina de Pernambuco e posteriormente da antiga Celpe — Companhia Energética de Pernambuco.",
  "Antes mesmo de crescer, Elias já carregava uma pequena disputa afetiva em torno do próprio nome. Sua avó desejava registrá-lo como Elias, mas seu pai, católico, escolheu o nome Everaldo. Ainda assim, para sua mãe e avó, ele sempre seria o querido “caboclinho Elias”, nome que carregava carinho, identidade e pertencimento.",
  "Na infância, conviveu parte do tempo com o pai, enfrentando diferenças dentro do próprio ambiente familiar. Menino tímido, delicado e de comportamento considerado afeminado para os padrões rígidos da época, também percebia contrastes ligados à cor da pele e à forma como era visto. Enquanto seu pai tinha pele clara, Elias possuía pele escura e uma sensibilidade que muitas vezes não encontrava acolhimento em uma sociedade conservadora.",
  "Seu maior desejo, porém, era viver ao lado da mãe e da avó. E esse sonho se realizou. Com o retorno delas para Maceió, em Alagoas, Elias finalmente encontrou o lar que buscava. Já na década de 1990, mudou-se definitivamente para o bairro da Levada, na Rua Aysmores, região conhecida por ficar por trás do antigo Raminho Madeira. Foi ali, cercado pelo amor materno e pelos cuidados da avó, que construiu suas memórias mais profundas de afeto, pertencimento e resistência.",
  "A história do menino Elias é marcada pela delicadeza, pela luta silenciosa e pela força de quem aprendeu a sobreviver entre diferenças, preconceitos e saudades, sem perder a ternura que sempre o definiu.",
];

const MISSAO = [
  "Durante o período de férias escolares, o menino Elias passava os dias ao lado de sua mãe e de sua avó, acompanhando especialmente dona Otávia em suas idas à igreja Batista do Pina, em Recife. Participava dos cultos, da escola dominical e observava, ainda criança, aquele universo de fé intensa que cercava sua família materna. Foi em uma dessas visitas à igreja, aos sete anos de idade, que viveu a primeira experiência espiritual que marcaria profundamente sua trajetória.",
  "Naquele momento, o que todos acreditaram ser uma manifestação do Espírito Santo, mais tarde Elias compreenderia, segundo sua própria fé e vivência espiritual, como a presença de uma entidade ancestral indígena — o Caboclo Guaraní, também chamado de Caboclo da Coroa. O que poderia representar um chamado espiritual tornou-se, para aquela criança sensível e incompreendida, o início de um período difícil e doloroso.",
  "Ao retornar para a casa do pai, começaram episódios de convulsões e crises que assustaram a família. Elias passou a ser acompanhado por psiquiatras e psicólogos. Depois de avaliações, concluiu-se que ele não apresentava problemas mentais ou enfermidades clínicas aparentes. Algumas pessoas próximas acreditavam que a criança necessitava de acompanhamento espiritual, de um curandeiro, e não apenas de médicos. Seu pai, porém, homem de formação católica e pensamento rígido, não aceitava essa possibilidade.",
  "Nessa época, Elias vivia com o pai, a madrasta Eonisi e sua irmã mais nova, Gisele, no bairro dos Torrões, em Recife. Certo dia, uma prima da família de sua madrasta o levou para uma casa simples de um curandeiro no bairro de Casa Amarela, uma região de palafitas e muita pobreza. Lá, sua prima foi atendida por uma entidade feminina chamada Júlia Galega.",
  "Ao final da consulta, segundo a memória de Elias, a entidade aproximou-se dele e pronunciou palavras que jamais esqueceria:",
  "— “Você é meu e eu sou sua.”",
  "— “Você irá morar com sua mãe, mas antes vai quebrar as correntes.”",
  "Anos depois, Elias entenderia essas palavras como referência ao seu desenvolvimento espiritual e às dificuldades que ainda enfrentaria.",
  "Pouco tempo depois, aos oito anos de idade, já morando novamente com a mãe e a avó na Favela do Japão, no bairro do Bode, em Recife, a realidade da pobreza extrema fazia parte de sua rotina. Viviam em uma vila de palafitas suspensas sobre a maré. Para ajudar no sustento da casa, Elias vendia sururu pelas ruas.",
  "Em um desses dias, passou diante de uma pequena venda conhecida pelas cocadas de vários sabores. A proprietária era chamada de Galega do Quebra-Queixo. Mesmo com vontade de comer um doce, seguiu trabalhando. Ao dobrar uma esquina, porém, sentiu como se tivesse caído em um profundo vazio. A próxima lembrança que teve foi despertar deitado sobre uma cama feita de folhas, cercado por velas, imagens espirituais e representações de entidades, inclusive de caboclos.",
  "Assustado, começou a chorar e gritar. Uma senhora aproximou-se e tentou tranquilizá-lo, dizendo que não lhe faria mal algum. Segundo Elias, já haviam se passado alguns dias, período em que sua mãe e sua avó o procuravam desesperadamente.",
  "A mulher perguntou onde ele morava e o levou de volta para casa. Ao encontrar sua avó, explicou que a criança havia chegado até sua residência manifestada por um espírito de caboclo, faminto e necessitando de cuidados espirituais. Disse ainda que Elias havia sido consagrado dentro de um culto de carimbó de Jurema, tradição espiritual profundamente enraizada nas práticas afro-indígenas do Nordeste.",
  "Mais tarde, por falta de condições financeiras, sua avó, sua mãe e ele foram morar em um barraco cedido por um tio — policial aposentado e parente da família paterna — em uma vila próxima a uma igreja católica. Foi nesse período que Elias relata ter vivido sua primeira visão espiritual consciente: durante as madrugadas, escutava alguém tentando abrir a porta pela fechadura, embora apenas ele pudesse ouvir aqueles sons.",
  "Sua irmã Abigail, filha do primeiro casamento de sua mãe, passava alguns dias com a família naquela época. Assustado, Elias a acordava baixinho durante a noite, dizendo que alguém tentava entrar na casa. Abigail procurava tranquilizá-lo, afirmando que devia ser apenas um sonho. Mas as experiências se repetiram durante meses.",
  "Cansadas das dificuldades, do medo e das incertezas, sua mãe e sua avó decidiram deixar Recife e partir para Maceió, em busca de uma nova vida e de paz para a família, foram morar na vila que era da irmã de sua avó.",
  "Foi em Maceió que a trajetória espiritual do menino Elias ganhou novos caminhos e definições. Já cansado das manifestações espirituais inesperadas, que aconteciam em diferentes lugares e momentos de sua vida, Elias buscava compreender aquilo que desde a infância o acompanhava. Foi então que recebeu orientação de um colega chamado Eduardo, trabalhador do Mercado da Produção e praticante da umbanda, que lhe aconselhou procurar uma casa espiritual onde pudesse aprender a lidar com suas entidades e desenvolver seus dons.",
  "Seguindo esse conselho, Elias conheceu o terreiro de sua madrinha espiritual, Mãe Mercedes, em memória, localizado no bairro Joaquim Leão, em Maceió. Ali iniciou seus primeiros aprendizados dentro da umbanda. Participou durante anos da casa, recebendo fundamentos como lavagem de cabeça, quartinhas e guias, além de aprofundar seu conhecimento espiritual. Sua madrinha dizia frequentemente que o santo de Elias era “de nação” e que, no momento certo, os próprios orixás o conduziriam ao caminho que lhe estava destinado.",
  "No terreiro de Mãe Mercedes, Elias era identificado com os orixás Xangô, Oxum e Iansã, sendo o Xangô de cor marrom. Com o passar do tempo, as palavras de sua madrinha começaram a se cumprir.",
  "No início de 1996, Elias conheceu o zelador Paulo César, já em memória, filho do orixá Abalô e iniciado pelo Babalorixá Célio Rodrigues. Paulo César vivia em seu terreiro no bairro da Ponta Grossa, em Maceió. Foi ali que Elias aprofundou sua caminhada religiosa dentro do candomblé. Naquela casa, tomou bori e assentou seu santo, recebendo seu ibá de Oxalá.",
  "Após o falecimento de Paulo César, Elias procurou orientação junto ao seu avô de santo, o Babalorixá Célio Rodrigues. Em 1999, iniciou oficialmente sua caminhada no candomblé. Já em 2008, realizou sua obrigação de sete anos, quem lhe deu as obrigações foi seu bisavô de santo, Raminho d’Oxóssi, de Olinda, Pernambuco, que também inaugurou seu terreiro, também hoje em memória.",
  "O primeiro terreiro de Doté Elias foi fundado na Rua Olavo Bilac, número 50, Grota do Arroz, no bairro de Cruz das Almas, em Maceió. Mas sua trajetória espiritual ainda reservava novos mistérios.",
  "Seu bisavô de santo Raminho lhe revelara que seu “pai de cabeça” era Sogbô, um caminho pouco conhecida por muitos praticantes nagô, e chamado na cultura nagô-vodun de Ayrá. Disse também que seria esse mesmo Sogbô quem o conduziria até sua verdadeira família ancestral.",
  "Com o tempo e já com a casa aberta, Doté Elias conheceu o sacerdote Israel, do Axé Palmares, em Pernambuco. Foi nesse período que encontrou o dofonitinho Muriel, figura importante em sua caminhada religiosa. Muriel o auxiliou nos mistérios ligados à iniciação de sua filha de santo, Lucineide, que se preparava para se tornar iaô no candomblé.",
  "Em conjunto com Muriel, Elias realizou, em 2010, a iniciação de Lucineide para o vodun Badé. Foi então que recebeu o título jeje de Doté, reconhecimento importante dentro da tradição vodun.",
  "Algum tempo depois, Doté Elias partiu para a Bahia em busca de respostas espirituais mais profundas, mesmo sem ter aguardado completamente o sinal de seu santo. Visitou inicialmente a matriz Seja Hundé, que se encontrava fechada. Em seguida, dirigiu-se ao Huntoloji, mas a Gayaku estava no Rio de Janeiro. Foi nesse momento que recebeu orientação para procurar a senhora Gamo Zumira, que lhe indicou os caminhos espirituais que deveria seguir.",
  "Depois dessa jornada, Doté Elias retornou para Maceió e continuou sua missão religiosa, mantendo-se atento aos sinais de seus ancestrais e ao chamado dos voduns.",
  "Em 2014, após o falecimento de sua mãe, Doté Elias enfrentou um profundo sofrimento emocional e espiritual, vivendo um período de grande desequilíbrio. Em busca de ajuda, encontrou acolhimento junto ao Hungã João de Oyá, sacerdote do Hùnkpámè Ayónó Azonegy, no Rio de Janeiro. Segundo Doté Elias, foi seu próprio santo quem o conduziu até essa casa, onde permanece até os dias atuais, dando continuidade aos ensinamentos da tradição jeje vodun em Alagoas.",
  "Em 2017, o ancestral do senhor Doté Elias consagrou um novo espaço dedicado ao culto aos Voduns na comunidade Riacho Branco, zona rural do município de Joaquim Gomes. Já em 2020, o terreiro que anteriormente funcionava em Maceió foi transferido para essa comunidade.",
  "É nesse território marcado pela forte ancestralidade negra e indígena que Doté Elias segue preservando e mantendo viva a tradição do culto aos Voduns — sendo reconhecido como o primeiro fundador desse culto em Alagoas — e também do Catimbó de Jurema, dando continuidade à missão espiritual iniciada ainda em sua infância.",
];

const MILITANCIA = [
  "Sua militância começou em 1998, no Grupo Gay de Alagoas (GGAL), tendo como presidente e fundador Marcelo Nascimento. Ao perceber o desempenho de Doté Elias enquanto militante, Marcelo propôs a criação de um grupo voltado para homossexuais negros. Antes de iniciar esse projeto, Doté Elias buscou orientação com seu sacerdote, que o havia iniciado no candomblé naquele período.",
  "Em 2003, junto com outros representantes, fundou o Grupo Gay Afrodescendente Filhos do Axé, posteriormente chamado Hùnkpámè Ayónó Hùndésô. A diretoria era formada por pessoas ligadas ao candomblé e tinha como principal objetivo desenvolver políticas públicas voltadas para homossexuais de periferias e de terreiros. Nesse contexto, foi criado também o núcleo de lésbicas denominado Dandara.",
  "O grupo participou ativamente do movimento negro por meio do Fórum de Entidades Negras de Alagoas (FENAL), do Fórum de ONGs e AIDS e do Conselho Municipal de Saúde de Maceió. Também foi filiado à Associação Brasileira de Gays, Lésbicas e Travestis (ABGLT), participando de conferências de igualdade racial, saúde, direitos humanos e diversos seminários.",
  "Em 2007, o grupo participou de um edital promovido pela Secretaria de Estado da Saúde de Alagoas (SESAU-AL) com o projeto “Sob a Proteção dos Orixás”. Apesar das dificuldades enfrentadas, o projeto foi aprovado e teve grande repercussão no estado. Seu objetivo era capacitar mestras, mestres de terreiros e adeptos por meio de oficinas voltadas ao enfrentamento das DST/HIV/AIDS e ao uso seguro de objetos perfurocortantes.Ainda em 2007, Doté Elias recebeu de seu ancestral a missão de se tornar rei de uma nação de maracatu. Mesmo resistente inicialmente, aceitou a missão com obediência. Em 2008, elaborou um projeto para obtenção dos ofaiás e o apresentou à Fundação Municipal de Ação Cultural de Maceió (FMAC). Após mais de seis meses de espera, recebeu um não.",
  "No início de 2009, ano da fundação do maracatu, quando já não havia mais esperança, surgiu uma oportunidade através da Coordenadoria Ecumênica de Serviço (CESE), que acolheu o projeto. Para a alegria de todos os envolvidos, ele foi aprovado. Contando com o trabalho voluntário do Mestre Sandro, que acreditou na iniciativa, foram realizadas oficinas ao longo de todo o ano. Em 2010, o Maracatu Nação Acorte Ayrá saiu às ruas do bairro de Jaraguá durante o período das prévias carnavalescas.",
  "Em 2011, Doté Elias buscou oficializar a nação por meio de sua coroação. Procurou orientação com a rainha Marivalda, da Nação Estrela do Recife, que lhe apresentou os caminhos para a titulação do maracatu. Foi criada uma comissão com dez representantes do movimento social de Alagoas para uma audiência na cúria, onde foram recebidos pelo arcebispo Dom Antônio Muniz Fernandes. Posteriormente, porém, a comissão foi informada de que aquela cultura não pertencia à igreja.",
  "Apesar da decepção, Doté Elias manteve seu propósito. Novamente orientado pela rainha Marivalda, buscou apoio com Pai Maciel e Mãe Mirian, que realizaram a cerimônia de coroação em 18 de novembro de 2011 em fronte a igreja nossa senhora mãe do povo no bairro de jaraguá, coroando o rei Doté Elias e sua filha de santo, a rainha Lucineide. No dia 19 ocorreu a grande festa de coroação, com a participação de diversos grupos culturais. Já no dia 20, o Maracatu Nação Acorte de Ayrá subiu a Serra da Barriga para pedir a bênção aos ancestrais, tendo como calungas Manoel Felix e Tereza Bico Doce. Assim surge o primeiro Maracatu Nação após 1912.",
  "Posteriormente denominado Nação do Maracatu Acorte de Alagoas, o grupo se consolidou como uma nação Nagô, tendo sua sede no antigo terreiro de Doté Elias, em Maceió, deixado para o maracatu por orientação ancestral.",
  "Doté Elias foi candidato a vereador por Maceió em 2011 pelo Partido da Social Democracia Brasileira, presidido na época por Kátia Born, que lhe deu incentivo para representar muito bem o seu segmento religioso e cultural.",
  "Ele sabia que talvez não conquistasse a vitória nas eleições, mas seu principal objetivo era fazer com que os adeptos do candomblé tivessem representação política e consciência da importância da representatividade no poder legislativo.",
  "Durante a campanha, realizou caminhadas na comunidade da Grota do Arroz, nas periferias de Maceió, além de reuniões com mestres e mestras do candomblé, da umbanda e da jurema. Para Doté Elias, a experiência foi positiva e importante para fortalecer a visibilidade das religiões de matriz africana na política e na sociedade.",
  "Na comunidade Riacho Branco, onde está localizado o terreiro de candomblé, Doté Elias acreditava inicialmente que o espaço serviria apenas para o culto aos Voduns. Contudo, ao conhecer as famílias da comunidade, percebeu a ausência de políticas públicas e a situação de vulnerabilidade social vivida pelos moradores.",
  "Em 2024, o terreiro tentou concorrer ao edital de Ponto de Cultura do município de Maceió através do maracatu, mas não obteve êxito. Em seguida, a inscrição foi realizada em nome do terreiro localizado na comunidade Riacho Branco, sendo contemplado com o Ponto de Cultura Família Húndésô, certificado em 2025. Desde então, o espaço vem promovendo cultura, cidadania e inclusão social para comunidades da zona rural e periferias. Assim surge o primeiro ponto de cultura da zona rural do município de Joaquim Gomes.",
];

const GALERIA_INFANCIA = [
  { img: IMAGES.elder, legenda: "Doté Elias quando criança" },
  { img: IMAGES.community, legenda: "Marta, mãe do Doté Elias" },
  { img: IMAGES.workshop, legenda: "José Geraldo, pai do Doté Elias" },
];

const GALERIA_MISSAO = [
  { img: IMAGES.ceremony, legenda: "Madrinha de santo do Doté Elias, Mãe Mercedes" },
  { img: IMAGES.culture, legenda: "Foto da roça" },
  { img: IMAGES.dance, legenda: "Estado da Jurema" },
  { img: IMAGES.ceremony, legenda: "Iniciação do Doté Elias no candomblé" },
  { img: IMAGES.culture, legenda: "Primeira roça da Família Hùndésô em Maceió" },
  { img: IMAGES.group, legenda: "Doté na Casa Estrela Bahia" },
  { img: IMAGES.community, legenda: "No começo de tudo" },
  { img: IMAGES.workshop, legenda: "Construção com Mehunto Lola" },
  { img: IMAGES.ceremony, legenda: "Novo Hunkpame" },
  { img: IMAGES.drums, legenda: "Chegada dos axé do Hundeso" },
  { img: IMAGES.dance, legenda: "Hunbê de 14 anos do Doté Elias na roça Azonegi" },
  { img: IMAGES.elder, legenda: "Doté Elias e seu sacerdote" },
];

const GALERIA_MILITANCIA = [
  { img: IMAGES.hands, legenda: "Filhos do Axé" },
  { img: IMAGES.workshop, legenda: "Oficina de prevenção com Doté" },
  { img: IMAGES.group, legenda: "Lançamento do projeto" },
  { img: IMAGES.culture, legenda: "Card do evento Xangô Rezando Baixo" },
  { img: IMAGES.workshop, legenda: "Diário Oficial do Estado de Alagoas — Coroação do Rei Doté" },
  { img: IMAGES.ceremony, legenda: "Doté sendo coroado" },
  { img: IMAGES.drums, legenda: "Coroação do Rei Doté" },
  { img: IMAGES.dance, legenda: "Rei e rainha" },
];

function Galeria({ titulo, itens }: { titulo: string; itens: { img: string; legenda: string }[] }) {
  return (
    <div className="mt-10">
      <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-dark mb-5">{titulo}</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {itens.map((it, i) => (
          <figure key={i} className="overflow-hidden rounded-2xl bg-white ring-1 ring-brand-earth/10">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={it.img} alt={it.legenda} loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <figcaption className="px-4 py-3 text-sm text-foreground/75">{it.legenda}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function PresidentePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[48vh] lg:min-h-[58vh] items-end overflow-hidden pt-20">
        <img src={IMAGES.elder} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-dark via-brand-dark/75 to-brand-dark/40" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-brand-gold backdrop-blur">
            Liderança e Ancestralidade
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-[34px] sm:text-[44px] lg:text-[54px] font-bold leading-[1.1] text-white text-balance">
            Rei Doté Elias
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed">
            Trajetória de liderança religiosa, cultural e social em Alagoas.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="bg-brand-cream border-b border-brand-earth/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-2 text-xs sm:text-sm text-foreground/65">
          <Link to="/" className="hover:text-brand-earth">Início</Link>
          <ChevronRight className="h-3.5 w-3.5 opacity-60" />
          <Link to="/projetos" className="hover:text-brand-earth">Projetos</Link>
          <ChevronRight className="h-3.5 w-3.5 opacity-60" />
          <span className="text-brand-dark font-semibold truncate">Página do Presidente</span>
        </div>
      </nav>

      {/* Sua infância */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] uppercase tracking-[0.25em] text-brand-earth font-semibold">Trajetória</div>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-brand-dark">Sua infância</h2>
          <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-foreground/80">
            {INFANCIA.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <Galeria titulo="Registros da infância" itens={GALERIA_INFANCIA} />
        </div>
      </section>

      {/* Missão ancestral */}
      <section className="py-16 sm:py-20 bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] uppercase tracking-[0.25em] text-brand-earth font-semibold">Espiritualidade</div>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-brand-dark">Missão ancestral</h2>
          <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-foreground/80">
            {MISSAO.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <Galeria titulo="Galeria de registros" itens={GALERIA_MISSAO} />
        </div>
      </section>

      {/* Sua militância */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] uppercase tracking-[0.25em] text-brand-earth font-semibold">Atuação política e cultural</div>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-brand-dark">Sua militância</h2>
          <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-foreground/80">
            {MILITANCIA.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <Galeria titulo="Registros da militância" itens={GALERIA_MILITANCIA} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-16 bg-brand-gold-soft border-y border-brand-gold/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-dark leading-tight text-balance">
            Memória, liderança e continuidade
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-brand-gold/50 px-6 py-3 text-sm font-bold uppercase tracking-wider text-brand-dark hover:bg-brand-gold/10 transition-colors">
              <ArrowLeft className="h-4 w-4" /> Voltar para página inicial
            </Link>
            <Link to="/contato" className="inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#0077B6] transition-colors">
              Fale conosco
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}