import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  GraduationCap,
  Megaphone,
  Users,
  Leaf,
  HandHeart,
  Scale,
  Heart,
  Sparkles,
  Globe2,
  ShieldCheck,
  CheckCircle2,
  Flame,
  ArrowRight,
} from "lucide-react";
import { IMAGES } from "@/data/site";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Família Hùndésô" },
      {
        name: "description",
        content:
          "Hùnkpámè Ayónó Hùndésô — Organização da Sociedade Civil de cunho religioso, social, cultural e beneficente. Conheça nossa história, missão e valores.",
      },
      { property: "og:title", content: "Quem Somos — Família Hùndésô" },
      {
        property: "og:description",
        content:
          "Ancestralidade, cultura, resistência, acolhimento e compromisso social — conheça a Família Hùndésô.",
      },
      { property: "og:image", content: IMAGES.heroAbout },
    ],
  }),
  component: QuemSomos,
});

const DIRETRIZES = [
  { titulo: "Resistência cultural", icon: Sparkles },
  { titulo: "Preservação das tradições afro-religiosas", icon: BookOpen },
  { titulo: "Combate ao racismo religioso", icon: ShieldCheck },
  { titulo: "Assistência social, inclusão e cidadania", icon: HandHeart },
  { titulo: "Valorização da diversidade", icon: Users },
];

const COMUNIDADE = [
  "Acolhimento",
  "Cidadania",
  "Cultura",
  "Assistência social",
  "Sustentabilidade",
  "Fortalecimento comunitário",
];

const VALORES = [
  { t: "Igualdade e justiça social", i: Scale },
  { t: "Respeito à diversidade", i: Users },
  {
    t: "Cuidado e atenção a cada indivíduo, às comunidades e aos diferentes grupos sociais",
    i: Heart,
  },
  { t: "Compromisso com as gerações futuras", i: Sparkles },
  { t: "Respeito à natureza e ao meio ambiente", i: Leaf },
  { t: "Ética, integridade e transparência", i: ShieldCheck },
];

const FRENTES = [
  {
    titulo: "Preservação da memória",
    icon: BookOpen,
    texto:
      "Incentivar a transmissão oral e escrita da história e das memórias do povo de santo, promovendo a educação patrimonial das comunidades de terreiro e valorizando o papel das pessoas idosas como guardiãs de saberes, agentes de educação e preservação da memória ancestral.",
    imagem: IMAGES.elder,
  },
  {
    titulo: "Educação de crianças e adolescentes",
    icon: GraduationCap,
    texto:
      "Contribuir para a implementação das Leis nº 10.639/03 e nº 11.645/08, por meio da formação de educadores e do desenvolvimento de tecnologias sociais lúdico-pedagógicas.\n\nA instituição também busca qualificar adolescentes e jovens para o mercado de trabalho, reduzindo vulnerabilidades sociais e fortalecendo caminhos de autonomia, cidadania e proteção.",
    imagem: IMAGES.children,
  },
  {
    titulo: "Difusão de valores culturais para a sociedade",
    icon: Megaphone,
    texto:
      "Oferecer esclarecimentos sobre as religiões de matriz africana, suas culturas, seus valores e sua importância para a formação social brasileira.\n\nA Família Hùndésô promove visitas de estudantes da educação básica à organização, além de ações voltadas à difusão da cidadania, dos direitos sociais e do acesso a serviços públicos.",
    imagem: IMAGES.culture,
  },
  {
    titulo: "Desenvolvimento comunitário",
    icon: Users,
    texto:
      "Promover a economia solidária, fortalecer a segurança alimentar e nutricional, contribuir para a redução do trabalho infantil e incentivar cuidados básicos de atenção à saúde.\n\nA instituição também atua na promoção da igualdade, da liberdade de expressão, da diversidade sexual e de gênero, com atenção especial às pautas da população LGBTQIA+.",
    imagem: IMAGES.community,
  },
  {
    titulo: "Preservação ambiental",
    icon: Leaf,
    texto:
      "Sensibilizar comunidades e parceiros para o uso consciente dos recursos naturais, a preservação da biodiversidade vegetal e animal e a valorização dos princípios socioambientais presentes nas tradições de matriz africana.",
    imagem: IMAGES.workshop,
  },
  {
    titulo: "Diálogo inter-religioso",
    icon: Globe2,
    texto:
      "Promover campanhas, encontros ecumênicos e ações de conscientização voltadas ao combate à intolerância religiosa, ao racismo religioso e à promoção do respeito entre diferentes crenças, culturas e formas de espiritualidade.",
    imagem: IMAGES.hands,
  },
];

const RECONHECIMENTOS = [
  { titulo: "CNPJ", valor: "05.786.767/0001-01" },
  { titulo: "Entidade", valor: "Utilidade pública" },
  { titulo: "Certificação", valor: "Ponto de Cultura Rural" },
  { titulo: "ID MinC", valor: "1566444" },
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-earth">
      {children}
    </div>
  );
}

function QuemSomos() {
  return (
    <>
      {/* 1. HERO */}
      <section
        className="relative isolate flex min-h-[55vh] items-end overflow-hidden pt-20 lg:min-h-[70vh]"
      >
        <img
          src={IMAGES.heroAbout}
          alt="Encontro comunitário e cultural da Família Hùndésô"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark/40" />
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-gold backdrop-blur">
            Quem Somos
          </div>
          <h1 className="mt-6 max-w-4xl text-[32px] font-bold leading-[1.1] text-white sm:text-[44px] lg:text-[56px]">
            Hùnkpámè Ayónó Hùndésô
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
            O Hùnkpámè Ayónó Hùndésô, conhecido como Família Hùndésô, é uma
            Organização da Sociedade Civil (OSC) de cunho religioso, social,
            cultural e beneficente, sem fins lucrativos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#trajetoria"
              className="inline-flex items-center justify-center rounded-full bg-gradient-warm px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-md hover:brightness-110 transition"
            >
              Conheça nossa trajetória
            </a>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white backdrop-blur hover:bg-white/10 transition"
            >
              Fale conosco
            </Link>
          </div>
        </div>
      </section>

      {/* 2. APRESENTAÇÃO INSTITUCIONAL */}
      <section className="bg-brand-cream py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:px-8">
          <div>
            <SectionEyebrow>Apresentação institucional</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-dark sm:text-4xl lg:text-[44px]">
              Hùnkpámè Ayónó Hùndésô
            </h2>
            <div className="mt-6 h-1 w-16 rounded-full bg-gradient-warm" />
          </div>
          <div className="space-y-5 text-[17px] leading-[1.75] text-foreground/85 sm:text-[18px]">
            <p>
              O Hùnkpámè Ayónó Hùndésô, conhecido como Família Hùndésô, é uma
              Organização da Sociedade Civil (OSC) de cunho religioso, social,
              cultural e beneficente, sem fins lucrativos. A instituição é
              mantida por meio de parcerias, associados, convênios, eventos,
              voluntários, colaboradores e doações da sociedade.
            </p>
            <p>
              Fundada e registrada em cartório em 2003, inicialmente como Grupo
              Gay Afro-descendente Filhos do Axé, a organização passou, em
              2010, a ser denominada Hùnkpámè Ayónó Hùndésô, consolidando sua
              identidade como uma instituição de base afro-religiosa,
              comprometida com a preservação das tradições africanas e
              afro-brasileiras.
            </p>
            <p>
              Mesmo com sua atuação fundamentada na ancestralidade e nas
              religiões de matriz africana, a Família Hùndésô mantém, desde sua
              origem, um forte compromisso com as pautas sociais, especialmente
              aquelas relacionadas à população LGBTQIA+, por meio do Núcleo
              Filhos do Axé LGBTQIA+.
            </p>
          </div>
        </div>
      </section>

      {/* 3. TRAJETÓRIA E RECONHECIMENTO */}
      <section id="trajetoria" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="relative">
              <img
                src={IMAGES.group}
                alt="Comunidade reunida em ação cultural da Família Hùndésô"
                className="aspect-[4/5] w-full rounded-3xl object-cover shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 hidden max-w-[260px] rounded-2xl bg-gradient-gold p-6 shadow-xl md:block">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-dark/70">
                  Desde 2003
                </div>
                <div className="mt-2 text-2xl font-bold leading-tight text-brand-dark">
                  Mais de duas décadas de resistência e tradição
                </div>
              </div>
            </div>
            <div>
              <SectionEyebrow>Nossa trajetória</SectionEyebrow>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-dark sm:text-4xl lg:text-[44px]">
                Trajetória e reconhecimento
              </h2>
              <div className="mt-6 space-y-5 text-[17px] leading-[1.75] text-foreground/85 sm:text-[18px]">
                <p>
                  Ao longo de sua trajetória, a Família Hùndésô se consolidou
                  como um espaço de resistência, acolhimento, preservação
                  cultural, promoção de direitos e fortalecimento comunitário.
                  A instituição está regularmente inscrita no CNPJ/MF sob o nº
                  05.786.767/0001-01, é reconhecida como entidade de utilidade
                  pública e certificada pelo Ministério da Cultura como Ponto
                  de Cultura Rural, ID 1566444, em consonância com a Política
                  Nacional de Cultura Viva, instituída pela Lei nº
                  13.018/2014.
                </p>
                <p>
                  Dada a relevância do trabalho realizado e o papel que
                  desempenha como agente de transformação social junto às
                  comunidades atendidas, a Família Hùndésô participa de
                  importantes discussões sobre políticas públicas,
                  desenvolvimento comunitário, diversidade, cultura,
                  assistência social, preservação ambiental e combate ao
                  racismo religioso.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RECONHECIMENTOS.map((r) => (
              <div
                key={r.titulo}
                className="rounded-2xl border border-brand-gold/30 bg-brand-cream/60 p-6 transition hover:border-brand-gold hover:shadow-md"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-earth">
                  {r.titulo}
                </div>
                <div className="mt-2 text-lg font-bold text-brand-dark">
                  {r.valor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DIRETRIZES DE ATUAÇÃO */}
      <section className="bg-brand-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionEyebrow>O que nos guia</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-dark sm:text-4xl lg:text-[44px]">
              Diretrizes de atuação
            </h2>
            <p className="mt-6 text-[17px] leading-[1.75] text-foreground/85 sm:text-[18px]">
              As ações da Família Hùndésô são orientadas pela resistência
              cultural, pela preservação das tradições afro-religiosas, pelo
              combate ao racismo religioso e pela promoção de políticas de
              assistência social, inclusão, cidadania e valorização da
              diversidade.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DIRETRIZES.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.titulo}
                  className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-warm text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <div className="mt-5 text-lg font-bold leading-snug text-brand-dark">
                    {d.titulo}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. NOSSA VISÃO */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div>
            <SectionEyebrow>Nossa visão</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-dark sm:text-4xl lg:text-[44px]">
              Cuidar, acolher e transformar
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-[1.75] text-foreground/85 sm:text-[18px]">
              <p>
                Contribuir para o desenvolvimento e a inclusão social das
                populações em situação de vulnerabilidade, transmitindo valores
                de fé, amor ao próximo, respeito à natureza, solidariedade,
                compaixão, compreensão e benevolência.
              </p>
              <p>
                A Família Hùndésô acredita que o fortalecimento das comunidades
                passa pelo cuidado com as pessoas, pela defesa da dignidade
                humana, pela valorização da ancestralidade e pela construção de
                relações mais justas, respeitosas e sustentáveis.
              </p>
            </div>
          </div>
          <div className="relative order-first lg:order-last">
            <img
              src={IMAGES.children}
              alt="Crianças e jovens em atividade cultural e de acolhimento"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* 6. COMUNIDADE */}
      <section className="bg-brand-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionEyebrow>Para a comunidade</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-dark sm:text-4xl lg:text-[44px]">
              Comunidade
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-[1.75] text-foreground/85 sm:text-[18px]">
              <p>
                A Família Hùndésô atua junto a pessoas e comunidades em situação
                de vulnerabilidade, promovendo ações de acolhimento, cidadania,
                cultura, assistência social e fortalecimento comunitário.
              </p>
              <p>
                As práticas de cidadania e sustentabilidade fazem parte das
                responsabilidades da instituição e são prioridades para o
                Hùnkpámè, reafirmando seu compromisso com a vida, com a
                natureza e com as futuras gerações.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {COMUNIDADE.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-dark shadow-sm ring-1 ring-brand-gold/30"
              >
                <CheckCircle2 className="h-4 w-4 text-brand-earth" aria-hidden />
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. VALORES */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionEyebrow>Princípios que orientam</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-dark sm:text-4xl lg:text-[44px]">
              Valores
            </h2>
            <p className="mt-6 text-[17px] leading-[1.75] text-foreground/85 sm:text-[18px]">
              A atuação da Família Hùndésô é sustentada por valores que
              orientam suas práticas, relações e projetos:
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALORES.map((v) => {
              const Icon = v.i;
              return (
                <div
                  key={v.t}
                  className="rounded-2xl border border-brand-gold/20 bg-brand-cream/40 p-6 transition hover:border-brand-gold/60 hover:shadow-md"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-gold text-brand-dark">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <p className="mt-5 text-[17px] font-semibold leading-snug text-brand-dark">
                    {v.t}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. MISSÃO */}
      <section className="relative isolate overflow-hidden bg-brand-dark py-24 text-white">
        <img
          src={IMAGES.ceremony}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-dark via-[#3a1d10] to-brand-dark/90" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-gold backdrop-blur">
            Missão
          </div>
          <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-[48px]">
            Missão
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-[18px] leading-[1.75] text-white/90 sm:text-[20px]">
            A missão da Família Hùndésô é preservar memórias, fortalecer
            comunidades, promover direitos, valorizar as tradições
            afro-religiosas e contribuir para a construção de uma sociedade
            mais justa, plural, solidária e sustentável.
          </p>
          <p className="mt-8 text-base font-medium uppercase tracking-[0.2em] text-brand-gold">
            Essa missão se expressa em diferentes frentes de atuação:
          </p>
        </div>
      </section>

      {/* 9. FRENTES DE ATUAÇÃO */}
      <section className="bg-brand-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionEyebrow>Como atuamos</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-dark sm:text-4xl lg:text-[44px]">
              Frentes de atuação da missão
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {FRENTES.map((f) => {
              const Icon = f.icon;
              return (
                <article
                  key={f.titulo}
                  className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-lg"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={f.imagem}
                      alt={f.titulo}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-white/90 text-brand-earth shadow-md backdrop-blur">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
                    <h3 className="text-xl font-bold leading-tight text-brand-dark sm:text-2xl">
                      {f.titulo}
                    </h3>
                    <div className="space-y-4 text-[16px] leading-[1.7] text-foreground/80">
                      {f.texto.split("\n\n").map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9.5 NOSSO CULTO — CARD */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <article className="group relative grid overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 lg:grid-cols-[1.1fr_1fr]">
            <div className="relative isolate flex flex-col justify-between gap-8 bg-[linear-gradient(135deg,#3A1D10_0%,#6B3F24_55%,#9A4A2F_100%)] p-8 text-white sm:p-12">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-gold backdrop-blur">
                  <Flame className="h-3.5 w-3.5" aria-hidden /> Tradição e ancestralidade
                </div>
                <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-[40px]">
                  Nosso culto
                </h2>
                <p className="mt-5 max-w-xl text-[16px] leading-[1.7] text-white/85 sm:text-[17px]">
                  Conheça as tradições, fundamentos e expressões espirituais
                  que orientam o Hùnkpámè Hùndésô como espaço de fé,
                  ancestralidade, resistência e preservação das matrizes
                  africanas e indígenas.
                </p>
              </div>
              <div>
                <Link
                  to="/nosso-culto"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-brand-dark shadow-md transition hover:brightness-105"
                >
                  Saiba mais
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </div>
            </div>
            <div className="relative min-h-[260px] overflow-hidden lg:min-h-full">
              <img
                src={IMAGES.ceremony}
                alt="Espaço sagrado da Família Hùndésô — tradição e ancestralidade"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-brand-dark/10 to-brand-dark/40 lg:bg-gradient-to-r lg:from-brand-dark/40 lg:via-transparent lg:to-transparent" />
            </div>
          </article>
        </div>
      </section>

      {/* 10. CTA FINAL */}
      <section className="relative isolate overflow-hidden py-20 sm:py-24">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#9A4A2F_0%,#6B3F24_55%,#C9953B_100%)]" />
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[44px]">
            Fortalecer a Família Hùndésô é fortalecer memória, cultura e
            comunidade.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.75] text-white/90 sm:text-[18px]">
            Conheça nossos projetos, acompanhe nossas ações e apoie a
            continuidade desse trabalho.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/projetos"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-brand-earth shadow-lg transition hover:brightness-105"
            >
              Conhecer projetos
            </Link>
            <Link
              to="/como-ajudar"
              className="inline-flex items-center justify-center rounded-full bg-brand-dark px-7 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-lg ring-1 ring-white/20 transition hover:bg-black"
            >
              Apoiar agora
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}