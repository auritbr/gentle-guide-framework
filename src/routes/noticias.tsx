import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { IMAGES, NOTICIAS } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Notícias — Família Hùndésô" },
      { name: "description", content: "Notícias, registros e novidades da Família Hùndésô." },
    ],
  }),
  component: Noticias,
});

const CATEGORIAS = ["Todas", "Cultura", "Comunidade", "Memória", "Projetos", "Eventos"];

const TODAS = [
  ...NOTICIAS,
  { categoria: "Eventos", titulo: "Calendário cultural anuncia datas das celebrações", resumo: "Confira a programação completa de festejos, encontros e atividades abertas ao público.", imagem: IMAGES.dance, data: "02 fev 2025" },
  { categoria: "Comunidade", titulo: "Mutirão reúne voluntários em ação de cidadania", resumo: "Atividade fortaleceu vínculos com a vizinhança e apoiou famílias da região.", imagem: IMAGES.community, data: "20 jan 2025" },
  { categoria: "Memória", titulo: "Roda de conversa marca dia da memória ancestral", resumo: "Encontro reuniu gerações para partilha de histórias e saberes tradicionais.", imagem: IMAGES.elder, data: "10 jan 2025" },
];

function Noticias() {
  const [cat, setCat] = useState("Todas");
  const lista = cat === "Todas" ? TODAS : TODAS.filter((n) => n.categoria === cat);
  return (
    <>
      <PageHero image={IMAGES.heroNews} eyebrow="Comunicação" title="" highlight="Notícias" subtitle="Acompanhe registros, projetos, eventos e novidades da Família Hùndésô."/>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-12">
            {CATEGORIAS.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${cat===c?"bg-brand-dark text-white":"bg-brand-cream text-brand-dark hover:bg-brand-gold"}`}>{c}</button>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {lista.map((n) => (
              <article key={n.titulo} className="group overflow-hidden rounded-3xl bg-brand-cream hover:shadow-xl transition">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={n.imagem} alt={n.titulo} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-brand-earth px-3 py-1 font-semibold text-white">{n.categoria}</span>
                    <span className="text-foreground/60">{n.data}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold text-brand-dark">{n.titulo}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{n.resumo}</p>
                  <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-earth hover:text-brand-red">Ler mais <ArrowRight className="h-3.5 w-3.5"/></button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}