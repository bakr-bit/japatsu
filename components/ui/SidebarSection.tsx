import Link from "next/link";
import { ReactNode } from "react";

type SidebarSectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
  seeMoreHref?: string;
};

export default function SidebarSection({ title, children, className = "", seeMoreHref }: SidebarSectionProps) {
  return (
    <section className={`bg-white p-4 rounded-lg shadow-sm ${className}`}>
      <h3 className="font-bold text-lg mb-4 text-center">{title}</h3>
      <div className="space-y-3">{children}</div>
      {seeMoreHref ? (
        <div className="mt-4 text-center">
          <Link href={seeMoreHref} className="inline-block text-red-600 hover:text-gray-600 font-semibold">
            もっと見る
          </Link>
        </div>
      ) : null}
    </section>
  );
}

