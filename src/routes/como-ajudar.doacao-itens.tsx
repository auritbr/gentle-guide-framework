import { createFileRoute, Link } from "@tanstack/react-router";
import { Shirt, Footprints, Backpack, ToyBrick, HandHeart, Coins, Leaf, ClipboardList, MessageCircle, Store, AlertCircle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

const HERO_IMG = "https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&w=2000&q=80";

const IMPACTOS = [
  { icon: HandHeart, titulo: "Ação Social Direta", texto: "Roupas, calçados e utensílios que perdem o uso em áreas urbanas ganham uma “nova vida” e devolvem a dignidade a famílias que enfrentam o isolamento geográfico e a falta de recursos." },
  { icon: Coins, titulo: "Captação de Recursos", texto: "O valor simbólico arrecadado nas vendas do bazar pode ser revertido para a compra de alimentos e manutenção de projetos locais, como os da Família Hùndésô no Povoado Riacho Branco." },
  { icon: Leaf, titulo: "Consciência Ambiental", texto: "Ao doar itens em bom estado, você combate a cultura do descarte excessivo, reduz a produção de lixo e estimula o consumo consciente." },
];

const ITENS = [
  { icon: Shirt, titulo: "Vestuário", texto: "Roupas masculinas, femininas e infantis, especialmente peças confortáveis para o dia a dia no campo.", grad: "bg-gradient-warm" },
  { icon: Footprints, titulo: "Calçados", texto: "Tênis, sandálias e sapatos de todos os tamanhos.", grad: "bg-gradient-earth" },
  { icon: Backpack, titulo: "Acessórios", texto: "Cintos, bolsas, mochilas e bonés.", grad: "bg-gradient-gold text-brand-dark" },
  { icon: ToyBrick, titulo: "Infantil", texto: "Brinquedos, jogos e livros educativos para as crianças da região.", grad: "bg-brand-dark" },
];

const COMO = [
  { img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80", titulo: "Separe itens em bom estado", texto: "Escolha roupas, calçados, acessórios, brinquedos e utensílios limpos, conservados e próprios para uso.", btn: "Ver orientações", to: "/contato", icon: ClipboardList },
  { img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80", titulo: "Fale com a equipe", texto: "Entre em contato com a Família Hùndésô para combinar a melhor forma de envio ou entrega da doação.", btn: "Fale conosco", to: "/contato", icon: MessageCircle },
  { img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80", titulo: "Apoie o Bazar da Gente", texto: "Sua doação pode fortalecer ações sociais, apoiar famílias e contribuir para a manutenção de projetos comunitários.", btn: "Conhecer o Bazar", to: "/projetos/bazar-da-gente", icon: Store },
];

export const Route = createFileRoute("/como-ajudar/doacao-itens")({
  head: () => ({
    meta: [
      { title: "Doação de itens — Família Hùndésô" },
      { name: "description", content: "Doe roupas, calçados, acessórios e brinquedos em bom estado e apoie famílias atendidas." },
    ],
  }),
  component: DoacaoItens,
});

function DoacaoItens() {
  return (
    <>
      <PageHero image={HERO_IMG} eyebrow="Como ajudar" title="Doe itens em" highlight="bom estado" subtitle="Roupas, calçados, acessórios, brinquedos e utensílios podem ganhar uma nova vida e apoiar famílias atendidas pela Família Hùndésô.">
        <Link to="/contato" className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg hover:brightness-110 transition">
          <HandHeart className="h-4 w-4" /> Quero doar itens
        </Link>
      </PageHero>

      <section className="py-16 sm:py-20 bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight">
            Sua doação gera impacto <span className="highlight-stripe">social, comunitário e ambiental</span>
          </h2>
          <p className="mt-6 text-lg text-foreground/75">
            Doar itens em bom estado é uma forma de fortalecer famílias, apoiar projetos comunitários e promover o consumo consciente.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl sm:text-4xl font-bold text-brand-dark">Impactos da sua doação</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {IMPACTOS.map((i) => (
              <div key={i.titulo} className="rounded-3xl bg-brand-cream/60 p-7 ring-1 ring-black/5 shadow-sm hover:shadow-xl transition">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-warm text-white shadow-md">
                  <i.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-brand-dark">{i.titulo}</h3>
                <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{i.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark">O que você pode doar?</h2>
            <p className="mt-4 text-foreground/75">Absolutamente tudo o que estiver em bom estado de conservação pode fazer a diferença para quem mais precisa.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ITENS.map((i) => (
              <div key={i.titulo} className={`${i.grad} rounded-3xl p-7 shadow-md hover:shadow-xl transition ${i.grad.includes("text-brand-dark") ? "" : "text-white"}`}>
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white/20 ring-1 ring-white/30 backdrop-blur">
                  <i.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">{i.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-90">{i.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl sm:text-4xl font-bold text-brand-dark">Saiba como você pode doar agora</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {COMO.map((c) => (
              <article key={c.titulo} className="overflow-hidden rounded-3xl bg-brand-cream/60 shadow-sm ring-1 ring-black/5 hover:shadow-xl transition flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img src={c.img} alt={c.titulo} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-gold text-brand-dark">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-brand-dark">{c.titulo}</h3>
                  <p className="mt-2 text-foreground/75 text-sm leading-relaxed flex-1">{c.texto}</p>
                  <Link to={c.to} className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-earth hover:text-brand-dark transition">
                    {c.btn} →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 mx-auto max-w-3xl flex items-start gap-3 rounded-2xl bg-brand-gold/15 ring-1 ring-brand-gold/40 p-5">
            <AlertCircle className="h-5 w-5 shrink-0 text-brand-earth mt-0.5" />
            <p className="text-sm text-brand-dark/85">
              Por favor, doe apenas itens em bom estado. Peças danificadas, sujas ou sem condição de uso não devem ser encaminhadas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-gradient-earth text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Doe com consciência. Ajude com propósito.</h2>
          <p className="mt-4 text-white/85 text-lg">Sua doação pode gerar cuidado, renda, sustentabilidade e dignidade para famílias atendidas pela Família Hùndésô.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/contato" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-wider text-brand-dark hover:bg-brand-cream transition">
              <MessageCircle className="h-4 w-4" /> Fale conosco
            </Link>
            <Link to="/projetos" className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/40 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/20 transition">
              Conhecer projetos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}