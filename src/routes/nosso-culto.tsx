import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Flame,
  Leaf,
  Drum,
  Sparkles,
  BookOpen,
  TreePine,
  Shield,
  Users,
  Mountain,
} from "lucide-react";
import { IMAGES } from "@/data/site";

export const Route = createFileRoute("/nosso-culto")({
  head: () => ({
    meta: [
      { title: "Nosso Culto — Família Hùndésô" },
      {
        name: "description",
        content:
          "Tradições, fundamentos e expressões espirituais que orientam o Hùnkpámè Hùndésô: ancestralidade, Jeje Dahomé e Catimbó de Jurema.",
      },
      { property: "og:title", content: "Nosso Culto — Família Hùndésô" },
      {
        property: "og:description",
        content:
          "Fé, ancestralidade, resistência e preservação das matrizes africanas e indígenas no Hùnkpámè Hùndésô.",
      },
      { property: "og:image", content: IMAGES.ceremony },
    ],
  }),
  component: NossoCulto,
});

const JEJE_TAGS = [
  { t: "Culto aos Voduns", i: Flame },
  { t: "Tradição Jeje", i: Drum },
  { t: "Memória ancestral", i: BookOpen },
  { t: "Forças da natureza", i: Leaf },
  { t: "Fundamentos sagrados", i: Sparkles },
];

const JUREMA_TAGS = [
  { t: "Jurema Sagrada", i: TreePine },
  { t: "Sabedoria ancestral", i: BookOpen },
  { t: "Cura e proteção", i: Shield },
  { t: "Tradições indígenas", i: Mountain },
  { t: "Forças espirituais", i: Sparkles },
  { t: "Vida comunitária", i: Users },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-earth">
      {children}
    </div>
  );
}

function NossoCulto() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[44vh] items-end overflow-hidden pt-20 lg:min-h-[56vh]">
        <img
          src={IMAGES.ceremony}
          alt="Espaço sagrado de tradição afro-brasileira e preservação ancestral"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark/40" />
        <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-gold backdrop-blur">
            Tradição e ancestralidade
          </div>
          <h1 className="mt-6 max-w-4xl text-[32px] font-bold leading-[1.1] text-white sm:text-[44px] lg:text-[56px]">
            <span className="relative inline-block">
              <span aria-hidden className="absolute inset-0 -skew-x-6 bg-gradient-gold" />
              <span className="relative z-10 px-3 text-brand-dark">Nosso culto</span>
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
            Conheça as tradições, fundamentos e expressões espirituais que
            orientam o Hùnkpámè Hùndésô como espaço de fé, ancestralidade,
            resistência e preservação das matrizes africanas e indígenas.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-brand-cream py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:px-8">
          <div>
            <Eyebrow>Introdução</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-dark sm:text-4xl lg:text-[44px]">
              Espaço de acè, memória e ancestralidade
            </h2>
            <div className="mt-6 h-1 w-16 rounded-full bg-gradient-warm" />
          </div>
          <div className="space-y-5 text-[17px] leading-[1.75] text-foreground/85 sm:text-[18px]">
            <p>
              O Hùnkpámè Hùndésô é um espaço de concentração, preservação e
              emanação de acè, a força sagrada que está na base da vida, da
              ancestralidade e das relações entre o ser humano, a natureza e o
              divino.
            </p>
            <p>
              Mais do que um espaço religioso, o Hùnkpámè também se constitui
              como território de resistência, memória e preservação das
              tradições de matriz africana e indígena. Suas práticas reafirmam
              o compromisso com a espiritualidade, com a ancestralidade, com o
              respeito à natureza e com a valorização dos saberes tradicionais.
            </p>
            <p>
              A vivência religiosa da Família Hùndésô está ligada à preservação
              de cultos, ritos, memórias e ensinamentos transmitidos por
              gerações, mantendo viva uma herança espiritual que fortalece
              identidades, comunidades e modos de existir.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGEM 1 */}
      <section className="bg-white pb-4 pt-0">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <img
            src={IMAGES.ceremony}
            alt="Espaço sagrado de tradição afro-brasileira e preservação ancestral"
            className="h-56 w-full rounded-3xl object-cover shadow-xl sm:h-72 lg:h-[340px] xl:h-[360px]"
          />
        </div>
      </section>

      {/* JEJE DAHOMÉ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:items-start lg:gap-16 lg:px-8">
          <div>
            <Eyebrow>Tradição</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-dark sm:text-4xl lg:text-[44px]">
              Jeje Dahomé
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-[1.75] text-foreground/85 sm:text-[18px]">
              <p>
                O culto aos Voduns, divindades da tradição Jeje, tem suas
                raízes no antigo Dahomé, território que corresponde ao atual
                Benin, na África Ocidental.
              </p>
              <p>
                Segundo a tradição, sua origem está relacionada à figura do rei
                Hamilé, associado à serpente sagrada e posteriormente
                divinizado por seu povo. A terra ligada a esse rei ficou
                conhecida como terra de Dan, expressão que deu origem a “Dan
                Imé” ou “Dahomé”, compreendida como referência à Terra da
                Serpente.
              </p>
              <p>
                Na Família Hùndésô, a tradição Jeje Dahomé representa a
                continuidade de uma memória ancestral marcada pelo culto aos
                Voduns, pelo respeito às forças da natureza e pela preservação
                dos fundamentos sagrados herdados dos povos africanos.
              </p>
            </div>
          </div>
          <aside className="rounded-3xl bg-gradient-to-br from-brand-earth/95 via-[#005F8F] to-brand-dark p-8 text-white shadow-xl sm:p-10">
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-gold">
              Fundamentos
            </div>
            <h3 className="mt-3 text-2xl font-bold leading-tight">
              Pilares da tradição Jeje
            </h3>
            <ul className="mt-6 space-y-3">
              {JEJE_TAGS.map((c) => {
                const Icon = c.i;
                return (
                  <li
                    key={c.t}
                    className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur transition hover:bg-white/15"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-gold/20 text-brand-gold">
                      <Icon className="h-4.5 w-4.5" aria-hidden />
                    </span>
                    <span className="text-sm font-semibold">{c.t}</span>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </section>

      {/* IMAGEM 2 */}
      <section className="bg-brand-cream pt-16 sm:pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <img
            src={IMAGES.workshop}
            alt="Elementos da natureza associados à espiritualidade, memória e saberes tradicionais"
            className="h-56 w-full rounded-3xl object-cover shadow-xl sm:h-72 lg:h-[340px] xl:h-[360px]"
          />
        </div>
      </section>

      {/* CATIMBÓ DE JUREMA */}
      <section className="bg-brand-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>Tradição</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-dark sm:text-4xl lg:text-[44px]">
              Catimbó de Jurema
            </h2>
          </div>
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start lg:gap-16">
            <div className="space-y-5 text-[17px] leading-[1.75] text-foreground/85 sm:text-[18px]">
              <p>
                O Catimbó de Jurema, também conhecido como Jurema Sagrada, é
                uma tradição religiosa nordestina brasileira, de origem
                indígena, que também reúne influências de outras matrizes
                culturais e espirituais.
              </p>
              <p>
                Suas práticas envolvem elementos como a defumação, o uso ritual
                do fumo, os estados de transe e a comunicação com o mundo
                espiritual. Nas sessões de Jurema, manifestam-se mestres,
                caboclos e entidades espirituais ligadas à sabedoria
                ancestral, à cura, à orientação e à proteção.
              </p>
              <p>
                Para a Família Hùndésô, o Catimbó de Jurema integra uma
                dimensão importante da preservação das tradições indígenas e
                afro-brasileiras, reafirmando o respeito aos encantados, aos
                ancestrais e às forças espirituais que sustentam a vida
                comunitária.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {JUREMA_TAGS.map((c) => {
                const Icon = c.i;
                return (
                  <div
                    key={c.t}
                    className="flex items-center gap-3 rounded-2xl border border-brand-gold/30 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-gold hover:shadow-md"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-warm text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="text-sm font-semibold text-brand-dark">
                      {c.t}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative isolate overflow-hidden py-12 sm:py-14 lg:py-16">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#0090DB_0%,#005F8F_55%,#00A8FF_100%)]" />
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-[26px] font-bold leading-tight text-white sm:text-[32px] lg:text-[38px]">
            Ancestralidade que orienta, fortalece e preserva
          </h2>
          <p className="mx-auto mt-4 max-w-[680px] text-[15px] leading-[1.65] text-white/90 sm:text-[16px]">
            A vivência espiritual da Família Hùndésô reafirma o compromisso com
            a memória, com a natureza, com os saberes tradicionais e com a
            continuidade das tradições de matriz africana e indígena.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/quem-somos"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-5 text-xs font-bold uppercase tracking-[0.08em] text-brand-earth shadow-lg transition hover:brightness-105 sm:text-sm"
            >
              Voltar para Quem Somos
            </Link>
            <Link
              to="/projetos"
              className="inline-flex h-12 items-center justify-center rounded-full bg-brand-dark px-5 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-lg ring-1 ring-white/20 transition hover:bg-black sm:text-sm"
            >
              Conhecer projetos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
