type AuthorBadgeProps = {
  name: string;
  role?: string;
  avatarSrc?: string;
  className?: string;
};

export default function AuthorBadge({ name, role, avatarSrc, className = "" }: AuthorBadgeProps) {
  const initials = name
    .replace(/（.*?）/g, "")
    .split(/\s+/)
    .map((s) => s[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {avatarSrc ? (
        <img src={avatarSrc} alt={name} className="h-8 w-8 rounded-full object-cover" />
      ) : (
        <div className="h-8 w-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-xs font-bold">
          {initials}
        </div>
      )}
      <div className="leading-tight">
        <div className="text-sm font-semibold text-gray-900">{name}</div>
        {role ? <div className="text-[11px] text-gray-500">{role}</div> : null}
      </div>
    </div>
  );
}

