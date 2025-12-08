import Link from "next/link";
import type { OfferPageContent } from "@/components/templates/OfferDetailTemplate";

export const duelbitsExclusive: OfferPageContent = {
  hero: {
    title: "デュエルビッツの新規限定フリースピン500回分＋テレグラムでアマギフ3,000円分✨",
    casino: "Duelbits",
    casinoSlug: "duelbits",
    description: "賭け条件無し！太っ腹フリースピン＆Amazonギフト券をGETしましょう！",
    bannerImageUrl: "https://casinotsu.com/images/duelbits_1440x320-1.png",
    promotionalPeriod: {
      startDate: "2025-07-29",
      endDate: "2025-12-31",
      daysRemaining: 104,
    },
  },

  offerHighlight: {
    bonusAmount: "最大500回フリースピン + 3,000円分Amazonギフト券",
    bonusType: "入金フリースピン",
    wagering: "なし",
    validity: "48時間",
    bonusCode: "Japacasi",
    featured: true,
  },

  tableOfContents: [
    { text: "フリースピン＆Amazonギフト券プレゼント詳細", url: "#offer-details" },
    { text: "利用規約", url: "#terms-and-conditions" },
    { text: "獲得方法", url: "#how-to-claim" },
    { text: "デュエルビッツ基本情報", url: "#casino-info" },
    { text: "よくある質問", url: "#faq" },
  ],

  intro: [
    "CasinoTsu に新しく仲間入りした、人気急上昇中の注目カジノ『 Duelbits（デュエルビッツ）』✨",
    "非常に有名な、 元サッカー選手のルイス・スアレス氏⚽️ や、 UFC選手のコナー・マクレガー氏 とスポンサー契約していたこともあるクリプトカジノ😆",
    "そんな、Duelbits に今 CasinoTsu 経由で登録し、20ドル以上ご入金の上、対象スロットをプレイされますと、 合計500回の フリースピン が獲得可能 です！(/≧▽≦)/",
    "…しかも、 フリースピンから得た勝利金には 賭け条件なし ！！🙌",
    "対象スロットはなんと、 Pragmatic Play 社の 超人気 オンラインスロット ばかりです♪",
    "30ドル以上ご入金された場合は、Duelbits 公式テレグラムから申請いただくことで、さらに「 Amazonギフト券3,000円分 のプレゼント」がもらえるという、大変太っ腹なサービスもございます！😲😍",
    "これは、ぜひ30ドル以上ご入金いただき、両方の特典をゲットされることをお勧めいたしますᕦ(ò_óˇ)ᕤ🔥",
  ],
  
  offerDetails: {
    heading: "オファー詳細：フリースピン獲得ステップ",
    table: {
      headers: ["リワード順番", "賭け条件達成額", "獲得フリースピン回数", "フリースピン対象機種"],
      rows: [
        { reward: "リワード1", wager: "50ドル", spins: "50スピン", game: "Sugar Rush", gameSlug: "/slots/sugar-rush" },
        { reward: "リワード2", wager: "500ドル", spins: "150スピン", game: "Gates of Olympus", gameSlug: "/slots/gates-of-olympus" },
        { reward: "リワード3", wager: "1,000ドル", spins: "300スピン", game: "Sweet Bonanza", gameSlug: "/slots/sweet-bonanza" },
      ],
    },
    note: "※獲得フリースピンが付与されると、マイリワードに自動的に次回分が表示となります。"
  },

  claimSteps: [
    {
      isHeading: true,
      title: "フリースピン獲得手順",
      description: ["まずはフリースピンの獲得方法からスタートです😎🌟"],
    },
    {
      stepNumber: 1,
      title: "アクセス",
      description: [
        "CasinoTsu の当ページ、もしくはレビューページからDuelbitsにアクセスしてください💨",
      ],
    },
    {
      stepNumber: 2,
      title: "登録",
      description: [
        "Duelbits のページが開きましたら、右上にある「 登録」ボタンをクリックしてください！",
      ],
      imageUrl: "https://casinotsu.com/images/duelbits-register-login2.jpg",
    },
    {
      stepNumber: 3,
      title: "情報入力",
      description: [
        "表示された登録フォームに従い、以下の情報を入力してください。",
      ],
      bullets: [
        "任意のユーザー名",
        "メールアドレス",
        "パスワード",
      ],
      imageUrl: "https://casinotsu.com/images/Screenshot-2025-05-19-at-10.24.17-1.jpg",
      note: "入力後、再度「登録」をクリックしますと、アカウント登録が完了いたします🎉",
    },
    {
      stepNumber: 4,
      title: "メール認証",
      description: [
        "ご登録いただいたメールアドレスに届いている メールアドレス認証を完了 してください✅",
      ],
    },
    {
      stepNumber: 5,
      title: "初回入金",
      description: [
        "入金ページ（キャッシャー）にて、初回入金を完了 してください。",
      ],
    },
    {
      stepNumber: 6,
      title: "リワード1受け取り",
      description: [
        "マイページに表示されるフリースピン50回の オファーを受け入れてください。対象スロットにて 50ドル を賭けて、 Sugar Rush50回分 のフリースピンを獲得！",
      ],
    },
    {
      stepNumber: 7,
      title: "リワード2受け取り",
      description: [
        "マイページに表示されるフリースピン150回の オファーを受け入れてください。対象スロットにて 500ドル を賭けて、 Gates of Olympus150回分 のフリースピンを獲得！！",
      ],
    },
    {
      stepNumber: 8,
      title: "リワード3受け取り",
      description: [
        "マイページに表示されるフリースピン300回の オファーを受け入れてください。対象スロットにて 1000ドル を賭けて、 Sweet Bonanza300回分 のフリースピンを獲得！！！",
      ],
    },
    {
      isHeading: true,
      title: "Amazonギフト券獲得手順",
      description: ["それでは、Amazonギフト券の獲得方法も続けてご紹介いたしますね(｡･∀･)ﾉﾞ♪"],
    },
    {
      stepNumber: 1,
      title: "テレグラムへアクセス",
      description: [
        "Duelbits のプロモーションページから、テレグラムのページを探し、「 公式テレグラムに登録」のボタンをクリックしてください！",
      ],
      imageUrl: "https://casinotsu.com/images/duelbits-how-to-get-amazon-gift5.jpg",
    },
    {
      stepNumber: 2,
      title: "チャンネル参加",
      description: [
        "Duelbits の公式テレグラムチャンネルのリンクが表示されますので、「 JOIN CHANNEL」のボタンをクリックしてください🌟",
      ],
      imageUrl: "https://casinotsu.com/images/duelbits-how-to-get-amazon-gift6.jpg",
      note: "この時点でまだテレグラムのアカウントをお持ちでない方は、先に進めませんので、先にテレグラムのアカウントを作成しておくことをお勧めいたします😊💡",
    },
    {
      stepNumber: 3,
      title: "申請",
      description: [
        "Duelbits の公式テレグラムチャンネルにご参加いただけましたら、チャンネル画面左下に表示されている「 吹き出しマーク💬」をクリックして、Amazonギフト券を申請しましょう( •̀ ω •́ )✧",
      ],
      imageUrl: "https://casinotsu.com/images/duelbits-how-to-get-amazon-gift8.jpg",
    },
    {
      stepNumber: 4,
      title: "情報送信",
      description: [
        "メッセージ入力欄に、以下の3つの情報を入力＆送信していただければ、申請完了 です🙆‍♀️✨",
      ],
      bullets: [
        "ボーナスコード: Japacasi",
        "ユーザーID",
        "Duelbits に登録したメールアドレス",
      ],
      note: "あとは、Amazonギフト券がご登録のメールアドレスに届くのをお待ちください！(❁´◡`❁)🎁💖",
    },
  ],

  characterDialogues: [
    {
      character: "cocomo",
      characterName: "ココモ",
      avatarUrl: "https://casinotsu.com/images/cocomo.svg",
      message: "Duelbits には、さらに「公式テレグラムにユーザー情報を送信することでもらえる 5ドルのボーナス」もございますが、その5ドルのボーナスも、CasinoTsu 限定のAmazonギフト券も、 両方申請可能 となっております♪ 詳しくは、 Duelbitsのレビュー ページにてご確認ください👀✅",
    },
    {
      character: "casiko",
      characterName: "カジ子",
      avatarUrl: "https://casinotsu.com/images/casiko.svg",
      message: "初回入金の前には、必ずメールアドレス認証をお忘れなく😉✅",
    },
    {
      character: "cocomo",
      characterName: "ココモ",
      avatarUrl: "https://casinotsu.com/images/cocomo.svg",
      message: "Amazonギフト券3,000円分も獲得されたい場合は、初回入金で30ドル以上ご入金いただくのがおすすめです！",
    },
    {
      character: "sapomi-san",
      characterName: "サポ美",
      avatarUrl: "https://casinotsu.com/images/sapomi-san.svg",
      message: "ユーザーIDは、アカウントページ内の「設定」からご確認いただけますよ！",
    },
  ],

  termsAndConditions: {
    heading: "デュエルビッツのフリースピン・Amazonギフト券利用規約",
    subsections: [
      {
        subheading: "【フリースピン利用規約】",
        items: [
          { label: "総フリースピン数", value: "合計500回" },
          { label: "勝利金の賭け条件", value: "なし（キャッシュとして直接アカウントに反映）" },
          { label: "フリースピン有効期限", value: "付与後48時間" },
          { label: "賭け条件達成期限", value: "各ステップの賭け条件は7日間以内に完了する必要があります。未達成の場合、オファーは無効となります。" },
          { label: "スピンバリュー", value: "1スピンあたり0.2ドル" },
          { label: "事前認証", value: "メールアドレスの認証が必須です。" },
          { label: "受け取り方法", value: "マイリワードにて、各オファーの受け取り操作が必要です。" },
          { label: "対象者", value: "CasinoTsu 経由で登録した新規登録者のみが対象です。" },
          { label: "一般規約", value: "Duelbitsの一般利用規約が適用されます。" },
        ],
      },
      {
        subheading: "【Amazonギフト券利用規約】",
        items: [
          { label: "プレゼント内容", value: "Amazonギフト券 3,000円分" },
          { label: "ボーナスコード", value: "Japacasi" },
          { label: "申請方法", value: "Duelbits 公式テレグラムアカウントからの申請が必要です。" },
          { label: "申請時に必要な情報", value: "ボーナスコード: Japacasi, ユーザーID, Duelbits に登録したメールアドレス" },
          { label: "対象者", value: "CasinoTsu 経由で登録した新規登録者のみが対象です。" },
        ],
      },
    ],
  },
  
  casinoInfo: {
    heading: "デュエルビッツの基本情報・安全性",
    paragraphs: [
      "Duelbitsは2020年に設立されたクリプトカジノで、キュラソー（Curaçao）ゲーミングライセンスを取得し合法的に運営されています。ウェブサイト全体でSSL暗号化技術を使用し、二段階認証（2FA）も設定可能なため、プレイヤーの個人情報や取引データは安全に保護されています。",
      "「Ace's Rewards」というロイヤリティプログラムがあり、レベルに応じて最大12.5%のレーキバックやレベルアップボーナスが提供されます。また、コナー・マクレガー氏やルイス・スアレス氏といった著名人とのスポンサー契約実績もあり、信頼性が高く人気のある仮想通貨ギャンブルサイトとして認識されています。",
    ],
    officialUrl: "https://go.casinotsu.com/go/duelbits",
    details: [
      { heading: "運営会社とライセンス", points: ["運営会社: Liquid Entertainment N.V.", "設立年: 2020年", "ライセンス: キュラソー（Curaçao）ゲーミングライセンス"] },
      { heading: "安全性について", points: ["SSL暗号化: プレイヤー様の個人情報や取引データを保護", "二段階認証（2FA）: アカウントのセキュリティを強化", "証明可能な公正性（Provably Fair）: 結果の公正性をプレイヤー自身が確認可能", "年齢制限: 18歳以上"] },
      { heading: "VIPプログラム「Ace's Rewards」", points: ["レーキバック率: 最大12.5%（初期は約5%）", "レベルアップボーナス: ロイヤリティレベルが上がるごとに付与", "リロードボーナス: VIPティアに応じて提供"] },
      { heading: "その他のプロモーション", points: ["デイリー・ウィークリートーナメント", "月間プレゼント企画: 「Duelbits TV」で毎月50,000ドル", "特別プレゼント: Tesla Cybertruckのプレゼント抽選など", "UFCジャックポット", "EPL Pick 6 Freeroll"] },
      { heading: "カスタマーサポート", points: ["対応時間: 24時間365日対応", "対応品質: 一般的に質は高いが、返信が遅れる場合もあり"] },
      { heading: "追加プロモコード情報", points: ["利用可能コード: infotoplist, vipgrinders など", "利用時期: 初回ご入金前に入力が必要", "特典: Ace's Rewardsへのアクセスや、強化されたレーキバック率など"] },
    ],
  },
  
  targetGames: {
    heading: "デュエルビッツのゲームラインナップ",
    description: "Duelbitsでは、フリースピン対象スロット以外にも、多様なゲームが楽しめます。",
    eligibleGames: [
      "ライブカジノ",
      "オリジナルゲーム (Crash, Dice Duels, Duel Poker)",
      "インスタントウィンゲーム",
      "スポーツベッティング (30種類以上のスポーツに対応)",
    ],
    recommendedGames: [
      { name: "Sugar Rush" },
      { name: "Gates of Olympus" },
      { name: "Sweet Bonanza" },
    ],
  },

  paymentMethods: {
    heading: "デュエルビッツの入出金方法",
    depositMethods: ["Bitcoin (BTC)", "Ethereum (ETH)", "Litecoin (LTC)", "Dogecoin (DOGE)", "Visa", "MasterCard"],
    withdrawalMethods: ["Bitcoin (BTC)", "Ethereum (ETH)", "Litecoin (LTC)", "Dogecoin (DOGE)", "Visa", "MasterCard"],
    notes: [
      "入出金限度額: 上限額の設定はございません。",
      "出金処理速度: ほとんどの出金は即時処理されます。",
      "KYC（本人確認）: ご入金前にKYC認証が必須となります。これにより、匿名でのプレイはできません。",
    ],
  },
  
  summary: {
    heading: "30ドル以上の入金で、フリースピンもAmazonギフト券もGET🎁✨",
    paragraphs: [
      "新規プレイヤー様限定で獲得できるウェルカムボーナスから、ほぼ50％のレーキバックなど、既に大変お得なDuelbits(❁´◡`❁)",
      "さらに、CasinoTsu からのご登録＆ベットで 最大500回分 の 賭け条件一切なしのフリースピン がもらえるのは、大変魅力的ですね😎💰",
      "し・か・も！ 公式テレグラムでユーザー情報、ボーナスコードを送信していただくだけで、さらに Amazonギフト券3,000円分 もプレゼント中～っ（30ドル以上の入金が必要！）🎁💖",
      "このような大変お得な機会が重なることは滅多にございませんので、ぜひお早めにご利用くださいませ💪💪💨",
    ],
  },

  faq: [
    {
      question: "Duelbits の賭け条件無しフリースピンは、入金＆ベットで自動的にアカウントに反映されるのですか？",
      answer: "賭け条件無しフリースピンをご利用いただくためには、「マイリワード」のページからお受け取りが必要となります。",
      character: "oka-kyoju",
      characterName: "Oka 教授",
      avatarUrl: "https://casinotsu.com/images/oka-kyoju.svg",
    },
    {
      question: "Duelbits のAmazonギフト券3,000円プレゼントは、申請してからどのくらいで届きますか？",
      answer: "Duelbits のAmazonギフト券プレゼントは、通常、申請が完了してから72時間以内に送信されるとのことです。",
      character: "oka-kyoju",
      characterName: "Oka 教授",
      avatarUrl: "https://casinotsu.com/images/oka-kyoju.svg",
    },
    {
      question: "Duelbits に入金不要ボーナスはありますか？",
      answer: "Duelbits では入金不要ボーナスは現在提供されておりません。その他のプロモーションをご利用ください。",
      character: "oka-kyoju",
      characterName: "Oka 教授",
      avatarUrl: "https://casinotsu.com/images/oka-kyoju.svg",
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
    text: "今すぐデュエルビッツで早速プレイ！",
    href: "https://go.casinotsu.com/go/duelbits",
    buttonText: "ボーナスGET",
  },

  breadcrumbs: [
    { label: "ホーム", href: "https://casinotsu.com/" },
    { label: "オファー", href: "https://casinotsu.com/offers/" },
    { label: "Duelbits限定", href: "https://casinotsu.com/offers/duelbits-exclusive" },
  ],

  metadata: {
    category: "exclusive-offer",
    tags: ["フリースピン", "賭け条件なし", "デュエルビッツ", "Amazonギフト券", "クリプトカジノ"],
  },
};