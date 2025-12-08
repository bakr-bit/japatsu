import Link from "next/link";

export type MethodologySectionProps = {
  title?: string;
  description?: string;
  linkText?: string;
  linkHref?: string;
  className?: string;
};

/**
 * Review methodology section.
 * Explains how reviews are conducted with link to full methodology.
 */
export default function MethodologySection({
  title = "私たちのレビュー方法論",
  description = "CasinoTsuでは、厳格で透明性の高い評価基準に基づいてオンラインカジノをレビューしています。セキュリティ、ゲームの多様性、ボーナス条件、サポート品質、決済オプションなど、複数の重要な要素を詳細に検証し、公正で信頼性の高い評価をお届けします。",
  linkText = "詳しいレビュー方法論を見る",
  linkHref = "/methodology",
  className = "",
}: MethodologySectionProps) {
  return (
    <section
      className={`rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-white p-6 shadow-sm ${className}`}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 rounded-full bg-slate-100 p-3">
          <svg
            className="h-6 w-6 text-slate-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
          <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
          <Link
            href={linkHref}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 font-semibold transition-colors group"
          >
            {linkText}
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
