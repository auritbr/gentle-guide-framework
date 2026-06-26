import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight, Download, HandHeart, Heart, Scale, Sparkles, Users } from "lucide-react";
import { IMAGES } from "@/data/site";

export const Route = createFileRoute("/projetos/lgbtqia")({
  head: () => ({
    meta: [
      { title: "LGBTQIA+ — Família Hùndésô" },
      { name: "description", content: "Filhos do Axé: acolhimento, diversidade e políticas públicas para a comunidade LGBTQIA+ de terreiro em Alagoas." },
    ],
  }),
  component: LgbtqiaPage,
});

const TEXTOS = [
  "O Grupo Gay Afrodescendente Filhos do Axé, surge em 2003, com objetivo de trabalhar as politicas publicas para a comunidade negra LGBTQIA+ de terreiro em alagoas. Em 2010 é chamado de Família Hùndésô. Mesmo sendo uma organização afro religiosa, trabalhamos com a temática em nossa roça.",
  "Apesar de ser um espaço de acolhimento, o terreiro nunca esteve livre de reproduzir os preconceitos que a sociedade suscitava. Portanto, mesmo incluídos na estrutura hierárquica do candomblé, os homossexuais travaram algumas batalhas para ter seu lugar reconhecido. Seguem na luta, mais, ainda assim, ser gay no candomblé é infinitamente mais fácil do que ser gay em muitas religiões, sobretudo nas mais tradicionais.",
  "No terreiro, a homossexualidade sempre esteve presente de forma muito natural e tranquila. Nunca foi considerada doença nem perversão. Claro que algumas mentes colonizadas tentaram impor outros padrões e obrigaram muitas vezes gays e lésbicas a se esconder, reprimindo comportamentos, controlando os corpos, coibindo desejos. Mas, na sua essência, o candomblé sempre aceitou e respeitou a condição humana, por isso é certamente a religião com a maior proporção de homossexuais assumidos, inclusive  entre as lideranças.",
  "A perseguição histórica sofrida pelos povos de matriz africana abre o precedente para que seus territórios saibam acolher e compreender todos que de alguma forma foram marginalizados. A própria condição do negro na sociedade nos ensinou que a união de todos aqueles que são discriminados é uma estratégia de resistência.",
];

const PALAVRAS = [
  { icon: HandHeart, t: "Acolhimento" },
  { icon: Sparkles, t: "Diversidade" },
  { icon: Heart, t: "Resistência" },
  { icon: Scale, t: "Direitos" },
  { icon: Users, t: "Terreiro" },
  { icon: Scale, t: "Políticas públicas" },
];

function LgbtqiaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[48vh] lg:min-h-[58vh] items-end overflow-hidden pt-20">
        <img src={IMAGES.hands} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-dark via-brand-dark/75 to-brand-dark/40" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-brand-gold backdrop-blur">
            Direitos e Diversidade
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-[34px] sm:text-[44px] lg:text-[54px] font-bold leading-[1.1] text-white text-balance">
            LGBTQIA+
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed">
            Sobre os Filhos do Axé
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="bg-brand-cream border-b border-brand-earth/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-2 text-xs sm:text-sm text-foreground/65">
          <Link to="/" className="hover:text-brand-earth">Início</Link>
          <ChevronRight className="h-3.5 w-3.5 opacity-60" />
          <Link to="/projetos" className="hover:text-brand-earth">Projetos</Link>
          <ChevronRight className="h-3.5 w-3.5 opacity-60" />
          <span className="text-brand-dark font-semibold truncate">LGBTQIA+</span>
        </div>
      </nav>

      {/* Sobre os Filhos do Axé */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-dark mb-6">Sobre os Filhos do Axé</h2>
          <div className="space-y-4 text-base sm:text-lg leading-relaxed text-foreground/80">
            {TEXTOS.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* Palavras-chave */}
      <section className="py-14 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-[11px] uppercase tracking-[0.25em] text-brand-earth font-semibold">Nossos princípios</div>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-brand-dark">O que nos move</h2>
          </div>
          <div className="mt-10 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {PALAVRAS.map((p) => (
              <div key={p.t} className="flex flex-col items-center gap-3 rounded-2xl bg-white p-5 ring-1 ring-brand-earth/10 shadow-sm">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-gold text-white">
                  <p.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-brand-dark text-center">{p.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cartilha da Diversidade */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] uppercase tracking-[0.25em] text-brand-earth font-semibold">Material informativo</div>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-brand-dark">Cartilha da Diversidade</h2>
          <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-foreground/80">
            <p>Com o objetivo de fornecer informações e destacar a importância do respeito aos direitos da população LGBTI+, as Defensoras Públicas Suellen Santos Rodrigues de Aguiar e Roberta Gisbert de Mendonça, em atuação nas comarcas de Mata Grande, Santana do Ipanema, Colônia Leopoldina e Coruripe, lançam, no dia 28/08/2025, uma cartilha digital sobre Diversidade e Direitos da População LGBTQIAPN+.</p>
            <p>No material, o leitor poderá encontrar os significados dos termos utilizados como identidade de gênero e orientação afetiva/sexual, informações sobre direitos conquistados pela população, também sobre o combate à LGBTfobia e como a Defensoria Pública pode atuar na garantia dos direitos.</p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-brand-earth transition">
              <Download className="h-4 w-4" /> Baixe a cartilha aqui
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md hover:opacity-90 transition">
              <Download className="h-4 w-4" /> Baixe a cartilha aqui
            </a>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-14 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] uppercase tracking-[0.25em] text-brand-earth font-semibold">Imagens</div>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-brand-dark">Registros</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[IMAGES.group, IMAGES.community, IMAGES.dance].map((src, i) => (
              <div key={i} className="overflow-hidden rounded-2xl aspect-[4/3] bg-white">
                <img src={src} alt={`LGBTQIA+ — registro ${i + 1}`} loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-16 bg-gradient-earth">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight text-balance">
            Acolhimento, diversidade e direitos
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/projetos" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors">
              <ArrowLeft className="h-4 w-4" /> Voltar para projetos
            </Link>
            <Link to="/contato" className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md hover:opacity-90 transition-opacity">
              Fale conosco
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}