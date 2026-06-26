import { useEffect } from "react";
import { CookieButton } from "./CookieButton";
import { AccessibilityButton } from "./AccessibilityButton";
import { WhatsAppButton } from "./WhatsAppButton";
import { loadA11y } from "./AccessibilityPanel";

/**
 * Botões flutuantes do site.
 *
 * Importante: o VLibras NÃO é renderizado aqui. Os scripts e o markup
 * <div vw> ficam no shellComponent (src/routes/__root.tsx) porque
 * precisam estar presentes no HTML inicial para o widget oficial
 * (https://vlibras.gov.br/app/vlibras-plugin.js) inicializar corretamente.
 */
export function FloatingButtons() {
  useEffect(() => {
    loadA11y();
  }, []);

  return (
    <>
      <div className="fixed left-4 sm:left-6 bottom-5 sm:bottom-[26px] z-[999] flex flex-col gap-2 sm:gap-2.5 bg-transparent">
        <CookieButton />
        <AccessibilityButton />
      </div>
      <WhatsAppButton />
    </>
  );
}