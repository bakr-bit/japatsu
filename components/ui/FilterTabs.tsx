"use client";

import { useState } from "react";

type FilterTabsProps = {
  tabs: string[];
  defaultIndex?: number;
  onChange?: (index: number) => void;
  className?: string;
};

export default function FilterTabs({ tabs, defaultIndex = 0, onChange, className = "" }: FilterTabsProps) {
  const [active, setActive] = useState(defaultIndex);

  return (
    <div className={`flex flex-wrap gap-2 ${className}`} role="tablist" aria-label="Filters">
      {tabs.map((t, i) => {
        const selected = i === active;
        return (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => {
              setActive(i);
              onChange?.(i);
            }}
            className={`px-3 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
              selected
                ? "bg-red-600 text-white border-red-600"
                : "text-red-600 border-red-200 hover:text-gray-600 hover:border-gray-300"
            }`}
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}

