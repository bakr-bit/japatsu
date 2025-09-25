import Link from "next/link";

type FeaturedOffer = {
  href: string;
  logo?: string;
  text: string;
};

type FeaturedOfferStripProps = {
  items: FeaturedOffer[];
  className?: string;
};

export default function FeaturedOfferStrip({ items, className = "" }: FeaturedOfferStripProps) {
  return (
    <div className={`bg-white/90 border-t border-b ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex gap-4 overflow-x-auto py-3">
          {items.map((it, idx) => (
            <Link
              key={idx}
              href={it.href}
              className="flex items-center gap-3 whitespace-nowrap hover:bg-gray-50 px-3 py-2 rounded-md"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {it.logo ? (
                <img src={it.logo} alt="" className="h-6 w-6 rounded object-contain" aria-hidden="true" />
              ) : (
                <span className="h-6 w-6 rounded bg-gray-200" aria-hidden="true" />
              )}
              <span className="text-sm font-semibold text-red-600 hover:text-gray-600 transition-colors">
                {it.text}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

