import { Youtube, Play } from "lucide-react";

const CHANNEL_URL = "https://www.youtube.com/channel/UCRcTfvtpbFoRsGNdjK9KAGQ?sub_confirmation=1";

/**
 * Lista editável de vídeos recentes do canal.
 * Para atualizar: substitua `id` pelo ID do vídeo (parte após v=) e o `titulo`.
 * Thumbnail é gerada automaticamente a partir do ID.
 */
/**
 * Vídeos reais do canal oficial UCRcTfvtpbFoRsGNdjK9KAGQ.
 * Atualize manualmente conforme novos vídeos forem publicados, mantendo
 * apenas IDs que pertençam ao canal oficial.
 */
const VIDEOS: { id: string; titulo: string; descricao?: string; publishedAt?: string }[] = [
  {
    id: "8HB_zL01QG8",
    titulo: "Encerramento da 15ª Mostra de Cinema e Direitos Humanos",
    descricao: "Cine Rural do Ponto de Cultura Família Hùndésô na Mostra de Direitos Humanos.",
    publishedAt: "2026-06-17",
  },
  {
    id: "qDTCzDw6_rE",
    titulo: "2º Dia da 15ª Mostra de Cinema e Direitos Humanos e Emergência Climática",
    descricao: "Reflexão, cultura e fortalecimento comunitário na Comunidade Riacho Branco.",
    publishedAt: "2026-06-10",
  },
  {
    id: "1MWpuppQFYk",
    titulo: "1º Dia da 15ª Mostra de Cinema e Direitos Humanos e Emergência Climática",
    descricao: "Abertura da mostra com famílias da Comunidade Riacho Branco.",
    publishedAt: "2026-06-10",
  },
];

export function YouTubeSection() {
  return (
    <section id="youtube" className="py-16 sm:py-20 bg-[#F5FBFF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] font-semibold text-[#E31919]">
              <Youtube className="h-4 w-4" /> No YouTube
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003F66] text-balance leading-[1.1]">
              Acompanhe a Família Hùndésô no YouTube
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#003F66]/75 leading-relaxed">
              Assista aos registros, ações, celebrações, projetos e conteúdos audiovisuais que fortalecem a memória, a cultura e a atuação comunitária da Família Hùndésô.
            </p>
          </div>
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Inscreva-se no canal do YouTube da Família Hùndésô"
            className="inline-flex items-center gap-2 rounded-full bg-[#E31919] px-6 py-3 text-sm font-bold text-white hover:bg-[#B81414] transition shadow-sm"
          >
            <Youtube className="h-4 w-4" /> Inscreva-se no canal
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((v, i) => {
            const href = `https://www.youtube.com/watch?v=${v.id}`;
            const thumb = `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`;
            return (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Assistir no YouTube: ${v.titulo}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-[#00A8FF]/15 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A8FF]"
              >
                <div className="relative aspect-video overflow-hidden bg-[#E6F7FF]">
                  <img
                    src={thumb}
                    alt={v.titulo}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-[#E31919] text-white shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 fill-white" />
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-bold text-[#003F66] leading-snug line-clamp-2">{v.titulo}</h3>
                  {v.descricao && (
                    <p className="mt-1.5 text-sm text-[#003F66]/70 line-clamp-2">{v.descricao}</p>
                  )}
                  <span className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[#00A8FF] group-hover:text-[#003F66] transition-colors">
                    Assistir no YouTube
                    <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}