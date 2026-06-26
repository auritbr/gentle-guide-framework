import { createFileRoute } from "@tanstack/react-router";
import { IMAGES, TIMELINE } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Família Hùndésô" },
      { name: "description", content: "Nossa história, missão, visão, valores e dados institucionais." },
      { property: "og:title", content: "Quem Somos — Família Hùndésô" },
      { property: "og:description", content: "Conheça a trajetória e os princípios da Família Hùndésô." },
    ],
  }),
  component: QuemSomos,
});

function QuemSomos() {
  return (
    <>
      <PageHero image={IMAGES.heroAbout} eyebrow="Família Hùndésô" title="Quem" highlight="Somos" subtitle="Ancestralidade, fé, cultura, memória e atuação comunitária."/>

      <section id="historia" className="py-24 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
            <div className="text-xs uppercase tracking-[0.25em] text-brand-earth font-semibold">Nossa História</div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark">Uma trajetória de tradição e cuidado</h2>
            <p>A Família Hùndésô nasceu da força da ancestralidade, da tradição e do compromisso com a preservação dos saberes de matriz africana. Ao longo de sua trajetória, consolidou-se como espaço de fé, cultura, memória, acolhimento e atuação comunitária.</p>
            <p>A instituição desenvolve ações religiosas, culturais, sociais e beneficentes, promovendo o fortalecimento da identidade, da cidadania e da valorização das comunidades tradicionais de terreiro.</p>
          </div>
          <div className="relative">
            <img src={IMAGES.elder} alt="Memória ancestral" className="rounded-3xl shadow-2xl aspect-[4/5] object-cover"/>
            <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-gradient-gold p-6 max-w-xs shadow-xl">
              <div className="font-display text-2xl font-bold text-brand-dark">Tradição viva</div>
              <div className="text-sm text-brand-dark/80 mt-1">Saberes transmitidos entre gerações.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-xs uppercase tracking-[0.25em] text-brand-earth font-semibold">Trajetória</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-brand-dark">Linha do tempo</h2>
          <div className="mt-12 relative border-l-2 border-brand-gold/40 pl-8 space-y-10">
            {TIMELINE.map((t) => (
              <div key={t.titulo} className="relative">
                <div className="absolute -left-[42px] top-1 grid h-6 w-6 place-items-center rounded-full bg-gradient-gold ring-4 ring-brand-cream"/>
                <div className="text-sm font-bold text-brand-earth">{t.ano}</div>
                <h3 className="mt-1 font-display text-2xl font-bold text-brand-dark">{t.titulo}</h3>
                <p className="mt-2 text-foreground/70 max-w-2xl">{t.texto}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-foreground/50">* anos editáveis — preencher com as datas oficiais da instituição.</p>
        </div>
      </section>

      <section id="missao" className="py-24 bg-brand-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl sm:text-5xl font-bold">Missão, Visão e Valores</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {t:"Missão",d:"Preservar, fortalecer e compartilhar saberes ancestrais, promovendo cultura, espiritualidade, educação e cuidado comunitário.",g:"bg-gradient-warm"},
              {t:"Visão",d:"Ser referência na valorização das tradições de matriz africana, na defesa da memória ancestral e na promoção de ações sociais e culturais transformadoras.",g:"bg-gradient-earth"},
              {t:"Valores",d:"Ancestralidade, respeito, comunidade, inclusão, solidariedade, memória, fé, cultura e compromisso social.",g:"bg-gradient-gold"},
            ].map((c) => (
              <div key={c.t} className={`${c.g} rounded-3xl p-8`}>
                <h3 className="font-display text-3xl font-bold text-white">{c.t}</h3>
                <p className="mt-4 text-white/90">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="diretoria" className="py-24 bg-brand-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-xs uppercase tracking-[0.25em] text-brand-earth font-semibold">Institucional</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-brand-dark">Dados institucionais</h2>
          <div className="mt-10 rounded-3xl bg-white shadow-sm p-8 grid gap-6 sm:grid-cols-2">
            {[
              ["Nome da instituição","Família Hùndésô"],
              ["CNPJ","— a preencher —"],
              ["Natureza jurídica","Organização da sociedade civil"],
              ["Localização","— endereço institucional —"],
              ["Área de atuação","Cultura, religiosidade, social e educação"],
              ["Representante","— a preencher —"],
              ["Contato","contato@familiahundeso.org.br"],
              ["Telefone / WhatsApp","— a preencher —"],
            ].map(([k,v]) => (
              <div key={k} className="border-b border-border pb-3">
                <div className="text-xs uppercase tracking-wider text-brand-earth font-semibold">{k}</div>
                <div className="mt-1 text-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}