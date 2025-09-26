import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewInterCasino: ReviewPageContent = {
  hero: {
    title: "インターカジノ (InterCasino) レビュー",
    subheading: "総額$500キャッシュバック + 限定150回入金不要フリースピン",
    description: "1996年設立の老舗、インターカジノをCasinoTsuが徹底レビュー。ベラジョンの姉妹サイトとしての信頼性、出金条件なしのユニークなキャッシュバック、限定ボーナスまで詳しく解説します。",
    score: 4.4,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 92,
        note: "1996年からの長い歴史とベラジョンの姉妹サイトという信頼性で、日本市場で高い人気を誇る。",
      },
      {
        label: "規約",
        percent: 94,
        note: "ウェルカムキャッシュバックに出金条件がないのは画期的。入金不要スピンの賭け条件20倍も良心的。",
      },
      {
        label: "操作性",
        percent: 88,
        note: "モバイルに最適化され使いやすい。ただしPC版チャットでEnterキーを押すと送信される仕様は改善の余地あり。",
      },
      {
        label: "サポート",
        percent: 90,
        note: "日本語サポートは丁寧で、電話対応も可能。対応時間は年中無休だが24時間ではない（午前9時～翌午前2時）。",
      },
    ],
    highlights: [
      "1996年設立、20年以上の歴史を持つ世界初のオンラインカジノ",
      "ベラジョンカジノの信頼できる姉妹サイト",
      "出金条件なし！総額$500のウェルカムキャッシュバック",
      "CasinoTsu限定！人気スロットの入金不要フリースピン150回分",
      "豊富な決済方法と迅速な出金対応",
    ],
    watchouts: [
      "日本語ライブチャットは24時間対応ではない",
      "$50未満の出金には$5の手数料が発生",
      "VIPプログラムは完全招待制",
      "銀行送金での出金には1.5%の手数料がかかる",
    ],
  },
  payments: {
    featured: [
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "人気",
        note: "主要クレジットカードに対応",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://casinotsu.com/payment/payz",
        badge: "Eウォレット",
        note: "迅速な入出金で多くのプレイヤーが利用",
      },
      {
        name: "銀行送金",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "定番",
        note: "PayPay銀行などにも対応し安心",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "9種類の仮想通貨に対応し高額出金も可能",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://casinotsu.com/payment/vega-wallet",
        badge: "ポイント制",
        note: "手数料が安く便利なポイント決済",
      },
    ],
    deposits: [
      { name: "VISA", icon: "/assets/payments/visa.svg" },
      { name: "Mastercard", icon: "/assets/payments/mastercard.svg" },
      { name: "JCB", icon: "/assets/payments/jcb.svg" },
      { name: "American Express" },
      { name: "銀行送金 (PayPay銀行など)", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg" },
      { name: "iWallet", icon: "/assets/payments/iwallet.svg" },
      { name: "仮想通貨 (BTC, ETH, XRPなど9種類)", icon: "/assets/payments/bitcoin.svg" },
      { name: "Trustly" },
      { name: "SOFORT Banking" },
      { name: "Giropay" },
      { name: "Zimpler" },
      { name: "AstroPay Card" },
      { name: "Jeton Wallet" },
    ],
    withdrawals: [
      { name: "銀行送金", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg" },
      { name: "iWallet", icon: "/assets/payments/iwallet.svg" },
      { name: "仮想通貨 (BTC, ETH, XRPなど9種類)", icon: "/assets/payments/bitcoin.svg" },
      { name: "Trustly" },
    ],
    notes: [
      "アカウント認証前の出金限度額は一律$10,000です。認証後は最大$100,000（仮想通貨）まで引き上げられます。",
      "銀行送金以外で$50未満の出金には$5の手数料が発生します。",
      "銀行送金による出金には1.5%の決済代行会社手数料がかかります。",
      "クレジットカード入金時には最大2.25%（上限$5）の手数料が発生する場合があります。",
    ],
  },
  bonuses: {
    overview:
      "インターカジノのウェルカムオファーは非常にユニークでプレイヤーフレンドリーです。CasinoTsu限定の150回入金不要フリースピンに加え、出金条件が一切ない総額$500の「ウェルカムキャッシュバック」が提供されます。",
    noDeposit:
      "CasinoTsuからの登録限定で、Play’n GO社の超人気スロット『ムーンプリンセス100』で使える150回分（$30相当）の入金不要フリースピンを進呈します。勝利金には20倍の賭け条件が適用されます。",
    extraSpins: {
      summary: "登録するだけで$30相当のフリースピン150回分がもらえる、非常にお得な限定オファーです。",
      schedule: [
        "CasinoTsu経由でインターカジノに新規登録するだけで自動的に付与。",
        "対象ゲームは『ムーンプリンセス100』。",
        "勝利金の賭け条件は20倍。",
      ],
      warning: "この限定オファーは予告なく変更または終了する場合がありますので、お早めにご利用ください。",
    },
    welcomeRows: [
      { depositNumber: "ウェルカム特典", percent: "キャッシュバック", cap: "$500", code: "条件なし" },
    ],
    conditions: [
      "ウェルカムキャッシュバックには出金条件（賭け条件）が一切ありません。",
      "キャッシュバックは、ゲームをプレイすることでクレジットとして貯まり、インターショップでキャッシュアイテムと交換することで現金化できます。",
      "貯まったクレジットは新規登録後6ヶ月以内に交換する必要があります。",
      "入金不要フリースピンで得た勝利金には20倍の賭け条件が適用されます。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "ロイヤリティプログラム（インターショップ）",
      description: "ゲームをプレイすると「クレジット」が貯まり、7段階のレベルが上がっていきます。貯まったクレジットはサイト内ストア「インターショップ」で、フリースピンや賭け条件1倍のキャッシュアイテムなどと交換できます。",
      highlight: "遊べば遊ぶほどお得になる還元システム",
    },
    {
      title: "完全招待制VIPプログラム",
      description: "ロイヤリティプログラムとは別に、完全招待制の特別なVIPサービスが用意されています。特典内容は非公開で、選ばれたプレイヤーだけが特別な待遇を受けられます。",
      highlight: "ハイローラー向けの特別なオファー",
    },
    {
        title: "ボーナス4ライフ",
        description: "毎月ボーナスが獲得できるプロモーションや、毎週ユニークなオファーが提供されます。",
        highlight: "継続的にプレイするプレイヤーへの特典",
    },
  ],
  facts: [
    { label: "名称", value: "InterCasino (インターカジノ)" },
    { label: "ローンチ", value: "1996年" },
    { label: "運営会社", value: "Breckenridge Curacao B.V." },
    { label: "ライセンス", value: "Curaçao (Antillephone), Malta (MGA)" },
    { label: "VIPプログラム", value: "✅ (完全招待制)" },
    { label: "対応言語", value: "日本語、英語" },
    { label: "対応通貨", value: "USD" },
    {
      label: "ゲームタイプ",
      value: "スロット, ライブカジノ, ブラックジャック, ルーレット, バカラ, ゲームショー, ビンゴ, ケノ, クラップス, スクラッチカードなど約2,500種類",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://casinotsu.com/providers/evolution">Evolution</Link>, <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/playtech">Playtech</Link>, <Link href="https://casinotsu.com/providers/microgaming">Microgaming</Link>, <Link href="https://casinotsu.com/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="https://casinotsu.com/providers/red-tiger">Red Tiger</Link> など約60社
        </span>
      ),
    },
    { label: "最小入金額", value: "$10" },
    { label: "最小出金額", value: "$10" },
    { label: "電話サポート", value: "✅" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: "support-jp@intercasino.com" },
    { label: "ライブチャット", value: "日本語ライブチャット (年中無休 午前9時～翌午前2時)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "1996年に設立された世界初のオンラインカジノ、インターカジノがアニメ調のコンセプトに生まれ変わりました。クロエとルージュという二人の女王が統治するカジノ王国を舞台に、新しい冒険が始まります。",
      "日本で絶大な人気を誇るベラジョンカジノの姉妹サイトであり、その運営ノウハウと信頼性は折り紙付きです。20年以上の歴史に裏打ちされた安定感と、革新的なボーナスシステムが融合したインターカジノの魅力を、CasinoTsuが徹底的に解剖します。",
      "特に注目すべきは、賭け条件のない「ウェルカムキャッシュバック」。勝っても負けてもキャッシュが貯まるこのシステムは、初心者からベテランまで全てのプレイヤーにおすすめです。",
    ],
    ctas: [
      { text: "👉 インターカジノに登録して150回フリースピンGET！", href: "https://go.japanesecasino.com/go/intercasino-japan" },
      { text: "🔰 初心者向け！オンラインカジノ簡単ガイド", href: "https://casinotsu.com/guides" },
    ],
  },
  games: [
    "インターカジノでは、約60社のプロバイダーが提供する2,500種類以上のゲームを楽しめます。人気スロットはもちろん、他のカジノでは珍しいPlaytech社のライブゲームもプレイ可能です。",
    "最大の特徴は、ベラジョン系列限定のライブカジノスタジオ『花路野三丁目（カジノサンチョウメ）』。日本人ディーラーと日本語でライブバカラやブラックジャックを楽しめる、特別な空間です。オリジナルのテーブルゲームも用意されており、他のカジノとは一味違った体験ができます。",
  ],
  features: [
    "アニメ調にフルリニューアルされ、クロエ（赤の女王）とルージュ（黒の女王）という二人のキャラクターがプレイヤーをカジノ王国へと案内します。このユニークな世界観が、ゲームプレイを一層楽しくさせます。",
    "HTML5プラットフォームを採用しており、専用アプリなしでスマートフォンやタブレットから快適にプレイできます。モバイルでの操作性に重点を置いた設計になっています。",
  ],
  editorial: {
    author: "Nanami",
    profileHref: "/authors/nanami",
    hook: "老舗の信頼性と革新的なボーナスシステムが融合した、理想的なカジノの一つです。",
    theGoodStuff: "なんと言っても、出金条件のない$500ウェルカムキャッシュバックが最高です。勝敗に関わらずプレイするだけで現金が還元されるため、純粋にゲームに集中できます。CasinoTsu限定の150回入金不要フリースピンも、サイトを試す絶好の機会になります。",
    theHeadsUp: "日本語ライブチャットが24時間対応でない点は少し残念ですが、対応時間内であれば電話サポートもあり、品質は非常に高いです。また、$50未満の出金に手数料がかかる点には注意が必要です。",
    finalThought: "20年以上の歴史とベラジョンの姉妹サイトという盤石の信頼基盤の上に、プレイヤーに非常に有利なボーナスシステムを構築しています。初心者から経験者まで、誰にでも自信を持っておすすめできる優良カジノです。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "CasinoTsuがインターカジノをレビューする上で最も感銘を受けたのは、その歴史と革新性の見事な両立です。1996年設立という業界最古参の信頼性は、何物にも代えがたい安心感をプレイヤーに与えます。その上で、運営母体があのベラジョンカジノと同じであることは、日本市場におけるサービスの質と安全性を二重に保証していると言えるでしょう。キュラソーとマルタという信頼性の高いライセンスを複数保持し、256-bit SSL暗号化技術や第三者機関によるRNG監査など、セキュリティ対策も万全です。",
      "最近行われたアニメ調へのリニューアルは、この老舗カジノに新しい息吹を吹き込みました。『クロエ』と『ルージュ』というキャラクターを前面に押し出した世界観は、従来のオンラインカジノとは一線を画し、エンターテイメント性を高めています。特に、系列カジノ限定の日本語ライブカジノ『花路野三丁目』は、日本人プレイヤーにとって最高の環境を提供しています。",
      "しかし、インターカジノの真価は、そのユニークでプレイヤーフレンドリーなボーナスシステムにあります。一般的な初回入金ボーナスとは異なり、「ウェルカムキャッシュバック」は勝敗に関わらずプレイするだけでクレジットが貯まり、賭け条件なしの現金として引き出すことができます。これは、ボーナスの複雑な規約に悩まされることなく、純粋にカジノゲームを楽しみたいプレイヤーにとって理想的なシステムです。さらに、CasinoTsu限定で提供される150回の入金不要フリースピンは、リスクなく人気スロットとサイトの使い心地を試す絶好の機会となります。",
      "決済方法の豊富さや、本人確認（KYC）を済ませれば迅速に行われる出金プロセスも高く評価できます。サポート体制も、対応時間に限りはあるものの、非常に丁寧で質の高いサービスを提供しています。総じて、インターカジノは、長年の信頼と最新の魅力を兼ね備えた、全てのプレイヤーに強く推奨できるトップクラスのオンラインカジノです。",
    ],
  },
  security: [
    "信頼性の高いキュラソーおよびマルタ（MGA）のライセンスを保有",
    "運営会社はベラジョンや遊雅堂と同じBreckenridge Curacao B.V.",
    "256-bit SSL暗号化技術でプレイヤーの個人情報や取引情報を保護",
    "Gaming Associates、GLI、NMiなどの外部監査機関によって認定されたRNG（乱数生成器）を使用",
    "総合ペイアウト率は97%以上と報告されている",
  ],
  responsiblePlay: [
    "年齢制限: 日本国内のプレイヤーは20歳以上",
    "入金制限: 1日、1週間、1ヶ月単位で上限を設定可能",
    "時間制限: プレイ時間の設定や休憩リマインダー機能あり",
    "ロス制限: 損失額の上限を設定可能",
    "リアリティチェック: ゲームセッション中の状況（プレイ時間、損益など）を確認できる",
    "タイムアウト: 24時間から6週間、一時的にアカウントを停止する機能",
    "自己評価テスト: ギャンブル依存のリスクを自己診断できる",
    "自己規制の統合: サポートへの連絡で系列サイト（ベラジョン、遊雅堂）も同時に利用制限可能",
  ],
  complaintStats: [],
  awards: [],
  restrictedCountries: [
      "イギリス",
  ],
  userConcerns: [
    "ライブチャットのエンターキーでメッセージが送信される仕様が使いにくいとの意見あり",
  ],
  summary: [
    "1996年設立の信頼できる老舗カジノで、ベラジョンの姉妹サイト。",
    "アニメ調へのリニューアルで、ユニークな世界観を提供。",
    "出金条件なしの$500キャッシュバックと、限定150回の入金不要フリースピンが非常に魅力的。",
    "豊富なゲームラインナップと決済方法、充実した日本語サポートで、初心者から上級者まで安心して楽しめる。",
  ],
  extraLinks: [
    { text: "🔰 オンラインカジノの本人確認（KYC）について", href: "https://casinotsu.com/guides/document-verification" },
    { text: "👑 VIPプログラムの仕組みを徹底解説", href: "https://casinotsu.com/guides/vip-program" },
  ],
  faq: [
    {
      question: "インターカジノに入金不要ボーナスはありますか？",
      answer: "はい、あります。CasinoTsu / casinotsu.com経由で登録すると、限定特典として人気スロットで使える150回分のフリースピンが進呈されます。",
    },
    {
      question: "インターカジノは安全にプレイできますか？",
      answer: "はい、非常に安全です。1996年から運営している20年以上の歴史、ベラジョンと同じ運営会社、そしてキュラソーとマルタのライセンスがその信頼性を証明しています。256-bit SSL技術や第三者機関による監査も実施しています。",
    },
    {
      question: "インターカジノにはVIPプログラムはありますか？",
      answer: "はい、あります。全てのプレイヤーが参加できる7段階のロイヤリティプログラムと、完全招待制の特別なVIPプログラムが用意されています。",
    },
  ],
  cta: {
    text: "インターカジノに登録して限定フリースピンをGET！",
    href: "https://go.japanesecasino.com/go/intercasino-japan:inter-casino?referrer_path=%2Freviews%2Finter-casino",
  },
};