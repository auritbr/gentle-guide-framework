import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { IMAGES } from "@/data/site";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — Família Hùndésô" },
      { name: "description", content: "Imagens e registros das atividades, celebrações e projetos da Família Hùndésô." },
    ],
  }),
  component: GaleriaPage,
});

const FOTOS = [
  IMAGES.community, IMAGES.drums, IMAGES.dance,
  IMAGES.children, IMAGES.hands, IMAGES.elder,
  IMAGES.workshop, IMAGES.culture, IMAGES.ceremony,
  IMAGES.group,
];

function GaleriaPage() {
  return (
    <>
      <PageHero image={IMAGES.heroNews} eyebrow="Memória Viva" title="Galeria" />
      <section className="py-20 bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
            {FOTOS.map((src, i) => (
              <div key={i} className="break-inside-avoid overflow-hidden rounded-xl shadow-sm">
                <img src={src} alt={`Registro ${i + 1}`} className="w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}