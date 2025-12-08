import Link from "next/link";
import type { OfferPageContent } from "@/components/templates/OfferDetailTemplate";

export const joyCasinoExclusive: OfferPageContent = {
  hero: {
    title: "ジャパカジ限定！ジョイカジノで¥4,500の入金不要ボーナスを獲得",
    casino: "Joy Casino",
    casinoSlug: "joycasino",
    description: "CasinoTsuは、オンラインカジノ「ジョイカジノ（Joy Casino）」との特別な提携により、新規登録者様限定で¥4,500の入金不要ボーナスをご提供できる運びとなりました。この機会に、ぜひジョイカジノの世界をご体験ください。",
    bannerImageUrl: "https://casinotsu.com/images/joycasino_960x495.png",
  },

  offerHighlight: {
    bonusAmount: "¥4,500",
    bonusType: "入金不要ボーナス",
    wagering: "30倍",
    validity: "30日間",
    maxWinnings: "¥12,000",
    bonusCode: "japacasi",
    featured: true,
  },

  tableOfContents: [
    { text: "オファー基本情報", url: "#offer-details" },
    { text: "ボーナス受け取り方法", url: "#how-to-claim" },
    { text: "利用規約・条件", url: "#terms-and-conditions" },
    { text: "ジョイカジノとは？", url: "#casino-info" },
    { text: "攻略法・注意点", url: "#strategy" },
  ],

  intro: [
    "この度、姉妹カジノであるカジノエックスと共に日本市場へ再上陸を果たしたジョイカジノ（Joy Casino）より、CasinoTsu 読者の皆様へ、大変魅力的なウェルカムオファーをご用意いたしました。",
    "それは、新規登録者様限定で、登録するだけで¥4,500が無料でもらえる入金不要ボーナスです。💰✨",
    "日本市場への復帰早々、ジョイカジノ様のご提供されるボーナスは大変太っ腹だと感じております。賭け条件は30倍と標準的ですが、このボーナスを元手に勝利を掴み、現金化する夢も決して遠くはありません。",
    "早速、カジノの無料ボーナスの詳細について、CasinoTsu が責任をもって確認してまいりましょう。✅",
    "CasinoTsu では、オンラインカジノ「ジョイカジノ（Joy Casino）」でご利用いただける、新規登録者様限定の入金不要ボーナスについて詳しく解説いたします。当サイトのリンクを通じてジョイカジノにご登録いただくことで、¥4,500を無料で受け取ることが可能です。ライブカジノでも定評のあるジョイカジノを、一切のリスクなく体験できる絶好の機会となります。",
  ],

  claimSteps: [
    {
      stepNumber: 1,
      title: "CasinoTsuからジョイカジノへアクセス",
      description: [
        "まず、当サイトに掲載されているリンクをクリックし、ジョイカジノの登録ページへお進みください。",
      ],
    },
    {
      stepNumber: 2,
      title: "アカウント登録",
      description: [
        "表示される登録フォームに、必要事項をご入力ください。特に、ボーナスコード欄には「japacasi」と正確にご入力ください。これが限定ボーナスを受け取るための鍵となります。",
      ],
      imageUrl: "https://casinotsu.com/images/joy-casino-exclusive-offer-bonus-code.png",
    },
    {
      stepNumber: 3,
      title: "メールアドレス認証",
      description: [
        "ご登録いただいたメールアドレス宛に、認証メールが届きます。メール内のURLをクリックし、登録手続きを完了させてください。",
      ],
      imageUrl: "https://casinotsu.com/images/joy-casino-exclusive-offer-verification.png",
    },
    {
      stepNumber: 4,
      title: "ボーナス有効化ページへ",
      description: [
        "ジョイカジノにログイン後、画面上部にある「🎁」アイコンをクリックしてください。",
      ],
      imageUrl: "https://casinotsu.com/images/joy-casino-exclusive-offer-how-to-get-offer.png",
    },
    {
      stepNumber: 5,
      title: "ボーナスを選択して有効化",
      description: [
        "プレゼント一覧の中から、該当する入金不要ボーナスを選択し、「有効にする」ボタンをクリックします。",
      ],
      imageUrl: "https://casinotsu.com/images/joy-casino-exclusive-offer-how-to-get-offer2.png",
    },
    {
      stepNumber: 6,
      title: "アカウント情報を確認",
      description: [
        "ボーナスの利用条件が表示されますので、内容をご確認の上、「有効にする」をクリックします。次に、Eメールと電話番号の確認が求められます。画面の指示に従い、正確な情報を入力・承認作業を進めてください。",
      ],
      imageUrl: "https://casinotsu.com/images/joy-casino-exclusive-offer-how-to-get3.png",
    },
    {
      stepNumber: 7,
      title: "ボーナス獲得完了",
      description: [
        "最後に「変更を保存」をクリックすれば、¥4,500の入金不要ボーナスがお客様のアカウントに反映されます。これで準備は完了です。🎉",
      ],
      imageUrl: "https://casinotsu.com/images/joy-casino-exclusive-offer-how-to-get4.png",
    },
  ],

  characterDialogues: [],

  termsAndConditions: {
    heading: "入金不要ボーナス利用規約",
    items: [
      { label: "ボーナス額", value: "¥4,500" },
      { label: "賭け条件", value: "30倍" },
      { label: "有効期限", value: "30日間" },
      { label: "対象ゲーム", value: "ジョイカジノ内の全ゲーム（ゲームにより賭け条件への消化率が異なります）" },
      { label: "最大出金可能額", value: "¥12,000" },
      { label: "最大ベット額", value: "約¥800～¥1,000相当（正確な額は利用規約で要確認）" },
      { label: "ボーナスコード", value: "japacasi" },
    ],
    prohibitions: [
      "禁止されているゲーム（例：一部のテーブルゲーム、プログレッシブスロットなど）をプレイすること",
      "ボーナスの賭け条件を不正にクリアしようとする行為（ボーナスハンティングなど）",
    ],
    warnings: [
      "出金申請時には、各決済方法の最低入金額に準じた入金実績が必要な場合があります。",
      "有効期限内に賭け条件を達成しない場合、ボーナスおよびそこから得られた勝利金はすべて失効となります。",
      "最大ベット制限額を超えてベットされた場合、ボーナス違反とみなされることがあります。",
      "規約違反が確認された場合、ボーナスの没収やアカウントの凍結といった措置が取られる可能性がございます。",
    ],
  },

  casinoInfo: {
    heading: "ジョイカジノ（Joy Casino）について",
    paragraphs: [
      "ジョイカジノは、2003年に設立され、オンラインカジノ業界において長年の実績を持つ信頼性の高いギャブルサイトです。キュラソーのeGaming規制当局より発行されたライセンスを所持し、多くの著名なオンラインカジノが採用している信頼性の高いライセンスの一つです。",
      "ウェブサイト全体でSSL暗号化技術を採用し、不正行為を防止するための最新鋭のアンチ・フラウドツールを導入しており、プレイヤーが安心してゲームに集中できる環境を提供しています。",
      "プレイヤーからは、その豊富なゲームラインナップや魅力的なプロモーションが高く評価されています。ウェブサイトは15以上の言語に対応しており、日本のお客様も快適に日本語でご利用いただけます。",
    ],
    officialUrl: "https://go.casinotsu.com/go/joy-casino?referrer_path=%2Foffers%2Fjoycasino-exclusive",
  },

  targetGames: {
    heading: "対象ゲーム",
    description: "CasinoTsu 経由で獲得いただける ¥4,500 の入金不要ボーナスは、ジョイカジノが提供する多種多様なゲームでお楽しみいただけます。ただし、ゲームの種類によって賭け条件への消化率（貢献率）が異なる点にご注意ください。",
    eligibleGames: [
      "スロット（貢献率100%）",
      "テーブルゲーム（貢献率0%～10%）",
      "ライブカジノ（貢献率0%～10%）",
      "ビデオポーカー（貢献率0%～10%）",
    ],
    recommendedGames: [],
  },

  paymentMethods: {
    heading: "入出金方法",
    depositMethods: ["EcoPayz", "Mastercard", "Moneta", "Neteller", "Paysafecard", "Qiwi", "Skrill", "Trustly", "Visa", "Visa Electron", "Webmoney", "Western Union", "Yandex", "Maestro"],
    withdrawalMethods: ["Skrill", "Neteller", "銀行送金", "クレジットカード"],
    notes: [
      "出金手続きには、本人確認（KYC）が必須となります。身分証明書、住所確認書類、決済方法の確認書類の提出が求められますので、早めに完了させておくことをお勧めします。",
      "E-ウォレットでの出金は通常数時間以内、銀行送金・カードでの出金は2～5営業日かかる場合があります。",
    ],
  },

  mobileCompatibility: {
    heading: "モバイル対応",
    description: [
      "ジョイカジノは、スマートフォンやタブレットからでも快適にプレイをお楽しみいただけるよう、モバイル最適化されたウェブサイトを提供しております。",
      "専用のモバイルアプリはございませんが、お使いのウェブブラウザからアクセスするだけで、PC版と同様のゲームや機能をお楽しみいただけます。ゲームはダウンロード不要で、ブラウザ上で直接プレイが可能です。",
    ],
  },

  strategy: {
    heading: "攻略法・注意点",
    subsections: [
      {
        subheading: "ボーナス活用法",
        tips: [
          "賭け条件消化の優先：まずは、入金不要ボーナスの賭け条件クリアを最優先に進めましょう。スロットは消化率100%ですので、積極的に活用するのが効果的です。",
          "ボーナス額の最大化：¥4,500のボーナスを最大限に活かすため、賭け条件や出金上限額（¥12,000）を常に意識しながらプレイを進めてください。",
          "初回入金ボーナスとの連携：入金不要ボーナスでゲームに慣れたら、初回入金ボーナス（最大¥200,000 + フリースピン200回）の利用もぜひご検討ください。",
        ],
      },
      {
        subheading: "賭け条件クリア戦略",
        tips: [
          "低ボラティリティのスロット：リスクを抑えながら賭け条件を消化したい場合は、ペイアウト率が高く、頻繁に小額勝利が発生する低ボラティリティのスロットを選択するのが有効です。",
          "ハイローラー戦略：短期間でクリアを目指す場合、高配当を狙えるゲームやボーナス購入機能などを活用するのも一つの手段ですが、それに伴うリスクも高まります。",
        ],
      },
      {
        subheading: "注意事項",
        tips: [
          "利用規約の確認：ボーナスやカジノの利用規約は、随時更新される可能性があります。プレイを開始される前に、必ず最新の利用規約をご確認ください。",
          "禁止事項の遵守：禁止ゲームでのプレイや、ボーナスの不正利用とみなされる行為は、絶対におやめください。",
          "出金限度額：入金不要ボーナスからの勝利金には、最大¥12,000の出金上限が設定されています。",
          "出金時間とKYC：出金には本人確認（KYC）が必要となり、これには時間がかかる場合があります。スムーズな出金のため、書類は早めに準備しておきましょう。",
        ],
        warnings: [
          "アメリカ、イギリス、イタリア、フランス、ウクライナ、トルコなどの国からのプレイヤーは、ジョイカジノの利用が制限されています。",
        ],
      },
    ],
  },

  similarOffers: {
    heading: "ジョイカジノがお好きな方におすすめのカジノもチェック",
    offers: [
      {
        casino: "カジノエックス",
        casinoSlug: "casino-x",
        feature: "ジョイカジノの姉妹サイト。同様に魅力的なボーナスを提供している可能性があります。",
        offerLink: "https://casinotsu.com/reviews/casino-x",
      },
      {
        casino: "その他の限定オファー",
        casinoSlug: "offers",
        feature: "CasinoTsuでは他にも多数の入金不要ボーナスやウェルカムオファーをご用意しています。",
        offerLink: "https://casinotsu.com/offers",
      },
    ],
  },

  summary: {
    heading: "まとめ",
    paragraphs: [
      "CasinoTsu 限定のジョイカジノ ¥4,500 入金不要ボーナスは、オンラインカジノ初心者の方や、新しいカジノを安全に試してみたい方にとって、大変お得なオファーであると確信しております。",
      "入金不要ボーナスを存分にお楽しみいただいた後は、ぜひ初回入金ボーナスもご検討ください。最大¥200,000のボーナスと200回のフリースピンは、さらに大きな勝利を目指されるプレイヤーにとって、大変魅力的な選択肢となるでしょう。",
    ],
    recommendedFor: [
      "リスクを最小限に抑え、オンラインカジノを始めたい方",
      "ジョイカジノのゲームラインナップや雰囲気を、まずはお試しで体験したい方",
      "少額からでも、勝利のチャンスを掴みたい方",
      "信頼性の高いカジノで安心して遊びたい方",
    ],
  },

  faq: [
    {
      question: "この入金不要ボーナスは、誰でも受け取れますか？",
      answer: "いいえ、このボーナスはCasinoTsu を経由してジョイカジノに新規登録されたお客様限定となります。既にジョイカジノのアカウントをお持ちのお客様は対象外となりますので、ご了承ください。",
    },
    {
      question: "ボーナスコード「japacasi」の入力は必須ですか？",
      answer: "はい、この限定ボーナスを受け取るためには、登録時に必ずボーナスコード「japacasi」を正確にご入力いただく必要がございます。",
    },
    {
      question: "入金不要ボーナスは、どのゲームでも使用できますか？",
      answer: "基本的にジョイカジノ内のすべてのゲームでご利用いただけますが、一部のゲーム（例：ライブカジノ、テーブルゲームの一部）では、賭け条件への貢献率が低い、あるいは0%の場合がございます。詳細は必ず利用規約にてご確認ください。",
    },
    {
      question: "ボーナスから得た勝利金は、いつ出金できますか？",
      answer: "ボーナス額の30倍の賭け条件を達成した後、かつ最大出金可能額である¥12,000以内の金額であれば、出金申請が可能となります。出金には本人確認（KYC）が必要となり、通常、申請から数時間から数営業日かかります。",
    },
    {
      question: "ボーナスの有効期限はどれくらいですか？",
      answer: "ボーナスを獲得してから30日間です。この期間内に賭け条件を達成しない場合、ボーナスおよびそこから得られた勝利金はすべて失効いたしますので、ご注意ください。",
    },
    {
      question: "ジョイカジノは安全なカジノですか？",
      answer: "はい、ジョイカジノは2003年より運営されており、キュラソーライセンスを所持しています。SSL暗号化やアンチ・フラウドツールなど、セキュリティ対策も万全に講じられており、安全にプレイできるカジノであると考えられます。",
    },
    {
      question: "その他のプロモーションはありますか？",
      answer: "はい、ジョイカジノでは、初回入金ボーナス（最大¥200,000 + フリースピン200回）をはじめ、ウィークリーキャッシュバック、デイリーボーナスマップ、実績解除システム、ロイヤリティポイントプログラムなど、多岐にわたるプロモーションをご用意しております。スポーツベット用のウェルカムボーナスもございます。",
    },
    {
      question: "出金方法に制限はありますか？",
      answer: "主な出金方法としては、SkrillやNetellerといったE-ウォレット、銀行送金、クレジットカードがご利用いただけます。ただし、ご利用可能な方法は、お客様のアカウント状況によって異なる場合がございます。",
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
    text: "今すぐジョイカジノでボーナスを獲得",
    href: "https://go.casinotsu.com/go/joy-casino?referrer_path=%2Foffers%2Fjoycasino-exclusive",
    buttonText: "ボーナスGET",
  },

  breadcrumbs: [
    { label: "ホーム", href: "https://casinotsu.com/" },
    { label: "オファー", href: "https://casinotsu.com/offers/" },
    { label: "ジョイカジノ限定", href: "https://casinotsu.com/offers/joycasino-exclusive" },
  ],

  metadata: {
    category: "exclusive-offer",
    tags: ["入金不要ボーナス", "ジョイカジノ", "ジャパカジ限定"],
  },
};