import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import { NOTICIAS } from "@/data/site";
import { ShareButtons } from "@/components/site/ShareButtons";
import { NewsGallery } from "@/components/site/NewsGallery";
import { NewsCard } from "@/components/site/NewsCard";

export const Route = createFileRoute("/noticias/$slug")({
  head: ({ params }) => {
    const n = NOTICIAS.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: n ? `${n.titulo} — Família Hùndésô` : "Notícia — Família Hùndésô" },
        { name: "description", content: n?.resumo ?? "Notícia da Família Hùndésô" },
        { property: "og:title", content: n?.titulo ?? "Família Hùndésô" },
        { property: "og:description", content: n?.resumo ?? "" },
        { property: "og:image", content: n?.imagem ?? "" },
      ],
    };
  },
  loader: ({ params }) => {
    const noticia = NOTICIAS.find((n) => n.slug === params.slug);
    if (!noticia) throw notFound();
    return { noticia };
  },
  notFoundComponent: () => (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold">Notícia não encontrada</h1>
        <Link to="/noticias" className="mt-4 inline-block text-brand-earth font-semibold">Voltar para notícias</Link>
      </div>
    </div>
  ),
  component: NoticiaPage,
});

function NoticiaPage() {
  const { noticia } = Route.useLoaderData();
  const url = typeof window !== "undefined" ? window.location.href : `https://familiahundeso.org.br/noticias/${noticia.slug}`;
  const relacionadas = NOTICIAS.filter((n) => n.slug !== noticia.slug && n.categoria === noticia.categoria).slice(0, 3);
  const fallback = NOTICIAS.filter((n) => n.slug !== noticia.slug).slice(0, 3);
  const finalRel = relacionadas.length >= 3 ? relacionadas : [...relacionadas, ...fallback].slice(0, 3);

  return (
    <>
      <section className="pt-32 pb-10 bg-brand-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link to="/noticias" className="text-xs uppercase tracking-[0.2em] text-brand-earth font-semibold hover:text-brand-red">
            ← Notícias
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
            <span className="rounded-full bg-brand-earth px-3 py-1 font-semibold text-white">{noticia.categoria}</span>
            <span className="text-foreground/60">{noticia.data}</span>
          </div>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark leading-[1.15] text-balance">
            {noticia.titulo}
          </h1>
          <p className="mt-5 text-lg text-foreground/75 leading-relaxed">{noticia.resumo}</p>
        </div>
      </section>

      <section className="bg-brand-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="aspect-[16/9] overflow-hidden rounded-3xl shadow-xl">
            <img src={noticia.imagem} alt={noticia.titulo} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ShareButtons url={url} title={noticia.titulo} />
          <div className="mt-10 space-y-6 text-[17px] leading-[1.8] text-foreground/85">
            {noticia.conteudo.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-brand-earth/15">
            <ShareButtons url={url} title={noticia.titulo} />
          </div>
        </div>
      </section>

      {noticia.galeria.length > 0 && (
        <section className="py-16 bg-brand-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <NewsGallery images={noticia.galeria} />
          </div>
        </section>
      )}

      {finalRel.length > 0 && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-dark">Notícias relacionadas</h2>
              <Link to="/noticias" className="text-sm font-semibold text-brand-earth hover:text-brand-red inline-flex items-center gap-1">
                Ver todas <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {finalRel.map((n) => (
                <NewsCard key={n.id} n={n} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-gradient-warm text-white text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Fortaleça essa história</h2>
          <p className="mt-4 text-white/90 text-lg">
            Apoie a Família Hùndésô e contribua para a continuidade de ações culturais, sociais e comunitárias.
          </p>
          <Link to="/como-ajudar" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-brand-dark hover:bg-brand-gold transition">
            <Heart className="h-4 w-4" /> Apoie agora
          </Link>
        </div>
      </section>
    </>
  );
}