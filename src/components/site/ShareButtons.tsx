import { useState } from "react";
import { Instagram, Facebook, Linkedin, MessageCircle, Link2, Check } from "lucide-react";

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const encUrl = encodeURIComponent(url);
  const encTitle = encodeURIComponent(title);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const items: { label: string; icon: typeof Instagram; href?: string; onClick?: () => void; title?: string }[] = [
    { label: "WhatsApp", icon: MessageCircle, href: `https://wa.me/?text=${encTitle}%20${encUrl}` },
    { label: "Facebook", icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${encUrl}` },
    { label: "LinkedIn", icon: Linkedin, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encUrl}` },
    { label: "Instagram", icon: Instagram, href: "https://instagram.com/", title: "Compartilhe pelo Instagram copiando o link" },
    { label: copied ? "Link copiado!" : "Copiar link", icon: copied ? Check : Link2, onClick: copy },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-semibold text-brand-dark">Compartilhe:</span>
      {items.map((it) => {
        const Icon = it.icon;
        const cls = "inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-brand-earth/20 px-3 py-2 text-xs font-semibold text-brand-dark hover:bg-brand-earth hover:text-white transition";
        if (it.href) {
          return (
            <a key={it.label} href={it.href} target="_blank" rel="noopener noreferrer" title={it.title || it.label} aria-label={it.label} className={cls}>
              <Icon className="h-4 w-4" /> <span className="hidden sm:inline">{it.label}</span>
            </a>
          );
        }
        return (
          <button key={it.label} onClick={it.onClick} aria-label={it.label} className={cls}>
            <Icon className="h-4 w-4" /> <span className="hidden sm:inline">{it.label}</span>
          </button>
        );
      })}
    </div>
  );
}