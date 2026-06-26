import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Users, BookOpen, Sparkles, Check } from "lucide-react";
import { IMAGES, AREAS, PROJETOS, NOTICIAS } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";

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
      <PageHero
        image={IMAGES.heroHome}
        eyebrow="Família Hùndésô"
        title="Ancestralidade, cultura e"
        highlight="cuidado comunitário"
        subtitle="A Família Hùndésô atua na preservação das tradições de matriz africana, na valorização da memória ancestral e no desenvolvimento de ações sociais, culturais e educativas junto à comunidade."
      >
        <Link to="/quem-somos" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-dark hover:bg-brand-gold transition">
          Conheça nossa história <ArrowRight className="h-4 w-4" />
        </Link>
        <Link to="/como-ajudar" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
          Apoie essa missão
        </Link>
      </PageHero>

      {/* Apresentação */}
      <section className="py-24 sm:py-32 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-brand-earth font-semibold">Quem Somos</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark text-balance leading-[1.05]">
              Família Hùndésô: <span className="highlight-stripe">quem somos?</span>
            </h2>
          </div>
          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-foreground/80">
            <p>A Família Hùndésô é uma organização de atuação religiosa, social, cultural e beneficente, comprometida com a preservação das tradições afro-brasileiras, o fortalecimento da identidade ancestral e a promoção de ações voltadas à cidadania, cultura, educação, memória e cuidado comunitário.</p>
            <p>A partir de sua trajetória, a instituição se consolidou como espaço de acolhimento, resistência, transmissão de saberes e valorização das comunidades tradicionais de terreiro.</p>
            <Link to="/quem-somos" className="inline-flex items-center gap-2 font-semibold text-brand-earth hover:text-brand-red">
              Saiba mais sobre nossa trajetória <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Missão Visão Valores */}
      <section className="py-24 sm:py-32 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage:`url(${IMAGES.culture})`,backgroundSize:'cover',backgroundPosition:'center'}}/>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/95 to-brand-dark"/>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold">Nossos princípios</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-balance">O que nos guia</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {t:"Missão",d:"Preservar, fortalecer e compartilhar saberes ancestrais, promovendo cultura, espiritualidade, educação e cuidado comunitário.",g:"bg-gradient-warm"},
              {t:"Visão",d:"Ser referência na valorização das tradições de matriz africana, na defesa da memória ancestral e na promoção de ações sociais e culturais transformadoras.",g:"bg-gradient-earth"},
              {t:"Valores",d:"Ancestralidade, respeito, comunidade, inclusão, solidariedade, memória, fé, cultura e compromisso social.",g:"bg-gradient-gold"},
            ].map((c) => (
              <div key={c.t} className={`${c.g} rounded-3xl p-8 shadow-2xl`}>
                <h3 className="font-display text-3xl font-bold text-white">{c.t}</h3>
                <p className="mt-4 text-white/90 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impacto */}
      <section className="relative isolate py-32 overflow-hidden">
        <img src={IMAGES.community} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover"/>
        <div className="absolute inset-0 -z-10 bg-brand-dark/80"/>
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

      {/* O que fazemos */}
      <section className="py-24 sm:py-32 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.25em] text-brand-earth font-semibold">Atuação</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-brand-dark text-balance">O que fazemos</h2>
            <p className="mt-4 text-lg text-foreground/70">Atuamos em frentes que dialogam entre si: cultura, memória, educação, religiosidade e ação social.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AREAS.map((a) => (
              <article key={a.titulo} className="group overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-2xl transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={a.imagem} alt={a.titulo} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-brand-dark">{a.titulo}</h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{a.texto}</p>
                  <Link to="/o-que-fazemos" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-earth hover:text-brand-red">
                    Saiba mais <ArrowRight className="h-3.5 w-3.5"/>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-brand-earth font-semibold">Em destaque</div>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-brand-dark text-balance">Projetos e iniciativas</h2>
            </div>
            <Link to="/o-que-fazemos" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-earth hover:text-brand-red">
              Ver todos <ArrowRight className="h-4 w-4"/>
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJETOS.map((p) => (
              <article key={p.titulo} className="group relative overflow-hidden rounded-3xl">
                <div className="aspect-[4/5]">
                  <img src={p.imagem} alt={p.titulo} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"/>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl font-bold text-white">{p.titulo}</h3>
                  <p className="mt-2 text-sm text-white/85 leading-relaxed">{p.descricao}</p>
                  <button className="mt-4 inline-flex items-center gap-1 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold text-white hover:bg-brand-gold hover:text-brand-dark transition">
                    Saiba mais <ArrowRight className="h-3 w-3"/>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Por que apoiar */}
      <section className="py-24 sm:py-32 bg-gradient-warm text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage:`url(${IMAGES.hands})`,backgroundSize:'cover',backgroundPosition:'center'}}/>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-white/70 font-semibold">Por que apoiar?</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-[1.05]">
              Apoiar a Família Hùndésô é fortalecer cultura, memória e comunidade.
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-white/90">Sua contribuição ajuda a manter ações culturais, projetos sociais, atividades educativas, preservação da memória ancestral e iniciativas comunitárias realizadas pela instituição.</p>
            <ul className="space-y-3">
              {[
                "Fortalece a preservação das tradições afro-brasileiras.",
                "Contribui para ações culturais e educativas.",
                "Apoia projetos sociais e comunitários.",
                "Ajuda na manutenção dos espaços, atividades e registros da instituição.",
              ].map((i) => (
                <li key={i} className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-brand-gold mt-0.5"/><span>{i}</span></li>
              ))}
            </ul>
            <Link to="/como-ajudar" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-dark hover:bg-brand-gold transition">
              <Heart className="h-4 w-4"/> Quero apoiar
            </Link>
          </div>
        </div>
      </section>

      {/* Transparência */}
      <section className="py-24 sm:py-32 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.25em] text-brand-earth font-semibold">Compromisso</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-brand-dark text-balance">Transparência e compromisso</h2>
            <p className="mt-4 text-lg text-foreground/70">A transparência fortalece a confiança entre a instituição, a comunidade, parceiros, apoiadores e órgãos públicos. Nesta área, estarão disponíveis documentos institucionais, relatórios, registros, certificações e materiais de prestação de contas.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {t:"Documentos Institucionais",i:BookOpen},
              {t:"Relatórios",i:Sparkles},
              {t:"Certificações",i:Check},
              {t:"Prestação de Contas",i:Users},
            ].map(({t,i:Icon}) => (
              <div key={t} className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-earth/10 text-brand-earth">
                  <Icon className="h-5 w-5"/>
                </div>
                <div className="mt-4 font-display text-lg font-bold text-brand-dark">{t}</div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/transparencia" className="inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-sm font-bold text-white hover:bg-brand-earth transition">
              Acessar transparência <ArrowRight className="h-4 w-4"/>
            </Link>
          </div>
        </div>
      </section>

      {/* Notícias */}
      <section className="py-24 sm:py-32 bg-white">
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
            {NOTICIAS.map((n) => (
              <article key={n.titulo} className="group overflow-hidden rounded-3xl bg-brand-cream hover:shadow-xl transition-shadow">
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

      {/* Newsletter */}
      <section className="py-24 bg-gradient-earth text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-balance">Receba novidades da Família Hùndésô</h2>
          <p className="mt-4 text-lg text-white/85">Cadastre-se para acompanhar notícias, ações culturais, projetos, eventos e comunicados da instituição.</p>
          <form className="mt-10 grid gap-4 text-left max-w-2xl mx-auto" onSubmit={(e)=>e.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <input placeholder="Nome" className="rounded-full bg-white/10 backdrop-blur border border-white/20 px-5 py-3 placeholder:text-white/50 text-white focus:outline-none focus:ring-2 focus:ring-brand-gold"/>
              <input type="email" placeholder="E-mail" className="rounded-full bg-white/10 backdrop-blur border border-white/20 px-5 py-3 placeholder:text-white/50 text-white focus:outline-none focus:ring-2 focus:ring-brand-gold"/>
            </div>
            <label className="flex items-start gap-2 text-sm text-white/80"><input type="checkbox" className="mt-1"/> Desejo receber novidades e comunicados da Família Hùndésô.</label>
            <label className="flex items-start gap-2 text-sm text-white/80"><input type="checkbox" className="mt-1"/> Li e concordo com a Política de Privacidade.</label>
            <button className="justify-self-center mt-2 rounded-full bg-gradient-gold px-8 py-3 font-bold text-brand-dark hover:scale-105 transition-transform">Cadastrar</button>
          </form>
        </div>
      </section>
    </>
  );
}
