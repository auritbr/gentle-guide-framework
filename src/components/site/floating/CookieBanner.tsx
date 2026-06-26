import { useEffect, useState } from "react";
import { X, Cookie } from "lucide-react";

type Prefs = { necessary: true; analytics: boolean; marketing: boolean };
const KEY = "fh_cookie_prefs_v1";

export function CookieBanner({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [advanced, setAdvanced] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!open) return;
    try {
      const saved = localStorage.getItem(KEY);
      if (saved) {
        const p: Prefs = JSON.parse(saved);
        setAnalytics(!!p.analytics);
        setMarketing(!!p.marketing);
      }
    } catch {}
  }, [open]);

  const save = (prefs: Prefs) => {
    try {
      localStorage.setItem(KEY, JSON.stringify(prefs));
      localStorage.setItem("fh_cookie_decided", "1");
    } catch {}
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-end sm:items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden">
        <div className="flex items-start justify-between gap-4 p-6">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-cream text-brand-earth">
              <Cookie className="h-5 w-5" />
            </span>
            <h2 id="cookie-title" className="font-display text-lg font-bold text-brand-dark">Preferências de cookies</h2>
          </div>
          <button onClick={onClose} aria-label="Fechar" className="grid h-9 w-9 place-items-center rounded-full hover:bg-brand-cream text-brand-dark">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="px-6 pb-6">
          <p className="text-sm leading-relaxed text-foreground/80">
            Utilizamos cookies para melhorar sua experiência, analisar o uso do site e personalizar conteúdos. Você pode aceitar todos os cookies ou gerenciar suas preferências.
          </p>

          {advanced && (
            <div className="mt-5 space-y-3">
              <Row label="Cookies necessários" description="Essenciais para o funcionamento do site." checked disabled />
              <Row label="Cookies de análise" description="Ajudam a entender como o site é utilizado." checked={analytics} onChange={setAnalytics} />
              <Row label="Cookies de marketing" description="Personalização de conteúdo e campanhas." checked={marketing} onChange={setMarketing} />
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            <button
              onClick={() => save({ necessary: true, analytics: true, marketing: true })}
              className="flex-1 min-w-[140px] rounded-full bg-gradient-warm px-5 py-2.5 text-sm font-semibold text-white hover:scale-[1.02] transition-transform"
            >
              Aceitar todos
            </button>
            {advanced ? (
              <button
                onClick={() => save({ necessary: true, analytics, marketing })}
                className="flex-1 min-w-[140px] rounded-full bg-brand-dark px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-earth transition"
              >
                Salvar preferências
              </button>
            ) : (
              <button
                onClick={() => setAdvanced(true)}
                className="flex-1 min-w-[140px] rounded-full bg-brand-cream px-5 py-2.5 text-sm font-semibold text-brand-dark hover:bg-brand-gold/40 transition"
              >
                Gerenciar preferências
              </button>
            )}
            <button
              onClick={() => save({ necessary: true, analytics: false, marketing: false })}
              className="flex-1 min-w-[140px] rounded-full bg-white ring-1 ring-brand-earth/30 px-5 py-2.5 text-sm font-semibold text-brand-dark hover:bg-brand-cream transition"
            >
              Recusar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  description,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <label className={`flex items-start gap-3 rounded-xl border border-brand-earth/15 p-3 ${disabled ? "opacity-80" : "cursor-pointer hover:bg-brand-cream/60"}`}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-1 h-4 w-4 accent-brand-earth"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-semibold text-brand-dark">{label}</span>
          {disabled && <span className="text-[10px] uppercase tracking-wider text-brand-earth font-bold">Sempre ativo</span>}
        </div>
        <p className="text-xs text-foreground/70 mt-0.5">{description}</p>
      </div>
    </label>
  );
}