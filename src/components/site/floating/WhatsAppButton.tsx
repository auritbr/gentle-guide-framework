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
      className="fixed bottom-[18px] right-[18px] sm:bottom-7 sm:right-7 z-[999] grid h-12 w-12 sm:h-[52px] sm:w-[52px] place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_22px_rgba(37,211,102,0.32)] hover:scale-[1.04] transition-transform focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
    >
      <FaWhatsapp aria-hidden="true" className="h-6 w-6 sm:h-[26px] sm:w-[26px]" />
    </a>
  );
}