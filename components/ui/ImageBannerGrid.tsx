import Link from "next/link";

type BannerItem = {
  href: string;
  img?: string;
  alt?: string;
  label?: string;
};

type ImageBannerGridProps = {
  items: BannerItem[];
  cols?: 2 | 3 | 4;
  className?: string;
};

export default function ImageBannerGrid({ items, cols = 3, className = "" }: ImageBannerGridProps) {
  const colClass = cols === 4 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : cols === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid ${colClass} gap-4 ${className}`}>
      {items.map((it, idx) => (
        <Link key={idx} href={it.href} className="group block rounded-lg overflow-hidden border-gray-200 border bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {it.img ? (
            <img src={it.img} alt={it.alt ?? it.label ?? "banner"} className="w-full h-28 sm:h-36 object-cover group-hover:opacity-95 transition" />
          ) : (
            <div className="w-full h-28 sm:h-36 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-sm font-semibold">Banner {idx + 1}</span>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

