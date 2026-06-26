import { useEffect, useState } from "react";
import { Accessibility } from "lucide-react";
import { AccessibilityPanel, A11Y_DEFAULT, type A11yState } from "./AccessibilityPanel";

const KEY = "fh_a11y_v1";

export function AccessibilityButton() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<A11yState>(A11Y_DEFAULT);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setState({ ...A11Y_DEFAULT, ...JSON.parse(raw) });
    } catch {}
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir painel de acessibilidade"
        title="Acessibilidade"
        className="grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full bg-[#C75A32] text-white shadow-lg ring-1 ring-black/10 hover:scale-110 transition-transform focus:outline-none focus-visible:ring-4 focus-visible:ring-[#C75A32]/40"
      >
        <Accessibility className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <AccessibilityPanel open={open} onClose={() => setOpen(false)} state={state} setState={setState} />
    </>
  );
}