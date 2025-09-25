type MediaItem = { href: string; img: string; alt?: string };

export default function SidebarMediaGrid({ items = [] as MediaItem[] }: { items?: MediaItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-3">
      {items.slice(0, 3).map((it, idx) => (
        <a key={idx} href={it.href} className="block group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {it.img ? (
            <img src={it.img} alt={it.alt ?? "Offer"} className="w-full h-24 object-cover rounded-md group-hover:opacity-95 transition" />
          ) : (
            <div className="w-full h-24 bg-gray-200 rounded-md" aria-hidden="true" />)
          }
        </a>
      ))}
    </div>
  );
}

