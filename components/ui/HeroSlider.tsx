"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

export type HeroSlide = {
  id: string | number;
  link: string;
  desktopImg: string;
  mobileImg: string;
  navTitle: string;
  navSubtitle?: string;
  navIcon?: string;
  alt?: string;
};

type HeroSliderProps = {
  slides: HeroSlide[];
  intervalMs?: number;
  className?: string;
  pauseOnHover?: boolean;
  startIndex?: number;
};

export default function HeroSlider({
  slides,
  intervalMs = 5000,
  className = "",
  pauseOnHover = true,
  startIndex = 0,
}: HeroSliderProps) {
  const validSlides = useMemo(() => slides?.filter(Boolean) ?? [], [slides]);
  const [current, setCurrent] = useState(Math.min(startIndex, Math.max(validSlides.length - 1, 0)));
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isAuto = !prefersReducedMotion && intervalMs > 0 && validSlides.length > 1 && !paused;
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isAuto) return;
    const id = window.setInterval(() => {
      setCurrent((i) => (i + 1) % validSlides.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [isAuto, intervalMs, validSlides.length]);

  // Progress bar animation synced to interval
  useEffect(() => {
    if (!isAuto) {
      setProgress(0);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const elapsed = t - start;
      const pct = Math.min(1, elapsed / intervalMs);
      setProgress(pct);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isAuto, intervalMs, current]);

  // Keyboard navigation (left/right)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setCurrent((i) => (i + 1) % validSlides.length);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrent((i) => (i - 1 + validSlides.length) % validSlides.length);
      }
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [validSlides.length]);

  if (!validSlides.length) return null;

  const slide = validSlides[current];
  const alt = slide.alt || slide.navTitle;
  const heroHeight = "h-64 sm:h-80 md:h-96";

  return (
    <div
      ref={containerRef}
      className={`relative bg-black ${className}`}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Hero"
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      <Link href={slide.link} aria-label={slide.navTitle} prefetch>
        <div className={`w-full ${heroHeight}`}>
          {slide.desktopImg ? (
            <picture>
              <source media="(max-width: 767px)" srcSet={slide.mobileImg} />
              <source media="(min-width: 768px)" srcSet={slide.desktopImg} />
              <img
                src={slide.desktopImg}
                alt={alt}
                className="w-full h-full object-cover"
                loading={current === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </picture>
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" aria-hidden="true" />
          )}
        </div>
      </Link>

      <div className="absolute bottom-0 left-0 right-0 bg-white/90 overflow-hidden">
        <div className="container mx-auto">
          <div
            role="tablist"
            aria-label="Hero navigation"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          >
            {validSlides.map((s, idx) => {
              const selected = idx === current;
              return (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`hero-slide-${s.id}`}
                  onClick={() => setCurrent(idx)}
                  className={`min-w-0 p-3 text-left border-t-4 transition-colors ${
                    selected
                      ? "border-red-600 bg-white text-red-600 shadow-sm"
                      : "border-transparent bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                  >
                    <span className="flex items-center">
                    {s.navIcon ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={s.navIcon}
                        alt=""
                        className={`h-10 w-10 mr-3 ${selected ? "ring-1 ring-red-200 rounded-full" : ""}`}
                        aria-hidden="true"
                      />
                    ) : null}
                    <span>
                      <span className={`block font-bold text-sm truncate ${selected ? "text-red-600" : ""}`}>{s.navTitle}</span>
                      {s.navSubtitle ? (
                        <span className={`block text-xs truncate ${selected ? "text-gray-700" : "text-gray-600"}`}>{s.navSubtitle}</span>
                      ) : null}
                    </span>
                    {/* progress */}
                    <span className="block mt-2 h-1 rounded bg-gray-200" aria-hidden="true">
                      <span
                        className={`block h-full rounded ${selected ? "bg-red-600" : "bg-transparent"}`}
                        style={{ width: selected && isAuto ? `${Math.round(progress * 100)}%` : "0%" }}
                      />
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}
