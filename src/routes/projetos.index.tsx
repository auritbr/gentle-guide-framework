import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { IMAGES, PILARES, POLITICAS, PROJETOS_LISTA } from "@/data/site";
import { ArrowRight } from "lucide-react";

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
      <PageHero
        image={IMAGES.heroWork}
        eyebrow="Projetos"
        title=""
        highlight="Como atuamos"
        subtitle="A Família Hùndésô atua por meio de projetos sociais, culturais, educativos, comunitários e de incidência política, contribuindo para o enfrentamento das desigualdades sociais e para o fortalecimento das comunidades atendidas."
      />

      {/* Introdução */}
      <section className="py-16 sm:py-20 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-brand-earth font-semibold">Nossa atuação</div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-brand-dark leading-tight text-balance">
              Projetos que fortalecem cultura, comunidade e cidadania
            </h2>
          </div>
          <div className="space-y-5 text-base sm:text-lg text-foreground/80 leading-relaxed">
            <p>A Família Hùndésô atua por meio de projetos sociais, culturais, educativos, comunitários e de incidência política, contribuindo para o enfrentamento das desigualdades sociais e para o fortalecimento das comunidades atendidas.</p>
            <p>Nosso trabalho está em consonância com diretrizes de políticas públicas voltadas à cultura, educação, assistência social, saúde, direitos humanos e desenvolvimento comunitário. Também dialoga com os Objetivos de Desenvolvimento Sustentável (ODS), especialmente aqueles relacionados à erradicação da pobreza, redução das desigualdades, promoção da justiça social e valorização das comunidades tradicionais.</p>
            <p className="font-semibold text-brand-dark">Nossas ações são desenvolvidas a partir de cinco pilares principais:</p>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PILARES.map((p, i) => (
              <article key={p.titulo} className="rounded-2xl border border-brand-earth/10 bg-brand-cream p-6 hover:shadow-md transition-shadow">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-gold text-white text-sm font-bold">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-brand-dark">{p.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{p.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Nossos projetos */}
      <section className="py-16 sm:py-20 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-brand-earth font-semibold">Iniciativas</div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-brand-dark">Nossos projetos</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJETOS_LISTA.map((p) => (
              <article key={p.slug} className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow">
                <div className="h-52 overflow-hidden">
                  <img src={p.imagem} alt={p.titulo} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-brand-earth">{p.label}</span>
                  <h3 className="mt-2 font-display text-xl font-bold text-brand-dark">{p.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70 line-clamp-5">{p.resumo}</p>
                  <Link
                    to="/projetos/$slug"
                    params={{ slug: p.slug }}
                    className="mt-5 inline-flex items-center gap-2 self-start rounded-full bg-brand-dark px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-earth transition-colors"
                  >
                    Saiba mais
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Políticas públicas */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-brand-earth font-semibold">Incidência</div>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-brand-dark leading-tight text-balance">
                Atuação nas políticas públicas
              </h2>
            </div>
            <div className="space-y-5 text-base sm:text-lg text-foreground/80 leading-relaxed">
              <p>A Família Hùndésô atua como polo de resistência democrática, controle social e fortalecimento comunitário. A instituição utiliza sua legitimidade junto às comunidades para participar de redes de apoio, conselhos, frentes de mobilização popular e espaços de construção de políticas públicas.</p>
              <p>Sua atuação busca pautar o Estado para que direitos, serviços e políticas alcancem a população negra, comunidades tradicionais de matriz africana, territórios rurais, periferias e grupos historicamente vulnerabilizados.</p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {POLITICAS.map((bloco) => (
              <div key={bloco.titulo} className="rounded-2xl bg-brand-cream p-7 border-l-4 border-brand-gold">
                <h3 className="font-display text-xl font-bold text-brand-dark">{bloco.titulo}</h3>
                <div className="mt-3 space-y-3 text-sm sm:text-base leading-relaxed text-foreground/75">
                  {bloco.paragrafos.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-14 lg:py-16 bg-gradient-earth">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight text-balance">
            Conheça, acompanhe e apoie nossos projetos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/85 leading-relaxed">
            Cada ação fortalece a memória, a cidadania, a cultura e o cuidado comunitário nos territórios onde a Família Hùndésô atua.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
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