import Link from "next/link";
import type { OfferPageContent } from "@/components/templates/OfferDetailTemplate";

export const casinoSkyExclusive: OfferPageContent = {
  hero: {
    title: "ジャパカジ限定！カジノスカイで登録ボーナス7,777円！",
    casino: "Casino Sky",
    casinoSlug: "casino-sky",
    description: "カジ旅やカジノミーの姉妹カジノ『カジノスカイ』が新登場！🛫 ジャパカジ経由で登録するだけで、入金不要ボーナス7,777円をプレゼント！手続き不要で自動的に進呈されます。💕",
    bannerImageUrl: "https://casinotsu.com/images/casinosky_960x495.png",
  },

  offerHighlight: {
    bonusAmount: "7,777円",
    bonusType: "入金不要ボーナス",
    wagering: "40倍",
    validity: "3日間",
    maxWinnings: "15,000円",
    bonusCode: "不要",
    featured: true,
  },

  tableOfContents: [
    { text: "入金不要ボーナス獲得方法", url: "#how-to-claim" },
    { text: "利用規約", url: "#terms-and-conditions" },
    { text: "賭け条件への反映率", url: "#target-games" },
    { text: "まとめ", url: "#summary" },
    { text: "よくある質問", url: "#faq" },
  ],

  intro: [
    "あの「カジ旅」や「カジノミー」といった、オンラインカジノ業界で確かな実績を持つチームが、新たなカジノ『カジノスカイ』をリリースいたしました。👀💕",
    "日本のオンラインカジノ市場を深く理解した経営陣による、注目の新規カジノです。",
    "カジノスカイの開設を記念し、ジャパカジでは特別に、ご登録いただくだけで7,777円の入金不要ボーナスをご提供いたします！ヾ(≧▽≦*)o",
    "このボーナスは、ボーナスコードの入力や複雑な申請手続きは一切不要です。ジャパカジを経由してご登録いただくだけで、自動的にアカウントに進呈されます。👍",
  ],

  claimSteps: [
    {
      stepNumber: 1,
      title: "カジノスカイ登録ページへアクセス",
      description: ["ジャパカジ経由で、カジノスカイの登録ページへアクセスしてください。"],
      imageUrl: "https://casinotsu.com/images/casinosky-open1.jpg",
    },
    {
      stepNumber: 2,
      title: "アカウント情報の入力",
      description: ["登録フォームに、メールアドレス、ご希望のパスワード、携帯電話番号などの必要事項をご入力の上、「次へ」をクリックしてください。"],
      imageUrl: "https://casinotsu.com/images/casinosky-open2.jpg",
    },
    {
      stepNumber: 3,
      title: "個人情報の入力と登録完了",
      description: [
        "次に、氏名、住所、生年月日といった個人情報をご入力ください。",
        "プライバシーポリシーおよび利用規約への同意にチェック✅を入れ、「登録」をクリックすれば、登録手続きは完了です。🎉",
        "ご登録後、カジノスカイにログインいただくと、7,777円のボーナスが自動的にアカウントに進呈されております。💖",
      ],
      imageUrl: "https://casinotsu.com/images/casinosky-open3.jpg",
    },
  ],
  
  characterDialogues: [],

  termsAndConditions: {
    heading: "入金不要ボーナス利用規約",
    items: [
      { label: "ボーナス額", value: "7,777円（日本円でのみご利用いただけます）" },
      { label: "有効期限", value: "ボーナス進呈後3日間" },
      { label: "賭け条件", value: "40倍" },
      { label: "最大ベット額", value: "675円" },
      { label: "最大出金可能額", value: "15,000円" },
      { label: "出金条件", value: "ボーナスマネーは、賭け条件を満たすまで出金できません。" },
      { label: "出金方法", value: "勝利金の出金は銀行送金のみご利用可能です。" },
      { label: "資金の優先順位", value: "アカウントにリアルマネーとボーナスマネーの両方がある場合、リアルマネーが先にゲームプレイに使用されます。" },
      { label: "一般利用規約", value: "カジノスカイの一般利用規約が適用されます。" },
    ],
    prohibitions: [
      "Blood Suckers", "5 Families", "Diamond Blitz", "Golden Beauty", "Lucky Fridays", "Monkey God", "Zombie Queen", "Hong Bao", "Midas Treasure", "Pearls of India", "Eye of the Kraken", "Solar Queen", "Solar Temple", "Solar King", "The Wish Master", "Beautiful Bones", "1429 Uncharted Seas", "Mystery Joker 6000", "1000xBusta", "100 Bit Dice", "Tower Quest"
    ],
    warnings: [],
  },

  casinoInfo: {
    heading: "カジ旅チームが贈る注目の新カジノ！カジノスカイ",
    paragraphs: [
      "「カジ旅」や「カジノミー」など、業界で確かな実績を持つチームが手掛ける新しいオンラインカジノ、それが『カジノスカイ』です。🚀",
      "日本のオンラインカジノ市場を深く理解した経営陣によって運営されており、日本のプレイヤーにとって魅力的なサービスを提供しています。😁✨",
    ],
    officialUrl: "https://casinotsu.com/reviews/casino-sky",
  },

  targetGames: {
    heading: "賭け条件への反映率",
    description: "カジノスカイの入金不要ボーナスの賭け条件達成における、ゲームごとの反映率は以下の通りです。スロット以外でもご利用いただけますが、反映率が大きく異なるためご注意ください。",
    eligibleGames: [
      "スロットマシン、および下記以外の全てのゲーム: 最大100%",
      "ビデオ・ポーカー: 最大30%",
      "ブラックジャック（ポンツーン、ダブルエクスポージャー含む）、オアシス・ポーカー、Crazy Time、テキサス・ホールデム・ポーカー、カジノ・ホールデム、ライブカジノ全ゲーム: 最大10%",
      "ルーレット（ライブカジノを除く）、バカラ（ライブカジノを除く）: 最大 5%",
      "Gold Digger Mines、1000x Busta、プントバンコ、Spribe: Mines／Plinko／Keno／Hilo／Dice／Goal／Mini Roulette／Aviator、Hacksaw Gaming: Coins／Boxes／Mines: 0%",
    ],
    recommendedGames: [],
  },
  
  paymentMethods: {
    heading: "入出金方法",
    depositMethods: [],
    withdrawalMethods: ["銀行送金"],
    notes: [
      "入金不要ボーナスからの勝利金の出金は銀行送金のみ対応しています。",
    ],
  },

  summary: {
    heading: "まとめ｜高額無料ボーナスとキャッシュバックで超お得に遊べるカジノ💰",
    paragraphs: [
      "カジノスカイは、さすがカジ旅系列のカジノらしく、日本のプレイヤーの皆様にとって魅力的なサービスを提供されています。😁✨",
      "新規カジノでは初回入金ボーナスが一般的ですが、今回ご提供するラッキー7にちなんだ7,777円という入金不要ボーナスは、業界でもトップクラスの額と言えるでしょう！",
      "さらに、その後の初回入金時には、最大5万円まで100％のマネーバック特典がございます。😍 ご入金額と同額が返還されるため、安心してプレイをお楽しみいただけます。(❤´艸｀❤)",
      "人気スロットからライブカジノまで、豊富なゲームラインナップもご満足いただけることと思います。この豪華ボーナスを獲得できる機会を、どうぞお見逃しなく。💕",
    ],
    recommendedFor: [
      "新しいカジノをノーリスクで試したい方",
      "高額な入金不要ボーナスを探している方",
      "カジ旅やカジノミーが好きな方",
      "お得なキャッシュバック特典に興味がある方",
    ],
  },

  faq: [
    {
      question: "入金不要ボーナスの賭け条件はどのくらいですか？",
      answer: "賭け条件は40倍となっております。",
      character: "oka-kyoju",
    },
    {
      question: "入金不要ボーナスを受け取る上での注意点はありますか？",
      answer: "こちらの入金不要ボーナスは、ジャパカジ限定の特別オファーです。そのため、このページ、またはジャパカジのレビューページからご登録いただく必要がございます。",
      character: "oka-kyoju",
    },
  ],
  
  cta: {
    text: "今すぐカジノスカイで7,777円ボーナスをGET！",
    href: "https://go.casinotsu.com/go/casino-sky",
    buttonText: "ボーナスGET",
  },

  breadcrumbs: [
    { label: "ホーム", href: "https://casinotsu.com/" },
    { label: "オファー", href: "https://casinotsu.com/offers/" },
    { label: "カジノスカイ限定", href: "https://casinotsu.com/offers/casino-sky-exclusive" },
  ],

  metadata: {
    category: "exclusive-offer",
    tags: ["入金不要ボーナス", "カジノスカイ", "新規カジノ", "ジャパカジ限定"],
  },

  author: {
    name: "Rina Okabe",
    nameJapanese: "岡部 りな",
    role: "実戦経験6年のカジノ専門家",
    avatarUrl: "/rina/avatar.png",
    bio: "2019年から6年間で80以上のカジノを実際にプレイ。¥250万以上を賭けた実体験から得た本物の知識を、失敗も成功も包み隠さず共有します。",
    authorPageUrl: "/authors/rina-okabe",
    expertise: ["オンラインカジノレビュー", "ボーナス戦略", "パチスロ風スロット", "日本市場特化"],
  },
};