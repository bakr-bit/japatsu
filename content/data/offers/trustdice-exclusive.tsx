import Link from "next/link";
import type { OfferPageContent } from "@/components/templates/OfferDetailTemplate";

export const trustdiceExclusive: OfferPageContent = {
  hero: {
    title: "【ジャパカジ限定】トラストダイスで入金不要ボーナス最大25ドルをゲット！",
    casino: "Trust Dice",
    casinoSlug: "trustdice",
    description: "ジャパカジよりトラストダイスへ新規ご登録いただいたお客様に、通常のボーナスに加え、最大25ドルの追加入金不要ボーナスを進呈いたします。ご入金の必要はございません。毎日ログインしてプレイしていただくことで、ビットコインでボーナスを受け取れるチャンスがございます！",
    bannerImageUrl: "https://casinotsu.com/images/Trustdice_1440x320.png",
  },

  offerHighlight: {
    bonusAmount: "最大$25",
    bonusType: "入金不要ボーナス",
    wagering: "5倍",
    validity: "登録後5日間",
    maxWinnings: "最大$25",
    bonusCode: "不要",
    featured: true,
  },

  tableOfContents: [
    { text: "ジャパカジ限定！入金不要ボーナス最大25ドル", url: "#offer-info" },
    { text: "入金不要ボーナス獲得方法", url: "#how-to-claim" },
    { text: "ボーナス利用規約・条件", url: "#terms-and-conditions" },
    { text: "トラストダイスについて", url: "#casino-info" },
    { text: "対象ゲーム", url: "#target-games" },
    { text: "攻略法・注意点", url: "#strategy" },
    { text: "まとめ", url: "#summary" },
    { text: "よくある質問（FAQ）", url: "#faq<> },
  ],

  intro: [
    "2018年に設立されたトラストダイス（Trust Dice）は、 [**仮想通貨カジノ**](https://www.casinotsu.com/crypto) の中でも急速に人気を集めております。✨",
    "仮想通貨でのプレイはもちろん、独自の仮想通貨 **TXTトークンを活用したマイニング機能** を備えた、次世代の投資型カジノとしても注目されています。(≧▽≦)",
    <>そのような魅力溢れる [](https://casinotsu.com/reviews/trustdice)<strong>トラストダイス</strong> から、ジャパカジユーザー様限定の特別な [](https://casinotsu.com/bonuses/no-deposit)<strong>入金不要ボーナス</strong> を獲得いたしました！🎉💖",
    "このボーナスについて、詳しくご案内させていただきます。",
  ],

  claimSteps: [
    {
      stepNumber: 1,
      title: "ジャパカジ限定リンクからトラストダイスに登録",
      description: [
        "画面右上にある **『登録』ボタンをクリック** してください。",
      ],
      imageUrl: "https://casinotsu.com/images/trustdice-exclusive-offer-register.png",
    },
    {
      stepNumber: 2,
      title: "必要情報を入力",
      description: [
        "ユーザー名、メールアドレス、パスワードをご入力ください。",
      ],
    },
    {
      stepNumber: 3,
      title: "利用規約に同意",
      description: [
        "利用規約にチェックを入れ、プロモーションメールの受信を希望される場合はそちらにもチェックを入れてください。",
      ],
    },
    {
      stepNumber: 4,
      title: "アカウント作成",
      description: [
        "「アカウントを作成」ボタンをクリックして登録を完了してください。",
      ],
      imageUrl: "https://casinotsu.com/images/trustdice-exclusive-offer-how-to-sign-up.png",
    },
    {
      stepNumber: 5,
      title: "メール認証",
      description: [
        "ご登録いただいたメールアドレスに届く認証メール内のリンクをクリックして、アカウント認証を完了させてください。💪",
      ],
      imageUrl: "https://casinotsu.com/images/trustdice-exclusive-offer-how-to-sign-up-2.png",
    },
    {
      stepNumber: 6,
      title: "ログインとボーナスの確認",
      description: [
        "認証後、ログインページへ移動し、そのままログインしてください。初日分のボーナスは、『 **無料のウェルカムボーナス**』としてボーナスページから自動的にご確認いただけるようになっております。👀",
      ],
      imageUrl: "https://casinotsu.com/images/trust-dice-exclusive-offer-bonus-page.png",
    },
    {
      stepNumber: 7,
      title: "毎日のログインとプレイでボーナス獲得",
      description: [
        "ご登録から **5日間連続でログイン＆ゲームプレイ** を行っていただくことで、残りのボーナスを受け取ることができます。🎁🎉",
      ],
      note: "💡 **重要:** ログイン＆プレイを1日でもスキップされますと、それ以降のボーナスは受け取れなくなります😢 毎日忘れずにログイン＆プレイして、全てのボーナスを確実にゲットしましょう！",
    },
  ],

  characterDialogues: [],

  termsAndConditions: {
    heading: "入金不要ボーナス利用規約",
    items: [
      { label: "ボーナス額", value: "最大$25相当", note: "毎日ランダムな額（1ドル～5ドル相当）がビットコイン（BTC）で進呈されます。" },
      { label: "獲得条件", value: "登録日より連続して5日間、毎日ゲームをプレイする必要があります。" },
      { label: "賭け条件", value: "5倍", note: "ご入金後にこのボーナスを利用して得られた勝利金に適用されます。" },
      { label: "有効期限", value: "登録後5日間", note: "連続してログイン＆プレイいただけなかった場合、残りのボーナスは全て無効となります。" },
      { label: "対象ゲーム", value: "「ビットコインサイコロ（Bitcoin Dice）」と「ビットコインクラッシュ（Bitcoin Crash）」の2種類のみ" },
      { label: "勝利金の出金上限額", value: "最大$25との情報あり", note: "正確な条件については公式サイトでご確認ください。" },
      { label: "ボーナスコード", value: "不要" },
    ],
    prohibitions: [],
    warnings: [
      "上記2ゲーム以外でプレイするには、ご入金が必要となります。",
      "一部の情報源によると賭け条件がないとされていますが、本記事掲載時点での利用規約ではご入金後の出金条件は5倍と記載されています。必ずプレイ前に公式サイトでご確認ください。",
    ],
  },

  casinoInfo: {
    heading: "トラストダイスについて",
    paragraphs: [
      "トラストダイスは、Satoshi Gaming Group N.V. によって運営されており、GCB（Gaming Control Board）より発行されたライセンス（番号: OGL/2024/664/0280）に基づいて運営されております。2018年の設立以来、仮想通貨に特化したサービスと、独自のTXTトークンマイニング機能により、プレイヤーの皆様から高い信頼を得ております。ビットコインをはじめとする多様な仮想通貨に対応しており、迅速かつ無料での出金処理も大きな魅力でございます。",
    ],
    officialUrl: "https://go.casinotsu.com/go/trustdice",
  },

  targetGames: {
    heading: "対象ゲーム：豊富なゲームでボーナスを活用！",
    description: "トラストダイスでは、1500種類以上の豊富なゲームをご提供しております。限定入金不要ボーナスは、「ビットコインサイコロ」と「ビットコインクラッシュ」でのみご利用いただけます。",
    eligibleGames: [
      "ビットコインサイコロ (Bitcoin Dice)（入金不要ボーナス対象）",
      "ビットコインクラッシュ (Bitcoin Crash)（入金不要ボーナス対象）",
      "スロット",
      "ライブカジノ",
      "テーブルゲーム",
      "Plinko",
      "スポーツベッティング",
      "パチンコ",
    ],
    recommendedGames: [],
  },

  paymentMethods: {
    heading: "入出金方法：仮想通貨でスムーズな取引",
    depositMethods: ["ビットコイン (BTC)", "テザー (USDT)", "イーサリウム (ETH)", "その他多数のアルトコイン"],
    withdrawalMethods: ["ビットコイン (BTC)", "テザー (USDT)", "イーサリウム (ETH)", "その他多数のアルトコイン"],
    notes: [
      "手数料は原則無料でご提供しております。",
      "即時出金が可能で、迅速な資金移動を実現しております。",
    ],
  },

  mobileCompatibility: {
    heading: "モバイル対応：いつでもどこでもカジノ体験",
    description: [
      "トラストダイスは、スマートフォンやタブレットといったモバイルデバイスに完全対応しております。",
      "特別なアプリのダウンロードは不要で、お使いのデバイスのウェブブラウザから直接アクセスし、快適にプレイいただけます。インターフェースはモバイル画面に最適化されており、PC版と同様の機能とスムーズな操作性を実現しております。",
    ],
  },

  strategy: {
    heading: "攻略法・注意点：ボーナスを最大限に活用する戦略",
    subsections: [
      {
        subheading: "ボーナス活用法",
        tips: [
          "リスクフリーで探索: まずは入金不要ボーナスをご利用いただき、トラストダイスのゲーム性やインターフェースをリスクなしでご体験ください。",
          "フォーセットとログインボーナス: 毎日ご利用いただける仮想通貨フォーセットやログインボーナスも活用し、資金を少しずつ増やしていきましょう。",
          "ウェルカムボーナスとの連携: 入金不要ボーナスでカジノに慣れた後は、豪華なウェルカムボーナスをご利用いただくことをご検討ください。",
          "トーナメント・コンテストへの参加: 定期的に開催されるダイスやクラッシュゲームのウィークリーコンテストに参加し、追加の賞金を獲得するチャンスを狙いましょう。",
        ],
      },
      {
        subheading: "賭け条件クリア戦略",
        tips: [
          "対象ゲームの理解: 入金不要ボーナスは「サイコロ」と「クラッシュ」に限定されております。これらのゲームの特性をご理解いただき、効率的にプレイしましょう。",
          "出金条件の確認: ご入金後のボーナスには5倍の出金条件が適用されます。出金条件をクリアしやすいゲーム選択やベット戦略を立てることが重要です。",
          "ベット額の調整: 一度に大きなベットをするのではなく、着実にベット額を積み重ねていくことで、リスクを抑えながら出金条件達成を目指しましょう。",
        ],
      },
      {
        subheading: "注意事項",
        tips: [
          "連続プレイの必須性: ご登録から5日間連続でログイン＆プレイされないと、残りのボーナスが無効となります。",
          "対象ゲームの限定: 入金不要ボーナスでプレイできるのは「ビットコインサイコロ」と「ビットコインクラッシュ」のみです。",
          "ボーナス条件の確認: ボーナスに関する規約は変更される可能性がございます。プレイ前には必ず公式サイトで最新の利用規約をご確認ください。",
        ],
      },
    ],
  },

  similarOffers: {
    heading: "トラストダイスがお好きな方におすすめのカジノもチェック",
    offers: [
      {
        casino: "Bitcasino",
        casinoSlug: "bitcasino-io",
        feature: "トラストダイスと同様の仮想通貨特化型カジノ。",
        offerLink: "https://casinotsu.com/reviews/bitcasino-io",
      },
      {
        casino: "Stake Casino",
        casinoSlug: "stake",
        feature: "トラストダイスと同様の仮想通貨特化型カジノ。",
        offerLink: "https://casinotsu.com/reviews/stake",
      },
    ],
  },

  summary: {
    heading: "まとめ：ボーナス活用で仮想通貨カジノを体験！",
    paragraphs: [
      "ジャパカジ限定の入金不要ボーナス（最大25ドル相当）は、トラストダイスを無料でご体験いただくには絶好の機会でございます。ビットコインでボーナスが受け取れる点や、毎日ログイン＆プレイで獲得できるというユニークなシステムは、特に仮想通貨ユーザー様にとって魅力的でしょう。",
      "この機会に、人気の「ビットコインクラッシュゲーム」などで遊んでみてはいかがでしょうか？無料ボーナスで資金を増やし、その動向をチェックしながらお楽しみいただけます。💹🎁",
      "ぜひ、この限定オファーをご活用いただき、トラストダイスのユニークなゲーム体験をお楽しみください！",
    ],
    recommendedFor: [
      "仮想通貨カジノをリスクフリーで試してみたい方",
      "ユニークなボーナスシステムに興味がある方",
      "「ビットコインサイコロ」や「ビットコインクラッシュ」で遊びたい方",
      "TXTトークンマイニングなど投資型カジノに興味がある方",
    ],
  },

  faq: [
    {
      question: "トラストダイスの入金不要ボーナス25ドル相当を獲得する際の注意点はありますか？",
      answer: "はい、いくつか重要な点がございます。まず、このボーナスはジャパカジ限定ですので、必ずジャパカジのリンクを経由してトラストダイスに初回登録してください。次に、ボーナスを最大限（最大25ドル相当）お受け取りいただくためには、ご登録後5日間連続でログインしてゲームをプレイしていただく必要がございます。1日でもスキップされますと、残りのボーナスは無効となりますのでご注意ください。また、ボーナスでプレイできるゲームは「ビットコインサイコロ」と「ビットコインクラッシュ」に限定されております。",
    },
    {
      question: "トラストダイスに初回入金ボーナスはありますか？",
      answer: "はい、ございます！✨ トラストダイスでは、初回から3回目のご入金までを対象とした、大変お得なウェルカムボーナスパッケージをご用意しております。これらを合計いたしますと、最大で3BTC（ビットコイン）相当のボーナスを獲得できます。詳細につきましては、トラストダイスのレビューページにてご確認ください！",
    },
    {
      question: "トラストダイスのカスタマーサポートは日本語で対応していますか？",
      answer: "はい、日本語でのカスタマーサポートを24時間ご提供しております。特に、日本人スタッフが対応する時間は、月曜日から木曜日は7時から15時まで、金曜日と土曜日は7時から21時までとなっております。それ以外の時間帯は、自動翻訳機などを活用して外国籍スタッフが日本語で対応いたします。",
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
    text: "今すぐトラストダイスでボーナスを獲得",
    href: "https://go.casinotsu.com/go/trustdice:trustdice-exclusive?referrer_path=%2Foffers%2Ftrustdice-exclusive",
    buttonText: "ボーナスGET",
  },

  breadcrumbs: [
    { label: "ホーム", href: "https://casinotsu.com/" },
    { label: "オファー", href: "https://casinotsu.com/offers/" },
    { label: "トラストダイス限定", href: "https://casinotsu.com/offers/trustdice-exclusive" },
  ],

  metadata: {
    category: "exclusive-offer",
    tags: ["入金不要ボーナス", "トラストダイス", "仮想通貨カジノ", "ビットコイン", "ジャパカジ限定"],
  },
};