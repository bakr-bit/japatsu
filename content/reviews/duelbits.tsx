import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewDuelbits: ReviewPageContent = {
  hero: {
    title: "デュエルビッツ（Duelbits）の評判・ボーナス・入出金【徹底解説】",
    subheading: "CasinoTsu推薦：500フリースピン＆最大48.5%レーキバックの仮想通貨特化カジノ",
    description:
      "2020年登場のDuelbitsは、FS勝利金W/Rなし、スポーツ100%初回最大$100（5x）、VIPビッツで最大48.5%のレーキバックが魅力。約3,800+スロットとオリジナルゲーム、スポーツベットにも対応。",
    score: 4.2,
    scoreMax: 5,
    scoreBreakdown: [
      { label: "人気指数", percent: 86, note: "スポーツ系公式パートナー実績で知名度上昇中。" },
      { label: "規約", percent: 82, note: "FS勝利金0x／スポーツ初回5xと良心的（内容は変動あり）。" },
      { label: "操作性", percent: 81, note: "軽快UI。ゲーム検索◎。決済は好みが分かれる。" },
      { label: "サポート", percent: 84, note: "24hチャット（日本語は時間帯/機械翻訳）。応対品質はばらつきも。" },
    ],
    highlights: [
      "入金フリースピン合計500回（勝利金W/R 0x）",
      "スポーツ100%初回最大$100（賭け条件5x）",
      "VIP“ビッツ”合算で最大48.5%レーキバック",
      "約3,800+スロット＆オリジナルゲーム／eスポーツ対応",
    ],
    watchouts: [
      "決済の中心が仮想通貨（一部フィアット入金は地域/手段限定）",
      "KYCや高額出金時の審査で時間を要するケースあり",
      "ライブは主にEvolution/Pragmatic中心でやや限定的",
    ],
    avatarSrc: "/assets/casino/duelbits.png",
    avatarAlt: "Duelbitsのロゴ",
  },

  payments: {
    featured: [
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://www.casinotsu.com/payment/bitcoin", badge: "最速", note: "入出金とも即時〜数分。" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://www.casinotsu.com/payment/ethereum", badge: "人気", note: "安定運用の主力チェーン。" },
      { name: "USDT (複数ネット)", icon: "/assets/payments/tether.svg", href: "https://www.casinotsu.com/payment/usdt", badge: "安定通貨", note: "ネットワーク選択で手数料最適化。" },
      { name: "VISA/Mastercard/JCB", icon: "/assets/payments/visa.svg", href: "https://www.casinotsu.com/payment/visa", badge: "フィアット入金", note: "地域によりSkrill/PayPal等も対応。" },
    ],
    deposits: [
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg" },
      { name: "Litecoin", icon: "/assets/payments/litecoin.svg" },
      { name: "USDT", icon: "/assets/payments/tether.svg" },
      { name: "BNB" }, { name: "TRX" }, { name: "DOGE" }, { name: "SHIB" }, { name: "XRP" }, { name: "SOL" }, { name: "DAI" }, { name: "USDC" }, { name: "APE" }, { name: "TRUMP" },
      { name: "VISA", icon: "/assets/payments/visa.svg" },
      { name: "Mastercard", icon: "/assets/payments/mastercard.svg" },
      { name: "JCB", icon: "/assets/payments/jcb.svg" },
      { name: "Skrill" }, { name: "PayPal" }, { name: "Paysafecard" }, { name: "Interac" }, { name: "Online Banking" }, { name: "WebMoney" }, { name: "PIX" }, { name: "PayDo" }, { name: "Revolut" }, { name: "Gift Cards" }, { name: "Interac e-Transfer" },
    ],
    withdrawals: [
      { name: "Crypto（各通貨）", icon: "/assets/payments/bitcoin.svg" },
      { name: "VISA/Skrill 等（地域制限）" },
    ],
    notes: [
      "平均着金：仮想通貨 入金〜約5分／出金は即時〜。混雑・審査で前後。",
      "手数料：カジノ側の出金手数料は原則なし（チェーン手数料は別）。",
      "フィアットは地域により提供。Visa/Skrill等は週$5,000・月$15,000上限の一例あり。",
      "最低出金：50 Bits（約$0.5）相当（通貨/時期で変更の可能性）。",
    ],
  },

  bonuses: {
    overview:
      "ジャパカジ経由のFS合計500回（勝利金0x）、スポーツ初回100%$100（5x）、高還元VIP“ビッツ”で最大48.5%レーキバックなど、仮想通貨カジノ屈指のオファー群。",
    extraSpins: {
      summary: "20ドル以上入金＆対象スロットの指定額ベットで段階的に合計500FS。",
      schedule: ["FS付与から48時間有効", "スピン価値$0.2", "各ステップ達成は7日以内"],
      warning: "内容は時期で変動。最新はプロモ/マイリワードを確認。",
    },
    welcomeRows: [
      { depositNumber: "スポーツ初回", percent: "100%", cap: "$100", code: "" },
    ],
    conditions: [
      "スポーツ初回：賭け条件5x（時期で変動）",
      "FS勝利金：賭け条件0x（対象機種・有効期限あり）",
    ],
    prohibitedGames: ["各種トーナメント・オファーの対象/除外は都度ページで要確認"],
  },

  offers: [
    { title: "入金フリースピン合計500回（勝利金0x）", description: "段階チャレンジ型：$50/$500/$1,000相当の指定ベットで50/150/300FS。" },
    { title: "スポーツ 100% 初回最大$100（5x）", description: "参加時期で内容変動。プロモ/マイリワードで要確認。" },
    { title: "VIP“ビッツ”で最大48.5%レーキバック", description: "インスタント/デイリー/ウィークリー/マンスリー/レベルアップ等を合算。" },
    { title: "テレグラム限定ボーナス", description: "入金履歴ありの全プレイヤー対象。ユーザーID送信で進呈（内容変動）。" },
  ],

  facts: [
    { label: "名称", value: "Duelbits" },
    { label: "ローンチ", value: "2020" },
    { label: "ライセンス", value: "Gaming Curaçao（例：OGL/2024/1507/0838）" },
    { label: "運営会社", value: "Liquid Entertainment N.V." },
    { label: "VIPプログラム", value: "✅（“ビッツ”キャッシュバック/レベル報酬）" },
    { label: "ゲームタイプ", value: "Slots, Live, Table, Originals, Game Shows, Sports, eSports" },
    { label: "プロバイダー例", value: "BGaming, BTG, Blueprint, Elk, Fantasma, Hacksaw, Microgaming, NetEnt, Nolimit, PG SOFT, Playson, Play’n GO, Pragmatic, Print Studios, Quickspin, Red Tiger, Relax, Spinomenal ほか" },
    { label: "スポーツベット", value: "✅（eスポ含む。一部配信あり）" },
    { label: "サポート", value: "24hライブチャット／メール support@duelbits.com" },
  ],

  longform: {
    kicker: "Crypto×高還元で伸びる新定番",
    title: "FS勝利金0xと最大48.5%レーキバック。“稼働しやすい”条件が魅力",
    paragraphs: [
      "仮想通貨中心の入出金と軽快UI、FS勝利金0xやスポーツ初回5xなど現実的な条件設計が強み。VIP“ビッツ”は即時/日次/週次/月次/レベル報酬を積み上げられ、高回転のプレイヤーほど還元が厚くなります。",
      "ゲームは約3,800+スロットとオリジナル10種前後、ライブはEvolution/Pragmaticが軸。スポーツは主要種目からeスポまで幅広く、配信連動の没入感も◎。",
      "一方で、KYC審査や高額出金時の追加検証、サポート品質のばらつきなど、ユーザー体験に個人差が出る場面も。地域によりフィアット手段の可用性・上限が異なる点にも注意。",
    ],
  },

  responsiblePlay: [
    "自己排除（一定期間〜永久）をサポート窓口に依頼可能",
    "入金/ベット上限などはサポート経由での設定（セルフ操作は限定的）",
    "外部支援機関の活用やプレイ時間/予算管理を推奨",
  ],

  userConcerns: [
    "KYCの厳格化や高額時の手動審査で遅延するケース",
    "応対品質のばらつき報告（迅速/不親切双方の声）",
    "一部レビューサイトで低評価・苦情事例（出金/制限関連）",
    "地域によりフィアット入金の提供可否・上限が異なる",
  ],

  summary: [
    "FS 500回（勝利金0x）やスポーツ初回5x、VIP“ビッツ”で高還元と回しやすさを両立。",
    "仮想通貨を主軸に、地域次第でクレカ/各種決済のフィアット入金にも対応。",
    "審査・サポートの個体差には注意しつつ、“高回転×還元重視”派に好相性。",
  ],

  faq: [
    {
      question: "500フリースピンの条件は？",
      answer:
        "20ドル以上入金後、対象スロットで指定額を段階ベット（$50/$500/$1,000）すると50/150/300FS。FSは$0.2/回、付与から48時間、勝利金はW/Rなし。",
    },
    {
      question: "スポーツの初回入金ボーナスは？",
      answer:
        "100%最大$100で賭け条件5x（時期により変更あり）。参加前にプロモ/マイリワードで要確認。",
    },
    {
      question: "出金は速い？手数料は？",
      answer:
        "仮想通貨は即時〜数分が目安。カジノ側の出金手数料は基本なし（ネットワーク手数料は別途）。審査状況により時間が延びる場合あり。",
    },
    {
      question: "仮想通貨以外も使える？",
      answer:
        "地域によりVISA/Mastercard/JCBやSkrill、PayPal、Interac、Paysafecard、Online Banking等で入金可。上限や提供可否は手段/地域で異なります。",
    },
    {
      question: "ライブカジノやeスポは？",
      answer:
        "ライブはEvolution/Pragmatic中心。スポーツは主要競技〜eスポまで幅広く、一部はライブ配信連動で観戦しながらベット可能。",
    },
    {
      question: "KYCは必要？",
      answer:
        "規約順守のためKYCが求められます。高額出金時や不正検知時に追加書類や審査で時間を要する場合があります。",
    },
  ],
};