import { PaymentPageData } from "@/components/templates/PaymentTemplate";

const data: PaymentPageData = {
  title: "SunoPay（スモウペイ）でオンラインカジノ入出金【ガイド】",
  banner: {
    title: "SunoPay入出金ガイド",
    subheading: "使い方・手数料・注意点",
    description: "国内利用を想定した送金/決済サービスの基本手順や費用の目安を解説。",
    menu: [
      { href: "#howto", label: "使い方", icon: "🧭" },
      { href: "#fees", label: "手数料", icon: "💸" },
      { href: "#proscons", label: "メリデメ", icon: "⚖️" },
      { href: "#safety", label: "注意点", icon: "🛡️" },
    ],
  },
  intro:
    "SunoPayは日本向けに使いやすさが意識された決済/送金サービス。対応カジノで入出金に利用できます。",
  howto: [
    "対応カジノの入金で『SunoPay/スモウペイ』を選択",
    "金額入力→アカウントで認証→即時反映",
    "出金はカジノ→SunoPay経由で指定先へ受取",
  ],
  feeTable: { columns: ["項目", "目安"], rows: [["カジノ側手数料", "無料が多い"], ["入出金手数料", "方法により変動"]] },
  prosCons: { pros: ["即時性", "国内利用のしやすさ"], cons: ["対応サイトが限定的"] },
  safetyTips: ["対応状況と出金要件を事前に確認"],
  summary: "対応カジノを選べば手軽に使える。費用条件と出金条件を把握して活用を。",
  cta: { text: "他の入出金ガイドもチェックする", href: "/payment" },
};

export default data;

