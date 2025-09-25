"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { Star as IconStar, StarHalf as IconStarHalf } from "lucide-react";

export type Casino = {
  rank: number;
  img: string;
  name: string;
  rating?: string; // legacy image URL (unused if ratingScore provided)
  ratingScore?: number; // numeric rating 0-5 (e.g., 4.5)
  description: string;
  bonus: string; // e.g., "100% up to $500"
  spins: string; // e.g., "100 FS"
  payments: string[]; // keys into paymentIconMap
  morePayments?: number;
  playHref: string;
  detailsHref: string;
  responsibleHref?: string;
};

type RankingCardProps = {
  casino: Casino;
  paymentIconMap?: Record<string, string>;
  className?: string;
  leftNode?: ReactNode; // optional custom left content instead of image/rank
};

function IconGift(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M20 12v10H4V12" />
      <path d="M2 7h20v5H2z" />
      <path d="M12 22V7" />
      <path d="M12 7a3 3 0 1 1 3-3c0 3-3 3-3 3Z" />
      <path d="M12 7s-3 0-3-3a3 3 0 1 1 3 3Z" />
    </svg>
  );
}

function IconRotateCw(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 3v7h-7" />
    </svg>
  );
}

export default function RankingCard({ casino, paymentIconMap = {}, className = "", leftNode }: RankingCardProps) {
  const rankColors: Record<number, string> = {
    1: "bg-yellow-400",
    2: "bg-gray-300",
    3: "bg-yellow-600",
  };
  const rankColor = rankColors[casino.rank] ?? "bg-gray-400";
  const shiny = casino.rank >= 1 && casino.rank <= 3;

  return (
    <div className={`bg-white border rounded-lg shadow-sm mb-6 flex flex-col lg:flex-row items-center p-4 ${className}`}>
      {/* Image & Rank */}
      <div className="flex-shrink-0 lg:w-1/5 relative mb-4 lg:mb-0">
        <div
          className={`absolute -top-6 -left-2 text-white text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full ${rankColor} ${
            shiny ? "shine overflow-hidden" : ""
          }`}
          aria-label={`Rank ${casino.rank}`}
        >
          {casino.rank}
        </div>
        {leftNode ?? (
          casino.img ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={casino.img} alt={casino.name} className="rounded-lg w-48 h-auto mx-auto" loading="lazy" decoding="async" />
          ) : (
            <div className="rounded-lg w-48 h-24 bg-gray-200 mx-auto" aria-hidden="true" />
          )
        )}
      </div>

      {/* Details */}
      <div className="flex-grow lg:w-3/5 lg:px-6 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-2 mb-2">
          <span className="text-xl font-bold">{casino.name}</span>
          <Stars score={casino.ratingScore ?? 0} />
        </div>
        <p className="font-bold text-red-500 mb-4">{casino.description}</p>

        <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-4 mb-4">
          <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md">
            <IconGift className="h-6 w-6 text-gray-600" />
            <div>
              <div className="text-xs text-gray-500">ボーナス</div>
              <div className="font-bold text-yellow-500">{casino.bonus}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md">
            <IconRotateCw className="h-6 w-6 text-gray-600" />
            <div>
              <div className="text-xs text-gray-500">フリースピン</div>
              <div className="font-bold">{casino.spins}</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-start gap-2">
          <div className="text-xs font-semibold whitespace-nowrap">決済方法:</div>
          <div className="flex flex-wrap gap-1">
            {casino.payments.map((p) => {
              const src = paymentIconMap[p];
              if (!src) return null;
              return (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={p} src={src} alt={p} className="h-6 w-6 rounded-full" loading="lazy" decoding="async" />
              );
            })}
            {casino.morePayments && casino.morePayments > 0 ? (
              <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold">
                +{casino.morePayments}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex-shrink-0 lg:w-1/5 mt-4 lg:mt-0 flex flex-col items-center gap-2 w-full">
        <Link
          href={casino.playHref}
          className="w-full text-center bg-red-500 text-white font-bold py-3 rounded-md hover:bg-red-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
        >
          今すぐプレイ！
        </Link>
        <Link
          href={casino.detailsHref}
          className="w-full text-center bg-gray-600 text-white font-bold py-3 rounded-md hover:bg-gray-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600"
        >
          詳細を見る
        </Link>
        {casino.responsibleHref ? (
          <Link href={casino.responsibleHref} className="text-xs text-gray-500 mt-2 hover:underline">
            責任あるプレイ
          </Link>
        ) : null}
      </div>
    </div>
  );
}

function Stars({ score = 0 }: { score?: number }) {
  // Clamp and round to nearest 0.5
  const s = Math.max(0, Math.min(5, Math.round(score * 2) / 2));
  const full = Math.floor(s);
  const hasHalf = s - full >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);
  const items: ReactNode[] = [];
  for (let i = 0; i < full; i++) items.push(<IconStar key={`f-${i}`} className="h-4 w-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />);
  if (hasHalf) items.push(<IconStarHalf key="half" className="h-4 w-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />);
  for (let i = 0; i < empty; i++) items.push(<IconStar key={`e-${i}`} className="h-4 w-4 text-gray-300" aria-hidden="true" />);
  return (
    <span className="inline-flex items-center" aria-label={`Rating ${s} out of 5`}>
      {items}
    </span>
  );
}
