import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Package,
  MessageCircle,
  HandHeart,
  Shirt,
  Footprints,
  Backpack,
  ToyBrick,
  Utensils,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HERO_IMG =
  "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=2000&q=80";

const COMO = [
  {
    icon: Package,
    titulo: "Separe itens em bom estado",
    texto:
      "Escolha roupas, calçados, acessórios, brinquedos, livros e utensílios limpos, conservados e próprios para uso.",
  },
  {
    icon: MessageCircle,
    titulo: "Entre em contato",
    texto:
      "Fale com a equipe da Família Hùndésô para combinar a melhor forma de entrega, envio ou retirada da doação.",
  },
  {
    icon: HandHeart,
    titulo: "Sua doação chega a quem precisa",
    texto:
      "Os itens podem apoiar famílias, ações sociais, bazares comunitários e projetos realizados junto às comunidades atendidas.",
  },
];

const ITENS = [
  {
    icon: Shirt,
    titulo: "Vestuário",
    texto:
      "Roupas masculinas, femininas e infantis, especialmente peças confortáveis para o dia a dia no campo.",
    grad: "bg-gradient-warm",
  },
  {
    icon: Footprints,
    titulo: "Calçados",
    texto: "Tênis, sandálias e sapatos de todos os tamanhos.",
    grad: "bg-brand-gold-soft border-y border-brand-gold/20",
  },
  {
    icon: Backpack,
    titulo: "Acessórios",
    texto: "Cintos, bolsas, mochilas, bonés e itens de uso cotidiano.",
    grad: "bg-gradient-gold text-brand-dark",
  },
  {
    icon: ToyBrick,
    titulo: "Infantil",
    texto: "Brinquedos, jogos e livros educativos para crianças da região.",
    grad: "bg-brand-dark",
  },
  {
    icon: Utensils,
    titulo: "Utensílios",
    texto:
      "Objetos domésticos em bom estado que possam ser reaproveitados por famílias atendidas.",
    grad: "bg-brand-earth",
  },
  {
    icon: BookOpen,
    titulo: "Livros",
    texto:
      "Livros infantis, literários e materiais educativos em bom estado de conservação.",
    grad: "bg-brand-red",
  },
];

const ORIENTACOES = [
  "Doe apenas peças limpas e em bom estado.",
  "Evite encaminhar objetos quebrados, sujos ou sem condição de uso.",
  "Separe roupas, calçados e acessórios por tipo, sempre que possível.",
  "Verifique se brinquedos, livros e utensílios estão completos e utilizáveis.",
  "Em caso de dúvida, entre em contato com a equipe antes de enviar.",
];

const FAQ = [
  {
    q: "Quais itens posso doar?",
    a: "Você pode doar roupas, calçados, acessórios, brinquedos, livros, utensílios e outros itens em bom estado de conservação.",
  },
  {
    q: "Posso doar roupas usadas?",
    a: "Sim, desde que estejam limpas, conservadas e em condição de uso.",
  },
  {
    q: "Itens danificados podem ser doados?",
    a: "Não é recomendado. Doe apenas itens que possam ser utilizados por outras pessoas ou destinados ao bazar comunitário.",
  },
  {
    q: "Como combino a entrega?",
    a: "Entre em contato com a Família Hùndésô pelo WhatsApp, telefone ou e-mail para combinar a melhor forma de entrega ou encaminhamento da doação.",
  },
  {
    q: "Minha doação pode ajudar projetos da instituição?",
    a: "Sim. Os itens podem apoiar famílias atendidas, ações sociais, bazares comunitários e iniciativas desenvolvidas pela Família Hùndésô.",
  },
];

const WHATSAPP_URL = "https://wa.me/5582996180034";
const MAPS_URL = "https://maps.app.goo.gl/bLWcYvw7y2UakXcR9";

export const Route = createFileRoute("/como-ajudar/ponto-de-coleta")({
  head: () => ({
    meta: [
      { title: "Ponto de coleta — Família Hùndésô" },
      {
        name: "description",
        content:
          "Doe itens em bom estado para a Família Hùndésô. Saiba como entregar, retirar ou encaminhar sua doação.",
      },
      { property: "og:title", content: "Ponto de coleta — Família Hùndésô" },
      {
        property: "og:description",
        content:
          "Roupas, calçados, brinquedos, livros e utensílios em bom estado podem fortalecer ações sociais e comunitárias.",
      },
      { property: "og:image", content: HERO_IMG },
    ],
  }),
  component: PontoDeColeta,
});

function PontoDeColeta() {
  return (
    <>
      <PageHero
        image={HERO_IMG}
        eyebrow="Como ajudar"
        title="Doe em um"
        highlight="ponto de coleta"
        subtitle="Separe itens em bom estado e entre em contato com a Família Hùndésô para combinar a melhor forma de entrega ou encaminhamento da sua doação."
      >
        <Link
          to="/contato"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg hover:brightness-110 transition"
        >
          Fale conosco <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      {/* Introdução */}
      <section className="py-16 sm:py-20 bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-[11px] uppercase tracking-[0.25em] text-brand-earth font-semibold">
            Sua doação importa
          </div>
          <h2 className="mt-4 font-display text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-brand-dark leading-[1.15] text-balance">
            Sua doação pode ganhar uma nova vida
          </h2>
          <div className="mt-6 space-y-5 text-base sm:text-lg text-foreground/80 leading-relaxed">
            <p>
              Roupas, calçados, acessórios, brinquedos, livros, utensílios e
              outros itens em bom estado podem apoiar famílias em situação de
              vulnerabilidade, fortalecer ações comunitárias e contribuir para
              a sustentabilidade dos projetos da Família Hùndésô.
            </p>
            <p>
              Cada doação representa mais do que um objeto. Representa cuidado,
              solidariedade, consciência ambiental e compromisso com quem mais
              precisa.
            </p>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.25em] text-brand-earth font-semibold">
              Passo a passo
            </div>
            <h2 className="mt-4 font-display text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-brand-dark text-balance">
              Como funciona a doação?
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {COMO.map((c, i) => (
              <div
                key={c.titulo}
                className="rounded-3xl bg-brand-cream/60 p-7 ring-1 ring-brand-earth/10 shadow-sm hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-gold text-brand-dark shadow">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-brand-earth font-semibold">
                    Passo {i + 1}
                  </div>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-brand-dark">
                  {c.titulo}
                </h3>
                <p className="mt-2 text-[15px] text-foreground/75 leading-relaxed">
                  {c.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que pode ser doado */}
      <section className="py-16 sm:py-20 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.25em] text-brand-earth font-semibold">
              Categorias
            </div>
            <h2 className="mt-4 font-display text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-brand-dark text-balance">
              O que você pode doar?
            </h2>
            <p className="mt-3 text-base sm:text-lg text-foreground/70">
              Tudo que estiver em bom estado de conservação pode fazer a
              diferença.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ITENS.map((it) => (
              <div
                key={it.titulo}
                className={`${it.grad} rounded-3xl p-7 text-white shadow-lg`}
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 backdrop-blur ring-1 ring-white/20">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">
                  {it.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed opacity-90">
                  {it.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Orientações */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.25em] text-brand-earth font-semibold">
              Atenção
            </div>
            <h2 className="mt-4 font-display text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-brand-dark text-balance">
              Antes de doar, observe:
            </h2>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {ORIENTACOES.map((o) => (
              <li
                key={o}
                className="flex gap-3 rounded-2xl bg-brand-cream/60 p-4 ring-1 ring-brand-earth/10"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-earth" />
                <span className="text-[15px] text-foreground/80 leading-relaxed">
                  {o}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex gap-4 rounded-2xl border border-brand-red/30 bg-brand-red/5 p-5">
            <AlertTriangle className="h-6 w-6 shrink-0 text-brand-red" />
            <p className="text-[15px] text-foreground/80 leading-relaxed">
              <span className="font-semibold text-brand-red">Importante: </span>
              peças danificadas, sujas ou sem condição de uso não devem ser
              encaminhadas.
            </p>
          </div>
        </div>
      </section>

      {/* Onde entregar */}
      <section className="py-16 sm:py-20 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.25em] text-brand-earth font-semibold">
              Onde entregar?
            </div>
            <h2 className="mt-4 font-display text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-brand-dark text-balance">
              Combine sua doação com a nossa equipe
            </h2>
            <p className="mt-4 text-base sm:text-lg text-foreground/70 leading-relaxed">
              Para organizar a entrega ou retirada de doações, entre em contato
              com a Família Hùndésô pelos canais oficiais.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-7 sm:p-9 shadow-md ring-1 ring-brand-earth/10">
              <div className="text-xs uppercase tracking-[0.2em] text-brand-earth font-semibold">
                Matriz Hunkpame Hundeso
              </div>
              <div className="mt-5 space-y-5 text-[15px] text-foreground/80 leading-relaxed">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-earth" />
                  <div>
                    Sítio Hùndésô — S/N, Comunidade Riacho Branco, Região
                    Serrana dos Quilombos, zona rural — Joaquim Gomes/AL. CEP:
                    57980-000.
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-earth" />
                  <div>(82) 99618-0034</div>
                </div>
                <div className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-earth" />
                  <a
                    href="mailto:contato@familiahundeso.org.br"
                    className="hover:text-brand-earth"
                  >
                    contato@familiahundeso.org.br
                  </a>
                </div>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white shadow hover:brightness-110 transition"
                >
                  <MessageCircle className="h-4 w-4" /> Chamar no WhatsApp
                </a>
                <a
                  href="mailto:contato@familiahundeso.org.br"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-dark px-5 py-2.5 text-sm font-bold text-white shadow hover:bg-brand-earth transition"
                >
                  <Mail className="h-4 w-4" /> Enviar e-mail
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-earth/30 bg-white px-5 py-2.5 text-sm font-bold text-brand-earth hover:bg-brand-earth hover:text-white transition"
                >
                  <MapPin className="h-4 w-4" /> Ver no mapa
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-md ring-1 ring-brand-earth/10 min-h-[320px]">
              <iframe
                title="Localização Família Hùndésô"
                src="https://www.google.com/maps?q=Comunidade+Riacho+Branco+Joaquim+Gomes+AL&output=embed"
                className="h-full w-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-[11px] uppercase tracking-[0.25em] text-brand-earth font-semibold">
              FAQ
            </div>
            <h2 className="mt-4 font-display text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-brand-dark text-balance">
              Dúvidas frequentes
            </h2>
          </div>
          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {FAQ.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-brand-earth/15 bg-brand-cream/40 px-5"
              >
                <AccordionTrigger className="text-left font-display text-base sm:text-lg font-semibold text-brand-dark hover:text-brand-earth">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] text-foreground/75 leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-14 sm:py-16 bg-brand-gold-soft border-y border-brand-gold/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-balance leading-[1.15]">
            Doe com consciência. Ajude com propósito.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-white/90 leading-relaxed">
            Sua doação pode gerar cuidado, sustentabilidade, renda e dignidade
            para famílias atendidas pela Família Hùndésô.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-dark hover:bg-brand-gold transition"
            >
              <MessageCircle className="h-4 w-4" /> Fale conosco
            </Link>
            <Link
              to="/projetos/$slug"
              params={{ slug: "bazar-da-gente" }}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white hover:bg-white/20 transition"
            >
              Conhecer o Bazar da Gente <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}