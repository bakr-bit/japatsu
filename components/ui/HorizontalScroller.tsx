"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type HorizontalScrollerProps = {
  children: React.ReactNode;
  className?: string;
  itemGapClass?: string; // default gap-4
  snap?: boolean; // default true
};

export default function HorizontalScroller({ children, className = "", itemGapClass = "gap-4", snap = true }: HorizontalScrollerProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = () => {
    const el = ref.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setAtStart(scrollLeft <= 0);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    update();
    const onScroll = () => update();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollBy = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    const delta = Math.round(el.clientWidth * 0.85) * dir;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <div className={`relative ${className}`}>
      <div
        ref={ref}
        className={`flex ${itemGapClass} overflow-x-auto ${snap ? "snap-x" : ""} scrollbar-hide`}
      >
        {children}
      </div>

      {/* Left arrow */}
      <button
        type="button"
        aria-label="previous"
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 m-1 rounded-full bg-[#4392f1] text-white border border-[#4392f1] hover:bg-[#2f80e6] shadow p-2 transition-opacity ${
          atStart ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        onClick={() => scrollBy(-1)}
      >
        <ChevronLeft className="h-5 w-5 text-white" />
      </button>

      {/* Right arrow */}
      <button
        type="button"
        aria-label="next"
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 m-1 rounded-full bg-[#4392f1] text-white border border-[#4392f1] hover:bg-[#2f80e6] shadow p-2 transition-opacity ${
          atEnd ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        onClick={() => scrollBy(1)}
      >
        <ChevronRight className="h-5 w-5 text-white" />
      </button>
    </div>
  );
}
