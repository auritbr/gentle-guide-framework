import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, ChevronRight, CalendarDays, ArrowLeft, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { IMAGES } from "@/data/site";

export const Route = createFileRoute("/calendario-liturgico")({
  head: () => ({
    meta: [
      { title: "Calendário Litúrgico — Família Hùndésô" },
      { name: "description", content: "Celebrações, obrigações, ritos e momentos sagrados da Família Hùndésô ao longo do ano." },
      { property: "og:title", content: "Calendário Litúrgico — Família Hùndésô" },
      { property: "og:description", content: "Vivência litúrgica anual da Família Hùndésô." },
    ],
  }),
  component: CalendarioLiturgico,
});

const MESES = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

// NOTE: dados placeholder — editar com as datas reais da Família Hùndésô.
const EVENTOS: Record<number, { titulo: string; data: string }[]> = {
  0: [
    { titulo: "Celebração litúrgica de abertura do ano", data: "Data a definir" },
    { titulo: "Atividade interna da comunidade", data: "Data a definir" },
  ],
  1: [{ titulo: "Rito comunitário", data: "Data a definir" }],
  2: [{ titulo: "Momento de memória e ancestralidade", data: "Data a definir" }],
  3: [{ titulo: "Celebração de tradição", data: "Data a definir" }],
  4: [{ titulo: "Atividade litúrgica", data: "Data a definir" }],
  5: [{ titulo: "Encontro de fé e comunidade", data: "Data a definir" }],
  6: [{ titulo: "Obrigação religiosa", data: "Data a definir" }],
  7: [{ titulo: "Celebração ancestral", data: "Data a definir" }],
  8: [{ titulo: "Momento de cuidado e tradição", data: "Data a definir" }],
  9: [{ titulo: "Rito de fortalecimento comunitário", data: "Data a definir" }],
  10: [{ titulo: "Celebração da memória ancestral", data: "Data a definir" }],
  11: [{ titulo: "Encerramento do ciclo litúrgico", data: "Data a definir" }],
};

function CalendarioLiturgico() {
  const now = new Date();
  const [idx, setIdx] = useState(now.getMonth());
  const prev = () => setIdx((i) => (i + 11) % 12);
  const next = () => setIdx((i) => (i + 1) % 12);
  const eventos = EVENTOS[idx] ?? [];

  return (
    <>
      <PageHero
        image={IMAGES.ceremony}
        eyebrow="Tradição e ancestralidade"
        title="Calendário"
        highlight="Litúrgico"
        subtitle="Celebrações, obrigações, ritos e momentos sagrados que orientam a vivência religiosa da Família Hùndésô ao longo do ano."
      />

      <section className="py-16 sm:py-20 bg-brand-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.25em] text-brand-earth font-semibold">Navegação</div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-brand-dark text-balance leading-[1.1]">Calendário do ano</h2>
            <p className="mt-3 text-base sm:text-lg text-foreground/75 leading-relaxed">
              Navegue mês a mês para acompanhar as datas, celebrações e momentos litúrgicos da Família Hùndésô.
            </p>
          </div>

          <div className="mt-10 rounded-3xl bg-white p-6 sm:p-10 shadow-md ring-1 ring-brand-earth/10">
            <div className="flex items-center justify-between gap-4">
              <button onClick={prev} aria-label="Mês anterior" className="grid h-11 w-11 place-items-center rounded-full bg-brand-cream text-brand-earth hover:bg-brand-gold hover:text-brand-dark transition">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-brand-earth">
                  <CalendarDays className="h-4 w-4" />
                  <span className="text-[11px] uppercase tracking-[0.25em] font-semibold">Mês</span>
                </div>
                <div className="mt-2 font-display text-3xl sm:text-4xl font-bold text-brand-dark">
                  {MESES[idx]} <span className="text-brand-earth">{now.getFullYear()}</span>
                </div>
              </div>
              <button onClick={next} aria-label="Próximo mês" className="grid h-11 w-11 place-items-center rounded-full bg-brand-cream text-brand-earth hover:bg-brand-gold hover:text-brand-dark transition">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {eventos.length === 0 && (
                <p className="text-sm text-foreground/60">Nenhum evento cadastrado neste mês.</p>
              )}
              {eventos.map((ev) => (
                <article key={ev.titulo} className="rounded-2xl bg-brand-cream/60 px-5 py-4 ring-1 ring-brand-earth/10">
                  <div className="text-xs uppercase tracking-[0.2em] text-brand-earth font-semibold">{MESES[idx]}</div>
                  <h3 className="mt-1 font-display text-lg font-bold text-brand-dark">{ev.titulo}</h3>
                  <p className="mt-1 text-sm text-foreground/70">{ev.data}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link to="/contato" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-earth hover:text-brand-red">
                Quer mais informações? Fale conosco <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <p className="mt-4 text-xs text-foreground/50 text-center">* Datas em fase de atualização — entre em contato para confirmar a programação.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-brand-gold-soft border-y border-brand-gold/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-dark text-balance leading-tight">
            Acompanhe a vivência litúrgica da Família Hùndésô
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-dark/70 leading-relaxed">
            Entre em contato para saber mais sobre a programação, os ritos e as atividades abertas à comunidade.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/contato" className="inline-flex items-center gap-2 rounded-full bg-white text-brand-dark px-6 py-3 text-sm font-bold hover:bg-brand-cream transition">
              Fale conosco <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-brand-gold/50 px-6 py-3 text-sm font-bold text-brand-dark hover:bg-brand-gold/10 transition">
              <ArrowLeft className="h-4 w-4" /> Voltar para página inicial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}