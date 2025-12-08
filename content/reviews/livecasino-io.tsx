import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewLivecasinoIo: ReviewPageContent = {
  hero: {
    title: "ライブカジノアイオー（Livecasino.io）の評判",
    subheading: "ライブカジノ特化型の仮想通貨カジノ",
    description: "ビットカジノ系列のライブカジノアイオーをCasinoTsuが徹底レビュー。豊富なライブゲーム、独自のロイヤリティプログラム、仮想通貨決済の詳細から評判まで解説します。",
    score: 4.0,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 80,
        note: "アイオー系列として高い知名度。人気プロバイダーも多く、Casino Guruから8.0/10の高評価。",
      },
      {
        label: "規約",
        percent: 74,
        note: "豊富なキャンペーンやトーナメントが魅力。ウェルカムオファーは最大250 USDTのパッケージがあります。",
      },
      {
        label: "操作性",
        percent: 80,
        note: "モバイルでの操作性が良好。決済は仮想通貨が中心で、それ以外は銀行送金のみと限定的。",
      },
      {
        label: "サポート",
        percent: 83,
        note: "年中無休24時間の日本語ライブチャット対応。待ち時間も少なくスムーズ。",
      },
    ],
    highlights: [
      "多様な仮想通貨での入出金が可能",
      "ライブカジノゲームが豊富に揃っている",
      "ライブカジノ専用のプライベートテーブルを完備",
      "充実したロイヤリティプログラムとキャッシュバック特典",
    ],
    watchouts: [
      "決済方法が限定的（仮想通貨以外は銀行送金のみ）",
      "スロットのタイトル数がやや限定的",
      "ウェルカムボーナスには賭け条件が付帯する場合がある",
    ],
  },
  payments: {
    featured: [
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "主要仮想通貨",
        note: "迅速な入出金と高い匿名性",
      },
      {
        name: "Ethereum",
        icon: "/assets/payments/ethereum.svg",
        href: "https://casinotsu.com/payment/ethereum",
        badge: "仮想通貨",
        note: "スマートコントラクトで人気の通貨",
      },
      {
        name: "Tether",
        icon: "/assets/payments/tether.svg",
        href: "https://casinotsu.com/payment/tether",
        badge: "ステーブルコイン",
        note: "米ドルと連動し価格が安定",
      },
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "法定通貨",
        note: "Sumo Pay経由で日本円に対応",
      },
    ],
    deposits: [
        { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg" },
        { name: "TRON (TRX)" },
        { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
        { name: "Litecoin (LTC)", icon: "/assets/payments/litecoin.svg" },
        { name: "Ripple (XRP)", icon: "/assets/payments/ripple.svg" },
        { name: "Tether (USDT)", icon: "/assets/payments/tether.svg" },
        { name: "Cardano (ADA)" },
        { name: "Dogecoin (DOGE)" },
        { name: "Binance Coin (BNB)" },
        { name: "USD Coin (USDC)" },
        { name: "Shiba Inu Coin (SHIB)" },
        { name: "銀行振込 (Sumo Pay)", icon: "/assets/payments/bank-transfer.svg" },
    ],
    withdrawals: [
        { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg" },
        { name: "TRON (TRX)" },
        { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
        { name: "Litecoin (LTC)", icon: "/assets/payments/litecoin.svg" },
        { name: "Ripple (XRP)", icon: "/assets/payments/ripple.svg" },
        { name: "Tether (USDT)", icon: "/assets/payments/tether.svg" },
        { name: "Cardano (ADA)" },
        { name: "Dogecoin (DOGE)" },
        { name: "Binance Coin (BNB)" },
        { name: "USD Coin (USDC)" },
        { name: "Shiba Inu Coin (SHIB)" },
        { name: "銀行振込 (Sumo Pay)", icon: "/assets/payments/bank-transfer.svg" },
    ],
    notes: [
      "仮想通貨に特化。入金反映時間は最大15分、出金処理は平均30分と高速です。",
      "出金上限はBTCの場合、週50 BTC / 月200 BTC。2,000ドル/ユーロを超える出金には本人確認（KYC）が必要です。",
      "Metamask連携時には0.875%の手数料が発生します。",
    ],
  },
  bonuses: {
    overview:
      "ライブカジノアイオーでは、ウェルカムオファーの他に、VIP向けのキャッシュバックやユニークな抽選会、プレイするほどお得になるロイヤリティプログラムなど、多彩なプロモーションが常時開催されています。",
    noDeposit:
      "現在、入金不要ボーナスの提供はありません。最新情報はキャンペーンページをご確認ください。",
    welcomeRows: [
      { depositNumber: "初回 (限定)", percent: "100%", cap: "¥70,000 + 50FS", code: "申請必要" },
    ],
    loyaltyClub: {
      summary:
        "€1相当のベットごとに5ポイントが付与され、ポイントを貯めてロイヤリティレベルを上げるプログラムです。レベルが上がると、マイルストーン景品（フリースピンやキャッシュバック）がもらえ、ポイント還元率も上昇します。",
      levels: [
        { level: "ビギナー", points: "0 - 4", multiplier: "1倍" },
        { level: "ファン", points: "5 - 3,749", multiplier: "1倍" },
        { level: "エキスパート", points: "3,750 - 29,999", multiplier: "1倍" },
        { level: "マスター", points: "30,000 - 249,999", multiplier: "1.25倍" },
        { level: "グル", points: "250,000 - 749,999", multiplier: "1.5倍" },
        { level: "レジェンド", points: "750,000 - 3,749,999", multiplier: "2倍" },
        { level: "ヒーロー", points: "3,750,000+", multiplier: "3倍" },
      ],
      rakeback: "ロイヤリティレベルに応じて、最大20%のレーキバック（ベット額の一部還元）を受け取ることができます。",
    },
  },
  offers: [
    {
      title: "マンスリーVIPキャッシュバック",
      description: "ハイローラー向けのキャッシュバックボーナス。毎月のベット額に応じてVIPティアが決定し、最大20%（上限10,000 USDT）のキャッシュバックが受けられます。",
      highlight: "VIPレベルは毎月リセット。ハイローラーには非常にお得な制度です。",
    },
    {
      title: "99クラブ",
      description: "1日あたり99mBTC相当をベットすることで参加できるデイリー抽選会。最大1BTCの賞金や、最大15,000 USDT相当のミステリーチェストが当たるチャンスがあります。",
    },
    {
      title: "トーナメント",
      description: "スロットとライブテーブルゲームの両方で豪華賞品が用意されたトーナメントが頻繁に開催されています。1 USDT/mBTCのベットごとに1ポイントが付与され、ランキングを競います。",
    },
  ],
  facts: [
    { label: "名称", value: "Livecasino.io" },
    { label: "ローンチ", value: "2020年" },
    { label: "運営会社", value: "Moon Technologies B.V." },
    { label: "ライセンス", value: "キュラソー E-Gaming N.V. (1668/JAZ, OGL/2023/111/0069), コモロ (AOFA)" },
    { label: "VIPプログラム", value: "✅" },
    {
        label: "対応言語",
        value: "日本語、英語、韓国語、ベトナム語、タイ語、ポルトガル語など",
    },
    { label: "対応通貨", value: "BTC, ETH, LTC, XRP, USDT, ADA, DOGE, BNB, USDC, SHIB, TRX, JPY" },
    {
      label: "ゲームタイプ",
      value:
        "バカラ、ブラックジャック、クラップス、ゲームショー、ライブカジノ、ポーカー、ルーレット、スロット、インスタントゲーム",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/betsoft">BetSoft</Link>, <Link href="https://casinotsu.com/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="https://casinotsu.com/providers/blueprint-gaming">Blueprint Gaming</Link>, <Link href="https://casinotsu.com/providers/fantasma-games">Fantasma</Link>, <Link href="https://casinotsu.com/providers/golden-hero-games">Golden Hero</Link>, <Link href="https://casinotsu.com/providers/habanero">Habanero</Link>, <Link href="https://casinotsu.com/providers/microgaming">Microgaming</Link>, <Link href="https://casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://casinotsu.com/providers/pg-soft">PG SOFT</Link>, <Link href="https://casinotsu.com/providers/playson">Playson</Link>, <Link href="https://casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/quickspin">Quickspin</Link>, <Link href="https://casinotsu.com/providers/red-tiger">Red Tiger</Link>, <Link href="https://casinotsu.com/providers/relax-gaming">Relax</Link>, Slingshot Studios, <Link href="https://casinotsu.com/providers/thunderkick">Thunderkick</Link>, <Link href="https://casinotsu.com/providers/yggdrasil">Yggdrasil</Link>, Push Gaming, Asia Gaming, Games Global, Hacksaw Gaming
        </span>
      ),
    },
    { label: "最小入金額", value: "0.25 mBTC (仮想通貨により異なる)" },
    { label: "最小出金額", value: "0.5 mBTC (仮想通貨により異なる)" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: (<span><Link href="mailto:japancs@livecasino.io">japancs@livecasino.io</Link>, <Link href="mailto:cs@livecasino.io">cs@livecasino.io</Link></span>) },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間日本語対応)" },
  ],
  intro: {
    paragraphs: [
      "ビットカジノやスポーツベットカジノ・アイオーの姉妹カジノとして2020年に誕生した『Livecasino.io（ライブカジノアイオー）』。その名の通り、ライブカジノのゲームラインナップやキャンペーンが非常に豊富で、プライベートテーブルも充実しています。",
      "仮想通貨決済に完全対応しており、ハイローラーやライブカジノ好きには特におすすめのオンラインカジノです。",
      "スロット好きも楽しめるよう、『スロット彼女』のようなユニークな限定ゲームも導入されています。このモダンなカジノの詳細を、CasinoTsuが徹底的に掘り下げていきます。",
    ],
    ctas: [
      { text: "👉 ライブカジノアイオーへの登録はこちらから！", href: "https://go.japanesecasino.com/go/livecasino-io" },
    ],
  },
  games: [
    "2,500～3,000種類以上の豊富なゲームを取り揃えています。特にライブカジノは、Evolution、Ezugi、Pragmatic Playなど複数のプロバイダーから約200タイトルが提供されており、品揃えは圧巻です。",
    "ライブカジノアイオー系列限定のプライベートテーブル『ボンベイクラブ』では、日本語対応テーブルも多く、ハイローラーでも快適にプレイできます。",
    "スロットも30社以上のプロバイダーから2,000タイトル以上を提供。『スロット彼女』のような限定ゲームもあり、ライブカジノがメインでありながらスロットファンも飽きさせません。",
  ],
  features: [
    "洗練されたダークテーマのデザインが特徴。HTML5技術によりモバイルデバイスに最適化されており、ブラウザ経由で非常に快適にプレイできます。",
    "ゲーム検索機能が充実しており、プロバイダー、ボラティリティ、RTP（ペイアウト率）、ヒット率などで絞り込み検索が可能です。ライブRTPも表示され、戦略的なゲーム選択に役立ちます。",
  ],
  editorial: {
    author: "CasinoTsu編集部",
    profileHref: "#",
    hook: "ライブカジノ好きと仮想通貨ユーザーのための特化型カジノ。ターゲットは明確です。",
    theGoodStuff: "ライブカジノのラインナップは業界トップクラス。『ボンベイクラブ』のような専用テーブルは、ハイローラーにとって最高の環境です。ロイヤリティプログラムも非常によくできており、プレイすればするほど還元される仕組みは継続的なプレイ意欲を掻き立てます。",
    theHeadsUp: "決済方法が仮想通貨と銀行送金に限られるため、Eウォレットをメインで使いたいプレイヤーには不便かもしれません。また、スロットの数は多いものの、ライブカジノに比べるとプロモーションは少なめです。",
    finalThought: "自分のプレイスタイルが『ライブカジノ中心・仮想通貨決済』に合致するなら、これ以上ないほど快適なカジノです。特にロイヤリティプログラムは長期的に見て大きなメリットになるでしょう。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
        "2020年にオープンし、早くも2021年にリニューアルを遂げたライブカジノアイオーは、その名の通り「ライブカジノ」と「仮想通貨」に徹底的にこだわったオンラインカジノです。ビットカジノアイオーの姉妹ブランドとして、その運営ノウハウと信頼性を背景に、明確なターゲット層にアプローチしています。",
        "最大の魅力は、やはりライブカジノの充実度です。Evolutionをはじめとする複数のトッププロバイダーと提携し、約200ものテーブルを提供。さらに、系列限定のハイローラー向けプライベートテーブル『ボンベイクラブ』は、高いベットリミットと日本語対応ディーラーを揃え、特別な体験を約束します。",
        "決済面では、10種類以上の仮想通貨に対応し、入出金速度は非常に高速です。仮想通貨ユーザーにとってはストレスフリーな環境ですが、一方で法定通貨の選択肢が銀行送金のみというのは、万人向けとは言えない点です。",
        "ボーナスシステムは、プレイすればするほどリワードが大きくなるロイヤリティプログラムが中心です。最大20%のレーキバックは、特にヘビーユーザーにとって強力なインセンティブとなります。ウェルカムボーナスは控えめですが、これは一過性のプレイヤーよりも、長期的に遊ぶ顧客を重視する姿勢の表れでしょう。",
        "サポート体制は24時間日本語ライブチャットが完備されており、非常に心強いです。サイトの操作性もモバイルに最適化されており、ゲーム検索機能も優秀です。",
        "総じて、ライブカジノアイオーは「ライブカジノが好きで、主に仮想通貨でプレイする」というプレイヤーにとって、最高の選択肢の一つです。ターゲットは絞られていますが、その層に対する満足度は極めて高いカジノと言えます。",
    ],
  },
  security: [
    "キュラソーおよびコモロの正規ライセンスを取得して運営",
    "SSL 256ビット暗号化と最新のファイアウォール技術でデータを保護",
    "Google Authenticatorによる二要素認証（2FA）に対応",
    "Certik監査済みの乱数生成器（RNG）によりゲームの公平性を保証",
  ],
  responsiblePlay: [
    "24時間のクーリングオフ期間の設定が可能",
    "1週間、1ヶ月、6ヶ月、または永続的な自己制限（自己退会）設定が可能",
    "上記の設定はカスタマーサポートへの連絡により適用",
    "注意：12ヶ月から18ヶ月間アカウントが非アクティブの場合、残高が没収される可能性があるポリシーあり",
  ],
  complaintStats: [
    "Casino Guruから「High Safety Index」として8.0/10の高評価を獲得",
  ],
  awards: [
    "特になし",
  ],
  restrictedCountries: [
    "アフガニスタン", "アメリカ領サモア", "オーストラリア", "ベルギー", "エストニア",
    "フランス", "ドイツ", "グアム", "イラン", "イラク", "マルタ", "ミャンマー",
    "オランダ", "北マリアナ諸島", "北朝鮮", "プエルトリコ", "ロシア連邦", "シリア",
    "トリニダード・トバゴ", "ウクライナ", "イギリス", "アメリカ合衆国（およびその属領）",
    "バージン諸島（米）", "イエメン",
  ],
  userConcerns: [
    "決済方法が限定的で、仮想通貨ユーザー以外には不便",
    "カスタマーサポートの対応について、SNS上で厳しい意見が散見される場合がある",
    "長期間非アクティブなアカウントの残高が没収される可能性がある",
  ],
  summary: [
    "ライブカジノアイオーは、ライブカジノと仮想通貨決済に特化した戦略で、特定のプレイヤー層から絶大な支持を得ています。",
    "豊富なライブゲーム、ハイローラー向けの専用テーブル、プレイするほどお得になるロイヤリティプログラムが最大の魅力です。",
    "スロットの品揃えも十分ですが、決済方法の選択肢の少なさが唯一のネックかもしれません。",
    "ライブカジノを仮想通貨で存分に楽しみたいプレイヤーには、間違いなくおすすめできるオンラインカジノです。",
  ],
  extraLinks: [
    { text: "🔰 仮想通貨でカジノを始める方法", href: "https://casinotsu.com/crypto" },
    { text: "👑 ハイローラー向けカジノ特集", href: "https://casinotsu.com/bonuses/vip" },
  ],
  faq: [
    {
      question: "VIPになれば、キャッシュバックはありますか？",
      answer: "はい。ライブカジノアイオーにはVIPキャッシュバックボーナスがあります。VIPレベルに応じてキャッシュバック率が変動いたします。",
    },
    {
      question: "ライブカジノアイオーにロイヤリティクラブはありますか？",
      answer: "はい。ロイヤリティークラブは全部で7つのレベルがあり、プレイすればするほどポイントが貯まり、レベルアップに応じて様々な特典を受けられます。",
    },
  ],
  cta: {
    text: "ライブカジノアイオーでモダンなカジノ体験を！",
    href: "https://go.japanesecasino.com/go/livecasino-io",
  },
    images: {
    casino: [
      "/assets/jp/livecasino-io.png",
    ],
  },
};