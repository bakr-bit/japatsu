import Link from "next/link";
import { ReactNode } from "react";
import { Star as IconStar, StarHalf as IconStarHalf } from "lucide-react";

export type CasinoCardData = {
  img: string;
  name: string;
  ratingScore?: number; // numeric rating 0-5
  description: string;
  playHref: string;
  detailsHref: string;
  responsibleHref?: string;
  bonusOverlay?: {
    type: "ボーナス" | "フリースピン" | "賭け条件";
    amount: string;
  };
  alt?: string;
};

type CasinoCardProps = {
  casino: CasinoCardData;
  className?: string;
  imageClassName?: string;
};

function Stars({ score = 0 }: { score?: number }) {
  const s = Math.max(0, Math.min(5, Math.round(score * 2) / 2));
  const full = Math.floor(s);
  const hasHalf = s - full >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);
  const items: ReactNode[] = [];

  for (let i = 0; i < full; i++) {
    items.push(<IconStar key={`f-${i}`} className="h-4 w-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />);
  }
  if (hasHalf) {
    items.push(<IconStarHalf key="half" className="h-4 w-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />);
  }
  for (let i = 0; i < empty; i++) {
    items.push(<IconStar key={`e-${i}`} className="h-4 w-4 text-gray-300" aria-hidden="true" />);
  }

  return (
    <span className="inline-flex items-center" aria-label={`Rating ${s} out of 5`}>
      {items}
    </span>
  );
}

export default function CasinoCard({ casino, className = "", imageClassName = "" }: CasinoCardProps) {
  const alt = casino.alt ?? casino.name ?? "Casino";

  return (
    <div className={`bg-white rounded-lg shadow-sm overflow-hidden ${className}`}>
      {/* Image with optional bonus overlay */}
      <div className="relative">
        <Link href={casino.playHref} className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {casino.img ? (
            <img
              src={casino.img}
              alt={alt}
              className={`w-full h-32 object-cover group-hover:scale-105 transition-transform duration-200 ${imageClassName}`}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className={`w-full h-32 bg-gray-200 ${imageClassName}`} aria-hidden="true" />
          )}
        </Link>

        {/* Bonus overlay */}
        {casino.bonusOverlay && (
          <div className="absolute top-2 right-2 bg-[#4392f1] text-white px-2 py-1 rounded-md text-xs font-bold">
            <div className="text-center">
              <div>{casino.bonusOverlay.type}</div>
              <div className="font-extrabold">{casino.bonusOverlay.amount}</div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Casino name and rating */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-800 line-clamp-1">{casino.name}</h3>
          <Stars score={casino.ratingScore ?? 0} />
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 min-h-[2.5rem]">{casino.description}</p>

        {/* Action buttons */}
        <div className="space-y-2">
          <Link
            href={casino.playHref}
            className="w-full text-center bg-[#4392f1] text-white font-bold py-2 px-4 rounded-md hover:bg-[#2f80e6] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4392f1] block"
          >
            今すぐプレイ！ ▶️
          </Link>
          <Link
            href={casino.detailsHref}
            className="w-full text-center bg-gray-600 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 block"
          >
            詳細を見る 🔎
          </Link>
          {casino.responsibleHref && (
            <Link href={casino.responsibleHref} className="text-xs text-gray-500 hover:underline text-center block">
              責任あるプレイ 🧠
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
