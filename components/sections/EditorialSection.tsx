import Link from "next/link";
import { ThumbsUp, AlertTriangle, CheckCircle2 } from "lucide-react";
import type { EditorialContent } from "@/lib/types";

export type EditorialSectionProps = {
  editorial: EditorialContent;
  authorName?: string;
  authorRole?: string;
  authorAvatarSrc?: string;
  authorProfileHref?: string;
  authorBio?: string;
  className?: string;
};

/**
 * Editorial section for expert review content.
 * Displays author info and structured review points.
 */
export default function EditorialSection({
  editorial,
  authorName = "Rina Okabe",
  authorRole = "カジノ専門家・レビュアー",
  authorAvatarSrc = "/rina/avatar.png",
  authorProfileHref = "/authors/rina-okabe",
  authorBio = "6年間で80以上のカジノを実際にプレイして検証した経験豊富な専門家",
  className = "",
}: EditorialSectionProps) {
  return (
    <section
      className={`relative overflow-hidden rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-50/80 via-white to-white shadow-sm ${className}`}
    >
      {/* Decorative background elements */}
      <div
        className="pointer-events-none absolute -left-12 top-10 h-32 w-32 rounded-full bg-rose-100/60 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-10 bottom-0 hidden h-48 w-48 rounded-full bg-rose-200/40 blur-3xl md:block"
        aria-hidden="true"
      />

      <div className="relative p-6">
        {/* Header with author info */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={authorAvatarSrc}
              alt={authorName}
              className="h-12 w-12 rounded-full border-2 border-rose-200 bg-white object-cover shadow-md"
            />
            <div>
              <Link
                href={authorProfileHref}
                className="text-sm font-semibold text-rose-600 hover:text-rose-700"
              >
                {authorName}
              </Link>
              <div className="text-xs text-gray-600 font-medium">{authorRole}</div>
              <div className="text-xs text-gray-500 mt-0.5">{authorBio}</div>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-rose-400 px-3 py-1 text-xs font-semibold tracking-wide text-white shadow-sm">
            編集部レビュー
          </span>
        </div>

        {/* Quote section */}
        <div className="mb-6">
          <div className="rounded-xl bg-white/90 p-4 shadow-sm ring-1 ring-rose-100/80">
            <blockquote className="text-base italic leading-relaxed text-gray-800">
              &ldquo;{editorial.hook}&rdquo;
            </blockquote>
          </div>
        </div>

        {/* Three-column grid */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* Card 1 - Good stuff */}
          <div className="rounded-xl bg-white/80 p-4 shadow-sm ring-1 ring-rose-100/60">
            <div className="flex items-center gap-2 text-rose-500 mb-2">
              <ThumbsUp className="h-5 w-5" />
              <h4 className="text-sm font-bold tracking-wide">注目ポイント</h4>
            </div>
            <p className="text-sm leading-relaxed text-gray-700">
              {editorial.theGoodStuff}
            </p>
          </div>

          {/* Card 2 - Heads up */}
          <div className="rounded-xl bg-white/80 p-4 shadow-sm ring-1 ring-amber-100/60">
            <div className="flex items-center gap-2 text-amber-600 mb-2">
              <AlertTriangle className="h-5 w-5" />
              <h4 className="text-sm font-bold tracking-wide">注意したい点</h4>
            </div>
            <p className="text-sm leading-relaxed text-gray-700">
              {editorial.theHeadsUp}
            </p>
          </div>

          {/* Card 3 - Final thought */}
          <div className="rounded-xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-100/60">
            <div className="flex items-center gap-2 text-slate-600 mb-2">
              <CheckCircle2 className="h-5 w-5" />
              <h4 className="text-sm font-bold tracking-wide">編集部の総評</h4>
            </div>
            <p className="text-sm leading-relaxed text-gray-700">
              {editorial.finalThought}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
