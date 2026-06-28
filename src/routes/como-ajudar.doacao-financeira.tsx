import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Users, BookOpen, Sparkles, HandHeart, Landmark, GraduationCap, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

const HERO_IMG = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2000&q=80";

const VALORES = [50, 100, 200, 1000];
const FREQS = ["Doar uma vez", "Doar mensalmente", "Doar anualmente"];

const CARDS = [
  { icon: HandHeart, titulo: "Projetos sociais", texto: "Apoio a famílias em situação de vulnerabilidade, ações de acolhimento, partilha e cuidado comunitário.", img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80" },
  { icon: Sparkles, titulo: "Cultura e ancestralidade", texto: "Preservação das tradições afro-brasileiras, afro-indígenas, memória ancestral e atividades culturais.", img: "https://images.unsplash.com/photo-1604431696980-07e518647b74?auto=format&fit=crop&w=1200&q=80" },
  { icon: GraduationCap, titulo: "Educação e cidadania", texto: "Ações formativas, alfabetização, inclusão digital, acesso a direitos e fortalecimento comunitário.", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80" },
];

const PORQUE = [
  { icon: Users, titulo: "Fortalece projetos comunitários" },
  { icon: HandHeart, titulo: "Apoia famílias em vulnerabilidade" },
  { icon: Landmark, titulo: "Preserva memória e ancestralidade" },
  { icon: BookOpen, titulo: "Ajuda a manter ações culturais e educativas" },
];

export const Route = createFileRoute("/como-ajudar/doacao-financeira")({
  head: () => ({
    meta: [
      { title: "Doação financeira — Família Hùndésô" },
      { name: "description", content: "Doe e fortaleça projetos sociais, culturais e educativos da Família Hùndésô." },
    ],
  }),
  component: DoacaoFinanceira,
});

function DoacaoFinanceira() {
  const [valor, setValor] = useState<number | "">(100);
  const [outro, setOutro] = useState("");
  const [freq, setFreq] = useState(FREQS[0]);
  const [msg, setMsg] = useState("");

  return (
    <>
      <PageHero image={HERO_IMG} eyebrow="Como ajudar" title="Doe e fortaleça a" highlight="Família Hùndésô" subtitle="Sua contribuição ajuda a manter projetos sociais, culturais, educativos e comunitários que fortalecem a memória, a ancestralidade e o cuidado com famílias em situação de vulnerabilidade.">
        <a href="#doar" className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg hover:brightness-110 transition">
          <Heart className="h-4 w-4" /> Fazer doação
        </a>
      </PageHero>

      <section className="py-16 sm:py-20 bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight">
            Sua doação mantém ações que <span className="highlight-stripe">transformam realidades</span>
          </h2>
          <p className="mt-6 text-lg text-foreground/75">
            Ao contribuir com a Família Hùndésô, você apoia iniciativas de acolhimento, cultura, educação, assistência social, preservação da memória ancestral, ações comunitárias e fortalecimento de territórios tradicionais.
          </p>
        </div>
      </section>

      <section id="doar" className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark">Escolha o valor da sua contribuição</h2>
            <p className="mt-3 text-foreground/70">Selecione um valor sugerido ou informe outro.</p>
          </div>

          <div className="mt-8 rounded-2xl bg-brand-cream/60 p-5 sm:p-7 ring-1 ring-black/5 shadow-sm">
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {VALORES.map((v) => (
                <button
                  key={v}
                  onClick={() => { setValor(v); setOutro(""); }}
                  className={`rounded-xl px-3 py-3 text-base font-bold transition ring-1 ${valor === v && !outro ? "bg-brand-dark text-white ring-brand-dark shadow-md" : "bg-white text-brand-dark ring-black/10 hover:ring-brand-gold"}`}
                >
                  R$ {v.toLocaleString("pt-BR")}
                </button>
              ))}
            </div>

            <div className="mt-4">
              <label className="block text-sm font-semibold text-brand-dark mb-1.5">Outro valor</label>
              <input
                type="number"
                value={outro}
                onChange={(e) => { setOutro(e.target.value); setValor(""); }}
                placeholder="R$ 0,00"
                className="w-full rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/30"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-semibold text-brand-dark mb-1.5">Comentário ou mensagem para a instituição</label>
              <textarea
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                rows={2}
                placeholder="Deixe uma mensagem (opcional)"
                className="w-full rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/30"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-semibold text-brand-dark mb-2">Frequência</label>
              <div className="grid gap-2 sm:grid-cols-3">
                {FREQS.map((f) => (
                  <button
                    key={f}
                    onClick={() => setFreq(f)}
                    className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition ring-1 ${freq === f ? "bg-brand-earth text-white ring-brand-earth" : "bg-white text-brand-dark ring-black/10 hover:ring-brand-earth"}`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7A4900] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#5C3600] transition-colors"
            >
              <Heart className="h-4 w-4" /> Continuar doação
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl sm:text-4xl font-bold text-brand-dark">O que a sua doação ajuda a fortalecer?</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {CARDS.map((c) => (
              <article key={c.titulo} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 hover:shadow-xl transition flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img src={c.img} alt={c.titulo} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-gold text-brand-dark">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-brand-dark">{c.titulo}</h3>
                  <p className="mt-2 text-foreground/75 text-sm leading-relaxed">{c.texto}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl sm:text-4xl font-bold text-brand-dark">Por que doar?</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PORQUE.map((p) => (
              <div key={p.titulo} className="text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand-cream text-[#7A4900] ring-1 ring-[#7A4900]/15 shadow-sm">
                  <p.icon className="h-7 w-7" />
                </div>
                <p className="mt-4 font-display text-lg font-semibold text-brand-dark leading-snug">{p.titulo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-brand-gold-soft border-y border-brand-gold/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Cada contribuição fortalece uma rede de cuidado</h2>
          <p className="mt-4 text-brand-dark/70 text-lg">Doe hoje e participe da continuidade desse trabalho.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="#doar" className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-[#0077B6] transition-colors">
              <Heart className="h-4 w-4" /> Fazer doação
            </a>
            <Link to="/contato" className="inline-flex items-center gap-2 rounded-full border border-brand-gold/50 px-6 py-3 text-sm font-bold uppercase tracking-wider text-brand-dark hover:bg-brand-gold/10 transition">
              <MessageCircle className="h-4 w-4" /> Fale conosco
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}