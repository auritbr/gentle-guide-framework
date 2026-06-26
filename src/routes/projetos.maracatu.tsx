import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight, Heart, ShieldCheck, Sprout, Users, GraduationCap, HandHeart } from "lucide-react";
import { IMAGES } from "@/data/site";

export const Route = createFileRoute("/projetos/maracatu")({
  head: () => ({
    meta: [
      { title: "Maracatu Nação Acorte de Alagoas — Família Hùndésô" },
      { name: "description", content: "Resistência, memória e salvaguarda da cultura afro-alagoana através do Maracatu Nação Acorte." },
    ],
  }),
  component: MaracatuPage,
});

const INTRO = [
  "Após a “Quebra de Xangô” de 1912 — um episódio marcado por violência religiosa e repressão aos terreiros de matriz africana em Alagoas — houve um período de apagamento e silêncio cultural imposto às manifestações afro-religiosas. Apesar da perseguição, a resistência cultural não cessou. Com o passar dos anos, principalmente a partir da segunda metade do século XX, surgiram iniciativas para retomar e reafirmar a cultura negra em Alagoas. Nesse contexto, destaca-se o surgimento do primeiro Maracatu em atividade no estado: o Maracatu Nação Acorte de Alagoas, fundado como uma expressão de resgate da ancestralidade, da memória e da espiritualidade negra, rompendo o silenciamento histórico causado pela intolerância religiosa.",
  "Fundado em 2009, pelo sacerdote Everaldo Geraldo de Melo conhecido por Doté Elias, o Maracatu Nação chamado \"Acorte de Airá\" que posteriormente veio a ser chamado Acorte de Alagoas. Em 2011 Doté Elias foi coroado junto com sua filha de santo Lucineide (Rainha Badesí), pelas mãos do senhor Pai Benedito Maciel e Mãe Mirian, a cerimônia aconteceu em frente a Igreja Nossa Senhora Mãe do Povo, bairro do Jaraguá.",
];

const TEXTO_FUNDADOR =
  "A necessidade desse sonho é um sonho, de resgatar essa manifestação cultural nasceu do chamado ancestral, dizendo que tinha que está reverenciando a ancestralidade alagoana, através de um lado cultural. Foi muito tempo para entender, depois de muita busca veio à conclusão que era o maracatu. Pensei: “Como vou montar o maracatu?”, certo que sou pernambucano, venho da terra do frevo, mas sou criado por Alagoas, por Maceió. E aí fiquei, mas o orixá disse: “Vamos embora”, e foi quando em 2008 a gente (eu e Lola Aurino, meu compalheiro) começou a correr atráis, mas a gente não teve apoio e esse projeto do maracatu ainda era só um projeto. E aí formos em busca e em 2009 a gente teve um grande apoio da CESE (Coordenadoria Ecumênica de Serviços), nos apoiou financeiramente, acreditou em nossa proposta, no impacto que vinha trazer para Maceió. Eles nos passaram os instrumentos, e aí a gente só teve as dificuldades depois porque a questão era: “Quem ia está como mestre?”, mas depois os orixás foram trazendo as pessoas, as parcerias também, nós temos parcerias com o maracatu Coletivo Afro-caeté que é percussivo e os demais grupos que a gente teve essa força. Convidamos o Mestre Sandro Santana, e aceitou o convite para ensina.";

const FECHAMENTO = [
  "A criação do Maracatu Acorte representa não apenas a continuidade de um legado cultural, mas também um ato político de resistência e afirmação da identidade afro-alagoana, enraizado nos valores de axé, tradição e luta.",
  "Nossos agradecimentos vai para Rainha Marivalda do Maracatu Estrela Brilhante do Recife/PE, que nos deu grande força no começo para conduzir a Nação e o Coletivo Afro Caetés/AL.",
];

const SOCIAL_INTRO =
  "A Nação do Maracatu Acorte de Alagoas, desde sua fundação vem realizando várias atividades sociais para a Comunidade da Grota do Arroz, periferia do bairro de Cruz das Almas - Maceió/AL e no Povoado Riacho Branco, zona rural do município de Joaquim Gomes/AL.";

const SOCIAL = [
  { icon: HandHeart, t: "Contribuir para o desenvolvimento e o bem-estar da comunidade" },
  { icon: Users, t: "Construir um ambiente mais inclusivo, solidário e promissor" },
  { icon: ShieldCheck, t: "Combater desigualdades" },
  { icon: Heart, t: "Promover o acesso a direitos básicos" },
  { icon: Sprout, t: "Contribuir para o desenvolvimento sustentável" },
  { icon: GraduationCap, t: "Formar cidadãos comprometidos com o mundo ao seu redor" },
];

const GALERIA = [IMAGES.drums, IMAGES.dance, IMAGES.culture, IMAGES.group, IMAGES.community, IMAGES.ceremony];

function MaracatuPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[48vh] lg:min-h-[58vh] items-end overflow-hidden pt-20">
        <img src={IMAGES.drums} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-dark via-brand-dark/75 to-brand-dark/40" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-brand-gold backdrop-blur">
            Cultura Popular
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-[34px] sm:text-[44px] lg:text-[54px] font-bold leading-[1.1] text-white text-balance">
            Maracatu Nação Acorte de Alagoas
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed">
            Resistência, memória e salvaguarda da cultura afro-alagoana.
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
          <span className="text-brand-dark font-semibold truncate">Maracatu</span>
        </div>
      </nav>

      {/* História */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] uppercase tracking-[0.25em] text-brand-earth font-semibold">História</div>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-brand-dark">Maracatu Nação Acorte de Alagoas</h2>
          <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-foreground/80">
            {INTRO.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <figure className="mt-10 rounded-2xl bg-brand-cream p-6 sm:p-8 ring-1 ring-brand-earth/10">
            <div className="text-[11px] uppercase tracking-[0.25em] text-brand-earth font-semibold">Texto do fundador</div>
            <blockquote className="mt-3 text-base sm:text-lg leading-relaxed text-foreground/85 italic">
              {TEXTO_FUNDADOR}
            </blockquote>
          </figure>

          <div className="mt-10 space-y-4 text-base sm:text-lg leading-relaxed text-foreground/80">
            {FECHAMENTO.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-14 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] uppercase tracking-[0.25em] text-brand-earth font-semibold">Imagens</div>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-brand-dark">Galeria do Maracatu</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GALERIA.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-2xl aspect-[4/3] bg-white">
                <img src={src} alt={`Maracatu — registro ${i + 1}`} loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.25em] text-brand-earth font-semibold">Social</div>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-brand-dark">Atuação social do Maracatu</h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-foreground/80">{SOCIAL_INTRO}</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SOCIAL.map((s) => (
              <div key={s.t} className="flex gap-4 rounded-2xl bg-brand-cream p-6 ring-1 ring-brand-earth/10">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-gold text-white">
                  <s.icon className="h-5 w-5" />
                </span>
                <p className="text-[15px] leading-relaxed text-foreground/80 font-medium">{s.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-16 bg-gradient-earth">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight text-balance">
            Cultura, axé e resistência afro-alagoana
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-calors">
              <ArrowLeft className="h-4 w-4" /> Voltar para página inicial
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