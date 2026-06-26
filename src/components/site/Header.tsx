import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "bg-brand-dark/90 backdrop-blur-md shadow-lg" : "bg-brand-dark/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-gold text-brand-dark font-display font-bold text-lg shadow-lg">
            FH
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-bold text-white sm:text-lg">Família Hùndésô</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-brand-gold/80">Tradição · Cultura · Comunidade</div>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {NAV.map((item) => (
            <div key={item.to} className="relative group">
              <Link
                to={item.to}
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/90 hover:text-brand-gold transition-colors"
                activeProps={{ className: "text-brand-gold" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
                {item.children && <ChevronDown className="h-3 w-3" />}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <div className="min-w-[240px] rounded-xl bg-white p-2 shadow-xl ring-1 ring-black/5">
                    {item.children.map((c) => (
                      <a
                        key={c.to}
                        href={c.to}
                        className="block rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted hover:text-brand-earth"
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/como-ajudar"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-brand-dark shadow-lg hover:scale-105 transition-transform"
          >
            Apoie Agora
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden grid h-10 w-10 place-items-center rounded-md text-white hover:bg-white/10"
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t border-white/10 bg-brand-dark/95 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
            {NAV.map((item) => (
              <div key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white/10"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-3 mt-1 space-y-1 border-l border-white/10 pl-3">
                    {item.children.map((c) => (
                      <a
                        key={c.to}
                        href={c.to}
                        onClick={() => setOpen(false)}
                        className="block py-1.5 text-sm text-white/70 hover:text-brand-gold"
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/como-ajudar"
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-full bg-gradient-gold px-5 py-3 text-center text-sm font-bold uppercase tracking-wider text-brand-dark"
            >
              Apoie Agora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}