import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewShinobibet: ReviewPageContent = {
  hero: {
    title: "Shinobibet (シノビベット) レビュー",
    subheading: "最大$2,000 + 50回フリースピン",
    description: "忍者をテーマにしたユニークなオンラインカジノ「Shinobibet」。9,000種以上の豊富なゲームと、プレイヤーが選べる魅力的なウェルカムボーナスをCasinoTsuが調査しました。※当サイトは現在Shinobibetと提携しておらず、プレイは自己責任でお願いします。",
    score: 4.0,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 86,
        note: "9,000種以上のゲームとユニークな忍者テーマが魅力。ただし、新規カジノのため知名度はまだ低い。",
      },
      {
        label: "規約",
        percent: 78,
        note: "選べるウェルカムボーナスは魅力的だが、専門家からの評価が低く、プレイヤーからの苦情も報告されている。",
      },
      {
        label: "操作性",
        percent: 80,
        note: "デザインは分かりやすいが、一部の日本語翻訳やゲームのカテゴリ分けに改善の余地あり。",
      },
      {
        label: "サポート",
        percent: 77,
        note: "日本語ライブチャットの対応時間が17時～23時と限定的。丁寧だが接続に時間がかかる場合がある。",
      },
    ],
    highlights: [
      "9,000種以上の豊富なゲーム数！",
      "新規プレイヤー限定オファーは3種類から選択可能♪",
      "ユニークで親しみやすい忍者テーマのデザイン。★",
    ],
    watchouts: [
      "サイトの操作性や日本語表示に改善の余地あり。",
      "プロモーション説明文の不足。",
      "専門サイトからの低評価やアクセス可能性に関する懸念。",
      "プレイヤーからの深刻な苦情が報告されている。",
    ],
    avatarSrc: "/assets/casino/shinobibet.png",
    avatarAlt: "Shinobibetのロゴ",
  },
  payments: {
    featured: [
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "人気",
        note: "定番のクレジットカード決済",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "主要な暗号資産に対応",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://casinotsu.com/payment/payz",
        badge: "Eウォレット",
        note: "スピーディーな入出金が可能",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://casinotsu.com/payment/vega-wallet",
        badge: "Eウォレット",
        note: "日本人プレイヤーに人気の決済手段",
      },
    ],
    deposits: [
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
      { name: "Litecoin", icon: "/assets/payments/litecoin.svg" },
      { name: "MasterCard", icon: "/assets/payments/mastercard.svg", href: "https://casinotsu.com/payment/mastercard" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg", href: "https://casinotsu.com/payment/muchbetter" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "Tether", icon: "/assets/payments/tether.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
      { name: "VISA", icon: "/assets/payments/visa.svg", href: "https://casinotsu.com/payment/visa" },
      { name: "Jeton", icon: "/assets/payments/jeton.svg" },
      { name: "MiFinity", icon: "/assets/payments/mifinity.svg" },
      { name: "JCB", icon: "/assets/payments/jcb.svg" },
      { name: "XRP" },
      { name: "Oriental wallet" },
    ],
    withdrawals: [
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
      { name: "Litecoin", icon: "/assets/payments/litecoin.svg" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg", href: "https://casinotsu.com/payment/muchbetter" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "Tether", icon: "/assets/payments/tether.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
      { name: "Jeton", icon: "/assets/payments/jeton.svg" },
      { name: "MiFinity", icon: "/assets/payments/mifinity.svg" },
      { name: "XRP" },
      { name: "Oriental wallet" },
    ],
    notes: [
      "最低入金額は$10からと利用しやすいですが、仮想通貨は$30からです。最低出金額は€20です。",
      "出金処理時間は最大5営業日、本人確認には最大72時間かかる場合があります。リアルマネー入金には2倍の賭け条件が適用され、満たない場合は手数料が発生する可能性があります。",
    ],
  },
  bonuses: {
    overview:
      "Shinobibetには入金不要ボーナスはありませんが、新規プレイヤーは「入金ボーナス」「キャッシュバック」「フリーベット」の3種類から自分に合ったウェルカムオファーを1つだけ選べます。その後も3種類のリロードボーナスが利用可能です。",
    noDeposit:
      "現在、Shinobibetでは入金不要ボーナスは提供されていません。",
    extraSpins: {
      summary:
        "ウェルカムボーナスで「入金ボーナス」を選択した場合、初回入金時にPlay'n GO社の人気スロット『Book of Dead』で使える50回のフリースピンが付与されます。",
      schedule: [
          "初回入金時に50回分が一括で付与される",
      ],
      warning: "フリースピンの有効期限は1日と非常に短いため、獲得後すぐに使用する必要があります。勝利金には30倍の賭け条件が適用されます。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "$500", code: "WOSLOTS1" },
      { depositNumber: "2回目", percent: "100%", cap: "$500", code: "WOSLOTS2" },
      { depositNumber: "3回目", percent: "100%", cap: "$500", code: "WOSLOTS3" },
      { depositNumber: "4回目", percent: "100%", cap: "$500", code: "WOSLOTS4" },
    ],
    conditions: [
      "ボーナスの賭け条件は30倍（分離型）。",
      "ボーナスマネーを使用した際の最大ベット額は$5。",
      "ボーナスの有効期限は1日、フリースピンの有効期限も1日と非常に短い点に注意が必要です。",
      "スロットの賭け条件消化率は100%ですが、一部のゲームショーは50%、テーブルゲームやライブカジノは0%です。",
    ],
    prohibitedGames: [
        "テーブルゲーム",
        "ライブカジノ（一部ゲームショーを除く）",
    ],
  },
  offers: [
    {
      title: "ライブカジノ・キャッシュバック【新規限定】",
      description: "ライブカジノでの初回入金後の損失額の10%（最大$2,200）がキャッシュバックされます。賭け条件は30倍。ボーナスコード「WOCBK」が必要です。",
      highlight: "ライブカジノ好きにおすすめの保険的ボーナス",
    },
    {
      title: "スポーツベット・フリーベット【新規限定】",
      description: "スポーツベットでの初回ベット額の100%（最大$77）がフリーベットとして付与されます。賭け条件30倍。ボーナスコード「WOSPORTS」が必要です。",
      highlight: "スポーツベットファン向けのウェルカムオファー",
    },
    {
      title: "3種類のリロードボーナス",
      description: "ウェルカムボーナス使用後、好きなタイミングで「25%最大$250」「50%最大$150」「100%最大$100」の3種類から1つを選んで利用できるリロードボーナスです。",
      highlight: "継続プレイヤーにもお得な特典",
    },
  ],
  facts: [
    { label: "名称", value: "Shinobibet" },
    { label: "ローンチ", value: "2024" },
    { label: "運営会社", value: "Bridge Technologies B.V." },
    { label: "ライセンス", value: "Curaçao Gaming Control Board (GCB)" },
    { label: "VIPプログラム", value: "✅（招待制）" },
    { label: "対応言語", value: "日本語、英語など" },
    { label: "対応通貨", value: "USD, NZD, EUR" },
    {
      label: "ゲームタイプ",
      value:
        "Baccarat, Blackjack, Craps, Game Shows, Live Casino, Poker, Roulette, Slots, Video Poker, Bingo, Keno, Scratch Cards, Virtual Sports, Crash Games, Progressive Slots, Bonus Buy Slots",
    },
    {
      label: "ゲームプロバイダー",
      value:
        "Booming Games, Hacksaw Gaming, NetEnt, Nolimit City, Play’n GO, Pragmatic Play, Quickspin, RAW iGaming, Red Tiger, Relax, Swintt, Win Fast, Playson, Evoplay, Push Gaming, Leander Games, Bullshark Games, Kalamba Games, Reel Kingdom, Fugaso, Mascot Gaming, SlotMill, Peter & Sons, Print Studios, Spribe, OneTouch",
    },
    { label: "最小入金額", value: "$10" },
    { label: "最小出金額", value: "€20" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@shinobibet.com">support@shinobibet.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート" },
    { label: "仮想通貨", value: "BTC, ETH, LTC, USDT, XRP" },
  ],
  intro: {
    paragraphs: [
      "2024年7月に登場したばかりの新しいオンラインカジノ「Shinobibet（シノビベット）」を徹底的にレビューいたします。",
      "その名の通り、忍者をテーマとしたユニークなカジノです。可愛らしい忍者のマスコットキャラクターや、クールな忍者デザインが特徴的です。",
      "まだ情報が少ない新しいカジノですが、信頼性、ボーナス、ゲームラインナップなど、気になる点を詳しく解説してまいります。",
    ],
    ctas: [
        { text: "👉 Shinobibetの詳細を確認する", href: "https://www.japanesecasino.com/reviews/shinobibet#main-content" },
    ],
  },
  games: [
    "Shinobibetでは、圧巻の9,000種類以上のゲームが楽しめます。スロットは1,765種類以上あり、『Gates of Olympus』や『Moon Princess』シリーズなどの人気機種が揃っています。",
    "ライブカジノはEvolutionやPragmatic Playなどの主要プロバイダーが提供しており、『Crazy Pachinko』や『Lightning Roulette』といった人気ゲームショーもプレイ可能です。さらに、サッカーや野球など様々なスポーツに賭けられるスポーツベットも提供しています。",
  ],
  features: [
    "忍者をテーマにしたユニークな世界観が最大の特徴です。可愛らしい忍者のマスコットキャラクターがサイトの随所に登場し、親しみやすい雰囲気を演出しています。",
    "サイトデザインは視覚的に分かりやすいですが、一部の日本語翻訳が不自然であったり、文字サイズが不均一であるなど、使いやすさには改善の余地が見られます。",
  ],
  editorial: {
    author: "Momo",
    profileHref: "/authors/rina-okabe",
    hook: "豊富なゲーム数と選べるボーナスは魅力的ですが、専門家からの厳しい評価とプレイヤーからの苦情は無視できません。",
    theGoodStuff: "9,000を超えるゲームライブラリと、自分のプレイスタイルに合わせて3種類から選べるウェルカムボーナスは、大きな魅力です。ユニークな忍者テーマも、他のカジノにはない楽しさを提供しています。",
    theHeadsUp: "しかし、Casino Guruなどの専門サイトからの安全評価が非常に低く、『公正なギャンブルに反する』としてアカウントが閉鎖されたという深刻な苦情も報告されています。サイトの操作性や日本語サポートの対応時間にも課題があります。",
    finalThought: "新しいカジノであるため今後の改善に期待したいところですが、現状では多くの懸念点が存在します。ご利用を検討する際は、これらのリスクを十分に理解した上で、慎重に判断することをお勧めします。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "CasinoTsuが調査した「Shinobibet」は、2024年に設立されたばかりの新しいオンラインカジノです。その名の通り、忍者というユニークなテーマを掲げ、9,000種類以上という膨大なゲームを提供している点が目を引きます。プレイヤーが自身のスタイルに合わせて初回ボーナスを3種類から選べる点も、他のカジノにはない柔軟なアプローチと言えるでしょう。",
      "しかし、その魅力的な側面の裏で、深刻な懸念点が複数存在することも事実です。まず、Casino GuruやVegas Expertといった信頼性の高いレビューサイトから、安全指数3.8/10という極めて低い評価を受けており、「プレイ非推奨」とされています。これは、カジノの規模に対してプレイヤーからの苦情による紛争額が非常に高いことが原因とされており、中には出金申請後に証拠なくアカウントが閉鎖されたという悪質なケースも報告されています。",
      "サイトの使い勝手にも課題が見られます。デザインは親しみやすいものの、日本語の翻訳が不自然であったり、ゲームのカテゴリ分けが不正確であったりと、プレイヤーがストレスを感じる可能性があります。また、日本語のライブチャットサポートが17時から23時までと限定的なのも、日本人プレイヤーにとってはマイナスポイントです。",
      "結論として、Shinobibetは豊富なゲームとユニークなコンセプトを持つ一方で、その信頼性には大きな疑問符がつきます。CasinoTsuでは現在、当カジノとの直接的な提携は行っておらず、プレイヤーの皆様には、これらの情報を踏まえた上で、ご自身の責任において慎重に利用を判断していただくようお願い申し上げます。",
    ],
  },
  security: [
    "キュラソー政府発行のライセンス「Curaçao Gaming Control Board (GCB)」を取得",
    "運営会社Bridge Technologies B.V.は10以上のオンラインカジノ運営実績あり",
    "公式サイトに「プライバシーポリシー」および「クッキーポリシー」を明記",
    "RNG（乱数発生器）を使用し、ゲームの公平性を保証",
  ],
  responsiblePlay: [
    "自己除外: カスタマーサポートへのメールを通じて、一定期間のログイン制限を設定可能。",
  ],
  complaintStats: [
    "Casino Guru: 安全性指数 3.8/10（低評価）、「プレイ非推奨」",
    "Vegas Expert: 総合評価 3.8/10（Bad評価）、「プレイ非推奨」",
    "AskGamblers: CasinoRank 6.3/10",
    "プレイヤーからの苦情: カジノの規模に対し紛争額が非常に高く、アカウント閉鎖や引き出し拒否に関する深刻な苦情が報告されている。",
  ],
  awards: [
    "特になし",
  ],
  restrictedCountries: [
    "アメリカ合衆国",
    "フロリダ州",
    "ノルウェー",
  ],
  userConcerns: [
    "専門家からの極めて低い安全性評価",
    "アカウントの不当な閉鎖や引き出し拒否といった深刻なプレイヤーからの苦情",
    "サイトの操作性や日本語翻訳の品質に関する問題",
    "日本語ライブチャットの対応時間が限定的",
    "サイトがメンテナンス中でアクセスできない可能性があるとの報告",
  ],
  summary: [
    "Shinobibetは、忍者をテーマにしたユニークなデザインと9,000種類以上の豊富なゲーム、選べるウェルカムボーナスが魅力の新しいオンラインカジノです。",
    "しかし、サイトの使いやすさやサポート体制には改善の余地があり、何よりも専門家からの低い評価や深刻なプレイヤーからの苦情が大きな懸念材料です。",
    "新しいカジノであるため今後の改善に期待しつつも、現状では利用を慎重に検討する必要があります。プレイされる場合は、ご自身の責任において行ってください。",
  ],
  extraLinks: [
    { text: "🔰 オンラインカジノのライセンスとは？", href: "https://casinotsu.com/info/casino-license" },
    { text: "💰 オンラインカジノのVIPプログラム解説", href: "https://casinotsu.com/bonuses/vip" },
    { text: "🎰 オンカジ 入金不要ボーナス最新情報", href: "https://casinotsu.com/bonuses/no-deposit" },
  ],
  faq: [
    {
      question: "Shinobibetに入金不要ボーナスはありますか？",
      answer: "いいえ、Shinobibetには現在入金不要ボーナスはありません。ただし、初回入金ボーナス、キャッシュバックボーナス、フリーベットボーナス、およびリロードボーナスが利用可能です。",
    },
    {
      question: "Shinobibetのおすすめウェルカムボーナスは何ですか？",
      answer: "スロット好きの方には「100%入金ボーナス」、ライブカジノ好きの方には「キャッシュバックボーナス」、スポーツベットを楽しみたい方には「フリーベットボーナス」がおすすめです。",
    },
    {
      question: "3種類のウェルカムオファーはすべて利用できますか？",
      answer: "いいえ、新規限定のウェルカムオファーは、いずれか1つのみ選択して利用できます。",
    },
  ],
  cta: {
    text: "カジノ詳細を確認し、慎重に判断する",
    href: "https://www.japanesecasino.com/reviews/shinobibet",
  },
};