import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewHunnyPlay: ReviewPageContent = {
  hero: {
    title: "Hunny Play（ハニープレイ）レビュー",
    subheading: "最大$500ボーナス + 合計150回フリースピン",
    description: "魅力的なボーナスと匿名登録が特徴のクリプトカジノ、ハニープレイ。しかし、ライセンスの有効性や賞金未払いに関する深刻な警告も報告されています。CasinoTsuがその実態を徹底レビューします。",
    score: 4.0,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 81,
        note: "豪華なボーナスが魅力だが、日本ではまだ知名度が低い。深刻な安全性への懸念が成長の大きな障壁。",
      },
      {
        label: "規約",
        percent: 82,
        note: "入金額に賭け条件がない点は非常にユニークで高評価。ボーナス条件も比較的分かりやすい。",
      },
      {
        label: "操作性",
        percent: 84,
        note: "登録が簡単でサイトデザインも直感的。しかし、規約などの重要情報が未翻訳なのは大きなマイナス点。",
      },
      {
        label: "サポート",
        percent: 74,
        note: "24時間日本語対応は良いが、応答が遅く翻訳ベース。賞金未払いに関する苦情も報告されており信頼性に欠ける。",
      },
    ],
    highlights: [
      "最大150回の入金不要フリースピンがもらえる",
      "最大300%の豪華な2段階ウェルカムボーナス",
      "メールアドレスとパスワードのみで匿名登録が可能",
      "入金したキャッシュには賭け条件が一切なし",
    ],
    watchouts: [
      "ライセンスが無効または偽物である可能性が指摘されている",
      "賞金未払いに関する7万ドル以上の苦情が報告されている",
      "第三者機関による安全性評価が極端に低い (1.4/10)",
      "カスタマーサポートの対応に問題があるとの報告",
      "規約など重要な情報が英語表記のみ",
    ],
  },
  payments: {
    featured: [
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "匿名性が高く、クリプトカジノの定番",
      },
      {
        name: "Ethereum",
        icon: "/assets/payments/ethereum.svg",
        href: "https://casinotsu.com/payment/ethereum",
        badge: "仮想通貨",
        note: "主要なアルトコインとして広く利用可能",
      },
      {
        name: "USDT (Tether)",
        icon: "/assets/payments/usdt.svg",
        href: "https://casinotsu.com/payment/usdt",
        badge: "ステーブルコイン",
        note: "価格変動リスクが少ないドル連動型通貨",
      },
      {
        name: "Litecoin",
        icon: "/assets/payments/litecoin.svg",
        href: "https://casinotsu.com/payment/litecoin",
        badge: "仮想通貨",
        note: "ビットコインより高速な決済が可能",
      },
      {
        name: "Ripple (XRP)",
        icon: "/assets/payments/xrp.svg",
        badge: "高速送金",
        note: "非常に速い送金スピードが特徴",
      },
    ],
    deposits: [
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
      { name: "Solana (SOL)" },
      { name: "Toncoin (TON)" },
      { name: "Ripple (XRP)" },
      { name: "Litecoin (LTC)" },
      { name: "Dogecoin (DOGE)" },
      { name: "TRON (TRX)" },
      { name: "BNB", icon: "/assets/payments/bnb.svg" },
      { name: "Tether (USDT)", icon: "/assets/payments/usdt.svg" },
      { name: "USD Coin (USDC)", icon: "/assets/payments/usdc.svg" },
      { name: "その他約20種類の仮想通貨" },
      { name: "銀行送金 (一部法定通貨)" },
      { name: "電子ウォレット (一部法定通貨)" },
    ],
    withdrawals: [
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
      { name: "Solana (SOL)" },
      { name: "Toncoin (TON)" },
      { name: "Ripple (XRP)" },
      { name: "Litecoin (LTC)" },
      { name: "Dogecoin (DOGE)" },
      { name: "TRON (TRX)" },
      { name: "BNB", icon: "/assets/payments/bnb.svg" },
      { name: "Tether (USDT)", icon: "/assets/payments/usdt.svg" },
      { name: "USD Coin (USDC)", icon: "/assets/payments/usdc.svg" },
    ],
    notes: [
      "約30種類の仮想通貨に対応したクリプトカジノです。Moonpayなどを経由してサイト内で仮想通貨の購入も可能です。",
      "最大の特徴は、入金額に賭け条件が一切ないことです。入金した資金はいつでも引き出せます。",
      "出金上限額は無制限とされていますが、高額出金時にはKYC（本人確認）が要求される可能性があります。",
      "出金スピードは「即時〜2時間」とされていますが、「最大7日間」かかるという情報もあり、一貫性がありません。",
    ],
  },
  bonuses: {
    overview:
      "ハニープレイは非常に豪華なウェルカムボーナスを提供しています。CasinoTsu限定ボーナスと通常ボーナスを合わせると、合計150回の入金不要フリースピンが獲得できます。ただし、ボーナス規約の信頼性や、賞金を実際に出金できるかについては深刻な懸念が報告されています。",
    noDeposit:
      "CasinoTsu経由でボーナスコード「GL100」を入力して登録すると、人気スロット『Gates of Olympus 1000』で使える100回のフリースピンを獲得できます。これに加えて通常の登録ボーナス50回も付与され、合計150回となります。勝利金の賭け条件は20倍、最大出金額は$100、有効期限は3日間です。",
    extraSpins: {
      summary: "ウェルカムボーナスとして、入金不要で合計150回のフリースピンが付与されます。",
      schedule: [
        "CasinoTsu限定: 登録時にコード「GL100」入力で100回",
        "通常登録ボーナス: 50回",
        "賭け条件: 20倍",
        "最大出金額: $100",
      ],
      warning: "一部情報源では、これらのボーナスから得た賞金を引き出すために、自己資金での賭けが必要になる場合があると指摘されています。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "120%", cap: "$200", code: "不要" },
      { depositNumber: "2回目", percent: "180%", cap: "$300", code: "不要" },
    ],
    conditions: [
      "入金ボーナスの賭け条件は35倍です。",
      "初回入金の最低額は$10、2回目は$20です。",
      "ボーナスからの最大出金額は、受け取ったボーナス額の5倍までです。",
      "賭け条件の消化率はスロットが100%、その他のゲームは10%です。",
      "ボーナス規約は情報源によって内容が異なり、変動する可能性があるため注意が必要です。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "VIPプログラム",
      description: "ベット額に応じてレベルが上がるVIPプログラムが用意されています。レベルが上がるとキャッシュバック率（最大28%）やボーナス額が増加し、専任マネージャーが付くなどの特典があります。",
      highlight: "特定の仮想通貨を年利65%でステーキングできるオプションもあるとされています",
    },
    {
      title: "期間限定プロモーション＆トーナメント",
      description: "常時、様々なトーナメントや期間限定のプロモーションが開催されていますが、プロモーションページは全て英語表記です。",
      highlight: "参加するには内容を正確に理解する必要がある",
    },
  ],
  facts: [
    { label: "名称", value: "Hunny Play (ハニープレイ)" },
    { label: "ローンチ", value: "2021年" },
    { label: "運営会社", value: "Alchemy Games N.V." },
    { label: "ライセンス", value: "Curaçao (Antillephone) ※無効または偽物の可能性が指摘されています" },
    { label: "VIPプログラム", value: "✅" },
    { label: "対応言語", value: "日本語、英語など" },
    { label: "対応通貨", value: "30種類以上の仮想通貨、一部の法定通貨" },
    {
      label: "ゲームタイプ",
      value:
        "スロット, ライブカジノ, ゲームショー, オリジナルゲーム, ビンゴ, ビデオポーカー, ジャックポット, クラッシュゲーム, バーチャルスポーツ, スクラッチカードなど",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/evolution">Evolution</Link>, <Link href="https://casinotsu.com/providers/nolimit-city">Nolimit City</Link>, <Link href="https://casinotsu.com/providers/hacksaw-gaming">Hacksaw Gaming</Link>, Ezugi, Asia Gamingなど21社
        </span>
      ),
    },
    { label: "最小入金額", value: "仮想通貨により異なる (例: 1 DOGE)" },
    { label: "最小出金額", value: "情報なし" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅ (メールフォーム経由)" },
    { label: "Eメール", value: "情報なし" },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間日本語対応)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "ハニープレイ（Hunny Play）は、2021年に設立された仮想通貨を中心としたオンラインカジノです。最大150回の入金不要フリースピンや、合計300%のウェルカムボーナスなど、非常に豪華なプロモーションでプレイヤーを惹きつけます。",
      "また、メールアドレスとパスワードだけで登録できる匿名性の高さも大きな特徴です。",
      "しかし、このレビューでは、その魅力的な側面の裏に潜む、ライセンスの信頼性や賞金未払いといった深刻な安全性への懸念について、CasinoTsuが徹底的に掘り下げていきます。正確さが第一。興奮はその次です。",
    ],
    ctas: [
      { text: "🌟 CasinoTsu推薦の安全なカジノをチェック", href: "https://casinotsu.com/reviews" },
      { text: "💰 仮想通貨が使えるカジノ特集", href: "https://casinotsu.com/crypto" },
    ],
  },
  games: [
    "ハニープレイでは、約3,600種類のスロットゲームをはじめ、合計で3,000種類以上の多彩なゲームを提供しています。Pragmatic PlayやEvolution、Nolimit Cityといった人気プロバイダーのゲームが揃っています。",
    "『ゲーツ・オブ・ハニー』のようなユニークなオリジナルゲームも5種類プレイ可能です。一方で、Play’n GOやRelax Gamingといった一部の人気プロバイダーは導入されておらず、プロバイダー数は21社とやや少なめです。",
  ],
  features: [
    "最大の魅力は、匿名でのアカウント登録です。メールアドレスとパスワードだけで始められるため、個人情報を開示したくないプレイヤーにとって非常に手軽です。",
    "もう一つのユニークな特徴は、入金したキャッシュ（現金）に一切の賭け条件がないことです。これにより、プレイヤーは資金を柔軟に管理できます。",
  ],
  editorial: {
    author: "Nanami",
    profileHref: "/authors/nanami",
    hook: "ボーナスは業界トップクラスに豪華ですが、その蜜は甘い毒かもしれません。",
    theGoodStuff: "合計150回の入金不要スピン、最大300%の入金ボーナス、そして入金額に賭け条件がないという規約は、間違いなく魅力的です。匿名で手軽に始められる点も、多くのプレイヤーにとってメリットでしょう。",
    theHeadsUp: "しかし、その魅力はすべて、根本的な信頼性の欠如によって覆されています。ライセンスが無効または偽物である可能性、7万ドルを超える賞金未払いの苦情、そして極端に低い安全性評価は、プレイヤーの資金が深刻なリスクに晒されることを意味します。",
    finalThought: "どんなにボーナスが豪華でも、賞金が支払われなければ意味がありません。CasinoTsuとしては、これらの重大なリスクを無視することはできず、現時点でのハニープレイの利用は強く推奨できません。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "CasinoTsuがハニープレイをレビューするにあたり、その評価は二つの側面で大きく分かれました。一つは、プロモーションと利便性という「プレイヤーを惹きつける力」。そしてもう一つは、ライセンスと信頼性という「プレイヤーを保護する基盤」です。",
      "前者に関しては、ハニープレイは非常に優れています。CasinoTsu限定ボーナスを含め合計150回もの入金不要フリースピン、最大300%という高還元のウェルカムボーナス、そして入金額に賭け条件を課さないという大胆な規約は、他のカジノではなかなか見られないものです。メールアドレスだけで登録できる手軽さも、特に仮想通貨ユーザーのプライバシー意識に合致しています。",
      "しかし、後者の「プレイヤーを保護する基盤」に目を向けると、状況は一変します。第三者機関Casino.Guruによる調査では、ハニープレイが掲げるキュラソーライセンスが「偽物または無効」である可能性が指摘されています。これはカジノ運営の合法性そのものを揺るがす、極めて深刻な問題です。さらに、安全性指数は10点満点中わずか1.4点という危険水域の評価。実際に7万ドルを超える賞金未払いに関するプレイヤーからの苦情が複数寄せられており、「詐欺的なカジノ」という厳しい評価さえ下されています。",
      "カスタマーサポートも、24時間日本語対応と謳いながら、実際には応答が遅く、翻訳ベースのコミュニケーションに終始するという問題を抱えています。これでは、万が一トラブルが発生した際に、プレイヤーが適切に保護されるとは到底考えられません。",
      "結論として、ハニープレイは甘い蜜でプレイヤーを誘う一方で、その足元には底なしの沼が広がっているようなカジ-ノと言えます。CasinoTsuの使命は、安全で公正な情報を提供することです。現状、ハニープレイに存在するリスクは、その魅力的なボーナスを遥かに上回るものであり、プレイヤーの皆様に利用を推奨することはできません。",
    ],
  },
  security: [
    "公式サイトではキュラソーライセンス（Antillephone License Validation）の取得を主張。",
    "ライセンスを持つゲームプロバイダーからのゲーム提供を公表。",
    "プライバシーポリシーをサイト上で公開。",
  ],
  responsiblePlay: [
    "責任あるギャンブルに特化した専用ページは設けられていない。",
    "トップページ下部にギャンブル依存症のサポートを提供する外部サイトへのリンクが掲載されている。",
    "プレイヤー自身が居住国の法律を確認し、自己責任でプレイすることが求められる。",
  ],
  complaintStats: [
    "Casino.Guruによる安全性指数は1.4/10（非常に低い）。",
    "ライセンスが無効または偽物である可能性が指摘されている。",
    "プレイヤーから総額7万ドルを超える賞金未払いに関する苦情が複数報告されている。",
    "過去に「会社が清算手続きに入った」との報告や「詐欺的なカジノ」という評価も存在する。",
  ],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "賞金が支払われないリスクが非常に高い。",
    "ライセンスが有効でない可能性があり、法的な保護が受けられない恐れ。",
    "カスタマーサポートの対応が遅く、問題解決が困難。",
    "利用規約など重要な情報が英語のみで、プレイヤーに不利な条件を見逃すリスク。",
  ],
  summary: [
    "ボーナス内容は業界でもトップクラスに豪華で、匿名登録も可能。",
    "しかし、ライセンスの信頼性が極めて低く、賞金未払いに関する深刻な苦情が多数報告されている。",
    "第三者機関からの安全性評価は最低レベルであり、利用は非常に高いリスクを伴う。",
    "魅力的なオファーに惑わされず、安全性と信頼性の観点から利用を避けるべきカジノです。",
  ],
  extraLinks: [
    { text: "⚖️ オンラインカジノのライセンスとは？", href: "https://casinotsu.com/info/casino-license" },
    { text: "⛑️ 責任あるギャンブルについて", href: "https://casinotsu.com/info/responsible-gambling" },
  ],
  faq: [
    {
      question: "ハニープレイに入金不要ボーナスはありますか？",
      answer: "はい、CasinoTsu限定の100回分と通常の50回分を合わせて、合計150回の入金不要フリースピンが提供されています。ただし、カジノ自体の信頼性に深刻な懸念があるため、利用には注意が必要です。",
    },
    {
      question: "ハニープレイでは、クレジットカードを使えますか？",
      answer: "直接の決済には利用できません。ハニープレイは仮想通貨が中心ですが、銀行送金や電子ウォレットが一部の法定通貨で利用可能です。また、サイト内でクレジットカードを使って仮想通貨を購入することはできます。",
    },
    {
      question: "ハニープレイのカスタマーサポートは日本語に対応していますか？",
      answer: "はい、ライブチャットが24時間日本語に対応していますが、翻訳ツールを使用した対応で、返信が遅いとの報告があります。また、賞金未払いなどサポート対応に関する深刻な苦情も寄せられています。",
    },
  ],
  cta: {
    text: "CasinoTsuが推薦する、安全で信頼できるカジノのリストを見る",
    href: "https://casinotsu.com/reviews",
  },
};