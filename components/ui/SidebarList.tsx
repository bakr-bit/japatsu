type ListItem = { href: string; img?: string; name: string };

export default function SidebarList({ items = [] as ListItem[], limit = 5 }: { items?: ListItem[]; limit?: number }) {
  return (
    <ul className="space-y-2">
      {items.slice(0, limit).map((it, idx) => (
        <li key={idx}>
          <a href={it.href} className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {it.img ? (
              <img src={it.img} alt={it.name} className="h-6 w-6 rounded object-contain" />
            ) : (
              <div className="h-6 w-6 rounded bg-gray-200" aria-hidden="true" />
            )}
            <span className="text-sm font-semibold text-gray-800">{it.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
