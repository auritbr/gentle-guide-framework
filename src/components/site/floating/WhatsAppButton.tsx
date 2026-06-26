import { FaWhatsapp } from "react-icons/fa";

const PHONE = "5500000000000";
const MESSAGE = "Olá! Gostaria de saber mais sobre a Família Hùndésô.";
const HREF = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

export function WhatsAppButton() {
  return (
    <a
      href={HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      title="Fale conosco pelo WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-[999] grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] hover:scale-105 transition-transform focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
    >
      <FaWhatsapp aria-hidden="true" className="h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  );
}