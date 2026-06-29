import { Handshake, Award } from "lucide-react";

type Parceiro = {
  nome: string;
  href?: string;
  destaque?: boolean;
};

const PARCEIROS: Parceiro[] = [
  { nome: "Ministério dos Direitos Humanos e da Cidadania (MDHC)" },
  { nome: "Secretaria de Estado da Cultura e Economia Criativa de Alagoas (SECULT/AL)" },
  { nome: "Política Nacional Aldir Blanc (PNAB)" },
  { nome: "Política Nacional de Cultura Viva (PNCV)" },
  { nome: "Governo Federal" },
  { nome: "Ponto de Cultura Rural Família Hùndésô" },
  { nome: "Rede de Terreiros e Comunidades Tradicionais" },
  {
    nome: "Mapa das Organizações da Sociedade Civil",
    href: "#",
    destaque: true,
  },
];

export function PartnersSection() {
  return (
    <section id="parceiros" className="py-16 sm:py-20 bg-[#F5FBFF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] font-semibold text-[#00A8FF]">
            <Handshake className="h-4 w-4" /> Parceiros e apoios
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003F66] text-balance leading-[1.1]">
            Parceiros e apoios
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#003F66]/75 leading-relaxed">
            Instituições, redes e iniciativas que fortalecem a atuação social, cultural, comunitária e ancestral da Família Hùndésô.
          </p>
        </div>

        <div className="mt-10 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {PARCEIROS.map((p) => {
            const isLink = !!p.href;
            const Wrapper: any = isLink ? "a" : "div";
            const props = isLink
              ? { href: p.href, target: "_blank", rel: "noopener noreferrer", "aria-label": p.nome }
              : {};
            return (
              <Wrapper
                key={p.nome}
                {...props}
                className={`group flex min-h-[120px] items-center justify-center rounded-2xl bg-white p-5 text-center ring-1 ${
                  p.destaque ? "ring-[#00A8FF]/40 shadow-sm" : "ring-[#00A8FF]/15"
                } hover:ring-[#00A8FF] hover:shadow-md transition-all`}
              >
                <div className="flex flex-col items-center gap-2">
                  {p.destaque && (
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-[#E6F7FF] text-[#00A8FF]">
                      <Award className="h-5 w-5" />
                    </span>
                  )}
                  <span className="text-[13px] font-semibold leading-snug text-[#003F66] group-hover:text-[#00A8FF] transition-colors">
                    {p.nome}
                  </span>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}