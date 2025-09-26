import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewKonibet: ReviewPageContent = {
  hero: {
    title: "コニベット（Konibet）のログイン・登録方法や評判をチェック",
    subheading: "パチンコ・パチスロが遊べるオンラインカジノ！",
    description: "2019年にオープンしたコニベットをCasinoTsuが詳細にレビュー。寛大なボーナス、24時間対応の日本人サポート、そして2024年から導入されたパチンコ・パチスロ「コニパチ」など、初心者から上級者まで楽しめる魅力を徹底解説します。",
    score: 4.4,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 90,
        note: "24時間日本語サポートとパチンコ・パチスロの導入により、日本人プレイヤーからの人気が急速に高まっています。",
      },
      {
        label: "規約",
        percent: 86,
        note: "賭け条件5倍の入金不要ボーナスや、賭け条件ゼロのリベンジボーナスなど、非常にプレイヤーフレンドリーな規約です。",
      },
      {
        label: "操作性",
        percent: 87,
        note: "日本人向けのデザインで見やすく、入出金方法も充実しており、快適にプレイできます。",
      },
      {
        label: "サポート",
        percent: 90,
        note: "24時間年中無休、ネイティブ日本人によるLINE対応も可能なサポートは業界トップクラスの品質です。",
      },
    ],
    highlights: [
      "オンラインでパチンコ・パチスロが遊べる「コニパチ」",
      "24時間年中無休の完全日本語サポート（LINE対応あり）",
      "賭け条件が緩い＆ゼロのユニークなボーナス",
      "豊富な決済方法と業界トップクラスの出金スピード",
    ],
    watchouts: [
      "多くのボーナス申請がライブチャット経由で手動",
      "初回出金時の本人確認（KYC）に時間がかかる場合がある",
      "一部の海外レビューサイトで出金関連の低評価が見られる",
      "クレジットカード入金に非対応",
    ],
  },
  payments: {
    featured: [
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "国内送金",
        note: "楽天銀行やPayPay銀行にも対応し便利",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://casinotsu.com/payment/vega-wallet",
        badge: "Eウォレット",
        note: "多くの日本人プレイヤーに利用される決済手段",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "7種類以上の仮想通貨に対応",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://casinotsu.com/payment/payz",
        badge: "人気",
        note: "信頼性の高い主要な電子ウォレット",
      },
      {
        name: "SticPay",
        icon: "/assets/payments/sticpay.svg",
        href: "https://casinotsu.com/payment/sticpay",
        badge: "迅速",
        note: "スピーディーな取引が可能なEウォレット",
      },
    ],
    deposits: [
      { name: "TIGER PAY", icon: "/assets/payments/tiger-pay.svg" },
      { name: "Vega wallet", icon: "/assets/payments/vega-wallet.svg" },
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "Slash Payment" },
      { name: "STICPAY", icon: "/assets/payments/sticpay.svg" },
      { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg" },
      { name: "銀行送金（P2P）", icon: "/assets/payments/bank-transfer.svg" },
      { name: "仮想通貨", icon: "/assets/payments/bitcoin.svg" },
      { name: "JCB", icon: "/assets/payments/jcb.svg" },
      { name: "iWallet", icon: "/assets/payments/iwallet.svg" },
      { name: "VenusPoint", icon: "/assets/payments/venus-point.svg" },
    ],
    withdrawals: [
      { name: "TIGER PAY", icon: "/assets/payments/tiger-pay.svg" },
      { name: "Vega wallet", icon: "/assets/payments/vega-wallet.svg" },
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "Slash Payment" },
      { name: "STICPAY", icon: "/assets/payments/sticpay.svg" },
      { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg" },
      { name: "銀行送金（P2P）", icon: "/assets/payments/bank-transfer.svg" },
      { name: "仮想通貨", icon: "/assets/payments/bitcoin.svg" },
      { name: "iWallet", icon: "/assets/payments/iwallet.svg" },
      { name: "VenusPoint", icon: "/assets/payments/venus-point.svg" },
    ],
    notes: [
      "月間の出金上限額が設定されておらず、ハイローラーにも利用しやすいです。",
      "出金スピードは非常に速く、通常2時間以内、P2P送金なら即時反映されることもあります。",
      "初回出金時にはKYC認証が必要で、最大72時間かかる場合があります。",
    ],
  },
  bonuses: {
    overview:
      "コニベットは伝統的な初回入金ボーナスではなく、プレイヤーに有利なユニークなプロモーションを展開しています。$20の入金不要ボーナスに加え、CasinoTsu限定の賭け条件ゼロのフリースピン、さらに負けても損失額が返ってくる賭け条件ゼロのリベンジボーナスが最大の魅力です。",
    noDeposit:
      "新規登録者全員に、スロットで使える$20の入金不要ボーナスが進呈されます。賭け条件はわずか5倍で、最大$200まで出金可能です。申請には登録後に受信するインボックス内のクーポンコードが必要です。",
    extraSpins: {
      summary:
        "CasinoTsu経由で登録すると、通常ボーナスに加えて『Lucky Neko – Gigablox』で使える50回のフリースピンが特別に進呈されます。このスピンは賭け条件がゼロのキャッシュスピンであり、勝利金はすぐに出金可能です。最大$50まで出金できます。",
      schedule: [
        "CasinoTsuのリンク経由でコニベットに登録する。",
        "通常$20ボーナスと限定フリースピン50回、両方のボーナスを獲得できる。",
        "フリースピンからの勝利金には賭け条件がない。",
      ],
      warning: "入金不要ボーナスからの合計最大出金額は$250 ($20ボーナスから$200 + フリースピンから$50)です。",
    },
    welcomeRows: [
        { depositNumber: "初回入金", percent: "65%キャッシュバック", cap: "$650", code: "ライブチャットで申請" },
    ],
    conditions: [
      "初回入金リベンジボーナスは、登録後3日（72時間）以内の申請で65%（最大$650）、それ以降は50%（最大$500）となります。",
      "リベンジボーナス（キャッシュバック）の賭け条件は0倍です。",
      "リベンジボーナスを受け取るには、初回入金後、プレイ前にライブチャットで申請する必要があります。",
      "対象期間中に残高が$1未満になった場合、再度チャット連絡でキャッシュバックが進呈されます。",
      "リベンジボーナス適用中のベット額には上限（ライブ$25、スロット$10）があります。",
    ],
    prohibitedGames: [
        "ボーナス利用時の禁止ゲームは、利用規約で定められており、ゲームアイコンの左上にマークが表示されています。",
        "リベンジボーナス申請中のリアルマネープレイでは、eスポーツベットなどは禁止されています。",
    ],
  },
  offers: [
    {
      title: "毎週土曜日のキャッシュバック",
      description: "毎週木曜〜翌木曜の期間中に負けてしまった場合、損失額の一部が土曜日にキャッシュバックされます。還元率はVIPレベルに応じて5%〜10%で、このキャッシュバックにも賭け条件はありません。",
      highlight: "申請はライブチャットで「俺様がいただくぜ！！」と伝えるユニークな形式",
    },
    {
      title: "VIPプログラム",
      description: "ベット額と入金額に応じて6段階のレベルが設定されています。レベルアップボーナスやバースデーボーナス、リベート率の向上（スロット最大1.5%、ライブ最大1.0%）など、豪華な特典が用意されています。",
      highlight: "リベートボーナスの上限額は全レベルで無制限",
    },
  ],
  facts: [
    { label: "名称", value: "Konibet (コニベット)" },
    { label: "ローンチ", value: "2019年" },
    { label: "運営会社", value: "Dash N.V. (CSA Polisen Information Co. Ltd)" },
    { label: "ライセンス", value: "アンジュアン (ALSI-142311015-F12), キュラソー (8048/JAZ2022-087)" },
    { label: "VIPプログラム", value: "✅" },
    { label: "対応言語", value: "日本語" },
    { label: "対応通貨", value: "USD, JPY" },
    {
      label: "ゲームタイプ",
      value:
        "パチンコ, パチスロ, スロット, ライブカジノ, スポーツベット, 対人ポーカー, バカラ, ブラックジャック, ルーレット, ゲームショー, シューティングゲーム, クラッシュゲーム",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://casinotsu.com/providers/microgaming">Microgaming</Link>, <Link href="https://casinotsu.com/providers/golden-hero-games">Golden Hero</Link>, <Link href="https://casinotsu.com/providers/red-tiger">Red Tiger</Link>, <Link href="https://casinotsu.com/providers/relax-gaming">Relax Gaming</Link>, <Link href="https://casinotsu.com/providers/yggdrasil">Yggdrasil</Link>, Nolimit City, Japan Technicals Games, Asia Gaming, SA Gaming, Evolutionなど多数
        </span>
      ),
    },
    { label: "最小入金額", value: "$20" },
    { label: "最小出金額", value: "$40" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@konibet.com">support@konibet.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間日本語対応)" },
    { label: "LINEサポート", value: "✅ (@Konibet)" },
  ],
  intro: {
    paragraphs: [
      "Konibet（コニベット）は、2019年のオープン以来、特に日本人プレイヤーから絶大な支持を得ているオンラインカジノです。",
      "その人気の秘訣は、24時間対応の質の高い日本語サポート、業界トップクラスの出金スピード、そして何よりも2024年に導入されたオンラインパチンコ・パチスロ「コニパチ」の存在です。",
      "CasinoTsuでは、賭け条件が非常に緩い、あるいはゼロという画期的なボーナスシステムや、豊富なゲームラインナップなど、コニベットの魅力を余すところなく徹底解説します。",
    ],
    ctas: [
      { text: "👉 コニベットで今すぐプレイ！", href: "https://go.japanesecasino.com/go/konibet:konibet?referrer_path=%2Freviews%2Fkonibet" },
      { text: "🤓 オンラインパチンコの遊び方をチェック", href: "https://www.japanesecasino.com/guides/pachinko" },
    ],
  },
  games: [
    "コニベットのゲームライブラリはまさに圧巻です。最大の目玉は、2024年に導入された「コニパチ」で、『エヴァンゲリオン』や『北斗の拳』など約1000種類のパチンコ・パチスロをオンラインで楽しめます。",
    "スロットも約1000種類と豊富で、リアルタイムの還元率がわかる「ライブRTP」機能は、勝ちやすい台を見つけるのに非常に役立ちます。さらに、9社のプロバイダーが提供する100テーブル以上のライブカジノ、スポーツベット、そして2025年夏導入予定の対人ポーカー「コニポーカー」まで、あらゆるプレイヤーのニーズに応えるラインナップを誇ります。",
  ],
  features: [
    "コニベットの独自性は、ゲームラインナップだけに留まりません。Pragmatic Play社の人気スロットにコニベットのキャラクターが登場する独占ゲームなど、ここでしか遊べないタイトルも提供しています。",
    "また、サイト内でリアルタイムのRTP（還元率）を公開している点は、戦略的にプレイしたいプレイヤーにとって大きなアドバンテージです。これにより、現在どのゲームが出やすいかをデータに基づいて判断できます。",
  ],
  editorial: {
    author: "CasinoTsu編集部",
    profileHref: "/authors",
    hook: "パチンコ・パチスロの導入と賭け条件ゼロのボーナスは革命的。初心者からハイローラーまで全プレイヤーにおすすめできるカジノです。",
    theGoodStuff: "24時間対応のネイティブ日本語サポートと業界最速クラスの出金スピードが、絶大な安心感を提供します。賭け条件ゼロのフリースピンやキャッシュバックは、純粋に勝利金を得るチャンスであり、非常に価値が高いです。",
    theHeadsUp: "ほとんどのボーナス申請をライブチャット経由で行う必要があるのは少し手間かもしれません。また、初回出金時のKYC認証には時間がかかることがあるため、早めに済ませておくのが賢明です。",
    finalThought: "多少の手間を補って余りあるほどのメリットがコニベットにはあります。特にパチンコ・パチスロファンにとっては唯一無二の存在であり、手厚いサポートとプレイヤー有利なボーナス条件を考えれば、メインカジノとして利用する価値は非常に高いでしょう。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "2019年の設立以来、コニベットは常に日本人プレイヤーのニーズを的確に捉え、進化を続けてきました。その集大成とも言えるのが、2024年に導入されたオンラインパチンコ・パチスロ「コニパチ」です。これにより、コニベットは単なるオンラインカジノの枠を超え、日本のギャンブルファンにとっての総合エンターテイメントプラットフォームとしての地位を確立しました。",
      "コニベットを語る上で欠かせないのが、その卓越したサポート体制とプレイヤー本位のボーナスシステムです。24時間365日、ネイティブの日本人スタッフがライブチャットやLINEで対応してくれる安心感は、他のカジノでは得難いものです。出金スピードも非常に速く、SNSでの評判も上々で、信頼性の高さを物語っています。",
      "ボーナスに関しても、コニベットは一線を画します。一般的な複雑な賭け条件を持つ入金ボーナスを避け、負けた場合に損失額がキャッシュバックされる「リベンジボーナス」や、勝利金がそのままキャッシュになる「賭け条件ゼロ」のフリースピンを提供。これは、プレイヤーがリスクを抑えつつ、純粋に勝利を目指せる画期的なアプローチです。",
      "もちろん、豊富なゲームセレクションも魅力です。パチンコ・パチスロに加え、独自の「ライブRTP」機能を備えたスロット、9社が提供するライブカジノ、スポーツベット、そして対人ポーカーと、飽きることがありません。",
      "ボーナス申請がチャット経由であったり、初回KYCに時間がかかったりといった小さな手間はありますが、それらはコニベットが提供する計り知れないメリットの前では些細なことと言えるでしょう。初心者には安心感を、経験者には満足感を、そしてパチンコファンには新たな興奮を提供するコニベットは、現在のオンラインカジノ市場において最も推薦できるカジノの一つです。",
    ],
  },
  security: [
    "アンジュアンおよびキュラソーのダブルライセンスを取得して合法的に運営",
    "第三者監査機関による定期的な監査とRNG（乱数発生器）によるゲームの公平性の保証",
    "SSL暗号化技術によりプレイヤーの個人情報や取引データを保護",
    "サイト内でリアルタイムのRTPを公開し、透明性を確保",
  ],
  responsiblePlay: [
    "ウェブサイトのインフォメーション項目に「責任あるゲーミング」ページを設置し、アドバイスを提供。",
    "プレイヤーは自己責任で、居住国の法律やルールに従ってプレイすることが推奨されています。",
  ],
  complaintStats: [
    "SNSでの評判は出金スピードの速さやサポート対応の良さなど、肯定的な意見が多数。",
    "一部の海外レビューサイト（Chipy.com, KeyToCasinos）では、出金信頼性に関して低い評価が見られ、出金遅延や拒否の報告が少数ながら存在する。",
  ],
  awards: [],
  restrictedCountries: [
    "アメリカ合衆国",
  ],
  userConcerns: [
    "ボーナス申請がライブチャット経由で手動である点。",
    "初回出金時の本人確認（KYC）プロセスに最大72時間かかる可能性がある点。",
    "少数ながら、海外プレイヤーから出金遅延や拒否の報告が挙がっている点。",
  ],
  summary: [
    "2024年にパチンコ・パチスロを導入し、ゲームラインナップが大幅にパワーアップ。",
    "24時間対応のネイティブ日本語サポートと業界トップクラスの出金速度で、信頼性が非常に高い。",
    "賭け条件がゼロまたは非常に低いユニークなボーナスシステムは、プレイヤーにとって大きなメリット。",
    "いくつかの手動手続きはあるものの、それを補って余りある魅力を持つ、初心者から上級者まで全てにおすすめできるカジノ。",
  ],
  extraLinks: [
    { text: "🔰 賭け条件ってなに？わかりやすく解説！", href: "https://casinotsu.com/guides/wagering-requirements" },
    { text: "✅ オンラインカジノの本人確認（KYC）をマスターしよう", href: "https://casinotsu.com/guides/document-verification" },
  ],
  faq: [],
  cta: {
    text: "コニベットでパチンコもカジノも楽しむ！",
    href: "https://go.japanesecasino.com/go/konibet:konibet?referrer_path=%2Freviews%2Fkonibet",
  },
};