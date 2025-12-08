import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewLiliBet: ReviewPageContent = {
  hero: {
    title: "リリベットカジノ（LiliBet）レビュー",
    subheading: "最大¥130,000ボーナス + 賭け条件1倍の50回フリースピン",
    description: "「勝っても負けても安心」がコンセプトの初心者向けカジノ、LiliBetを徹底レビュー。賭け条件1倍の入金不要ボーナスや自動キャッシュバックなど、プレイヤーに優しい仕組みと豊富なゲームラインナップが魅力です。",
    score: 4.1,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 83,
        note: "まだ認知度は高くないが、人気プロバイダーを網羅しており今後の成長が期待される。",
      },
      {
        label: "規約",
        percent: 76,
        note: "ボーナス条件がシンプルで分かりやすい。特にキャッシュバックは負けた際の保険として優秀。",
      },
      {
        label: "操作性",
        percent: 80,
        note: "マルチデバイス対応で操作性は良好。日本人にとって馴染み深い決済方法が揃っている。",
      },
      {
        label: "サポート",
        percent: 83,
        note: "日本語ネイティブのスタッフが深夜まで対応。丁寧かつ的確なサポートが受けられる。",
      },
    ],
    highlights: [
      "賭け条件1倍の2,000円入金不要ボーナス",
      "毎月自動で進呈される5%キャッシュバック",
      "一部ボーナスには最大ベット額や禁止ゲームの制限なし",
      "信頼性の高いMGAとキュラソーのデュアルライセンス",
      "5,200種類以上の豊富なゲームラインナップ",
    ],
    watchouts: [
      "出金速度が遅いとのユーザー報告あり",
      "週末は出金処理が行われない",
      "VPNの使用は利用規約で禁止されている",
      "外部サイトでの評判（Trustpilotなど）は低い",
    ],
    avatarSrc: "/assets/casino/lilibet.png",
    avatarAlt: "Lilibetのロゴ",
  },
  payments: {
    featured: [
      {
        name: "銀行送金",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://www.japanesecasino.com/payment/bank-transfer",
        badge: "定番",
        note: "日本の銀行から直接入出金可能",
      },
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://www.japanesecasino.com/payment/visa",
        badge: "人気",
        note: "世界中で利用されるクレジットカード",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://www.japanesecasino.com/payment/payz",
        badge: "Eウォレット",
        note: "スピーディーなオンライン決済",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://www.japanesecasino.com/payment/vega-wallet",
        badge: "ポイント制",
        note: "ポイントでの資金管理が便利",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://www.japanesecasino.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "9種類の暗号資産に対応",
      },
    ],
    deposits: [
      { name: "銀行送金", icon: "/assets/payments/bank-transfer.svg" },
      { name: "VISA", icon: "/assets/payments/visa.svg" },
      { name: "MasterCard", icon: "/assets/payments/mastercard.svg" },
      { name: "JCB", icon: "/assets/payments/jcb.svg" },
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg" },
      { name: "eVoucher" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg" },
      { name: "Litecoin" },
      { name: "Ripple" },
      { name: "Tether (USDT)" },
      { name: "Dogecoin" },
      { name: "Tron" },
      { name: "EURK" },
      { name: "Jeton" },
      { name: "Interac" },
      { name: "Bitcoin Cash" },
      { name: "AstroPay" },
      { name: "ecoVoucher" },
      { name: "Neosurf" },
      { name: "Paysafe Card" },
    ],
    withdrawals: [
      { name: "銀行送金", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg" },
      { name: "Tether (USDT)" },
      { name: "Litecoin" },
      { name: "Ripple" },
      { name: "Dogecoin" },
      { name: "Tron" },
    ],
    notes: [
      "出金処理は月曜日から金曜日の間に行われ、通常24～48時間かかります。週末は処理が停止するため注意が必要です。",
      "1ヶ月の最大出金額は$25,000 / €20,000ですが、VIPプレイヤーは上限が引き上げられます。",
    ],
  },
  bonuses: {
    overview:
      "リリベットのボーナスは、特に初心者に優しい設計が特徴です。CasinoTsu限定の賭け条件1倍の入金不要ボーナスから始まり、プレイヤーは複数のウェルカムボーナスから自分のスタイルに合ったものを選択できます。規約がシンプルで分かりやすい点も魅力です。",
    noDeposit:
      "CasinoTsu経由で登録すると、賭け条件がわずか1倍の¥2,000の入金不要ボーナスを受け取れます。ボーナスは受け取り後3日間有効です。",
    extraSpins: {
      summary:
        "CasinoTsu限定の初回入金ボーナスを選択すると、人気スロット『Moon Princess』で使える50回のフリースピンが追加で付与されます。",
      schedule: [
          "限定ウェルカムボーナス（最大¥70,000）の申請後、ボーナス利用前にサポートへ連絡して申請。",
      ],
      warning: "フリースピンから得た勝利金の賭け条件は1倍です。必ずボーナスマネーを利用する前に申請する必要があります。",
    },
    welcomeRows: [
      { depositNumber: "初回 (限定)", percent: "100%", cap: "¥70,000 + 50FS", code: "申請必要" },
      { depositNumber: "初回 (一般)", percent: "100%", cap: "¥50,000", code: "申請必要" },
      { depositNumber: "初回 (限定)", percent: "400%", cap: "¥8,000", code: "申請必要" },
    ],
    conditions: [
      "ボーナスは分離型と一体型の両方があります。選択するオファーによって条件が異なります。",
      "賭け条件はボーナスによって異なり、1倍、30倍、50倍など様々です。",
      "一般ウェルカムボーナス（最大¥50,000）には、最大ベット額や禁止ゲームの制限がありません。",
      "ベガウォレットでの入金は、一部ボーナスの対象外となるためご注意ください。",
    ],
    prohibitedGames: [
      "Jackpot 6000 (Netent)",
      "1429 Uncharted Seas (Thunderkick）",
      "※上記は限定100%ボーナスのみ適用。一般100%ボーナスには禁止ゲームはありません。",
    ],
  },
  offers: [
    {
      title: "マンスリーキャッシュバック",
      description: "毎月の純損失額の5%が、翌月1日に自動でアカウントにキャッシュバックされます。賭け条件はわずか1倍（ライブカジノは10倍）と非常に緩やかです。",
      highlight: "申請不要で自動進呈される安心のセーフティーネット",
    },
    {
      title: "スポーツ用ウェルカムボーナス",
      description: "最大$500の100%入金ボーナス。ただし、入金額と勝利金を全て使い切った後に申請するキャッシュバック形式のボーナスです。",
      highlight: "賭け条件は7倍（最低オッズ1.85以上）",
    },
    {
      title: "Wheel of Fortune",
      description: "$50以上の入金で、賞品が必ず当たるラッキーホイールを回すチャンスが得られます。",
    },
  ],
  facts: [
    { label: "名称", value: "LiliBet (リリベット)" },
    { label: "ローンチ", value: "2021年 (日本市場)" },
    { label: "運営会社", value: "Continental Solutions Limited B.V." },
    { label: "ライセンス", value: "Antillephone (Curaçao) No.8048/JAZ, Malta Gaming Authority (MGA) No.1668/JAZ" },
    { label: "VIPプログラム", value: "✅ (The Royal Court)" },
    { label: "対応言語", value: "日本語, 英語, フィンランド語, ノルウェー語, ロシア語, ドイツ語" },
    { label: "対応通貨", value: "USD, EUR, CAD, INR, NOK, RUB, PLN, BRL, BYN, JPY" },
    {
      label: "ゲームタイプ",
      value: "バカラ, ブラックジャック, クラップス, ゲームショー, ライブカジノ, ポーカー, ルーレット, スロット, スポーツベット",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://www.japanesecasino.com/providers/betsoft">BetSoft</Link>, <Link href="https://www.japanesecasino.com/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="https://www.japanesecasino.com/providers/elk-studios">Elk Studios</Link>, <Link href="https://www.japanesecasino.com/providers/golden-hero-games">Golden Hero</Link>, <Link href="https://www.japanesecasino.com/providers/hacksaw-gaming">Hacksaw Gaming</Link>, <Link href="https://www.japanesecasino.com/providers/microgaming">Microgaming</Link>, <Link href="https://www.japanesecasino.com/providers/netent">NetEnt</Link>, <Link href="https://www.japanesecasino.com/providers/nolimit-city">Nolimit City</Link>, <Link href="https://www.japanesecasino.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://www.japanesecasino.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://www.japanesecasino.com/providers/quickspin">Quickspin</Link>, <Link href="https://www.japanesecasino.com/providers/red-tiger">Red Tiger</Link>, <Link href="https://www.japanesecasino.com/providers/relax-gaming">Relax Gaming</Link>, <Link href="https://www.japanesecasino.com/providers/thunderkick">Thunderkick</Link>, <Link href="https://www.japanesecasino.com/providers/yggdrasil">Yggdrasil</Link>など38社以上
        </span>
      ),
    },
    { label: "最小入金額", value: "¥1,000 / $10" },
    { label: "最小出金額", value: "¥1,000" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@ja.lilibet.com">support@ja.lilibet.com</Link> },
    { label: "ライブチャット", value: "日本語サポート（毎日 朝～深夜）" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "LiliBet（リリベット）は、2021年3月に日本市場に登場したオンラインカジノで、「初心者の方が使いやすいように」という配慮が随所に感じられるプラットフォームです。",
      "王室をテーマにしたエレガントなデザインの中で、プレイヤーは5,200種類以上の豊富なゲームを楽しめます。特に、賭け条件が1倍の入金不要ボーナスや、負けても損失の一部が戻ってくるマンスリーキャッシュバックなど、プレイヤーの不安を和らげるためのプロモーションが充実しています。",
      "CasinoTsuでは、この信頼性とプレイヤーへの配慮を高く評価し、リリベットの魅力を徹底的に掘り下げていきます。",
    ],
    ctas: [
      { text: "👉 リリベットで限定ボーナスをゲット！", href: "https://go.japanesecasino.com/go/lilibet:lilibet?referrer_path=%2Freviews%2Flilibet" },
    ],
  },
  games: [
    "リリベットのゲームライブラリは圧巻の5,200種類以上。スロット、ライブカジノ、スポーツベットと、あらゆるジャンルを網羅しています。日本のプレイヤーに人気のPlay’n GO, Pragmatic Play, NetEnt, Golden Heroといった主要プロバイダー38社以上と提携しており、常に最新かつ多様なゲームを提供しています。",
    "特にライブカジノは8社のプロバイダーから約600テーブル以上が配信されており、ブラックジャックだけでも360テーブルと、ライブゲーム好きにはたまらないラインナップです。また、スロットのゲームアイコンにはRTPが表示される便利な機能も備わっています。",
  ],
  features: [
    "リリベットは専用アプリを提供していませんが、ウェブサイトはどのデバイスにも完全に最適化されており、スマートフォンやタブレットからでも快適にプレイできます。",
    "VIPプログラム「The Royal Court」は招待制で、王室の一員として、出金時間の短縮や専属マネージャー、限定ボーナスなどの特別な待遇を受けられます。",
  ],
  editorial: {
    author: "CasinoTsu編集部",
    profileHref: "/authors",
    hook: "初心者への手厚い配慮と、信頼性の高い運営体制が光るカジノ。ただし、出金の遅さは覚悟が必要かも。",
    theGoodStuff: "MGAとキュラソーのデュアルライセンスは、安全性と公平性を重視するプレイヤーにとって最大の安心材料です。賭け条件1倍の入金不要ボーナスや自動キャッシュバックは、リスクを抑えて楽しみたい初心者に最適。ネイティブの日本語サポートも質が高いです。",
    theHeadsUp: "最大の懸念点は出金速度です。週末に処理が行われない上に、平日でも24～48時間かかるため、他のカジノに比べて見劣りします。Trustpilotでの低評価や、出金遅延に関するユーザーからの不満は無視できません。",
    finalThought: "出金のスピードを最優先するプレイヤーには不向きかもしれませんが、それを補って余りあるほどの安全性、初心者への優しさ、そして豊富なゲーム体験を提供してくれます。腰を据えてじっくり楽しみたい方には、非常におすすめできる優良カジノです。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "CasinoTsuがリリベットをレビューするにあたり、最も印象的だったのはその「初心者への徹底した配慮」です。オンラインカジノにありがちな複雑なボーナス規約を極力排除し、「負けても安心」というコンセプトをマンスリーキャッシュバックという形で具体化している点は高く評価できます。賭け条件がわずか1倍の入金不要ボーナスは、プレイヤーにリスクなくサイトを試す絶好の機会を与えてくれます。",
      "運営の信頼性も特筆すべき点です。取得が厳しいことで知られるマルタゲーミングオーソリティ（MGA）とキュラソーのライセンスを両方取得している「デュアルライセンス」体制は、業界でもトップクラスの安全性を誇ります。これは、プレイヤーの資金と個人情報が厳格な基準のもとで保護されていることを意味します。",
      "ゲームの選択肢も豊富です。5,200種類を超えるゲームには、最新スロットから約600テーブルを誇るライブカジノ、さらには本格的なスポーツブックまで含まれており、どんなプレイヤーでも飽きることなく楽しめます。特に、日本のプレイヤーに人気のプロバイダーをしっかりと押さえている点は、市場をよく理解している証拠と言えるでしょう。",
      "一方で、改善点も明確です。多くのユーザーから指摘されている「出金の遅さ」と「週末の処理停止」は、現代のオンラインカジノとしては大きなデメリットです。迅速な出金を求めるプレイヤーにとっては、ストレスの原因となり得ます。また、Trustpilotでの評価が低いことや、一部ユーザーからの不満の声は、今後の改善に期待したい点です。",
      "総じて、リリベットは出金速度という明確な弱点を抱えつつも、それを補うだけの強力な安全性、プレイヤーフレンドリーな規約、そして充実したコンテンツを持つ優良カジノです。特に、オンラインカジノの世界にこれから足を踏み入れようとしている初心者の方にとって、安心してスタートを切れる最適な選択肢の一つであると、CasinoTsuは結論付けます。",
    ],
  },
  security: [
    "信頼性の高いマルタゲーミングオーソリティ（MGA）とキュラソー（Antillephone）のデュアルライセンスを取得",
    "運営会社Continental Solutions Limited B.V.は2019年設立",
    "第三者監査機関による定期的な監査とRNGによるゲームの公平性を保証",
    "ウェブサイト下部に詳細なプライバシーポリシーを公開",
  ],
  responsiblePlay: [
    "プレイ時間制限",
    "入金金額制限",
    "自己規制（一時的な利用停止）",
    "時間制限",
    "※上記の設定はカスタマーサポートへの連絡により可能。",
  ],
  complaintStats: [
    "Trustpilot: 1.6/5（54件のレビューに基づく「悪い」評価）",
    "Mr. Gamble: 4.4/5",
    "SportsBoom: 3.8/5",
  ],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "出金処理の遅延（10日以上かかるケースも報告あり）",
    "週末に出金処理が行われない",
    "隠れた入金手数料に関する不満",
    "SMSや電話による攻撃的なマーケティング手法",
    "技術的な不具合や接続不良の報告",
  ],
  summary: [
    "初心者にとって非常に分かりやすく、安心して始められるカジノ。",
    "賭け条件1倍の入金不要ボーナスや自動キャッシュバックなど、プレイヤーに有利なプロモーションが豊富。",
    "MGAとキュラソーのデュアルライセンスにより、安全性と信頼性は非常に高い。",
    "出金速度が遅く、週末に処理が停止する点が最大のデメリット。",
  ],
  extraLinks: [
    { text: "💡 分離型ボーナスとは？仕組みを解説", href: "https://www.japanesecasino.com/bonuses/non-sticky" },
  ],
  faq: [
    {
      question: "リリベットにキャッシュバックキャンペーンはありますか？",
      answer: "はい。毎月の純損失額の5%が、翌月1日に賭け条件1倍のキャッシュバックとして自動的に進呈されます。",
    },
    {
      question: "リリベットでスポーツベットは可能ですか？",
      answer: "はい、可能です。30種類以上のスポーツにベットでき、ライブベットや部分的なキャッシュアウト機能も利用できます。",
    },
    {
      question: "リリベットの日本市場でのサービス開始はいつですか？",
      answer: "2021年3月に日本市場向けのサービスを開始しました。",
    },
    {
      question: "リリベットのVIPプログラムの特典は何ですか？",
      answer: "VIPプログラム「The Royal Court」では、限定ボーナス、出金時間の短縮、専属アカウントマネージャー、誕生日ギフトなどの特典が提供されます。",
    },
    {
      question: "リリベットはモバイルアプリがありますか？",
      answer: "専用のモバイルアプリはありませんが、ウェブサイトがモバイルに完全に最適化されているため、どのデバイスのブラウザからでも快適にプレイできます。",
    },
  ],
  cta: {
    text: "リリベットで限定ボーナスを受け取って始める！",
    href: "https.go.japanesecasino.com/go/lilibet:lilibet?referrer_path=%2Freviews%2Flilibet",
  },
    images: {
    casino: [
      "/assets/casino/lilibet.png",
      "/assets/casino/lilibet.jpg",
    ],
  },
};