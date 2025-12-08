import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewYousCasino: ReviewPageContent = {
  hero: {
    title: "ユースカジノ（YOUS CASINO）の評判・入出金・ボーナス徹底解説【最新版】",
    subheading: "リベート1倍＆爆速出金で“スロットNo.1”と評判（※2024年12月に日本撤退）",
    description:
      "ユースカジノは2020年ローンチのスロット特化型ブランド。賭け条件1倍の入金不要や毎日リベート、平均5分の高速出金で人気を博しました。※2024年12月に日本市場撤退につき、新規登録・限定特典は終了済み。",
    score: 4.4,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 88,
        note: "スロット特化・爆速出金で日本ユーザーから高評価（撤退前実績）。",
      },
      {
        label: "規約",
        percent: 84,
        note: "入金不要$20がW/R1x、初回100%最大$500は一体型W/R20xと好条件。",
      },
      {
        label: "操作性",
        percent: 85,
        note: "PC/モバイル最適化。カテゴリ整理や導線はわかりやすい設計。",
      },
      {
        label: "サポート",
        percent: 90,
        note: "24時間ライブチャットとメールで日本語対応（撤退前運用）。",
      },
    ],
    highlights: [
      "入金不要$20（W/R 1倍・上限$200出金）※提供終了済み",
      "初回100%最大$500（全ゲーム対象／一体型20x）",
      "毎日リベート（賭け条件1倍）＆高速出金（平均5分）",
      "日本語24時間サポート／豊富なスロット約3,000種",
    ],
    watchouts: [
      "2024年12月に日本市場を撤退（新規登録・限定特典は終了）",
      "一部決済に手数料（例：Vega Wallet 1%、STICPAY 2.5%、銀行振込5%）",
      "クレカは入金のみ／法定通貨はUSD固定",
      "FSは有効期限・対象ゲーム変更あり要確認",
    ],
    
  },

  payments: {
    featured: [
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "定番",
        note: "入金10分〜1時間／出金5分〜1時間。出金手数料5%。",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://casinotsu.com/payment/payz",
        badge: "手数料0",
        note: "即時入出金・手数料無料・高額対応。",
      },
      {
        name: "STICPAY",
        icon: "/assets/payments/sticpay.svg",
        href: "https://casinotsu.com/payment/sticpay",
        badge: "人気",
        note: "即時入出金。出金2.5%手数料。",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://casinotsu.com/payment/vega-wallet",
        badge: "日本向け",
        note: "即時入出金。出金1%手数料。",
      },
      {
        name: "Crypto",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/crypto",
        badge: "最速",
        note: "仮想通貨は入出金とも最短30秒〜。手数料無料（ネットワーク手数料別）。",
      },
    ],
    deposits: [
      { name: "VISA", icon: "/assets/payments/visa.svg" },
      { name: "MasterCard", icon: "/assets/payments/mastercard.svg" },
      { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "STICPAY", icon: "/assets/payments/sticpay.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg" },
      { name: "USDT (ERC20)", icon: "/assets/payments/tether.svg" },
      { name: "Litecoin" },
      { name: "BNB (BSC)" },
      { name: "Bitcoin Cash" },
      { name: "BUSD-T (BSC)" },
    ],
    withdrawals: [
      { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "STICPAY", icon: "/assets/payments/sticpay.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg" },
      { name: "USDT (ERC20)", icon: "/assets/payments/tether.svg" },
      { name: "Litecoin" },
      { name: "BNB (BSC)" },
      { name: "Bitcoin Cash" },
      { name: "BUSD-T (BSC)" },
    ],
    notes: [
      "プレイ通貨：USD固定。円入金は為替換算あり。",
      "入金手数料：クレカ5%、STICPAY 2.5%。Payz/仮想通貨は無料。",
      "出金手数料：銀行振込5%、Vega Wallet 1%、STICPAY 2.5%。Payz/仮想通貨は無料。",
      "出金速度：電子決済/仮想通貨は30秒〜、銀行は5分〜数時間。",
      "出金上限：24時間あたり$500,000（高額は分割申請推奨）。",
      "最低出金：銀行$200／その他$20〜。クレカは出金不可（入金のみ）。",
    ],
  },

  bonuses: {
    overview:
      "入金不要$20（W/R 1x／最大$200出金）や初回100%最大$500（全ゲーム対象・一体型20x）、毎日リベート1xなど“スロットNo.1”を支える施策が多数（※新規向けは提供終了）。",
    noDeposit:
      "ジャパカジ限定 入金不要$20／W/R 1x／上限$200出金（提供終了・アーカイブ情報）。",
    extraSpins: {
      summary:
        "150ドル以上入金で翌日フリースピン進呈。勝利金は賭け条件なし（対象スロットは週替わり）。",
      schedule: ["FSは翌日13時〜翌々1時の12時間有効", "スピン価値$0.2"],
      warning: "他ボーナス消化中は勝利金の出金不可／対象機種は都度確認。",
    },
    welcomeRows: [{ depositNumber: "初回", percent: "100%", cap: "$500", code: "" }],
    conditions: [
      "初回入金ボーナス：一体型（入金＋ボーナス）×20倍。",
      "貢献率：スロット100%／その他15%。禁止ゲームあり。",
      "ベット上限：$100（スロット）。",
      "入金不要$20はスロット専用・最大ベット$5・W/R 1x・上限$200出金。",
    ],
    prohibitedGames: [
      "ジャックポット系、ビデオポーカー等の一部タイトルは対象外（公式リスト要確認）",
    ],
  },

  offers: [
    {
      title: "入金不要$20（W/R 1x）※終了",
      description: "コード入力で即付与。スロット専用／最大$200出金。",
      highlight: "新規登録終了につき現在は提供停止。",
    },
    {
      title: "初回100%最大$500（全ゲーム対象）",
      description:
        "一体型20x。スロット100%／ライブ・テーブル等15%。取得後は選択ウォレットで消化。",
    },
    {
      title: "毎日キャッシュバック（VIP依存）",
      description: "5%〜10%目安・W/R 5x・上限なし。前日のVIPが適用。",
    },
    {
      title: "毎日リベート（W/R 1x）",
      description: "18時自動付与。前日の有効ベット×ランク別率で算出。",
    },
    {
      title: "フリースピン（入金連動）",
      description: "150ドル以上入金で翌日付与。勝利金W/Rなし・対象週替わり。",
    },
  ],

  facts: [
    { label: "名称", value: "YOUS CASINO（ユースカジノ）" },
    { label: "ローンチ", value: "2020" },
    { label: "状態", value: "日本市場撤退（2024年12月〜）" },
    { label: "ライセンス", value: "Curaçao eGaming" },
    { label: "運営会社", value: "Sector Media N.V." },
    { label: "VIPプログラム", value: "✅（6段階／昇格・降格ルールあり）" },
    {
      label: "ゲームタイプ",
      value:
        "スロット（約3,000）、テーブル、ライブ、ゲームショー、クラッシュ、Plinko ほか",
    },
    { label: "スポーツブック", value: "❌（非対応）" },
    { label: "サポート", value: "ライブチャット（24時間）／メール" },
    { label: "メール", value: "support@yous777.com" },
  ],

  longform: {
    kicker: "スロット特化×高速出金の代表格（アーカイブ）",
    title: "賭け条件1倍や一体型20xなど“現実的に遊べる”設計が魅力。撤退後は代替カジノへ",
    paragraphs: [
      "ユースカジノは“スロットNo.1”を掲げ、入金不要$20（W/R 1x）や毎日リベート1x、平均5分の出金など、実利重視のオファーで支持を集めました。",
      "初回100%最大$500は全ゲーム対象で一体型20x。スロット100%／その他15%と明確で、上級者だけでなく中級者にも扱いやすい条件感です。",
      "決済は銀行・電子決済・仮想通貨に広く対応。仮想通貨は最速クラスの着金で、手数料も原則無料（ネットワーク手数料別）。一方で銀行/一部ウォレットの出金手数料には注意が必要でした。",
      "VIPは6段階。毎日キャッシュバックや昇格・バースデー特典、リベートなど、スロットを中心に“回すほど得する”構造が特徴です。",
      "2024年12月に日本市場から撤退し、新規登録や限定オファーは終了。以降は既存アカウントのサポート・精算が中心となり、実プレイは他ブランドを検討する流れとなります。",
    ],
  },

  responsiblePlay: [
    "入金上限・プレイ時間の制限リクエストに対応",
    "自己排除（6ヶ月〜永久）をサポートに申請可能",
    "国内法の支援制度は対象外のため、外部機関の活用推奨",
  ],

  userConcerns: [
    "日本市場撤退により新規登録不可・限定特典終了",
    "銀行・一部ウォレット出金に手数料発生",
    "FSの有効期間が短く、対象機種が週替わりで把握が必要",
    "クレカは入金のみで出金不可",
  ],

  summary: [
    "“W/R 1x”“一体型20x”など現実的条件＆爆速出金で支持を得たスロット特化ブランド。",
    "決済の選択肢が広く、仮想通貨は特に高速・低コスト。",
    "2024年12月の日本撤退により、現在は新規登録・限定特典が利用不可。代替カジノの検討を推奨。",
  ],

  faq: [
    {
      question: "ユースカジノはまだ遊べますか？",
      answer:
        "日本市場から2024年12月に撤退しており、新規登録や限定ボーナスは終了しています。既存ユーザーの精算・サポート案内を優先し、実プレイは他カジノをご検討ください。",
    },
    {
      question: "入金不要ボーナス$20は本当に賭け条件1倍？",
      answer:
        "撤退前はW/R 1x・最大$200出金・スロット専用・最大ベット$5という好条件で提供されていました。現在は新規付与終了のアーカイブ情報です。",
    },
    {
      question: "初回入金ボーナスの条件は？",
      answer:
        "100%最大$500。一体型で（入金＋ボーナス）×20倍。スロット100%・その他15%・禁止ゲームあり。ベット上限$100（スロット）。",
    },
    {
      question: "出金の速さと手数料は？",
      answer:
        "仮想通貨・電子決済は30秒〜、銀行は5分〜数時間が目安。手数料は銀行5%、Vega 1%、STICPAY 2.5%、Payz/仮想通貨は無料（ネットワーク手数料別）。",
    },
    {
      question: "スポーツブックはありますか？",
      answer: "いいえ。ユースカジノはスポーツベット非対応です。",
    },
    {
      question: "VIPの昇格・降格は？",
      answer:
        "初期は一般。$100以上入金でシルバーへ。月末に降格審査ありつつ、ゴールド以上はシルバー/一般への降格なし、などのルールが案内されていました。",
    },
    {
      question: "税金はかかりますか？",
      answer:
        "日本では一時所得等として課税対象となる場合があります。高額獲得時は税理士など専門家へご相談ください。",
    },
  ],
};