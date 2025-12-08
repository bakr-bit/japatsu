import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewRoyalVegas: ReviewPageContent = {
  hero: {
    title: "Royal Vegas（ロイヤルベガス）レビュー",
    subheading: "最大$1,200ウェルカム（※日本市場は2024年春に撤退）",
    description:
      "CasinoTsuがロイヤルベガスを徹底検証。日本市場撤退の重要告知、評価スコア、ボーナス条件、対応決済、サポート体制、ゲーム提供会社、注意点まで“情報を一切省略せず”まとめました。",
    score: 3.4,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 63,
        note:
          "日本での認知度は高くない一方、「フォーチュンラウンジ」運営の信頼感は評価材料。",
      },
      {
        label: "規約",
        percent: 73,
        note:
          "入金不要は非対応。最大$1,200のウェルカムは魅力だが、ボーナスにより賭け条件が最大70倍。",
      },
      {
        label: "操作性",
        percent: 64,
        note:
          "PC/スマホ/タブレットに最適化。主要な入出金手段は一通り揃う。",
      },
      {
        label: "サポート",
        percent: 77,
        note:
          "日本語は15:00–24:00（平日のみ）で丁寧。時間外は英語24時間（翻訳経由対応あり）。",
      },
    ],
    highlights: [
      "合計$1,200のウェルカムボーナス（100%×4回／各最大$300）",
      "フォーチュンラウンジ運営・eCOGRA認定で公正性と安全性を担保",
      "500種類以上（ログイン後は1000種類以上）の豊富なゲーム",
      "128ビットSSL暗号化／RNG管理／資金の分別管理",
    ],
    watchouts: [
      "日本市場は2024年春に撤退（新規登録・ボーナス提供終了）",
      "一部ボーナスで賭け条件70倍と厳しめ",
      "Trustpilot「Poor」2.7/5や出金遅延・KYCの複雑さに関する苦情",
    ],
  },

  // 重要告知（日本撤退）

  payments: {
    featured: [
      { name: "銀行送金", icon: "/assets/payments/bank-transfer.svg", href: "https://casinotsu.com/payment/bank-transfer" },
      { name: "VISA", icon: "/assets/payments/visa.svg", href: "https://casinotsu.com/payment/visa" },
      { name: "MasterCard", icon: "/assets/payments/mastercard.svg", href: "https://casinotsu.com/payment/mastercard" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg", href: "https://casinotsu.com/payment/muchbetter" },
      { name: "JCB", icon: "/assets/payments/jcb.svg", href: "https://casinotsu.com/payment/jcb" },
      { name: "Bitcoin" },
      { name: "Ethereum" },
      { name: "Litecoin" },
      { name: "Ripple" },
      { name: "J-Pay" },
    ],
    deposits: [
      // クレジット/デビット
      { name: "VISA", icon: "/assets/payments/visa.svg", href: "https://casinotsu.com/payment/visa" },
      { name: "MasterCard", icon: "/assets/payments/mastercard.svg", href: "https://casinotsu.com/payment/mastercard" },
      { name: "Maestro" },
      { name: "VISA Electron" },
      { name: "American Express" },
      { name: "Diners Club" },
      // eWallet / 仮想通貨
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "Skrill" },
      { name: "Neteller" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg", href: "https://casinotsu.com/payment/muchbetter" },
      { name: "EcoCard" },
      { name: "Apple Pay" },
      { name: "Tether (USDT)" },
      { name: "USD Coin (USDC)" },
      { name: "MiFinity" },
      // 銀行・その他
      { name: "Bank Transfer", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Interac" },
      { name: "iDebit" },
      { name: "Instadebit" },
      { name: "Echeck" },
      { name: "Sofort" },
      { name: "Trustly" },
      { name: "Neosurf" },
      { name: "PaysafeCard" },
      { name: "Flexepin" },
      { name: "AstroPay Pre-Paid Card" },
      { name: "Solo" },
      { name: "Switch" },
      { name: "Entropay" },
      { name: "WebMoney" },
    ],
    withdrawals: [
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "Skrill" },
      { name: "Neteller" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg", href: "https://casinotsu.com/payment/muchbetter" },
      { name: "EcoCard" },
      { name: "MiFinity" },
      { name: "Bank Transfer", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Interac" },
      { name: "iDebit" },
      { name: "Instadebit" },
      { name: "Echeck" },
      { name: "Trustly" },
      { name: "Tether (USDT)" },
      { name: "USD Coin (USDC)" },
    ],
    notes: [
      "最低入金額: $10（1,000円）／最低出金額: $50（5,000円）。",
      "【驚異の4時間以内出金サービス（条件あり）】対象: 登録住所が日本・Payz口座への出金・平日15:00–20:00（日本時間）に申請。銀行営業日のみ有効。初回出金はKYCにより時間増。",
      "出金限度額: 毎週 €4,000 / C$4,000 / £5,000 / $10,000（獲得賞金が購入額の5倍以上の場合）、毎月 €16,000。超過分は口座に返金され7日後に再出金可能。",
      "対応通貨: EUR, USD, GBP, ARS, BRL, CAD, CLP, INR, JPY, MXN, NZD, PEN, PLN, SEK, THB, AUD, CHF, DKK, NOK, MUR, NAD, NGN, RUB（全22種）。",
    ],
  },

  bonuses: {
    overview:
      "ロイヤルベガスはウェルカム最大$1,200（100%×4回）が目玉。入金不要は原則なしだが、時期によっては限定的なフリースピンやボーナスホイール、季節トーナメント等の企画が実施されていました（日本市場撤退に伴い提供状況は変動）。",
    noDeposit:
      "（一例）クラシックセブン向けフリースピン50回（€0.2/回、総額€10相当）が案内されていた時期あり。",
    extraSpins: {
      summary:
        "ボーナスホイール（4時間ごと）や季節イベントで追加スピン・キャッシュプレゼントが実施されることがありました。",
      schedule: [
        "ボーナスホイール: 4時間おきに回せる形式（開催時）",
        "季節限定トーナメント: 期間内の参加でボーナスや賞金の獲得機会",
      ],
      warning:
        "ボーナスごとに賭け条件や有効期限が異なります。プレイ前に公式サイトの最新規約をご確認ください。",
    },
    welcomeRows: [
      { depositNumber: "1回目", percent: "100%", cap: "$300", code : "" },
      { depositNumber: "2回目", percent: "100%", cap: "$300", code : "" },
      { depositNumber: "3回目", percent: "100%", cap: "$300", code: ""},
      { depositNumber: "4回目", percent: "100%", cap: "$300", code: "" },
    ],
    conditions: [
      "一般的な表記として賭け条件40倍の案内がある一方、ウェルカム等一部ボーナスは70倍（70x）の最低プレイスルーが明記。",
      "ボーナスは条件達成前に出金不可。ボーナス残高からキャッシュ残高へは条件充足後に移行。",
      "ゲームごとに賭け条件への換算率が異なる（下記「計上率」参照）。",
      "規約や提供内容は変更される場合あり。必ず最新の公式情報を確認のこと。",
    ],
    prohibitedGames: [
      "バカラ（全種）",
      "クラップス（全種）",
      "Red Dog",
      "Sic Bo",
      "プログレッシブジャックポット（賭け条件計上0%）",
    ],
  },

  offers: [
    {
      title: "季節限定トーナメント",
      description:
        "定期的に開催されるイベントで上位入賞による賞金やボーナスを獲得可能。無料〜低額参加費のものもあり、幅広いプレイヤーが狙える構成でした（ユーロ建て基準）。",
      highlight: "期間中のミッション／ポイント制で賞品進呈のケースあり",
    },
    {
      title: "ボーナスホイール（4時間ごと）",
      description:
        "開催時は4時間おきにホイールを回して特典獲得を狙える常設型プロモーションとして案内されていました。",
    },
  ],

  facts: [
    { label: "名称", value: "Royal Vegas" },
    { label: "ローンチ", value: "2000年" },
    {
      label: "ライセンス",
      value:
        "Malta Gaming Authority（MGA）、Kahnawake Gaming Commission（KGC）、Alderney Gambling Control Commission（AGCC）、Alcohol and Gaming Commission of Ontario（AGCO）",
    },
    { label: "運営", value: "Baytree (Alderney) Limited / Digimedia Ltd" },
    { label: "VIPプログラム", value: "❌" },
    {
      label: "ゲームタイプ",
      value:
        "Baccarat, Blackjack, Bingo, Craps, Crash Games, Game Shows, Live Casino, Live Dice Games, Poker, Roulette, Slots, Scratch Cards, Casual games（Keno, Spingo）",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="/providers/microgaming">Microgaming</Link>,{" "}
          <Link href="/providers/netent">NetEnt</Link>,{" "}
          <Link href="/providers/red-tiger">Red Tiger</Link>, IGT, Evolution
          Gaming, Pragmatic Play, Big Time Gaming, iSoftBet, Amatic, Ezugi,
          Rabcat, Tom Horn, On Air Entertainment, Iron Dog Studio, Gamomat
          Games, King Show Games, Amigo Gaming ほか（合計48社以上）
        </span>
      ),
    },
    { label: "電話サポート", value: "✅（月–金 15:00–24:00）" },
    { label: "メールサポート", value: "✅" },
    {
      label: "Eメール",
      value: <Link href="mailto:japansesupport@casinodesk.com">japansesupport@casinodesk.com</Link>,
    },
    {
      label: "ライブチャット",
      value: "✅（日本語: 15:00–24:00 土日祝除く／英語: 24時間）",
    },
    { label: "Skypeサポート", value: "✅" },
    { label: "WhatsAppサポート", value: "✅" },
    { label: "iMessageサポート", value: "✅" },
  ],

  intro: {
    paragraphs: [
      "CasinoTsuは、オンラインカジノを安心・安全に楽しむための情報を検証し提供しています。本記事では「ロイヤルベガス（Royal Vegas）」を徹底レビューしました。",
      "まず重要なお知らせとして、ロイヤルベガスは2024年春に日本市場を撤退。CasinoTsuの限定登録ボーナス提供・新規登録受付は終了しています。以降は当サイト推奨の他カジノをご検討ください。",
      "フォーチュンラウンジ（Fortune Lounge）グループ運営の信頼性、eCOGRA認定、公正性を担保するRNGと128ビットSSL、資金分別管理など安全面は良好。ゲームは500種類以上（ログイン後は1000種類以上）と豊富です。",
    ],
    ctas: [
      { text: "詳細を見る（公式レビュー内アンカー）", href: "https://casinotsu.com/reviews/royal-vegas#main-content" },
      { text: "🔰 オンラインカジノのはじめ方", href: "/guides" },
    ],
  },

  games: [
    "オンラインで500種類以上（ログイン後は1000種類以上）のゲームを提供。毎月新作が追加され、Microgamingなど著名スタジオのタイトルも多数。",
    "スロット、ブラックジャック、ルーレット、クラップス、ビデオポーカー、ライブカジノ、ゲームショー、クラッシュゲーム、ビンゴ、スクラッチ、カジュアル（ケノ、スピンゴ）など幅広いカテゴリを網羅。",
  ],

  features: [
    "フォーチュンラウンジ運営：Royal Vegas／7Sultans／Platinum Play／Vegas Palms／Euro Palaceなど歴史ある系列（1999年〜）。",
    "Evolution等によるライブカジノ、Microgamingほか48社以上のプロバイダー連携。",
  ],

  editorial: {
    author: "Momo",
    profileHref: "/authors/rina-okabe",
    hook:
      "日本市場撤退の影響で国内ユーザーの新規受付は終了。一方で安全性・公正性の取り組みは明確です。",
    theGoodStuff:
      "フォーチュンラウンジ運営・eCOGRA認定・SSL/RNG/資金分別など安全面が充実。合計$1,200ウェルカム、トーナメントとポイント制度で継続的に楽しめる設計でした。",
    theHeadsUp:
      "Trustpilot低評価やKYCの複雑さ・出金遅延の苦情が散見。さらに一部ボーナスの賭け条件は70倍と厳しめ。",
    finalThought:
      "安全面の強さとプロモの厚みは魅力。利用時は最新規約と出金条件を把握し、自己責任で慎重に判断を。",
  },

  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "ロイヤルベガスは日本語対応オンラインカジノとしてスタートし、フォーチュンラウンジ傘下、Baytree (Alderney) LimitedおよびDigimedia Ltdにより運営されてきました。20年以上の実績に裏打ちされたサポートとサービスは安定感があります。",
      "2024年春に日本市場から撤退したため、CasinoTsu経由の限定登録ボーナスおよび新規登録の受付は終了。国内からの新規登録やボーナス提供は現在行われていません。",
      "プロモーションは合計最大$1,200（100%×4回）のウェルカムほか、時期によりボーナスホイール（4時間ごと）や季節トーナメント、代替ウェルカムなどを提供。なお、ウェルカムのプレイスルーは70倍が明記され、一般表記として40倍の賭け条件注記もあります。",
      "ゲームはスロット、テーブル、ライブ、ゲームショー、クラッシュ系など多彩で、500種類以上（ログイン後は1000種類以上）。Microgaming/Evolution/Pragmatic Playなど著名プロバイダーに加え、ユニークなスタジオも取り扱い特別感のある構成でした。",
      "安全性はeCOGRA認定、128ビットSSL暗号化、RNG管理、資金の分別管理と堅牢。Casino Guru安全性指数7.8/10の言及もあり、公正なプレイ環境が目指されています。",
      "一方で、Trustpilot評価2.7/5（Poor）、出金遅延やKYCの複雑さ、賞金没収やアカウント閉鎖に関する苦情、サポート品質のばらつきなどの指摘も。利用前に最新規約と出金条件を必ず確認しましょう。",
    ],
  },

  security: [
    "eCOGRA認定（公正なオッズ・プレイ・RTP公開の監査）",
    "128ビットSSL暗号化と不正検出ソフトウェア",
    "乱数生成器（RNG）によるゲーム結果管理",
    "プレイヤー資金の分別管理",
  ],

  responsiblePlay: [
    "責任あるプレイの推奨（各所に表記）",
  ],

  complaintStats: [],

  awards: [
    "Casino Guru安全性指数: 7.8/10",
    "Trustpilot: 2.7/5（評価「Poor」）",
  ],

  restrictedCountries: [],

  userConcerns: [
    "出金遅延や初回KYCの手続き負担に関する苦情",
    "賞金没収やアカウント閉鎖に関する報告",
    "サポートの対応品質にばらつきがあるとの指摘",
  ],

  summary: [
    "フォーチュンラウンジ運営・eCOGRA認定など安全面が充実し、ゲーム数とプロバイダーの幅も豊富。",
    "一部ボーナスの賭け条件が70倍と厳しい点、Trustpilot低評価、出金・KYCの指摘は要注意。",
    "日本市場は2024年春に撤退済み。国内ユーザーの新規登録・ボーナス提供は終了。",
  ],

  extraLinks: [
    { text: "詳細レビューを読む（本ページ内）", href: "https://casinotsu.com/reviews/royal-vegas#main-content" },
    { text: "🔰 カジノボーナスの種類を知ろう", href: "/bonuses" },
    { text: "🔰 賭け条件とは？", href: "/guides/wagering-requirements" },
  ],

  faq: [
    {
      question: "ロイヤルベガスで仮想通貨を利用できますか？",
      answer:
        "はい。Tether（USDT）やUSD Coin（USDC）などが入出金に対応していました。ただし対応銘柄は限定的でした。",
    },
    {
      question: "日本語サポートはありますか？",
      answer:
        "はい。日本語は15:00–24:00（平日）に対応。英語は24時間。チャット・メール・電話・Skype・WhatsApp・iMessageに対応していました。",
    },
    {
      question: "PCとモバイルの両方でプレイできますか？",
      answer:
        "はい。PC/スマホ/タブレットで利用可能で、iOS/Androidアプリも提供されていました。",
    },
  ],

  cta: {
    text: "ロイヤルベガスの詳細・最新規約を確認する",
    href: "https://casinotsu.com/reviews/royal-vegas#main-content",
  },
};