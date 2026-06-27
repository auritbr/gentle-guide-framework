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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark">Informações</h2>
            <div className="space-y-5">
              {[
                {i:MapPin,t:"Matriz Hunkpame Hundeso",d:"Sítio Hùndésô - S/N - Comunidade Riacho Branco, Região Serrana dos Quilombos, zona rural - Joaquim Gomes/AL. CEP: 57980-000."},
                {i:Phone,t:"Fone",d:"(82) 99618-0034"},
                {i:Mail,t:"E-mail",d:"contato@familiahundeso.org.br"},
              ].map(({i:Icon,t,d}) => (
                <div key={t} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-brand-earth/10">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-earth-soft text-brand-earth ring-1 ring-brand-earth/15">
                    <Icon className="h-5 w-5"/>
                  </div>
                  <div>
                    <div className="font-display font-bold text-brand-dark">{t}</div>
                    <div className="text-sm text-foreground/70 leading-relaxed">{d}</div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="font-display font-bold text-brand-dark mb-3">Redes sociais</div>
              <div className="flex gap-3">
                {[Instagram, Facebook, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="grid h-11 w-11 place-items-center rounded-full bg-brand-earth text-white hover:bg-brand-dark transition-colors">
                    <Icon className="h-4 w-4"/>
                  </a>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-brand-earth/10">
              <iframe
                title="Localização — Matriz Hunkpame Hundeso"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3180.8403321381343!2d-35.75860722608461!3d-9.051201791011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x700cf461fa4a9e5%3A0x92059b4106599bf0!2zSMO5bmtww6Btw6kgQXnDs27DsyBIw7luZMOpc8O0!5e1!3m2!1spt-BR!2sbr!4v1782510591694!5m2!1spt-BR!2sbr"
                className="w-full h-[300px] sm:h-[360px] lg:h-[420px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>

          <form className="rounded-3xl bg-white p-8 shadow-md space-y-4" onSubmit={(e)=>e.preventDefault()}>
            <h2 className="font-display text-3xl font-bold text-brand-dark">Envie uma mensagem</h2>
            <input placeholder="Nome" className="w-full rounded-xl border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"/>
            <input type="email" placeholder="E-mail" className="w-full rounded-xl border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"/>
            <input placeholder="Telefone" className="w-full rounded-xl border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"/>
            <input placeholder="Assunto" className="w-full rounded-xl border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"/>
            <textarea placeholder="Mensagem" rows={5} className="w-full rounded-xl border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold"/>
            <button className="w-full rounded-full bg-brand-earth py-3 font-bold text-white hover:bg-brand-dark transition-colors shadow-sm">Enviar mensagem</button>
          </form>
        </div>
      </section>
    </>
  );
}