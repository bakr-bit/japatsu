import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const review2up: ReviewPageContent = {
  hero: {
    title: "2UP（2アップカジノ）レビュー",
    subheading:
      "仮想通貨と日本円に対応、最大$2,000 + 最大500回フリースピン、7,000種類以上のゲーム",
    description:
      "CasinoTsu は正確さを第一に、責任ある情報提供を心がけています。本レビューでは、仮想通貨と日本円の両方でプレイ可能なオンラインカジノ「2UP（2アップカジノ）」の特徴、ボーナス、入出金方法、評判などを詳しく解説します。",
    score: 4,
    scoreMax: 5,
    scoreBreakdown: [],
    highlights: [
      "CasinoTsu限定の初回入金ボーナス：200%（最大$2,000）",
      "初回入金フリースピン：最大500回（賭け条件：35倍）",
      "7,000種類以上の豊富なゲームラインナップ（スロット約6,500）",
      "仮想通貨15種類に対応（BTC/ETH等）",
      "VIPプログラム（全11レベル）、レーキバック、VIPステータス移行",
    ],
    watchouts: [
      "出金に関する苦情や遅延の報告がある",
      "カスタマーサポートの対応が遅い・機能しないとの報告あり",
      "一部ユーザーから『詐欺』などの強い非難がある",
      "日本円出金は銀行振込のみで手数料がかかる",
    ],
  },
  payments: {
    featured: [
      {
        name: "Match Pay（日本円入金）",
        icon: "",
        href: "https://go.japanesecasino.com/go/2up",
        badge: "",
        note: "日本円入金に推奨。最低¥1,000、最大¥100,000、即時〜、手数料無し",
      },
      {
        name: "仮想通貨（BTC／ETH／USDT等）",
        icon: "",
        href: "",
        badge: "",
        note: "合計15種類対応。着金は数分程度、手数料はマイニング手数料のみ",
      },
      {
        name: "銀行振込（日本円出金）",
        icon: "",
        href: "",
        badge: "",
        note: "日本円出金は銀行振込のみ。手数料：3.0% + 500円、着金目安24時間以内",
      },
    ],
    deposits: [
      {
        name: "Match Pay",
        icon: "",
        href: "https://go.japanesecasino.com/go/2up",
      },
      {
        name: "銀行振り込み（注：メンテナンス中）",
        icon: "",
        href: "",
      },
      {
        name: "仮想通貨（BTC／ETH／USDT／USDC／SOL／TRX／BNB／XRP／TON／AVAX／POL／LTC／DOGE／SHIB／PEPE）",
        icon: "",
        href: "",
      },
      {
        name: "Google Pay / Apple Pay",
        icon: "",
        href: "",
      },
      {
        name: "Alipay",
        icon: "",
        href: "",
      },
      {
        name: "WeChat Pay",
        icon: "",
        href: "",
      },
      {
        name: "ViettelPay",
        icon: "",
        href: "",
      },
      {
        name: "その他のアジア系決済方法",
        icon: "",
        href: "",
      },
    ],
    withdrawals: [
      {
        name: "銀行振込（日本円）",
        icon: "",
        href: "",
      },
      {
        name: "仮想通貨（BTC／ETH／USDT等）",
        icon: "",
        href: "",
      },
    ],
    notes: [
      "出金も入金と同じ仮想通貨が利用可能",
      "日本円での出金は銀行振込のみ（手数料：3.0% + 500円）",
      "仮想通貨出金は数分程度（手数料は通貨による）。VIPレベルによって無料化される場合あり",
      "銀行振込による入金はメンテナンス中のため利用不可。代わりに Match Pay 推奨",
      "出金限度額の目安：週間 $2,000、月間 $10,000（VIPや状況により変動）",
    ],
  },
  bonuses: {
    overview:
      "2UP は CasinoTsu 限定で初回入金200%ボーナス（最大$2,000）と、初回入金時に最大500回のフリースピンを提供。賭け条件はボーナス＋入金額の合算に対して35倍。フリースピンからの勝利金も賭け条件35倍。",
    noDeposit:
      "現在、登録のみで獲得できる入金不要ボーナスは提供されていません。",
    extraSpins: {
      summary:
        "初回入金に応じて最大500回分のフリースピンが付与される（獲得分は賭け条件35倍）",
      schedule: [
        "$20以上 → 50回分（対象：Big Bass Bonanza）",
        "$50以上 → 100回分（対象：Greedy Wolf）",
        "$100以上 → 200回分（対象：The Dog House）",
        "$200以上 → 500回分（対象：The Great Chicken Escape）",
      ],
      warning: "フリースピンから得た勝利金にも賭け条件35倍が適用されます。",
    },
    welcomeRows: [
      {
        depositNumber: "初回入金",
        percent: "200%",
        cap: "$2,000",
        code: "",
      },
    ],
    conditions: [
      "賭け条件はボーナス＋入金額合算で35倍",
      "フリースピン勝利金の賭け条件は35倍",
      "入金した資金は出金前に最低1回はベットする必要がある",
      "一部プロモーションはVIPレベルや条件によって異なる",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "CasinoTsu限定 初回入金200%ボーナス（最大$2,000）",
      description:
        "通常100%最大$1,000のところ、CasinoTsu経由で登録すると還元率と最大額が2倍に。賭け条件は35倍。",
      highlight: "通常の2倍の還元率！最大$2,000のウェルカムボーナス",
    },
    {
      title: "初回入金フリースピン（最大500回）",
      description:
        "入金額に応じて50～500回のフリースピンを付与。対象スロットは入金額により異なる。",
      highlight: "最大500回のフリースピン",
    },
    {
      title: "ウィークリーリーグ",
      description:
        "毎週開催。賞金総額$5,000。賭け額ランキングの上位10名に賞金が付与される（1位$2,000、2位$1,000等）。",
      highlight: "週ごとの賞金あり（合計$5,000）",
    },
  ],
  facts: [
    {
      label: "リリース年",
      value: "2018年",
    },
    {
      label: "対応通貨",
      value: "仮想通貨15種 + 日本円（Match Pay等）",
    },
    {
      label: "ゲーム数",
      value: "約7,000種類（スロット約6,500種、オリジナルゲーム13種含む）",
    },
    {
      label: "ライセンス",
      value: "アンジュアン島（AnjouanGaming.com） ALSI-042308001-FI1",
    },
    {
      label: "運営会社",
      value: "Uponly N.V.（キュラソー登記、登録番号：163454）",
    },
    {
      label: "VIPプログラム",
      value: "全11レベル（ロック → クラウン）",
    },
    {
      label: "ウェルカムボーナス",
      value: "CasinoTsu限定 200% 最大$2,000（賭け条件35倍）",
    },
    {
      label: "フリースピン",
      value: "最大500回（賭け条件35倍）",
    },
  ],
  intro: {
    paragraphs: [
      "CasinoTsu は、オンラインカジノのレビューにおいて、正確さを第一に、そして責任ある情報提供を心がけています。今回、皆様にご紹介するのは、仮想通貨と日本円の両方でプレイ可能な最新オンラインカジノ「2UP（2アップカジノ）」です。初回入金ボーナスは最大2,000ドルと500回のフリースピン、そして7,000種類以上もの豪華なゲームラインナップをご用意しております。2UPの魅力を、CasinoTsu が余すところなくレビューいたします。",
      "責任あるプレイを心がけましょう。",
    ],
    ctas: [
      {
        text: "今すぐボーナスをゲット！",
        href: "https://go.japanesecasino.com/go/2up:2up?referrer_path=%2Freviews%2F2up",
      },
      {
        text: "2UP でプレイしてみる！",
        href: "https://go.japanesecasino.com/go/2up",
      },
    ],
  },
  games: [
    "スロット（約6,500種類）",
    "ライブカジノ（ライブブラックジャック、ライブバカラ等）",
    "オリジナルゲーム（プリンコ、ダイス、マインズ、リンボ、ジャンケン等）",
    "ゲームショー（クレイジー・ボールズ、アイスフィッシング、マーブル・レース等）",
    "スポーツベット（約30種類以上のスポーツ、eスポーツ含む）",
  ],
  features: [
    "仮想通貨15種類対応（BTC/ETH等）",
    "日本円入金対応（Match Pay等）",
    "7,000種類以上のゲームラインナップ",
    "オリジナルゲーム（高RTPのものあり、最大RTP99.596%）",
    "VIPプログラム（全11レベル）とレーキバック、VIPステータス移行",
    "ウィークリーリーグ等のトーナメント",
    "モバイル対応",
  ],
  security: [
    "ライセンス：アンジュアン島（AnjouanGaming.com） ALSI-042308001-FI1",
    "運営会社：Uponly N.V.（キュラソー登記、登録番号：163454）",
    "個人情報はプライバシーポリシーに基づき暗号化して管理",
    "ゲームの公平性：Provably Fairシステム対応のオリジナルゲーム、RNG採用の信頼プロバイダー（Evolution Gaming、NetEnt等）",
  ],
  responsiblePlay: [
    "サイトフッターの「責任あるギャンブル」ページで取り組みを確認可能",
    "自己排除（Self-Exclusion）：メールで申請し指定期間プレイ停止可能",
    "クールダウン期間：短期間のプレイ停止が可能",
    "提供されていないツール：損失制限、リアリティチェック、自己評価テスト、セッション制限、賭け金制限、タイムアウト、出金ロック（現状提供なし）",
    "CasinoTsu は責任あるプレイを推奨",
  ],
  complaintStats: [
    "Trustpilot: 5段階中2.5（'Poor'） - 8件のレビューに基づく",
    "Casino.Guru: 安全性指数 6.9/10",
    "Wizard of Odds: 平均評価 2.9（推奨なし）",
    "Chipy.com: 5段階中3.3 - 1.9K票（177件のレビュー）に基づく",
    "ユーザーからの主な苦情：出金問題、アカウント凍結、カスタマーサポートの不備、運営体制への不信",
  ],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "出金ができない、出金遅延、アカウント凍結の報告あり",
    "ライブチャットが機能しない、返信がない等のサポート不備",
    "一部ユーザーによる『詐欺』の非難",
    "運営体制や説明責任に対する疑念",
  ],
  summary: [
    "2UP は2018年リリースの仮想通貨対応カジノで、仮想通貨15種＋日本円対応、約7,000種類のゲームを提供する大型カジノ。",
    "CasinoTsu限定の初回入金200%（最大$2,000）＋最大500回フリースピンは魅力的だが、賭け条件は35倍とやや厳しめ。",
    "VIPプログラムやレーキバック、他カジノのVIPステータス移行などユニークな特典がある。",
    "一方で、出金トラブルやカスタマーサポートの遅延・不備に関する報告が複数存在するため、利用の際はリスクを理解した上で慎重に行動することを推奨する。",
  ],
  extraLinks: [
    {
      text: "2UP 公式サイト（CasinoTsu経由）",
      href: "https://go.japanesecasino.com/go/2up",
    },
    {
      text: "今すぐボーナスをゲット！",
      href: "https://go.japanesecasino.com/go/2up:2up?referrer_path=%2Freviews%2F2up",
    },
    {
      text: "仮想通貨オンラインカジノ ガイド",
      href: "https://www.japanesecasino.com/crypto",
    },
    {
      text: "Cookies Policy",
      href: "/about/cookie-policy",
    },
  ],
  faq: [
    {
      question: "2UP (2アップカジノ）とは？",
      answer:
        "2UP は2018年にオープンした仮想通貨対応オンラインカジノです。ビットコインやイーサリアムなど15種類の仮想通貨と日本円の決済に対応し、約7,000種類のゲームとスポーツベットを提供しています（2023年10月時点）。",
    },
    {
      question: "2UP に入金不要ボーナスはありますか？",
      answer:
        "現在 2UP カジノでは、入金不要ボーナスの提供はありません。ただし、初回入金ボーナスでは「200%ボーナス（最大$2,000）＋最大500回フリースピン」が獲得できます（CasinoTsu限定オファー）。",
    },
    {
      question: "アカウントが凍結されたらどうすれば良いですか？",
      answer:
        "アカウントが凍結してしまった場合は、ライブチャットまたは support@2up.io までご連絡ください。",
    },
    {
      question: "2UP は違法ですか？",
      answer:
        "2UP はアンジュアン島のライセンス（ALSI-042308001-FI1）を取得し、運営されています。ただし、居住国の法律に従って自己責任でプレイしてください。",
    },
    {
      question: "2UP でプレイするのは危険でしょうか？",
      answer:
        "2UP は信頼できるプロバイダーと提携していますが、一部プレイヤーからは出金問題やサポートに関する懸念が報告されています。利用にあたってはリスクを理解することが重要です。",
    },
    {
      question: "仮想通貨以外で入金できますか？",
      answer:
        "はい。2UP は仮想通貨だけでなく日本円での入金にも対応しています。Match Pay を利用して入金し、銀行振込で出金することができます。",
    },
  ],
  cta: {
    text: "2UP でプレイ！",
    href: "https://go.japanesecasino.com/go/2up",
  },
  textBlocks: [],
};
