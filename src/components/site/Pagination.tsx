import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination({
  page,
  totalPages,
  onChange,
}: {
  page: number;
  totalPages: number;
  onChange: (p: number) => void;
}) {
  if (totalPages <= 1) return null;

  const pages: (number | "...")[] = [];
  const add = (n: number | "...") => pages.push(n);

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) add(i);
  } else {
    add(1);
    if (page > 3) add("...");
    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);
    for (let i = start; i <= end; i++) add(i);
    if (page < totalPages - 2) add("...");
    add(totalPages);
  }

  const base = "grid h-10 w-10 place-items-center rounded-full text-sm font-semibold transition";

  return (
    <nav aria-label="Paginação" className="mt-12 flex items-center justify-center gap-2">
      <button
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className={`${base} bg-white ring-1 ring-brand-earth/20 text-brand-dark hover:bg-brand-cream disabled:opacity-40 disabled:cursor-not-allowed`}
        aria-label="Página anterior"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`e-${i}`} className="px-1 text-foreground/50">…</span>
        ) : (
          <button
            key={p}
            onClick={() => onChange(p)}
            aria-current={p === page ? "page" : undefined}
            className={`${base} ${p === page ? "bg-brand-earth text-white" : "bg-white ring-1 ring-brand-earth/20 text-brand-dark hover:bg-brand-cream"}`}
          >
            {p}
          </button>
        )
      )}
      <button
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className={`${base} bg-white ring-1 ring-brand-earth/20 text-brand-dark hover:bg-brand-cream disabled:opacity-40 disabled:cursor-not-allowed`}
        aria-label="Próxima página"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}