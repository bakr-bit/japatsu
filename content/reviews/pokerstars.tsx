import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewPokerStars: ReviewPageContent = {
  hero: {
    title: "ポーカースターズ（PokerStars）レビュー",
    subheading: "最大$600の初回入金ボーナス",
    description: "言わずと知れた、オンラインポーカー界のリーダー、ポーカースターズ！ 卓越したポーカー体験はもちろん、スロットやライブカジノ、さらにはスポーツブックまで、多彩なゲームがあなたを待っています。",
    score: 4.0,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 81,
        note: "オンラインポーカー、カジノ、スポーツベットを網羅する業界のリーダー。ポーカーを始めるなら最初の選択肢。",
      },
      {
        label: "規約",
        percent: 78,
        note: "ウェルカムボーナスはポイントを貯めてリリースするユニークな形式で、プレイヤーにとって魅力的。",
      },
      {
        label: "操作性",
        percent: 84,
        note: "デスクトップ版は洗練されているが、モバイル版は機能が限定的。決済方法も限られるためPC利用を推奨。",
      },
      {
        label: "サポート",
        percent: 64,
        note: "日本人サポートはなく、メールでの問い合わせも回答に時間がかかる場合がある。",
      },
    ],
    highlights: [
      "世界最大規模を誇るオンラインポーカーサイト",
      "圧倒的なゲーム数とトーナメントの開催数",
      "信頼性の高いMGAライセンスを取得",
      "ポーカー以外のカジノゲームやスポーツベットも充実",
    ],
    watchouts: [
      "日本語によるカスタマーサポートの不在",
      "仮想通貨決済に非対応",
      "モバイル版では一部機能が制限される",
      "ボーナスの受け取り方が特殊",
    ],
    avatarSrc: "/assets/casino/pokerstars-poker.png",
    avatarAlt: "Pokerstarsのロゴ",
  },
  payments: {
    featured: [
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "即時反映",
        note: "クレジット/デビットどちらも対応",
      },
      {
        name: "Mastercard",
        icon: "/assets/payments/mastercard.svg",
        href: "https://casinotsu.com/payment/mastercard",
        badge: "人気",
        note: "利用者の多い定番ブランド",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://casinotsu.com/payment/payz",
        badge: "Eウォレット",
        note: "スピーディーな入出金と日本語UI",
      },
      {
        name: "MuchBetter",
        icon: "/assets/payments/muchbetter.svg",
        href: "https://casinotsu.com/payment/muchbetter",
        badge: "Eウォレット",
        note: "アプリで完結する便利な決済",
      },
    ],
    deposits: [
        { name: "VISA", icon: "/assets/payments/visa.svg", href: "https://casinotsu.com/payment/visa" },
        { name: "MasterCard", icon: "/assets/payments/mastercard.svg", href: "https://casinotsu.com/payment/mastercard" },
        { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
        { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg", href: "https://casinotsu.com/payment/muchbetter" },
        { name: "AstroPay", href: "https://casinotsu.com/payment/astropay" },
        { name: "WebMoney" },
        { name: "PayPal" },
        { name: "Skrill" },
        { name: "インスタント銀行送金" },
        { name: "PokerStars Play+" },
    ],
    withdrawals: [
        { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
        { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg", href: "https://casinotsu.com/payment/muchbetter" },
        { name: "WebMoney" },
        { name: "PayPal" },
        { name: "Skrill" },
        { name: "インスタント銀行送金" },
        { name: "PokerStars Play+" },
    ],
    notes: [
      "主要な電子ウォレットとクレジットカードに対応。最低入金額は$10。仮想通貨には非対応です。",
      "出金手数料は無料。出金は入金と同じ方法で行う必要があります。クレジットカード入金の場合、出金には別の決済方法での入金履歴が必要です。",
      "「クイック入金機能」を使えば、テーブルから直接入金が可能です（デスクトップ版のみ）。",
    ],
  },
  bonuses: {
    overview:
      "ポーカースターズのウェルカムボーナスは、入金後すぐに全額が付与されるのではなく、ポーカーをプレイしてポイントを貯めることで、段階的にボーナスがアカウントにリリースされていくユニークな仕組みです。",
    noDeposit:
      "現在、入金不要ボーナスは提供されていません。代わりに、リアルマネーを使わずに練習できる「プレイマネー」が用意されています。",
    extraSpins: {
      summary:
        "フリースピンボーナスはありませんが、代替のウェルカムボーナスとして$30のフリープレイが選択可能です。",
      schedule: [],
      warning: "",
    },
    welcomeRows: [
      { depositNumber: "初回〜3回目", percent: "100%", cap: "$600", code: "STARS600" },
    ],
    conditions: [
      "ボーナスコード【STARS600】を使用して入金後、ポーカーをプレイしてポイントを獲得。",
      "1ドルのレーキまたはトーナメント料金につき5ポイントが付与されます。",
      "75ポイントを獲得するごとに、$5がアカウントに入金されます。",
      "各入金日から4ヶ月（120日）以内にポイントを獲得する必要があります。",
      "ポイント対象期間中に出金を行うと、それ以降の入金はボーナス対象外となります。",
      "一部のハイステークスゲームではポイントを獲得できません。",
    ],
    prohibitedGames: [
        "ポットリミットおよびノーリミットテーブルのブラインド $5/$10以上",
        "8Table Gameの $20/$40以上",
        "その他のリミットゲームの $20/$40以上",
    ],
  },
  offers: [
    {
      title: "代替ウェルカムボーナス：$30フリープレイ",
      description: "ボーナスコード【FREE30】または【THIRTY】を使い、$20以上を入金すると、$20のキャッシュボーナス、$10分のSpin & Goチケット、$5,000デポジターフリーロールチケット、100万プレイマネーチップがもらえます。",
      highlight: "少額の入金で多様な特典を受け取れる初心者向けオファー",
    },
    {
      title: "VIPプログラム（スターズリワード）",
      description: "リアルマネーでのプレイを通じてポイントを貯め、プログレスバーを完了させるとリワードボックスが授与されます。ボックスにはストアで使えるスターズコインなどが含まれています。リワードは6段階あり、レベルが上がると特典も豪華になります。",
    },
    {
      title: "Elite Program（ハイローラー向け）",
      description: "年間レーキ額が多いプレイヤー向けの上級プログラム。PokerStars Select（年間レーキ$50k以上）では日次50%レーキバック、PokerStars Select+（年間レーキ$100k以上）では最大60%の日次レーキバックが提供されます。",
    },
  ],
  facts: [
    { label: "名称", value: "PokerStars Poker" },
    { label: "ローンチ", value: "2001" },
    { label: "運営会社", value: "Flutter Entertainment plc" },
    { label: "ライセンス", value: "Malta Gaming Authority (MGA)" },
    { label: "VIPプログラム", value: "✅" },
    { label: "対応言語", value: "日本語、英語ほか多数" },
    { label: "対応通貨", value: "USD, EUR, GBP, CADなど" },
    {
      label: "ゲームタイプ",
      value:
        "ポーカー, バカラ, ブラックジャック, クラップス, ゲームショー, ライブカジノ, スロット, スポーツベット",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          独自開発ゲーム多数, <Link href="https://casinotsu.com/providers/evolution">Evolution</Link>, <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/playtech">Playtech</Link>, NetEnt, NextGen
        </span>
      ),
    },
    { label: "最小入金額", value: "$10" },
    { label: "最小出金額", value: "$10 (決済方法による)" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: "サイト内のお問い合わせフォーム" },
    { label: "ライブチャット", value: "✅" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "CasinoTsuへようこそ！ オンラインポーカーの世界で「ポーカースターズ」を知らない方はいないでしょう。長年の歴史を持つ、まさにオンラインポーカーサイトの代名詞とも言える存在です🌟",
      "2001年の設立以来、ポーカースターズは着実に成長を続け、現在では業界をリードする地位を確立しています。",
      "世界各地で開催される権威あるチャンピオンシップやポーカーイベントの主催者としてもその名を知られています。",
      "パソコンだけでなく、iPhone、iPad、iPod Touch、Android端末でも快適にプレイできます。ポーカースターズのアプリは、パソコン版のソフトウェアと同等の機能を提供しています。",
    ],
    ctas: [
      { text: "👉 ポーカースターズへの登録はこちらから！", href: "https://go.japanesecasino.com/go/pokerstars-poker" },
      { text: "😎テキサスホールデムの基本をマスターしよう", href: "https://www.casinotsu.com/poker/texas-hold-em" },
    ],
  },
  games: [
    "ポーカースターズの最大の魅力は、プレイヤー同士が対戦するオンラインポーカーです。テキサスホールデム、オマハ、スタッドなど多種多様なポーカーゲームが揃っており、初心者からプロまで満足できる幅広いステーク（賭け金）が用意されています。",
    "Sunday MillionやWCOOPなど、業界最大規模のトーナメントを数多く開催していることでも有名です。",
    "ポーカー以外にも、独占タイトルが豊富なスロット、大手プロバイダーと提携したライブカジノ、さらにはスポーツベットまで、一つのアカウントで幅広いギャンブルを楽しめます。",
  ],
  features: [
    "iOSおよびAndroid向けの専用モバイルアプリが用意されており、外出先でも本格的なポーカーが楽しめます。",
    "リアルマネーを使わずに練習できる「プレイマネー」機能があり、初心者でも安心してポーカーのルールを学べます。",
    "「Run It Twice」や「All-In Cashout」など、ポーカーのゲーム体験を向上させる独自の機能が搭載されています。また、各種HUDツールの利用にも対応しています。",
  ],
  editorial: {
    author: "CasinoTsu編集部",
    profileHref: "#",
    hook: "ポーカーの王者が提供する総合ギャンブル体験。しかし、その強みは日本人プレイヤーにとって最適か？",
    theGoodStuff: "ポーカープラットフォームとしての完成度は他の追随を許しません。圧倒的なプレイヤー数、豊富なゲームとトーナメント、信頼性の高いソフトウェアは、ポーカーファンにとって最高の環境です。独占スロットやスポーツベットも楽しめる点も高評価です。",
    theHeadsUp: "最大の懸念点は日本語サポートの不在です。トラブル時に英語でのコミュニケーションが必要になる点は大きなハードルです。また、決済方法が限られており、特に仮想通貨に非対応なのは時代の流れに逆行している感があります。",
    finalThought: "ポーカーを本気でプレイしたいなら、ポーカースターズは間違いなく第一候補です。ただし、サポート面での不安を考慮すると、カジノゲームやスポーツベットが主目的なら、より日本人向けのサービスが充実したサイトを検討する価値はあるでしょう。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "2001年の設立以来、ポーカースターズはオンラインポーカーの代名詞として業界を牽引してきました。その信頼性は、審査の厳しいマルタ（MGA）ライセンスや、独立監査機関GLIによる認定が証明しています。運営母体であるFlutter Entertainment plcは世界的な大手企業であり、安心してプレイできる基盤が整っています。",
      "ゲーム体験の中核はもちろんポーカーです。世界中のプレイヤーと24時間いつでも対戦可能で、初心者向けの低レートからプロが競う高レートまで、あらゆるレベルのプレイヤーが集います。ソフトウェアの安定性と機能性は業界最高水準で、WCOOPなどの大規模トーナメントは他のサイトでは味わえない興奮を提供します。",
      "ボーナスシステムはユニークで、プレイ量に応じて報酬が解除されるため、アクティブなプレイヤーほど恩恵を受けられます。最大$600のウェルカムボーナスは、実質約28%のレーキバックに相当し、長期的にプレイする上で大きなアドバンテージとなります。",
      "一方で、日本人プレイヤーにとってはいくつかの課題も存在します。最も大きいのは日本語サポートがない点で、問題解決には英語でのやり取りが必須です。また、決済手段は主要なEウォレットやカードに限られ、銀行送金や仮想通貨が使えないのは不便に感じるかもしれません。",
      "総じて、ポーカースターズは「ポーカーをプレイするための最高の場所」であることは間違いありません。ポーカーに軸足を置きつつ、時々カジノゲームやスポーツベットも楽しみたいという方には最適なプラットフォームです。しかし、手厚い日本語サポートや多様な決済方法を重視する方は、他のカジノも併せて検討することをお勧めします。",
    ],
  },
  security: [
    "マルタ政府発行のMGAライセンスを取得",
    "イギリス、アメリカ（一部州）など、世界各国の規制当局からライセンスを取得",
    "独立した監査機関であるGLI（Gaming Laboratories International）による監査",
    "量子理論に基づきGLIによって認定されたRNG（乱数生成器）を使用し、ゲームの公平性を保証",
  ],
  responsiblePlay: [
    "入金制限: プレイヤー自身で上限を設定可能",
    "プレイ時間制限: プレイヤー自身で設定可能",
    "その他、サイト内の「責任と分別あるゲーミング」セクションで様々な自己規制ツールを利用可能",
    "サポートに連絡することなく、プレイヤー自身で各種制限を設定できるため、管理が容易",
  ],
  complaintStats: [
      "特になし",
  ],
  awards: [
    "2023年11月 EGRアワードにて『ポーカーオペレーターオブザイヤー』を受賞（過去10年間で6度目）",
  ],
  restrictedCountries: [
      "（特定の制限国リストは提供されていませんが、多くの国で正規ライセンスを取得し運営されています）",
  ],
  userConcerns: [
    "カスタマーサポートが英語対応のみ",
    "メールの返信に時間がかかる場合がある",
    "利用可能な決済方法が限られている（特に仮想通貨非対応）",
    "モバイルアプリはデスクトップ版に比べて機能が一部制限される",
  ],
  summary: [
    "プレイヤー対プレイヤーの本格的なポーカーが楽しめるポーカースターズは、プロを目指す方にも趣味で楽しみたい方にも最適なプラットフォームです。",
    "オンラインポーカーだけでなく、豊富なカジノゲームやスポーツブックも提供しており、独占スロットや独占ライブカジノも魅力の一つです。",
    "日本語サポートがないなどの課題はありますが、それを補って余りあるポーカー体験が待っています。ポーカーファンはもちろん、総合的なギャンブルサイトを探している方にも必見のオンラインカジノです。",
  ],
  extraLinks: [
    { text: "🏆 オンラインカジノの受賞歴をチェック", href: "https://www.casinotsu.com/most-awards" },
    { text: "🎥 ポーカー好き必見！ベストポーカー映画10選", href: "https://www.casinotsu.com/info/poker-movies" },
  ],
  faq: [
    {
      question: "ポーカースターズに日本語サポートはありますか？",
      answer: "いいえ、残念ながら現時点では日本語サポートは提供されていません。サポートへの問い合わせは英語で行う必要があります。",
    },
    {
      question: "ポーカースターズはスマートフォンでもプレイできますか？",
      answer: "はい、プレイ可能です。iOSおよびAndroid向けの専用アプリが提供されており、公式サイトからダウンロードできます。",
    },
    {
      question: "ポーカースターズで使える便利な機能はありますか？",
      answer: "はい。「Run It Twice」（オールイン時に残りのカードを2回配る）や「All-In Cashout」（ポットエクイティに基づきキャッシュアウトする）などの独自機能があります。また、PokerTrackerなどのHUDツールにも対応しています。",
    },
    {
      question: "アメリカ国内からでもプレイできますか？",
      answer: "はい。ミシガン州、ニュージャージー州、ペンシルベニア州ではリアルマネーでのプレイが可能です。その他の州では無料プレイ版が利用できます。",
    },
    {
      question: "ポーカー以外のボーナスはありますか？",
      answer: "はい、カジノゲーム専用のボーナスも提供されています。内容は時期によって異なりますが、最大$1,500～$2,500の入金ボーナスなどが用意されることがあります。",
    },
  ],
  cta: {
    text: "今すぐポーカースターズでプレイ！",
    href: "https://go.japanesecasino.com/go/pokerstars-poker:pokerstars?referrer_path=%2Freviews%2Fpokerstars",
  },
};