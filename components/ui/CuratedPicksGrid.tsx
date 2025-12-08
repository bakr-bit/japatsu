import SectionTitle from "./SectionTitle";
import CasinoGrid from "./CasinoGrid";
import { CasinoCardData } from "./CasinoCard";

type CuratedPicksGridProps = {
  items: CasinoCardData[];
  className?: string;
};

export default function CuratedPicksGrid({ items, className = "" }: CuratedPicksGridProps) {
  return (
    <section className={className}>
      <SectionTitle subtitle="Rina のおすすめ 🎯" title="Editor's Picks ✍️" align="start" />
      <CasinoGrid casinos={items} />
    </section>
  );
}
