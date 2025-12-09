import Link from "next/link";
import type { OfferPageContent } from "@/components/templates/OfferDetailTemplate";

export const shuffleCasinoExclusive: OfferPageContent = {
  hero: {
    title: "【CasinoTsu限定】シャッフルカジノの入金不要ボーナス＆初回入金ボーナス！",
    casino: "シャッフルカジノ",
    casinoSlug: "shuffle-casino",
    description: <>【CasinoTsu限定】ライブカジノもスポーツも遊べる入金不要ボーナス20ドルと、初回入金ボーナス最大2,000ドルをゲット♪\n\n**こちらのボーナスは現在、有効期限切れとなっております。**\n\n<a href="https://gamblingtherapy.org/ja/" target="_blank" rel="noopener noreferrer">Gamblingtherapy.org/ja \| 利用規約に関する詳細につきましては、シャッフルカジノ公式サイトにてご確認くださいますようお願い申し上げます。 \| <Link href="/about/privacy-policy">利用規約が適用されます</Link></>,
    bannerImageUrl: "https://casinotsu.com/images/shuffle_1440x320-1.png",
    promotionalPeriod: {
      startDate: null,
      endDate: null,
      daysRemaining: 0,
      note: "こちらのボーナスは現在、有効期限切れとなっております。",
    },
    lastUpdated: null,
  },

  offerHighlight: {
    bonusAmount: "$20",
    bonusType: "入金不要ボーナス",
    wagering: "40倍",
    validity: "なし",
    maxWinnings: "$200",
    bonusCode: null,
    featured: true,
  },

  tableOfContents: [
    { text: "シャッフルカジノの入金不要ボーナス20ドル！", url: "#no-deposit-bonus" },
    { text: "限定ウェルカムボーナスもゲット", url: "#welcome-bonus" },
    { text: "CasinoTsu限定ボーナスの獲得方法", url: "#how-to-claim" },
    { text: "ボーナス利用規約", url: "#terms-and-conditions" },
    { text: "シャッフルカジノの基本情報", url: "#casino-info<> },
  ],

  intro: <a href="https://casinotsu.com/images/shuffle_960x495-1.png" target="_blank" rel="noopener noreferrer">
    "## シャッフルカジノの入金不要ボーナス20ドル！💰",
    "
![シャッフル限定入金不要ボーナス：コンテントバナー](https://www.casinotsu.com/bonuses/no-deposit)
</>,
    "スポーツベットからオリジナルゲームまで、多種多様なゲームをお楽しみいただけるクリプトカジノ『 **シャッフルカジノ（Shuffle）**』🌟",
    "この度、CasinoTsuをご利用の皆様に、特別なキャンペーンをご用意いたしました。 CasinoTsuからシャッフルカジノにご登録いただくと、",
    <>なんと！ 20ドルの<Link href="/bonuses/no-deposit">入金不要ボーナス</Link>を進呈いたします🥳💝 無料でボーナスを受け取れるこの機会を、ぜひご活用くださいᕦ(ò_óˇ)ᕤ</>,
    "ボーナスの受け取りは大変簡単です。 CasinoTsu経由でシャッフルカジノにご登録後、Eメール認証と本人確認（レベル2）を完了していただく必要がございます💪🌸",
    "これらの手続き完了後、約3営業日以内にアカウントへUSDTでボーナスが付与されるとのことです！",
    "この入金不要ボーナスは、 **CasinoTsu経由でご登録いただいた場合にのみ** 進呈されます。ご登録がお済みでない方は、お早めにこちらからお手続きくださいませ😍👆",
    "メール認証と本人確認手続きも忘れずにお願いいたします( •̀ ω •́ )✧",
    "## 初回入金の2倍も貰える限定ウェルカムボーナスもゲット🎁",
    <>
!<a href="https://casinotsu.com/images/shuffle_960x495.png" target="_blank" rel="noopener noreferrer">Shuffle限定オファー：コンテント・フィーチャーイメージ
</>,
    "シャッフルカジノのCasinoTsu限定ボーナスは、入金不要ボーナスだけではございませんo((⊙﹏⊙))o.！！",
    <>入金不要ボーナスをお楽しみいただいた後には、さらにお得な **200％ <Link href="/bonuses/welcome-bonus">初回入金ボーナス</Link> 最大2,000ドル** をご用意しております(/≧▽≦)/</>,
    "200％ **ボーナス** ということは…。",
    "例えば、1,000ドルを入金された場合、最大で2,000ドルを受け取ることができ、 **合計3,000ドルからスタート** できる計算になります。これは、大変魅力的な **超高還元率オファー** です 💕",
    "この機会に、 **最大限の価値を持つ限定ボーナス** を獲得し、気になるゲームをお得にご満喫ください(๑•̀ㅂ•́)و✧",
  ],

  claimSteps: [
    {
      stepNumber: 1,
      title: "CasinoTsuからシャッフルカジノに登録",
      description: [
        "CasinoTsuを経由して、シャッフルカジノの登録ページへアクセスしてください。",
        "登録フォームに必要事項をご入力ください✅",
      ],
      bullets: [
        "任意のユーザー名",
        "メールアドレス",
        "任意のパスワード",
      ],
      imageUrl: "https://casinotsu.com/images/shuffle-open-1.jpg",
      note: "利用規約とプライバシーポリシーにチェック✅を入れて「登録」をクリックしますと、登録が完了いたします🎉",
    },
    {
      stepNumber: 2,
      title: "レベル2までの本人確認を完了する",
      description: [
        "まず、マイアカウントから設定ページへ移動し、「本人確認」のタブをクリックしてください。",
        "👇レベル①の確認では、以下の本人情報をご入力いただくだけで完了します。",
      ],
      bullets: [
        "氏名",
        "生年月日",
        "住所",
        "職業",
      ],
      imageUrl: "https://casinotsu.com/images/shuffle-KYC.jpg",
      note: "レベル②では、本人確認書類（パスポートや運転免許証など）の画像をアップロードして、「送信」ボタンをクリックしてください✅",
    },
    {
      stepNumber: 3,
      title: "初回入金ボーナスを申請する（初回入金後）",
      description: [
        "入金不要ボーナスを十分にお楽しみいただいた後は、初回入金ボーナスもぜひお受け取りくださいᕦ(ò_óˇ)ᕤ🔥",
        "シャッフルカジノでは、仮想通貨を主とした入金方法をご用意しております。",
        "ビットコインやイーサリアムをはじめ、約15種類の仮想通貨に対応しております。",
      ],
      imageUrl: "https://casinotsu.com/images/shuffle-deposit.jpg",
    },
    {
      stepNumber: 4,
      title: "サポートにボーナス申請を連絡する",
      description: [
        "ご入金が完了いたしましたら、プレイを開始される前に、カスタマーサポートへチャットにてご連絡ください💬",
        "サポート担当者によりボーナスが適用され、獲得完了となります🎉",
      ],
    },
  ],

  characterDialogues: [
    {
      character: "sapomi",
      characterName: "サポ美",
      avatarUrl: "https://casinotsu.com/svg/jp/mascots/happy/sapomi-san.svg",
      message: "もし3営業日を過ぎても入金不要ボーナスがアカウントに反映されない場合は、カスタマーサポートへお問い合わせいただくことをお勧めいたします♪",
    },
    {
      character: "cocomo",
      characterName: "ココモ",
      avatarUrl: "https://casinotsu.com/svg/jp/mascots/happy/cocomo.svg",
      message: "入金不要ボーナスでは、オリジナルゲーム、一部のスロット、スポーツベット、ライブカジノまでお楽しみいただけます🌸\n\n無料でライブカジノまで体験できるのは、大変魅力的ですね！",
    },
    {
      character: "casiko",
      characterName: "カジ子",
      avatarUrl: "https://casinotsu.com/svg/jp/mascots/happy/casiko.svg",
      message: "一度ご入金されますと、入金不要ボーナスを受け取れなくなってしまいますのでご注意ください。必ず、お得な入金不要ボーナスからお楽しみいただいた後、こちらの初回入金ボーナスをご申請ください😊",
    },
    {
      character: "casiko",
      characterName: "カジ子",
      avatarUrl: "https://casinotsu.com/images/casiko.svg",
      message: "本人確認をレベル2まで完了させることで、入金不要ボーナスの受け取りが可能になります。ボーナスは3営業日以内にアカウントへ付与されますので、それまではご入金をお待ちいただくことをお勧めいたします💪",
    },
    {
      character: "bluffy",
      characterName: "ブラッフィー",
      avatarUrl: "https://casinotsu.com/images/bluffy.svg",
      message: "ボーナスがアカウントに適用されるまで、絶対にベットを開始しないでくださいね！\n\nボーナス獲得後は、心ゆくまでお得にゲームをお楽しみください✨",
    },
  ],

  termsAndConditions: {
    heading: "ボーナス利用規約",
    subsections: [
      {
        subheading: "【入金不要ボーナス利用規約】",
        items: [
          { label: "ボーナス額", value: "$20" },
          { label: "賭け条件", value: "ボーナス額の40倍" },
          { label: "出金上限額", value: "ボーナス額の10倍（$200）" },
          { label: "最大ベット額", value: "ボーナス額の10%（$2）" },
          { label: "有効期限", value: "なし" },
          { label: "対象ゲーム", value: "オリジナルゲーム、一部のスロット、スポーツベット、ライブテーブル" },
          { label: "受け取り条件", value: "CasinoTsu経由で新規登録、Eメール認証完了、本人確認レベル2まで完了。付与まで約3営業日（USDTで付与）。" },
        ],
        prohibitions: [
          "禁止ゲーム：アキュミュレーターゲーム、チャレンジ、SHFL宝くじ",
          "ロールオーバー要件を完了するまで、スロットのボーナス購入は禁止されております。",
        ],
        warnings: [
          "入金不要ボーナスご利用中は、ベットに対するVIPリワードおよびアフィリエイトコミッションは2で割られます。",
          "過去に入金ボーナスまたはその他のウェルカムボーナスをご利用になったことのあるユーザー様は対象外となります。",
          "お一人様一回のみ有効となります。",
          "他のキャンペーンとの併用はできません。",
          "シャッフルカジノの一般規約が適用されます。",
        ],
      },
      {
        subheading: "【初回入金ボーナス利用規約】",
        items: [
          { label: "ボーナス", value: "最大$2,000まで (200%)" },
          { label: "最低入金額", value: "$100" },
          { label: "最大入金額", value: "$1,000" },
          { label: "賭け条件", value: "35倍（入金額＋ボーナス額の一体型）" },
          { label: "出金上限額", value: "入金額の5倍" },
          { label: "有効期限", value: "なし（時間制限はありませんが、資金がなくなった時点でロールオーバーも無効となります）" },
          { label: "ベット上限額", value: "ボーナス額の10%（例：$500の入金を行った場合、賭け金の上限は$50となります。）" },
          { label: "対象ゲーム", value: "オリジナルゲーム、一部のスロット、スポーツベッティング、ライブテーブル" },
          { label: "受け取り条件", value: "本人確認レベル2まで完了している必要があり、入金後、サポートへボーナスの申請が必要です。" },
        ],
        prohibitions: [
          "禁止ゲーム：アキュミュレーターゲーム、チャレンジ、SHFL宝くじ",
          "ロールオーバー要件を完了するまで、チャレンジは対象外となります。また、スロットのボーナス購入も禁止されております。",
        ],
        warnings: [
          "お一人様一回のみ有効となります。",
          "他のキャンペーンとの併用はできません。",
          "シャッフルカジノの一般規約が適用されます。",
        ],
      },
    ],
  },
  
  casinoInfo: {
    heading: "シャッフルカジノについて",
    paragraphs: [
      "シャッフルカジノは、2023年2月に設立された比較的新しいオンラインカジノですが、Natural Nine B.V.によって運営され、キュラソーライセンスを取得しているため、信頼性は高いものと認識しております。",
      "**基本情報**\n運営会社: Natural Nine B.V.\nライセンス: キュラソー (Antillephone License Validation)\n設立年: 2023年2月\n暗号化技術: SSL暗号化\n二段階認証（2FA）: 対応\nRNG認証: あり\nProvably Fair技術: Shuffle Originalsゲームで利用可能\n対応言語: 15言語（日本語対応含む）\nソフトウェア: 多数（プロバイダー数は非公開）\n仮想通貨購入オプション: MoonPay, Swapped (Visa, Mastercard, Google Pay, Apple Pay等利用可)",
      "**SHFLトークン**\nシャッフルカジノでは、独自の暗号資産「$SHFL」をご提供しております。このトークンは、カジノ内でのゲームプレイ、ベット、プロモーションへの参加、さらにはステーキングによるボーナス獲得など、多岐にわたるユーティリティを有しています。ステーキング報酬システムも用意されており、トークン保有者はさらなる特典を受け取ることが可能です。",
      "**プロモーション**\nウェルカムボーナス以外にも、デイリーログインボーナス、デイリー＆ウィークリーレース、メール応募オファー、充実したVIPプログラムなど、様々なプロモーションをご用意しております。",
      "**カスタマーサポート**\nプレイヤーの皆様が安心してカジノをお楽しみいただけるよう、カスタマーサポート体制も万全を期しております。ライブチャットは24時間365日対応、Eメール（support@shuffle.com）やヘルプセンター/FAQもご利用いただけます。サポートは英語および日本語でのお問い合わせが可能です。",
      "**責任あるギャンブル**\nシャッフルカジノは、プレイヤーの皆様の安全と健全なギャンブル体験を最優先に考えており、自己排除機能、ベット・損失制限、ギャンブル依存症支援団体へのリンク、啓発ツールの提供を行っております。",
      "**技術的特徴**\nProvably Fair技術を「Shuffle Originals」ゲームに採用し、透明性と公平性を確保しています。また、ゲームのランダム性は第三者機関により認証済みです。ウェブサイトはモバイルデバイスに最適化されており、洗練されたミニマルなデザインで快適なプレイをサポートします。",
    ],
    rating: null,
    officialUrl: null,
  },

  targetGames: {
    heading: "シャッフルカジノで遊べるゲーム",
    description: "シャッフルカジノは、その膨大なゲーム数でプレイヤーを魅了します。",
    eligibleGames: [
      "総ゲーム数: 10,000種類以上",
      "スロット: 9,000種類以上 (様々なプロバイダーより提供)",
      "ライブカジノ: Evolution Gaming, Pragmatic Play など",
      "スポーツブック: 数多くのスポーツおよびeスポーツを網羅",
    ],
    recommendedGames: [
      { name: "Shuffle Originals (Crash, Plinko, Dice, Mines, Limbo など)", rtp: "最大99%" },
    ],
  },
  
  paymentMethods: {
    heading: "シャッフルカジノの入出金方法",
    depositMethods: [
      "対応仮想通貨: Bitcoin, Ethereum, Litecoin, Dogecoin, SHFL, USDT, USDC, XRP, TRX, SOL, SHIB, BNB, TON, BONK, WIF, MATIC, AVAX (15～17種類)",
      "法定通貨購入: MoonPay, Swapped を利用して、Visa, Mastercard, Google Pay, Apple Pay などで仮想通貨をご購入いただけます。",
    ],
    withdrawalMethods: [
      "対応仮想通貨: 入金と同様",
      "最低出金額: $50",
      "出金手数料: ご利用になる仮想通貨によって変動いたします。",
      "処理速度: 数分～数時間（仮想通貨のネットワーク状況によります）",
      "スポーツベット最大勝利金: $500,000",
    ],
    notes: [],
  },
  
  mobileCompatibility: {
    heading: "モバイル対応",
    description: [
      "シャッフルカジノは、ネイティブアプリを提供しておりませんが、ウェブサイトは完全にモバイル最適化されております。",
      "スマートフォンやタブレットのブラウザからアクセスいただければ、PC版と変わらないスムーズなゲーム体験が可能です。",
    ],
  },

  strategy: {
    heading: "攻略法・注意点",
    subsections: [
      {
        subheading: "ボーナス利用時の一般注意点",
        tips: [
          "入金不要ボーナスを先に利用する：一度ご入金されますと、入金不要ボーナスを受け取れなくなります。必ず入金不要ボーナスからお楽しみください。",
          "ボーナス適用まで待つ：初回入金ボーナス申請後、サポートによってボーナスがアカウントに適用されるまで、絶対にベットを開始しないでください。",
        ],
      },
      {
        subheading: "入金不要ボーナス利用時の注意点",
        tips: [
          "最大ベット額は2ドルとなります。",
          "最大出金可能額は200ドルです。",
        ],
        warnings: [
          "禁止ゲームとして、アキュミュレーターゲーム、チャレンジ、宝くじが指定されています。",
          "入金不要ボーナスをご利用中の間は、ベットに対するVIPリワードおよびアフィリエイトコミッションが半額（2で割られる）となります。",
        ],
      },
    ],
  },

  summary: {
    heading: "まとめ",
    paragraphs: [
      "シャッフルカジノは、2023年2月に設立された比較的新しいオンラインカジノですが、Natural Nine B.V.によって運営され、キュラソーライセンスを取得しているため、信頼性は高いものと認識しております。",
      "CasinoTsu経由でご登録いただきますと、通常では得られない特別な入金不要ボーナス20ドルと、最大2,000ドルの200%初回入金ボーナスをご提供いたします。これらのボーナスは、スロット、ライブカジノ、スポーツベットなど、幅広いゲームでご利用いただけます。",
      "仮想通貨に特化した決済システム、独自のSHFLトークン、充実したプロモーション、そして責任あるギャンブルへの取り組みなど、プレイヤーの皆様にとって魅力的な要素が数多くございます。",
      "さらに、これらのボーナスには有効期限がございません！ご自身のペースで、ゆっくりとお楽しみいただけるのは大変稀有な機会かと存じます😱",
      "すでに仮想通貨に慣れ親しんでいらっしゃる方はもちろん！まだ仮想通貨をご利用になったことがない方も、この機会にぜひ仮想通貨デビューを検討されてはいかがでしょうか？",
      "**ご注意点:**\n- 現在、提供されておりますボーナスは「停止中」となっております。ご利用可能時期につきましては、シャッフルカジノ公式サイト等でご確認くださいますようお願い申し上げます。\n- 一部の国からのアクセスには制限がある可能性がございます。",
    ],
    recommendedFor: [
      "仮想通貨を積極的にご利用になりたいプレイヤー様",
      "豊富なゲームラインナップをお楽しみになりたいプレイヤー様",
      "高額な初回入金ボーナスを狙いたいプレイヤー様",
      "ユニークなオリジナルゲームをプレイしたいプレイヤー様",
      "信頼性の高いライセンスを持つカジノをお探しの方",
    ],
  },

  cta: {
    text: "今すぐシャッフルカジノでお得なボーナスをゲット！",
    href: "https://go.casinotsu.com/go/shuffle-casino",
    buttonText: "シャッフルカジノに登録！",
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