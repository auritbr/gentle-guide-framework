import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Coins, Package, Apple, CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { IMAGES, NOTICIAS } from "@/data/site";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { NewsCard } from "@/components/site/NewsCard";
import { YouTubeSection } from "@/components/site/YouTubeSection";
import { PartnersSection } from "@/components/site/PartnersSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Família Hùndésô — Ancestralidade, cultura e cuidado comunitário" },
      { name: "description", content: "Organização de matriz africana atuando em cultura, memória, projetos sociais, educação e ações comunitárias." },
      { property: "og:title", content: "Família Hùndésô" },
      { property: "og:description", content: "Ancestralidade, cultura, memória e cuidado comunitário." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroCarousel />

      {/* Apresentação */}
      <section className="py-16 sm:py-20 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-brand-earth font-semibold">Quem Somos</div>
            <h2 className="mt-4 font-display text-[32px] sm:text-[40px] md:text-[44px] lg:text-[52px] font-bold text-brand-dark text-balance leading-[1.1]">
              Família Hùndésô: <span className="text-brand-earth">quem somos?</span>
            </h2>
          </div>
          <div className="space-y-5 text-[17px] sm:text-[18px] lg:text-[20px] leading-[1.7] text-foreground/80">
            <p>A Família Hùndésô é uma organização de atuação religiosa, social, cultural e beneficente, comprometida com a preservação das tradições afro-brasileiras, o fortalecimento da identidade ancestral e a promoção de ações voltadas à cidadania, cultura, educação, memória e cuidado comunitário.</p>
            <p>A partir de sua trajetória, a instituição se consolidou como espaço de acolhimento, resistência, transmissão de saberes e valorização das comunidades tradicionais de terreiro.</p>
            <Link to="/quem-somos" className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand-earth hover:text-brand-red">
              Saiba mais sobre nossa trajetória <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Impacto */}
      <section className="relative isolate py-20 overflow-hidden">
        <img src={IMAGES.community} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover"/>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/55 to-black/65"/>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mx-auto max-w-3xl font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight">
            Cultura, memória e <span className="highlight-stripe">transformação social</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
            Por meio de ações culturais, educativas, religiosas e comunitárias, a Família Hùndésô fortalece vínculos, preserva tradições e contribui para a construção de uma sociedade mais justa, plural e respeitosa.
          </p>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {n:"+",l:"anos de trajetória",s:"Tradição"},
              {n:"+",l:"pessoas alcançadas",s:"Comunidade"},
              {n:"+",l:"ações culturais",s:"Cultura"},
              {n:"+",l:"projetos realizados",s:"Ancestralidade"},
            ].map((s) => (
              <div key={s.s} className="rounded-2xl bg-white/10 backdrop-blur p-6 ring-1 ring-white/20">
                <div className="font-display text-5xl font-bold text-brand-gold">{s.n}</div>
                <div className="mt-2 text-sm text-white/70">{s.l}</div>
                <div className="mt-3 text-xs uppercase tracking-[0.2em] text-white font-semibold">{s.s}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-white/50">* números editáveis — atualize com os dados oficiais da instituição.</p>
        </div>
      </section>

      {/* O que fazemos (compacta) */}
      <section className="py-12 sm:py-14 bg-brand-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-6 rounded-3xl bg-white p-7 sm:p-9 shadow-sm ring-1 ring-brand-earth/10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="text-[11px] uppercase tracking-[0.25em] text-brand-earth font-semibold">O que fazemos</div>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-brand-dark text-balance">
                Projetos que fortalecem cultura, memória e comunidade
              </h2>
              <p className="mt-2 text-[15px] text-foreground/70 leading-relaxed">
                A Família Hùndésô atua por meio de projetos sociais, culturais, educativos, comunitários e de incidência política, promovendo cidadania, ancestralidade, cuidado e fortalecimento das comunidades atendidas.
              </p>
            </div>
            <Link to="/projetos" className="shrink-0 inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-sm font-bold text-white hover:bg-brand-earth transition">
              Conhecer projetos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projetos e iniciativas */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.25em] text-brand-earth font-semibold">Em destaque</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-brand-dark text-balance">Memória, luta e tradição</h2>
            <p className="mt-4 text-base sm:text-lg text-foreground/70 leading-relaxed">
              Conheça frentes históricas, culturais e sociais que fazem parte da trajetória da Família Hùndésô e fortalecem sua atuação comunitária, religiosa e cultural.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                titulo: "LGBTQIA+",
                descricao: "A criação do grupo ajudou a consolidar as bases para o avanço de políticas públicas afirmativas, abrindo caminhos para as gerações seguintes de ativistas em Alagoas.",
                imagem: IMAGES.hands,
                to: "/projetos/lgbtqia" as const,
              },
              {
                titulo: "Página do Presidente",
                descricao: "O histórico completo de atuação e a trajetória do líder cultural e religioso Doté Elias destacam o seu papel central na preservação das tradições de matriz africana, na cultura popular e no ativismo social no estado de Alagoas.",
                imagem: IMAGES.elder,
                to: "/projetos/presidente" as const,
              },
              {
                titulo: "Maracatu",
                descricao: "O Maracatu Nação Acorte de Alagoas é um dos principais símbolos contemporâneos de resistência e salvaguarda da cultura afro-alagoana.",
                imagem: IMAGES.drums,
                to: "/projetos/maracatu" as const,
              },
            ].map((p) => (
              <article key={p.titulo} className="group relative overflow-hidden rounded-3xl">
                <div className="aspect-[4/5]">
                  <img src={p.imagem} alt={p.titulo} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"/>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl font-bold text-white">{p.titulo}</h3>
                  <p className="mt-2 text-sm text-white/85 leading-relaxed">{p.descricao}</p>
                  <Link
                    to={p.to}
                    className="mt-4 inline-flex items-center gap-1 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold text-white hover:bg-brand-gold hover:text-brand-dark transition"
                  >
                    Saiba mais <ArrowRight className="h-3 w-3"/>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Como você pode ajudar */}
      <section className="py-16 sm:py-20 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.25em] text-brand-earth font-semibold">Apoie</div>
            <h2 className="mt-4 font-display text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-brand-dark text-balance leading-[1.1]">Como você pode ajudar</h2>
            <p className="mt-4 text-base sm:text-lg text-foreground/70 leading-relaxed">
              Escolha a forma de contribuição que mais combina com você e fortaleça as ações sociais, culturais e comunitárias da Família Hùndésô.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Coins,
                img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
                titulo: "Doação financeira",
                texto: "Contribua com um valor único, mensal ou anual para apoiar a continuidade dos projetos da instituição.",
                btn: "Doar agora",
                to: "/como-ajudar/doacao-financeira" as const,
              },
              {
                icon: Apple,
                img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
                titulo: "Doação de mantimentos",
                texto: "Doe alimentos, cestas básicas e itens essenciais para fortalecer ações de acolhimento e cuidado comunitário.",
                btn: "Doar mantimentos",
                to: "/como-ajudar/doacao-mantimentos" as const,
              },
              {
                icon: Package,
                img: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&w=1200&q=80",
                titulo: "Doação de itens",
                texto: "Roupas, calçados, brinquedos, livros e utensílios em bom estado podem ganhar uma nova vida e apoiar famílias atendidas.",
                btn: "Doar itens",
                to: "/como-ajudar/doacao-itens" as const,
              },
            ].map((c) => (
              <article key={c.titulo} className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-brand-earth/10 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={c.img} alt={c.titulo} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl bg-white/95 text-brand-earth shadow">
                    <c.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold text-brand-dark">{c.titulo}</h3>
                  <p className="mt-2 flex-1 text-[15px] text-foreground/75 leading-relaxed">{c.texto}</p>
                  <Link
                    to={c.to}
                    className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-dark px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-earth transition"
                  >
                    {c.btn} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Notícias */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-brand-earth font-semibold">Acompanhe</div>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-brand-dark text-balance">Notícias e registros</h2>
            </div>
            <Link to="/noticias" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-earth hover:text-brand-red">
              Ver todas <ArrowRight className="h-4 w-4"/>
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {NOTICIAS.slice(0, 3).map((n) => (
              <NewsCard key={n.id} n={n} />
            ))}
          </div>
        </div>
      </section>

      {/* Transparência (compacta) */}
      <section className="py-12 sm:py-14 bg-brand-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-6 rounded-3xl bg-white p-7 sm:p-9 shadow-sm ring-1 ring-brand-earth/10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="text-[11px] uppercase tracking-[0.25em] text-brand-earth font-semibold">Transparência</div>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-brand-dark text-balance">Transparência e compromisso</h2>
              <p className="mt-2 text-[15px] text-foreground/70 leading-relaxed">
                Acesse documentos, registros e informações institucionais que fortalecem a relação de confiança entre a Família Hùndésô, a comunidade, parceiros e apoiadores.
              </p>
            </div>
            <Link to="/transparencia" className="shrink-0 inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-sm font-bold text-white hover:bg-brand-earth transition">
              Acessar transparência <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Calendário Litúrgico (prévia) */}
      <CalendarPreview />

      {/* YouTube */}
      <YouTubeSection />

      {/* Parceiros e apoios */}
      <PartnersSection />

      {/* CTA Final */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-brand-dark via-brand-earth to-brand-dark text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance leading-tight">
            Fortaleça a memória, a cultura e a comunidade
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-white/90 leading-relaxed">
            Acompanhe as ações da Família Hùndésô, conheça sua trajetória e apoie a continuidade de projetos sociais, culturais, religiosos e comunitários.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/projetos" className="inline-flex items-center gap-2 rounded-full bg-white text-brand-dark px-7 py-3 text-sm font-bold hover:bg-brand-cream transition">
              Conhecer projetos <ArrowRight className="h-4 w-4"/>
            </Link>
            <Link to="/como-ajudar/doacao-financeira" className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 px-7 py-3 text-sm font-bold text-white hover:bg-white/10 transition">
              Como ajudar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const MESES_PT = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

function CalendarPreview() {
  const now = new Date();
  const [idx, setIdx] = useState(now.getMonth());
  const eventos: Record<number, string[]> = {
    0: ["Celebração litúrgica de abertura do ano", "Atividade interna da comunidade"],
    1: ["Rito comunitário de fevereiro"],
    2: ["Momento de memória e ancestralidade"],
    3: ["Celebração de tradição"],
    4: ["Atividade litúrgica de maio"],
    5: ["Encontro de fé e comunidade"],
    6: ["Obrigação religiosa"],
    7: ["Celebração ancestral"],
    8: ["Momento de cuidado e tradição"],
    9: ["Rito de fortalecimento comunitário"],
    10: ["Celebração da memória ancestral"],
    11: ["Encerramento do ciclo litúrgico"],
  };
  const prev = () => setIdx((i) => (i + 11) % 12);
  const next = () => setIdx((i) => (i + 1) % 12);
  return (
    <section className="py-16 sm:py-20 bg-brand-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-brand-earth font-semibold">Calendário Litúrgico</div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark text-balance leading-[1.1]">
            Um ano de fé, tradição e ancestralidade
          </h2>
          <p className="mt-4 text-base sm:text-lg text-foreground/75 leading-relaxed">
            A Família Hùndésô mantém um calendário litúrgico anual com celebrações, obrigações, ritos e momentos sagrados que orientam a vivência religiosa da comunidade ao longo do ano.
          </p>
          <Link to="/calendario-liturgico" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-sm font-bold text-white hover:bg-brand-earth transition">
            Ver calendário completo <ArrowRight className="h-4 w-4"/>
          </Link>
        </div>
        <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-md ring-1 ring-brand-earth/10">
          <div className="flex items-center justify-between">
            <button onClick={prev} aria-label="Mês anterior" className="grid h-10 w-10 place-items-center rounded-full bg-brand-cream text-brand-earth hover:bg-brand-gold hover:text-brand-dark transition">
              <ChevronLeft className="h-5 w-5"/>
            </button>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-brand-earth">
                <CalendarDays className="h-4 w-4"/>
                <span className="text-[11px] uppercase tracking-[0.25em] font-semibold">Mês em destaque</span>
              </div>
              <div className="mt-1 font-display text-2xl sm:text-3xl font-bold text-brand-dark">{MESES_PT[idx]} <span className="text-brand-earth">{now.getFullYear()}</span></div>
            </div>
            <button onClick={next} aria-label="Próximo mês" className="grid h-10 w-10 place-items-center rounded-full bg-brand-cream text-brand-earth hover:bg-brand-gold hover:text-brand-dark transition">
              <ChevronRight className="h-5 w-5"/>
            </button>
          </div>
          <ul className="mt-6 space-y-3">
            {(eventos[idx] ?? []).map((ev) => (
              <li key={ev} className="flex items-start gap-3 rounded-2xl bg-brand-cream/60 px-4 py-3">
                <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-gold/30 text-brand-earth text-xs font-bold">•</span>
                <div>
                  <div className="text-sm font-semibold text-brand-dark">{ev}</div>
                  <div className="text-xs text-foreground/60">Data a definir</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
