import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewLuckyBlock: ReviewPageContent = {
  hero: {
    title: "ラッキーブロック（LuckyBlock）最新レビュー｜仮想通貨カジノ",
    subheading: "最大€25,000ボーナス + 50回フリースピン",
    description: "CasinoTsuは、オリジナルの通貨（LBLOCK）も用意しているクリプト特化型カジノ、ラッキーブロック（LuckyBlock）を注目しています。スロットだけでも5,000種類以上あり、スポーツベットも楽しめる注目の新星オンカジです。",
    score: 3.9,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 73,
        note: "高額ウェルカムボーナスやゲーム数の豊富さは業界トップクラスです。仮想通貨特化型カジノであるため、プレイヤーの好みが分かれる点に注目しています。",
      },
      {
        label: "規約",
        percent: 78,
        note: "豪華ウェルカムボーナスは魅力的ですが、独自の獲得方法に一部プレイヤーは面倒を感じるかもしれません。",
      },
      {
        label: "操作性",
        percent: 77,
        note: "日本語に未対応のページや、機能しないボタンがあるなど、改善の余地がある点に言及しています。しかし、ゲームの探しやすさや読み込みスピードは良好であると評価しています。",
      },
      {
        label: "サポート",
        percent: 84,
        note: "24時間対応のライブチャットの質を評価しています。自動翻訳ながらもクオリティが高く、不自然な回答が少ない点が好印象です。",
      },
    ],
    highlights: [
      "豪華ウェルカムボーナスが最大€25,000",
      "スポーツベットも楽しめる（49のスポーツカテゴリー、23のeスポーツ）",
      "スロットのゲーム数が約5,000種以上",
      "仮想通貨取引に加えて、EUR, CAD, AUD, NZDなどの法定通貨も利用可能（入金のみクレジットカード購入可能）",
      "Provably Fair技術対応の仮想通貨ゲーム",
    ],
    watchouts: [
      "仮想通貨のみの対応（法定通貨の入出金は限定的）",
      "責任あるギャンブル機能が不十分との指摘あり",
      "一部サイトやサポートの翻訳が不十分な場合がある",
      "稀にアカウント制限や遅延の報告あり",
    ],
    avatarSrc: "/assets/casino/lucky-block.png",
    avatarAlt: "Lucky blockのロゴ",
  },
  payments: {
    featured: [
        {
            name: "Bitcoin",
            icon: "/assets/payments/bitcoin.svg",
            href: "/payment/bitcoin",
            badge: "仮想通貨",
            note: "代表的な暗号資産",
        },
        {
            name: "Ethereum",
            icon: "/assets/payments/ethereum.svg",
            href: "/payment/ethereum",
            badge: "仮想通貨",
            note: "スマートコントラクト対応",
        },
        {
            name: "VISA",
            icon: "/assets/payments/visa.svg",
            href: "/payment/visa",
            badge: "購入",
            note: "仮想通貨の購入に利用可能",
        },
        {
            name: "MasterCard",
            icon: "/assets/payments/mastercard.svg",
            href: "/payment/mastercard",
            badge: "購入",
            note: "仮想通貨の購入に利用可能",
        },
    ],
    deposits: [
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "/payment/bitcoin" },
      { name: "Bitcoin Cash", icon: "/assets/payments/bitcoin-cash.svg" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "/payment/ethereum" },
      { name: "Litecoin", icon: "/assets/payments/litecoin.svg" },
      { name: "MasterCard", icon: "/assets/payments/mastercard.svg", href: "/payment/mastercard" },
      { name: "Ripple", icon: "/assets/payments/ripple.svg" },
      { name: "Shiba Inu", icon: "/assets/payments/shiba-inu.svg" },
      { name: "TerraUSD", icon: "/assets/payments/terrausd.svg" },
      { name: "Tether", icon: "/assets/payments/tether.svg" },
      { name: "VISA", icon: "/assets/payments/visa.svg", href: "/payment/visa" },
      { name: "TRX" },
      { name: "ADA" },
      { name: "DOGE" },
      { name: "BNB" },
      { name: "XRP" },
      { name: "SOL" },
      { name: "USDC" },
      { name: "TON" },
      { name: "TAMADOGE" },
      { name: "PEPE" },
      { name: "BONK" },
      { name: "AVAX" },
    ],
    withdrawals: [
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "/payment/bitcoin" },
      { name: "Bitcoin Cash", icon: "/assets/payments/bitcoin-cash.svg" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "/payment/ethereum" },
      { name: "Litecoin", icon: "/assets/payments/litecoin.svg" },
      { name: "Ripple", icon: "/assets/payments/ripple.svg" },
      { name: "Shiba Inu", icon: "/assets/payments/shiba-inu.svg" },
      { name: "TerraUSD", icon: "/assets/payments/terrausd.svg" },
      { name: "Tether", icon: "/assets/payments/tether.svg" },
      { name: "TRX" },
      { name: "ADA" },
      { name: "DOGE" },
      { name: "BNB" },
      { name: "XRP" },
      { name: "SOL" },
      { name: "USDC" },
      { name: "TON" },
      { name: "TAMADOGE" },
      { name: "PEPE" },
      { name: "BONK" },
      { name: "AVAX" },
    ],
    notes: [
      "入出金方法は主に仮想通貨です。外部プロバイダー経由でクレジットカード（VISA/Mastercard）を使い仮想通貨の購入が可能です。",
      "月間の最大出金額は€500,000です。仮想通貨の出金手数料はラッキーブロック側では発生しませんが、各ブロックチェーンの標準手数料がかかります。",
      "法定通貨での出金は、Visa/Mastercardで1〜3時間、銀行送金は最大48時間かかる場合があります。",
    ],
  },
  bonuses: {
    overview:
      "ラッキーブロックでは、最大25,000ユーロという非常に高額なウェルカムオファーをはじめ、デイリーミッションやトーナメントなど、プレイヤーを飽きさせない多彩なキャンペーンが用意されています。",
    noDeposit:
      "現時点では、入金不要ボーナスは提供されていません。",
    extraSpins: {
      summary:
        "初回入金を行うと、人気スロット『Wanted Dead or a Wild』で使える50回のフリースピンが付与されます。",
      schedule: [
        "初回入金（最低€20）で50回分が一度に付与されます。",
      ],
      warning: "フリースピンで得た勝利金には35倍の賭け条件が設定され、7日以内に消化する必要があります。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "200%", cap: "€25,000", code: "なし" },
    ],
    conditions: [
      "ウェルカムボーナスは初回入金額の6倍を賭けるごとに10%ずつ（初回入金額の20%相当）が付与されます。",
      "受け取ったボーナス自体には賭け条件がありません。",
      "ボーナス獲得のための賭け条件消化期間は14日間です。",
      "最低入金額は€20です。",
      "登録後30日以内に初回入金を行う必要があります。",
    ],
    prohibitedGames: [
        "ダイスゲーム（賭け条件消化率0%）",
        "（その他、詳細はラッキーブロックのボーナス規約で確認が必要です）",
    ],
  },
  offers: [
    {
      title: "デイリーミッション＆プライズブースト",
      description: "日替わりのミッションを達成することで報酬が獲得できるキャンペーンです。",
      highlight: "毎日参加できる手軽なボーナスチャンス",
    },
    {
      title: "今週のゲームミッション",
      description: "毎週指定されるスロットゲームで特定の条件をクリアすると、フリースピンがもらえます。",
    },
    {
      title: "ミッドウィークボーナスミッション",
      description: "週の半ばに開催されるリロードボーナスキャンペーンです。",
    },
    {
        title: "レーシングトーナメント",
        description: "スロットとライブカジノで賭け額を競い、上位入賞者には賞金が与えられます。",
    },
    {
        title: "ウィークリーキャッシュバック",
        description: "LBLOCK V2での純損失額に対し、最大15%のキャッシュバックを受け取ることができます。",
    },
  ],
  facts: [
    { label: "名称", value: "Lucky Block" },
    { label: "ローンチ", value: "2022年" },
    { label: "運営会社", value: "Entretenimiento Rojo B.V. (Curaçao license), Igloo Ventures SRL (Anjouan license)" },
    { label: "ライセンス", value: "Curaçao Interactive Licensing, Anjouan Gaming license (No. ALSI-1423 l 1005-FI2)" },
    { label: "VIPプログラム", value: "✅ (招待制、11レベル)" },
    { label: "対応言語", value: "日本語（自動翻訳）、英語" },
    { label: "対応通貨", value: "各種仮想通貨、EUR, CAD, AUD, NZD (入金時購入のみ)" },
    {
      label: "ゲームタイプ",
      value: "Baccarat, Blackjack, Craps, Game Shows, Live Casino, Poker, Roulette, Slots, Video Poker, Sports Betting",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="/providers/bgaming">BGAMING</Link>, <Link href="/providers/betsoft">BetSoft</Link>, <Link href="/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="/providers/blueprint-gaming">Blueprint Gaming</Link>, <Link href="/providers/booongo">Booongo</Link>, <Link href="/providers/endorphina">Endorphina</Link>, <Link href="/providers/fantasma-games">Fantasma</Link>, <Link href="/providers/golden-hero-games">Golden Hero</Link>, <Link href="/providers/habanero">Habanero</Link>, <Link href="/providers/hacksaw-gaming">Hacksaw Gaming</Link>, <Link href="/providers/microgaming">Microgaming</Link>, <Link href="/providers/netent">NetEnt</Link>, <Link href="/providers/nolimit-city">Nolimit City</Link>, <Link href="/providers/octoplay">Octoplay</Link>, <Link href="/providers/pg-soft">PG SOFT</Link>, <Link href="/providers/playson">Playson</Link>, <Link href="/providers/play-n-go">Play’n GO</Link>, <Link href="/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="/providers/quickspin">Quickspin</Link>, <Link href="/providers/red-tiger">Red Tiger</Link>, <Link href="/providers/relax-gaming">Relax</Link>, Slingshot Studios, <Link href="/providers/spinomenal">Spinomenal</Link>, Swintt, <Link href="/providers/thunderkick">Thunderkick</Link>, Games Global, Booming Games, Kalamba Games, Wazdan, Mascot Gaming, Gamomat, Evoplay, Fugaso, Atomic Slot Lab, Skywind Group, Genii, Just For The Win, Snowborn Games, Oryx Gaming, Red Rake Gaming, Revolver Gaming, Platipus Gaming, SmartSoft Gaming, Turbo Games, CandleBets, Ezugi, Tom Horn Gaming, Triple Cherry, Indigo Magic
        </span>
      ),
    },
    { label: "最小入金額", value: "0.0001 BTC / €20" },
    { label: "最小出金額", value: "仮想通貨による" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <span><Link href="mailto:help@luckyblock.com">help@luckyblock.com</Link>, <Link href="mailto:complaints@luckyblock.com">complaints@luckyblock.com</Link></span> },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間)" },
    { label: "独自トークン", value: "LBLOCK (Ethereumネットワーク)" },
  ],
  intro: {
    paragraphs: [
      "また新たな仮想通貨カジノが登場しました。その名は、『ラッキーブロック（LuckyBlock）』です。",
      "なんと、独自のトークンも発行しています。",
      "仮想通貨に特化しているとはいえ、ゲーム数やサポートなどもかなり充実しています。CasinoTsuが、徹底レビューいたします。",
    ],
    ctas: [
      { text: "👉 ラッキーブロックへの登録はコチラ！", href: "https://go.japanesecasino.com/go/lucky-block" },
    ],
  },
  games: [
    "ラッキーブロックでは、スロットだけで5,000種類以上という圧倒的なゲーム数を誇ります。80社以上のプロバイダーと提携し、人気どころから新進気鋭のスタジオまで幅広くカバーしています。",
    "ライブカジノはEvolution、Pragmatic Playを含む4社が提供しており、合計60種類のテーブルで本物のディーラーとの対戦が楽しめます。",
    "さらに、49のスポーツカテゴリーと23のeスポーツに対応した本格的なスポーツブックも完備しており、カジノゲームとスポーツベットの両方を一つのプラットフォームで満喫できます。",
  ],
  features: [
    "ラッキーブロックの最大の特徴は、独自トークン「LBLOCK」を発行している点です。これにより、カジノ内外でのエコシステムが構築されています。",
    "サイトは使いやすく設計されており、膨大なゲームの中からでも目的のゲームを簡単に見つけることができます。",
    "2FA（2段階認証）を必須とすることで、プレイヤーのアカウントセキュリティも強化されています。",
  ],
  editorial: {
    author: "Kotone",
    profileHref: "/authors/rina-okabe",
    hook: "最大€25,000の超高額ボーナスは魅力的ですが、仮想通貨に特化している点がプレイヤーを選ぶかもしれません。",
    theGoodStuff: "5,000種類を超えるスロットと本格的なスポーツブックは、どんなプレイヤーでも満足できるラインナップです。24時間対応のライブチャットの質も非常に高く、自動翻訳でもスムーズなコミュニケーションが可能です。",
    theHeadsUp: "ウェルカムボーナスの受け取り方が少し特殊で、賭け条件をクリアするごとに分割で付与される形式です。また、法定通貨での直接的な入出金ができないため、仮想通貨の扱いに慣れている必要があります。",
    finalThought: "仮想通貨ユーザーにとっては、ゲームの豊富さ、ボーナスの豪華さ、サポートの質の高さから、メインカジノになり得るポテンシャルを秘めています。まずはその使いやすさを体験してみてください。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "CasinoTsuは、2022年に登場した新しい仮想通貨カジノ「ラッキーブロック」に注目しています。独自トークンLBLOCKを発行するなど、クリプト分野での先進的な取り組みが特徴的です。",
      "最大の魅力は、最大€25,000という業界でもトップクラスのウェルカムボーナスです。ただし、初回入金額の6倍を賭けるごとに10%ずつが付与されるというユニークな仕組みで、受け取ったボーナスに賭け条件がない点はプレイヤーにとって大きなメリットと言えるでしょう。",
      "ゲームのラインナップは圧巻の一言です。スロットは5,000種類を超え、ライブカジノやテーブルゲームも充実。さらに本格的なスポーツブックも備えており、あらゆるギャンブルを一箇所で楽しみたいというニーズに応えています。",
      "決済方法は仮想通貨がメインですが、クレジットカードで仮想通貨を購入するオプションも用意されており、仮想通貨初心者への配慮も感じられます。出金速度も迅速で、月間€500,000という高額な上限もハイローラーには嬉しいポイントです。",
      "カスタマーサポートは24時間ライブチャットで対応しており、自動翻訳ながらも非常に質が高いと評価できます。応答も迅速で、ストレスなく問題を解決できるでしょう。",
      "一方で、サイトの一部が日本語に未対応であったり、責任あるギャンブルに関する機能が限定的であるという指摘も見られます。これらの点が改善されれば、さらに多くのプレイヤーにとって魅力的なカジノになることは間違いありません。",
      "総じて、ラッキーブロックは仮想通貨に慣れているプレイヤーにとっては、非常に満足度の高い体験を提供するオンラインカジノです。その豊富なゲームと手厚いボーナスをぜひ体験してみてください。",
    ],
  },
  security: [
    "キュラソーとアンジュアンの2つの公式ライセンスを取得し運営",
    "サイト全体はSSL暗号化によりプレイヤーの個人情報を保護",
    "提携プロバイダーのゲームはRNG（乱数発生器）により公平性を担保",
    "一部の仮想通貨ゲームではProvably Fair技術を採用",
  ],
  responsiblePlay: [
    "責任あるギャンブルに関する情報はサイトのフッターから確認可能（英語のみ）",
    "（AskGamblersなどのレビューサイトでは、入金制限や自己除外ツールが限定的であるとの指摘あり）",
  ],
  complaintStats: [
    "Trustpilot: 3.8/5 (1,129 reviews) - \"Great\" rating",
    "99Bitcoins: 9.4/10 overall (Gaming Selection 9.4, Bonuses & Promotions 9.3, User Experience 9.4)",
    "Cointelegraph: 4.5/5",
    "AskGamblers: CasinoRank 4.6/10, Player rating 7.5/10 (40 reviews)",
  ],
  awards: [
    "特になし",
  ],
  restrictedCountries: [
    "（公式サイトに明確なリストがないため、利用前に利用規約を確認することが推奨されます）",
  ],
  userConcerns: [
    "入金後にアカウントが制限されたとの報告あり",
    "勝利金の出金に時間がかかったり、メールへの返信が遅いという報告",
    "ライブスポーツベットでのベット制限が早いという声",
    "責任あるギャンブル機能が不十分であるとの指摘",
  ],
  summary: [
    "ラッキーブロックは、ゲーム数の豊富さと使いやすいサイトデザインが魅力です。特にチャットサポートの質は非常に高い評価を得ています。",
    "仮想通貨のみの対応ですが、オンカジ初心者から経験豊富なプレイヤーまで、幅広くおすすめできるカジノです。",
    "Trustpilotや99Bitcoinsなどの外部サイトでも全体的に高い評価を得ており、信頼性のあるプラットフォームと言えるでしょう。",
    "仮想通貨でのプレイに慣れている方なら、本命カジノとして検討する価値は十分にあります。",
  ],
  extraLinks: [
    { text: "🔰 仮想通貨カジノの始め方", href: "/crypto" },
    { text: "💰 ウェルカムボーナス徹底解説", href: "/bonuses/welcome-bonus" },
  ],
  faq: [
    {
      question: "ラッキーブロックに入金不要ボーナスはある？",
      answer: "いいえ、CasinoTsuが確認した限りでは、現時点ではありません。",
    },
    {
      question: "ラッキーブロックLuckyBlockでは、日本円を入金できる？",
      answer: "いいえ、仮想通貨のみ対応しています。ただし、外部サービスを利用してクレジットカードで仮想通貨を購入することは可能です。",
    },
  ],
  cta: {
    text: "ラッキーブロックで今すぐプレイ！",
    href: "https://go.japanesecasino.com/go/lucky-block",
  },
    images: {
    casino: [
      "/assets/casino/lucky-block.jpg",
      "/assets/casino/lucky-block.png",
    ],
  },
};