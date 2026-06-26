import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES } from "@/data/site";

export function HeroCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);

  const scrollTo = useCallback((i: number) => embla?.scrollTo(i), [embla]);
  const prev = useCallback(() => embla?.scrollPrev(), [embla]);
  const next = useCallback(() => embla?.scrollNext(), [embla]);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
  }, [embla]);

  useEffect(() => {
    if (!embla || paused) return;
    const id = setInterval(() => embla.scrollNext(), 6000);
    return () => clearInterval(id);
  }, [embla, paused]);

  return (
    <section
      className="relative isolate overflow-hidden pt-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {HERO_SLIDES.map((s, i) => (
            <div key={i} className="relative min-w-0 flex-[0_0_100%]">
              <div className="relative h-[78vh] min-h-[520px] w-full">
                <img src={s.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/60 to-brand-dark/30" />
                <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
                  <div className="max-w-3xl">
                    {s.eyebrow && (
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-brand-gold backdrop-blur">
                        {s.eyebrow}
                      </div>
                    )}
                    <h1 className="mt-6 font-display text-[34px] font-bold leading-[1.1] text-white text-balance sm:text-[48px] lg:text-[60px]">
                      {s.title}{" "}
                      {s.highlight && (
                        <span className="relative inline-block">
                          <span className="relative z-10 text-brand-dark px-3">{s.highlight}</span>
                          <span className="absolute inset-0 -skew-x-6 bg-gradient-gold" />
                        </span>
                      )}
                    </h1>
                    {s.subtitle && (
                      <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/90 leading-relaxed">{s.subtitle}</p>
                    )}
                    <div className="mt-8">
                      <Link
                        to={s.buttonLink}
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-6 py-3 text-sm font-semibold text-white shadow-lg hover:scale-105 transition-transform"
                      >
                        {s.buttonLabel} <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-3 sm:left-6 top-1/2 z-20 grid h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-brand-dark hover:bg-white shadow-lg transition"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        aria-label="Próximo"
        className="absolute right-3 sm:right-6 top-1/2 z-20 grid h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-brand-dark hover:bg-white shadow-lg transition"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`h-2 rounded-full transition-all ${i === selected ? "w-8 bg-brand-gold" : "w-2 bg-white/50 hover:bg-white"}`}
          />
        ))}
      </div>
    </section>
  );
}