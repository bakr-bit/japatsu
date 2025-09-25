import GamesTemplate, { GamesPageData } from "@/components/templates/GamesTemplate";

const data: GamesPageData = {
  title: "ゲーム総合",
  banner: {
    title: "ゲームハブ",
    subheading: "Game Hub",
    description: "スロット・テーブル・ライブ・クラッシュなど主要カテゴリを案内。",
  },
  hubs: [
    { title: "テーブル・ライブ", links: [
      { href: "/blackjack", label: "ブラックジャック" },
      { href: "/roulette", label: "ルーレット" },
      { href: "/baccarat", label: "バカラ" },
      { href: "/game-shows", label: "ゲームショー" },
    ]},
    { title: "スロット・その他", links: [
      { href: "/slots", label: "スロット" },
      { href: "/crash-games", label: "クラッシュ" },
      { href: "/dice", label: "ダイス" },
    ]},
  ],
};

export default function Page() {
  return <GamesTemplate data={data} />;
}
