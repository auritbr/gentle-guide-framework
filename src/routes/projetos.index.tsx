import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { IMAGES, PILARES, POLITICAS, PROJETOS_LISTA } from "@/data/site";
import { ArrowRight } from "lucide-react";
import { InstitutionalCard } from "@/components/site/InstitutionalCard";

export const Route = createFileRoute("/projetos/")({
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-brand-earth font-semibold">Nossa atuação</div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-brand-dark leading-tight text-balance">
              Como atuamos
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
            {PROJETOS_LISTA.filter((p) => p.slug !== "comunidade-riacho-branco" && p.slug !== "rota-dos-voduns").map((p) => (
              <article key={p.slug} className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow">
                <div className="h-52 overflow-hidden">
                  <img src={p.imagem} alt={p.titulo} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-brand-earth">{p.label}</span>
                  <h3 className="mt-2 font-display text-xl font-bold text-brand-dark">{p.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">{p.resumo}</p>
                  <div className="mt-auto pt-6">
                    <Link
                      to="/projetos/$slug"
                      params={{ slug: p.slug }}
                      className="group/btn inline-flex items-center justify-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-sm font-bold leading-none text-white hover:bg-brand-earth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-earth focus-visible:ring-offset-2 transition-colors"
                    >
                      Saiba mais
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Rota dos Voduns */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.25em] text-brand-earth font-semibold">Afroturismo comunitário</div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-brand-dark">Rota dos Voduns</h2>
            <p className="mt-5 text-base sm:text-lg text-foreground/80 leading-relaxed">
              A Rota dos Voduns reúne experiências de memória, território, ancestralidade, natureza e afroturismo comunitário ligadas ao Hùnkpámè Ayónó Hùndésô e à Comunidade Riacho Branco.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {PROJETOS_LISTA.filter((p) => p.slug === "comunidade-riacho-branco" || p.slug === "rota-dos-voduns").map((p) => (
              <article key={p.slug} className="group flex flex-col overflow-hidden rounded-2xl bg-brand-cream shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-shadow">
                <div className="h-52 overflow-hidden">
                  <img src={p.imagem} alt={p.titulo} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-brand-earth">{p.label}</span>
                  <h3 className="mt-2 font-display text-xl font-bold text-brand-dark">{p.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">{p.resumo}</p>
                  <div className="mt-auto pt-6">
                    <Link
                      to="/projetos/$slug"
                      params={{ slug: p.slug }}
                      className="group/btn inline-flex items-center justify-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-sm font-bold leading-none text-white hover:bg-brand-earth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-earth focus-visible:ring-offset-2 transition-colors"
                    >
                      Saiba mais
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Políticas públicas */}
      <section className="py-16 sm:py-20 bg-brand-cream">
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
              <InstitutionalCard
                key={bloco.titulo}
                titulo={bloco.titulo}
                texto={bloco.paragrafos}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-14 lg:py-16 bg-brand-gold-soft border-y border-brand-gold/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark leading-tight text-balance">
            Conheça, acompanhe e apoie nossos projetos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-dark/70 leading-relaxed">
            Cada ação fortalece a memória, a cidadania, a cultura e o cuidado comunitário nos territórios onde a Família Hùndésô atua.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/contato" className="inline-flex items-center justify-center rounded-full border border-brand-gold/50 px-6 py-3 text-sm font-bold uppercase tracking-wider text-brand-dark hover:bg-brand-gold/10 transition-colors">
              Fale conosco
            </Link>
            <Link to="/como-ajudar" className="inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#0077B6] transition-colors">
              Apoie agora
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}