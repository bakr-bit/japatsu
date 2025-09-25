import CrapsTemplate, { CrapsPageData } from "@/components/templates/CrapsTemplate";

const data: CrapsPageData = {
  title: "クラップス",
  banner: {
    title: "クラップス入門",
    subheading: "Craps Guide",
    description: "クラップスの基本・賭け方・戦略をまとめて解説。",
    menu: [
      { href: "/craps/rules", label: "ルール" },
      { href: "/craps/strategy", label: "戦略" },
      { href: "/craps/variants", label: "バリエーション" },
    ],
  },
  intro:
    "クラップスは二つのダイスの合計に賭ける運要素の強いゲーム。まずはパスライン／カムと、控除率0%のオッズベットを押さえましょう。",
  basics: {
    heading: "覚えるのは3つだけ",
    bullets: ["パスライン", "カム", "オッズ（控除率0%）"],
  },
  cta: { text: "まずはルールから学ぶ", href: "/craps/rules" },
};

export default function Page() {
  return <CrapsTemplate data={data} />;
}
