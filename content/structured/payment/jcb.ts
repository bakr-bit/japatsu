import { PaymentPageData } from "@/components/templates/PaymentTemplate";

const data: PaymentPageData = {
  title: "JCBカードでオンラインカジノ入金【ガイド】",
  banner: {
    title: "JCB入金ガイド",
    subheading: "対応状況・使い方・注意点",
    description: "日本発ブランドJCBの対応状況や手順、注意点を解説。",
    menu: [
      { href: "#howto", label: "使い方", icon: "🧭" },
      { href: "#fees", label: "手数料", icon: "💸" },
      { href: "#proscons", label: "メリデメ", icon: "⚖️" },
      { href: "#safety", label: "注意点", icon: "🛡️" },
      { href: "#comparison", label: "比較", icon: "📊" },
    ],
  },
  intro:
    "JCBは日本で馴染みのある国際ブランド。オンラインカジノでの対応は増加中だが、VISA/MCよりは少ない傾向です。",
  howto: [
    "カジノの入金で『JCB』を選択",
    "カード番号・有効期限・名義・CVVを入力し金額確定",
    "3Dセキュアが表示されたら手順に沿って認証",
    "残高反映を確認（通常は即時）",
  ],
  feeTable: {
    title: "手数料・下限例（サイト差あり）",
    columns: ["項目", "目安"],
    rows: [
      ["カジノ側入金手数料", "無料が多い"],
      ["最低入金額", "500円〜3,000円相当"],
    ],
  },
  prosCons: {
    pros: ["国内で馴染み深く入力に抵抗が少ない", "即時反映で手軽"],
    cons: ["対応カジノがVISA/MCより少ない", "出金は不可が一般的"],
  },
  safetyTips: [
    "3Dセキュアを必ず有効化",
    "連続リトライは避け、別手段（Payz等）併用も検討",
  ],
  comparison: {
    items: [
      { title: "JCB", description: "国内で馴染み深いが対応は限定的。", meta: [ { label: "入金", value: "△" }, { label: "出金", value: "×" }, { label: "普及率", value: "△" } ] },
      { title: "VISA", description: "対応多数。入金は◎、出金は×。", meta: [ { label: "入金", value: "◎" }, { label: "出金", value: "×" }, { label: "普及率", value: "◎" } ] },
      { title: "Mastercard", description: "VISAに次ぐ対応。", meta: [ { label: "入金", value: "◎" }, { label: "出金", value: "×" }, { label: "普及率", value: "◎" } ] },
    ],
  },
  summary:
    "JCBは対応サイトを選べば手軽に入金できる手段。3Dセキュア設定と代替手段の用意で安定運用。",
  faq: [],
  cta: { text: "他の入出金ガイドもチェックする", href: "/payment" },
};

export default data;

