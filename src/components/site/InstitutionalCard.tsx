import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  HandHeart,
  Coins,
  Leaf,
  Shirt,
  Footprints,
  Backpack,
  ToyBrick,
  Scale,
  BookOpen,
  Users,
  HeartHandshake,
  Building2,
  Landmark,
  ShieldCheck,
  Megaphone,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  // Impactos do bazar
  "Ação social direta": HandHeart,
  "Captação de recursos": Coins,
  "Consciência ambiental": Leaf,
  // Itens para doação
  "Vestuário": Shirt,
  "Calçados": Footprints,
  "Acessórios": Backpack,
  "Infantil": ToyBrick,
  // Jurídico / alfabetização (fallbacks coerentes)
  "Ponte para a justiça": Scale,
  "Ações e mutirões especiais": Megaphone,
  "Alfabetização": BookOpen,
  "Inclusão digital": Sparkles,
  "Acolhimento": HeartHandshake,
  // Políticas públicas
  "Mobilização e controle social": Megaphone,
  "Defesa de direitos": ShieldCheck,
  "Participação institucional": Landmark,
  "Fortalecimento comunitário": Users,
  "Diálogo com o poder público": Building2,
};

function pickIcon(titulo: string): LucideIcon {
  return ICON_MAP[titulo] ?? Sparkles;
}

export function InstitutionalCard({
  titulo,
  texto,
}: {
  titulo: string;
  texto?: string | string[];
}) {
  const Icon = pickIcon(titulo);
  const paragrafos = Array.isArray(texto) ? texto : texto ? [texto] : [];
  return (
    <article className="group relative flex h-full flex-col rounded-2xl bg-white p-6 ring-1 ring-brand-earth/10 shadow-[0_1px_2px_rgba(60,40,20,0.04),0_8px_24px_-12px_rgba(60,40,20,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgba(60,40,20,0.06),0_18px_38px_-18px_rgba(60,40,20,0.22)] hover:ring-brand-gold/40">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-gold/15 to-brand-earth/15 text-brand-earth ring-1 ring-brand-gold/25">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-brand-dark">
        {titulo}
      </h3>
      {paragrafos.length > 0 && (
        <div className="mt-2.5 space-y-2.5 text-sm leading-relaxed text-foreground/70">
          {paragrafos.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}
      <span
        aria-hidden
        className="mt-5 block h-px w-10 bg-gradient-to-r from-brand-gold to-brand-earth/40"
      />
    </article>
  );
}