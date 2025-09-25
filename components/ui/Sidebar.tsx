import Link from "next/link";

export type SidebarCasinoItem = {
  rank: number;
  logo: string; // image URL
  name: string;
  rating: string; // image URL for stars/badge
  href: string;
};

type SidebarProps = {
  casinos: SidebarCasinoItem[];
  title?: string;
  className?: string;
  seeAllHref?: string;
};

export default function Sidebar({
  casinos,
  title = "人気ランキング",
  className = "",
  seeAllHref,
}: SidebarProps) {
  const titleId = "sidebar-title";

  return (
    <aside className={`lg:col-span-3 space-y-6 ${className}`} aria-labelledby={titleId}>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 id={titleId} className="font-bold text-lg text-center w-full">
            {title}
          </h3>
          {seeAllHref ? (
            <Link
              href={seeAllHref}
              className="hidden sm:inline text-xs text-[#4392f1] hover:text-[#2f80e6] font-semibold whitespace-nowrap"
            >
              すべて見る
            </Link>
          ) : null}
        </div>

        <div className="space-y-2">
          {casinos.map((casino) => (
            <Link
              href={casino.href}
              key={casino.id}
              className="block hover:bg-gray-50 p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4392f1]"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-gray-400 w-8 text-center">
                  {casino.rank}
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {casino.logo ? (
                  <img
                    src={casino.logo}
                    alt={casino.name}
                    className="h-10 w-20 object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="h-10 w-20 bg-gray-200" aria-hidden="true" />
                )}
                <div className="flex-grow">
                  <p className="font-semibold text-sm truncate">{casino.name}</p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {casino.rating ? (
                    <img
                      src={casino.rating}
                      alt="rating"
                      className="h-3 mt-1"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : null}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
