import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewBetpanda: ReviewPageContent = {
  hero: {
    title: "Betpanda（ベットパンダ）レビュー",
    subheading:
      "匿名で安全に遊べるクリプトオンラインカジノ — メールとパスワードだけで登録OK",
    description:
      "Betpanda はメールアドレスとパスワードのみで簡単登録できる仮想通貨特化型カジノです。13種類以上の暗号通貨対応、豊富なゲームと魅力的なプロモで注目されています。本レビューでは安全性、ボーナス、入出金、ゲーム、サポート、評判まで CasinoTsu が詳しく解説します。",
    score: 3.7,
    scoreMax: 5,
    scoreBreakdown: [],
    highlights: [
      "匿名登録（メール＋パスワード）で手軽に始められる",
      "仮想通貨13種以上に対応、入出金が高速",
      "豊富なゲーム（スロット、ライブ、クラッシュ、スポーツ等）",
      "CasinoTsu限定：入金でキャッシュスピン50回（賭け条件なし）",
      "最大1 BTC のウェルカムボーナス（受取条件あり）",
    ],
    watchouts: [
      "ユーザー報告にアカウント停止や出金トラブルのケースあり",
      "高い賭け条件（初回入金ボーナス80倍）と利用制限がある",
      "ライセンス情報に不明瞭な点（コスタリカ運営、一部情報でキプロスと記載）",
      "高額出金時にKYCを求められ、手続きが煩雑になる可能性あり",
    ],
  },
  payments: {
    featured: [
      {
        name: "仮想通貨入出金",
        icon: "",
        href: "",
        badge: "",
        note: "Bitcoin / Ethereum / USDT 等、13種類以上に対応。入金・出金ともにネットワーク状況で数分～数十分の着金。",
      },
      {
        name: "サイト内法定通貨購入（未提供）",
        icon: "",
        href: "",
        badge: "",
        note: "サイト内で法定通貨→仮想通貨購入機能は現時点で提供されていません。外部取引所で仮想通貨を用意してください。",
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
        name: "Litecoin (LTC)",
        icon: "",
        href: "",
      },
      {
        name: "Binance Coin (BNB)",
        icon: "",
        href: "",
      },
      {
        name: "Tether (USDT ERC20/TRC20)",
        icon: "",
        href: "",
      },
      {
        name: "Ripple (XRP)",
        icon: "",
        href: "",
      },
      {
        name: "Dogecoin (DOGE)",
        icon: "",
        href: "",
      },
      {
        name: "TRON (TRX)",
        icon: "",
        href: "",
      },
      {
        name: "Shiba Inu (SHIB)",
        icon: "",
        href: "",
      },
      {
        name: "The Sandbox (SAND ERC20)",
        icon: "",
        href: "",
      },
      {
        name: "USD Coin (USDC)",
        icon: "",
        href: "",
      },
      {
        name: "Solana (SOL)",
        icon: "",
        href: "",
      },
      {
        name: "Toncoin (TON)",
        icon: "",
        href: "",
      },
    ],
    withdrawals: [
      {
        name: "仮想通貨（上記と同様）",
        icon: "",
        href: "",
      },
    ],
    notes: [
      "最低入金額の明確な設定はない（ただしネットワーク手数料を考慮する必要あり）。",
      "最低出金額：BTC換算で0.0001 BTC、USDT換算で1 USDT 程度（案内値）。",
      "出金上限：1日 €5,000、1週 €15,000、1ヶ月 €45,000（目安）。",
      "入出金の速度は使用する通貨とネットワーク状況に依存。平均出金は高速（～5分の例あり）が、遅延は発生し得る。",
      "サイト内での仮想通貨購入機能は現時点で提供されていないとの回答あり。",
    ],
  },
  bonuses: {
    overview:
      "Betpanda は大きな初回入金ボーナス（最大1 BTC）や週次キャッシュバック、トーナメント、VIP特典など多彩なプロモーションを提供します。CasinoTsu限定の『賭け条件なし』キャッシュスピンも実施中（条件あり）。",
    noDeposit:
      "現時点では恒常的な入金不要ボーナスは提供されていません（過去に登録特典が出ることはあり）。",
    extraSpins: {
      summary:
        "CasinoTsu限定：初回入金 €20以上で『Fire in the Hole 2』のフリースピン50回（キャッシュスピン＝賭け条件なし）。初回入金ボーナスと併用可能。",
      schedule: [
        "CasinoTsu限定：€20以上入金で Fire in the Hole 2 のフリースピン50回（キャッシュスピン、賭け条件なし）",
      ],
      warning:
        "フリースピンの受取や適用条件はプロモ規約に従う。限定オファーの適用にはCasinoTsu経由での登録・入金が必要です。",
    },
    welcomeRows: [
      {
        depositNumber: "初回入金",
        percent: "100%",
        cap: "1 BTC",
        code: "",
      },
    ],
    conditions: [
      "初回入金ボーナスの賭け条件：入金額の80倍（受取後7日以内に消化が必要）。",
      "賭け条件消化時の最大ベット額：$10（ベット上限あり）。",
      "賭け条件の消化率はゲーム毎に異なるため事前に規約を要確認。",
      "キャッシュスピン（CasinoTsu限定）は勝利金に賭け条件がない（条件付きの提供）。",
      "キャッシュバック（週次）は有効化条件やXP要求がある（詳細はプロモ規約参照）。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "CasinoTsu限定：入金でキャッシュスピン50回（賭け条件なし）",
      description:
        "CasinoTsu 経由で登録し €20 以上入金すると、Nolimit City『Fire in the Hole 2』のフリースピン50回をキャッシュスピンとして付与（賭け条件なし）。",
      highlight: "賭け条件なしのキャッシュスピン（CasinoTsu限定）",
    },
    {
      title: "初回入金ボーナス 最大1 BTC",
      description:
        "初回入金100%ボーナス。最大1 BTC。ボーナス受取後、入金額の80倍を7日以内に消化する必要あり。賭け条件達成後はボーナス自体に賭け条件はないため、条件達成後は即出金可能。",
      highlight: "最大1 BTC の大型ウェルカム（80x 条件）",
    },
    {
      title: "週次キャッシュバック（10%）",
      description:
        "純損失の10%を週次でキャッシュバック。計算期間は水曜21:00～翌週水曜21:00。キャッシュバック有効化にはXPとベット回数など条件あり。",
      highlight: "週次10%キャッシュバック（条件あり）",
    },
  ],
  facts: [
    {
      label: "リリース年",
      value: "2023年",
    },
    {
      label: "評価点",
      value: "3.7 / 5",
    },
    {
      label: "ウェルカムボーナス（要約）",
      value: "初回100% 最大1 BTC（賭け条件：入金額の80倍、7日以内）",
    },
    {
      label: "限定オファー",
      value: "CasinoTsu限定フリースピン50回（賭け条件なし、€20以上入金）",
    },
    {
      label: "対応通貨",
      value:
        "仮想通貨13種類以上（BTC, ETH, USDT, USDC, LTC, BNB, XRP, DOGE, TRX, SHIB, SAND, SOL, TON 等）",
    },
    {
      label: "運営会社",
      value: "Star Bright Media S.R.L.",
    },
    {
      label: "ライセンス",
      value:
        "コスタリカ法に基づく運営（ただし一部情報でキプロス等の表記が見られるため要確認）",
    },
    {
      label: "プロバイダー数",
      value: "70社以上",
    },
    {
      label: "サポート",
      value:
        "日本語対応24時間（ライブチャット平均応答3分、メール support@betpanda.io）",
    },
    {
      label: "登録方法",
      value: "メールアドレス＋パスワード（匿名登録）",
    },
  ],
  intro: {
    paragraphs: [
      "Betpanda（ベットパンダ）は、メールアドレスとパスワードのみで簡単に登録できる匿名性の高い仮想通貨特化カジノです。まだ知名度は低いものの、豊富なゲーム数や魅力的なキャンペーンで今後の成長が期待されています。",
      "本レビューでは、Betpanda の安全性、ボーナス、登録方法、入出金、ゲーム、カスタマーサポート、ユーザー評判まで CasinoTsu が徹底解説します。",
    ],
    ctas: [
      {
        text: "今すぐプレイ！",
        href: "https://go.japanesecasino.com/go/betpanda:betpanda?referrer_path=%2Freviews%2Fbetpanda",
      },
      {
        text: "限定フリスピをGET",
        href: "https://go.japanesecasino.com/go/betpanda",
      },
    ],
  },
  games: [
    "スロット（グリッド、ホールド＆ウィン、ボーナス購入、メガウェイズ等）",
    "ライブカジノ（ライブバカラ、ライブブラックジャック、ライブルーレット等）",
    "クラッシュゲーム（Aviator等）、ダイス、Plinko、ビデオポーカー、ビンゴ等のスペシャリティゲーム",
    "スポーツベット（主要競技＋eスポーツをカバー）",
    "オリジナルゲーム（サイト内検索で発見できる限定タイトルあり）",
  ],
  features: [
    "匿名登録（メール＋パスワード）",
    "仮想通貨13種類以上対応",
    "豪華なウェルカム（最大1 BTC）と週次キャッシュバック",
    "VIPプログラム（Path of the Panda、XPで昇格）",
    "70社以上のゲームプロバイダー導入",
    "モバイルブラウザで快適にプレイ可能（アプリは公式発表なし）",
  ],
  security: [
    "運営：Star Bright Media S.R.L.（コスタリカ拠点として記載）",
    "ライセンス表記：コスタリカ（運営国表記）。一部情報でキプロス表記が見られるため確認が必要",
    "ゲームの公平性：RNG採用、オリジナルゲームにProvably Fair技術を導入",
    "通信・データ保護：SSL 暗号化を導入",
  ],
  responsiblePlay: [
    "利用規約内に責任あるギャンブル関連の記載あり（英語表記）",
    "自己規制ツール（入金制限、ロス制限、セッション制限など）は利用可能だが機能は限定的との指摘あり",
    "高額勝利時にはKYCが必要となる場合があり、事前にルールを確認することを推奨",
  ],
  complaintStats: [
    "Trustpilot（参考・英語圏）: 平均 3.4 / 5（約875件のレビューの例）",
    "AskGamblers: プレイヤー評価 5.6 / 10（21件のレビューの例）",
    "オンライン上での苦情：アカウント停止、出金遅延／拒否、KYCに関する不満が散見される",
  ],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "勝利後にアカウント停止・出金拒否・勝利金の没収が報告されている",
    "高額出金時にKYC（本人確認）を要求され、手続きが煩雑または結果的に出金できないケースの報告あり",
    "初回ボーナスの賭け条件（80倍）が高く、実際にボーナスを利用しにくいとの声",
    "一部レビューに“宣伝目的のポジティブコメント”が混在している疑い",
    "責任あるギャンブル対応やサポート品質にばらつきがある",
  ],
  summary: [
    "Betpanda は匿名性を重視するクリプトカジノとして魅力的な側面が多く、簡単登録、高速な仮想通貨入出金、豊富なゲーム、そして最大1 BTC のウェルカムボーナスやCasinoTsu限定の賭け条件なしフリースピンなど注目点が揃っています。",
    "一方で、ライセンス表記のわかりにくさ、ユーザー報告にあるアカウント停止や出金トラブル、初回ボーナスの高い賭け条件（80倍）などのリスクも確認されています。",
    "利用を検討する際は、自己責任のもとで小額から試し、出金ルールやKYC要件、プロモ規約を事前に十分確認することを強く推奨します。",
  ],
  extraLinks: [
    {
      text: "Betpanda 公式（CasinoTsu経由）",
      href: "https://go.japanesecasino.com/go/betpanda:betpanda?referrer_path=%2Freviews%2Fbetpanda",
    },
    {
      text: "Betpanda 限定オファー詳細",
      href: "https://www.japanesecasino.com/offers/betpanda-exclusive",
    },
    {
      text: "仮想通貨オンラインカジノ ガイド",
      href: "https://casinotsu.com/crypto",
    },
    {
      text: "Cookies Policy",
      href: "https://casinotsu.com/about/cookie-policy",
    },
  ],
  faq: [
    {
      question: "Betpanda は仮想通貨がなくても遊べますか？",
      answer:
        "いいえ。Betpanda は仮想通貨特化型カジノです。事前に外部取引所等で仮想通貨を用意してから入金してください。サイト内での通貨購入機能は現時点で提供されていません。",
    },
    {
      question: "Betpanda のカスタマーサポートは日本語対応ですか？",
      answer:
        "はい。ライブチャットは24時間日本語対応で、平均応答は数分（報告では平均3分）。ただし、応答品質や問題解決にはばらつきがあるとのユーザー報告があります。",
    },
    {
      question: "初回入金ボーナスの条件は？",
      answer:
        "初回入金100%最大1 BTC。ボーナス受取後は入金額の80倍を7日以内に消化する必要があります。賭け条件消化時の最大ベットは$10等の制限があるため、利用前に利用規約を確認してください。",
    },
    {
      question: "CasinoTsu限定のフリースピンはどうやって受け取れますか？",
      answer:
        "CasinoTsu 経由で登録し、€20以上入金すると Nolimit City の『Fire in the Hole 2』のフリースピン50回をキャッシュスピン（賭け条件なし）として受け取れます。適用条件はプロモ規約をご確認ください。",
    },
    {
      question: "高額勝利で出金する場合、注意点はありますか？",
      answer:
        "高額出金時はKYC（本人確認）を求められる可能性が高く、提出書類の確認や手続きに時間を要する場合があります。アカウント停止や出金拒否の報告もあるため、小額から試してルールを確認することを勧めます。",
    },
  ],
  cta: {
    text: "Betpanda で遊ぶ",
    href: "https://go.japanesecasino.com/go/betpanda:betpanda?referrer_path=%2Freviews%2Fbetpanda",
  },
  textBlocks: [],
};
