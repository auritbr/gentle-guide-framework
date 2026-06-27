import { Award } from "lucide-react";

export type PartnerType = "parceiro" | "apoio" | "selo";

export interface PartnerLogoCardProps {
  name: string;
  logo?: string;
  url?: string;
  alt?: string;
  type?: PartnerType;
}

export function PartnerLogoCard({ name, logo, url, alt, type = "parceiro" }: PartnerLogoCardProps) {
  const isSelo = type === "selo";
  const safeUrl = url && url !== "#" ? url : undefined;

  const content = (
    <div
      className={`group flex h-full flex-col items-center justify-center rounded-2xl bg-white p-5 sm:p-6 ring-1 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
        isSelo
          ? "ring-brand-earth/25 shadow-sm"
          : "ring-brand-earth/10 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
      }`}
    >
      {isSelo && (
        <span className="mb-3 inline-flex items-center gap-1 rounded-full bg-brand-cream px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-earth">
          <Award className="h-3 w-3" /> Selo institucional
        </span>
      )}
      <div className="flex h-16 w-full items-center justify-center sm:h-20">
        {logo ? (
          <img
            src={logo}
            alt={alt ?? name}
            loading="lazy"
            className="max-h-full max-w-full object-contain grayscale opacity-80 transition group-hover:grayscale-0 group-hover:opacity-100"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center rounded-lg border border-dashed border-brand-earth/25 bg-brand-cream/40 text-[11px] uppercase tracking-[0.2em] text-brand-earth/70"
          >
            Logo
          </div>
        )}
      </div>
      <div className="mt-3 text-center text-[12px] font-semibold leading-snug text-brand-dark/80">
        {name}
      </div>
    </div>
  );

  if (safeUrl) {
    return (
      <a
        href={safeUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={alt ?? name}
        className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2"
      >
        {content}
      </a>
    );
  }

  return (
    <div role="group" aria-label={alt ?? name} className="h-full">
      {content}
    </div>
  );
}

export const PARTNERS: PartnerLogoCardProps[] = [
  { name: "Parceiro institucional", url: "#", alt: "Logo do parceiro institucional", type: "parceiro" },
  { name: "Apoio cultural", url: "#", alt: "Logo do apoio cultural", type: "apoio" },
  { name: "Apoio comunitário", url: "#", alt: "Logo do apoio comunitário", type: "apoio" },
  { name: "Rede de parceiros", url: "#", alt: "Logo da rede de parceiros", type: "parceiro" },
  {
    name: "Mapa das Organizações da Sociedade Civil",
    url: "#",
    alt: "Selo do Mapa das Organizações da Sociedade Civil",
    type: "selo",
  },
];