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
        className="grid h-[42px] w-[42px] sm:h-[46px] sm:w-[46px] place-items-center rounded-full bg-[#7A4900] text-white shadow-[0_8px_20px_rgba(0,0,0,0.18)] ring-1 ring-black/10 hover:bg-[#5C3600] hover:scale-110 transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-[#7A4900]/40"
      >
        <Cookie className="h-[19px] w-[19px] sm:h-[21px] sm:w-[21px]" />
      </button>
      <CookieBanner open={open} onClose={() => setOpen(false)} />
    </>
  );
}