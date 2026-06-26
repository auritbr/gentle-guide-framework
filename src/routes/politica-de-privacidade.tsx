import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { IMAGES } from "@/data/site";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Família Hùndésô" },
      { name: "description", content: "Política de Privacidade da Família Hùndésô." },
    ],
  }),
  component: () => (
    <>
      <PageHero image={IMAGES.heroTransparency} eyebrow="Legal" title="Política de" highlight="Privacidade" subtitle="Compromisso da Família Hùndésô com o tratamento responsável dos seus dados." />
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-stone">
          <p>Esta página apresenta, em breve, a Política de Privacidade completa da Família Hùndésô, com informações sobre coleta, uso e proteção de dados pessoais em conformidade com a LGPD.</p>
          <p>Em caso de dúvidas, entre em contato pelo e-mail <a href="mailto:contato@familiahundeso.org.br">contato@familiahundeso.org.br</a>.</p>
        </div>
      </section>
    </>
  ),
});