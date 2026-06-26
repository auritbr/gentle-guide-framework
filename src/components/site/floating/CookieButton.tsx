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
        className="grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full bg-[#3F3F3F] text-white shadow-lg ring-1 ring-black/10 hover:scale-110 transition-transform focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
      >
        <Cookie className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <CookieBanner open={open} onClose={() => setOpen(false)} />
    </>
  );
}