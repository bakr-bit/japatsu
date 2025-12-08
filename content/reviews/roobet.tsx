import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewRoobet: ReviewPageContent = {
  hero: {
    title: "RooBet（ルーベットカジノ）の評判とボーナス徹底解説",
    subheading: "損失額の20%キャッシュバック（最大$200）",
    description: "世界的な著名人をアンバサダーに迎え、2025年には「Best Crypt Casino賞」を受賞した注目のオンラインカジノ！ CasinoTsuが、その魅力と特徴を徹底的にレビューいたします。",
    score: 4.0,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 82,
        note: "2018年の開設以来、海外では著名なパートナーシップで知られるオンラインカジノです。日本での認知度はまだこれからですが、今後の発展が期待されます。",
      },
      {
        label: "規約",
        percent: 65,
        note: "新規登録時のボーナスはございませんが、独自の「リワード」システムにてレーキバックを提供しており、プレイヤーの皆様に還元いたします。",
      },
      {
        label: "操作性",
        percent: 84,
        note: "スマートフォンでも快適にプレイでき、プロバイダーごとのゲーム検索も便利です。サイトは日本語対応しておりますが、一部表示に英語が混在することがございます。",
      },
      {
        label: "サポート",
        percent: 84,
        note: "24時間対応のライブチャットおよびメールサポートをご利用いただけます。ライブチャットは自動翻訳ですが、迅速かつ丁寧な対応が印象的です。",
      },
    ],
    highlights: [
      "スポーツベットに強みを持つオンラインカジノ",
      "独自の「リワード」プログラムをご用意",
      "豊富なゲーム数に加え、オリジナルゲームも多数提供",
    ],
    watchouts: [
      "ウェルカムオファーの内容が限定的",
    ],
    avatarSrc: "/assets/casino/roobet.png",
    avatarAlt: "Roobetのロゴ",
  },
  payments: {
    featured: [
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "クリプトカジノの定番決済",
      },
      {
        name: "Ethereum",
        icon: "/assets/payments/ethereum.svg",
        href: "https://casinotsu.com/payment/ethereum",
        badge: "仮想通貨",
        note: "人気のアルトコインに対応",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://casinotsu.com/payment/vega-wallet",
        badge: "Eウォレット",
        note: "日本円での利用に便利な電子決済",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://casinotsu.com/payment/payz",
        badge: "Eウォレット",
        note: "信頼性の高い定番ウォレット",
      },
      {
        name: "Tiger Pay",
        icon: "/assets/payments/tiger-pay.svg",
        href: "https://casinotsu.com/payment/tiger-pay",
        badge: "Eウォレット",
        note: "新しい決済サービスにも対応",
      },
    ],
    deposits: [
        { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://www.japanesecasino.com/payment/bitcoin" },
        { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://www.japanesecasino.com/payment/ethereum" },
        { name: "Litecoin", icon: "/assets/payments/litecoin.svg" },
        { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://www.japanesecasino.com/payment/payz" },
        { name: "Ripple", icon: "/assets/payments/ripple.svg" },
        { name: "Solana", icon: "/assets/payments/solana.svg" },
        { name: "Tether", icon: "/assets/payments/tether.svg" },
        { name: "Tiger Pay", icon: "/assets/payments/tiger-pay.svg", href: "https://www.japanesecasino.com/payment/tiger-pay" },
        { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://www.japanesecasino.com/payment/vega-wallet" },
        { name: "iCash.one" },
        { name: "Visa" },
        { name: "Skrill" },
        { name: "MuchBetter" },
        { name: "USD Coin (USDC)" },
        { name: "Tron" },
        { name: "Dogecoin" },
        { name: "Binance Coin (BNB)" },
    ],
    withdrawals: [
        { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://www.japanesecasino.com/payment/bitcoin" },
        { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://www.japanesecasino.com/payment/ethereum" },
        { name: "Litecoin", icon: "/assets/payments/litecoin.svg" },
        { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://www.japanesecasino.com/payment/payz" },
        { name: "Ripple", icon: "/assets/payments/ripple.svg" },
        { name: "Solana", icon: "/assets/payments/solana.svg" },
        { name: "Tether", icon: "/assets/payments/tether.svg" },
        { name: "Tiger Pay", icon: "/assets/payments/tiger-pay.svg", href: "https://www.japanesecasino.com/payment/tiger-pay" },
        { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://www.japanesecasino.com/payment/vega-wallet" },
        { name: "MuchBetter" },
        { name: "Skrill" },
    ],
    notes: [
      "仮想通貨に特化したカジノですが、PayzやVegaWalletなどの電子ウォレットにも対応。仮想通貨での入金は、カジノ内通貨「Roollions」に自動換算されます。",
      "出金にはレベル1の本人確認（個人情報入力）が必須。出金限度額は無制限で、処理時間は通常60分以内と非常に迅速です。",
    ],
  },
  bonuses: {
    overview:
        "ルーベットカジノは伝統的なウェルカムボーナスではなく、新規プレイヤー向けにキャッシュバックを提供し、継続的なプレイヤーには独自の「リワード」プログラムを通じて還元するシステムを採用しています。",
    noDeposit:
        "ルーベットカジノでは多様な入金不要ボーナスの機会があります：第三者機関のタスク完了で得られる「フリープレイ」、特定スロット用の「ルースピン（Roospins）」、スポーツベット専用の「フリーキャッシュベット」や「フリーベット」、友人紹介プログラムなどがあります。",
    extraSpins: {
      summary:
        "「ルースピン（Roospins）」は、特定のスロットで利用可能なフリースピン形式のボーナスです。有効期限は7日間です。",
      schedule: [],
      warning: "",
    },
    welcomeRows: [],
    conditions: [
      "新規プレイヤーは登録から最初の7日間、スロットでの純損失額に対して20％のキャッシュバック（最大$200）を受けられます。",
      "このキャッシュバックに賭け条件は一切ありません。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "リワード（ロイヤリティプログラム）",
      description: "ベット総額に応じてランクが昇格し、ランクに応じた即時レーキバック、損失ボーナス、レベルアップ報酬、デイリー・ウィークリー・マンスリーボーナスなどが提供される独自の還元プログラムです。",
      highlight: "プレイすればするほどお得になる継続的な還元システム",
    },
    {
      title: "ターゲットチャレンジ",
      description: "スロットのマルチプライヤーで、毎週$5,000の賞金プールを目指すキャンペーンです。",
    },
    {
      title: "ドロップ＆ウィン",
      description: "Pragmatic Play社のスロットを対象に、総額$2,000,000の巨大な賞金プールに参加できます。",
    },
    {
        title: "ビットコインマルチトーナメントウィークエンド",
        description: "260名の勝者に1BTCの賞金プールが贈られる週末限定のトーナメントです。",
    },
  ],
  facts: [
    { label: "名称", value: "Roobet" },
    { label: "ローンチ", value: "2018年" },
    { label: "運営会社", value: "TekHou5 / Raw Entertainment B.V." },
    { label: "ライセンス", value: "Curaçao Gaming Authority" },
    { label: "VIPプログラム", value: "✅（招待制）" },
    { label: "対応言語", value: "日本語、英語ほか" },
    { label: "対応通貨", value: "BTC, ETH, LTC, USDT, USDC, XRP, SOL, TRON, DOGE, BNB, JPY (via E-Wallets)" },
    {
      label: "ゲームタイプ",
      value:
        "Baccarat, Blackjack, Craps, Game Shows, Live Casino, Poker, Roulette, Slots, Dice, Mines, Crash",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="/providers/bgaming">BGAMING</Link>, <Link href="/providers/betsoft">BetSoft</Link>, <Link href="/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="/providers/blueprint-gaming">Blueprint Gaming</Link>, <Link href="/providers/booming-games">Booming Games</Link>, <Link href="/providers/elk-studios">Elk Studios</Link>, <Link href="/providers/endorphina">Endorphina</Link>, <Link href="/providers/fantasma-games">Fantasma</Link>, Gacha Studios, <Link href="/providers/habanero">Habanero</Link>, <Link href="/providers/hacksaw-gaming">Hacksaw Gaming</Link>, Iron Dog Studio, <Link href="/providers/microgaming">Microgaming</Link>, <Link href="/providers/netent">NetEnt</Link>, <Link href="/providers/nolimit-city">Nolimit City</Link>, <Link href="/providers/novomatic">Novomatic</Link>, <Link href="/providers/playson">Playson</Link>, <Link href="/providers/play-n-go">Play’n GO</Link>, <Link href="/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="/providers/print-studios">Print Studios</Link>, <Link href="/providers/push-gaming">Push Gaming</Link>, <Link href="/providers/quickspin">Quickspin</Link>, <Link href="/providers/red-tiger">Red Tiger</Link>, <Link href="/providers/relax-gaming">Relax</Link>, Slingshot Studios, <Link href="/providers/spinomenal">Spinomenal</Link>, <Link href="/providers/thunderkick">Thunderkick</Link>, <Link href="/providers/yggdrasil">Yggdrasil</Link>
        </span>
      ),
    },
    { label: "最小入金額", value: "$10 (E-Wallets) / $0.01 (Crypto)" },
    { label: "出金限度額", value: "無制限" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@roobet.com">support@roobet.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間対応)" },
  ],
  intro: {
    paragraphs: [
      "2018年に日本語対応を果たしたオンラインカジノ「ルーベットカジノ（RooBet）」は、海外で高い人気を誇るカジノサイトです。",
      "元UFC世界ライト級王者のチャールズ・オリベイラ選手、そしてアメリカの著名なラッパーであるスヌープ・ドッグ氏が公式アンバサダーを務めています。",
      "さらに、世界的に有名なロンドンのサッカークラブ、チェルシーFCとも公式パートナーシップを締結しています。人気アスリートや著名アーティスト、そして名門サッカークラブが名を連ねるルーベットカジノの魅力を、CasinoTsuが詳細に調査いたしました。",
    ],
    ctas: [
      { text: "👉 CasinoTsuからルーベットをチェック 💨", href: "https://go.japanesecasino.com/go/roobet" },
    ],
  },
  games: [
    "ルーベットカジノでは70社以上のプロバイダーが提供する、6,300種類以上の豊富なゲームを楽しめます。特にユニークなのがオリジナルのダイス、マイン、クラッシュゲームで、ルーベットならではの体験ができます。",
    "スロットはもちろん、Evolution社やPragmatic Play社などの人気ライブカジノも充実。さらに、ルーベットカジノ専用のライブカジノテーブルも用意されており、特別な雰囲気でブラックジャックやルーレットを楽しめます。UFC公式パートナーとして、スポーツブックにも力を入れています。",
  ],
  features: [
    "サイトは全体的にシンプルで使いやすく、軽量なデザインのためモバイルでの読み込み速度が速く、ストレスなくプレイできます。",
    "検索機能も充実しており、プロバイダーごとにゲームを探しやすいのも特徴です。他のプレイヤーとコミュニケーションが取れるチャットボックス機能も搭載されており、コミュニティ感を楽しみながらプレイできます。",
  ],
  editorial: {
    author: "Nanami",
    profileHref: "/authors/rina-okabe",
    hook: "スヌープ・ドッグがアンバサダーのクリプトカジノ！オリジナルゲームが光るけど、ボーナスは一風変わってるね。",
    theGoodStuff: "著名人とのパートナーシップによるブランド力と、他にはないオリジナルゲームが最大の魅力です。6,300種類以上の豊富なゲーム数と充実したスポーツブック、迅速な出金対応も高く評価できます。",
    theHeadsUp: "一般的なウェルカムボーナスがないため、大きな初回ボーナスを期待するプレイヤーには不向きかもしれません。また、日本語サポートが自動翻訳である点も注意が必要です。",
    finalThought: "継続的にプレイするほどお得になるレーキバックシステムは、長期的なプレイヤーにとって非常に魅力的です。仮想通貨ユーザーや、ユニークなゲーム体験を求める方には最適なカジノと言えるでしょう。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
        "ルーベットカジノは、スヌープ・ドッグ氏やUFC、チェルシーFCといった世界的なビッグネームをアンバサダーやパートナーに迎えることで、強力なブランドイメージを確立しているクリプトカジノです。2025年には「Best Crypt Casino」賞を受賞するなど、業界内での評価も非常に高いです。",
        "このカジノの最大の特徴は、一般的なオンラインカジノとは一線を画すゲームとプロモーション戦略にあります。ダイスやクラッシュといった独自のオリジナルゲームは高いエンターテイメント性を提供し、多くのプレイヤーを惹きつけています。また、Pragmatic Play社などと提携した専用ライブカジノテーブルは、VIPのような特別な体験を演出します。",
        "ボーナス面では、高額な初回入金ボーナスを掲げる代わりに、損失額に対するキャッシュバックや、プレイすればするほど還元される「リワード」という名のレーキバックシステムを採用。これは一見地味に見えますが、長期的に見ればプレイヤーにとって非常に有利なシステムです。",
        "決済は仮想通貨が中心ですが、電子ウォレットを利用すれば法定通貨での入金も可能です。出金は仮想通貨と電子ウォレットに限定されますが、限度額がなく60分以内に処理が完了するという迅速さは大きなメリットです。",
        "サポートは24時間対応ですが、日本語は自動翻訳となるため、複雑な問い合わせには若干の不安が残ります。しかし、その対応は迅速かつ丁寧であると評価されています。",
        "総じて、ルーベットカジノは先進的なクリプトカジノの要素と、ユニークなゲーム体験、そして長期プレイヤーを優遇する合理的な報酬システムを兼ね備えた、非常に魅力的なプラットフォームです。",
    ],
  },
  security: [
    "オランダ領キュラソー政府発行の正規ライセンス（Curaçao Gaming Authority）を取得し合法的に運営",
    "SSL暗号化技術を採用し、個人情報や取引情報を保護",
    "ウェブサイトに「公平性」に関する詳細な説明ページを設け、ゲームの透明性を確保",
    "最新のiGamingコンプライアンス基準に準拠",
  ],
  responsiblePlay: [
    "テイク・ア・ブレイク: 72時間から14日間のアカウント休止設定",
    "自己排除: 6ヶ月から5年間の長期的なアカウント利用制限",
    "上記機能はカスタマーサポートへの連絡を通じて設定可能",
  ],
  complaintStats: [
    "特になし",
  ],
  awards: [
    "2023年 The MiGEA Awardsにて3部門を受賞",
    "2025年 SiGMA Awardsにて「Best Crypt Casino」賞を受賞",
  ],
  restrictedCountries: [
    "アメリカ合衆国", "イギリス", "オーストラリア", "ドイツ", "オランダ", "デンマーク", "フランス", "イタリア", "スペイン", "ベルギー", "スウェーデン", "ノルウェー", "フィンランド", "ポルトガル", "アイルランド", "ギリシャ", "チェコ", "ポーランド", "ハンガリー", "スロバキア", "ルーマニア", "ブルガリア", "クロアチア", "リトアニア", "ラトビア", "エストニア", "スロベニア", "アルゼンチン", "メキシコ", "コロンビア", "チリ", "ペルー", "ブラジル", "ウルグアイ", "パラグアイ", "エクアドル", "ボリビア", "ベネズエラ",
  ],
  userConcerns: [
    "ウェルカムオファーがキャッシュバックのみで、 традиショナルな入金ボーナスがない",
    "日本語カスタマーサポートが自動翻訳での対応となる",
    "出金方法が仮想通貨と電子ウォレットに限定されている",
  ],
  summary: [
    "ルーベットカジノは、仮想通貨に特化しつつ法定通貨での入金も可能な、柔軟性の高いオンラインカジノです。UFCやスヌープ・ドッグ氏とのパートナーシップは、その信頼性とブランド力を物語っています。",
    "魅力的なオリジナルゲーム、迅速かつ丁寧なサポート、そして他のプレイヤーと交流できるチャット機能など、ユニークな魅力が満載です。",
    "伝統的なボーナスとは異なりますが、継続的にプレイするプレイヤーにとっては非常に有利なリワードシステムが用意されています。新しい形のオンラインカジノを体験したい方に、CasinoTsuは自信を持っておすすめします。",
  ],
  extraLinks: [
    { text: "🏆 カジノアワード受賞歴のあるカジノをチェック！", href: "https://www.japanesecasino.com/most-awards" },
    { text: "💰 仮想通貨ボーナスがもらえるカジノ特集", href: "https://www.japanesecasino.com/bonuses/crypto" },
  ],
  faq: [
    {
      question: "ルーベットカジノでは、Vega Walletは利用できますか？",
      answer: "はい。ルーベットカジノでは、Vega WalletやPayzなどの電子ウォレットをご利用いただけます。",
    },
    {
      question: "ルーベットカジノの公式パートナーは誰ですか？",
      answer: "元UFC世界ライト級王者のチャールズ・オリベイラ選手、世界的ラッパーのスヌープ・ドッグ氏、そしてロンドンの名門サッカークラブ「チェルシー」が、ルーベットカジノの公式パートナーを務めております。",
    },
    {
      question: "ルーベットカジノでビットコインによる決済は可能ですか？",
      answer: "はい、ルーベットカジノでは、ビットコインを含む10種類の仮想通貨での決済が可能です。",
    },
    {
      question: "ルーベットカジノでは、カジノ用の入金不要ボーナスは提供されますか？",
      answer: "はい、ルーベットカジノでは、フリープレイ、ルースピン、フリーキャッシュベット、フリーベットなど、様々な入金不要ボーナスの機会をご提供しております。",
    },
    {
      question: "ルーベットカジノの「リワード」とは何ですか？",
      answer: "「リワード」は、ルーベットカジノのロイヤリティプログラムです。プレイを重ねるごとにランクが昇格し、即時レーキバック、損失ボーナス、レベルアップ報酬といった、より豪華な特典をご利用いただけるようになります。",
    },
    {
      question: "ルーベットカジノで日本円を入金することは可能ですか？",
      answer: "電子ウォレット（Payz, VegaWalletなど）やクレジットカード（Visaなど）をご利用いただくことで、日本円でのご入金が可能です。ただし、ルーベットカジノ内ではドルに換算されるため、アカウント内の残高表示が変動する可能性がございます。",
    },
  ],
  cta: {
    text: "👉 ルーベットカジノはこちら🦘🔥",
    href: "https://go.japanesecasino.com/go/roobet",
  },
    images: {
    casino: [
      "/assets/casino/roobet.jpg",
      "/assets/casino/roobet.png",
    ],
  },
};