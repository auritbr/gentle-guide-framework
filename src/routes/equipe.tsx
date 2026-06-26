import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { IMAGES } from "@/data/site";

export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: "Equipe — Família Hùndésô" },
      { name: "description", content: "Conheça a diretoria, conselho e equipe que compõem a Família Hùndésô." },
    ],
  }),
  component: EquipePage,
});

const EQUIPE = [
  { nome: "Liderança Espiritual", cargo: "Coordenação Tradicional", foto: IMAGES.elder },
  { nome: "Diretoria Executiva", cargo: "Gestão Institucional", foto: IMAGES.group },
  { nome: "Coordenação Cultural", cargo: "Programas e Projetos", foto: IMAGES.workshop },
  { nome: "Conselho Fiscal", cargo: "Transparência e Prestação de Contas", foto: IMAGES.hands },
  { nome: "Equipe Educativa", cargo: "Crianças e Juventude", foto: IMAGES.children },
  { nome: "Comunicação", cargo: "Mídia e Memória", foto: IMAGES.culture },
];

function EquipePage() {
  return (
    <>
      <PageHero image={IMAGES.heroAbout} eyebrow="Quem Somos" title="Nossa Equipe" />
      <section className="py-20 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {EQUIPE.map((m) => (
              <article key={m.nome} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                <div className="aspect-square overflow-hidden">
                  <img src={m.foto} alt={m.nome} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-brand-dark">{m.nome}</h3>
                  <p className="text-sm text-foreground/70">{m.cargo}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}