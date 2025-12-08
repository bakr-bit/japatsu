import { Gamepad2 } from "lucide-react";
import { renderMarkdown } from "@/components/ui/RichText";

export type GameShowHeroSectionProps = {
  title: string;
  description?: string;
  lastUpdated?: string;
  badgeText?: string;
  className?: string;
};

/**
 * Hero section for game show pages.
 * Displays title, description, and last updated date.
 */
export default function GameShowHeroSection({
  title,
  description,
  lastUpdated,
  badgeText = "Game Shows",
  className = "",
}: GameShowHeroSectionProps) {
  return (
    <section className={`relative overflow-hidden bg-purple-600 ${className}`}>
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute top-4 right-4 z-10">
        <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-sm font-semibold text-white ring-1 ring-white/30">
          {badgeText}
        </span>
      </div>
      <div className="relative mx-auto max-w-6xl px-8 py-16 md:py-20">
        <div className="text-white">
          <div className="flex items-center gap-2 mb-4">
            <Gamepad2 className="h-8 w-8" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              ゲームショーガイド
            </span>
          </div>
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-purple-50 leading-relaxed max-w-4xl">
              {renderMarkdown(description)}
            </p>
          )}
          {lastUpdated && (
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="font-medium">最終更新日: {lastUpdated}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
