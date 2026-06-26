import type { ReactNode } from "react";

export function PageHero({
  image,
  eyebrow,
  title,
  highlight,
  subtitle,
  children,
}: {
  image: string;
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate flex min-h-[70vh] items-end overflow-hidden pt-20">
      <img src={image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/40" />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-brand-gold backdrop-blur">
            {eyebrow}
          </div>
        )}
        <h1 className="mt-6 max-w-4xl font-display text-[36px] font-bold leading-[1.1] text-white text-balance sm:text-[44px] lg:text-[56px]">
          {title}{" "}
          {highlight && (
            <span className="relative inline-block">
              <span className="relative z-10 text-brand-dark px-3">{highlight}</span>
              <span className="absolute inset-0 -skew-x-6 bg-gradient-gold" />
            </span>
          )}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed">{subtitle}</p>
        )}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}