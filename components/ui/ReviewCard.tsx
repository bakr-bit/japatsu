import Link from "next/link";
import { Star, StarHalf } from "lucide-react";
import type { ReviewSummary } from "@/content/reviews";

function Stars({ score = 0, max = 5 }: { score?: number; max?: number }) {
  const safeMax = max && max > 0 ? max : 5;
  const clamped = Math.max(0, Math.min(safeMax, score ?? 0));
  const normalized = Math.round((clamped / safeMax) * 10) / 10; // 0.1 precision
  const fiveScale = Math.round((normalized * 5 / safeMax) * 2) / 2;
  const full = Math.floor(fiveScale);
  const hasHalf = fiveScale - full >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center" aria-label={`Rating ${normalized} / ${safeMax}`}>
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`full-${i}`} className="h-4 w-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
      ))}
      {hasHalf ? <StarHalf className="h-4 w-4 text-yellow-400 fill-yellow-400" aria-hidden="true" /> : null}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" aria-hidden="true" />
      ))}
    </div>
  );
}

function initialsFromName(name: string) {
  const cleaned = name.replace(/（.*?）/g, "");
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (!parts.length) return "R";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function ReviewCard({ review }: { review: ReviewSummary }) {
  const rating = review.rating;
  const ratingMax = review.ratingMax ?? 5;
  const showPlayButton = Boolean(review.playHref && review.status !== "retired");
  const detailHref = `/reviews/${review.slug}`;

  const accentMap: Record<string, { border: string; gradient: string; badge?: string }> = {
    "21-com": { border: "border-violet-100", gradient: "from-violet-50 via-white to-white", badge: "最新レビュー" },
    "2up": { border: "border-emerald-100", gradient: "from-emerald-50 via-white to-white", badge: "仮想通貨" },
    "aloha-shark": { border: "border-amber-100", gradient: "from-amber-50 via-white to-white", badge: "サービス終了" },
    "betpanda": { border: "border-indigo-100", gradient: "from-indigo-50 via-white to-white", badge: "新鋭" },
    "betswap": { border: "border-sky-100", gradient: "from-sky-50 via-white to-white", badge: "注目" },
    "bitz": { border: "border-rose-100", gradient: "from-rose-50 via-white to-white", badge: "人気" },
  };

  const accent = accentMap[review.slug] ?? {
    border: "border-slate-200",
    gradient: "from-slate-50 via-white to-white",
  };

  return (
    <div className={`flex flex-col overflow-hidden rounded-xl border bg-gradient-to-br ${accent.border} ${accent.gradient} shadow-sm`}>
      <div className="relative h-40 bg-gray-100">
        {review.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={review.image}
            alt={review.name}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 text-2xl font-semibold text-gray-600">
            {initialsFromName(review.name)}
          </div>
        )}
        {review.status === "retired" ? (
          <span className="absolute left-3 top-3 rounded-full bg-gray-900/80 px-3 py-1 text-xs font-semibold text-white">
            サービス終了
          </span>
        ) : null}
        {review.bonusHighlight ? (
          <span className="absolute right-3 top-3 rounded-full bg-[#4392f1] px-3 py-1 text-xs font-semibold text-white">
            {review.bonusHighlight}
          </span>
        ) : null}
      </div>

      <div className="flex flex-col gap-4 p-5">
        {accent.badge ? (
          <span className="inline-flex w-fit items-center rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-gray-700 shadow">
            {accent.badge}
          </span>
        ) : null}
        <div>
          <h3 className="text-lg font-bold text-gray-900">{review.title}</h3>
          {typeof rating === "number" ? (
            <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
              <Stars score={rating} max={ratingMax} />
              <span>
                {rating} / {ratingMax}
              </span>
            </div>
          ) : null}
        </div>

        <p className="text-sm text-gray-700 leading-relaxed">{review.summary}</p>

        <div className="mt-auto space-y-2">
          {showPlayButton ? (
            <Link
              href={review.playHref!}
              className="block w-full rounded-md bg-[#4392f1] py-2.5 text-center text-sm font-bold text-white transition-colors hover:bg-[#2f80e6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4392f1]"
            >
              公式サイトでプレイ
            </Link>
          ) : null}
          <Link
            href={detailHref}
            className="block w-full rounded-md border border-gray-300 py-2.5 text-center text-sm font-semibold text-gray-800 transition-colors hover:border-gray-400 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
          >
            レビューを見る
          </Link>
        </div>
      </div>
    </div>
  );
}
