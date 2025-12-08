"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/ui/Header";

type HeaderWithSearchProps = Omit<React.ComponentProps<typeof Header>, "onSearchClick"> & {
  initialQuery?: string;
};

export default function HeaderWithSearch({ initialQuery = "", ...props }: HeaderWithSearchProps) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState(initialQuery);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 0);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [open]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: route to a search page with q as a param
    setOpen(false);
  };

  return (
    <>
      <Header {...props} onSearchClick={() => setOpen(true)} />

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-black/50"
          role="dialog"
          aria-modal="true"
          aria-label="Search"
          onClick={() => setOpen(false)}
        >
          <div
            className="mt-24 w-full max-w-xl mx-4 rounded-lg bg-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={onSubmit} className="p-4 flex items-center gap-2">
              <input
                ref={inputRef}
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="検索..."
                className="flex-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
                aria-label="Search query"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-brand text-white rounded-md hover:bg-brand-hover"
              >
                検索
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
