import Link from "next/link";
import SectionTitle from "./SectionTitle";
import { Casino } from "./RankingCard";
import { Star as IconStar, StarHalf as IconStarHalf } from "lucide-react";

type TopRankingSectionProps = {
  casinos: Casino[];
  seeMoreHref?: string;
  className?: string;
  mascotImage?: string;
  mascotAlt?: string;
  paymentIconMap?: Record<string, string>;
};

export default function TopRankingSection({ 
  casinos, 
  seeMoreHref = "/reviews",
  className = "",
  mascotImage = "/mascots/bluffy-laughing.png",
  mascotAlt = "Bluffy Laughing",
  paymentIconMap = {}
}: TopRankingSectionProps) {
  return (
    <section className={`space-y-6 ${className}`}>
      {/* Section header with mascot */}
      <SectionTitle
        subtitle="TOP RANKING"
        title="オンカジ人気ランキングTOP10！今月のおすすめカジノを厳選！"
        mascot={mascotImage}
        mascotAlt={mascotAlt}
        align="center"
        className="mb-8"
      />

      {/* Numbered ranking list (responsive) */}
      <div className="space-y-4">
        {casinos.slice(0, 10).map((casino, index) => (
          <div
            key={`${casino.name}-${index}`}
            className="bg-white border rounded-lg shadow-sm p-4 flex flex-col sm:flex-row gap-4"
          >
            {/* Image + Rank */}
            <div className="relative sm:w-40">
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-red-500 text-white font-bold flex items-center justify-center shadow">
                {casino.rank}
              </div>
              <Link href={casino.playHref} className="block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {casino.img ? (
                  <img
                    src={casino.img}
                    alt={casino.name}
                    className="w-full h-24 sm:h-28 object-cover rounded-md"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="w-full h-24 sm:h-28 bg-gray-200 rounded-md" aria-hidden="true" />
                )}
              </Link>
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="text-base sm:text-lg font-bold text-gray-800 truncate flex-1">
                  {casino.name}
                </h3>
                <Stars score={(casino as any).ratingScore ?? 0} />
              </div>
              <p className="text-sm text-red-500 font-bold mb-2 line-clamp-2">{casino.description}</p>

              <div className="flex flex-wrap items-center gap-4 mb-2 text-sm">
                <div>
                  <span className="text-gray-500">ボーナス: </span>
                  <span className="font-bold text-yellow-500">{casino.bonus}</span>
                </div>
                <div>
                  <span className="text-gray-500">フリースピン: </span>
                  <span className="font-bold">{casino.spins}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-gray-500">決済方法:</span>
                <div className="flex gap-1 overflow-x-auto">
                  {casino.payments.slice(0, 6).map((payment) => {
                    const src = paymentIconMap[payment];
                    if (!src) return null;
                    return (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={payment}
                        src={src}
                        alt={payment}
                        className="h-5 w-5 rounded-full"
                        loading="lazy"
                        decoding="async"
                      />
                    );
                  })}
                  {casino.morePayments && casino.morePayments > 0 && (
                    <div className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold">
                      +{casino.morePayments}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="sm:w-40 grid grid-cols-2 sm:grid-cols-1 gap-2">
              <Link
                href={casino.playHref}
                className="text-center bg-red-500 text-white font-bold py-2 px-3 rounded-md hover:bg-red-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 text-sm"
              >
                今すぐプレイ！
              </Link>
              <Link
                href={casino.detailsHref}
                className="text-center bg-gray-600 text-white font-bold py-2 px-3 rounded-md hover:bg-gray-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 text-sm"
              >
                詳細を見る
              </Link>
              {casino.responsibleHref && (
                <Link
                  href={casino.responsibleHref}
                  className="col-span-2 sm:col-span-1 text-xs text-gray-500 hover:underline text-center"
                >
                  責任あるプレイ
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* See more link */}
      {seeMoreHref && (
        <div className="text-center mt-6">
          <Link
            href={seeMoreHref}
            className="inline-flex items-center gap-2 bg-red-500 text-white font-bold py-3 px-6 rounded-md hover:bg-red-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          >
            もっと見る
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      )}
    </section>
  );
}

function Stars({ score = 0 }: { score?: number }) {
  const s = Math.max(0, Math.min(5, Math.round(score * 2) / 2));
  const full = Math.floor(s);
  const hasHalf = s - full >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);
  const items: JSX.Element[] = [];
  for (let i = 0; i < full; i++) items.push(<IconStar key={`f-${i}`} className="h-4 w-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />);
  if (hasHalf) items.push(<IconStarHalf key="half" className="h-4 w-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />);
  for (let i = 0; i < empty; i++) items.push(<IconStar key={`e-${i}`} className="h-4 w-4 text-gray-300" aria-hidden="true" />);
  return <span className="inline-flex items-center">{items}</span>;
}
