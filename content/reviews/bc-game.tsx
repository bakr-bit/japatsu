import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewBcGame: ReviewPageContent = {
  hero: {
    title: "BC.GAME（BCゲーム）レビュー",
    subheading: "最大$1,600のウェルカムボーナス + 460回フリースピン",
    description: "7,500種類以上の圧巻のゲーム数と高額当選のチャンスがある宝くじが魅力！仮想通貨に特化したカジノ、BC.GAMEをCasinoTsuが徹底レビューします。",
    score: 4.0,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 75,
        note: "約120種類の仮想通貨に対応し業界トップクラスだが、知名度はまだ発展途上。決済方法の拡充やサイトの完全日本語対応で人気向上の可能性あり。",
      },
      {
        label: "規約",
        percent: 84,
        note: "入金不要スピンや最大$1,600のウェルカムパッケージは非常に豪華。ただし、賭け条件は厳しめに設定されているため、割り切って楽しむ方向け。",
      },
      {
        label: "操作性",
        percent: 86,
        note: "サイトはシンプルで使いやすいが、ゲームの検索機能には改善の余地がある。",
      },
      {
        label: "サポート",
        percent: 81,
        note: "24時間日本語チャット対応だが、返答に時間がかかったり、自動翻訳での対応だったりする点が少し気になる。",
      },
    ],
    highlights: [
      "約120種類の豊富な仮想通貨に対応",
      "入金不要・4段階のウェルカムボーナスなどプロモーションが豊富",
      "クラッシュゲームなど60種類以上のオリジナルゲームがプレイ可能",
      "7,500種類を超える膨大なゲームライナップ",
    ],
    watchouts: [
      "ボーナスの賭け条件が厳しめ (45倍〜60倍)",
      "サイトの一部が英語表記のまま",
      "日本語サポートの応答に時間がかかることがある",
      "電子マネー決済がVega Walletのみ",
    ],
    avatarSrc: "/assets/casino/bcgame.png",
    avatarAlt: "BC.Gameのロゴ",
  },
  payments: {
    featured: [
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "業界トップクラスの約120銘柄に対応",
      },
      {
        name: "Ethereum",
        icon: "/assets/payments/ethereum.svg",
        href: "https://casinotsu.com/payment/ethereum",
        badge: "仮想通貨",
        note: "主要なアルトコインももちろん利用可能",
      },
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "日本円",
        note: "仮想通貨以外に日本円での直接入出金にも対応",
      },
      {
        name: "Tether",
        icon: "/assets/payments/tether.svg",
        href: "https://casinotsu.com/payment/tether",
        badge: "ステーブルコイン",
        note: "価格変動の少ないUSDTも使える",
      },
      {
        name: "Ripple",
        icon: "/assets/payments/ripple.svg",
        badge: "高速",
        note: "送金スピードの速いXRPに対応",
      },
    ],
    deposits: [
      { name: "銀行送金", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
      { name: "Litecoin", icon: "/assets/payments/litecoin.svg" },
      { name: "Ripple" },
      { name: "Shiba Inu" },
      { name: "Tether", icon: "/assets/payments/tether.svg" },
      { name: "Dogecoin" },
      { name: "TRON" },
      { name: "USD Coin" },
      { name: "BNB" },
    ],
    withdrawals: [
      { name: "銀行送金", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
      { name: "Litecoin", icon: "/assets/payments/litecoin.svg" },
      { name: "Ripple" },
      { name: "Shiba Inu" },
      { name: "Tether", icon: "/assets/payments/tether.svg" },
    ],
    notes: [
      "仮想通貨での入出金には上限・下限額が設定されていません。",
      "銀行送金の場合、最低入金額は¥20,000、最高出金額は¥1,000,000です。",
      "サイト内でMoonPayやBanxaを通じて仮想通貨を直接購入することも可能です。",
    ],
  },
  bonuses: {
    overview:
      "BC.GAMEはユニークで豪華なボーナスが満載です。登録するだけでもらえる入金不要フリースピンから始まり、4回の入金にわたる最大$1,600のウェルカムパッケージ、さらに毎日挑戦できるラッキースピンなど、プレイヤーを楽しませる工夫が随所に見られます。",
    noDeposit:
      "新規登録後、3日間にわたって合計60回のフリースピンが入金不要で付与されます。1日20回ずつ付与され、受け取り・使用期限はそれぞれ24時間です。このフリースピンからの勝利金には60倍の賭け条件が適用されます。",
    extraSpins: {
      summary:
        "ウェルカムボーナスの一部として、4回の入金それぞれで100回、合計で最大400回のフリースピンを獲得できます。フリースピンの代わりにスポーツベット用のフリーベットを選択することも可能です。",
      schedule: [
        "各入金時に100回分のフリースピンが付与（またはフリーベット5回分）",
        "フリースピンの受け取り・使用期限はそれぞれ24時間",
      ],
      warning: "フリースピンからの勝利金の最大出金額は$10と低めに設定されています。勝利金の賭け条件は40倍です。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "120%", cap: "$500", code: "不要" },
      { depositNumber: "2回目", percent: "100%", cap: "$300", code: "不要" },
      { depositNumber: "3回目", percent: "150%", cap: "$500", code: "不要" },
      { depositNumber: "4回目", percent: "100%", cap: "$300", code: "不要" },
    ],
    conditions: [
      "入金ボーナスを受け取るには本人確認（KYC）の完了が必要。",
      "入金ボーナスマネーの賭け条件は45倍。",
      "入金フリースピンからの勝利金の賭け条件は40倍。",
      "ボーナスの有効期限は30日間。",
      "入金ボーナスからの最大出金額はボーナス額の200%。",
      "賭け条件の消化率はゲームによって異なり、0%のゲームもあるため規約の確認が必須。",
    ],
    prohibitedGames: [
        "賭け条件の消化率はスロットゲームの中でも1%〜100%まで様々です。",
        "全く消化に反映されないゲームもあるため、プレイ前に利用規約を必ず確認してください。",
    ],
  },
  offers: [
    {
      title: "BCゲームウェルカムくじ",
      description: "期間限定（〜2026年1月1日）で、新規登録者が参加できる宝くじ。$10以上ベットするごとにチケットを獲得し、最大$100,000の賞金が当たるチャンスがあります。",
      highlight: "ベット額に応じて当選確率がアップ",
    },
    {
      title: "入金不要ラッキースピンボーナス",
      description: "VIPレベルが「シルバー」以上のプレイヤーは、1日1回ルーレットを回して仮想通貨などの賞品がもらえる入金不要ボーナスに参加できます。",
      highlight: "毎日無料で仮想通貨が当たるチャンス",
    },
    {
      title: "カジノトーナメント",
      description: "対象ゲームをプレイして高額賞金を狙うトーナメントが定期的に開催されています。中には賞金総額8,600万円規模のイベントも。",
      highlight: "高額賞金プールで他のプレイヤーと競い合う",
    },
    {
        title: "パチンコジャックポットチャレンジ",
        description: "期間限定（〜2025年9月30日）で、パチンコプレイ中に最大100万ドルのジャックポットを獲得するチャンスがあります。",
        highlight: "オンラインパチスロで一攫千金",
    }
  ],
  facts: [
    { label: "名称", value: "BC.Game" },
    { label: "ローンチ", value: "2017年" },
    { label: "運営会社", value: "Twocent Technology Limited" },
    { label: "ライセンス", value: "Internet Gaming License Validation (Anjouan)" },
    { label: "VIPプログラム", value: "✅ (招待制)" },
    { label: "対応言語", value: "日本語、英語ほか多数" },
    { label: "対応通貨", value: "JPY, USD, 120種類以上の仮想通貨" },
    {
      label: "ゲームタイプ",
      value: "バカラ, ブラックジャック, ゲームショー, ライブカジノ, ポーカー, ルーレット, スロット, スポーツベット, パチンコ, オリジナルゲーム",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/bgaming">BGAMING</Link>, <Link href="https://casinotsu.com/providers/betsoft">BetSoft</Link>, <Link href="https://casinotsu.com/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="https://casinotsu.com/providers/blueprint-gaming">Blueprint Gaming</Link>, <Link href="https://casinotsu.com/providers/booming-games">Booming Games</Link>, <Link href="https://casinotsu.com/providers/booongo">Booongo</Link>, <Link href="https://casinotsu.com/providers/elk-studios">Elk Studios</Link>, <Link href="https://casinotsu.com/providers/endorphina">Endorphina</Link>, <Link href="https://casinotsu.com/providers/habanero">Habanero</Link>, <Link href="https://casinotsu.com/providers/hacksaw-gaming">Hacksaw Gaming</Link>, Lucksome, <Link href="https://casinotsu.com/providers/microgaming">Microgaming</Link>, <Link href="https://casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://casinotsu.com/providers/nolimit-city">Nolimit City</Link>, <Link href="https://casinotsu.com/providers/pg-soft">PG SOFT</Link>, <Link href="https://casinotsu.com/providers/playson">Playson</Link>, <Link href="https://casinotsu.com/providers/playtech">Playtech</Link>, <Link href="https://casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/quickspin">Quickspin</Link>, <Link href="https://casinotsu.com/providers/red-tiger">Red Tiger</Link>, <Link href="https://casinotsu.com/providers/relax-gaming">Relax</Link>, Slingshot Studios, <Link href="https://casinotsu.com/providers/spinomenal">Spinomenal</Link>, <Link href="https://casinotsu.com/providers/thunderkick">Thunderkick</Link>
        </span>
      ),
    },
    { label: "最小入金額", value: "仮想通貨は制限なし、銀行振込は¥20,000" },
    { label: "最小出金額", value: "情報なし" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@bc.game">support@bc.game</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間対応)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "BC.GAME（ビーシーゲーム）は、2017年にサービスを開始した仮想通貨特化型のオンラインカジノです。その最大の特徴は、ビットコインやイーサリアムをはじめとする約120種類もの仮想通貨に対応している点で、業界でもトップクラスの品揃えを誇ります。",
      "ゲームの数も圧巻で、7,500種類以上をラインナップ。さらに、4段階にわたる最大$1,600のウェルカムボーナスや、登録だけでもらえる入金不要フリースピンなど、非常に豪華なプロモーションが用意されています。",
      "一方で、サイトの一部が日本語に対応していなかったり、サポートの応答が遅かったりといった課題も抱えています。このレビューでは、そんなBC.GAMEの魅力と注意点を、CasinoTsuが公平な視点で徹底的に解説します。",
    ],
    ctas: [
      { text: "👉 BC.GAMEで今すぐプレイ！", href: "https://go.japanesecasino.com/go/bc-game" },
      { text: "💫 仮想通貨が使えるオンラインカジノをチェック", href: "https://casinotsu.com/crypto" },
    ],
  },
  games: [
    "BC.GAMEのゲーム総数は7,500種類以上と、業界でも屈指の規模を誇ります。スロットだけでも7,000種類を超え、ボーナス購入機能付きスロットや新作スロットなど、カテゴリ別に簡単に検索できます。",
    "特筆すべきは60種類以上にも及ぶオリジナルゲームで、人気のクラッシュゲームやプリンコなどが楽しめます。さらに、最近ではオンラインパチンコ・パチスロも導入され、日本人プレイヤーにとっての魅力がさらに増しました。ライブカジノもEvolution社やPragmatic Play社など主要プロバイダーが揃っており、スポーツベットも楽しめるハイブリッド型カジノです。",
  ],
  features: [
    "BC.GAMEは、XP（経験値）やレベルアップシステム、実績解除といったゲーミフィケーション要素を導入しており、プレイヤーを飽きさせない工夫が凝らされています。",
    "サイトデザインはモダンで、ダークモードへの切り替えも可能。ダッシュボードはカスタマイズでき、自分好みのプレイ環境を構築できます。また、プレイヤー同士が交流できるチャットルーム機能も特徴的です。",
  ],
  editorial: {
    author: "Kotone",
    profileHref: "/authors/rina-okabe",
    hook: "仮想通貨ユーザーにとっては天国のようなカジノ。ただし、豪華なボーナスの裏には厳しい条件も。",
    theGoodStuff: "約120種類の仮想通貨対応は圧巻の一言。ゲーム数も膨大で、オリジナルゲームやパチンコまであるため、遊び尽くすことは不可能です。ボーナスも非常に豪華で、特に4段階のウェルカムパッケージは大きな魅力です。",
    theHeadsUp: "豪華なボーナスには、45倍や60倍といった厳しい賭け条件が付いてきます。フリースピンからの勝利金出金上限が$10というのも厳しい点です。また、サポートの応答速度やサイトの完全な日本語対応など、サービスの質にはまだ改善の余地があります。",
    finalThought: "厳しい条件を理解した上でボーナスをうまく活用できる、経験豊富な仮想通貨プレイヤーに特におすすめのカジノです。そのポテンシャルは非常に高く、今後のサービス改善に大いに期待したいです。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "BC.GAMEは、仮想通貨オンラインカジノの分野でリーダー的な存在と言えるでしょう。2017年の設立以来、特にその仮想通貨対応の幅広さで他を圧倒しており、その数は約120種類にものぼります。この点は、2021年に「ベスト仮想通貨カジノ」を受賞した実績にも裏付けられています。",
      "ゲームの多様性もBC.GAMEの大きな魅力です。7,500を超えるゲームライブラリには、最新のスロットから、Evolution社などが提供する質の高いライブカジノ、さらには60種類以上のオリジナルゲームまで、あらゆるプレイヤーの好みに応えるコンテンツが揃っています。最近ではオンラインパチンコも導入され、日本市場への意欲も感じられます。",
      "プロモーションの規模も特筆すべき点です。登録だけでもらえる入金不要フリースピンに始まり、4回の入金で最大$1,600にもなるウェルカムボーナスは、プレイヤーに大きなアドバンテージを与えます。しかし、これらのボーナスには45倍以上の厳しい賭け条件が設定されており、利用する際には注意が必要です。",
      "一方で、サービスの細部にはまだ改善の余地が見られます。サイトの一部が英語のままであったり、日本語サポートの応答が遅かったりする点は、今後の課題と言えるでしょう。プレイヤー間のチャットルームで情報交換が活発なのは面白い特徴ですが、公式サポートの質向上が望まれます。",
      "総じて、BC.GAMEは仮想通貨をメインに使うプレイヤーにとって、他に類を見ないほど魅力的で可能性に満ちたカジノです。厳しいボーナス条件を理解し、その広大なゲームの海を楽しみ尽くしたい方には、最高のプラットフォームとなるでしょう。",
    ],
  },
  security: [
    "コモロ連合アンジュアン自治島政府発行のライセンスを取得",
    "ブロックチェーン技術を活用した「Provably Fair」システムを導入し、ゲームの公平性をプレイヤー自身が検証可能",
    "提携するゲームプロバイダーはすべてライセンスを取得済みで、RNGにより公平性が保証されている",
    "匿名でのプレイを推奨しているが、必要に応じてKYCを要求し、マネーロンダリング対策を実施",
  ],
  responsiblePlay: [
    "自己排除: ライブサポートを通じて、アカウントの一時的または永久的な利用停止をリクエスト可能。",
    "サイト内に「責任あるギャンブル」に関する情報ページを設置。",
  ],
  complaintStats: [],
  awards: [
    "Sigma Awards 2021にて「ベスト仮想通貨オンラインカジノ」を受賞",
  ],
  restrictedCountries: [],
  userConcerns: [
    "カスタマーサポートの応答が遅い、または自動翻訳での対応",
    "サイトの一部が日本語に翻訳されておらず、英語表記のまま",
    "ゲームの検索機能がやや使いにくい",
  ],
  summary: [
    "約120種類の仮想通貨に対応した、業界トップクラスのクリプトカジノ。",
    "入金不要ボーナスや4段階のウェルカムボーナスなど、プロモーションが非常に豪華。",
    "7,500種類以上の豊富なゲームに加え、60種類以上のオリジナルゲームやオンラインパチンコも楽しめる。",
    "ボーナスの賭け条件が厳しく、サポート体制やサイトの日本語対応には改善の余地があるため、経験者向けの側面も。",
  ],
  extraLinks: [
    { text: "🔰 RNG（乱数発生器）とは？公平性の仕組みを解説", href: "https://casinotsu.com/guides/rng-explained" },
    { text: "💰 VIPプログラムがお得なカジノ特集", href: "https://casinotsu.com/bonuses/vip" },
  ],
  faq: [
    {
      question: "BC.GAMEの入金方法にはどんなものがありますか？",
      answer: "約120種類の仮想通貨、銀行送金が利用可能です。また、サイト内でMoonPayやBanxaといったサービスを使い、クレジットカードなどで直接仮想通貨を購入することもできます。",
    },
  ],
  cta: {
    text: "BC.GAMEで豪華ボーナスをゲットする！",
    href: "https://go.japanesecasino.com/go/bc-game:bc-game?referrer_path=%2Freviews%2Fbc-game",
  },
    images: {
    casino: [
      "/assets/casino/bcgame.png",
      "/assets/casino/bcgame.jpg",
    ],
  },
};