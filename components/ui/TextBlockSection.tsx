import Link from "next/link";

export type TextBlockCTA = {
  text: string;
  href: string;
};

export type TextBlockSectionProps = {
  title?: string;
  kicker?: string;
  paragraphs?: string[];
  bullets?: string[];
  highlight?: string;
  cta?: TextBlockCTA;
  accent?: string;
};

export default function TextBlockSection({
  title,
  kicker,
  paragraphs = [],
  bullets,
  highlight,
  cta,
  accent = "border-slate-200",
}: TextBlockSectionProps) {
  const hasContent = paragraphs.length > 0 || bullets?.length || highlight;
  if (!hasContent && !title && !kicker && !cta) {
    return null;
  }

  return (
    <div className={`rounded-2xl border ${accent} bg-white p-6 shadow-sm space-y-4`}>
      {title ? <h3 className="text-xl font-bold text-gray-900">{title}</h3> : null}
      {kicker ? <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">{kicker}</p> : null}

      {paragraphs.length ? (
        <div className="space-y-3 text-gray-800 leading-relaxed">
          {paragraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      ) : null}

      {bullets?.length ? (
        <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}

      {highlight ? (
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          {highlight}
        </div>
      ) : null}

      {cta ? (
        <div>
          <Link
            href={cta.href}
            className="inline-flex items-center gap-2 rounded-md bg-rose-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-rose-700"
          >
            {cta.text}
          </Link>
        </div>
      ) : null}
    </div>
  );
}
