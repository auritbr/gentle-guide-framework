import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { IMAGES } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/transparencia")({
  head: () => ({
    meta: [
      { title: "Transparência — Família Hùndésô" },
      { name: "description", content: "Documentos institucionais, relatórios, certificações e prestação de contas." },
    ],
  }),
  component: Transparencia,
});

const DOCS = [
  { t: "Documentos Institucionais", d: "Estatuto social, ata de fundação, regimento interno e atos constitutivos da organização." },
  { t: "Relatórios de Atividades", d: "Registros das ações culturais, sociais e educativas realizadas pela Família Hùndésô." },
  { t: "Prestação de Contas", d: "Demonstrativos financeiros, balanços e relatórios de aplicação de recursos." },
  { t: "Certificações", d: "Certidões, registros e títulos institucionais nos âmbitos municipal, estadual e federal." },
  { t: "Parcerias e Convênios", d: "Termos de cooperação, convênios e parcerias firmados com instituições públicas e privadas." },
  { t: "Políticas e Termos", d: "Política de privacidade, termos de uso, código de conduta e demais documentos normativos." },
];

function Transparencia() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero image={IMAGES.heroTransparency} eyebrow="Compromisso" title="" highlight="Transparência" subtitle="Documentos, relatórios e registros institucionais à disposição da comunidade."/>

      <section className="py-16 sm:py-20 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-brand-earth font-semibold">Nosso jeito de fazer</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-brand-dark text-balance">Confiança que se constrói com clareza</h2>
          </div>
          <div className="space-y-5 text-lg text-foreground/80 leading-relaxed">
            <p>A Família Hùndésô acredita que transparência é parte essencial de uma relação de confiança com a comunidade, parceiros, apoiadores, doadores e instituições públicas.</p>
            <p>Nesta página, você encontra documentos, relatórios, registros institucionais e materiais que ajudam a compreender a atuação da organização e o impacto de suas ações.</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark">Documentos e Relatórios</h2>
          <div className="mt-8 space-y-3">
            {DOCS.map((doc, i) => (
              <div key={doc.t} className="rounded-2xl bg-brand-cream overflow-hidden">
                <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between p-5 text-left">
                  <span className="font-display text-lg font-bold text-brand-dark">{doc.t}</span>
                  <ChevronDown className={`h-5 w-5 text-brand-earth transition-transform ${open===i?"rotate-180":""}`}/>
                </button>
                {open === i && (
                  <div className="px-5 pb-5 text-foreground/70">
                    <p>{doc.d}</p>
                    <div className="mt-3 text-sm text-foreground/50">— área editável para inserir arquivos PDF, links ou descrições.</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}