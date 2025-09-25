import Link from "next/link";

export type Article = {
  href: string;
  img: string;
  title: string;
  date: string;
  category?: string;
  alt?: string;
};

type ArticleCardProps = {
  article: Article;
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

export default function ArticleCard({ article, className = "", imageClassName = "" }: ArticleCardProps) {
  const alt = article.alt ?? article.title ?? "Article";

  return (
    <div className={`bg-white rounded-lg overflow-hidden shadow-sm ${className}`}>
      <Link href={article.href} className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {article.img ? (
          <img
            src={article.img}
            alt={alt}
            className={`w-full h-32 object-cover ${imageClassName}`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className={`w-full h-32 bg-gray-200 ${imageClassName}`} aria-hidden="true" />
        )}
        <div className="p-3">
          <p className="text-sm font-semibold line-clamp-3 min-h-[3.75rem]">{article.title}</p>
          <div className="flex justify-between items-center text-xs text-gray-500 mt-2">
            <span>
              <strong>{article.date}</strong>
              {article.category ? <span> | {article.category}</span> : null}
            </span>
            <IconChevronRight className="text-red-500 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>
    </div>
  );
}
