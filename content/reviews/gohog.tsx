import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewGohog: ReviewPageContent = {
  hero: {
    title: "Gohog（ゴーホグ）レビュー",
    subheading:
      "新星カジノ — 日本向けに最適化されたデザインと豊富なボーナス（※サービス終了のお知らせあり）",
    description:
      "CasinoTsu より、Gohog（ゴーホグ）に関する重要なお知らせと総合レビューをお届けします。Gohog は豊富なボーナス、仮想通貨対応、充実したゲームラインナップを持つ新興カジノでしたが、サービス終了の案内があります。代替カジノもご案内します。",
    score: 4.3,
    scoreMax: 5,
    scoreBreakdown: [],
    highlights: [
      "充実した日本語対応（ライブチャットは日本語スタッフ対応）",
      "豊富なボーナスと選べるウェルカムオファー（仮想通貨・Eウォレット向けオプションあり）",
      "仮想通貨対応および多彩な決済方法（クレジットカード、電子財布、銀行、暗号資産）",
      "大量のゲーム（4,000種類以上・ライブ180種以上・82社以上のプロバイダー）",
      "Casino Guru / 各評価で総合的に良好な評価を得ている",
    ],
    watchouts: [
      "重要：Gohog は 2025-03-21 にサービス終了（新規登録・限定ボーナス受付終了）",
      "ボーナスの賭け条件は高め（案内例で50xなど）や出金条件の制約あり",
      "出金限度やKYC要件、入金のターンオーバーが細かく規定されている点に注意",
      "週／月の出金限度が設定されており、VIPでない場合は上限がある",
    ],
  },
  payments: {
    featured: [
      {
        name: "クレジットカード（VISA / MasterCard / JCB）",
        icon: "",
        href: "",
        badge: "",
        note: "カード入金に対応。最低入金例は¥3,000（カード手数料450円の記載あり）。",
      },
      {
        name: "電子ウォレット（Payz / Skrill / Neteller / MiFinity）",
        icon: "",
        href: "",
        badge: "",
        note: "即時～数時間で反映する利便性の高い入出金手段。",
      },
      {
        name: "仮想通貨（BTC / USDT / ETH 等）",
        icon: "",
        href: "",
        badge: "",
        note: "多くのアルトコインに対応。入金は即時、出金は1時間～24時間が目安。",
      },
    ],
    deposits: [
      {
        name: "VISA",
        icon: "",
        href: "",
      },
      {
        name: "MasterCard",
        icon: "",
        href: "",
      },
      {
        name: "JCB",
        icon: "",
        href: "",
      },
      {
        name: "銀行振込",
        icon: "",
        href: "",
      },
      {
        name: "Payz",
        icon: "",
        href: "",
      },
      {
        name: "MiFinity",
        icon: "",
        href: "",
      },
      {
        name: "Skrill / Neteller",
        icon: "",
        href: "",
      },
      {
        name: "仮想通貨（BTC/ETH/USDT/TRX/LTC/ADA/DOGE/XRP 等）",
        icon: "",
        href: "",
      },
    ],
    withdrawals: [
      {
        name: "銀行送金",
        icon: "",
        href: "",
      },
      {
        name: "電子ウォレット（Payz / MiFinity / Skrill 等）",
        icon: "",
        href: "",
      },
      {
        name: "仮想通貨（BTC / USDT / ETH 等）",
        icon: "",
        href: "",
      },
    ],
    notes: [
      "最低入金額の目安は¥1,500〜¥3,000、最低出金は€10（約¥1,500）程度の案内がある。",
      "出金反映時間は手段により大きく異なる（電子財布は速い、銀行送金は数営業日、仮想通貨は1時間〜24時間程度が目安）。",
      "クレジットカード入金には事務手数料（例：¥450）がかかる場合がある。",
      "入金方法によっては出金先として使えるのは入金に利用した方法のみ。新しい出金方法を使うには同方法での入金とターンオーバーが必要になる場合がある。",
      "週／月の出金上限が設定されている（例：週¥1,125,000、月¥4,500,000。VIPは例外）。",
    ],
  },
  bonuses: {
    overview:
      "Gohog は豪華なウェルカムパッケージ（複数オプション）や仮想通貨向けオファー、Eウォレット専用オファー、定期的なキャッシュバックや宝くじ、VIPリベートなどを提供していました。プロモごとに賭け条件・有効期限・最大出金額が異なるため、事前に規約を確認してください。",
    noDeposit:
      "入金不要オファーの記載は限定的だが、期間や地域限定の入金不要・フリースピン等の提供がある旨の案内があった。",
    extraSpins: {
      summary:
        "フリースピンはウェルカムや限定プロモで付与され、例として20回分（賭け条件30x）や合計数十〜数百回が段階的に付与されることがある。",
      schedule: [
        "ウェルカム：20フリースピン（賭け条件30倍）",
        "プロモ／フリースピン配布：合計で数セット分割して付与されるケースあり",
      ],
      warning:
        "フリースピン勝利金に対して賭け条件や最大出金上限が設定される場合がある。プロモ規約を確認してください。",
    },
    welcomeRows: [
      {
        depositNumber: "初回入金（オプション制）",
        percent: "選択式（例：100% / 120% / 150% 等、案内により異なる）",
        cap: "最大¥37,500〜¥150,000等（オプションによる）",
        code: "",
      },
      {
        depositNumber: "2回目入金",
        percent: "50%",
        cap: "最大¥37,500",
        code: "WC2",
      },
      {
        depositNumber: "3回目入金",
        percent: "100%",
        cap: "最大¥37,500",
        code: "WC3",
      },
    ],
    conditions: [
      "ウェルカムや一部ボーナスの賭け条件はボーナス種類により高め（案内例：ボーナス50倍や50x、サイト全体の案内では50xの例がある）。",
      "仮想通貨入金やEウォレット向けに別条件・別コードのオファーがあることが多い。",
      "ボーナス適用のためのコード入力や登録後の短時間内入金（72時間ルール等）が設定される場合がある。",
      "入金ボーナスは分離型（リアルマネー優先消費）である場合が多い。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "選べる初回入金ボーナス（複数オプション）",
      description:
        "スタンダード／キャッシュバック重視／プレミアムなど、登録後72時間以内の入金で選べる大型ウェルカム。オプションによって最大額・賭け条件が変わる。",
      highlight: "プレイヤーの好みに合わせて選べるウェルカム",
    },
    {
      title: "仮想通貨向けウェルカム",
      description:
        "BTC・ETH等で入金するプレイヤー向けの別枠ボーナス（パーセンテージと最大値が通貨により設定）。",
      highlight: "クリプトユーザー向けの専用オファー",
    },
    {
      title: "毎週キャッシュバック / 宝くじ",
      description:
        "週次の損失に対するキャッシュバックや、一定入金で参加できる抽選（宝くじ）で賞金を狙えるプロモ。参加条件があるため確認が必要。",
      highlight: "定期的に損失を一部還元／抽選で賞金獲得のチャンス",
    },
  ],
  facts: [
    {
      label: "サービス終了",
      value: "2025-03-21（新規登録・限定オファーの受付終了）",
    },
    {
      label: "評価点",
      value: "4.3 / 5",
    },
    {
      label: "フリースピン（例）",
      value: "20回（賭け条件30倍の案内）",
    },
    {
      label: "ボーナス（案内）",
      value: "最大 ¥225,000（ウェルカムの合計案内）",
    },
    {
      label: "ライセンス",
      value: "Antillephone（キュラソーライセンス表記）",
    },
    {
      label: "運営会社",
      value: "Dama N.V.",
    },
    {
      label: "ゲーム数",
      value: "4,000種類以上（スロット多数）、ライブ180種類以上",
    },
    {
      label: "プロバイダー数",
      value: "82社以上（Evolution, Pragmatic Play 等含む）",
    },
    {
      label: "出金上限（一般案内）",
      value: "週あたり¥1,125,000、月あたり¥4,500,000（VIPは例外あり）",
    },
  ],
  intro: {
    paragraphs: [
      "CasinoTsu より、ゴーホグに関する情報をお届けいたします。重要：Gohog は 2025-03-21 をもちましてサービスを終了しました。これに伴い、CasinoTsu からの限定登録ボーナスや新規登録の受付も終了しております。残高があるユーザーは、公式からの案内に従ってください。",
      "以下はサービス提供時の機能・ボーナス・入出金・サポート等のまとめです。今後は代替カジノ（Bons, Mystino, Yuugado 等）をご検討ください。",
    ],
    ctas: [
      {
        text: "Bons.com を見る（代替）",
        href: "https://go.japanesecasino.com/go/bons-com:bons?referrer_path=%2Freviews%2Fgohog",
      },
      {
        text: "Mystino を見る（代替）",
        href: "https://go.japanesecasino.com/go/mystino:mystino?referrer_path=%2Freviews%2Fgohog",
      },
    ],
  },
  games: [
    "スロット（4,000種類以上、モバイル対応多数）",
    "ライブカジノ（180種類以上、Evolution / Pragmatic Play 等）",
    "ゲームショー、クラッシュ、ダイス、ビデオポーカー、ビンゴ等",
    "スポーツベット、バーチャルスポーツ",
    "ジャックポット／トーナメント、アチーブメント／クエスト機能",
  ],
  features: [
    "日本語対応のライブチャット（15:30〜24:00）とメールサポート",
    "幅広い決済手段（カード、電子財布、銀行、仮想通貨）",
    "複数オプションから選べる大型ウェルカムオファー",
    "VIPプログラムによる出金上限引き上げや専属特典",
    "豊富なプロバイダー（82社以上）による多彩なゲーム",
  ],
  security: [
    "ライセンス：Antillephone（キュラソー）表記",
    "運営：Dama N.V.（グローバルに多数のカジノ運営実績）",
    "個人情報・決済情報はプライバシーポリシーに準拠して管理（SSL暗号化採用）",
    "ゲームの公平性：RNG採用のプロバイダーゲームを提供",
    "KYC（本人確認）：出金時の身分証／住所確認／支払い証明などの提出を求めることがある",
  ],
  responsiblePlay: [
    "入金制限（Deposit Limits）",
    "損失制限（Loss Limits）",
    "セッション制限／リアリティチェック",
    "自己排除（Self-Exclusion）",
    "出金ロック（Withdrawal Lock）",
  ],
  complaintStats: [
    "Casino Guru / 各所に苦情あり（賞金没収／ベット制限等の報告が一部）",
    "関連カジノ含めて過去に苦情対応例があり、介入で返金されたケースの報告あり",
  ],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "サービス終了（2025-03-21）に伴う出金や残高処理の対応",
    "ボーナスの高い賭け条件（50x の案内例やフリースピン30x）",
    "出金上限やKYCトリガーの存在（高額出金時に要注意）",
    "過去に賞金没収やアカウント制限の苦情が報告されている",
  ],
  summary: [
    "Gohog は日本市場に強く配慮した新興カジノとして高いクオリティを示していましたが、2025-03-21 にサービスを終了しました。サービス終了に伴い新規登録・限定オファーの受付は終了しています。",
    "提供時は豪華なウェルカム、仮想通貨対応、豊富なゲームと完全日本語サポートを備えており、短期間で注目を集めたカジノでした。",
    "利用者はサービス終了に伴う案内（残高・出金手続き）を公式に確認のうえ対応してください。今後は本文で挙げた代替カジノを検討することをおすすめします。",
  ],
  extraLinks: [
    {
      text: "Bons.com（代替）",
      href: "https://go.japanesecasino.com/go/bons-com:bons?referrer_path=%2Freviews%2Fgohog",
    },
    {
      text: "Mystino（代替）",
      href: "https://go.japanesecasino.com/go/mystino:mystino?referrer_path=%2Freviews%2Fgohog",
    },
    {
      text: "Yuugado（代替）",
      href: "https://go.japanesecasino.com/go/yuugado:yuugado?referrer_path=%2Freviews%2Fgohog",
    },
    {
      text: "Cookies Policy",
      href: "https://casinotsu.com/about/cookie-policy",
    },
  ],
  faq: [
    {
      question: "Gohog で仮想通貨は使えますか？",
      answer:
        "はい。BTC、ETH、USDT 等の主要仮想通貨で入出金が可能でした（サービス終了前の案内）。",
    },
    {
      question: "サービス終了後に残高がある場合はどうすればよいです？",
      answer:
        "公式からの案内に従い、指定された期間内に出金手続きを行ってください。既にサービス終了（2025-03-21）となっているため、Gohog の公式連絡を最優先で確認してください。",
    },
    {
      question: "ウェルカムボーナスの賭け条件は？",
      answer:
        "ボーナスの種類により異なりますが、案内例ではボーナスに対して50倍、フリースピンは30倍など高めの設定があるため、受け取る前に詳細規約を確認してください。",
    },
    {
      question: "KYC（本人確認）は必要ですか？",
      answer:
        "出金時や高額出金時には本人確認書類の提出が必要です。通常は初回出金申請から数日以内の提出が求められます。",
    },
  ],
  cta: {
    text: "代替カジノを見る（Bons / Mystino 等）",
    href: "https://go.japanesecasino.com/go/bons-com:bons?referrer_path=%2Freviews%2Fgohog",
  },
  textBlocks: [],
};
