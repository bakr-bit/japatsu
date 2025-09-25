import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewFreshCasino: ReviewPageContent = {
  hero: {
    title: "Fresh Casino（フレッシュカジノ）レビュー",
    subheading:
      "6,000種類以上のゲーム・豊富なプロモーション。入金不要ボーナスや宝くじも楽しめる仮想通貨対応カジノ",
    description:
      "Fresh Casino は2018年開始の総合型オンラインカジノ。豊富なプロモ、入金不要フリースピン、モバイルアプリと24時間チャットサポートを備え、幅広いプレイヤーに対応します。CasinoTsu がボーナス、入出金、ゲーム、セキュリティを網羅的に解説します。",
    score: 4,
    scoreMax: 5,
    scoreBreakdown: [],
    highlights: [
      "CasinoTsu限定の入金不要フリースピン（50回）など豊富なプロモ",
      "約6,000種類以上（記載では5,700～）のスロットや多彩なゲームラインナップ",
      "MVPライセンス保有（Antillephone 表記）および運営実績あり（2018年）",
      "日本語ライブチャットとメールサポート（年中無休）",
      "モバイルアプリ（Android/iOS）対応",
    ],
    watchouts: [
      "入金不要フリースピンやボーナスの賭け条件は45倍とやや厳しめ",
      "プロモーションや利用規約がやや複雑で分かりにくい箇所がある",
      "サポートは自動翻訳を介した外国人スタッフが中心のため、日本語に不自然さを感じる場合がある",
      "高額出金時や認証時にKYCの提出が必要で処理に時間がかかる場合がある",
    ],
  },
  payments: {
    featured: [
      {
        name: "VISA / MasterCard / JCB",
        icon: "",
        href: "https://casinotsu.com/payment/visa",
        badge: "",
        note: "クレジットカード入金に対応。入金反映は即時〜数時間の場合あり。",
      },
      {
        name: "電子ウォレット（Payz / Vega Wallet / MuchBetter）",
        icon: "",
        href: "https://casinotsu.com/payment",
        badge: "",
        note: "即時〜数時間で入出金可能。利便性が高い決済手段。",
      },
      {
        name: "銀行送金 / 即時銀行振込",
        icon: "",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "",
        note: "ノーマル版は最大$10,000。入金反映は即時〜1営業日、出金は数営業日かかる場合あり。",
      },
      {
        name: "仮想通貨（BTC / USDT / USDC / ETH 等）",
        icon: "",
        href: "https://casinotsu.com/crypto",
        badge: "",
        note: "仮想通貨入金は即時〜数分、出金は通常数時間〜1日程度の処理が案内されている。",
      },
    ],
    deposits: [
      {
        name: "VISA",
        icon: "",
        href: "https://casinotsu.com/payment/visa",
      },
      {
        name: "MasterCard",
        icon: "",
        href: "https://casinotsu.com/payment/mastercard",
      },
      {
        name: "JCB",
        icon: "",
        href: "https://casinotsu.com/payment/jcb",
      },
      {
        name: "銀行送金（ノーマル / 即時）",
        icon: "",
        href: "https://casinotsu.com/payment/bank-transfer",
      },
      {
        name: "Payz / Vega Wallet / MuchBetter / TigerPay",
        icon: "",
        href: "https://casinotsu.com/payment",
      },
      {
        name: "仮想通貨（BTC / USDT / USDC / ETH 等）",
        icon: "",
        href: "https://casinotsu.com/crypto",
      },
    ],
    withdrawals: [
      {
        name: "電子ウォレット（Payz / Vega Wallet 等）",
        icon: "",
        href: "https://casinotsu.com/payment",
      },
      {
        name: "銀行送金",
        icon: "",
        href: "https://casinotsu.com/payment/bank-transfer",
      },
      {
        name: "仮想通貨（BTC / USDT / USDC 等）",
        icon: "",
        href: "https://casinotsu.com/crypto",
      },
    ],
    notes: [
      "最低入金は一般的に¥1,500（約€10相当）から、最低出金は€10（約1,500円）程度の案内がある。",
      "カード・電子決済は即時〜数時間で反映。銀行送金は2時間〜5営業日、仮想通貨は即時〜数時間が目安。",
      "出金は原則として入金に使用した方法へ返金される。新規の出金方法を使うには同方法で最低入金とターンオーバーが必要な場合がある。",
      "高額出金や疑わしい取引時はKYC（身分証明、住所確認、支払い方法証明）の追加提出が求められ、処理に時間がかかることがある。",
    ],
  },
  bonuses: {
    overview:
      "Fresh Casino は入金不要のフリースピンや幅広いウェルカムパッケージ、定期的なキャッシュバックや宝くじ、クエスト／アチーブメントで獲得するボーナスなど、多彩なプロモーションを提供しています。各プロモーションは賭け条件・有効期限・対象ゲームが異なるため、受け取る前に規約を必ず確認してください。",
    noDeposit:
      "CasinoTsu経由の限定オファーとして、入金不要のフリースピン50回などが提供される場合があります（地域・コードにより異なる）。",
    extraSpins: {
      summary:
        "フリースピンは入金不要プロモやウェルカムで合計数十〜数百回配布されることがある。フリースピンはセット分割で付与され、有効期限が設定される。",
      schedule: [
        "CasinoTsu限定：入金不要フリースピン50回（対象スロット指定）",
        "ウェルカム：合計200回分のフリースピン（20回×10セットで段階付与）",
      ],
      warning:
        "フリースピンやボーナスの勝利金には賭け条件（例：45倍）が適用される場合あり。セットごとの有効期限に注意。",
    },
    welcomeRows: [
      {
        depositNumber: "初回入金（選択式）",
        percent: "100%",
        cap: "最大¥60,000相当（案内例）",
        code: "",
      },
      {
        depositNumber: "2回目入金",
        percent: "75%（案内例）",
        cap: "最大¥30,000相当",
        code: "",
      },
    ],
    conditions: [
      "カジノ用ウェルカムの賭け条件の案内例：40〜45倍（ボーナス種類により異なる）。",
      "スポーツブック用の初回入金ボーナスは賭け条件が緩やか（例：10倍）になる場合あり。",
      "フリースピンの勝利金やボーナス資金からの最大出金制限はプロモにより設定される場合がある。",
      "ボーナスは受け取る前にプロモーションページで対象ゲーム・消化率・最大ベット額を確認すること。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "CasinoTsu限定 入金不要フリースピン50回",
      description:
        "CasinoTsu 経由で登録したユーザー向けに入金不要フリースピン50回を付与（対象スロット・地域条件あり）。プロモコードの入力が必要な場合があります。",
      highlight: "登録だけで試せるフリースピン50回（条件あり）",
    },
    {
      title: "選べるウェルカムパッケージ（カジノ／スポーツ選択）",
      description:
        "カジノ用・スポーツ用から選べる初回入金ボーナス。カジノ用は高額だが賭け条件は厳しめ（例：45x）、スポーツ用は条件が軽め（例：10x）。",
      highlight: "プレイスタイルで選べる初回ボーナス",
    },
    {
      title: "毎週キャッシュバック＆宝くじ",
      description:
        "毎週の損失に対するキャッシュバック（最大10%の案内）や、入金で参加できる宝くじで抽選賞金を獲得する機会を提供。",
      highlight: "損失を一部還元するキャッシュバックと宝くじ",
    },
  ],
  facts: [
    {
      label: "名称",
      value: "Fresh Casino",
    },
    {
      label: "ローンチ",
      value: "2018",
    },
    {
      label: "評価点",
      value: "4.0 / 5",
    },
    {
      label: "フリースピン（例）",
      value: "50回（CasinoTsu限定オファー例）",
    },
    {
      label: "ボーナス（例）",
      value: "最大¥150,000（ウェルカム案内、国・通貨により異なる）",
    },
    {
      label: "ライセンス",
      value: "Antillephone（表記）",
    },
    {
      label: "運営会社",
      value: "Galaktika N.V.（案内）",
    },
    {
      label: "ゲーム数",
      value: "約5,700～6,000種類（案内）",
    },
    {
      label: "プロバイダー数",
      value: "40〜127社（プロバイダーによる表記差あり）",
    },
    {
      label: "サポート",
      value:
        "メール: support-en@fresh.casino、24時間ライブチャット（自動翻訳対応）",
    },
  ],
  intro: {
    paragraphs: [
      "CasinoTsuは、ギャンブルの正確さが第一。興奮はその次。Fresh Casino（フレッシュカジノ）について、網羅的に解説します。6,000種類以上のゲーム、豊富なプロモーション、入金不要オファーや宝くじなど、多彩な遊び方が魅力です。",
      "本レビューではライセンス・セキュリティ、ボーナス、入出金、ゲームラインナップ、サポート体制、実際のプレイ感想まで、CasinoTsu がチェック、ダブルチェックした情報をお届けします。",
    ],
    ctas: [
      {
        text: "今すぐボーナスをゲット！",
        href: "https://go.japanesecasino.com/go/fresh-casino:fresh-casino?referrer_path=%2Freviews%2Ffresh-casino",
      },
      {
        text: "詳細を見る（公式レビュー）",
        href: "https://www.japanesecasino.com/reviews/fresh-casino#main-content",
      },
    ],
  },
  games: [
    "スロット（メガウェイズ、ボーナス購入、ホールド＆ウィン等／約5,700種類以上）",
    "ライブカジノ（Evolution、Playtech 等、ライブバカラ、ライブブラックジャック、ルーレット等）",
    "ゲームショー、クラッシュゲーム、ダイス、ビデオポーカー、ビンゴ等のスペシャリティゲーム",
    "スポーツベット（Vスポーツ含む幅広いマーケット）",
    "トーナメント、アチーブメント、クエスト機能による報酬付与",
  ],
  features: [
    "高性能なゲーム検索・フィルターで目的のゲームが探しやすい",
    "CasinoTsu限定の入金不要オファーやクーポンに対応",
    "モバイルアプリ（Android / iOS）およびブラウザ最適化",
    "豊富な決済手段（カード、電子財布、銀行送金、仮想通貨）",
    "VIPプログラム（Fresh Club）で段階的な特典と出金上限の拡張",
  ],
  security: [
    "ライセンス：Antillephone 表記（ライセンス保有の案内）",
    "運営会社：Galaktika N.V.（案内）",
    "通信保護：SSL暗号化採用",
    "ゲームの公平性：RNG採用、第三者監査対象（プロバイダーによる）",
    "KYC：出金時や高額出金で本人確認書類の提出が必要（不正防止のため）",
  ],
  responsiblePlay: [
    "入金制限（Deposit Limits）",
    "賭け金制限（Wager Limits）",
    "損失制限（Loss Limits）",
    "セッション制限／リアリティチェック（Reality Check）",
    "自己排除（Self-Exclusion）",
    "クールダウン／タイムアウト",
    "自己評価テスト（Self-Assessment）",
    "出金ロック（Withdrawal Lock）",
  ],
  complaintStats: [
    "一部でアカウント認証や書類認証が遅れるケースの報告あり",
    "プロモ／ボーナス条件に関する問い合わせが多く、規約の見やすさに改善の余地あり",
  ],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "ボーナス規約や消化率が複雑で分かりにくい点がある",
    "サポートが自動翻訳ベースの対応のため日本語表現に不自然さが残る場合がある",
    "高額出金時にKYCが発生し、処理に時間がかかることがある",
    "プロモーション適用条件が地域やコードによって異なる点に注意",
  ],
  summary: [
    "Fresh Casino は豊富なゲームラインナップ（数千種類）と多彩なプロモーションを提供する総合型カジノです。CasinoTsu限定の入金不要フリースピンや大型ウェルカム、宝くじ・クエスト・フォーチュンホイール等、遊び方が多彩なのが魅力です。",
    "MGA/Antillephone 系のライセンス表記やGalaktika N.V. の運営情報があり、セキュリティ面・公平性の基盤は整っていますが、プロモ規約の複雑さやKYC処理の遅延報告には注意が必要です。",
    "初めての方はCasinoTsu限定の入金不要オファーや小額で試し、ボーナス規約と出金ルールを確認した上で利用することを推奨します。",
  ],
  extraLinks: [
    {
      text: "Fresh Casino 公式（CasinoTsu経由）",
      href: "https://go.japanesecasino.com/go/fresh-casino:fresh-casino?referrer_path=%2Freviews%2Ffresh-casino",
    },
    {
      text: "Fresh Casino 限定オファー詳細",
      href: "https://casinotsu.com/offers/fresh-casino-exclusive",
    },
    {
      text: "CasinoTsu 入出金方法解説",
      href: "https://casinotsu.com/payment",
    },
    {
      text: "Cookies Policy",
      href: "https://casinotsu.com/about/cookie-policy",
    },
  ],
  faq: [
    {
      question: "Fresh Casino ではスポーツブックで遊べますか？",
      answer:
        "はい。Fresh Casino はスポーツブックを提供しており、Vスポーツなど幅広いマーケットでベットが可能です。",
    },
    {
      question: "入金不要フリースピンはどうやって受け取れますか？",
      answer:
        "CasinoTsu 経由で登録し、プロモコード（例：JAPACASI50FS 等）を入力すると、地域条件に応じた入金不要フリースピン50回が付与される場合があります。条件は地域やコードにより異なるので受取前に必ず確認してください。",
    },
    {
      question: "本人確認（KYC）は必要ですか？",
      answer:
        "出金時や高額出金時にはKYC（身分証明書・住所確認・支払い方法の証明など）の提出が求められます。通常の認証は0〜2日程度で完了する案内ですが、ケースにより処理が長引くことがあります。",
    },
    {
      question: "ボーナスの賭け条件はどれくらいですか？",
      answer:
        "ボーナスによって異なりますが、案内例では入金不要フリースピンや一部ウェルカムで45倍、カジノ用の一般的なウェルカムは40〜45倍程度の設定が多く見られます。スポーツ用ボーナスは10倍など緩めの条件のこともあります。",
    },
  ],
  cta: {
    text: "今すぐFresh Casinoで遊ぶ",
    href: "https://go.japanesecasino.com/go/fresh-casino:fresh-casino?referrer_path=%2Freviews%2Ffresh-casino",
  },
  textBlocks: [],
};
