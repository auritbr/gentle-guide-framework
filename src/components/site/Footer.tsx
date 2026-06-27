import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Linkedin, MessageCircle, Mail, MapPin, Phone } from "lucide-react";

const COLUMNS = [
  {
    title: "Institucional",
    links: [
      { label: "Quem Somos", to: "/quem-somos" },
      { label: "Nosso Culto", to: "/nosso-culto" },
      { label: "Transparência", to: "/transparencia" },
      { label: "Equipe", to: "/equipe" },
      { label: "Calendário Litúrgico", to: "/calendario-liturgico" },
    ],
  },
  {
    title: "Memória e atuação",
    links: [
      { label: "Projetos", to: "/projetos" },
      { label: "LGBTQIA+", to: "/projetos/lgbtqia" },
      { label: "Página do Presidente", to: "/projetos/presidente" },
      { label: "Maracatu", to: "/projetos/maracatu" },
      { label: "Rota dos Voduns", to: "/projetos/rota-dos-voduns" },
      { label: "Comunidade Riacho Branco", to: "/projetos/comunidade-riacho-branco" },
    ],
  },
  {
    title: "Conteúdo",
    links: [
      { label: "Notícias", to: "/noticias" },
      { label: "Galeria", to: "/galeria" },
    ],
  },
  {
    title: "Como apoiar",
    links: [
      { label: "Doação financeira", to: "/como-ajudar/doacao-financeira" },
      { label: "Doação de mantimentos", to: "/como-ajudar/doacao-mantimentos" },
      { label: "Doação de itens", to: "/como-ajudar/doacao-itens" },
      { label: "Ponto de coleta", to: "/como-ajudar/ponto-de-coleta" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Política de Privacidade", to: "/politica-de-privacidade" },
      { label: "Política de Cookies", to: "/politica-de-cookies" },
      { label: "Termos de Uso", to: "/termos-de-uso" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-brand-dark font-display font-bold">FH</div>
              <div className="font-display text-lg font-bold">Família Hùndésô</div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Tradição, cultura, ancestralidade e comunidade.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-brand-gold">{col.title}</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.to} className="text-white/75 hover:text-brand-gold transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="my-12 h-px bg-white/15" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h5 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-earth">
              <Mail className="h-4 w-4" /> E-mail
            </h5>
            <p className="mt-2 text-sm text-white/80 break-words">contato@familiahundeso.org.br</p>
          </div>
          <div>
            <h5 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-earth">
              <Phone className="h-4 w-4" /> Telefone / WhatsApp
            </h5>
            <p className="mt-2 text-sm text-white/80">(82) 99618-0034</p>
          </div>
          <div>
            <h5 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-earth">
              <MapPin className="h-4 w-4" /> Endereço
            </h5>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              Sítio Hùndésô - S/N - Comunidade Riacho Branco, Região Serrana dos Quilombos, zona rural — Joaquim Gomes/AL. CEP: 57980-000.
            </p>
          </div>
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-brand-earth">Conecte-se</h5>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Youtube, label: "YouTube", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
                { icon: MessageCircle, label: "WhatsApp", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} aria-label={label} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 hover:bg-brand-gold hover:text-white transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-center text-xs text-white/60 space-y-1">
          <div>CNPJ: 05.786.767/0001-01 — Família Hùndésô</div>
          <div>© 2026 Família Hùndésô. Todos os direitos reservados.</div>
        </div>
      </div>
    </footer>
  );
}