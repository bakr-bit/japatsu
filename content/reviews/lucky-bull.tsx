import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewLuckyBull: ReviewPageContent = {
  hero: {
    title: "ラッキーブル（Lucky Bull）カジノレビュー",
    subheading: "$29入金不要ボーナス + 最大$917ウェルカムボーナス",
    description: "キャラクターと一緒にクエストを進めるユニークな体験が魅力のラッキーブルカジノ。豊富なキャンペーンやブックメーカーも完備していますが、利用規約や外部の評判には注意が必要です。",
    score: 3.9,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 75,
        note: "日本向けのトーナメントなど、豊富なキャンペーンで知名度を上げており、今後の成長が期待される。",
      },
      {
        label: "規約",
        percent: 74,
        note: "賭け条件は60倍（入金不要）や30倍（入金）と厳しめだが、途中で出金できる「買取オプション」はユニーク。",
      },
      {
        label: "操作性",
        percent: 77,
        note: "どのデバイスでも見やすいレスポンシブデザイン。ただしライブチャットが別タブで開く点はやや不便。",
      },
      {
        label: "サポート",
        percent: 84,
        note: "夕方から深夜にかけて日本語ネイティブによる丁寧なサポートが受けられる。土日祝も対応。",
      },
    ],
    highlights: [
      "クエストを攻略していくRPG風プログラム「ベットルバース」",
      "賭け条件を途中で放棄して出金できる「買取オプション」",
      "豊富な日替わりキャンペーンやトーナメント",
      "カジノゲームとスポーツベットの両方が楽しめる",
    ],
    watchouts: [
      "入金不要ボーナスの賭け条件が60倍と非常に高い",
      "一部のレビューサイトで出金問題によりブラックリストに掲載された過去がある",
      "日本語ライブチャットの対応時間が夕方〜深夜の8時間と限定的",
      "公式なVIPプログラムが現時点でない",
    ],
    avatarSrc: "/assets/casino/lucky-bull.png",
    avatarAlt: "Lucky bullのロゴ",
  },
  payments: {
    featured: [
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://www.japanesecasino.com/payment/payz",
        badge: "Eウォレット",
        note: "多くのカジノで採用されている定番Eウォレット",
      },
      {
        name: "MuchBetter",
        icon: "/assets/payments/muchbetter.svg",
        href: "https://www.japanesecasino.com/payment/muchbetter",
        badge: "アプリ決済",
        note: "スマートフォンでの管理が簡単な決済方法",
      },
      {
        name: "AstroPay",
        icon: "/assets/payments/astropay.svg",
        href: "https://www.japanesecasino.com/payment/astropay",
        badge: "プリペイド",
        note: "手軽に入金できるプリペイド式決済",
      },
      {
        name: "銀行送金",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://www.japanesecasino.com/payment/bank-transfer",
        badge: "出金",
        note: "出金方法として銀行送金に対応",
      },
    ],
    deposits: [
      { name: "AstroPay", icon: "/assets/payments/astropay.svg" },
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "eVoucher" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg" },
      { name: "Venus Point", icon: "/assets/payments/venus-point.svg" },
      { name: "Visa", icon: "/assets/payments/visa.svg" },
      { name: "Mastercard", icon: "/assets/payments/mastercard.svg" },
      { name: "Maestro" },
      { name: "Neteller" },
      { name: "Skrill" },
      { name: "MiFinity" },
      { name: "Jeton" },
      { name: "Bitcoin Cash" },
      { name: "Ethereum" },
      { name: "iDebit" },
      { name: "Instadebit" },
      { name: "Interac" },
      { name: "Paysafecard" },
      { name: "Trustly" },
      { name: "Apple Pay" },
      { name: "銀行送金", icon: "/assets/payments/bank-transfer.svg" },
    ],
    withdrawals: [
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "Venus Point", icon: "/assets/payments/venus-point.svg" },
      { name: "銀行送金", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Visa", icon: "/assets/payments/visa.svg" },
      { name: "Mastercard", icon: "/assets/payments/mastercard.svg" },
      { name: "Neteller" },
      { name: "Skrill" },
      { name: "MiFinity" },
      { name: "Jeton" },
      { name: "Bitcoin Cash" },
      { name: "Ethereum" },
      { name: "iDebit" },
      { name: "Instadebit" },
      { name: "Interac" },
      { name: "Trustly" },
      { name: "Apple Pay" },
    ],
    notes: [
      "月間の出金上限額は€5,000と定められています。",
      "決済の基準通貨はユーロ（EUR）のため、日本円や米ドルでの利用時は為替レートの変動にご注意ください。",
      "E-Walletでの出金は通常0-24時間、銀行送金やカードは3-5営業日かかります。",
    ],
  },
  bonuses: {
    overview:
      "ラッキーブルは、$29の選べる入金不要ボーナスと、最大$888の初回入金ボーナスを提供しています。賭け条件は高めですが、条件達成前に出金できるユニークな「買取オプション」が特徴です。さらに、RPG要素を取り入れたクエストプログラム「ベットルバース」も楽しめます。",
    noDeposit:
      "新規登録後、カジノまたはブックメーカーで使える$29の入金不要ボーナスが自動的に付与されます。賭け条件は60倍、最大出金額は$100と厳しい条件ですが、無料でサイトを試す良い機会になります。ボーナスは付与後24時間有効です。",
    extraSpins: {
      summary: "ウェルカムボーナスにフリースピンは含まれていませんが、「トリッキーチューズデー」などの日替わりプロモーションで頻繁に提供されています。",
      schedule: [],
      warning: "",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "$888", code: "不要" },
    ],
    conditions: [
      "初回入金ボーナスの賭け条件は（入金額＋ボーナス額）の30倍です。",
      "ボーナス有効期間は30日間です。",
      "ボーナス利用中の最大ベット額は、初回残高の30％または€8のいずれか低い方です。",
      "【出金条件の買取オプション】: 賭け条件の20%をクリアした時点で、サポートに連絡してボーナスを放棄し、リアルマネー残高を出金することが可能です。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "ベットルバース (Bettleverse)",
      description: "4人のキャラクターから1人を選び、固有のストーリーとチャレンジを進めていくクエスト型プログラム。ミッションをクリアするか、入金で貯まる『ハイパードライブ』を使って進行し、報酬を獲得できます。",
      highlight: "RPGのようにカジノを楽しめるユニークなシステム",
    },
    {
      title: "日替わりプロモーション",
      description: "「ビッグマンデー」「トリッキーチューズデー」など、曜日ごとにリロードボーナスやフリースピンがもらえるキャンペーンが毎日開催されています。",
      highlight: "毎日ログインする楽しみがある豊富なオファー",
    },
    {
      title: "ブックメーカー専用ボーナス",
      description: "スポーツベット専用の初回入金ボーナスも用意されており、最大$100〜$120の100%ボーナスが利用できます。",
      highlight: "カジノとは別にスポーツ用のボーナスがある",
    },
  ],
  facts: [
    { label: "名称", value: "Lucky Bull (ラッキーブル)" },
    { label: "ローンチ", value: "2021年" },
    { label: "運営会社", value: "Condor Malta Ltd" },
    { label: "ライセンス", value: "Malta Gaming Authority (MGA/B2C/340/2016)" },
    { label: "VIPプログラム", value: "❌" },
    {
      label: "対応言語",
      value: "日本語、英語など",
    },
    {
      label: "対応通貨",
      value: "JPY, USD, EUR, CAD, NZD, INR, NOK, RUB, ZAR",
    },
    {
      label: "ゲームタイプ",
      value: "バカラ, ブラックジャック, クラップス, ゲームショー, ライブカジノ, ポーカー, ルーレット, スロット, スポーツベット, ビデオポーカー, ビンゴ, スクラッチカード",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://www.japanesecasino.com/providers/betsoft">BetSoft</Link>, <Link href="https://www.japanesecasino.com/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="https://www.japanesecasino.com/providers/elk-studios">Elk Studios</Link>, <Link href="https://www.japanesecasino.com/providers/golden-hero-games">Golden Hero</Link>, <Link href="https://www.japanesecasino.com/providers/microgaming">Microgaming</Link>, <Link href="https://www.japanesecasino.com/providers/netent">NetEnt</Link>, <Link href="https://www.japanesecasino.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://www.japanesecasino.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://www.japanesecasino.com/providers/quickspin">Quickspin</Link>, <Link href="https://www.japanesecasino.com/providers/red-tiger">Red Tiger</Link>, <Link href="https://www.japanesecasino.com/providers/relax-gaming">Relax</Link>, <Link href="https://www.japanesecasino.com/providers/thunderkick">Thunderkick</Link>
        </span>
      ),
    },
    { label: "最小入金額", value: "€10" },
    { label: "最小出金額", value: "€20" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@luckybull.com">support@luckybull.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (日本時間 16:00 - 24:00)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "2021年4月に日本市場向けサイトをオープンしたラッキーブル（Lucky Bull）は、ピクサー映画のようなユニークなキャラクター達と共に冒険する、エンターテイメント性の高いオンラインカジノです。",
      "最大の特徴はRPG要素を取り入れたクエスト型プログラム「ベットルバース」。日々のプレイがキャラクターのストーリー進行に繋がり、ゲーム以外の楽しみを提供します。",
      "CasinoTsuでは、このポップでハイテンションなカジノの安全性、ボーナスの詳細、そして外部からの評判まで、プレイヤーが知りたい情報を徹底的に掘り下げていきます。",
    ],
    ctas: [
      { text: "👉 ラッキーブルで今すぐプレイ！", href: "https://go.japanesecasino.com/go/lucky-bull:lucky-bull?referrer_path=%2Freviews%2Flucky-bull" },
    ],
  },
  games: [
    "ラッキーブルは2,500種類以上のスロットゲームを始め、豊富なゲームライブラリを誇ります。EvolutionとPragmatic Playが提供するライブカジノでは、『Crazy Time』などの人気ゲームショーも楽しめます。",
    "最大の魅力の一つは、充実したブックメーカー機能です。主要なスポーツからマイナースポーツまで幅広くカバーしており、カジノウォレットとブックメーカーウォレット間の資金移動も自由に行えます。",
    "日本のプレイヤーに人気の主要プロバイダーは網羅されていますが、ゲームのセレクションはまだ欧米市場に偏っている印象も受けます。",
  ],
  features: [
    "ラッキーブルの最もユニークな機能は「ベットルバース」です。プレイヤーは4人のキャラクターから1人を選び、カジノでのプレイを通じてミッションをクリアし、ストーリーを進めていきます。これにより、単なるギャンブル以上の没入感と目的意識を持ってプレイできます。",
    "もう一つの特筆すべきシステムは「出金条件の買取オプション」です。賭け条件の達成が難しいと感じた場合でも、条件の20%さえクリアしていれば、残りのボーナスを放棄してリアルマネー残高を出金できるため、プレイヤーにとって柔軟な選択肢となります。",
  ],
  editorial: {
    author: "CasinoTsu編集部",
    profileHref: "/authors",
    hook: "ゲーミフィケーションとユニークな規約が光る一方、まだ日本市場に最適化されていない側面も。",
    theGoodStuff: "「ベットルバース」というクエストシステムは、プレイヤーに継続的なプレイの動機を与える素晴らしい試みです。また、賭け条件の「買取オプション」は、高い賭け条件の救済策として非常に画期的と言えます。信頼性の高いMGAライセンスも安心材料です。",
    theHeadsUp: "入金不要ボーナスの60倍という賭け条件は非常に厳しいです。また、ライブチャットの時間が限られている点や、一部の外部レビューサイトで出金問題が指摘されブラックリスト入りした過去がある点は、深刻に受け止めるべき懸念事項です。",
    finalThought: "ラッキーブルは、革新的な機能でプレイヤーを楽しませようという意欲に満ちたカジノです。しかし、その楽しさを享受するには、厳しい規約や外部からのネガティブな評判も理解した上で、慎重にプレイする必要があります。まずは入金不要ボーナスで、自分に合うかどうか試してみるのが良いでしょう。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "CasinoTsuがラッキーブルをレビューする上で注目したのは、その独創的なプレイヤーエンゲージメント戦略です。2021年に日本市場へ参入したこのカジノは、単にゲームを提供するだけでなく、「ベットルバース」というRPG風のクエストシステムを導入することで、プレイヤーに長期的な目標と楽しみを与えています。4人のキャラクターと共にストーリーを進めるというコンセプトは、他のカジノにはない大きな魅力です。",
      "安全性については、取得が最も困難とされるライセンスの一つであるMalta Gaming Authority（MGA）ライセンスを保有している点が、非常に高い信頼性の証となっています。運営会社であるCondor Malta Ltdも2015年から続く実績があり、ゲームの公平性や個人情報の保護体制は確立されていると評価できます。",
      "ボーナス規約は長所と短所が混在しています。入金不要ボーナスの賭け条件60倍は極めて厳しいですが、その一方で、賭け条件の20%をクリアすれば残りを放棄して出金できる「買取オプション」は、プレイヤーにとって画期的な救済措置です。この柔軟性は高く評価できます。",
      "しかし、手放しで推奨できない懸念点も存在します。Trustpilotでは高評価を得ているものの、Chipy.comのような他のレビューサイトでは、過去に出金問題やサポートの不備を理由にブラックリストに掲載されたことがあります。また、日本語サポートの対応時間が8時間に限定されている点や、サイトの表現がまだ日本市場に最適化されていない点も、改善が望まれます。",
      "総じて、ラッキーブルは革新的な機能と強固なライセンスを持つ一方で、プレイヤーからの深刻な苦情というリスクも抱える、評価が二分されるカジノです。豊富なキャンペーンやユニークなゲーム体験に魅力を感じるのであれば、まずは少額から、あるいは入金不要ボーナスを活用して、その実態を自身で確かめることをお勧めします。",
    ],
  },
  security: [
    "最も信頼性が高いとされるMalta Gaming Authority（MGA）のライセンスを取得",
    "第三者監査機関による定期的な監査とRNG（乱数発生器）によりゲームの公平性を確保",
    "ウェブサイトはSSL暗号化技術で保護",
  ],
  responsiblePlay: [
    "ベット制限",
    "損失制限",
    "セッション制限",
    "入金額制限",
    "タイムアウト（自己規制）",
  ],
  complaintStats: [
    "Trustpilotでは4.1/5（142件）と高評価。",
    "Chipy.comでは過去に出金問題や連絡不通を理由にブラックリストに掲載された事例がある。",
    "一部のプレイヤーからは、出金遅延、本人確認の問題、サポート対応の質の低さが報告されている。",
  ],
  awards: [],
  restrictedCountries: [
    "アメリカ合衆国", "アフガニスタン", "オーストラリア", "ハンガリー", "その他多数",
  ],
  userConcerns: [
    "出金および本人確認プロセスの遅延",
    "カスタマーサポートの対応品質に関する不満",
    "サイトのパフォーマンス問題（読み込み速度、ラグ）",
  ],
  summary: [
    "RPG風のクエストプログラム「ベットルバース」がユニークで楽しい。",
    "厳しい賭け条件を緩和する「買取オプション」は画期的。",
    "MGAライセンスを保有しており、基本的な安全性は高い。",
    "一方で、外部サイトでの深刻な苦情やブラックリスト掲載の過去があり、リスクも存在する。利用は慎重に判断すべき。",
  ],
  extraLinks: [
    { text: "🔰 賭け条件とは？仕組みをわかりやすく解説！", href: "https://www.japanesecasino.com/guides/wagering-requirements" },
  ],
  faq: [],
  cta: {
    text: "ラッキーブルでクエストを始めてみる",
    href: "https://go.japanesecasino.com/go/lucky-bull:lucky-bull?referrer_path=%2Freviews%2Flucky-bull",
  },
    images: {
    casino: [
      "/assets/casino/lucky-bull.png",
      "/assets/jp/lucky-bull.png",
      "/assets/casino/lucky-bull.jpg",
    ],
  },
};