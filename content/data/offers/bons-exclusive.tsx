import Link from "next/link";
import type { OfferPageContent } from "@/components/templates/OfferDetailTemplate";

export const bonsCasinoExclusive: OfferPageContent = {
  hero: {
    title: "ボンズカジノ｜入金不要ボーナス5,000円＋フリースピン20回！",
    casino: "Bons Casino",
    casinoSlug: "bons",
    description: "ジャパカジ様限定！CasinoTsu (casinotsu.com) からボンズカジノにご登録いただき、無料ボーナスと人気スロットのフリースピンをぜひお受け取りください★",
    bannerImageUrl: "https://casinotsu.com/wp-content/uploads/bons_960x495-1.png",
  },

  offerHighlight: {
    bonusAmount: "¥5,000 + 20 FS",
    bonusType: "入金不要ボーナス & フリースピン",
    wagering: "40倍 (ボーナス) / 20倍 (FS)",
    validity: "30日",
    maxWinnings: "¥12,000",
    bonusCode: "japacasi",
    featured: true,
  },

  tableOfContents: [
    { text: "ボンズカジノの入金不要ボーナス＆フリースピン詳細", url: "#bonus-details" },
    { text: "入金不要ボーナス＆フリースピン獲得方法", url: "#how-to-claim" },
    { text: "ボンズカジノについて", url: "#casino-info" },
    { text: "攻略法・注意点", url: "#strategy" },
    { text: "VIPプログラム", url: "#vip-program" },
    { text: "よくある質問 (FAQ)", url: "#faq<> },
  ],

  intro: <a href="https://casinotsu.com/reviews/bons" target="_blank" rel="noopener noreferrer">
    "マインクラフトのようなユニークな世界観を持つ [ボンズカジノ](LINK_NEEDS_REPAIR) から、**ジャパカジ様限定の大変お得なオファー** が届きました。</>,
    "ご登録いただくだけで、『**入金不要ボーナス5,000円**』をお受け取りいただけます！",
    "＼ **さらに！** 😲✨／",
    "5,000円を無料で進呈するだけでも大変豪華ですが、それだけではありません。",
    <>なんと、人気スロット『<strong><a href="https://casinotsu.com/slots/moon-princess" target="_blank" rel="noopener noreferrer">Moon Princess</strong>』の**フリースピン20回分**も同時にプレゼントされます😍💖</>,
    "無料で5,000円がもらえる上に、人気スロットのフリースピンまで楽しめるというのは、まさに太っ腹な企画と言えるでしょう😭✨ これは見逃せませんね！？",
    "いますぐボンズカジノへ向いたいという方も、利用規約や獲得方法などを、しっかりとご確認くださいますようお願いいたします★👇",
  ],

  claimSteps: [
    {
      stepNumber: 1,
      title: "ボンズカジノへアクセス",
      description: ["ジャパカジ様のページ内のリンクから、ボンズカジノのページへアクセスします。"],
    },
    {
      stepNumber: 2,
      title: "アカウント登録",
      description: ["ボンズカジノにご登録ください。"],
    },
    {
      stepNumber: 3,
      title: "ボーナスコード入力",
      description: ["ご登録時、ボーナスコード「 japacasi」をご入力ください。"],
      bonusCode: "japacasi",
    },
    {
      stepNumber: 4,
      title: "本人確認・電話番号認証",
      description: ["ご本人様確認 および 電話番号認証 を完了させてください。"],
    },
    {
      stepNumber: 5,
      title: "ボーナスまたはフリースピンを選択",
      description: ["入金不要ボーナス 5,000円 または Moon Princess 20回分のフリースピン のいずれか一方を先に獲得してください。"],
      imageUrl: "https://casinotsu.com/wp-content/uploads/Untitled-design-16.jpg",
      note: "アカウント登録が完了しましたら、プロモーションページの『獲得可能なギフト』から、先にご利用になりたい入金不要ボーナスまたはフリースピンをご選択ください。ボンズカジノのトップページ上部に表示されているプレゼントマーク『🎁』をクリックすると、プロモーションページが表示されますよ(❁´◡`❁)",
    },
    {
      stepNumber: 6,
      title: "ボーナスを利用",
      description: ["選択した入金不要ボーナスまたはフリースピンをご利用ください。"],
    },
    {
      stepNumber: 7,
      title: "出金条件をクリア",
      description: ["ボーナスの出金条件をクリアしてください。"],
    },
    {
      stepNumber: 8,
      title: "勝利金と残りのボーナスを獲得",
      description: ["勝利金💰✨ を獲得！さらに、残りの入金不要ボーナスまたはフリースピンもGET💝"],
    },
    {
      stepNumber: 9,
      title: "再度勝利金を獲得",
      description: ["残りのボーナスの出金条件をクリアして、再度勝利金💰✨ を獲得！<>],
    },
  ],

  characterDialogues: <a href="https://casinotsu.com/live-casino" target="_blank" rel="noopener noreferrer">
    {
      character: "casiko",
      characterName: "カジ子",
      avatarUrl: "https://img.casinotsu.com/svg/jp/mascots/happy/casiko.svg",
      message: "ボーナスはカジノゲーム、[ライブカジノ](LINK_NEEDS_REPAIR)、スポーツベットでご利用いただけます。\nゲームによって賭け条件の消化率が異なりますので、プレイ前にボーナス利用規約ページにてご確認ください🌸</>,
    },
    {
      character: "cocomo",
      characterName: "ココモ",
      avatarUrl: "https://img.casinotsu.com/svg/jp/mascots/happy/cocomo.svg",
      message: "入金不要ボーナスとフリースピンは同時にご利用いただけません。\nどちらか一方を使い終えるか、出金処理を完了してから、もう一方をご利用いただけるようになります♪\nアカウント登録の際には、**ボーナスコードの入力** をお忘れなく🚨！",
    },
  ],

  termsAndConditions: {
    heading: "ボンズカジノの入金不要ボーナス＆フリースピン利用規約",
    items: <a href="https://casinotsu.com/slots/moon-princess" target="_blank" rel="noopener noreferrer">
      { label: "ボーナス額", value: "¥5,000" },
      { label: "賭け条件 (ボーナス)", value: "40倍" },
      { label: "出金上限額 (ボーナス)", value: "¥12,000" },
      { label: "フリースピン", value: "20回" },
      { label: "対象スロット (フリースピン)", value: "[Moon Princess](LINK_NEEDS_REPAIR)</> },
      { label: "スピンバリュー", value: "¥32" },
      { label: "賭け条件 (フリースピン勝利金)", value: "20倍" },
      { label: "有効期限", value: "30日間" },
      { label: "ボーナスコード", value: "japacasi", note: "登録時に入力する必要があります。" },
      { label: "必須条件", value: "本人確認 および 電話番号認証" },
    ],
    prohibitions: [
      "ボーナスご利用中、一部のゲーム（ライブカジノや高ペイアウトルーレットなど）はプレイが禁止されていたり、ベット額に上限が設けられている場合がございます。",
      "入金不要ボーナスとフリースピンは、同時にご利用いただけません。",
    ],
    warnings: [
      "ボーナスおよびフリースピンの受け取りには、本人確認 および 電話番号認証 が必須となります。",
      "入金不要ボーナスには 出金上限額は 12,000円 です。",
      "ボーナス、フリースピンの有効期限は 30日間 です。",
      "ボンズカジノの 一般利用規約 が適用されます。",
    ],
    otherOffers: <a href="https://casinotsu.com/bonuses/welcome-bonus" target="_blank" rel="noopener noreferrer">
      {
        heading: "ウェルカムボーナスパッケージ",
        description: "ボンズカジノでは、入金不要ボーナスに加え、初回から5回目のご入金までご利用いただける豪華な[ウェルカムボーナス](LINK_NEEDS_REPAIR)パッケージもご用意しております。</>,
        bonuses: [
          { deposit: "初回入金", maxBonus: "最大¥5,000", percentage: "200%", wagering: "25倍" },
          { deposit: "2回目入金", maxBonus: "最大¥30,000", percentage: "100%", wagering: "15倍" },
          { deposit: "3回目入金", maxBonus: "最大¥40,000", percentage: "50%", wagering: "20倍" },
          { deposit: "4回目入金", maxBonus: "最大¥50,000", percentage: "50%", wagering: "20倍" },
          { deposit: "5回目入金", maxBonus: "最大¥75,000", percentage: "25%", wagering: "20倍" },
        ],
        note: "これらのボーナスは、ご入金額とボーナス額の合計に対して指定された賭け条件を満たすことで出金が可能となります。",
      },
      {
        heading: "追加フリースピンオファー",
        description: "初回入金ボーナスに加え、**合計200回のフリースピン** が10日間にわたって提供されます。初回ご入金時に20回分のフリースピンが付与され、その後9日間は毎日20回ずつ追加でフリースピンが付与されます。",
        details: [
          "対象ゲーム: 初回入金時は「Moon Princess」ですが、その後のフリースピンは **「Piggy Riches Megaways」** など、日によって対象ゲームが変更される可能性がございます。",
          "賭け条件: フリースピンから得た勝利金に対する賭け条件は **20倍** です。",
          "利用期限: フリースピンは **獲得した当日に使用** していただく必要がございます。",
        ],
      },
      {
        heading: "代替フリースピンオファー",
        description: "別のプロモーションとして、ボーナスコード「 **Chipy30**」をご入力いただくと、「Sweet Bonanza」にて **30回分のフリースピン** (賭け条件20倍) をお受け取りいただけるオファーもございます。",
      },
    ],
  },

  casinoInfo: {
    heading: "ボンズカジノについて",
    paragraphs: [
      "運営会社: Reinvent N.V.",
      "ライセンス: キュラソー (オランダ領アンティル諸島)",
      "設立年: 2019年",
      "安全性: キュラソーライセンスを所持し、SSL暗号化技術を使用しているため、安全にプレイいただけます。ただし、eCOGRAの認証はございません。",
      "評判: ユニークなインターフェースと豊富なゲームラインナップにより、プレイヤーの皆様から好評を得ております。",
    ],
    rating: 4.5,
    officialUrl: "https://go.casinotsu.com/go/bons-com",
    vipProgram: {
      heading: "VIPプログラム",
      description: "ボンズカジノは、プレイヤーの皆様のロイヤリティにお応えするための**7段階のVIPプログラム**を提供しております。月ごとのプレイ状況に応じてランクが変動し、様々な特典をお受け取りいただけます。",
      features: [
        "キャッシュバック: プレイヤーランクに応じて、**0.05%から最大0.25%** のキャッシュバックが進呈されます。最上位ランクでは、**最大20%** のキャッシュバックが受けられる可能性がございます。",
        "リベートボーナス: ご賭け金の一部が還元されるリベートボーナスも、ランクに応じて提供されます。",
        "専属VIPマネージャー: 最上位ランクのプレイヤー様には、専属のVIPマネージャーがつき、きめ細やかなサポートを提供いたします。",
      ],
    },
  },

  targetGames: {
    heading: "ゲームライブラリ",
    description: "ボンズカジノは、**72社以上** のソフトウェアプロバイダーと提携し、非常に幅広いゲームを提供しております。",
    eligibleGames: [
      "スロット",
      "ライブカジノ (ルーレット, ブラックジャック, バカラなど)",
      "テーブルゲーム",
      "スポーツベット",
    ],
    recommendedGames: [
      { name: "Starburst", rtp: "N/A" },
      { name: "Book of Dead", rtp: "N/A" },
      { name: "Sweet Bonanza", rtp: "N/A" },
      { name: "Moon Princess", rtp: "N/A" },
      { name: "Piggy Riches Megaways", rtp: "N/A" },
    ],
  },

  paymentMethods: {
    heading: "入出金方法",
    depositMethods: ["クレジットカード", "電子ウォレット", "仮想通貨 (Bitcoin, Ethereumなど)"],
    withdrawalMethods: ["クレジットカード", "銀行送金", "電子ウォレット", "仮想通貨"],
    notes: [
      "対応通貨: AUD, CAD, CNY, EUR, INR, JPY, KZT, NOK, NZD, RUB, SEK, UAH, USD",
      "ご入金は即時処理されます。",
      "カードでの出金には3〜5日ほど要します。",
      "月間の出金上限額は $100,000 と高めに設定されています。",
      "通常、入出金手数料は無料ですが、ご利用の決済サービスによっては手数料が発生する場合がございます。",
    ],
  },

  mobileCompatibility: {
    heading: "モバイル対応",
    description: [
      "ボンズカジノは、スマートフォンやタブレットでのプレイに最適化されています。",
      "専用のモバイルアプリがダウンロード可能で、よりスムーズなゲーム体験を提供します。",
      "アプリをダウンロードされない場合でも、モバイルブラウザから直接アクセスし、ストレスなくプレイいただけます。",
    ],
  },
  
  strategy: {
    heading: "攻略法・注意点",
    subsections: <a href="https://casinotsu.com/slots" target="_blank" rel="noopener noreferrer">
      {
        subheading: "ボーナス活用法",
        tips: [
          "賭け条件消化率の確認：ボーナスをご利用になる際は、各ゲームの賭け条件消化率をご確認いただき、効率的に条件をクリアできるゲームをお選びください。特に[スロット](LINK_NEEDS_REPAIR)は消化率が高い傾向にあります。</>,
          "ウェルカムボーナスパッケージの活用：初回入金ボーナスだけでなく、5回目までの入金ボーナスを計画的にご利用いただくことで、より多くの資金でゲームをお楽しみいただけます。",
          "VIPプログラムの活用：プレイ実績に応じてランクが上がるVIPプログラムでは、キャッシュバックやリベートボーナスなどが提供されます。これらの特典をうまく活用することで、実質的な負担を軽減できます。",
        ],
      },
      {
        subheading: "賭け条件クリア戦略",
        tips: <a href="https://casinotsu.com/roulette" target="_blank" rel="noopener noreferrer">
          "低リスクベット：賭け条件の消化には、ベット額を抑えつつ多くのゲームをプレイする方法や、リスクを抑えたベット戦略（例：[ルーレット](LINK_NEEDS_REPAIR)の赤黒賭けなど、ただし禁止ゲームや制限にご注意ください）が有効な場合があります。</>,
          "フリースピンの活用：フリースピンで得た勝利金は、入金不要ボーナスよりも賭け条件が低い場合が多いです。これを活用して、効率的に資金を増やすことを目指しましょう。",
          "ボーナスの種類に応じた戦略：マッチボーナスやフリースピンなど、ボーナスの種類によって最適な戦略は異なります。利用規約をよくお読みになり、それぞれのボーナスに合ったアプローチをお取りください。",
        ],
      },
    ],
  },

  similarOffers: {
    heading: "類似オファー",
    description: "ボンズカジノの入金不要ボーナスは、当サイトのデータベース上の他のボーナスと比較して**90.64%**という高い評価を得ており、非常に競争力のあるオファーと言えます。他のカジノでも同様の入金不要ボーナスやフリースピンが提供されていますが、ボンズカジノのオファーは、ボーナス額、フリースピンの数、そして賭け条件のバランスが取れている点が魅力です。",
    offers: [],
  },

  summary: {
    heading: "まとめ",
    paragraphs: [
      "ボンズカジノのジャパカジ様限定入金不要ボーナスは、**5,000円の現金ボーナス**と**人気スロット「Moon Princess」のフリースピン20回分**という、大変魅力的な組み合わせです。賭け条件も比較的緩やか（現金ボーナス40倍、フリースピン勝利金20倍）であり、出金上限額も12,000円と設定されているため、リスクを冒さずにカジノを体験したいプレイヤーや、「Moon Princess」のファンには特におすすめです。",
      "さらに、ボンズカジノは充実した[ウェルカムボーナス](LINK_NEEDS_REPAIR)、豊富なゲームラインナップ、<a href="https://casinotsu.com/crypto" target="_blank" rel="noopener noreferrer">仮想通貨を含む多様な<a href="https://casinotsu.com/payment" target="_blank" rel="noopener noreferrer">入出金方法、そして使いやすいモバイルプラットフォームを提供しており、総合的に高い満足度が期待できるオンラインカジノです。</>,
    ],
    recommendedFor: [
      "リスクを冒さずにオンラインカジノを試してみたい方",
      "「Moon Princess」をプレイしたことがある、またはプレイしてみたい方",
      "ボーナスコードを利用して特典を得たい方",
      "ユニークなデザインのカジノに興味がある方",
      "幅広いゲームで遊びたい方",
    ],
  },

  faq: <a href="https://casinotsu.com/live-casino" target="_blank" rel="noopener noreferrer">
    {
      question: "ボンズカジノの入金不要ボーナスはいくらですか？",
      answer: "ジャパカジ様限定で、ご登録いただくと5,000円の入金不要ボーナスを進呈いたします。",
    },
    {
      question: "フリースピンはいくつもらえますか？",
      answer: "入金不要ボーナスに加え、人気スロット「Moon Princess」のフリースピンが20回分もらえます。さらに、初回ご入金後、10日間にわたって毎日20回ずつ、合計200回のフリースピンが付与されます（対象ゲームは変更される場合があります）。",
    },
    {
      question: "ボーナスを受け取るために必要なことは何ですか？",
      answer: "ジャパカジ様経由でボンズカジノにご登録いただき、ご登録時にボーナスコード「japacasi」を入力していただく必要がございます。また、ご本人様確認と電話番号認証も完了させてください。",
    },
    {
      question: "ボーナスの賭け条件はどのくらいですか？",
      answer: "入金不要ボーナスは40倍、フリースピンから得た勝利金は20倍の賭け条件が適用されます。ウェルカムボーナスの賭け条件は、ご入金ボーナスの種類によって異なります。",
    },
    {
      question: "ボーナスはどのゲームで使えますか？",
      answer: "入金不要ボーナスは、カジノゲーム、[ライブカジノ](LINK_NEEDS_REPAIR)、スポーツベットでご利用いただけます。ただし、ゲームによって賭け条件の消化率が異なります。フリースピンの対象ゲームは指定されております。</>,
    },
    {
      question: "入金不要ボーナスとフリースピンは同時に使えますか？",
      answer: "いいえ、同時にご利用いただくことはできません。どちらか一方を使い切るか、出金処理を完了してから、もう一方をご利用いただく必要がございます。",
    },
    {
      question: "ボンズカジノは安全ですか？",
      answer: "キュラソーライセンスを所持しており、SSL暗号化技術を使用しているため、安全にプレイいただけます。",
    },
    {
      question: "モバイルアプリはありますか？",
      answer: "はい、スマートフォン・タブレット向けのモバイルアプリが用意されており、ダウンロードしてご利用いただけます。",
    },
    {
      question: "どのような入出金方法がありますか？",
      answer: "クレジットカード、電子ウォレット、仮想通貨（ビットコイン、イーサリウムなど）に対応しております。",
    },
    {
      question: "サポートは利用できますか？",
      answer: "はい、24時間365日、ライブチャットとEメールで8言語（日本語含む）のサポートがご利用いただけます。",
    },
  ],

  cta: {
    text: "今すぐボンズカジノでボーナスをゲット！",
    href: "https://go.casinotsu.com/go/bons-com",
    buttonText: "ボーナスをGET♪",
  },

  breadcrumbs: [
    { label: "ホーム", href: "https://casinotsu.com/" },
    { label: "オファー", href: "https://casinotsu.com/offers/" },
    { label: "ボンズカジノ限定", href: "https://casinotsu.com/offers/bons-exclusive" },
  ],

  metadata: {
    category: "exclusive-offer",
    tags: ["入金不要ボーナス", "ボンズカジノ", "ジャパカジ限定", "フリースピン"],
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