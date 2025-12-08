import type { ReactNode } from "react";

export default function CardHeader({
  title,
  badge,
  accent = "bg-slate-100 text-slate-900",
  trailing,
  headingLevel = "h2",
}: {
  title: string;
  badge?: ReactNode;
  accent?: string;
  trailing?: ReactNode;
  headingLevel?: "h2" | "h3" | "h4";
}) {
  const HeadingTag = headingLevel;

  return (
    <div
      className={`flex items-center justify-between rounded-xl ${accent} px-4 py-3 text-sm font-semibold`}
    >
      <HeadingTag className="text-lg font-bold">{title}</HeadingTag>
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
        {badge ? <span className="rounded-full bg-white/70 px-3 py-0.5 text-xs font-semibold text-slate-600 shadow-sm">{badge}</span> : null}
        {trailing}
      </div>
    </div>
  );
}
