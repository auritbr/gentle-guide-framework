import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import { CookieBanner } from "./CookieBanner";

export function CookieButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const decided = localStorage.getItem("fh_cookie_decided");
      if (!decided) {
        const t = setTimeout(() => setOpen(true), 800);
        return () => clearTimeout(t);
      }
    } catch {}
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir preferências de cookies"
        title="Preferências de cookies"
        className="grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-full bg-[#4A4A4A] text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] ring-1 ring-black/10 hover:scale-110 transition-transform focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
      >
        <Cookie className="h-5 w-5" />
      </button>
      <CookieBanner open={open} onClose={() => setOpen(false)} />
    </>
  );
}