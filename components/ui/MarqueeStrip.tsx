type MarqueeStripProps = {
  items: string[];
  speedMs?: number; // duration for one loop
  className?: string;
};

export default function MarqueeStrip({ items, speedMs = 16000, className = "" }: MarqueeStripProps) {
  const style = { animationDuration: `${speedMs}ms` } as React.CSSProperties;
  return (
    <div className={`relative overflow-hidden border-y bg-white ${className}`}>
      <div className="whitespace-nowrap flex items-center">
        <div className="marquee inline-flex" style={style}>
          {items.concat(items).map((t, i) => (
            <span key={i} className="px-6 py-2 text-sm font-semibold text-red-600">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
