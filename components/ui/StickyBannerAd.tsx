"use client";

import { useState } from "react";

type StickyBannerAdProps = {
  title?: string;
  description?: string;
  ctaLabel?: string;
  href?: string;
};

export default function StickyBannerAd({
  title = "1win",
  description = "ウェルカムオファー",
  ctaLabel = "今すぐ見る",
  href = "#",
}: StickyBannerAdProps) {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="fixed bottom-4 right-4 z-50 hidden md:block">
      <div className="bg-blue-800 text-white rounded-lg shadow-lg overflow-hidden w-80">
        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <div className="text-sm font-semibold opacity-90">{title}</div>
            <div className="text-lg font-bold">{description}</div>
          </div>
          <button
            type="button"
            aria-label="Close banner"
            className="text-blue-200 hover:text-white"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>
        <a
          href={href}
          className="block bg-red-600 text-center font-bold py-2 hover:bg-red-700 transition-colors"
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}

