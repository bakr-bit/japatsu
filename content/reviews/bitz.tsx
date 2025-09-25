import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewBitz: ReviewPageContent = {
  hero: {
    title: "Betswap（ベットスワップ）レビュー",
    subheading: "個人間ベットと仮想通貨特化の次世代カジノプラットフォーム",
    description:
      "ベットスワップは仮想通貨専用の新世代カジノ。個人間でオッズ設定・ベットが可能なスポーツベットや、数千種類のカジノゲームを提供します。本レビューではライセンス、安全性、ボーナス、入出金、ゲーム、サポート、評判まで CasinoTsu が詳しく解説します。",
    score: 3.4,
    scoreMax: 5,
    scoreBreakdown: [],
    highlights: [
      "個人間ベット（分散型・オッズ設定可能）の次世代スポーツベットを提供",
      "仮想通貨対応・独自トークン BSGG を保有している点が特徴",
      "豊富なゲーム数（約3,500〜4,700種）と多数プロバイダー導入",
      "24時間ライブチャットとメールサポートを提供（日本語対応ありの案内）",
      "仮想通貨ベースの豪華ウェルカムボーナス（最大360%＋220,000USDTの案内）",
    ],
    watchouts: [
      "出金失敗・遅延・アカウント凍結など出金トラブルの報告が複数ある",
      "出金時に追加認証や追加デポジットを要求されるケースが報告されている",
      "一部レビューや AskGamblers によるブラックリスト掲載など信頼性に関する懸念",
      "決済手段は仮想通貨中心で、法定通貨の利用は制限や条件が多い",
    ],
  },
  payments: {
    featured: [
      {
        name: "仮想通貨（USDT, ETH, TRX, USDC, BNB, BTC 等）",
        icon: "",
        href: "",
        badge: "",
        note: "仮想通貨入出金が中心。入金は比較的早く、出金はネットワーク状況で数分〜数時間を想定。",
      },
      {
        name: "クレジットカード（Visa / MasterCard）",
        icon: "",
        href: "",
        badge: "",
        note: "カードは法定→仮想通貨購入経由での入金手段として利用可能（提供方法により手数料・条件あり）。",
      },
      {
        name: "電子決済 / on-ramp サービス（MoonPay, Simplex, PayPal など）",
        icon: "",
        href: "",
        badge: "",
        note: "多数のオンランプを通じて仮想通貨購入が可能。国や手段により利用可否が異なる。",
      },
    ],
    deposits: [
      {
        name: "USDT (ERC20/TRC20等)",
        icon: "",
        href: "",
      },
      {
        name: "ETH",
        icon: "",
        href: "",
      },
      {
        name: "TRX",
        icon: "",
        href: "",
      },
      {
        name: "USDC",
        icon: "",
        href: "",
      },
      {
        name: "BNB / BUSD",
        icon: "",
        href: "",
      },
      {
        name: "BTC / LTC / MATIC / DAI",
        icon: "",
        href: "",
      },
      {
        name: "クレジットカード（仮想通貨購入経由）",
        icon: "",
        href: "",
      },
      {
        name: "各種オンランプ（MoonPay, Simplex 等）",
        icon: "",
        href: "",
      },
    ],
    withdrawals: [
      {
        name: "仮想通貨（USDT メイン、ETH, TRX 等）",
        icon: "",
        href: "",
      },
      {
        name: "フィアット出金（制限あり・追加認証の可能性あり）",
        icon: "",
        href: "",
      },
      {
        name: "電子決済（利用可の場合あり）",
        icon: "",
        href: "",
      },
    ],
    notes: [
      "入出金は基本的に仮想通貨中心。平均入金着金は約20〜30分、出金はネットワーク状況等で約1〜5時間の目安（通貨とネットワークで変動）。",
      "最低入金例：$10相当（案内値）。出金上限や手数料はアカウントや選択手段で異なる可能性がある。",
      "一部出金方法では追加認証（KYC）や追加デポジットが求められる報告あり。出金前にルールを確認すること。",
      "AstroPay は日本向けには利用不可（日本からの利用制限あり）。",
    ],
  },
  bonuses: {
    overview:
      "ベットスワップは仮想通貨で受け取れる大型のウェルカムボーナスや多数のプロモを用意。分配された複数回入金で進呈されるウェルカムや、トーナメント、各種スポーツベット特典が魅力です。",
    noDeposit:
      "恒常的な入金不要ボーナスの案内はないが、特定プロモで登録特典が出ることがある。",
    extraSpins: {
      summary: "",
      schedule: [],
      warning: "",
    },
    welcomeRows: [
      {
        depositNumber: "初回入金",
        percent: "180%",
        cap: "最大20,000 USDT（初回）",
        code: "",
      },
      {
        depositNumber: "2回目以降（合計）",
        percent: "残りで最大360%に到達",
        cap: "総額最大220,000 USDT（案内）",
        code: "",
      },
    ],
    conditions: [
      "ウェルカムボーナスは分離型で賭け条件40倍（ボーナス資金に対して）",
      "ボーナスはスロットおよびクラッシュゲームのみで有効",
      "最大ベット額に制限（例：2 USDT 等）があるため、利用前に必ず規約を確認すること",
      "賭け条件を満たす前に出金すると、ボーナスおよびそこからの勝利金は没収される",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "最大360%＋220,000USDT のウェルカム（分配）",
      description:
        "初回入金180%（最大20,000USDT）を含む、初回〜4回目まで分割して進呈される大型ウェルカムオファー。賭け条件40倍の分離型。",
      highlight: "複数回入金で大口ボーナスを獲得可能（条件あり）",
    },
    {
      title: "Pragmatic Play Daily Wins Tournament",
      description:
        "Pragmatic Play による大規模トーナメント等、プロバイダー連動の大会を随時開催。",
      highlight: "高額賞金トーナメント",
    },
    {
      title: "スポーツベット向け特典（オッズブーストなど）",
      description:
        "チャンピオンズリーグ等の主要イベントやアキュムレーターベット向けのブーストやボーナスが用意されることがある。",
      highlight: "スポーツ特化の追加特典",
    },
  ],
  facts: [
    {
      label: "ローンチ",
      value: "2023",
    },
    {
      label: "評価点",
      value: "3.4 / 5",
    },
    {
      label: "ウェルカムボーナス（要約）",
      value:
        "初回180%（最大20,000USDT）／総合で最大360%＋220,000USDT（賭け条件40倍、分離型）",
    },
    {
      label: "対応通貨",
      value: "USDT, ETH, TRX, USDC, BNB, BTC, LTC, MATIC, DAI 等（複数）",
    },
    {
      label: "運営会社",
      value: "BSGG Labs NV",
    },
    {
      label: "ライセンス",
      value: "Gaming Curaçao（キュラソー）",
    },
    {
      label: "ゲーム数",
      value: "約3,500〜4,700種類（案内）",
    },
    {
      label: "プロバイダー数",
      value: "60社以上（Pragmatic Play, Evolution, Playtech 等含む）",
    },
    {
      label: "サポート",
      value:
        "メール：support@betswap.gg、24時間ライブチャット（日本語対応が案内されている）",
    },
    {
      label: "独自トークン",
      value: "BSGG トークン（プラットフォーム独自）",
    },
  ],
  intro: {
    paragraphs: [
      "CasinoTsu では、カジノ体験の向上を目指し、情報の正確性を第一に考えております。これからご紹介する『ベットスワップ（Betswap）』についても、CasinoTsu による詳細なレビューをご覧ください。",
      "ベットスワップは仮想通貨特化の新世代カジノで、個人間ベット（分散型）や多彩なカジノゲームを提供します。本レビューではライセンス・安全性・ボーナス・入出金・ゲーム・サポート・評判を網羅します。",
    ],
    ctas: [
      {
        text: "今すぐプレイ！",
        href: "https://go.japanesecasino.com/go/betswap:betswap?referrer_path=%2Freviews%2Fbetswap",
      },
      {
        text: "詳細を見る（公式レビュー）",
        href: "https://www.japanesecasino.com/reviews/betswap",
      },
    ],
  },
  games: [
    "スロット（新作・メガウェイズ・ボーナス購入等）",
    "ライブカジノ（ライブルーレット、ライブバカラ、ライブブラックジャック、ゲームショー等）",
    "クラッシュゲーム、ダイス、Plinko、ビデオポーカー、ビンゴ等のスペシャリティゲーム",
    "分散型（個人間）スポーツベット：ユーザー間でオッズ設定やベットが可能",
    "プロバイダー提供の多数タイトル（Pragmatic Play, Evolution, Playtech 等）",
  ],
  features: [
    "個人間でオッズ設定が可能な分散型スポーツベット（ベットエクスチェンジ風）",
    "仮想通貨中心の入出金と独自トークン BSGG の導入",
    "大規模なウェルカムとプロモーション（仮想通貨ベース）",
    "多数プロバイダー導入でゲームの多様性が高い",
    "モバイルブラウザに最適化された操作性（アプリは未案内）",
  ],
  security: [
    "ライセンス：Gaming Curaçao（キュラソー）を保有と案内",
    "運営：BSGG Labs NV（キュラソー拠点）",
    "ゲームの公平性：RNG採用、Provably Fair を導入するゲームあり",
    "通信・データ保護：SSL暗号化等の実装が案内されている",
  ],
  responsiblePlay: [
    "公式サイトに責任あるギャンブルの案内あり（自己排除等の仕組みを用意）",
    "自己排除や入金制限はサポート経由での設定が可能（報告により機能にばらつきの指摘あり）",
    "CasinoTsu は自己責任での利用と、プレイ前の制限設定を推奨",
  ],
  complaintStats: [
    "Trustpilot 等の評価は低〜中程度の意見あり（例：Trustpilot 2.4/5 の記載あり）",
    "Casino.Guru 等では比較的高い安全指数を示す評価もあり（例：8.1/10）",
    "オンライン上の苦情：出金失敗・遅延、アカウント凍結、追加認証や追加デポジット要求の報告が多数",
  ],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "出金失敗、出金遅延、勝利金の保留、アカウント凍結など深刻な出金トラブルの報告が多数ある",
    "出金時に追加認証や追加デポジットを要求されるケースが報告されている",
    "AskGamblers によるブラックリスト掲載の報告（非倫理的なアフィリエイト取引の指摘）",
    "サポート対応や応答時間にばらつきがあるため、問題解決に時間を要する可能性がある",
  ],
  summary: [
    "Betswap は革新的な個人間ベット機能と仮想通貨中心のプラットフォーム、そして大量のカジノゲームを揃えた次世代型カジノです。独自トークン BSGG を保有し、資産運用的な側面も持つ点がユニークです。",
    "一方で、ユーザーからの出金トラブル報告（遅延・失敗・追加認証要求）や、AskGamblers の指摘など信頼性に関する懸念も散見されます。利用検討時は少額から試し、利用規約・出金ルール・KYC要件を事前に確認することを推奨します。",
    "総合的に見ると可能性の高い新興プラットフォームですが、リスク管理を徹底してから利用するのが賢明です。",
  ],
  extraLinks: [
    {
      text: "Betswap 公式（CasinoTsu経由）",
      href: "https://go.japanesecasino.com/go/betswap:betswap?referrer_path=%2Freviews%2Fbetswap",
    },
    {
      text: "Betswap レビュー（詳細）",
      href: "https://www.japanesecasino.com/reviews/betswap",
    },
    {
      text: "Gaming Curaçao（ライセンス解説）",
      href: "/info/casino-license",
    },
    {
      text: "仮想通貨カジノ ガイド",
      href: "/crypto",
    },
    {
      text: "Cookies Policy",
      href: "/about/cookie-policy",
    },
  ],
  faq: [
    {
      question: "BSGGとは何ですか？",
      answer:
        "BSGGトークンはベットスワップが管理する独自の仮想通貨トークンです。プラットフォーム内の報酬や特典、資産運用的な用途で利用されます。",
    },
    {
      question: "ベットスワップのウェルカムボーナスの受け取り方法は？",
      answer:
        "ジャパカジ経由で登録後、初回入金を行うと初回180％ボーナス（最大20,000USDT）が付与され、2回目以降の入金で残りのボーナスが進呈されます。賭け条件は分離型で40倍など厳しめの条件があるため、規約を必ず確認してください。",
    },
    {
      question: "出金に関する注意点はありますか？",
      answer:
        "複数のユーザー報告で出金失敗・遅延・追加認証や追加デポジットの要求などが報告されています。出金前にKYC要件や手数料・対応通貨を確認し、まずは少額で試すことを推奨します。",
    },
    {
      question:
        "ベットスワップのカスタマーサポートは日本語で対応していますか？",
      answer:
        "公式案内では24時間ライブチャット・メールでのサポートがあり、日本語対応されるケースがあるとされています。ただし応答品質や言語対応は状況によって異なるため、実際のやり取りで確認してください。",
    },
  ],
  cta: {
    text: "Betswap を試してみる",
    href: "https://go.japanesecasino.com/go/betswap:betswap?referrer_path=%2Freviews%2Fbetswap",
  },
  textBlocks: [],
};
