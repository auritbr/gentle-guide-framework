import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Linkedin, MessageCircle, Mail, MapPin, Phone } from "lucide-react";

const COLUMNS = [
  {
    title: "Institucional",
    links: [
      { label: "Quem Somos", to: "/quem-somos" },
      { label: "Transparência", to: "/transparencia" },
      { label: "Equipe", to: "/equipe" },
      { label: "Projetos", to: "/projetos" },
    ],
  },
  {
    title: "Conteúdo",
    links: [
      { label: "Notícias", to: "/noticias" },
      { label: "Galeria", to: "/galeria" },
      { label: "Acervo e Memória", to: "/o-que-fazemos" },
      { label: "Eventos", to: "/noticias" },
    ],
  },
  {
    title: "Como apoiar",
    links: [
      { label: "Apoie Agora", to: "/como-ajudar" },
      { label: "Parcerias", to: "/como-ajudar" },
      { label: "Voluntariado", to: "/como-ajudar" },
      { label: "Doações", to: "/como-ajudar" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Política de Privacidade", to: "/contato" },
      { label: "Política de Cookies", to: "/contato" },
      { label: "Termos de Uso", to: "/contato" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-[#F7F2E9] text-brand-dark border-t border-brand-earth/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-brand-dark font-display font-bold">FH</div>
              <div className="font-display text-lg font-bold">Família Hùndésô</div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70">
              Tradição, cultura, ancestralidade e comunidade.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-brand-dark">{col.title}</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-foreground/70 hover:text-brand-earth transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="my-12 h-px bg-brand-earth/15" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h5 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-earth">
              <Mail className="h-4 w-4" /> E-mail
            </h5>
            <p className="mt-2 text-sm text-foreground/75">contato@familiahundeso.org.br</p>
          </div>
          <div>
            <h5 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-earth">
              <Phone className="h-4 w-4" /> Telefone / WhatsApp
            </h5>
            <p className="mt-2 text-sm text-foreground/75">(00) 00000-0000</p>
          </div>
          <div>
            <h5 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-earth">
              <MapPin className="h-4 w-4" /> Endereço
            </h5>
            <p className="mt-2 text-sm text-foreground/75">Endereço da instituição</p>
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
                <a key={label} href={href} aria-label={label} className="grid h-9 w-9 place-items-center rounded-full bg-white text-brand-dark ring-1 ring-brand-earth/15 hover:bg-brand-gold hover:text-brand-dark transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-earth/15 pt-6 text-center text-xs text-foreground/60 space-y-1">
          <div>CNPJ: 00.000.000/0001-00 — Família Hùndésô</div>
          <div>© {new Date().getFullYear()} Família Hùndésô. Todos os direitos reservados.</div>
        </div>
      </div>
    </footer>
  );
}