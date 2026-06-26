import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { IMAGES } from "@/data/site";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Família Hùndésô" },
      { name: "description", content: "Termos de Uso do site da Família Hùndésô." },
    ],
  }),
  component: () => (
    <>
      <PageHero image={IMAGES.heroTransparency} eyebrow="Legal" title="Termos de" highlight="Uso" subtitle="Condições para utilização do site e dos conteúdos da Família Hùndésô." />
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-stone">
          <p>Esta página apresenta, em breve, os Termos de Uso completos do site da Família Hùndésô, incluindo regras de uso, direitos autorais e responsabilidades.</p>
          <p>Em caso de dúvidas, entre em contato pelo e-mail <a href="mailto:contato@familiahundeso.org.br">contato@familiahundeso.org.br</a>.</p>
        </div>
      </section>
    </>
  ),
});