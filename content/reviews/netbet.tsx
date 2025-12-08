import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewNetBet: ReviewPageContent = {
  hero: {
    title: "NetBetカジノ（ネットベット）オンラインカジノレビュー！",
    subheading: "【サービス終了】最大$500ウェルカムボーナス",
    description: "NetBet／ネットベットは、2023年7月4日をもって日本市場を撤退しました。これにより、CasinoTsuからの限定登録ボーナスのご提供や新規登録も終了いたします。このレビューは過去の情報としてご参照ください。",
    score: 4.2,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 85,
        note: "世界的にも有名で、日本マーケットでも広く知られていました。キャンペーンの豊富さが人気でした。",
      },
      {
        label: "規約",
        percent: 79,
        note: "ボーナスは充実していましたが、出金条件が40倍と少し高めでした。",
      },
      {
        label: "操作性",
        percent: 79,
        note: "フィルターやデスクトップ画面が少し扱いづらい印象。決済方法は馴染みのものが揃っていました。",
      },
      {
        label: "サポート",
        percent: 77,
        note: "ネイティブの日本語サポートがありましたが、繋がりにくい時が多々ありました。",
      },
    ],
    highlights: [
      "毎日毎月の豊富なキャンペーンが提供されていた",
      "スポーツブックや宝くじゲームなども充実していた",
      "プレイヤーズクラブでポイントを貯めることができた",
    ],
    watchouts: [
      "2023年7月4日に日本市場から撤退",
      "ボーナス規約が複雑で上級者向けとの評判",
      "日本に特化したキャンペーンは少なめだった",
    ],
  },
  payments: {
    featured: [
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "人気",
        note: "主要なクレジットカードに対応",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://casinotsu.com/payment/payz",
        badge: "Eウォレット",
        note: "スピーディーな入出金で定番",
      },
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "安心",
        note: "直接銀行口座へ入出金可能",
      },
      {
        name: "MuchBetter",
        icon: "/assets/payments/muchbetter.svg",
        href: "https://casinotsu.com/payment/muchbetter",
        badge: "アプリ決済",
        note: "スマートフォンでの利用に便利",
      },
    ],
    deposits: [
      { name: "VISA", icon: "/assets/payments/visa.svg" },
      { name: "MasterCard", icon: "/assets/payments/mastercard.svg" },
      { name: "JCB", icon: "/assets/payments/jcb.svg" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "Venus Point", icon: "/assets/payments/venus-point.svg" },
      { name: "iWallet" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg", href: "https://casinotsu.com/payment/muchbetter" },
      { name: "Bank Transfer", icon: "/assets/payments/bank-transfer.svg" },
      { name: "PayPal" },
      { name: "Google Pay" },
      { name: "Apple Pay" },
      { name: "Bitcoin" },
    ],
    withdrawals: [
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "Venus Point", icon: "/assets/payments/venus-point.svg" },
      { name: "iWallet" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg", href: "https://casinotsu.com/payment/muchbetter" },
      { name: "Bank Transfer", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Trustly" },
      { name: "Bitcoin" },
    ],
    notes: [
      "最低入出金額は$10。最高月間出金額はEUR 100,000。",
      "$500を超える出金には1.5%の手数料がかかる場合がありました。出金処理時間は電子ウォレットで24時間以内、カードで3～5営業日が目安でした。",
    ],
  },
  bonuses: {
    overview:
      "⚠️NetBetは日本市場から撤退したため、現在全てのボーナス・キャンペーンは利用できません。以下の情報はサービス終了前の参考情報です。NetBetは毎月・日替わりで豊富なキャンペーンを提供していましたが、ボーナス規約が複雑という評判もありました。",
    noDeposit:
      "【停止中】過去にはCasinoTsu限定で、NetEnt社のスロットで使える200回の入金不要フリースピンが提供されていました。賭け条件は10倍でした。",
    extraSpins: {
      summary:
        "【停止中】過去には期間限定で、初回入金額に応じて人気スロット『Moon Princess』のフリースピン（最大100回）がもらえるキャンペーンがありました。",
      schedule: [
        "$10以上$30未満の入金で20回",
        "$30以上$50未満の入金で50回",
        "$50以上の入金で100回",
      ],
      warning: "この特別キャンペーンの賭け条件は1倍と非常に緩やかでした。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "$200", code: "YOKOSOJP1" },
      { depositNumber: "2回目", percent: "50%", cap: "$200", code: "プロモページで取得" },
      { depositNumber: "3回目", percent: "50%", cap: "$100", code: "プロモページで取得" },
    ],
    conditions: [
      "ウェルカムボーナスの出金条件は40倍でした。",
      "スロットの賭け条件消化率は通常100%ですが、一部のスロットは80%以下、または0%に設定されていました。",
      "ルーレット、カードゲーム、バーチャルスポーツなどは賭け条件消化率が0%でした。",
    ],
    prohibitedGames: [
      "Amatic – Fire & Ice",
      "Quickfire – Avalon, Gung Pow, Karaoke Party, River of Riches, Thunderstruck",
      "Tom Horn – Bruce Lee",
      "NextGen – King Kong, Starmania",
      "NetEnt – Blood Suckers, Geisha Wonders, Jack Hammer 2, Flowers Christmas Edition, Kings of Chicago",
      "Microgaming – Beautiful Bones",
      "Amaya – Jenga",
      "iSoftBet – 25x Deuces Poker, 100XPlay, Poker Pursuit",
      "全てのルーレットゲーム",
      "ほとんどのカードゲーム",
      "全てのバーチャルスポーツ",
    ],
  },
  offers: [
    {
      title: "月間・日替わりプロモーション",
      description: "NetBetでは毎月、ミッション達成型のキャンペーンや、日替わりでフリースピンや入金ボーナスがもらえるオファーが豊富に用意されていました。",
      highlight: "遊び心のあるキャンペーンが毎日楽しめた",
    },
    {
      title: "プレイヤーズクラブ",
      description: "リアルマネーでプレイすると自動的にポイントが貯まるロイヤリティプログラム。ブロンズからエリートまで7段階のレベルがあり、レベルが上がると特典が増え、ポイントも早く貯まる仕組みでした。",
      highlight: "貯まったポイントはクラブショップで景品と交換可能",
    },
  ],
  facts: [
    { label: "名称", value: "NetBet" },
    {
      label: "ローンチ",
      value: "2014年（日本市場）",
    },
    { label: "運営会社", value: "NetBet Enterprises Ltd" },
    { label: "ライセンス", value: "Malta Gaming Authority(MGA)" },
    { label: "VIPプログラム", value: "❌ （プレイヤーズクラブというロイヤリティ制度有り）" },
    {
      label: "対応言語",
      value: "日本語、英語、ドイツ語、スペイン語、ギリシャ語、ルーマニア語、ポルトガル語など多数",
    },
    { label: "対応通貨", value: "USD, EUR, CAD, GBP, CHF, RONなど" },
    {
      label: "ゲームタイプ",
      value:
        "バカラ、ブラックジャック、クラップス、ゲームショー、ライブカジノ、ポーカー、ルーレット、スロット、スポーツベット、宝くじ",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/betsoft">BetSoft</Link>, <Link href="https://casinotsu.com/providers/blueprint-gaming">Blueprint Gaming</Link>, <Link href="https://casinotsu.com/providers/elk-studios">Elk Studios</Link>, <Link href="https://casinotsu.com/providers/microgaming">Microgaming</Link>, <Link href="https://casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://casinotsu.com/providers/playson">Playson</Link>, <Link href="https://casinotsu.com/providers/playtech">Playtech</Link>, <Link href="https://casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/quickspin">Quickspin</Link>, <Link href="https://casinotsu.com/providers/red-tiger">Red Tiger</Link>, <Link href="https://casinotsu.com/providers/relax-gaming">Relax</Link>, Slingshot Studios, <Link href="https://casinotsu.com/providers/thunderkick">Thunderkick</Link>, <Link href="https://casinotsu.com/providers/yggdrasil">Yggdrasil</Link>
        </span>
      ),
    },
    { label: "最小入金額", value: "$10" },
    { label: "最小出金額", value: "$10" },
    { label: "電話サポート", value: "✅ (英語対応)" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support.jp@netbet.com">support.jp@netbet.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (日本時間17:00～24:00)" },
  ],
  intro: {
    paragraphs: [
      "⚠️重要：NetBetは2023年7月4日をもって日本市場から撤退しました。本レビューは過去のサービス内容に関する情報として掲載しています。",
      "NetBetは2001年に『Casino 770』として設立され、2013年にリブランドした老舗オンラインカジノです。日本市場には2014年から参入し、カジノゲームからスポーツベット、宝くじまで幅広いゲームを提供し人気を博しました。",
      "世界中に200万人以上のプレイヤーを持つ大手ブランドであり、信頼性の高いマルタ（MGA）ライセンスを保有していました。",
    ],
    ctas: [
      { text: "👉 おすすめの代替カジノを探す", href: "https://www.japanesecasino.com/reviews" },
    ],
  },
  games: [
    "NetBetは450から2,000タイトルに及ぶ豊富なゲームを提供していました。350種類以上のスロットに加え、EvolutionとPragmatic Play社のライブカジノ（日本語テーブル有）、本格的なスポーツブック、世界各国の宝くじ、専用のポーカールームまで、非常に多岐にわたるエンターテイメントが揃っていました。",
    "90社以上のゲームプロバイダーと提携し、常に最新かつ多様なゲーム体験をプレイヤーに届けていました。",
  ],
  features: [
    "NetBetの最大の特徴は、カジノ、ライブカジノ、スポーツ、宝くじ、ポーカーといった多様なギャンブルを一つのアカウントで楽しめる総合力でした。",
    "「プレイヤーズクラブ」というロイヤリティプログラムも充実しており、プレイすればするほどポイントが貯まり、様々な特典と交換できる楽しみがありました。",
  ],
  editorial: {
    author: "CasinoTsu編集部",
    profileHref: "/reviews",
    hook: "豊富なキャンペーンと総合的なゲーム提供が魅力でしたが、規約の複雑さが上級者向けと言われた老舗カジノ。",
    theGoodStuff: "カジノゲームからスポーツベットまで網羅するゲームの多様性と、毎日・毎月開催される豊富なプロモーションは大きな魅力でした。ロイヤリティ制度もプレイヤーを楽しませる要素でした。",
    theHeadsUp: "一方で、ボーナス規約が非常に複雑で、賭け条件の消化率なども細かく設定されていたため、初心者には少し難しい側面がありました。そして何より、現在は日本市場から撤退しているため利用できません。",
    finalThought: "NetBetは多くの日本人プレイヤーに親しまれた優良なカジノでしたが、残念ながらその歴史に幕を閉じました。同様の総合的な体験を提供する他のカジノを探すことをお勧めします。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "NetBetは、2001年設立という長い歴史を持つオンラインカジノ業界の重鎮の一つでした。2014年に日本市場に参入して以降、その信頼性と多角的なゲーム提供で多くのプレイヤーに支持されてきました。特に、マルタ（MGA）や英国賭博委員会（UKGC）など、業界で最も厳しいとされる複数のライセンスを保持していた点は、その安全性を裏付けるものでした。",
      "ゲームのラインナップはNetBetの大きな強みであり、数千ものスロットやテーブルゲームはもちろん、ライブカジノ、本格的なスポーツブック、さらには宝くじや専用のポーカークライアントまで提供する総合エンターテイメントサイトとして確立していました。これにより、プレイヤーは気分に合わせて様々なギャンブルを一つのプラットフォームで楽しむことができました。",
      "プロモーションの豊富さも特筆すべき点で、日替わりや月間のオファーが絶えず提供され、プレイヤーを飽きさせない工夫が凝らされていました。しかし、その一方でユーザーからはボーナス規約が「全カジノの中で一番むずい」と評されるほど複雑で、出金条件40倍という設定と合わせ、初心者にはややハードルが高い側面もありました。",
      "日本語サポートは提供されていたものの、ライブチャットが繋がりにくいという課題も抱えていました。そして、2023年7月4日、NetBetは日本市場からの撤退を決定。長年親しんだプレイヤーにとっては残念なお知らせとなりましたが、その歴史と信頼性は、オンラインカジノ業界の一つの指標として記憶されるでしょう。",
    ],
  },
  security: [
    "マルタゲーミングオーソリティ（MGA）をはじめ、英国賭博委員会（UKGC）など複数の信頼性の高いライセンスを保有",
    "最新のSSL暗号化技術を採用し、プレイヤーの個人情報と資金を保護",
    "iTech Labsなどの第三者監査機関による定期的な監査で、ゲームの公平性（RNG）を保証",
    "国際賭博・賭博問題協会（IBIA）や国際賭博裁定サービス（IBAS）のメンバー",
  ],
  responsiblePlay: [
    "入金限度額設定",
    "賭け金限度額設定",
    "損失限度額設定",
    "セッション時間制限",
    "自己除外（セルフエクスクルージョン）",
    "クールダウン期間（タイムアウト）",
    "自己評価テスト",
    "出金ロック機能",
    "リアリティチェック",
  ],
  complaintStats: [
    "特になし",
  ],
  awards: [
    "特になし",
  ],
  restrictedCountries: [
    "日本（2023年7月4日以降）",
  ],
  userConcerns: [
    "ボーナス規約の複雑さ: 「過去一複雑」「上級者向け」との口コミが多数あった。",
    "サポートの応答性: ライブチャットが繋がりにくい場合があるとの報告があった。",
    "サイトの操作性: 一部のフィルターや画面設計が使いにくいという意見があった。",
  ],
  summary: [
    "NetBetは、カジノ、スポーツ、ポーカーなどを網羅する総合的なゲーム体験と、豊富なキャンペーンが魅力の信頼性の高いオンラインカジノでした。",
    "プレイヤーズクラブなどのロイヤリティ制度も充実していましたが、ボーナス規約の複雑さや操作性には改善の余地がありました。",
    "最も重要な点として、NetBetは2023年7月4日に日本市場から撤退したため、現在、日本からの新規登録およびプレイはできません。",
    "過去にNetBetを楽しんでいたプレイヤーは、他の優良なオンラインカジノを探す必要があります。",
  ],
  extraLinks: [
    { text: "🔰 ウェルカムボーナスとは？基本を解説", href: "https://casinotsu.com/bonuses/welcome-bonus" },
    { text: "✅ 責任あるプレイについて", href: "https://casinotsu.com/info/responsible-gambling" },
  ],
  faq: [
    {
      question: "NetBetは現在、日本からプレイできますか？",
      answer: "いいえ、できません。NetBetは2023年7月4日をもって日本市場から撤退したため、日本からの新規登録およびサービスの利用はできません。",
    },
    {
      question: "NetBetはどのようなカジノでしたか？",
      answer: "スロット、ライブカジノ、スポーツベット、宝くじ、ポーカーまで幅広く提供する総合オンラインカジノでした。特にキャンペーンの豊富さと、MGAライセンスを持つ高い信頼性が特徴でした。",
    },
    {
      question: "NetBetのウェルカムボーナスはどのような内容でしたか？",
      answer: "最大で合計$500（初回$200、2回目$200、3回目$100）の3回にわたる入金ボーナスが提供されていました。賭け条件は40倍でした。",
    },
  ],
  cta: {
    text: "CasinoTsuおすすめの最新カジノレビューを見る",
    href: "https://www.japanesecasino.com/reviews",
  },
};