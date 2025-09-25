import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewShuffle: ReviewPageContent = {
  hero: {
    title: "Shuffle（シャッフルカジノ）レビュー",
    subheading:
      "SHFLトークンで資産運用もできる仮想通貨特化カジノ — スポーツも遊べるハイブリッド型",
    description:
      "CasinoTsu が2023年ローンチの仮想通貨特化カジノ「Shuffle（シャッフル）」を徹底検証。独自トークンSHFL、最大$2,020（案内）のウェルカム、5,000種超のゲーム、スポーツベット対応などクリプトプレイヤーに魅力的な要素をまとめています。",
    score: 4,
    scoreMax: 5,
    scoreBreakdown: [],
    highlights: [
      "独自トークンSHFLの導入とバイバック＆バーンによるトークン設計",
      "スポーツベット＋カジノのハイブリッド提供（幅広いマーケット）",
      "5,000種類以上のゲームラインナップとオリジナルゲーム群",
      "仮想通貨17種対応で匿名性の高い入出金が可能",
      "Telegram連携や24時間ライブチャットサポートを用意",
    ],
    watchouts: [
      "出金は仮想通貨のみ（フィアット出金不可）",
      "ボーナスの賭け条件は高め（案内例：40x）で消化が大変な場合あり",
      "Trustpilot等で評価が分かれておりユーザーレビューは慎重に参照が必要",
      "自動翻訳サポートや英語対応になる場面がある",
    ],
  },
  payments: {
    featured: [
      {
        name: "仮想通貨（多数）",
        icon: "",
        href: "",
        badge: "即時〜",
        note: "BTC/ETH/USDT等17種以上に対応。入金は即時〜数分、出金はネットワーク状況で変動します。",
      },
      {
        name: "カード→仮想通貨購入（MoonPay等）",
        icon: "",
        href: "",
        badge: "",
        note: "クレジットカードで仮想通貨を購入して入金可能（オンランプサービス利用）。",
      },
      {
        name: "銀行送金（法定→仮想通貨購入）",
        icon: "",
        href: "",
        badge: "",
        note: "銀行振込で法定→仮想購入のルートを提供する場合あり。反映・手数料は提供元に依存。",
      },
    ],
    deposits: [
      {
        name: "Bitcoin (BTC)",
        icon: "",
        href: "",
      },
      {
        name: "Ethereum (ETH)",
        icon: "",
        href: "",
      },
      {
        name: "Tether (USDT)",
        icon: "",
        href: "",
      },
      {
        name: "USDC, BNB, TRX, LTC, DOGE 等",
        icon: "",
        href: "",
      },
      {
        name: "クレジットカード（オンランプ）",
        icon: "",
        href: "",
      },
      {
        name: "銀行振込（オンランプ）",
        icon: "",
        href: "",
      },
    ],
    withdrawals: [
      {
        name: "仮想通貨（BTC/ETH/USDT等）",
        icon: "",
        href: "",
      },
    ],
    notes: [
      "出金は仮想通貨のみ。ウォレット準備が必須です。",
      "プラットフォーム手数料は案内なしだが、ブロックチェーンのネットワーク手数料は利用者負担となる点に注意。",
      "入金手段によっては出金先が入金方法に限定される場合がある（オンランプ経由など）。",
      "高額出金やKYC未完了時は追加確認で処理が遅れる可能性あり。",
    ],
  },
  bonuses: {
    overview:
      "Shuffle は登録／初回向けの大型ウェルカム（CasinoTsu限定で最大$2,020案内）や初回フリースピン、週次プロモ、SHFL保有者向けの独占オファー等を用意しています。ボーナスは賭け条件や最大出金制限があるため、受取前に各規約の確認が必要です。",
    noDeposit:
      "過去にCasinoTsu限定の入金不要ボーナス（$20相当）を案内していましたが、提供状況は変動するため公式告知を確認してください。",
    extraSpins: {
      summary:
        "初回フリースピン50回などの導入オファーがあり、週次でスピン配布キャンペーンを実施することがある。",
      schedule: [
        "初回入金で50FS（対象スロット）",
        "毎週水曜：入金額に応じたスピン配布（最大150FS）",
      ],
      warning:
        "フリースピンやボーナスの賭け条件（例：40x）や有効期限が短いケースがあるため注意が必要",
    },
    welcomeRows: [
      {
        depositNumber: "初回入金",
        percent: "200%",
        cap: "$2,020",
        code: "",
      },
    ],
    conditions: [
      "ウェルカムボーナスの案内例：賭け条件35x〜40x（ボーナス種類により異なる）",
      "ボーナス利用時の最大ベット額（例：$5等）が設定される場合あり",
      "ボーナスはリアルマネー消費優先で消化されるルールが適用されることがある",
      "SHFLトークン保有者向けの優遇や限定オファーは別規約が適用される",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "CasinoTsu限定 初回200%（最大$2,020）",
      description:
        "CasinoTsu経由での新規登録者向けに案内される大型ウェルカム。ボーナスは賭け条件35x〜40x等の条件があるため注意。",
      highlight: "最大$2,020のクリプトウェルカム（条件あり）",
    },
    {
      title: "初回フリースピン50回＋$5スポーツベット",
      description:
        "初回入金で対象スロット向け50フリースピンと$5相当のスポーツフリーベットを付与する導入オファー。",
      highlight: "スロットとスポーツを同時に体験可能",
    },
    {
      title: "SHFLホルダー限定オファー／ロッテリー",
      description:
        "SHFL保有者向けのロッテリーや独占報酬、SHFLを用いた報酬ブーストを実施。",
      highlight: "トークン保有で受けられる独自優遇",
    },
  ],
  facts: [
    {
      label: "ローンチ",
      value: "2023年",
    },
    {
      label: "評価点",
      value: "4.0 / 5",
    },
    {
      label: "ウェルカムボーナス",
      value: "CasinoTsu案内：初回200% 最大$2,020（賭け条件35x〜40x）",
    },
    {
      label: "フリースピン",
      value: "初回50回（案内）、週次配布キャンペーンあり",
    },
    {
      label: "SHFLトークン",
      value: "独自トークン（バイバック＆バーン、特典付与）",
    },
    {
      label: "仮想通貨対応数",
      value:
        "17種類以上（BTC, ETH, USDT, USDC, TRX, BNB, LTC, DOGE, ADA, SOL等）",
    },
    {
      label: "ゲーム数",
      value: "5,000種類以上（スロット・ライブ・クラッシュ等の総数案内）",
    },
    {
      label: "スポーツベット",
      value:
        "39市場以上のスポーツをカバー・ライブストリーミングとキャッシュアウト対応",
    },
    {
      label: "サポート",
      value:
        "ライブチャット24時間・メール help@megadice.com（応答4–12時間目安）",
    },
    {
      label: "ライセンス",
      value: "Gaming Curacao / Anjouan Gaming Board（表記）",
    },
  ],
  intro: {
    paragraphs: [
      "CasinoTsu は、仮想通貨特化カジノ Shuffle（シャッフル）を正確さ第一でレビューします。SHFLトークン、スポーツベット、5,000種超のゲームを備えたハイブリッド型の設計が特徴です。",
      "本ページではライセンス・セキュリティ・ボーナス・入出金・ゲーム・サポート・注意点を網羅的に解説します。規約は随時更新されるため、利用前に必ず公式情報を確認してください。",
    ],
    ctas: [
      {
        text: "今すぐPlay（CasinoTsu経由）",
        href: "https://go.casino.su/megadice:megadice?referrer_path=%2Freviews%2Fmegadice",
      },
      {
        text: "SHFLトークン情報を確認",
        href: "",
      },
    ],
  },
  games: [
    "スロット（メガウェイズ、ボーナス購入、ジャックポット等）",
    "ライブカジノ（Evolution 等の主要プロバイダーを含む）",
    "クラッシュ（Aviator等）、ダイス、マインズ、Plinko 等のオリジナル/特殊ゲーム",
    "スポーツベット（サッカー・テニス・バスケ・eスポーツ等39市場）",
    "ゲームショー・トーナメント・ロッテリー（SHFL保有者向け）」],",
    "features:[",
    "仮想通貨17種以上対応",
    "独自トークンSHFLによる優遇とトークンユーティリティ",
    "Telegram連携でプレイや通知が可能",
    "VIPプログラムと高還元リベート設計",
    "モバイル・ブラウザ最適化で即時プレイ対応",
  ],
  features: [
    "仮想通貨17種以上対応",
    "独自トークンSHFLによる優遇とトークンユーティリティ",
    "Telegram連携でプレイや通知が可能",
    "VIPプログラムと高還元リベート設計",
    "モバイル・ブラウザ最適化で即時プレイ対応",
  ],
  security: [
    "ライセンス（案内）：Gaming Curacao / Anjouan Gaming Board",
    "運営体制（案内）：Natural Nine B.V.",
    "通信保護：SSL 暗号化採用",
    "公平性：Provably Fair（SHA‑256ハッシュ）とRNG採用のゲーム提供",
    "認証：2FA推奨、KYCは出金や高額トランザクション時に要求される可能性あり",
  ],
  responsiblePlay: [
    "自己排除（Self‑Exclusion）",
    "入金制限・損失制限・セッション制限の設定が可能",
    "CasinoTsu は責任あるプレイの利用を推奨",
  ],
  complaintStats: [
    "Trustpilot等で評価が割れる傾向（レビューは慎重に参照が必要）",
    "一部ユーザーから出金遅延やKYCに関する不満の報告あり",
  ],
  awards: [],
  restrictedCountries: [
    "オーストラリア",
    "イギリス",
    "アメリカ合衆国",
    "オランダ",
    "その他規制国多数（公式で要確認）",
  ],
  userConcerns: [
    "出金は仮想通貨限定でフィアット出金不可",
    "SHFLトークンの価値変動リスク",
    "ボーナス賭け条件が高めで消化が難しい可能性",
    "サポートが自動翻訳で英語対応となる場合がある",
  ],
  summary: [
    "Shuffle（シャッフル）はSHFLトークンやTelegram連携を特色とする仮想通貨特化カジノで、スポーツベットとカジノを融合したハイブリッド体験を提供します。最大$2,020のCasinoTsu案内ウェルカムや豊富なゲーム数は魅力的です。",
    "一方、出金が仮想通貨限定である点、ボーナス賭け条件の高さ、ユーザーレビューのばらつきなど注意点もあります。初めて利用する際は少額で試し、KYCやウォレット準備、プロモ規約を確認したうえで利用することを推奨します。",
  ],
  extraLinks: [
    {
      text: "Shuffle 公式（CasinoTsu経由）",
      href: "https://go.casino.su/megadice:megadice?referrer_path=%2Freviews%2Fmegadice",
    },
    {
      text: "仮想通貨カジノ ガイド",
      href: "https://www.casino.su/crypto",
    },
    {
      text: "Cookies Policy",
      href: "https://www.casino.su/about/cookie-policy",
    },
  ],
  faq: [
    {
      question: "Shuffle で法定通貨は出金できますか？",
      answer:
        "いいえ。Shuffle の出金は仮想通貨のみです。カードや銀行で入金しても、出金はウォレットへ行う必要があります。",
    },
    {
      question: "SHFLトークンは何に使えますか？",
      answer:
        "SHFLは独自トークンで、特典・ロッテリー・ボーナス優遇・資産運用（バイバック＆バーン）などに利用できる設計です。ただし価格変動リスクがあります。",
    },
    {
      question: "KYCは必要ですか？",
      answer:
        "原則KYC不要でプレイできますが、出金や高額トランザクション時にはKYCが求められる場合があります。事前に書類を準備しておくことを推奨します。",
    },
    {
      question: "Telegramでのプレイは安全ですか？",
      answer:
        "Telegram連携は利便性がありますが、操作やボット利用時は公式案内を確認のうえ自己責任で利用してください。",
    },
  ],
  cta: {
    text: "Shuffle を試す（公式）",
    href: "https://go.casino.su/megadice:megadice?referrer_path=%2Freviews%2Fmegadice",
  },
  textBlocks: [],
};
