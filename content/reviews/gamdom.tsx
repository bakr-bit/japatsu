import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewGamdom: ReviewPageContent = {
  hero: {
    title: "Gamdom（ガンダムカジノ）レビュー",
    subheading: "【CasinoTsu限定】登録後7日間、15%のレーキバック増量！",
    description: "魅力的なレーキバックと豊富なオリジナルゲームが特徴のGamdomを徹底解説。スロット、ライブカジノ、スポーツベットまで、遊べば遊ぶほどお得になるシステムを体験しよう。",
    score: 4.1,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 86,
        note: "日本市場ではまだ新しいが、豊富なゲーム数とユニークなシステムで欲張りなプレイヤーに最適。",
      },
      {
        label: "規約",
        percent: 74,
        note: "初回ボーナスはないが、慣れれば「遊べば遊ぶほどお得」なレーキバックシステムは非常に価値が高い。",
      },
      {
        label: "操作性",
        percent: 87,
        note: "一部翻訳に改善の余地はあるものの、ゲーム検索もしやすく全体的な操作性は良好。",
      },
      {
        label: "サポート",
        percent: 77,
        note: "日本語サポートはないが、英語のライブチャットは迅速。今後の自動翻訳サービス導入に期待。",
      },
    ],
    highlights: [
      "遊んだ分だけ還元される賭け条件なしのレーキバックシステム",
      "PlinkoやMinesなど、Gamdom限定のオリジナルゲーム",
      "7,000種以上のスロットと800種以上のライブカジノ",
      "スポーツベットやeスポーツにも対応",
      "Casino.Guruの安全性指数9.8/10という高い評価",
      "仮想通貨での入出金に完全対応、出金手数料もカジノが負担",
    ],
    watchouts: [
      "一般的な初回入金ボーナスやウェルカムボーナスがない",
      "カスタマーサポートが日本語に非対応",
      "出金は仮想通貨のみ（2024年10月時点）",
    ],
    avatarSrc: "/assets/casino/gamdom.png",
    avatarAlt: "Gamdomのロゴ",
  },
  payments: {
    featured: [
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://www.japanesecasino.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "主要な暗号資産で手数料無料で出金可能",
      },
      {
        name: "Ethereum",
        icon: "/assets/payments/ethereum.svg",
        href: "https://www.japanesecasino.com/payment/ethereum",
        badge: "仮想通貨",
        note: "スマートコントラクトで人気の通貨",
      },
      {
        name: "Tether",
        icon: "/assets/payments/tether.svg",
        badge: "ステーブルコイン",
        note: "価格変動リスクが少ないドル連動型通貨",
      },
      {
        name: "Bank Transfer",
        icon: "/assets/payments/bank-transfer.svg",
        badge: "入金のみ",
        note: "仮想通貨購入サービス経由で利用可能",
      },
      {
        name: "Credit Card",
        icon: "/assets/payments/visa.svg",
        badge: "入金のみ",
        note: "ギフトカードや仮想通貨の購入に利用",
      },
    ],
    deposits: [
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg" },
      { name: "Litecoin", icon: "/assets/payments/litecoin.svg" },
      { name: "Tether (USDT)", icon: "/assets/payments/tether.svg" },
      { name: "TRON" },
      { name: "Ripple (XRP)" },
      { name: "Dogecoin" },
      { name: "Solana" },
      { name: "クレジットカード (VISA, MasterCard)", icon: "/assets/payments/visa.svg" },
      { name: "銀行送金", icon: "/assets/payments/bank-transfer.svg" },
      { name: "PayPal" },
      { name: "Google Pay" },
      { name: "Apple Pay" },
      { name: "Skrill" },
      { name: "WebMoney" },
      { name: "Trustly" },
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "SafetyPay" },
      { name: "UnionPay" },
      { name: "WeChat Pay" },
      { name: "Yandex" },
      { name: "Qiwi" },
    ],
    withdrawals: [
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg" },
      { name: "Litecoin", icon: "/assets/payments/litecoin.svg" },
      { name: "Tether (USDT)", icon: "/assets/payments/tether.svg" },
      { name: "TRON" },
      { name: "Ripple (XRP)" },
      { name: "Dogecoin" },
      { name: "Solana" },
    ],
    notes: [
      "出金は仮想通貨のみに対応しています（2024年10月時点）。",
      "仮想通貨での出金には上限がなく、手数料はGamdomが負担します。",
      "クレジットカードや銀行送金は、Moonpayなどの決済プロバイダーを通じて仮想通貨を購入する形で入金に利用できます。",
      "KYC（本人確認）は通常不要ですが、出金時に求められる場合があります。",
    ],
  },
  bonuses: {
    overview:
      "Gamdomは一般的なウェルカムボーナスの代わりに、プレイヤーがプレイすればするほど還元されるユニークなリワードシステムを採用しています。中心となるのは『レーキバック』で、賭け条件なしのリアルマネーが還元されます。CasinoTsuからの登録で、最初の7日間はこのレーキバックが15%に増量されます。",
    noDeposit:
      "登録時の入金不要ボーナスはありません。しかし、チャットに不定期で現れる『レインボット』機能により、入金不要のボーナス（バラマキボーナス）を獲得するチャンスがあります。",
    extraSpins: {
      summary: "毎週金曜日に、アクティブなプレイヤーに対してフリースピンが進呈されることがあります。付与基準は非公開ですが、活発なプレイが条件とされています。",
      schedule: [],
      warning: "獲得したフリースピンは「リワード」ページから自身で請求する必要があります。",
    },
    welcomeRows: [],
    conditions: [
      "レーキバックで還元されるキャッシュには賭け条件がありません。",
      "VIPランクアップ時にもらえるボーナスも賭け条件なしです。",
      "一部のVIP向け入金ボーナスには賭け条件（例: 10倍）が設定される場合があるため、受け取り前に規約を確認することが重要です。",
      "レーキバックを有効にするには、登録後に知らせページで「有効にする」ボタンを押す必要があります。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "【CasinoTsu限定】15%レーキバック",
      description: "当サイト経由で登録すると、最初の7日間はレーキバック率が15%にアップします。還元されるのは即時出金可能なリアルマネーです。",
      highlight: "賭け条件なしのリアルキャッシュ還元",
    },
    {
      title: "豪華VIPプログラム",
      description: "全8ランクのVIPプログラムがあり、ランクが上がるごとにパーソナライズされたボーナス（賭け条件なし）や、3種類（インスタント、ウィークリー、マンスリー）のレーキバック還元率が上昇します。",
      highlight: "プレイ実績に応じて特典がどんどん豪華に",
    },
    {
      title: "レインボット",
      description: "チャット欄に8〜12分ごとに不定期で出現するバラマキボーナス。プレイヤーレベルや参加者数に応じて、入金不要のボーナスを獲得できます。",
      highlight: "チャットをチェックしているだけでもらえるサプライズボーナス",
    },
    {
      title: "デイリーサプライズ",
      description: "毎日15ドル以上をベットすることでアンロックされるデイリーボーナス。内容は日替わりでサプライズとなっています。",
      highlight: "毎日もらえるお得な報酬",
    },
    {
      title: "キング・オブ・ザ・ヒル",
      description: "リアルマネーでのベット額を競うトーナメント。賞金総額は最高8万ドルにもなり、ハイローラープレイヤーに最適です。",
      highlight: "高額賞金を狙えるベット額ランキング",
    },
  ],
  facts: [
    { label: "名称", value: "Gamdom (ガンダムカジノ)" },
    { label: "ローンチ", value: "2021" },
    { label: "運営会社", value: "Smein Hosting N.V." },
    { label: "ライセンス", value: "GAMING CURACAO, Comoros (Anjouan Gaming)" },
    { label: "VIPプログラム", value: "✅" },
    { label: "対応言語", value: "日本語（一部）、英語など19言語以上" },
    { label: "対応通貨", value: "仮想通貨、USD（決済代行経由）" },
    {
      label: "ゲームタイプ",
      value: "スロット, ライブカジノ, スポーツベット, eスポーツ, オリジナルゲーム (Plinko, Mines, Keno, Crash, HiLo), RNGテーブルゲーム, ポーカーゲーム",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://www.japanesecasino.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://www.japanesecasino.com/providers/evolution">Evolution</Link>, <Link href="https://www.japanesecasino.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://www.japanesecasino.com/providers/netent">NetEnt</Link>, <Link href="https://www.japanesecasino.com/providers/nolimit-city">Nolimit City</Link>, <Link href="https://www.japanesecasino.com/providers/hacksaw-gaming">Hacksaw Gaming</Link>, <Link href="https://www.japanesecasino.com/providers/relax-gaming">Relax Gaming</Link>, <Link href="https://www.japanesecasino.com/providers/microgaming">Microgaming</Link>, <Link href="https://www.japanesecasino.com/providers/quickspin">Quickspin</Link>, <Link href="https://www.japanesecasino.com/providers/yggdrasil">Yggdrasil</Link> など約40社
        </span>
      ),
    },
    { label: "最小入金額", value: "$1" },
    { label: "最小出金額", value: "仮想通貨により異なる" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@gamdom.com">support@gamdom.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間英語対応)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "Gamdom（ガンダムカジノ）は、元々PCゲームのアイテムを賭けるサイトとしてスタートし、本格的なオンラインカジノへと進化したユニークな経歴を持つプラットフォームです。",
      "一般的なカジノとは一線を画し、初回入金ボーナスの代わりに、プレイすればするほどリアルマネーが還元される「レーキバック」システムを報酬の中心に据えています。このシステムは、特に長期的にプレイするハイローラーやロイヤルプレイヤーから高い評価を得ています。",
      "スロット、ライブカジノ、スポーツベットはもちろん、他では遊べないGamdom限定のオリジナルゲームも大きな魅力です。CasinoTsuでは、この斬新なカジノが提供する価値と体験を詳細に分析します。",
    ],
    ctas: [
      { text: "👉 早速Gamdomに登録して15%レーキバックをゲット！", href: "https://go.japanesecasino.com/go/gamdom" },
      { text: "🔰 レーキバックとは？仕組みを解説", href: "https://www.japanesecasino.com/bonuses/cashback" },
    ],
  },
  games: [
    "Gamdomのゲームライブラリは圧巻のボリュームを誇ります。スロットは7,000種類以上、ライブカジノはEvolutionやPragmatic Playなど主要プロバイダーから800種類以上を提供しています。RTPが97%を超えるスロットを集めたセクションもあり、プレイヤーに有利な選択肢が用意されています。",
    "最大の特色は、Plinko、Mines、Keno、スロットバトルといったシンプルながら奥深いオリジナルゲームです。特にスロットバトルでは、最大4人のプレイヤーで勝利金を奪い合うユニークな対戦が楽しめます。",
    "さらに、22種類以上のスポーツやeスポーツに対応したスポーツベットも完備しており、ライブストリーミングを観戦しながらのベットも可能です。一つのサイトであらゆるギャンブルを楽しみたいプレイヤーにとって、まさに理想的な環境です。",
  ],
  features: [
    "アカウントのセキュリティを強化するための2段階認証（2FA）に対応しており、安心してプレイできます。",
    "ゲームの公平性はライセンスだけでなく、iTech Labsのような第三者機関による監査によっても保証されています。",
    "モバイルアプリはありませんが、ブラウザ版はスマートフォンに完全に最適化されており、ショートカットを作成すればアプリ同様に手軽にアクセスできます。",
    "ゲームの「お気に入り登録数」が表示されるユニークな機能があり、他のプレイヤーがどのゲームを好んでいるかが一目でわかり、ゲーム選びの参考になります。",
  ],
  editorial: {
    author: "Momo",
    profileHref: "/authors/rina-okabe",
    hook: "初回ボーナスがない代わりに、長期プレイヤーを徹底的に優遇するレーキバックシステムが光る実力派カジノ。",
    theGoodStuff: "賭け条件のないレーキバックは、ボーナス条件に縛られたくないプレイヤーにとって最高のシステムです。ゲーム数の豊富さ、オリジナルゲームの面白さ、そしてCasino.Guruから9.8/10という極めて高い安全性評価を受けている点は、大きな信頼材料です。",
    theHeadsUp: "最大の障壁は言語と決済です。日本語サポートがなく、出金が仮想通貨に限られるため、英語や仮想通貨に不慣れな初心者にはハードルが高いかもしれません。また、初回入金ボーナスを求めるプレイヤーにも不向きです。",
    finalThought: "英語と仮想通貨の扱いに慣れているプレイヤー、特にハイローラーにとっては、これ以上ないほど快適でリターンの大きいカジノと言えるでしょう。長期的に見れば、ほとんどのカジノよりも優れた還元を期待できます。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "Gamdomカジノを評価する上で、そのユニークな哲学を理解することが不可欠です。多くのカジノが派手な初回入金ボーナスで新規プレイヤーを惹きつけようとする中、Gamdomはあえてその道を選ばず、長期的なプレイヤーへの還元、すなわち「レーキバック」をサービスの中心に据えています。これは、一度きりの特典ではなく、プレイを続ける限り永続的に恩恵を受けられるシステムであり、特にハイローラーやコンスタントに遊ぶプレイヤーにとって非常に合理的です。還元されるキャッシュに賭け条件がないという点も、プレイヤーの自由度を最大限に尊重しており、高く評価できます。",
      "安全性と信頼性においても、Gamdomは業界トップクラスです。キュラソーとコモロのライセンスに加え、独立監査機関iTech Labsによる監査、そして何よりCasino.Guruによる9.8/10という驚異的な安全性指数は、プレイヤーが安心して資金を預け、公正なゲームを楽しめる環境が整っていることの強力な証明です。Trustpilotでの4,700件を超えるレビューで「Great」評価を維持していることも、実際のユーザー満足度の高さを物語っています。",
      "ゲームの多様性もGamdomの大きな強みです。7,000を超えるスロット、800以上のライブカジノテーブル、そして充実したスポーツブックは、どんなプレイヤーの好みにも応えるでしょう。しかし、真にGamdomを際立たせているのは、他では味わえないオリジナルゲームの存在です。Plinkoやスロットバトルといった独自のゲームは、新鮮な刺激と新たな勝利のチャンスを提供してくれます。",
      "もちろん、完璧なカジノではありません。最大の課題は、日本語サポートの欠如と、出金方法が仮想通貨に限定されている点です。これにより、日本の初心者プレイヤーにとっては参入障壁が高くなっています。しかし、この点を克服できるのであれば、Gamdomは非常に満足度の高い選択肢となります。英語でのコミュニケーションが可能で、仮想通貨の扱いに慣れているならば、その豊富なゲームと優れた還元システムを最大限に享受できるでしょう。今後の日本語サポート拡充と決済方法の多様化に期待が寄せられる、ポテンシャルの塊のようなカジノです。",
    ],
  },
  security: [
    "GAMING CURACAOとComoros (Anjouan Gaming) の2つのライセンスを取得",
    "アカウント保護のための2段階認証（2FA）に対応",
    "iTech Labsのような独立した第三者機関によるゲームの公平性監査",
    "Casino.Guruから9.8/10という非常に高い安全性指数を獲得",
    "個人情報保護方針（プライバシーポリシー）をサイト内で詳細に公開",
  ],
  responsiblePlay: [
    "自己排除機能: アカウント設定から1日、5日、8日間のプレイ制限を簡単に設定可能",
    "外部支援機関との連携: Gamblers AnonymousやGamCareなど、複数のギャンブル依存症支援組織へのリンクを提供",
  ],
  complaintStats: [
    "Trustpilotにて4,737件のレビューに基づき3.8/5の「Great」評価",
    "Casino.Guruによる安全性指数は9.8/10",
  ],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "VIP向け入金ボーナスの賭け条件が厳しくなったとの口コミあり",
    "日本語のカスタマーサポートが提供されていない",
    "出金方法が仮想通貨に限定されている",
  ],
  summary: [
    "初回入金ボーナスの代わりに、賭け条件なしのレーキバックシステムが特徴。",
    "ハイローラーや長期プレイヤーにとって非常に有利な還元システム。",
    "7,000種類以上のスロット、オリジナルゲーム、スポーツベットなどゲームの種類が非常に豊富。",
    "安全性が非常に高く評価されているが、日本語サポートがなく出金が仮想通貨のみという点が初心者にはハードル。",
    "英語と仮想通貨に慣れているプレイヤーには、最高の環境を提供するカジノの一つ。",
  ],
  extraLinks: [
    { text: "🔰 オンラインカジノの本人確認（KYC）について", href: "https://www.japanesecasino.com/guides/document-verification" },
    { text: "💰 仮想通貨が使えるカジノ特集", href: "https://www.japanesecasino.com/crypto" },
  ],
  faq: [
    {
      question: "Gamdomカジノにウェルカムボーナスはありますか？",
      answer: "いいえ、一般的な初回入金ボーナスはありません。その代わりに、プレイ額に応じて還元されるレーキバックシステムや、レインボット、デイリーサプライズなどのユニークなリワードが提供されています。",
    },
    {
      question: "Gamdomカジノのボーナスはどうやって申請しますか？",
      answer: "レーキバックは登録後にお知らせページで「有効にする」をクリックします。獲得したボーナスは、メニューの「リワード」ページにある「報酬を取得する」ボタンを押すことでアカウントに反映されます。ボーナスコードは不要です。",
    },
    {
      question: "Gamdomカジノのボーナスに出金条件はありますか？",
      answer: "レーキバックやVIPランクアップボーナスには出金条件（賭け条件）がありません。ただし、VIP向けの入金ボーナスなど、一部のプロモーションには条件が付く場合があるため、受け取り前に規約を確認してください。",
    },
    {
      question: "Gamdomカジノはどんなプレイヤーにおすすめですか？",
      answer: "プレイすればするほどお得になるため、資金力のあるハイローラーに最適です。また、オリジナルゲームが豊富なため、普通のカジノに飽きた上級者や、新しい体験を求める方にもおすすめです。",
    },
    {
      question: "Gamdomカジノの登録に本人確認（KYC）は必要ですか？",
      answer: "登録時点では不要です。非常にスムーズにアカウントを作成できます。ただし、カジノ側から要請があった場合に出金のために必要となることがあるため、準備しておくと安心です。",
    },
    {
      question: "仮想通貨以外で入金できますか？",
      answer: "はい、Skrill、Payz、Apple Payなど多様な決済代行サービスを通じて法定通貨での入金が可能です。また、クレジットカードや銀行送金でサイト内のサービスを通じて仮想通貨を購入することもできます。",
    },
  ],
  cta: {
    text: "Gamdomカジノに登録して、限定レーキバックを体験する！",
    href: "https://go.japanesecasino.com/go/gamdom",
  },
};