import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewCasinoX: ReviewPageContent = {
  hero: {
    title: "カジノエックス（Casino-X）レビュー",
    subheading: "最大¥204,500ボーナス＋200回フリースピン",
    description: "2022年秋に復活したカジノエックスをCasinoTsuが徹底レビュー。限定の4,500円入金不要ボーナスや豊富な決済方法、5回目までの豪華入金ボーナス、サポート体制まで詳しく解説します。",
    score: 4.4,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 86,
        note: "2022年秋の復活後も変わらぬ人気。スポーツベットも遊べ、豊富な決済方法と多彩なプロモーションが注目されています。",
      },
      {
        label: "規約",
        percent: 86,
        note: "限定の入金不要ボーナスに加え、5回目まで続く入金ボーナスは非常に魅力的。ただし、ボーナスからの出金上限には注意が必要。",
      },
      {
        label: "操作性",
        percent: 90,
        note: "PC、モバイル、アプリで快適にプレイ可能。カード、銀行送金、Eウォレット、仮想通貨と決済方法が非常に豊富。",
      },
      {
        label: "サポート",
        percent: 87,
        note: "24時間365日の日本語カスタマーサポートは安心感が高い。迅速な回答で好印象。",
      },
    ],
    highlights: [
      "CasinoTsu 限定！4,500円の入金不要ボーナス",
      "初回から5回目まで続く超豪華なウェルカムボーナス",
      "PayPayや銀行振込を含む非常に豊富な決済方法",
      "24時間365日対応の日本語カスタマーサポート",
      "カジノ、ライブカジノ、スポーツベットが全て遊べる",
    ],
    watchouts: [
      "iPhone/iOS用の専用アプリがない",
      "一部ユーザーからサイトの遅延や技術的な問題が報告されている",
      "出金処理が週3回（月・水・金）のみとの報告あり",
      "責任あるギャンブルの自己規制ツールがサイトから直接設定できない",
    ],
    avatarSrc: "/assets/casino/casino-x.png",
    avatarAlt: "Casino-Xのロゴ",
  },
  payments: {
    featured: [
      {
        name: "PayPay",
        icon: "/assets/payments/paypay.svg",
        href: "https://casinotsu.com/payment/paypay",
        badge: "人気",
        note: "スマホで簡単、日本の定番決済",
      },
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "安心",
        note: "¥1,000からの少額入金に対応",
      },
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "定番",
        note: "世界中で使える信頼のカードブランド",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://casinotsu.com/payment/payz",
        badge: "Eウォレット",
        note: "¥500からの少額入金が可能",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "迅速で匿名性の高い決済手段",
      },
    ],
    deposits: [
      { name: "MasterCard", icon: "/assets/payments/mastercard.svg" },
      { name: "VISA", icon: "/assets/payments/visa.svg" },
      { name: "Discover" },
      { name: "Diners Club" },
      { name: "American Express", icon: "/assets/payments/american-express.svg" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "Tiger Pay", icon: "/assets/payments/tiger-pay.svg", href: "https://casinotsu.com/payment/tiger-pay" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg", href: "https://casinotsu.com/payment/muchbetter" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
      { name: "SticPay", icon: "/assets/payments/sticpay.svg", href: "https://casinotsu.com/payment/sticpay" },
      { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg", href: "https://casinotsu.com/payment/bank-transfer" },
      { name: "PayPay", icon: "/assets/payments/paypay.svg", href: "https://casinotsu.com/payment/paypay" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Litecoin", icon: "/assets/payments/litecoin.svg" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
      { name: "Ripple", icon: "/assets/payments/ripple.svg" },
      { name: "Dogecoin" },
      { name: "Tether", icon: "/assets/payments/tether.svg" },
      { name: "TON" },
      { name: "BNB" },
      { name: "BUSD" },
      { name: "USDC" },
      { name: "TRON" },
      { name: "Polygon" },
      { name: "Solana" },
    ],
    withdrawals: [
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "Tiger Pay", icon: "/assets/payments/tiger-pay.svg", href: "https://casinotsu.com/payment/tiger-pay" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg", href: "https://casinotsu.com/payment/muchbetter" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
      { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg", href: "https://casinotsu.com/payment/bank-transfer" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Litecoin" },
      { name: "Ethereum" },
      { name: "Ripple" },
      { name: "Dogecoin" },
      { name: "Tether" },
      { name: "TON" },
      { name: "BNB" },
      { name: "USDC" },
      { name: "Polygon" },
      { name: "Solana" },
    ],
    notes: [
      "最低出金額は約$50、月間最高出金額は$100,000です。",
      "一部の情報では、出金処理が月・水・金の週3回（10時〜18時）のみと報告されています。",
      "出金には入金額の3倍の賭け条件が適用され、満たない場合は10%の手数料が発生または出金が拒否されることがあります。",
      "$1,000以上の出金には本人確認（KYC）が必要です。",
    ],
  },
  bonuses: {
    overview:
      "カジノエックスは非常に豊富なボーナスを提供しています。CasinoTsu限定の入金不要ボーナスから始まり、初回から5回目まで続く入金ボーナス、フリースピン、スポーツベット、ライブカジノ用オファーまで、あらゆるプレイヤーに対応するプロモーションが満載です。",
    noDeposit:
      "CasinoTsu限定！登録時にボーナスコード「japacasi」を入力するだけで、4,500円の入金不要ボーナスがもらえます。賭け条件は30倍、このボーナスからの最大出金額は12,000円です。",
    extraSpins: {
      summary:
        "初回に2,000円以上入金すると、Avatar UX社の人気スロット『Cherry Pop』で使える200回のフリースピンがもらえます。",
      schedule: [
        "初回入金（¥2,000以上）で有効化",
        "10日間にわたり、毎日20スピンずつ付与されます。",
        "毎日ログインしてフリースピンを受け取る必要があります。",
      ],
      warning: "フリースピンから得た勝利金には賭け条件が適用されます。",
    },
    welcomeRows: [
      { depositNumber: "初回 (¥2,000〜¥4,999)", percent: "200%", cap: "¥5,000", code: "不要" },
      { depositNumber: "初回 (¥5,000〜¥49,999)", percent: "150%", cap: "¥30,000", code: "不要" },
      { depositNumber: "初回 (¥50,000〜)", percent: "50%", cap: "¥200,000", code: "不要" },
      { depositNumber: "2回目 (¥4,000〜)", percent: "100%", cap: "¥30,000", code: "不要" },
      { depositNumber: "3回目 (¥5,000〜)", percent: "50%", cap: "¥40,000", code: "不要" },
      { depositNumber: "4回目 (¥5,000〜)", percent: "50%", cap: "¥50,000", code: "不要" },
      { depositNumber: "5回目 (¥5,000〜)", percent: "25%", cap: "¥75,000", code: "不要" },
    ],
    conditions: [
      "入金ボーナスの賭け条件は20倍〜30倍（入金額とボーナス額による）。",
      "ボーナスからの最大出金額は、受け取ったボーナス額の10倍〜30倍に制限されます。",
      "初回入金ボーナスは入金額によってパーセンテージと上限額が変動します。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "スポーツフリーベット",
      description: "2,000円以上の初回入金で、スポーツベットで使える1,000円相当のフリーベットがもらえます。勝利金の賭け条件は8倍と低めです。",
      highlight: "勝利金はスロットでも消化可能",
    },
    {
      title: "ライブカジノのバウチャー",
      description: "初回入金で、Evolution社の『Lightning Roulette』で使える1,000円分のバウチャーも提供されます。賭け条件は20倍です。",
      highlight: "ライブカジノファンにも嬉しい特典",
    },
    {
      title: "キャッシュバック＆リベートボーナス",
      description: "カジノ、ライブカジノ、スポーツの全てでキャッシュバックとリベートボーナスが提供されます。還元率や賭け条件はVIPステータスに応じて向上し、最上位では賭け条件なしになります。",
      highlight: "プレイすればするほどお得になるロイヤリティ制度",
    },
  ],
  facts: [
    { label: "名称", value: "Casino-X (カジノエックス)" },
    { label: "ローンチ", value: "2011-2012年頃 (2022年秋に再開)" },
    { label: "運営会社", value: "Pomadorro N.V." },
    { label: "ライセンス", value: "Antillephone License Validation (Curaçao)" },
    { label: "VIPプログラム", value: "✅" },
    { label: "対応言語", value: "日本語、英語、ロシア語など" },
    { label: "対応通貨", value: "JPY, USDなど" },
    {
      label: "ゲームタイプ",
      value: "バカラ, ブラックジャック, クラップス, ゲームショー, ライブカジノ, ポーカー, ルーレット, スロット, スポーツベット",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://casinotsu.com/providers/playtech">Playtech</Link>, <Link href="https://casinotsu.com/providers/yggdrasil">Yggdrasil</Link>, <Link href="https://casinotsu.com/providers/quickspin">Quickspin</Link>, <Link href="https://casinotsu.com/providers/red-tiger">Red Tiger</Link>, <Link href="https://casinotsu.com/providers/nolimit-city">Nolimit City</Link>, <Link href="https://casinotsu.com/providers/relax-gaming">Relax Gaming</Link>, <Link href="https://casinotsu.com/providers/elk-studios">Elk Studios</Link>, <Link href="https://casinotsu.com/providers/thunderkick">Thunderkick</Link>, <Link href="https://casinotsu.com/providers/hacksaw-gaming">Hacksaw Gaming</Link>, <Link href="https://casinotsu.com/providers/betsoft">BetSoft</Link>, <Link href="https://casinotsu.com/providers/pg-soft">PG SOFT</Link> など34社以上
        </span>
      ),
    },
    { label: "最小入金額", value: "¥500 (Payz, AMEX)" },
    { label: "最小出金額", value: "$50" },
    { label: "電話サポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:ja_support@casino-x.com">ja_support@casino-x.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間365日)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "カジノエックス（Casino-X）は、2021年に一度日本市場から撤退した後、2022年秋に待望の復活を遂げたオンラインカジノです。",
      "カジノゲーム、ライブカジノ、スポーツベットの全てが楽しめるハイブリッド型プラットフォームとして、以前からのファンだけでなく新規プレイヤーからも安定した人気を誇っています。",
      "CasinoTsuでは、限定の4,500円入金不要ボーナスをはじめ、5回目まで続く豪華な入金ボーナス、豊富な決済方法、サポート体制まで、カジノエックスの魅力を余すところなく徹底的にレビューします！",
    ],
    ctas: [
      { text: "👉 カジノエックスで今すぐプレイ！", href: "https://go.casinotsu.com/go/casino-x:casino-x?referrer_path=%2Freviews%2Fcasino-x" },
      { text: "🎁 限定4,500円ボーナスの詳細をチェック", href: "https://casinotsu.com/offers/casino-x-exclusive" },
    ],
  },
  games: [
    "カジノエックスでは2,300種類以上のスロットゲームを楽しめます。特筆すべきは、その非常に使いやすい検索フィルター機能です。プロバイダー別だけでなく、ゲームの機能（ボーナス購入、ジャックポットなど）やテーマ別（ホラー、メガウェイズなど）に細かく絞り込めるため、スロットファンにはたまらない仕様となっています。",
    "ライブカジノもEvolutionやPragmatic Playなど5つのプロバイダーが提供しており、人気のゲームショーも多数プレイ可能です。さらに、本格的なスポーツベッティングも楽しめ、一つのアカウントで全てのギャンブルを網羅できます。",
  ],
  features: [
    "Androidユーザー向けには専用アプリが提供されており、より快適なモバイルプレイが可能です（iPhone/iOS用アプリは現在ありません）。",
    "VIPプログラムはベット額に応じてステータスが上がる仕組みで、キャッシュバック率やリベート率が向上し、賭け条件も緩和されるなど、プレイすればするほど待遇が良くなります。",
  ],
  editorial: {
    author: "Nanami",
    profileHref: "/authors/rina-okabe",
    hook: "ボーナスの豪華さとフィルター機能の使いやすさは最高レベル！ただし、サポートの応答速度には波があるようです。",
    theGoodStuff: "CasinoTsu限定の入金不要ボーナスと、5回目まで手厚く続くウェルカムパッケージは、間違いなく業界トップクラスです。ゲーム検索フィルターの優秀さは、膨大なゲームの中からお気に入りを見つけたいプレイヤーにとって最高のツールです。",
    theHeadsUp: "24時間対応の日本語サポートは心強いですが、時間帯によっては返答がかなり遅れることがあるようです。また、一部で出金遅延やアカウント閉鎖の報告も見られるため、利用規約をよく読み、慎重にプレイすることが推奨されます。",
    finalThought: "総合的に見て、カジノエックスは非常に満足度の高いカジノです。特に、ボーナスをフル活用して様々なジャンルのゲームを遊び尽くしたいプレイヤーには最適の選択肢と言えるでしょう。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "2022年秋に日本市場へ凱旋したカジノエックスは、多くのプレイヤーが待ち望んでいた復活劇でした。その期待に応えるかのように、内容は以前よりもパワーアップしています。最大の魅力は、なんといってもその圧倒的なボーナス体系です。CasinoTsuから登録するだけでもらえる4,500円の入金不要ボーナスは、サイトを試す絶好の機会を提供してくれます。その後も5回目の入金まで続くウェルカムボーナスは、総額も大きく、プレイヤーの軍資金を強力に後押しします。",
      "機能面では、特にスロットの検索フィルターが秀逸です。「ホラーテーマのメガウェイズスロット」といったニッチな検索も可能で、これは他のカジノではなかなか見られない便利な機能です。カジノゲームだけでなく、本格的なスポーツベットも提供しており、まさにオールインワンのエンターテイメントプラットフォームと言えます。",
      "決済方法の豊富さも特筆すべき点で、PayPayのような国内で人気のサービスから、各種Eウォレット、10種類以上の仮想通貨まで対応しており、利便性は非常に高いです。サポートも24時間日本語対応で安心感がありますが、応答速度にムラがあるという点は留意すべきでしょう。",
      "一方で、一部のプレイヤーからは出金遅延やアカウント閉鎖といったネガティブな報告も散見されます。また、eCOGRAの認定が2016年に失効している点も気になります。これらのリスクを理解した上で、利用規約を遵守し、責任あるプレイを心がけることが重要です。総合的に見れば、カジノエックスは豊富なプロモーションと高い機能性を備えた、非常に魅力的なカジノであることは間違いありません。",
    ],
  },
  security: [
    "キュラソー政府発行のAntillephoneライセンスを取得して合法的に運営",
    "運営会社はPomadorro N.V.",
    "SSL暗号化技術によりプレイヤーの個人情報と取引データを保護",
    "提供するゲームはRNG（乱数発生器）により公平性を保証",
    "注意点として、eCOGRAの認定は2016年初頭に失効しています。",
  ],
  responsiblePlay: [
    "ギャンブル依存症対策のセルフチェックページを設置",
    "自己規制ツール（入金制限、プレイ時間制限など）の設定は、サイトから直接は行えず、カスタマーサポートへの連絡が必要。",
    "この点はプレイヤーの利便性を考慮すると改善が望まれます。",
  ],
  complaintStats: [],
  awards: [],
  restrictedCountries: [
    "アメリカ合衆国", "カナダ", "イギリス", "オーストラリア", "ウクライナ", "トルコ", "スペイン", "イタリア", "フランス", "アルバ", "オーストリア", "ベルギー", "キュラソー", "キプロス", "チェコ共和国", "朝鮮民主主義人民共和国", "デンマーク", "エストニア",
  ],
  userConcerns: [
    "カスタマーサポートの応答時間に変動があり、遅延することがある",
    "突然の出金遅延や、利用規約違反を理由とした賞金没収、アカウント閉鎖などの報告が一部である",
    "ウェブサイトの動作が遅い、または技術的な問題が発生することがあるとの声",
  ],
  summary: [
    "CasinoTsu限定の4,500円入金不要ボーナスと、5回目まで続く豪華なウェルカムパッケージが最大の魅力。",
    "スロット、ライブカジノ、スポーツベットが全て楽しめ、ゲーム検索フィルターが非常に優秀。",
    "PayPayや仮想通貨など決済方法が豊富で利便性が高い。",
    "サポートの応答速度のムラや、一部のネガティブな評判には注意が必要だが、総合的な満足度は非常に高いカジノ。",
  ],
  extraLinks: [
    { text: "🔰 オンラインカジノの賭け条件とは？", href: "https://casinotsu.com/bonuses/low-wagering" },
    { text: "👑 VIPプログラムのメリットを徹底解説", href: "https://casinotsu.com/guides/vip-program" },
  ],
  faq: [
    {
      question: "カジノエックスに入金不要ボーナスはありますか？",
      answer: "はい、あります。当サイト（CasinoTsu）経由で登録し、ボーナスコード「japacasi」を入力すると、4,500円の入金不要ボーナスがもらえます。",
    },
    {
      question: "カジノエックスでスポーツベットはできますか？",
      answer: "はい、カジノゲームに加えて本格的なスポーツベッティングも楽しむことができます。",
    },
    {
      question: "カジノエックスの評判はどうですか？",
      answer: "全体的に、豊富なボーナスやゲームラインナップ、決済方法の利便性から評判は良好です。ただし、一部で出金遅延やサポート対応の遅さに関するネガティブな報告もあるため、利用規約をよく確認することをおすすめします。",
    },
  ],
  cta: {
    text: "CasinoTsu限定ボーナスでカジノエックスを始めよう！",
    href: "https://go.casinotsu.com/go/casino-x:casino-x?referrer_path=%2Freviews%2Fcasino-x",
  },
    images: {
    casino: [
      "/assets/casino/casino-x.png",
      "/assets/casino/casino-x.jpg",
    ],
  },
};