import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewJustSpin: ReviewPageContent = {
  hero: {
    title: "Justspin（ジャストスピン）レビュー",
    subheading:
      "シンプルで使いやすいスロット特化型カジノ — 豊富な決済とプロバイダーを搭載",
    description:
      "Justspin は見やすいデザインと充実したゲーム検索機能が魅力のオンラインカジノ。登録でフリースピンを受け取れるほか、4回までのウェルカム入金ボーナスや定期プロモを提供します。CasinoTsu がボーナス、入出金、サポート、セキュリティを含めて詳しく解説します。",
    score: 3.9,
    scoreMax: 5,
    scoreBreakdown: [],
    highlights: [
      "登録での大量フリースピン（案内例：100回）や多段階ウェルカムボーナスが魅力",
      "操作性・検索機能が優秀で目的のゲームが見つけやすい",
      "主要プロバイダー（Play'n GO、Pragmatic Play、NetEnt等）を多数導入",
      "仮想通貨含む複数の決済方法に対応",
      "比較的迅速な出金処理を謳っている",
    ],
    watchouts: [
      "ボーナスの賭け条件が厳しめ（案内例：50x）およびベット上限（$3）あり",
      "ボーナスでの禁止ゲームが多い（テーブルゲーム・ジャックポット等）",
      "日本語表示に不自然な箇所があり、サポートの対応時間が不規則な場合がある",
      "一部で出金遅延やアカウント認証の苦情が報告されている",
    ],
  },
  payments: {
    featured: [
      {
        name: "クレジットカード（VISA / MasterCard / AMEX）",
        icon: "",
        href: "",
        badge: "",
        note: "カード入金に対応。入金反映は数時間の案内がある。AMEXやDiscoverの対応例あり。",
      },
      {
        name: "電子ウォレット（iWallet / Payz / MuchBetter / Vega Wallet）",
        icon: "",
        href: "",
        badge: "",
        note: "即時〜数時間での入出金が可能。Payzでは入金手数料が発生する場合あり。",
      },
      {
        name: "仮想通貨（Bitcoin / Ethereum / USDT 等）",
        icon: "",
        href: "",
        badge: "",
        note: "仮想通貨入金は低額から対応。入金は即時〜24時間、出金は通常24時間以内を目安に処理されることが多い。",
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
        name: "AMEX / Discover",
        icon: "",
        href: "",
      },
      {
        name: "Binance Pay",
        icon: "",
        href: "",
      },
      {
        name: "Payz",
        icon: "",
        href: "",
      },
      {
        name: "iWallet",
        icon: "",
        href: "",
      },
      {
        name: "MuchBetter",
        icon: "",
        href: "",
      },
      {
        name: "Vega Wallet",
        icon: "",
        href: "",
      },
      {
        name: "銀行振込",
        icon: "",
        href: "",
      },
      {
        name: "仮想通貨（BTC / ETH / USDT / LTC / DOGE / XRP 等）",
        icon: "",
        href: "",
      },
    ],
    withdrawals: [
      {
        name: "電子ウォレット（Payz / iWallet / MuchBetter 等）",
        icon: "",
        href: "",
      },
      {
        name: "銀行送金",
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
      "最低入金は€10 / $10 程度の案内。最低出金は€50 / $50。",
      "出金上限：日/週/月の上限があり（例：一日€5,000、月$150,000 の案内）、詳細はアカウントで要確認。",
      "出金処理には保留期間（0–72時間）を設ける場合がある。通常の出金完了は数時間〜数営業日が目安。",
      "クレジットカードでの入金は出金に利用できない場合があり、カード出金は制限があることに注意。",
      "入金した資金はターンオーバー（例：入金額の3倍）を満たす必要がある場合がある。",
    ],
  },
  bonuses: {
    overview:
      "Justspin は登録フリースピン（例：100回）や、初回〜4回目までのウェルカム入金ボーナス、定期的なウィークリープロモやスポットオファーを用意しています。ボーナスの賭け条件は高めに設定されていることが多く、有効期限や対象ゲーム、最大出金上限に注意が必要です。",
    noDeposit:
      "登録で受け取れる入金不要フリースピン（例：100回）は提供されている。地域や時期により条件が変わるため受取前に確認を推奨。",
    extraSpins: {
      summary:
        "初回フリースピン（大量）やウィークリープロモでの追加スピンがある。フリースピン勝利金には高めの賭け条件（例：50x）が適用されることが多い。",
      schedule: [
        "登録時のフリースピン（例：100回）を段階的に付与するケースあり（例：毎日10回×10日等）",
      ],
      warning:
        "フリースピン勝利金の賭け条件は短期間しかないことがある（例：1日等）。有効期限と最大出金額を事前確認してください。",
    },
    welcomeRows: [
      {
        depositNumber: "初回入金",
        percent: "100%",
        cap: "$100（案内例）",
        code: "BONUS1",
      },
      {
        depositNumber: "2回目入金",
        percent: "50%",
        cap: "$150",
        code: "BONUS2",
      },
      {
        depositNumber: "3回目入金",
        percent: "50%",
        cap: "$150",
        code: "BONUS3",
      },
      {
        depositNumber: "4回目入金",
        percent: "100%",
        cap: "$100",
        code: "BONUS4",
      },
    ],
    conditions: [
      "多くのボーナスで賭け条件は50倍（案内例）と高め。ボーナスやフリースピンの勝利金は対象ゲームでのみ有効。",
      "ベット上限：ボーナス消化中の最大ベット額は $3 に制限される場合がある。",
      "禁止ゲーム：テーブルゲーム、ライブゲーム、ジャックポットや一部スロットはボーナス利用不可の場合がある。",
      "有効期限：フリースピンは短い有効期限（例：1日）、ボーナスマネーは21日等、プロモによって異なる。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "登録フリースピン（入金不要）",
      description:
        "新規登録でFire Jokerなどのスロット対象のフリースピンを付与（例：100回、地域・時期により変動）。",
      highlight: "登録だけで試せるフリースピン（条件あり）",
    },
    {
      title: "マルチステップ ウェルカムパッケージ",
      description:
        "初回〜4回目の入金で受け取れる複数段階のウェルカムボーナス（ボーナス＋フリースピン）。コード入力が必要。",
      highlight: "4回で受け取れる大型ウェルカム",
    },
    {
      title: "ウィークリー＆サンデーオファー",
      description:
        "曜日限定のフリースピンや入金マッチ等。SPOTコードで参加できる短期オファーが頻繁に更新される。",
      highlight: "曜日ごとの限定オファー",
    },
  ],
  facts: [
    {
      label: "評価点",
      value: "3.9 / 5",
    },
    {
      label: "登録ボーナス（例）",
      value: "登録で100フリースピン（対象・条件あり）",
    },
    {
      label: "ウェルカムボーナス（要約）",
      value: "初回〜4回目の入金で受け取れる複合パッケージ（各回$10〜）",
    },
    {
      label: "フリースピン（案内）",
      value: "最大600回（案内例、賭け条件50xのケースあり）",
    },
    {
      label: "賭け条件（案内例）",
      value:
        "ボーナス・フリースピン勝利金 50x（例）。ボーナス利用中の最大ベット $3。",
    },
    {
      label: "ライセンス",
      value: "Malta Gaming Authority（MGA）表記",
    },
    {
      label: "運営会社",
      value: "Betpoint Group Ltd. Casinos（案内）",
    },
    {
      label: "ローンチ",
      value: "2019",
    },
    {
      label: "ゲームプロバイダー数",
      value: "50社以上（BetSoft, Play'n GO, Pragmatic, NetEnt 等）",
    },
    {
      label: "対応通貨／言語",
      value:
        "EUR, USD, AUD, CAD等。英語ほか多言語対応（日本語ありだが一部不自然）",
    },
  ],
  intro: {
    paragraphs: [
      "CasinoTsu はオンラインカジノのレビューを専門とするアフィリエイトサイトです。Justspin（ジャストスピン）はシンプルで見やすいプラットフォームと豊富なスロットラインナップが特徴のカジノです。",
      "本レビューでは登録フリースピンやウェルカムボーナス、入出金方法、サポート体制、セキュリティ、責任あるギャンブルの取り組みまで、CasinoTsu が確認した情報をまとめています。",
    ],
    ctas: [
      {
        text: "今すぐボーナスをゲット！",
        href: "https://go.casino.su/justspin:just-spin?referrer_path=%2Freviews%2Fjust-spin",
      },
      {
        text: "詳細レビューを見る",
        href: "https://www.casino.su/reviews/just-spin#",
      },
    ],
  },
  games: [
    "スロット（多数の人気スロット、メガウェイズ、ボーナス購入等）",
    "ライブカジノ（Evolution, Pragmatic Play 等）",
    "テーブルゲーム（ブラックジャック、ルーレット、バカラ等）",
    "ゲームショー、クラッシュ、ダイス、ビデオポーカー、ジャックポット",
    "スポーツベット（提供がある場合）",
  ],
  features: [
    "直感的で使いやすいUI・優れたゲーム検索フィルター",
    "登録フリースピン＋4段階ウェルカムが選べる豊富なプロモ",
    "仮想通貨を含む複数の決済手段に対応",
    "モバイル即時プレイに対応（InstantPlay）",
    "多言語サポート（日本語ありだが一部不自然）",
  ],
  security: [
    "ライセンス：Malta Gaming Authority（表記）",
    "運営：Betpoint Group Ltd.（案内）",
    "通信保護：SSL 暗号化を採用",
    "ゲームの公平性：RNG 採用・プロバイダーによる監査",
    "KYC（本人確認）：出金時に書類提出が必要となる場合がある",
  ],
  responsiblePlay: [
    "入金制限、賭け制限、損失制限、セッション制限、自己排除、クールダウン、リアリティチェック、自己評価テストなどのツールを提供",
    "CasinoTsu は責任あるプレイの利用を推奨",
  ],
  complaintStats: [
    "一部で出金遅延やKYCプロセスに関する苦情が報告されている",
    "Trustpilot 等でユーザーレビューがばらつくため、口コミは慎重に参照することを推奨",
  ],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "ボーナス賭け条件が高い（例：50x）ため出金に苦戦する可能性",
    "ボーナス利用時の最大ベット制限（$3）がある",
    "サポートの対応時間や品質に個人差がある",
    "出金・認証の遅延報告が散見される",
  ],
  summary: [
    "Justspin はスロット中心のプレイヤーに向く、使いやすいインターフェースと優れた検索機能を持つカジノです。登録でフリースピンが得られ、4段階のウェルカムオファーで継続的にボーナスを受け取れます。",
    "一方でボーナス条件はやや厳しめ（賭け条件50x等）で、禁止ゲームや最大ベット制限がある点に注意が必要です。出金やKYCのプロセスで遅延が発生する報告もあり、少額で試してから本格利用することを推奨します。",
    "総じて、操作性とゲーム幅は高評価。ボーナス利用に伴う条件面を理解したうえで試す価値のあるカジノです。",
  ],
  extraLinks: [
    {
      text: "Justspin 公式（ボーナスページ）",
      href: "https://go.casino.su/justspin:just-spin?referrer_path=%2Freviews%2Fjust-spin",
    },
    {
      text: "CasinoTsu ボーナスガイド",
      href: "https://www.casino.su/guides/wagering-requirements",
    },
    {
      text: "Cookies Policy",
      href: "https://www.casino.su/about/cookie-policy",
    },
  ],
  faq: [
    {
      question: "Justspin に入金不要ボーナスはありますか？",
      answer:
        "はい。登録で獲得できる入金不要のフリースピン（例：100スピン）が提供される場合があります。地域や時期によって内容が変わるため、登録前に確認してください。",
    },
    {
      question: "Justspin のボーナスの賭け条件はどのくらいですか？",
      answer:
        "ボーナスやフリースピンの勝利金に対する賭け条件は高めの設定（案内例では50倍）が多く見られます。ボーナスごとに条件が異なるため、プロモ規約を必ず確認してください。",
    },
    {
      question: "出金に本人確認（KYC）は必要ですか？",
      answer:
        "はい。出金申請時や高額出金時にはKYCの提出が求められる場合があります。書類準備を事前にしておくとスムーズです。",
    },
    {
      question: "日本語サポートは利用できますか？",
      answer:
        "日本語サポートは提供されていますが、対応時間が不規則だったり、日本語表示に不自然さがある場合があります。チャットやメールでの確認を推奨します。",
    },
  ],
  cta: {
    text: "今すぐJustspinで遊ぶ",
    href: "https://go.casino.su/justspin:just-spin?referrer_path=%2Freviews%2Fjust-spin",
  },
  textBlocks: [],
};
