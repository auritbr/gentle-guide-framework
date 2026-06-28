import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { PROJETOS_LISTA, type ProjetoDetalhe } from "@/data/site";
import { InstitutionalCard } from "@/components/site/InstitutionalCard";

export const Route = createFileRoute("/projetos/$slug")({
  head: ({ params }) => {
    const projeto = PROJETOS_LISTA.find((p) => p.slug === params.slug);
    return {
      meta: [
        { title: projeto ? `${projeto.titulo} — Família Hùndésô` : "Projeto — Família Hùndésô" },
        { name: "description", content: projeto?.resumo ?? "Projetos da Família Hùndésô." },
      ],
    };
  },
  loader: ({ params }) => {
    const projeto = PROJETOS_LISTA.find((p) => p.slug === params.slug);
    if (!projeto) throw notFound();
    return { projeto };
  },
  component: ProjetoInternoPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-32 text-center">
      <h1 className="font-display text-3xl font-bold text-brand-dark">Projeto não encontrado</h1>
      <Link to="/projetos" className="mt-6 inline-flex items-center gap-2 text-brand-earth font-semibold">
        <ArrowLeft className="h-4 w-4" /> Voltar para projetos
      </Link>
    </div>
  ),
});

function ProjetoInternoPage() {
  const { projeto } = Route.useLoaderData() as { projeto: ProjetoDetalhe };

  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[48vh] lg:min-h-[58vh] items-end overflow-hidden pt-20">
        <img src={projeto.imagem} alt={projeto.titulo} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-dark via-brand-dark/75 to-brand-dark/40" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-brand-gold backdrop-blur">
            {projeto.label}
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-[34px] sm:text-[44px] lg:text-[54px] font-bold leading-[1.1] text-white text-balance">
            {projeto.titulo}
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed">
            {projeto.subtitulo}
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
          <span className="text-brand-dark font-semibold truncate">{projeto.titulo}</span>
        </div>
      </nav>

      {/* Conteúdo */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          {projeto.secoes.map((sec, i) => (
            <article key={i}>
              {sec.titulo && (
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-dark mb-5">
                  {sec.titulo}
                </h2>
              )}
              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-foreground/80">
                {sec.paragrafos.map((p, j) => <p key={j}>{p}</p>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Card groups */}
      {projeto.cardGrupos && projeto.cardGrupos.length > 0 && (
        <section className="py-16 sm:py-20 bg-brand-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            {projeto.cardGrupos.map((grupo, gi) => (
              <div key={gi}>
                {grupo.titulo && (
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-dark mb-6">
                    {grupo.titulo}
                  </h2>
                )}
                <div className={`grid gap-5 ${grupo.cards.length >= 4 ? "sm:grid-cols-2 lg:grid-cols-4" : grupo.cards.length === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`}>
                  {grupo.cards.map((c) => (
                    <InstitutionalCard key={c.titulo} titulo={c.titulo} texto={c.texto} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Galeria de fotos */}
      {projeto.galeria && projeto.galeria.length > 0 && (
        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.25em] text-brand-earth font-semibold">Imagens</div>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-brand-dark">Galeria de fotos</h2>
              <p className="mt-3 text-sm sm:text-base text-foreground/70 leading-relaxed">
                Registros das ações, territórios, encontros e atividades relacionadas a esta iniciativa.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projeto.galeria.map((src, i) => (
                <div key={i} className="overflow-hidden rounded-2xl aspect-[4/3] bg-brand-cream">
                  <img
                    src={src}
                    alt={`${projeto.titulo} — imagem ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-14 lg:py-16 bg-gradient-earth">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight text-balance">
            Apoie esse projeto e fortaleça a Família Hùndésô
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/85 leading-relaxed">
            Conheça outras iniciativas, fale conosco ou contribua para que essas ações cheguem cada vez mais longe.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/projetos" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors">
              <ArrowLeft className="h-4 w-4" /> Voltar para projetos
            </Link>
            <Link to="/contato" className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors">
              Fale conosco
            </Link>
            <Link to="/como-ajudar" className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md hover:opacity-90 transition-opacity">
              Apoie agora
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}