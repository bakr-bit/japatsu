import Image from "next/image";
import { Star, TrendingUp, Shield } from "lucide-react";
import type { HeroWithRating, ScoreBreakdown } from "@/lib/types";

export type ReviewHeroSectionProps = {
  hero: HeroWithRating;
  logoUrl?: string | null;
  logoAlt?: string;
  gamesCount?: number;
  featuresCount?: number;
  securityCount?: number;
};

/**
 * Hero section for casino review pages.
 * Displays casino info, rating, logo, and key stats.
 */
export default function ReviewHeroSection({
  hero,
  logoUrl,
  logoAlt,
  gamesCount,
  featuresCount,
  securityCount,
}: ReviewHeroSectionProps) {
  const scoreMax = hero.scoreMax ?? 5;

  return (
    <section className="relative overflow-hidden bg-indigo-700">
      <div className="absolute inset-0 bg-black/20" />

      {/* Casino Review Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-sm font-semibold text-white ring-1 ring-white/30">
          Casino Review
        </span>
      </div>

      <div className="relative mx-auto max-w-6xl px-8 py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          {/* Left Side - Casino Info */}
          <div className="text-white">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-4">
              {hero.title}
            </h1>
            {hero.subheading && (
              <p className="text-xl text-purple-100 mb-4">{hero.subheading}</p>
            )}
            {hero.description && (
              <p className="text-lg text-purple-50 mb-6">{hero.description}</p>
            )}

            {/* Rating */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1">
                <div className="flex">
                  {Array.from({ length: scoreMax }, (_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(hero.score)
                          ? "fill-yellow-400 text-yellow-400"
                          : i < hero.score
                          ? "fill-yellow-200 text-yellow-200"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-1 text-sm font-medium text-white">
                  {hero.score}/{scoreMax}
                </span>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {gamesCount && (
                <div className="text-center bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">{gamesCount}+</div>
                  <div className="text-sm text-purple-200">ゲーム</div>
                </div>
              )}
              {featuresCount && (
                <div className="text-center bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">{featuresCount}</div>
                  <div className="text-sm text-purple-200">特徴</div>
                </div>
              )}
              {securityCount && (
                <div className="text-center bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">{securityCount}</div>
                  <div className="text-sm text-purple-200">ライセンス</div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Casino Logo */}
          {(logoUrl || hero.avatarSrc) && (
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <Image
                  src={logoUrl || hero.avatarSrc!}
                  alt={logoAlt || hero.avatarAlt || hero.title}
                  width={300}
                  height={300}
                  className="rounded-lg shadow-2xl bg-white/10 p-4"
                  priority
                />
              </div>
            </div>
          )}
        </div>

        {/* Highlights & Watchouts */}
        {(hero.highlights || hero.watchouts) && (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {hero.highlights && (
              <div className="bg-green-500/20 rounded-lg p-4">
                <h3 className="font-semibold text-green-100 mb-2 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  注目ポイント
                </h3>
                <ul className="space-y-1 text-green-50 text-sm">
                  {hero.highlights.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            )}
            {hero.watchouts && (
              <div className="bg-yellow-500/20 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-100 mb-2 flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  注意点
                </h3>
                <ul className="space-y-1 text-yellow-50 text-sm">
                  {hero.watchouts.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
