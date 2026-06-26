import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { IMAGES } from "@/data/site";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — Família Hùndésô" },
      { name: "description", content: "Imagens e registros das atividades, celebrações e projetos da Família Hùndésô." },
    ],
  }),
  component: GaleriaPage,
});

type GaleriaAno = {
  ano: number;
  titulo: string;
  imagens: { src: string; alt: string }[];
};

const GALERIAS: GaleriaAno[] = [
  {
    ano: 2025,
    titulo: "1ª Mostra Arte e Educação – Dia das Mães",
    imagens: [
      { src: IMAGES.workshop, alt: "Oficina de arte com mães e filhos" },
      { src: IMAGES.children, alt: "Crianças em apresentação cultural" },
      { src: IMAGES.dance, alt: "Apresentação de dança afro-brasileira" },
      { src: IMAGES.community, alt: "Encontro comunitário no Dia das Mães" },
      { src: IMAGES.hands, alt: "Mãos entrelaçadas em roda de afeto" },
      { src: IMAGES.group, alt: "Grupo de famílias reunidas" },
    ],
  },
  {
    ano: 2024,
    titulo: "Registros culturais e comunitários",
    imagens: [
      { src: IMAGES.drums, alt: "Roda de tambores tradicionais" },
      { src: IMAGES.ceremony, alt: "Cerimônia de matriz africana" },
      { src: IMAGES.culture, alt: "Manifestação cultural" },
      { src: IMAGES.elder, alt: "Anciã da comunidade" },
      { src: IMAGES.community, alt: "Comunidade reunida em celebração" },
      { src: IMAGES.workshop, alt: "Oficina formativa" },
    ],
  },
  {
    ano: 2023,
    titulo: "Ações, encontros e memórias",
    imagens: [
      { src: IMAGES.hands, alt: "Mãos em gesto de partilha" },
      { src: IMAGES.group, alt: "Grupo em roda de conversa" },
      { src: IMAGES.children, alt: "Crianças em atividade educativa" },
      { src: IMAGES.dance, alt: "Roda de dança comunitária" },
      { src: IMAGES.community, alt: "Mutirão comunitário" },
      { src: IMAGES.ceremony, alt: "Ritual ancestral" },
    ],
  },
  {
    ano: 2022,
    titulo: "Cultura, território e ancestralidade",
    imagens: [
      { src: IMAGES.culture, alt: "Expressão cultural afro-brasileira" },
      { src: IMAGES.elder, alt: "Liderança tradicional" },
      { src: IMAGES.drums, alt: "Tocadores de tambor" },
      { src: IMAGES.workshop, alt: "Encontro formativo" },
      { src: IMAGES.community, alt: "Reunião na comunidade" },
      { src: IMAGES.group, alt: "Coletivo de participantes" },
    ],
  },
  {
    ano: 2021,
    titulo: "Resistência e cuidado em tempos difíceis",
    imagens: [
      { src: IMAGES.hands, alt: "Cuidado entre mãos" },
      { src: IMAGES.community, alt: "Ação solidária na comunidade" },
      { src: IMAGES.children, alt: "Crianças do território" },
      { src: IMAGES.ceremony, alt: "Momento ritual" },
      { src: IMAGES.dance, alt: "Dança em celebração" },
      { src: IMAGES.group, alt: "Famílias reunidas" },
    ],
  },
  {
    ano: 2020,
    titulo: "Ações solidárias e fortalecimento comunitário",
    imagens: [
      { src: IMAGES.community, alt: "Distribuição comunitária" },
      { src: IMAGES.hands, alt: "Gesto de partilha" },
      { src: IMAGES.workshop, alt: "Atividade formativa" },
      { src: IMAGES.children, alt: "Atendimento a crianças" },
      { src: IMAGES.elder, alt: "Ancestralidade presente" },
      { src: IMAGES.group, alt: "Grupo comunitário" },
    ],
  },
  {
    ano: 2019,
    titulo: "Celebrações e festejos tradicionais",
    imagens: [
      { src: IMAGES.ceremony, alt: "Cerimônia tradicional" },
      { src: IMAGES.drums, alt: "Tambores em festa" },
      { src: IMAGES.dance, alt: "Dança ritual" },
      { src: IMAGES.culture, alt: "Festa popular" },
      { src: IMAGES.community, alt: "Comunidade em festa" },
      { src: IMAGES.group, alt: "Grupo festivo" },
    ],
  },
  {
    ano: 2018,
    titulo: "Oficinas, formação e juventude",
    imagens: [
      { src: IMAGES.workshop, alt: "Oficina com jovens" },
      { src: IMAGES.children, alt: "Atividade infantil" },
      { src: IMAGES.group, alt: "Coletivo jovem" },
      { src: IMAGES.hands, alt: "Trabalho em conjunto" },
      { src: IMAGES.community, alt: "Mobilização comunitária" },
      { src: IMAGES.culture, alt: "Expressão cultural" },
    ],
  },
  {
    ano: 2017,
    titulo: "Memória viva e tradição",
    imagens: [
      { src: IMAGES.elder, alt: "Mestres e mestras da tradição" },
      { src: IMAGES.ceremony, alt: "Ritual de matriz africana" },
      { src: IMAGES.drums, alt: "Tambores ancestrais" },
      { src: IMAGES.culture, alt: "Cultura preservada" },
      { src: IMAGES.community, alt: "Roda comunitária" },
      { src: IMAGES.dance, alt: "Dança tradicional" },
    ],
  },
  {
    ano: 2016,
    titulo: "Primeiros registros e ações fundadoras",
    imagens: [
      { src: IMAGES.community, alt: "Início das atividades" },
      { src: IMAGES.group, alt: "Primeiros encontros" },
      { src: IMAGES.hands, alt: "Mãos que constroem" },
      { src: IMAGES.workshop, alt: "Formação inicial" },
      { src: IMAGES.children, alt: "Crianças do começo" },
      { src: IMAGES.elder, alt: "Liderança ancestral" },
    ],
  },
];

function GaleriaPage() {
  const [anoSelecionado, setAnoSelecionado] = useState<number>(GALERIAS[0].ano);
  const atual = GALERIAS.find((g) => g.ano === anoSelecionado) ?? GALERIAS[0];

  return (
    <>
      <PageHero image={IMAGES.heroNews} eyebrow="Memória Viva" title="Galeria" />
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filtros por ano */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {GALERIAS.map((g) => {
              const ativo = g.ano === anoSelecionado;
              return (
                <button
                  key={g.ano}
                  onClick={() => setAnoSelecionado(g.ano)}
                  aria-pressed={ativo}
                  className={
                    "rounded-full px-5 py-2 text-sm font-semibold transition-colors " +
                    (ativo
                      ? "bg-brand-dark text-white shadow-sm"
                      : "bg-white text-brand-dark border border-brand-earth/20 hover:border-brand-earth/40 hover:bg-brand-cream")
                  }
                >
                  {g.ano}
                </button>
              );
            })}
          </div>

          {/* Título */}
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-brand-dark leading-tight text-balance">
              {atual.titulo}
            </h2>
            <span aria-hidden className="mt-5 inline-block h-1 w-16 rounded-full bg-gradient-to-r from-brand-gold to-brand-earth" />
          </div>

          {/* Grid */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {atual.imagens.map((img, i) => (
              <div
                key={`${atual.ano}-${i}`}
                className="overflow-hidden rounded-2xl bg-brand-cream shadow-sm ring-1 ring-brand-earth/10 group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-[240px] sm:h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}