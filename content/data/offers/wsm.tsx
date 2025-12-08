import Link from "next/link";
import type { OfferPageContent } from "@/components/templates/OfferDetailTemplate";

export const wsmCasinoWelcome: OfferPageContent = {
  hero: {
    title: "WSMカジノのウェルカムボーナス最大25,000ドル！",
    casino: "WSM Casino",
    casinoSlug: "wsm-casino",
    description: "ミームコインがコンセプトの次世代カジノ★ CasinoTsuは、この豪華ボーナスに追加でフリースピン＆フリーベットも貰って今すぐプレイすることをおすすめいたします！",
    bannerImageUrl: "https://casinotsu.com/images/WSM_1440x320.png",
    lastUpdated: "2025-06-30",
  },

  offerHighlight: {
    bonusAmount: "$25,000",
    bonusType: "初回入金ボーナス",
    wagering: "60倍〜75倍（入金額に対して）",
    validity: "14日",
    bonusCode: "VIPGRINDERS (特定プロモ)",
    secondaryBonus: "最大50回フリースピン + 最大10回フリーベット",
    featured: true,
  },

  tableOfContents: [
    { text: "WSMカジノ💫初回入金ボーナスの詳細", url: "#bonus-details" },
    { text: "初回入金ボーナス内容詳細", url: "#bonus-breakdown" },
    { text: "WSMカジノのウェルカムボーナス獲得方法", url: "#how-to-claim" },
    { text: "注目のWSMトークン＆幅広く遊べるカジノ", url: "#casino-info" },
    { text: "その他のボーナスとプロモーション", url: "#other-promotions" },
    { text: "VIPプログラム詳細", url: "#vip-program" },
    { text: "よくある質問", url: "#faq" },
  ],

  intro: [
    "WSMカジノは、独自仮想通貨「WSM（Wall Street Memes）」というミームコインから生まれた、仮想通貨好きには特に注目のクリプトカジノです。😲🌟",
    "2023年に設立されたばかりの新しいカジノですが、MIBS N.V.によって運営されており、キュラソーライセンスを取得しているため、安全にプレイできる環境が整っています。",
    "CasinoTsu.com にも新しく仲間入りしたこのカジノでは、現在 CasinoTsu.com から新規登録された方に、破格の200％初回入金ボーナス 最大25,000ドルをご提供いたします。ヾ(≧▽≦*)o",
    "仮想通貨カジノのボーナスは豪華なものが多数ありますが、WSMカジノも例外ではありません。⤴⤴💰💰💰",
    "なんと！今なら最大25,000ドルのボーナスに追加で、フリースピン 最大50回＆フリーベット最大10回（200ドル分相当）も進呈中です。🎉🎉",
    "これは初回入金の時だけの、大変貴重な機会でございます。ぜひこの機会をご活用ください。",
    "なお、フリースピンの対象ゲームは、ハックソーゲーミングの人気スロット、「Chaos Crew 2」となっております。(´▽｀)",
  ],

  bonusBreakdown: {
    heading: "WSMカジノ 初回入金ボーナス内容詳細",
    description: "入金額に応じて、受け取れるフリースピンとフリーベットの回数は変動いたしますので、事前にご確認ください。👇",
    tiers: [
      { depositRange: "$10～$99.99", freeSpins: "20回", spinValue: "$0.20", freeBets: "1回", freeBetValue: "$5.00" },
      { depositRange: "$100～$249.99", freeSpins: "20回", spinValue: "$1.00", freeBets: "4回", freeBetValue: "$5.00" },
      { depositRange: "$250～$999.99", freeSpins: "50回", spinValue: "$1.00", freeBets: "5回", freeBetValue: "$10.00" },
      { depositRange: "$1,000以上入金", freeSpins: "50回", spinValue: "$4.00", freeBets: "10回", freeBetValue: "$20.00" },
    ],
    notes: [
      "フリースピン賭け条件: 35倍",
      "フリーベット賭け条件: 無し",
    ]
  },
  
  termsAndConditions: {
    heading: "WSMカジノの初回入金ボーナス｜利用規約",
    items: [
      { label: "初回入金ボーナス", value: "最大25,000ドル" },
      { label: "ボーナス付与方法", value: "初回入金ボーナスは、賭け条件の6倍を達成するごとに、ボーナス額の10％がアカウントに追加されます。" },
      { label: "初回入金獲得有効期限", value: "登録から7日以内" },
      { label: "最低入金額", value: "$10" },
      { label: "賭け条件", value: "入金額$5,000まで: 入金額の60倍。入金額$5,000超: ボーナス額$10,000分まで60倍、それ以上のボーナス額には入金額の75倍が適用。" },
      { label: "賭け条件消化期限", value: "登録から14日以内" },
      { label: "フリースピン勝利金の賭け条件", value: "35倍" },
      { label: "フリーベットの賭け条件", value: "なし" },
      { label: "賭け条件消化率", value: "スロット: 100％, ライブゲーム＆スポーツベット: 50％, ルーレット（ライブも含む）: 5％, その他のゲーム: 20％, 全ダイスゲーム: 0％" },
      { label: "プロモコード", value: "特定のプロモーションでは「VIPGRINDERS」のようなコードが必要な場合があります。通常は自動適用されます。" },
    ],
    warnings: [
      "賭け条件消化期限を過ぎると、ボーナス残高はすべて失効となります。",
      "WSMカジノの一般利用規約が適用されます。",
    ],
  },
  
  characterDialogues: [
    {
      character: "cocomo",
      characterName: "ココモ",
      avatarUrl: "https://casinotsu.com/svg/jp/mascots/surprised/cocomo.svg",
      message: "ボーナスの受取りは一括ではございませんので、ご注意ください。👀\n初回入金後、賭け条件6倍をクリアするごとに、ボーナス10％分がアカウントに自動追加されます。💡",
    },
    {
      character: "kyoju",
      characterName: "教授",
      avatarUrl: "https://casinotsu.com/svg/jp/mascots/happy/oka-kyoju.svg",
      message: "仮想通貨カジノならではの、アカウント開設の簡単さは特筆すべき点です。🌟\n初回入金時のみの限定的なチャンスとなりますので、この機会にぜひ、より大きなボーナスを目指してご入金いただくこともお勧めいたします。",
    },
  ],

  claimSteps: [
    {
      stepNumber: 1,
      title: "サインアップ",
      description: [
        "まず、CasinoTsu.com を通じてWSMカジノの登録ページへお進みください。💨",
        "画面右上の「サインアップ」をクリックしてください。✅",
      ],
      imageUrl: "https://casinotsu.com/images/WSM-casino-register.jpg",
    },
    {
      stepNumber: 2,
      title: "情報入力",
      description: [
        "次に、必要情報であるメールアドレス、ユーザー名、パスワードを入力してください。",
        "利用規約への同意と、任意でのメールマガジン配信へのチェック✅ を入れていただければ、登録は完了です。💪🎉",
      ],
      imageUrl: "https://casinotsu.com/images/WSM-casino-resister2.jpg",
    },
    {
      stepNumber: 3,
      title: "入金",
      description: [
        "続けて、入金ページにてご希望の暗号通貨と入金額を選択し、入金を完了してください。💰",
        "入金完了後、入金額の6倍をクリアするごとに、10％分のボーナスがその都度アカウントに自動追加されます。( •̀ .̫ •́ )✧",
        "フリースピンとフリーベットも併せてお楽しみください。♪(´▽｀)",
      ],
      imageUrl: "https://casinotsu.com/images/WSM-casino-deposit.jpg",
    },
  ],

  casinoInfo: {
    heading: "注目のWSMトークン＆幅広く遊べるカジノ✨",
    paragraphs: [
      "反ウォール街をコンセプトに誕生した仮想通貨「WSM（ウォール・ストリート・ミームズ）」を基盤とした、ミーム文化を取り入れた仮想通貨カジノ「WSMカジノ」は、現在注目を集めています。🔥👀💫",
      "約5,000種類以上のカジノゲームに加え、スポーツベットまで幅広くお楽しみいただける点は、 CasinoTsu が特に推奨するポイントです。さらに、最大25％のキャッシュバックボーナスが特徴のVIPプログラムも、ぜひご注目ください。👍🔥",
      "スポーツブック: 35以上のベットマーケットがあり、サッカー、バスケットボール、ホッケー、野球、eスポーツなど、幅広いスポーツに対応しています。ライブベッティングやストリーミング機能も充実しております。",
    ],
    officialUrl: "https://go.casinotsu.com/go/wsm-casino",
  },
  
  targetGames: {
    heading: "対象ゲーム",
    description: "WSMカジノでは、5,000種類以上のカジノゲームやスポーツベットを提供しています。",
    eligibleGames: [
      "ゲームプロバイダー: Play'n GO, Games Global, Novomatic, Relax Gaming, Hacksaw Gamingなど",
      "ゲームカテゴリー: スロット, ライブテーブル, クラッシュゲーム, インスタントウィンゲームなど",
    ],
    recommendedGames: [
      { name: "Chaos Crew 2", rtp: "N/A", note: "フリースピン対象ゲーム" },
    ],
  },
  
  otherPromotions: {
    heading: "その他のボーナスとプロモーション",
    description: "WSMカジノでは、初回入金ボーナス以外にも、魅力的なプロモーションを豊富にご用意しております。",
    promos: [
      { title: "ウィークリーリロードボーナス", description: "VIPプレイヤー様限定で、毎週最大100,000ドルまでのパーソナライズされたボーナスが提供されます。" },
      { title: "ベストウォレットでのフリースピン", description: "$50以上の入金をベストウォレットで行われた場合、「Gates of Olympus」でご利用いただける50回のフリースピンが付与されます。" },
      { title: "コンボブーストボーナス", description: "アキュムレーターベット（マルチベット）をご利用の場合、最大40％の追加賞金をお受け取りいただけます。" },
      { title: "ドロップ＆ウィン", description: "Pragmatic Playなどのゲームプロバイダーが毎月提供する、大規模な賞金プールにご参加いただけます。" },
      { title: "トーナメント", description: "Spinoleague（賞金総額1,200万ドル）やSpin O Mania（賞金総額100万ドル）といったトーナメントが開催されています。" },
    ],
  },
  
  vipProgram: {
    heading: "VIPプログラム詳細",
    description: "WSMカジノのVIPプログラムは、プレイヤー様の生涯ベット額に基づき、以下のティアに分類されております。",
    tiers: ["ブロンズ", "シルバー", "ゴールド", "プラチナ"],
    benefits: [
      "レーキバックボーナス: ベット額の一部が還元されます。",
      "強化されたフリースピンとボーナス: より有利な条件でボーナスやフリースピンをご獲得いただけます。",
      "ハイローラーリワード: 高額ベットを行うプレイヤー様向けの特別な報酬をご用意しております。",
      "特別オファー: VIPプレイヤー様限定のプロモーションやイベントへのご招待。",
      "専属VIPホスト: 個別のサポートをご提供する担当者がつきます。",
    ],
  },

  paymentMethods: {
    heading: "入出金方法",
    depositMethods: ["ビットコイン", "イーサリアム", "ライトコイン", "ドージコイン", "$WSMトークン", "その他20種類以上の仮想通貨", "クレジットカード（仮想通貨購入）"],
    withdrawalMethods: ["仮想通貨"],
    notes: [
      "現時点では、日本円などの法定通貨での入出金は対応しておりません。",
    ],
  },

  mobileCompatibility: {
    heading: "プラットフォームとモバイル対応",
    description: [
      "WSMカジノは、テレグラム経由でのアクセスが可能なカジノとしても注目されております。これにより、より匿名性の高いゲームプレイが実現します。",
      "モバイルデバイスからのアクセスも快適で、レスポンシブデザインが採用されているため、スマートフォンやタブレットでもスムーズにプレイしていただけます。",
      "専用のモバイルアプリはございませんが、ブラウザから直接アクセスできるため、アプリのダウンロードやインストールは不要です。",
    ],
  },
  
  responsibleGambling: {
    heading: "注意事項と責任あるギャンブル",
    paragraphs: [
      "WSMカジノは、一部の地域では利用が制限されております。ご利用にあたっては、利用規約をご確認ください。",
      "また、CasinoTsu は責任あるギャンブルを強く推奨しており、ギャンブル依存症対策のためのツールも提供されておりますが、より高度な機能への期待もございます。",
    ],
  },

  summary: {
    heading: "最大25,000ドルの太っ腹ボーナスを今すぐゲット！",
    paragraphs: [
      "WSMカジノは、そのコンセプトからプラットフォームに至るまで、やや上級者向けの印象を受けるかもしれませんが、やはりその豪華なボーナスは大変魅力的です。🎁🔥",
      "入金額の2倍がボーナスマネーとして最大25,000ドルまで獲得可能である上に、人気オンカジスロットでご利用いただけるフリースピンやフリーベットも併せてご提供される点は、見逃せません。( •̀ ω •́ )✧",
      "ただし、ボーナスマネーは一括で付与されるわけではなく、また、日本円で遊べるカジノではない点にご留意ください。ボーナス獲得方法や、 CasinoTsu のレビューページを事前にしっかりとご確認いただいた上で、プレイされることをお勧めいたします。👀",
    ],
    recommendedFor: [
      "高額なウェルカムボーナスを探している方",
      "仮想通貨でのプレイを希望する方",
      "カジノゲームとスポーツベットの両方を楽しみたい方",
      "ユニークなコンセプトのカジノに興味がある方",
      "充実したVIPプログラムを求めるハイローラーの方",
    ],
  },

  faq: [
    {
      question: "WSMカジノに入金不要ボーナスはありますか？",
      answer: "いいえ。現時点では提供されておりません。（2025年6月現在）",
      character: "kyoju",
    },
    {
      question: "WSMカジノに他のボーナスはありますか？",
      answer: "はい。初回入金ボーナス以外にも、ウィークリーリロードボーナス、フリースピンボーナス、期間限定のプロモーション、トーナメントなどが提供されております。キャンペーン内容は提供期間によって変更される場合がございますので、公式ページにてご確認ください。",
      character: "kyoju",
    },
    {
      question: "WSMカジノのカジノアプリはありますか？",
      answer: "いいえ。WSMカジノでは専用のカジノアプリはございませんが、ブラウザからスマートフォンでも気軽に登録およびプレイが可能です。",
      character: "kyoju",
    },
  ],

  author: {
    name: "Rina Okabe",
    nameJapanese: "岡部 りな",
    role: "実戦経験6年のカジノ専門家",
    avatarUrl: "/rina/avatar.png",
    bio: "2019年から6年間で80以上のカジノを実際にプレイ。¥250万以上を賭けた実体験から得た本物の知識を、失敗も成功も包み隠さず共有します。",
    authorPageUrl: "/authors/rina-okabe",
    expertise: ["オンラインカジノレビュー", "ボーナス戦略", "パチスロ風スロット", "日本市場特化"],
  },

  cta: {
    text: "今すぐWSMカジノでボーナスGET！",
    href: "https://go.casinotsu.com/go/wsm-casino",
    buttonText: "ボーナスをGET",
  },

  breadcrumbs: [
    { label: "ホーム", href: "https://casinotsu.com/" },
    { label: "オファー", href: "https://casinotsu.com/offers/" },
    { label: "WSMカジノ ウェルカムボーナス", href: "https://casinotsu.com/offers/wsm-casino-welcome" },
  ],

  metadata: {
    category: "welcome-bonus",
    tags: ["初回入金ボーナス", "WSMカジノ", "仮想通貨", "フリースピン", "フリーベット"],
    lastModified: "2025-06-30",
  },
};