import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-brand-dark font-display font-bold">FH</div>
              <div className="font-display text-xl font-bold text-white">Família Hùndésô</div>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Organização cultural, religiosa, social e comunitária de matriz africana,
              comprometida com a ancestralidade, a memória e a transformação social.
            </p>
          </div>
          <div>
            <h4 className="font-display text-base font-bold text-white">Links rápidos</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/quem-somos" className="hover:text-brand-gold">Quem Somos</Link></li>
              <li><Link to="/o-que-fazemos" className="hover:text-brand-gold">O Que Fazemos</Link></li>
              <li><Link to="/transparencia" className="hover:text-brand-gold">Transparência</Link></li>
              <li><Link to="/como-ajudar" className="hover:text-brand-gold">Como Ajudar</Link></li>
              <li><Link to="/noticias" className="hover:text-brand-gold">Notícias</Link></li>
              <li><Link to="/contato" className="hover:text-brand-gold">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-base font-bold text-white">Contato</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-brand-gold mt-0.5" /><span>Endereço institucional<br/>a ser informado</span></li>
              <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-brand-gold mt-0.5" /><span>WhatsApp institucional</span></li>
              <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-brand-gold mt-0.5" /><span>contato@familiahundeso.org.br</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-base font-bold text-white">Redes sociais</h4>
            <div className="mt-4 flex gap-3">
              <a href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/5 hover:bg-brand-gold hover:text-brand-dark transition" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/5 hover:bg-brand-gold hover:text-brand-dark transition" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/5 hover:bg-brand-gold hover:text-brand-dark transition" aria-label="YouTube"><Youtube className="h-4 w-4" /></a>
            </div>
            <h4 className="mt-6 font-display text-base font-bold text-white">Políticas</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-gold">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-brand-gold">Termos de Uso</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Família Hùndésô. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}