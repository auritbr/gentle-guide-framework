import { createFileRoute, Link } from "@tanstack/react-router";
import { Apple, ShoppingBasket, SprayCan, Users, Phone, ClipboardList, HandHeart, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

const HERO_IMG = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2000&q=80";

const ITENS = [
  { icon: Apple, titulo: "Alimentos não perecíveis", texto: "Arroz, feijão, macarrão, farinha, óleo, açúcar, café, leite em pó e outros alimentos dentro do prazo de validade." },
  { icon: ShoppingBasket, titulo: "Cestas básicas", texto: "Cestas completas ou kits de alimentos podem apoiar diretamente famílias em situação de insegurança alimentar." },
  { icon: SprayCan, titulo: "Itens de higiene", texto: "Produtos de higiene pessoal e limpeza também contribuem para o cuidado e a dignidade das famílias atendidas." },
  { icon: Users, titulo: "Apoio para ações coletivas", texto: "Mantimentos podem ser destinados a ações comunitárias, encontros, campanhas e projetos de partilha." },
];

const COMO = [
  { img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80", titulo: "Entre em contato", texto: "Fale com a equipe da Família Hùndésô para combinar a melhor forma de entrega.", btn: "Fale conosco", to: "/contato", icon: Phone },
  { img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80", titulo: "Organize sua doação", texto: "Separe alimentos e itens em bom estado, dentro do prazo de validade e próprios para uso.", btn: "Ver orientações", to: "/contato", icon: ClipboardList },
  { img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80", titulo: "Fortaleça uma ação", texto: "Sua doação será direcionada para ações sociais, comunitárias e de apoio às famílias atendidas.", btn: "Quero ajudar", to: "/contato", icon: HandHeart },
];

export const Route = createFileRoute("/como-ajudar/doacao-mantimentos")({
  head: () => ({
    meta: [
      { title: "Doação de mantimentos — Família Hùndésô" },
      { name: "description", content: "Doe alimentos e itens essenciais para fortalecer ações de acolhimento da Família Hùndésô." },
    ],
  }),
  component: DoacaoMantimentos,
});

function DoacaoMantimentos() {
  return (
    <>
      <PageHero image={HERO_IMG} eyebrow="Como ajudar" title="Doe" highlight="mantimentos" subtitle="Sua doação de alimentos e itens essenciais contribui para ações de acolhimento, partilha e cuidado com famílias em situação de vulnerabilidade.">
        <Link to="/contato" className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg hover:brightness-110 transition">
          <HandHeart className="h-4 w-4" /> Quero doar mantimentos
        </Link>
      </PageHero>

      <section className="py-16 sm:py-20 bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight">
            Alimento também é <span className="highlight-stripe">cuidado comunitário</span>
          </h2>
          <div className="mt-6 space-y-4 text-lg text-foreground/75">
            <p>A doação de mantimentos ajuda a fortalecer ações de apoio às famílias atendidas pela Família Hùndésô, especialmente em territórios rurais e comunidades em situação de vulnerabilidade social.</p>
            <p>Cada contribuição representa mais do que alimento. Representa presença, solidariedade, dignidade e compromisso com quem mais precisa.</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl sm:text-4xl font-bold text-brand-dark">O que você pode doar?</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ITENS.map((i) => (
              <div key={i.titulo} className="rounded-3xl bg-brand-cream/60 p-6 ring-1 ring-black/5 shadow-sm hover:shadow-xl transition">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-gold text-brand-dark">
                  <i.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-brand-dark">{i.titulo}</h3>
                <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{i.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl sm:text-4xl font-bold text-brand-dark">Como doar mantimentos?</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {COMO.map((c) => (
              <article key={c.titulo} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 hover:shadow-xl transition flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img src={c.img} alt={c.titulo} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-warm text-white">
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
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-gradient-earth text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Sua doação alimenta cuidado, dignidade e esperança</h2>
          <p className="mt-4 text-white/85 text-lg">Contribua com mantimentos e ajude a fortalecer ações de acolhimento comunitário.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/contato" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-wider text-brand-dark hover:bg-brand-cream transition">
              <MessageCircle className="h-4 w-4" /> Fale conosco
            </Link>
            <Link to="/projetos" className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/40 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/20 transition">
              Ver projetos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}