import Link from "next/link";
import Image from "next/image";
import { getLocalImageUrl } from "@/lib/logos";

export type AuthorSectionProps = {
  name?: string;
  japaneseName?: string;
  title?: string;
  url?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  bio?: string | string[];
  badge?: string;
  accentColor?: "purple" | "rose" | "indigo" | "blue";
  className?: string;
};

const accentClasses = {
  purple: {
    border: "border-purple-100",
    bg: "from-purple-50/80",
    blur1: "bg-purple-100/60",
    blur2: "bg-purple-200/40",
    avatarBorder: "border-purple-200",
    linkColor: "text-purple-600 hover:text-purple-700",
    badgeBg: "from-purple-500 to-purple-400",
  },
  rose: {
    border: "border-rose-100",
    bg: "from-rose-50/80",
    blur1: "bg-rose-100/60",
    blur2: "bg-rose-200/40",
    avatarBorder: "border-rose-200",
    linkColor: "text-rose-600 hover:text-rose-700",
    badgeBg: "from-rose-500 to-rose-400",
  },
  indigo: {
    border: "border-indigo-100",
    bg: "from-indigo-50/80",
    blur1: "bg-indigo-100/60",
    blur2: "bg-indigo-200/40",
    avatarBorder: "border-indigo-200",
    linkColor: "text-indigo-600 hover:text-indigo-700",
    badgeBg: "from-indigo-500 to-indigo-400",
  },
  blue: {
    border: "border-blue-100",
    bg: "from-blue-50/80",
    blur1: "bg-blue-100/60",
    blur2: "bg-blue-200/40",
    avatarBorder: "border-blue-200",
    linkColor: "text-blue-600 hover:text-blue-700",
    badgeBg: "from-blue-500 to-blue-400",
  },
};

/**
 * Author/Expert section for content pages.
 * Displays author info with optional bio and badge.
 */
export default function AuthorSection({
  name = "Rina Okabe",
  title = "カジノ専門家・レビュアー",
  url = "/authors/rina-okabe",
  avatarSrc = "/rina/avatar.png",
  avatarAlt,
  bio = "6年間で80以上のカジノを実際にプレイして検証した経験豊富な専門家",
  badge = "記事監修者",
  accentColor = "purple",
  className = "",
}: AuthorSectionProps) {
  const colors = accentClasses[accentColor];
  const bioText = Array.isArray(bio) ? bio[0] : bio;
  const finalAvatarSrc = getLocalImageUrl(avatarSrc) || avatarSrc;

  return (
    <section className={`mx-auto max-w-6xl ${className}`}>
      <div
        className={`relative overflow-hidden rounded-2xl border ${colors.border} bg-gradient-to-br ${colors.bg} via-white to-white shadow-sm`}
      >
        {/* Decorative blurs */}
        <div
          className={`pointer-events-none absolute -left-12 top-10 h-32 w-32 rounded-full ${colors.blur1} blur-3xl`}
          aria-hidden="true"
        />
        <div
          className={`pointer-events-none absolute -right-10 bottom-0 hidden h-48 w-48 rounded-full ${colors.blur2} blur-3xl md:block`}
          aria-hidden="true"
        />

        <div className="relative p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <Image
                src={finalAvatarSrc}
                alt={avatarAlt || name}
                width={48}
                height={48}
                className={`h-12 w-12 rounded-full border-2 ${colors.avatarBorder} bg-white object-cover shadow-md`}
              />
              <div>
                {url ? (
                  <Link
                    href={url}
                    className={`text-sm font-semibold ${colors.linkColor}`}
                  >
                    {name}
                  </Link>
                ) : (
                  <span className={`text-sm font-semibold ${colors.linkColor.split(" ")[0]}`}>
                    {name}
                  </span>
                )}
                <div className="text-xs text-gray-600 font-medium">{title}</div>
                {bioText && (
                  <div className="text-xs text-gray-500 mt-0.5">{bioText}</div>
                )}
              </div>
            </div>
            {badge && (
              <span
                className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${colors.badgeBg} px-3 py-1 text-xs font-semibold tracking-wide text-white shadow-sm`}
              >
                {badge}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
