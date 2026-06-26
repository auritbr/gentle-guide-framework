import { createFileRoute } from "@tanstack/react-router";
import { Heart, Handshake, Package, CalendarHeart, Share2, Users } from "lucide-react";
import { IMAGES } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/como-ajudar/")({
  head: () => ({
    meta: [
      { title: "Como Ajudar — Família Hùndésô" },
      { name: "description", content: "Doações, parcerias e voluntariado para fortalecer cultura, ancestralidade e ações comunitárias." },
    ],
  }),
  component: ComoAjudar,
});

function ComoAjudar() {
  return (
    <>
      <PageHero image={IMAGES.heroHelp} eyebrow="Como ajudar" title="Apoie essa" highlight="missão" subtitle="Sua contribuição fortalece a cultura, a ancestralidade, os projetos sociais e as ações comunitárias da Família Hùndésô."/>

      <section id="doacoes" className="py-16 sm:py-20 bg-brand-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark text-balance leading-[1.05]">
            A cultura e a ancestralidade precisam de <span className="highlight-stripe">cuidado, presença e continuidade</span>.
          </h2>
          <p className="mt-6 text-lg text-foreground/75 max-w-3xl mx-auto">
            Com sua doação, você contribui para a realização de atividades culturais, manutenção dos espaços, ações educativas, registros de memória e projetos voltados à comunidade.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark text-center">Como sua ajuda contribui?</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {t:"Ações culturais",d:"Realização de festejos, oficinas, encontros e celebrações abertas à comunidade.",g:"bg-gradient-warm"},
              {t:"Projetos sociais",d:"Acolhimento, cidadania, atividades educativas e cuidado com famílias e crianças.",g:"bg-gradient-earth"},
              {t:"Preservação da memória",d:"Registro, organização e difusão do acervo histórico e cultural da instituição.",g:"bg-gradient-gold"},
            ].map((c) => (
              <div key={c.t} className={`${c.g} rounded-3xl p-8 text-white`}>
                <h3 className="font-display text-2xl font-bold">{c.t}</h3>
                <p className="mt-3 text-white/90">{c.d}</p>
                <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-brand-dark hover:bg-brand-cream transition">
                  <Heart className="h-4 w-4"/> Doar agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="parcerias" className="py-16 sm:py-20 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark text-center">Outras formas de ajudar</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {t:"Seja parceiro",i:Handshake,id:"parcerias"},
              {t:"Doe materiais",i:Package},
              {t:"Apoie eventos",i:CalendarHeart},
              {t:"Compartilhe nosso trabalho",i:Share2},
              {t:"Voluntariado",i:Users,id:"voluntariado"},
            ].map(({t,i:Icon,id}) => (
              <div key={t} id={id} className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl transition">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-brand-dark">
                  <Icon className="h-5 w-5"/>
                </div>
                <div className="mt-4 font-display text-lg font-bold text-brand-dark">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}