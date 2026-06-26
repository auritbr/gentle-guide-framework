import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { IMAGES } from "@/data/site";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies — Família Hùndésô" },
      { name: "description", content: "Política de Cookies da Família Hùndésô." },
    ],
  }),
  component: () => (
    <>
      <PageHero image={IMAGES.heroTransparency} eyebrow="Legal" title="Política de" highlight="Cookies" subtitle="Como utilizamos cookies para melhorar a sua experiência no site." />
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-stone">
          <p>Esta página apresenta, em breve, a Política de Cookies completa da Família Hùndésô, explicando quais cookies utilizamos e como você pode gerenciá-los.</p>
          <p>Você pode ajustar suas preferências a qualquer momento pelo botão de cookies no canto inferior da tela.</p>
        </div>
      </section>
    </>
  ),
});