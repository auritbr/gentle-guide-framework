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
        className="grid h-[42px] w-[42px] sm:h-[46px] sm:w-[46px] place-items-center rounded-full bg-white text-[#00A8FF] shadow-[0_8px_20px_rgba(0,80,140,0.18)] ring-1 ring-[#00A8FF]/30 hover:bg-[#00A8FF] hover:text-white hover:ring-[#00A8FF] hover:scale-110 transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-[#00A8FF]/40"
      >
        <Accessibility className="h-[19px] w-[19px] sm:h-[21px] sm:w-[21px]" />
      </button>
      <AccessibilityPanel open={open} onClose={() => setOpen(false)} state={state} setState={setState} />
    </>
  );
}