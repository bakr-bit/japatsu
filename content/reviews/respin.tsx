import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewRespin: ReviewPageContent = {
  hero: {
    title: "ReSpin（リスピン）カジノのボーナスや評判を全解説！ 2025年",
    subheading: "最大300USDT + 200回フリースピン",
    description: "全種獲得可能な3種類のウェルカムオファーをはじめ、多彩なプロモーションが魅力の仮想通貨専門オンラインカジノです。キャッシュバックやレーキバックが受け取れるロイヤルティプログラムも、ぜひご注目ください。👍",
    score: 3.7,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 73,
        note: "知名度はまだ低めですが、豊富なプロモーションとゲーム数で今後の活躍に期待が高まります。",
      },
      {
        label: "規約",
        percent: 50,
        note: "ウェルカムボーナスは魅力的ですが、一部の利用規約には注意が必要です。",
      },
      {
        label: "操作性",
        percent: 50,
        note: "モダンで使いやすいインターフェースですが、新しいカジノのため改善の余地があります。",
      },
      {
        label: "サポート",
        percent: 50,
        note: "24時間ライブチャット対応ですが、日本語サポートの質にはばらつきがある可能性があります。",
      },
    ],
    highlights: [
      "多数用意されているプロモーション🎁",
      "5,000種類以上の豊富なゲームラインアップ🎮",
      "特典が充実しているロイヤルティプログラム👑",
      "高い安全性指数 (8.2/10)👑",
    ],
    watchouts: [
      "出金は仮想通貨のみ可能 (一部制限あり)",
      "入金不要ボーナスなし",
      "サイトによってはローンチ年が2023年と記載あり、情報にばらつきがある",
    ],
    avatarSrc: "/assets/casino/respin.png",
    avatarAlt: "Respinのロゴ",
  },
  payments: {
    featured: [
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "クリプトカジノの主要な決済手段",
      },
      {
        name: "Ethereum",
        icon: "/assets/payments/ethereum.svg",
        href: "https://casinotsu.com/payment/ethereum",
        badge: "仮想通貨",
        note: "人気のアルトコインで迅速な取引",
      },
      {
        name: "Visa",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "カード",
        note: "法定通貨での入金に対応",
      },
      {
        name: "Skrill",
        icon: "/assets/payments/skrill.svg",
        href: "https://casinotsu.com/payment/skrill",
        badge: "Eウォレット",
        note: "信頼性の高い電子決済サービス",
      },
    ],
    deposits: [
        { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://www.casinotsu.com/payment/bitcoin" },
        { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://www.casinotsu.com/payment/ethereum" },
        { name: "Litecoin", icon: "/assets/payments/litecoin.svg" },
        { name: "Ripple", icon: "/assets/payments/ripple.svg" },
        { name: "Solana", icon: "/assets/payments/solana.svg" },
        { name: "Tether", icon: "/assets/payments/tether.svg" },
        { name: "Bitcoin Cash", icon: "/assets/payments/bitcoin-cash.svg" },
        { name: "Dogecoin", icon: "/assets/payments/dogecoin.svg" },
        { name: "USD Coin", icon: "/assets/payments/usd-coin.svg" },
        { name: "Binance Coin", icon: "/assets/payments/binance-coin.svg" },
        { name: "Cardano", icon: "/assets/payments/cardano.svg" },
        { name: "TRON", icon: "/assets/payments/tron.svg" },
        { name: "Skrill", icon: "/assets/payments/skrill.svg" },
        { name: "MiFinity", icon: "/assets/payments/mifinity.svg" },
        { name: "Zimpler", icon: "/assets/payments/zimpler.svg" },
        { name: "Paysafecard", icon: "/assets/payments/paysafecard.svg" },
        { name: "Visa", icon: "/assets/payments/visa.svg" },
        { name: "MasterCard", icon: "/assets/payments/mastercard.svg" },
        { name: "銀行振込" },
        { name: "Revolut" },
        { name: "Wise" },
    ],
    withdrawals: [
        { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
        { name: "Ethereum", icon: "/assets/payments/ethereum.svg" },
        { name: "Litecoin", icon: "/assets/payments/litecoin.svg" },
        { name: "Ripple", icon: "/assets/payments/ripple.svg" },
        { name: "Solana", icon: "/assets/payments/solana.svg" },
        { name: "Tether", icon: "/assets/payments/tether.svg" },
        { name: "Bitcoin Cash", icon: "/assets/payments/bitcoin-cash.svg" },
        { name: "Dogecoin", icon: "/assets/payments/dogecoin.svg" },
        { name: "USD Coin", icon: "/assets/payments/usd-coin.svg" },
        { name: "Binance Coin", icon: "/assets/payments/binance-coin.svg" },
        { name: "Cardano", icon: "/assets/payments/cardano.svg" },
        { name: "TRON", icon: "/assets/payments/tron.svg" },
        { name: "Skrill", icon: "/assets/payments/skrill.svg" },
        { name: "MiFinity", icon: "/assets/payments/mifinity.svg" },
        { name: "Zimpler", icon: "/assets/payments/zimpler.svg" },
        { name: "Paysafecard", icon: "/assets/payments/paysafecard.svg" },
        { name: "Visa", icon: "/assets/payments/visa.svg" },
        { name: "MasterCard", icon: "/assets/payments/mastercard.svg" },
        { name: "銀行振込" },
        { name: "Revolut" },
        { name: "Wise" },
    ],
    notes: [
      "最低入金額はほとんどの決済方法で10USDT（または相当額）です。",
      "出金限度額は1日あたり50,000ユーロです。出金処理は一般的に1時間以内と迅速ですが、方法によっては最大7日かかる場合があります。",
      "出金には本人確認（KYC）が必要です。",
    ],
  },
  bonuses: {
    overview:
      "ReSpinカジノでは、新規プレイヤー向けに3種類の特典を含む豪華なウェルカムオファーを用意しています。その他にもリロードボーナスやロイヤルティプログラムなど、継続的に楽しめるプロモーションが充実しています。",
    noDeposit:
      "現在、ReSpinカジノでは入金不要ボーナスの提供はありません。",
    extraSpins: {
      summary:
        "初回入金時に200回分のフリースピンが提供されます。このフリースピンの賭け条件はわずか5倍と非常に緩やかで、勝利金の出金が現実的です。新規登録後24時間以内の初回入金が対象なのでご注意ください。",
      schedule: [
        "対象ゲームは初回入金後「マイリワード」から確認可能",
        "1スピンあたりの価値は0.1USDT",
        "獲得賞金に上限なし（1USDT未満は賭け条件適用外）",
        "有効期限は獲得から7日間",
      ],
      warning: "このフリースピンは、新規登録後24時間以内に初回入金を完了したプレイヤー限定の特典です。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "300USDT", code: "入金時に選択" },
    ],
    conditions: [
      "賭け条件は35倍です。",
      "有効期限は30日間です。",
      "最低入金額は25USDTです。",
      "ボーナス利用時の最大ベット額は5USDTです。",
      "ゲームの種類によって賭け条件の消化率は異なります。",
    ],
    prohibitedGames: [
        "（特定の禁止ゲームリストは提供されていません。ボーナス利用規約で各ゲームの賭け条件消化率を確認する必要があります。）",
    ],
  },
  offers: [
    {
      title: "初回入金ホイール",
      description: "初回入金を行うと、ボーナスやフリースピンとは別に「初回入金ホイール」を1回スピンできます。フリースピンや最大10USDTの現金を獲得できるチャンスです。",
      highlight: "このホイールで獲得した特典には賭け条件が一切ありません！",
    },
    {
      title: "リロードボーナス & キャッシュバック",
      description: "定期的に開催される入金ボーナスや、損失額の一部が還元されるキャッシュバックなど、継続プレイヤー向けのプロモーションも豊富に用意されています。",
    },
     {
      title: "その他のフリースピンオファー",
      description: "最低10USDTの入金で賭け条件0倍の100回フリースピンや、コード「CHIPY50」で賭け条件1倍の50回フリースピン（最初の1000ユーザー限定）など、複数のオファーがあります。",
    },
  ],
  facts: [
    { label: "名称", value: "ReSpin" },
    {
      label: "ローンチ",
      value: "2023/2024 (情報にばらつきあり)",
    },
    { label: "運営会社", value: "Comeback N.V." },
    { label: "ライセンス", value: "Curaçao Gaming Authority, Estonia, Anjouan Gaming Board" },
    { label: "VIPプログラム", value: "✅" },
    {
      label: "対応言語",
      value: "日本語、英語、フィンランド語、ノルウェー語、スペイン語、エストニア語、ロシア語、アイスランド語",
    },
    { label: "対応通貨", value: "各種仮想通貨, EUR, NOK, CLP, PEN, USD" },
    {
      label: "ゲームタイプ",
      value:
        "スロット, ブラックジャック, ルーレット, バカラ, ポーカー, ライブカジノ, ゲームショー, ビンゴ, ビデオポーカー, クラップス＆ダイス, ケノ, スクラッチカード, クラッシュゲーム",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          NetEnt, Nolimit City, Play'n GO, Blueprint Gaming, Evolution Gaming, Quickspin, Red Tiger Gaming, Thunderkick, Big Time Gaming, Playson, Evoplay, Push Gaming, BGaming, Endorphina, Habanero, Spinomenal, Relax Gaming, Spribe, Kalamba Games, Hacksaw Gaming, Novomatic, Fantasma Games, OneTouchなど合計59社
        </span>
      ),
    },
    { label: "最小入金額", value: "10USDT (または相当額)" },
    { label: "最小出金額", value: "N/A" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@respin.com">support@respin.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間受付)" },
    { label: "推定年間収益", value: "$5,000,000超 (中規模)" },
  ],
  intro: {
    paragraphs: [
      "ReSpin（リスピン）カジノは、2023年または2024年にオープンした新しい仮想通貨専門カジノです！💫",
      "プロモーションが非常に充実しており、ロイヤルティプログラムをはじめとした魅力的な特典やトーナメントなどのオファーが多数用意されています。",
      "新しいオンラインカジノですので、知名度はまだ低いかもしれませんが、59社以上のゲームプロバイダーから、5,000種類以上の幅広いゲームをプレイ可能という、遊びごたえは抜群です。",
      "さらに、ウェルカムボーナスや決済方法など、ReSpin（リスピン）カジノの気になる詳細を、CasinoTsuが徹底的に調査し、皆様にお伝えいたします！🥳🌟",
    ],
    ctas: [
      { text: "👉 CasinoTsu 推薦！ リスピンカジノ公式サイト💫", href: "https://go.casinotsu.com/go/respin" },
    ],
  },
  games: [
    "リスピンカジノでは、59社以上の有名プロバイダーが提供する5,000種類を超える豊富なゲームがお楽しみいただけます。",
    "スロット、テーブルゲーム（ブラックジャック、ルーレット、バカラ）、ライブカジノ、ゲームショーなど、幅広いジャンルを網羅しています。ライブカジノはPragmatic Play, NetEnt, Evolution Gamingといった主要プロバイダーが提供しており、臨場感あふれるゲーム体験が可能です。",
  ],
  features: [
    "プレイヤーからは「モダンで使いやすいインターフェース」と評価されており、特にモバイルデバイスでのプレイが快適です。",
    "仮想通貨に特化しているため、迅速な入出金プロセスが可能です。",
  ],
  editorial: {
    author: "Nanami",
    profileHref: "/authors/rina-okabe",
    hook: "仮想通貨ユーザー必見！3段構えのウェルカムオファーが魅力的な新星カジノです。",
    theGoodStuff: "初回入金でボーナス、低賭け条件のフリースピン、そして賭け条件なしのホイール特典という3つを同時に貰えるのは非常に豪華です。5,000以上のゲーム数と複数のライセンスによる信頼性の高さも大きなプラスポイントです。",
    theHeadsUp: "出金がほぼ仮想通貨に限られる点と、入金不要ボーナスがない点は注意が必要です。また、「ボーナスハンティング」に関する利用規約が少し厳しいとの指摘もあるため、プレイ前に規約をよく読むことをお勧めします。",
    finalThought: "ReSpinカジノは、豊富なボーナスとゲームを求める仮想通貨プレイヤーにとって、非常にポテンシャルの高い選択肢です。初回特典を最大限に活用して、この新しいカジノを体験してみてください。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "CasinoTsuが注目するReSpinカジノは、2023年または2024年に登場した仮想通貨専門のオンラインカジノです。新しいカジノでありながら、そのプロモーションの充実度は目を見張るものがあります。特に初回入金特典は、100%ボーナス、200回の低賭け条件フリースピン、そして賭け条件なしのホイールスピンという、プレイヤーにとって非常に有利な3点セットで構成されています。",
      "ゲームのラインナップも強力で、NetEntやPlay'n GO、Evolutionなど59社以上のプロバイダーから5,000種類以上のゲームを提供しています。これにより、スロットファンからライブカジノ愛好家まで、あらゆるプレイヤーのニーズに応えることができます。",
      "安全性と信頼性に関しても、キュラソー、エストニア、アンジュアンという複数のライセンスを取得している点は高く評価できます。Casino Guruによる安全性指数も8.2/10と高く、安心してプレイできる環境が整っていると言えるでしょう。",
      "決済方法は仮想通貨が中心ですが、Skrillやカード決済など一部の法定通貨オプションにも対応しており、柔軟性があります。出金処理も迅速で、プレイヤーからの評判も上々です。",
      "サポートは24時間対応のライブチャットがあり、日本語にも対応しているため、困ったときでも安心です。総じて、ReSpinカジノは、特に仮想通貨を使って最新のゲームと豪華なボーナスを楽しみたいプレイヤーにとって、非常に魅力的な選択肢であると結論付けられます。",
    ],
  },
  security: [
    "キュラソー、エストニア、アンジュアンの複数のゲーミングライセンスを取得",
    "サイト全体の通信を保護するSSL証明書を導入",
    "厳格なデータプライバシーポリシーに基づきプレイヤー情報を保護",
    "RNG（乱数生成器）認証を受けた公正なゲームのみを提供",
    "セキュリティ上の理由からVPNの使用は許可されていない",
  ],
  responsiblePlay: [
    "入金制限、ベット制限、時間/セッション制限、損失制限",
    "タイムアウト期間の設定",
    "自己評価ツールの提供",
    "ギャンブル依存症に関する支援組織へのリンク",
    "リアリティチェック機能",
    "オンライン取引履歴へのアクセス",
    "自己排除（最大180日間）",
  ],
  complaintStats: [
    "Casino Guruによる安全性指数は8.2/10と高評価",
    "主要なレビューサイトで大きなクレームは報告されていない（2025年時点）",
    "過去に一件あったアカウント閉鎖に関する問い合わせは円満に解決済み",
  ],
  awards: [
      "特になし",
  ],
  restrictedCountries: [
  ],
  userConcerns: [
    "ボーナスハンティング戦略に関する利用規約に、プレイヤーにとって若干厳しい可能性のある項目が指摘されている",
  ],
  summary: [
    "ReSpinカジノは、仮想通貨をメインに利用したいプレイヤーにとって魅力的なオンラインカジノです。特に、初回入金時の豪華なウェルカムオファーは、新規プレイヤーにとって大きな魅力となるでしょう。",
    "5,000種類以上の豊富なゲームラインナップと、59社ものプロバイダーとの提携は、飽きさせないプレイ体験を提供します。複数のライセンスを取得しており、サポート体制も良好であるため、信頼性も高いと言えます。",
    "法定通貨の選択肢が少ない点や入金不要ボーナスがない点は改善点ですが、全体として、ReSpinカジノは新興ながらも高いポテンシャルを持つカジノです。最新のゲームや魅力的なボーナスを求めるプレイヤーにCasinoTsuはおすすめです。",
  ],
  extraLinks: [
    { text: "🔰 賭け条件ってなに？わかりやすく解説！", href: "https://www.casinotsu.com/guides/wagering-requirements" },
  ],
  faq: [
    {
      question: "リスピンカジノに入金不要ボーナスはありますか？",
      answer: "現在、リスピンカジノでは入金不要ボーナスの提供はございません。",
    },
    {
      question: "リスピンカジノは安全ですか？",
      answer: "はい、リスピンカジノはキュラソーなどの複数のライセンスを取得しており、SSL暗号化技術を採用するなど、安全対策が施されています。Casino Guruによる安全性指数も8.2/10と高く、CasinoTsuも信頼できるカジノと評価しています。",
    },
    {
      question: "リスピンカジノで利用できる出金方法は？",
      answer: "主に仮想通貨での出金が可能です。一部、電子ウォレットや銀行送金、カード（Visa、MasterCard）などにも対応しています。CasinoTsuは、これらの出金方法の正確性を確認いたしました。",
    },
  ],
  cta: {
    text: "今すぐプレイ！",
    href: "https://go.casinotsu.com/go/respin:respin?referrer_path=%2Freviews%2Frespin",
  },
};