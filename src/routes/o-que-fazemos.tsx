import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { IMAGES, AREAS } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/o-que-fazemos")({
  head: () => ({
    meta: [
      { title: "O Que Fazemos — Família Hùndésô" },
      { name: "description", content: "Atuação em cultura, ancestralidade, projetos sociais, educação, ponto de cultura, turismo cultural e acervo." },
    ],
  }),
  component: OQueFazemos,
});

function OQueFazemos() {
  return (
    <>
      <PageHero image={IMAGES.heroWork} eyebrow="Atuação" title="O que" highlight="fazemos" subtitle="Atuamos na preservação da ancestralidade, na promoção da cultura, no cuidado comunitário e no fortalecimento de ações sociais e educativas."/>

      <section className="py-16 sm:py-20 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
          {AREAS.map((a, idx) => (
            <div key={a.id} id={a.id} className={`grid gap-10 lg:grid-cols-2 items-center ${idx%2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <img src={a.imagem} alt={a.titulo} className="aspect-[4/3] w-full object-cover"/>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-brand-earth font-semibold">Frente de atuação</div>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark text-balance">{a.titulo}</h2>
                <p className="mt-4 text-lg text-foreground/75 leading-relaxed">{a.texto}</p>
                <Link to="/contato" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-sm font-semibold text-white hover:bg-brand-earth transition">
                  Saiba mais <ArrowRight className="h-4 w-4"/>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}