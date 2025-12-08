import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewCasumo: ReviewPageContent = {
  hero: {
    title: "Casumo (カスモ) カジノレビュー",
    subheading: "最大$600のウェルカムボーナス",
    description: "毎日開催される短時間集中型「弾丸トーナメント」が魅力。4,500種類以上の豊富なゲーム、カスモ限定の先行新作ゲームや専用ライブカジノテーブルも完備しています。",
    score: 4.2,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 82,
        note: "日本市場参入以来、安定した人気。毎日のトーナメントや豊富なプロモーションがプレイヤーを惹きつける。",
      },
      {
        label: "規約",
        percent: 81,
        note: "最大$600のボーナスは魅力的だが、最低入金額$50と賭け条件20倍(一体型)は平均的な水準。",
      },
      {
        label: "操作性",
        percent: 84,
        note: "サイトは平均的な使いやすさ。必要な情報にはスムーズにアクセスできるが、特筆すべき機能はない。",
      },
      {
        label: "サポート",
        percent: 93,
        note: "日本人スタッフによるサポートは丁寧で好感が持てる。ただし、返信に時間がかかる場合がある。",
      },
    ],
    highlights: [
      "プレイヤーに役立つスロット情報が豊富",
      "Casumo専用のライブカジノテーブルを完備",
      "毎日開催される豊富なゲームとトーナメント",
      "多数の信頼性が高いライセンスを保持",
      "RPG要素のある「アドベンチャー機能」が楽しめる",
    ],
    watchouts: [
      "カスタマーサポートからの返信が遅れることがある",
      "VIPプログラムは招待制",
      "ウェルカムボーナスの最低入金額が$50と高め",
    ],
    avatarSrc: "/assets/casino/casumo.png",
    avatarAlt: "Casumoのロゴ",
  },
  payments: {
    featured: [
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "クレジットカード",
        note: "主要なクレジットカードに対応",
      },
      {
        name: "JCB",
        icon: "/assets/payments/jcb.svg",
        href: "https://casinotsu.com/payment/jcb",
        badge: "人気",
        note: "日本のプレイヤーに便利なカード",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://casinotsu.com/payment/payz",
        badge: "Eウォレット",
        note: "迅速な入出金で広く利用されている",
      },
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "安心",
        note: "国内銀行からの直接送金に対応",
      },
      {
        name: "Venus Point",
        icon: "/assets/payments/venus-point.svg",
        badge: "ポイント制",
        note: "ポイントでの管理が可能な決済手段",
      },
    ],
    deposits: [
      { name: "クレジットカード (VISA, Master, JCB)", icon: "/assets/payments/visa.svg" },
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "Vega Wallet" },
      { name: "iWallet" },
      { name: "MuchBetter" },
      { name: "銀行送金", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Apple Pay" },
      { name: "Google Pay" },
      { name: "AstroPay" },
      { name: "ECOBANQ" },
      { name: "Paytm" },
      { name: "PhonePe" },
      { name: "Lipi" },
      { name: "UPI" },
      { name: "Sofortüberweisung" },
      { name: "Zimpler" },
      { name: "Swish" },
      { name: "Neosurf" },
      { name: "Interac e-Transfer" },
      { name: "Bizum" },
      { name: "PayPal" },
      { name: "CashToCode" },
      { name: "Euteller" },
      { name: "Giropay" },
      { name: "Ideal" },
      { name: "Siirto" },
      { name: "PugglePay" },
      { name: "Mobile Billing (Boku)" },
    ],
    withdrawals: [
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "VenusPoint" },
      { name: "iWallet" },
      { name: "Much Better" },
      { name: "銀行送金", icon: "/assets/payments/bank-transfer.svg" },
    ],
    notes: [
      "全ての決済方法で手数料は無料です。",
      "出金処理時間は内部で数時間、その後Eウォレットは数時間以内、銀行送金/カードは1〜5営業日です。",
      "月間の最大出金額は$50,000です。",
    ],
  },
  bonuses: {
    overview:
      "カスモのウェルカムボーナスは、初回と2回目の入金が対象で、合計で最大$600のボーナスを受け取ることができます。賭け条件は入金額とボーナス額の合計に対して20倍と標準的です。",
    noDeposit:
      "カスモでは現在、標準的な入金不要ボーナスは提供されていませんが、「アドベンチャー機能」のレベルアップ報酬としてボーナスを獲得できます。",
    extraSpins: {
      summary:
        "ウェルカムボーナスにフリースピンは含まれていません。しかし、カジノアドベンチャーを進めることで、レベルアップ報酬としてフリースピンを獲得するチャンスが豊富にあります。",
      schedule: [],
      warning: "",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "$400", code: "不要" },
      { depositNumber: "2回目", percent: "50%", cap: "$200", code: "不要" },
    ],
    conditions: [
      "最低入金額は$50です。",
      "ボーナスタイプは一体型で、賭け条件は「入金額＋ボーナス額」の20倍です。",
      "最大ベット額はスロット・テーブルゲーム・ライブカジノで$5です。",
      "ボーナスの有効期限は30日間です。",
      "リアルマネーとボーナスマネーは比率に応じて使用され、勝利金もその比率に応じて分配されます。",
    ],
    prohibitedGames: [
      "1429 Uncharted Seas", "Blood Suckers", "Dead or Alive", "Dead or Alive 2", "Jack Hammer 2", "Simsalabim", "Starmania", "Wolfpack Pays", "Arcade Bomb", "Beautiful Bones", "Caribbean Anne", "Castle Builder", "Castle Builder 2", "Cool Buck", "Crystal Cavern", "Eye of the Kraken", "Fantastic Fireworks!", "Frozen Inferno", "Golden Beauty", "Hong Bao", "Icy Wilds", "Le Kaffe Bar", "Lil’ Devil", "Magic of Sahara", "Midas Treasure", "Monkey God", "Oddin", "Pearls of India", "Pixies of the Forest 2", "Pride and Prey", "Rage to Riches", "Reel Heist", "Reel Rush 2", "Scarab", "Scrooge", "Scudamore’s Super Stakes", "Sea Hunter", "Super Monopoly Money", "Super Striker", "The Wish Master", "Tomb Rider: Secret of the Sword", "Tower Quest", "Vampire the Masquerade", "Village People Macho Moves", "Wilderland", "Zombie Hoard", "Zombie Queen", "Slot Vegas", "White Rabbit", "Extra Chilli", "Kingmaker",
    ],
  },
  offers: [
    {
      title: "毎日開催！弾丸トーナメント",
      description: "毎日30分または1時間ごとに開催される短時間集中型のトーナメント。対象ゲームをプレイし、ポイントを競い合います。上位入賞者にはリアルマネーの賞金が授与されます。",
      highlight: "参加無料で賞金はリアルマネー",
    },
    {
      title: "カジノアドベンチャー機能",
      description: "ゲームをプレイしてポイントを集め、カスモワールドを冒険するRPG要素のある機能。レベルアップするごとに、フリースピン、入金ボーナス、ボーナスマネーなどの「宝物」が手に入ります。",
      highlight: "プレイすればするほどお得な報酬",
    },
  ],
  facts: [
    { label: "名称", value: "Casumo (カスモ)" },
    { label: "ローンチ", value: "2012年" },
    { label: "運営会社", value: "Casumo Services Limited / Pret Play Limited" },
    { label: "ライセンス", value: "Malta Gaming Authority (MGA), UK Gambling Commission (UKGC), Swedish Gambling Authority, Gibraltar Regulatory Authority, Ontario iGaming (AGCO)" },
    { label: "VIPプログラム", value: "招待制" },
    { label: "対応言語", value: "日本語, 英語 (UK), ノルウェー語, スペイン語, ドイツ語, デンマーク語, フィンランド語, スウェーデン語" },
    { label: "対応通貨", value: "USD, EURなど" },
    {
      label: "ゲームタイプ",
      value:
        "バカラ, ブラックジャック, クラップス, ゲームショー, ライブカジノ, ポーカー, ルーレット, スロット, メガウェイズ, スリンゴ, プログレッシブジャックポット",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers">Big Time Gaming</Link>, <Link href="https://casinotsu.com/providers">Elk Studios</Link>, <Link href="https://casinotsu.com/providers">Microgaming</Link>, <Link href="https://casinotsu.com/providers">NetEnt</Link>, <Link href="https://casinotsu.com/providers">Red Tiger</Link>, <Link href="https://casinotsu.com/providers">Relax</Link>, <Link href="https://casinotsu.com/providers">Thunderkick</Link>, <Link href="https://casinotsu.com/providers">Yggdrasil</Link>, IGT, Pragmatic Play, Snowborn, Alchemy Gaming, Hacksaw Gaming, Wazdan, Push Gaming, Quickspin
        </span>
      ),
    },
    { label: "最小入金額", value: "$10" },
    { label: "最小出金額", value: "$20" },
    { label: "電話サポート", value: "✅ (地域による)" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:hey@casumo.com">hey@casumo.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (14:00〜23:00 日本時間)" },
    { label: "スカイプサポート", value: "❌" },
    { label: "サイト全体ペイアウト率", value: "97%" },
    { label: "デモモード", value: "✅" },
  ],
  intro: {
    paragraphs: [
      "2012年に設立されたCasumo（カスモ）は、ヨーロッパで数々の業界賞を受賞した著名なオンラインカジノです。日本市場に上陸して以来、ユニークなマスコットキャラクターと共に広く認知されています。",
      "革新的なプラットフォームとプレイヤー中心のアプローチで高い評価を得ており、特に毎日開催される「弾丸トーナメント」やRPG要素を取り入れた「アドベンチャー機能」が特徴です。",
      "2020年末にはカジノシークレットと同グループになり、今後も日本のオンラインカジノ界を牽引する存在として期待されています。豊富なゲームと日々のプロモーションで、常に楽しめる魅力的なカジノです。",
    ],
    ctas: [
      { text: "👉 カスモでアドベンチャーを始めよう！", href: "https://go.japanesecasino.com/go/casumo?referrer_path=%2Freviews%2Fcasumo" },
      { text: "🔰 賭け条件ってなに？わかりやすく解説！", href: "https://casinotsu.com/guides/wagering-requirements" },
    ],
  },
  games: [
    "カスモでは4,500種類以上の豊富なゲームを取り揃えており、スロットだけでも1,600種類を超えます。Play’n GOやNETENTなど45社以上の人気プロバイダーと提携しています。",
    "カスモ限定の機能として、対象ゲームでランダムに現金が当たる「デイリードロップジャックポット」があります。また、カスモ専用のライブカジノテーブルや、新たに「カスモ麻雀」カテゴリも追加され、日本のプレイヤーのニーズに応えています。",
  ],
  features: [
    "カスモのサイトは一見シンプルですが、「スロットの仕組み」やプロバイダー別のRTP（還元率）表など、プレイヤーに役立つ情報コンテンツが充実しています。",
    "iOSとAndroidの両方に対応した専用アプリが提供されており、モバイルデバイスからでも快適にプレイできます。",
  ],
  editorial: {
    author: "CasinoTsu編集部",
    profileHref: "/authors",
    hook: "ユニークなトーナメントとアドベンチャー機能が、日々のプレイを特別な体験に変えてくれます。",
    theGoodStuff: "毎日短時間で参加できる「弾丸トーナメント」は、忙しい人でも気軽に参加でき、賞金がリアルマネーなのが最大の魅力です。RPGのようにレベルアップしていくアドベンチャー機能も、継続してプレイするモチベーションになります。",
    theHeadsUp: "VIPプログラムが招待制であるため、全てのプレイヤーが最高の特典を受けられるわけではありません。また、サポートの対応は丁寧ですが、返信に時間がかかることがある点は念頭に置く必要があります。",
    finalThought: "カスモは単なるゲームプラットフォームではなく、プレイヤーを楽しませるための工夫が随所に凝らされています。特にトーナメント好きや、コツコツと進めるのが好きなプレイヤーには最適なカジノと言えるでしょう。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "CasinoTsuがカスモをレビューして感じるのは、その「プレイヤーを楽しませる」という強い意志です。2012年の設立以来、数々の賞を受賞してきた実績は伊達ではありません。サイトデザインは極めてシンプルですが、その裏には計算された使いやすさと、プレイヤーの勝利をサポートするための豊富な情報コンテンツが隠されています。",
      "カスモを他のカジノと一線を画す存在にしているのが、「弾丸トーナメント」と「アドベンチャー機能」です。毎日30分ごとに開催されるトーナメントは、プレイヤーに絶え間ない興奮と勝利のチャンスを提供します。また、RPG要素を取り入れたアドベンチャーは、単調になりがちなカジノプレイに目的と報酬を与え、長期的なエンゲージメントを生み出しています。",
      "4,500を超えるゲームライナップ、専用ライブカジノテーブル、そしてカスモ麻雀といったユニークなコンテンツは、あらゆるタイプのプレイヤーを満足させるでしょう。複数の信頼性の高いライセンスを保持し、セキュリティ対策も万全であるため、安心してプレイに集中できます。",
      "サポートの応答速度や招待制のVIPプログラムといった細かな改善点はありますが、それらを補って余りあるほどの魅力と独自性がカスモにはあります。「どこよりもプレイヤーに使い勝手の良いサービスを」という設立当初のモットーは、今もなおサイトの隅々に息づいています。",
    ],
  },
  security: [
    "サイト全体がSSLで暗号化され、個人情報と取引情報を保護",
    "全てのゲーム結果の公平性を保証するRNG（乱数生成器）認証",
    "高度な暗号化技術（ECDSA署名とSHA-256暗号化）でデータを保護",
    "プレイヤーの資金を運営資金とは別に管理する分別管理口座を採用",
  ],
  responsiblePlay: [
    "入金制限: 日・週・月単位で入金額の上限を設定可能",
    "時間制限: プレイ時間の上限を設定可能",
    "損失制限: 損失額の上限を設定可能",
    "自己排除: 一定期間または無期限にアクセスを制限",
    "タイムアウト: 24時間、48時間、1週間の短期プレイ停止",
    "ベット制限: 1回の最大ベット額を設定可能",
    "リアリティチェック: 設定した間隔でプレイ状況を通知",
  ],
  complaintStats: [],
  awards: [
    "2012年の設立以来、数々の業界賞を受賞しています。",
  ],
  restrictedCountries: [
    "カナダ（オンタリオ州）、イギリス、デンマーク、ドイツ、インド、ニュージーランド、ノルウェー、スペイン、スウェーデンなど、多くの国で利用可能です。",
  ],
  userConcerns: [
    "カスタマーサポートの返信に時間がかかる場合がある。",
  ],
  summary: [
    "毎日開催される短時間集中の「弾丸トーナメント」が最大の魅力。",
    "RPG要素のある「アドベンチャー機能」で、プレイしながら報酬を獲得できる。",
    "4,500種類以上の豊富なゲームと、カスモ専用のライブカジノテーブルを提供。",
    "シンプルで洗練されたサイトデザインと、プレイヤーに役立つ情報コンテンツが充実。",
    "サポートの応答速度に改善の余地はあるが、全体的に評判の良い信頼できるカジノ。",
  ],
  extraLinks: [
    { text: "🎰 スロットの仕組みを徹底解説", href: "https://casinotsu.com/slots/slots-strategies" },
  ],
  faq: [
    {
      question: "カスモには特徴的なゲームはありますか？",
      answer: "はい、「カスモ麻雀🀄️」という珍しいカテゴリーがあります。その他、MegawaysやSlingo、人気のゲームショーも豊富です。",
    },
    {
      question: "チャットサポートは利用できますか？",
      answer: "はい、日本時間の14:00から23:00まで利用可能です。時間外や繋がりにくい場合はメールでの問い合わせもできます。",
    },
    {
      question: "弾丸トーナメントとは何ですか？",
      answer: "毎日30分または1時間ごとに開催されるカスモ独自のトーナメントです。対象ゲームをプレイしてポイントを競い、上位に入るとリアルマネーの賞金がもらえます。",
    },
  ],
  cta: {
    text: "早速カスモに登録してプレイを始める！",
    href: "https://go.japanesecasino.com/go/casumo?referrer_path=%2Freviews%2Fcasumo",
  },
};