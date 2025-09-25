import CasinoCard, { CasinoCardData } from "./CasinoCard";

type CasinoGridProps = {
  casinos: CasinoCardData[];
  className?: string;
  gridClassName?: string;
  cardClassName?: string;
};

export default function CasinoGrid({
  casinos,
  className = "",
  gridClassName = "",
  cardClassName = "",
}: CasinoGridProps) {
  return (
    <div className={className}>
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${gridClassName}`}>
        {casinos.map((casino, index) => (
          <CasinoCard key={`${casino.name}-${index}`} casino={casino} className={cardClassName} />
        ))}
      </div>
    </div>
  );
}

