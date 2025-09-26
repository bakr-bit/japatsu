import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewCasinoMe: ReviewPageContent = {
  hero: {
    title: "カジノミー (Casino Me) レビュー",
    subheading: "最大$777のウェルカムボーナス + 77回フリースピン",
    description: "カジ旅の姉妹カジノ「カジノミー」をCasinoTsuが徹底解説。独自キャッシュバック『キャッシュミー』や限定ゲーム、登録・入出金方法から安全性まで、あらゆる情報を網羅しました。",
    score: 4.2,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 86,
        note: "カジ旅の姉妹カジノとして信頼性・人気ともに高い。サポート、ボーナス、使い勝手の全てが高水準。",
      },
      {
        label: "規約",
        percent: 78,
        note: "ウェルカムボーナスの賭け条件20倍は比較的緩やか。リアルマネーで勝利した場合、ボーナスを破棄して出金も可能。",
      },
      {
        label: "操作性",
        percent: 87,
        note: "シンプルかつスタイリッシュなデザインで機能性も抜群。フィルター機能や日本語検索も充実。",
      },
      {
        label: "サポート",
        percent: 84,
        note: "ネイティブの日本語サポートが丁寧かつ迅速で知識も豊富。安心して問い合わせができる。",
      },
    ],
    highlights: [
      "初回から4回目まで続く最大$777のウェルカムボーナス",
      "勝利金にも賭け金0.3%が還元される独自キャッシュバック『キャッシュミー』",
      "スロットを最大6倍速でプレイできる『Blitzモード』搭載",
      "『スロット彼女』など、ここでしか遊べない独占ゲームが豊富",
    ],
    watchouts: [
      "仮想通貨以外の出金は最大10日かかる場合がある",
      "出金速度が遅い、または拒否されたという一部のプレイヤー報告",
      "専用のモバイルアプリはない",
      "VIPプログラムが期待ほどではないという意見も",
    ],
  },
  payments: {
    featured: [
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "手数料無料",
        note: "信頼のクレジットカードで手軽に入金",
      },
      {
        name: "PayPay",
        icon: "/assets/payments/paypay.svg",
        href: "https://casinotsu.com/payment/paypay",
        badge: "スマホ決済",
        note: "日本で人気のQRコード決済に対応",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://casinotsu.com/payment/vegawallet",
        badge: "Eウォレット",
        note: "多くのオンカジで採用される定番ウォレット",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "迅速かつ匿名性の高い決済が可能",
      },
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "安心",
        note: "直接銀行口座から入出金できる",
      },
    ],
    deposits: [
      { name: "VISA", icon: "/assets/payments/visa.svg", href: "https://casinotsu.com/payment/visa" },
      { name: "MasterCard", icon: "/assets/payments/mastercard.svg", href: "https://casinotsu.com/payment/mastercard" },
      { name: "JCB", icon: "/assets/payments/jcb.svg", href: "https://casinotsu.com/payment/jcb" },
      { name: "American Express" },
      { name: "Diners Club Credit" },
      { name: "Discover" },
      { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg", href: "https://casinotsu.com/payment/bank-transfer" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
      { name: "Litecoin" },
      { name: "Ripple" },
      { name: "Tether" },
      { name: "Bitcoin Cash" },
      { name: "Solana" },
      { name: "Shiba Inu" },
      { name: "USD Coin" },
      { name: "MoonPay", href: "https://casinotsu.com/payment/moonpay" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vegawallet" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "iWallet" },
      { name: "MuchBetter" },
      { name: "STICPAY", href: "https://casinotsu.com/payment/sticpay" },
      { name: "PayPay", href: "https://casinotsu.com/payment/paypay" },
      { name: "J-Pay" },
      { name: "Sofort" },
      { name: "Klarna" },
      { name: "Inpay" },
    ],
    withdrawals: [
      { name: "銀行振込" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
      { name: "Litecoin" },
      { name: "Ripple" },
      { name: "Tether" },
      { name: "Bitcoin Cash" },
      { name: "Solana" },
      { name: "Shiba Inu" },
      { name: "USD Coin" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vegawallet" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "iWallet" },
      { name: "MuchBetter" },
      { name: "STICPAY", href: "https://casinotsu.com/payment/sticpay" },
      { name: "PayPay", href: "https://casinotsu.com/payment/paypay" },
      { name: "J-Pay" },
      { name: "Sofort" },
      { name: "Klarna" },
      { name: "Inpay" },
    ],
    notes: [
      "最低入金額は初回$15、2回目以降は$20。クレジットカード入金手数料は無料です。",
      "出金には最大3営業日の保留期間があり、そこから最大10日程度かかる場合があります。特に仮想通貨以外の手段は時間がかかる傾向があります。",
      "$20,000を超える高額賞金は30日間に分割して支払われる場合があります。",
    ],
  },
  bonuses: {
    overview:
      "カジノミーのボーナスは、最大$777の4回にわたるウェルカム入金ボーナスと、7日間連続でもらえるフリースピンが中心です。さらに、勝っても負けても賭け金の一部が還元される独自のキャッシュバック『キャッシュミー』が大きな魅力となっています。",
    noDeposit:
      "現時点（2025年8月）で、カジノミーにアカウント登録のみで受け取れる入金不要ボーナスはありません。しかし、豪華なウェルカムオファーが用意されています。",
    extraSpins: {
      summary:
        "初回入金を行うと、ボーナスマネーに加えて7日間連続で合計77回のフリースピンが進呈されます。毎日異なる人気スロットを試せるお得なオファーです。",
      schedule: [
        "1日目: スイートボナンザ",
        "2日目: ムーンプリンセス",
        "3日目: ザ・ドッグ・ハウス",
        "4日目: ヴァンパイヤ・ゴーン・ワイルド",
        "5日目: ノート・オブ・デス",
        "6日目: フルーツパーティー",
        "7日目: ゲーツ・オブ・オリンパス",
      ],
      warning: "フリースピンからの勝利金には20倍の賭け条件が適用されます。フリースピンの有効期限は入金日から30日間です。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "$377", code: "-" },
      { depositNumber: "2回目", percent: "30%", cap: "$200", code: "-" },
      { depositNumber: "3回目", percent: "20%", cap: "$100", code: "-" },
      { depositNumber: "4回目", percent: "10%", cap: "$100", code: "-" },
    ],
    conditions: [
      "ボーナスマネーの賭け条件は20倍です（スロットでのプレイ時）。",
      "ボーナスの有効期限は30日間です。",
      "ボーナスマネーでの最大ベット額は、カジノゲームで$5、スポーツベットで$50です。",
      "最低入金額は初回$15、2回目以降は$20です。",
      "ゲームによって賭け条件の消化率が異なります（例：ブラックジャック10%）。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "独自キャッシュバック『キャッシュミー』",
      description: "勝っても負けても、すべてのベット（リアルマネーおよびボーナスマネー）に対して賭け金の0.3%が自動的に積み立てられるユニークなキャッシュバックシステムです。1,000回のベットごとにボーナスマネーとして受け取れ、賭け条件は20倍です。",
      highlight: "ボーナスマネーでのベットもキャッシュバック対象",
    },
    {
      title: "VIPプログラム",
      description: "ベット額や入金額に応じて招待されるVIPプログラム。エキスパート、マスター、レジェンドの3段階のステータスがあり、専属マネージャーや限定キャッシュバックなどの特典が受けられます。",
      highlight: "完全招待制のロイヤリティプログラム",
    },
  ],
  facts: [
    { label: "名称", value: "Casino Me (カジノミー)" },
    { label: "ローンチ", value: "2020年" },
    { label: "運営会社", value: "Sweetspot N.V." },
    { label: "ライセンス", value: "キュラソー・ゲーミング・オーソリティ (ライセンス番号: OGL/2024/503/0352)" },
    { label: "VIPプログラム", value: "✅ (招待制)" },
    { label: "対応言語", value: "日本語、英語" },
    { label: "対応通貨", value: "USD" },
    {
      label: "ゲームタイプ",
      value: "バカラ, ブラックジャック, クラップス, ゲームショー, ライブカジノ, ポーカー, ルーレット, スロット, スポーツベット",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/air-dice">Air Dice</Link>, <Link href="https://casinotsu.com/providers/bgaming">BGAMING</Link>, <Link href="https://casinotsu.com/providers/betsoft">BetSoft</Link>, <Link href="https://casinotsu.com/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="https://casinotsu.com/providers/blueprint-gaming">Blueprint Gaming</Link>, <Link href="https://casinotsu.com/providers/booming-games">Booming Games</Link>, <Link href="https://casinotsu.com/providers/ela-games">ELA Games</Link>, <Link href="https://casinotsu.com/providers/endorphina">Endorphina</Link>, <Link href="https://casinotsu.com/providers/habanero">Habanero</Link>, <Link href="https://casinotsu.com/providers/hacksaw-gaming">Hacksaw Gaming</Link>, <Link href="https://casinotsu.com/providers/microgaming">Microgaming</Link>, <Link href="https://casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://casinotsu.com/providers/pg-soft">PG SOFT</Link>, <Link href="https://casinotsu.com/providers/playson">Playson</Link>, <Link href="https://casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/print-studios">Print Studios</Link>, <Link href="https://casinotsu.com/providers/quickspin">Quickspin</Link>, <Link href="https://casinotsu.com/providers/red-tiger">Red Tiger</Link>, <Link href="https://casinotsu.com/providers/relax-gaming">Relax</Link>, <Link href="https://casinotsu.com/providers/spinomenal">Spinomenal</Link>, Swintt, <Link href="https://casinotsu.com/providers/thunderkick">Thunderkick</Link>, Win Fast, <Link href="https://casinotsu.com/providers/yggdrasil">Yggdrasil</Link>, <Link href="https://casinotsu.com/providers/yolted">Yolted</Link>
        </span>
      ),
    },
    { label: "最小入金額", value: "$15 (初回), $20 (2回目以降)" },
    { label: "最小出金額", value: "$20" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@casino.me">support@casino.me</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (日本時間 18:00～翌日9:00)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "人気カジノ「カジ旅」の姉妹ブランドとして2020年に登場したカジノミーは、「大人のためのカジノ」をコンセプトにしたシックで落ち着いた雰囲気のオンラインカジノです。",
      "見た目だけでなく、機能面でもユニークな特徴を持っています。特に、勝っても負けてもベット額の0.3%が還元される独自のキャッシュバックシステム『キャッシュミー』は、他のカジノにはない大きな魅力です。",
      "このレビューでは、カジノミーの豪華なウェルカムボーナスから、豊富なゲームラインナップ、そして安全性に至るまで、プレイヤーが知りたい情報をCasinoTsuが徹底的に掘り下げていきます。",
    ],
    ctas: [
      { text: "👉 カジノミーで今すぐプレイ！", href: "https://go.casinotsu.com/go/casino-me" },
      { text: "🔰 初心者向け！アカウント開設ガイド", href: "https://casinotsu.com/guides/account-management" },
    ],
  },
  games: [
    "カジノミーでは約2,000種類以上のスロットゲームが楽しめ、カジ旅系列ならではの充実したラインナップを誇ります。人気プロバイダーは網羅しており、RTP（還元率）が表示されているため、戦略的にゲームを選べます。",
    "ライブカジノも約110種類以上と豊富で、EvolutionやPragmatic Playなどの主要プロバイダーが参加。テーブルごとに最小ベット額や空席情報が一覧でわかるなど、プレイヤーに親切な設計になっています。",
    "さらに、カジノミーとYolted社が共同開発した『Note of Death』や『スロット彼女』といった、他では遊べない独占オリジナルゲームも大きな魅力の一つです。",
  ],
  features: [
    "通常の6倍速でスロットをプレイできる『Blitz（ブリッツ）機能』を搭載。時間がない時でも効率的にゲームを楽しめます。",
    "15種類以上の仮想通貨に対応しており、ビットコインやイーサリアムなど主要なコインでの入出金が可能です。仮想通貨ユーザーにとって非常に使いやすい環境です。",
    "サイトデザインは高品質なサムネイルや滑らかなアニメーションなど、細部までこだわりが感じられ、楽しくプレイできる工夫が凝らされています。",
  ],
  editorial: {
    author: "CasinoTsuスタッフ",
    profileHref: "/authors",
    hook: "全体的に高水準で欠点らしい欠点はない優等生カジノ。ただし、突出したインパクトには欠けるかも。",
    theGoodStuff: "カジ旅系列という安心感と、質の高い日本語サポートは大きな強みです。特に、ボーナスマネーのベットでも還元される『キャッシュミー』は、すべてのプレイヤーにとって嬉しい独自のシステムと言えるでしょう。賭け条件20倍のウェルカムボーナスも良心的です。",
    theHeadsUp: "一方で、仮想通貨以外の出金に最大10日かかる場合がある点は明確なデメリットです。また、サイトデザインが一部のユーザーにはごちゃごちゃして見える可能性や、VIPプログラムの特典が物足りないという声もあります。",
    finalThought: "カジノミーは、大きな欠点がない安定した優良カジノです。革新的な機能よりも、信頼性や使いやすさ、そして着実に貯まるキャッシュバックを重視するプレイヤーに最適な選択肢です。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "カジノミーは、人気ブランド「カジ旅」の姉妹サイトとして、その信頼性と品質をしっかりと受け継いでいます。サイトはシックで落ち着いたデザインで統一されており、「大人のためのカジノ」というコンセプトにふさわしい洗練された雰囲気を醸し出しています。",
      "機能面での最大のハイライトは、独自のキャッシュバックシステム『キャッシュミー』です。多くのカジノがリアルマネーの損失額に対してキャッシュバックを行う中、カジノミーは勝敗に関わらず全てのベット額（ボーナスマネー含む）の0.3%を還元します。この透明性と公平性は高く評価できます。",
      "ウェルカムボーナスも最大$777と豪華で、賭け条件20倍は業界標準から見ても緩やかです。ゲーム数、決済方法の多様性、そしてネイティブ日本人によるサポートの質、どれをとっても高いレベルでまとまっており、安心してプレイできる環境が整っています。",
      "しかし、いくつかの注意点も存在します。特に、銀行送金などの出金に最大10日かかる可能性があるという点は、迅速な出金を求めるプレイヤーにとっては大きな懸念材料となるでしょう。また、全体的に非常にバランスが取れている一方で、「これぞカジノミー！」というような強烈なインパクトにはやや欠けるかもしれません。",
      "結論として、カジノミーは信頼できる運営基盤のもと、プレイヤーフレンドリーな規約とユニークなキャッシュバックシステムを提供する非常に優れたオンラインカジノです。突出した刺激よりも安定感と着実なリターンを求めるプレイヤーに、自信を持っておすすめできます。",
    ],
  },
  security: [
    "信頼性の高いキュラソー・ゲーミング・オーソリティのライセンスを取得 (番号: OGL/2024/503/0352)",
    "SSL暗号化技術により、プレイヤーの個人情報や取引データを安全に保護",
    "RNG（乱数発生器）を導入し、全ゲームの公平性を保証",
    "運営会社Sweetspot N.V.はカジ旅など複数のカジノを運営する実績がある",
  ],
  responsiblePlay: [
    "サポートに連絡することで、アカウントの一時的または永久的な閉鎖が可能。",
    "サイト内の「責任あるプレイ」ページで、健全なギャンブル習慣に関する情報を提供。",
  ],
  complaintStats: [],
  awards: [],
  restrictedCountries: [
    "アメリカ",
    "イギリス",
    "オーストラリア",
    "カナダ",
  ],
  userConcerns: [
    "出金速度の遅延: 仮想通貨以外の出金に最大10日かかる場合があり、一部プレイヤーから遅いとの報告がある。",
    "出金拒否の報告: 一部の口コミで出金申請が拒否されたとの声が見られるが、最終的には出金できているケースが多い。",
    "サポートの混雑: 日本語サポートが混雑しており、繋がりにくい場合があるとの報告。",
    "サイトデザイン: 一部のユーザーから、サイトが煩雑でポップアップが多いと感じるという意見がある。",
  ],
  summary: [
    "カジ旅系列の信頼性と、質の高いネイティブ日本語サポートが魅力。",
    "勝敗に関わらずベット額の0.3%が還元される『キャッシュミー』は非常にユニークで価値が高い。",
    "最大$777、賭け条件20倍のウェルカムボーナスは豪華かつ出金しやすい好条件。",
    "全体的に高いレベルでバランスが取れている優良カジノだが、出金速度には注意が必要。",
  ],
  extraLinks: [
    { text: "🔰 賭け条件ってなに？わかりやすく解説！", href: "https://casinotsu.com/guides/wagering-requirements" },
    { text: "💎 VIPプログラムのあるカジノ特集", href: "https://casinotsu.com/guides/vip-program" },
  ],
  faq: [
    {
      question: "カジノミーのウェルカムオファーは何ですか？",
      answer: "初回から4回目の入金まで、最大$777のボーナスを獲得できます。また、初回入金後、7日間毎日日替わりで11回ずつ、合計77回のフリースピンも獲得できます。",
    },
    {
      question: "カジノミーの姉妹サイトはありますか？",
      answer: "はい、カジ旅とカジノスカイが姉妹サイトです。それぞれ特徴が異なるため、レビューページで比較してみることをお勧めします。",
    },
    {
      question: "キャッシュミーとは何ですか？",
      answer: "カジノミー独自のキャッシュバックプログラムです。ベットごとに賭け額の一部が積み立てられ、ボーナスマネーとして受け取れます。ボーナスマネーでのベットも対象になるのが大きな特徴です。",
    },
    {
      question: "カジノミーに入金不要ボーナスはありますか？",
      answer: "いいえ、現時点（2025年8月現在）では入金不要ボーナスは提供されていませんが、非常に豪華な入金ボーナスがあります。",
    },
    {
      question: "カジノミーでデビットカードは利用できますか？",
      answer: "はい、VISAやMastercardなど、対応ブランドのデビットカードであれば利用可能です。",
    },
    {
      question: "カジノミーでエコペイズは使えますか？",
      answer: "はい、エコペイズの新しい名称である「Payz（ペイズ）」として利用可能です。",
    },
  ],
  cta: {
    text: "カジノミーの公式サイトで最新ボーナスをチェック！",
    href: "https://go.casinotsu.com/go/casino-me",
  },
};