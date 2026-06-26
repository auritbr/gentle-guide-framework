import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PROJETOS, IMAGES } from "@/data/site";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — Família Hùndésô" },
      { name: "description", content: "Conheça os projetos sociais, culturais e educativos da Família Hùndésô." },
    ],
  }),
  component: ProjetosPage,
});

function ProjetosPage() {
  return (
    <>
      <PageHero image={IMAGES.heroWork} eyebrow="Nossas Iniciativas" title="Projetos" />
      <section className="py-20 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PROJETOS.map((p) => (
              <article key={p.titulo} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.imagem} alt={p.titulo} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-brand-dark">{p.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">{p.descricao}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/como-ajudar" className="inline-flex items-center justify-center rounded-full bg-gradient-warm px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md">
              Apoie nossos projetos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}