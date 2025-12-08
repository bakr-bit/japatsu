import Link from "next/link";

export type Promo = {
  href: string;
  title: string;
  expiry: string;
  img?: string;
};

type PromoBlockWithExpiryProps = {
  promos: Promo[];
  title?: string;
  className?: string;
};

export default function PromoBlockWithExpiry({ promos, title = "⏰ 期間限定プロモーション", className = "" }: PromoBlockWithExpiryProps) {
  return (
    <section className={className}>
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {promos.map((p, idx) => (
          <Link key={idx} href={p.href} className="group block bg-white rounded-lg shadow-sm overflow-hidden border-gray-200 border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {p.img ? (
              <img src={p.img} alt={p.title} className="w-full h-40 object-cover group-hover:opacity-95 transition" />
            ) : (
              <div className="w-full h-40 bg-gray-200" aria-hidden="true" />
            )}
            <div className="p-4 flex items-center justify-between">
              <div>
                <div className="font-bold text-gray-900 line-clamp-2">{p.title}</div>
                <div className="text-xs text-gray-600 mt-1">終了日: <span className="font-semibold text-red-600">{p.expiry}</span></div>
              </div>
              <span className="text-red-600 font-semibold group-hover:text-gray-600 transition-colors">詳細 →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
