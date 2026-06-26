import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function NewsGallery({ images, title = "Fotos da ação" }: { images: string[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(
    () => setOpen((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setOpen((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close, prev, next]);

  return (
    <section>
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-dark">{title}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            className="overflow-hidden rounded-2xl bg-brand-cream aspect-[4/3] group"
          >
            <img src={src} alt={`Foto ${i + 1}`} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </button>
        ))}
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={close}>
          <button onClick={close} aria-label="Fechar" className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-brand-dark hover:bg-white">
            <X className="h-5 w-5" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Anterior" className="absolute left-4 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white/90 text-brand-dark hover:bg-white">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <img src={images[open]} alt="" className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Próxima" className="absolute right-4 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white/90 text-brand-dark hover:bg-white">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}