import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { IMAGES, NOTICIAS } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";
import { NewsCard } from "@/components/site/NewsCard";
import { Pagination } from "@/components/site/Pagination";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Notícias — Família Hùndésô" },
      { name: "description", content: "Notícias, registros e novidades da Família Hùndésô." },
    ],
  }),
  component: Noticias,
});

const CATEGORIAS = ["Todas", "Cultura", "Comunidade", "Projetos", "Eventos", "Memória", "Transparência"];
const PER_PAGE = 6;

function Noticias() {
  const [cat, setCat] = useState("Todas");
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtradas = useMemo(() => {
    const q = query.trim().toLowerCase();
    return NOTICIAS.filter((n) => {
      const catOk = cat === "Todas" || n.categoria === cat;
      const qOk = !q || n.titulo.toLowerCase().includes(q) || n.resumo.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [cat, query]);

  const totalPages = Math.max(1, Math.ceil(filtradas.length / PER_PAGE));
  const current = Math.min(page, totalPages);
  const visible = filtradas.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(input);
    setPage(1);
  };

  return (
    <>
      <PageHero
        image={IMAGES.heroNews}
        eyebrow="Comunicação"
        title="Notícias"
        subtitle="Acompanhe registros, ações, eventos e comunicados da Família Hùndésô."
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <form onSubmit={onSearch} className="flex flex-col sm:flex-row gap-3 max-w-3xl">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Buscar notícias..."
                className="w-full rounded-full border border-brand-earth/20 bg-brand-cream/40 pl-11 pr-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-earth"
              />
            </div>
            <button type="submit" className="rounded-full bg-gradient-warm px-8 py-3 text-sm font-bold text-white hover:scale-[1.02] transition-transform">
              Buscar
            </button>
          </form>

          <div className="mt-8 flex flex-wrap gap-2">
            {CATEGORIAS.map((c) => (
              <button
                key={c}
                onClick={() => { setCat(c); setPage(1); }}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${cat === c ? "bg-brand-dark text-white" : "bg-brand-cream text-brand-dark hover:bg-brand-gold"}`}
              >
                {c}
              </button>
            ))}
          </div>

          {visible.length === 0 ? (
            <p className="mt-16 text-center text-foreground/60">Nenhuma notícia encontrada.</p>
          ) : (
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((n) => (
                <NewsCard key={n.id} n={n} />
              ))}
            </div>
          )}

          <Pagination page={current} totalPages={totalPages} onChange={setPage} />
        </div>
      </section>
    </>
  );
}