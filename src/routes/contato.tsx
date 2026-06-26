import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";
import { IMAGES } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Família Hùndésô" },
      { name: "description", content: "Fale com a Família Hùndésô. Endereço, telefone, e-mail e formulário de contato." },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <>
      <PageHero image={IMAGES.heroContact} eyebrow="Contato" title="Fale" highlight="conosco" subtitle="Estamos abertos ao diálogo com a comunidade, parceiros e apoiadores."/>

      <section className="py-16 sm:py-20 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark">Informações</h2>
            <div className="space-y-5">
              {[
                {i:MapPin,t:"Endereço",d:"— endereço institucional —"},
                {i:Phone,t:"WhatsApp",d:"— a preencher —"},
                {i:Mail,t:"E-mail",d:"contato@familiahundeso.org.br"},
              ].map(({i:Icon,t,d}) => (
                <div key={t} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-gold text-brand-dark">
                    <Icon className="h-5 w-5"/>
                  </div>
                  <div>
                    <div className="font-display font-bold text-brand-dark">{t}</div>
                    <div className="text-sm text-foreground/70">{d}</div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="font-display font-bold text-brand-dark mb-3">Redes sociais</div>
              <div className="flex gap-3">
                {[Instagram, Facebook, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="grid h-11 w-11 place-items-center rounded-full bg-brand-dark text-white hover:bg-brand-earth transition">
                    <Icon className="h-4 w-4"/>
                  </a>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-brand-dark/10 grid place-items-center text-foreground/40 text-sm">
              Espaço reservado para mapa incorporado
            </div>
          </div>

          <form className="rounded-3xl bg-white p-8 shadow-md space-y-4" onSubmit={(e)=>e.preventDefault()}>
            <h2 className="font-display text-3xl font-bold text-brand-dark">Envie uma mensagem</h2>
            <input placeholder="Nome" className="w-full rounded-xl border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"/>
            <input type="email" placeholder="E-mail" className="w-full rounded-xl border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"/>
            <input placeholder="Telefone" className="w-full rounded-xl border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"/>
            <input placeholder="Assunto" className="w-full rounded-xl border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"/>
            <textarea placeholder="Mensagem" rows={5} className="w-full rounded-xl border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"/>
            <button className="w-full rounded-full bg-gradient-gold py-3 font-bold text-brand-dark hover:scale-[1.02] transition-transform">Enviar mensagem</button>
          </form>
        </div>
      </section>
    </>
  );
}