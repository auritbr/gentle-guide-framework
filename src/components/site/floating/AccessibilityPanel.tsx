import { useEffect } from "react";
import { X, Plus, Minus, RotateCcw, Contrast, Droplet, Underline, Pause, MousePointer2 } from "lucide-react";

const KEY = "fh_a11y_v1";

type State = {
  fontStep: -1 | 0 | 1 | 2; // small | normal | large | xlarge
  highContrast: boolean;
  grayscale: boolean;
  underlineLinks: boolean;
  reduceMotion: boolean;
  bigCursor: boolean;
};

const DEFAULT: State = {
  fontStep: 0,
  highContrast: false,
  grayscale: false,
  underlineLinks: false,
  reduceMotion: false,
  bigCursor: false,
};

function apply(s: State) {
  if (typeof document === "undefined") return;
  const cl = document.documentElement.classList;
  cl.remove("a11y-font-small", "a11y-font-large", "a11y-font-xlarge");
  if (s.fontStep === -1) cl.add("a11y-font-small");
  if (s.fontStep === 1) cl.add("a11y-font-large");
  if (s.fontStep === 2) cl.add("a11y-font-xlarge");
  cl.toggle("a11y-high-contrast", s.highContrast);
  cl.toggle("a11y-grayscale", s.grayscale);
  cl.toggle("a11y-underline-links", s.underlineLinks);
  cl.toggle("a11y-reduce-motion", s.reduceMotion);
  cl.toggle("a11y-big-cursor", s.bigCursor);
}

export function loadA11y() {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) apply({ ...DEFAULT, ...JSON.parse(raw) });
  } catch {}
}

export function AccessibilityPanel({
  open,
  onClose,
  state,
  setState,
}: {
  open: boolean;
  onClose: () => void;
  state: State;
  setState: (s: State) => void;
}) {
  useEffect(() => {
    apply(state);
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch {}
  }, [state]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const update = (patch: Partial<State>) => setState({ ...state, ...patch });

  return (
    <div className="fixed inset-0 z-[1000] flex items-stretch sm:items-center justify-end sm:justify-start bg-black/40 p-0 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="a11y-title" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full sm:w-[360px] sm:ml-20 bg-brand-cream sm:rounded-2xl shadow-2xl ring-1 ring-black/5 overflow-hidden flex flex-col"
      >
        <div className="flex items-center justify-between gap-2 bg-[#C75A32] text-white px-5 py-4">
          <h2 id="a11y-title" className="font-display text-lg font-bold">Acessibilidade</h2>
          <button onClick={onClose} aria-label="Fechar painel de acessibilidade" className="grid h-9 w-9 place-items-center rounded-full hover:bg-white/15">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="p-5 space-y-5 overflow-y-auto">
          <section>
            <h3 className="text-xs uppercase tracking-[0.18em] font-bold text-brand-earth mb-2">Tamanho do texto</h3>
            <div className="grid grid-cols-3 gap-2">
              <Btn onClick={() => update({ fontStep: Math.max(-1, state.fontStep - 1) as State["fontStep"] })} icon={Minus} label="Diminuir" />
              <Btn onClick={() => update({ fontStep: 0 })} icon={RotateCcw} label="Padrão" />
              <Btn onClick={() => update({ fontStep: Math.min(2, state.fontStep + 1) as State["fontStep"] })} icon={Plus} label="Aumentar" />
            </div>
          </section>

          <section>
            <h3 className="text-xs uppercase tracking-[0.18em] font-bold text-brand-earth mb-2">Recursos visuais</h3>
            <div className="space-y-2">
              <Toggle icon={Contrast} label="Alto contraste" checked={state.highContrast} onChange={(v) => update({ highContrast: v })} />
              <Toggle icon={Droplet} label="Escala de cinza" checked={state.grayscale} onChange={(v) => update({ grayscale: v })} />
              <Toggle icon={Underline} label="Sublinhar links" checked={state.underlineLinks} onChange={(v) => update({ underlineLinks: v })} />
              <Toggle icon={Pause} label="Pausar animações" checked={state.reduceMotion} onChange={(v) => update({ reduceMotion: v })} />
              <Toggle icon={MousePointer2} label="Cursor grande" checked={state.bigCursor} onChange={(v) => update({ bigCursor: v })} />
            </div>
          </section>

          <button
            onClick={() => setState(DEFAULT)}
            className="w-full rounded-full bg-brand-dark px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-earth transition"
          >
            Restaurar padrões
          </button>
        </div>
      </div>
    </div>
  );
}

function Btn({ onClick, icon: Icon, label }: { onClick: () => void; icon: typeof Plus; label: string }) {
  return (
    <button onClick={onClick} className="flex flex-col items-center justify-center gap-1 rounded-xl bg-white ring-1 ring-brand-earth/15 px-2 py-3 text-xs font-semibold text-brand-dark hover:bg-brand-gold/30 transition">
      <Icon className="h-4 w-4" /> {label}
    </button>
  );
}

function Toggle({ icon: Icon, label, checked, onChange }: { icon: typeof Contrast; label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`flex items-center justify-between w-full rounded-xl px-3 py-2.5 text-sm font-semibold transition ring-1 ${checked ? "bg-[#C75A32] text-white ring-[#C75A32]" : "bg-white text-brand-dark ring-brand-earth/15 hover:bg-brand-gold/20"}`}
    >
      <span className="flex items-center gap-2"><Icon className="h-4 w-4" /> {label}</span>
      <span className={`grid h-5 w-9 rounded-full p-0.5 transition ${checked ? "bg-white/30" : "bg-brand-earth/20"}`}>
        <span className={`h-4 w-4 rounded-full bg-white transition-transform ${checked ? "translate-x-4" : ""}`} />
      </span>
    </button>
  );
}

export type { State as A11yState };
export { DEFAULT as A11Y_DEFAULT };