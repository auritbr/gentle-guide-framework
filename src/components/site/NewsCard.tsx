import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Noticia } from "@/data/site";

export function NewsCard({ n }: { n: Noticia }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-brand-cream hover:shadow-xl transition-shadow">
      <Link to="/noticias/$slug" params={{ slug: n.slug }} className="block aspect-[4/3] overflow-hidden">
        <img src={n.imagem} alt={n.titulo} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </Link>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs">
          <span className="rounded-full bg-brand-earth px-3 py-1 font-semibold text-white">{n.categoria}</span>
          <span className="text-foreground/60">{n.data}</span>
        </div>
        <h3 className="mt-3 font-display text-xl font-bold text-brand-dark">{n.titulo}</h3>
        <p className="mt-2 text-sm text-foreground/70 flex-1">{n.resumo}</p>
        <Link to="/noticias/$slug" params={{ slug: n.slug }} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-earth hover:text-brand-red">
          Ler notícia <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}