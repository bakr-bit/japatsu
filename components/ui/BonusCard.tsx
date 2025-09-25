import Link from "next/link";

export type Bonus = {
  link: string;
  img: string;
  text: string;
  expiry?: string;
  alt?: string;
};

type BonusCardProps = {
  bonus: Bonus;
  className?: string;
  imageClassName?: string;
};

function IconChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default function BonusCard({ bonus, className = "", imageClassName = "" }: BonusCardProps) {
  const alt = bonus.alt ?? bonus.text?.slice(0, 60) ?? "Bonus";

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 w-80 ${className}`}>
      <Link href={bonus.link} className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {bonus.img ? (
          <img
            src={bonus.img}
            alt={alt}
            className={`w-full h-40 object-cover ${imageClassName}`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className={`w-full h-40 bg-gray-200 ${imageClassName}`} aria-hidden="true" />
        )}
        <div className="p-4">
          <p className="text-sm font-semibold text-gray-800 mb-4 line-clamp-3 min-h-[3.75rem]">{bonus.text}</p>
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span>
              <strong>終了日</strong>
              {bonus.expiry ? <span> | {bonus.expiry}</span> : null}
            </span>
            <IconChevronRight className="text-red-500 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>
    </div>
  );
}
