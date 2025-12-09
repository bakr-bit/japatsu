import Link from "next/link";
import type { PokerPageContent } from "@/components/templates/PokerDetailTemplate";

export const paiGowPokerGuide: PokerPageContent = {
  hero: {
    title: "パイ・ゴウ・ポーカー：クラシックなカードゲームをオンラインで楽しむ",
    lastUpdated: "2024-11-01",
  },

  breadcrumbs: [
    { label: "ホーム", href: "https://www.casinotsu.com/" },
    { label: "ポーカー", href: "https://www.casinotsu.com/poker" },
    { label: "パイ・ゴウ", href: "https://www.casinotsu.com/poker/pai-gow" },
  ],

  tableOfContents: [
    { text: "パイ・ゴウのルール", url: "#パイ・ゴウのルール" },
    { text: "オンライン・パイ・ゴウ － 勝利の秘訣", url: "#オンライン・パイ・ゴウ－勝利の秘訣" },
    { text: "早速パイ・ゴウをプレイ", url: "#早速パイ・ゴウをプレイ" },
  ],

  recommendedCasinos: {
    heading: "CasinoTsu 推薦カジノ",
    casinos: [
      {
        name: "Wonder Casino",
        ratingImageUrl: "https://www.casinotsu.com/wp-content/themes/tokyo/public/svg/stars/4.5.9d967a.svg",
        features: "業界最速の出金スピードと仮想通貨特化ボーナス！",
        playUrl: "https://go.casinotsu.com/go/wonder-casino:wonder-casino?referrer_path=%2Fpoker%2Fpai-gow",
        reviewUrl: "https://www.casinotsu.com/reviews/wonder-casino",
      },
      {
        name: "Eldoah Casino",
        ratingImageUrl: "https://www.casinotsu.com/wp-content/themes/tokyo/public/svg/stars/4.5.9d967a.svg",
        features: "ライブカジノ利用満足度6年連続ナンバー1のオンラインカジノ",
        playUrl: "https://go.casinotsu.com/go/eldoah-casino:eldoah?referrer_path=%2Fpoker%2Fpai-gow",
        reviewUrl: "https://www.casinotsu.com/reviews/eldoah",
      },
      {
        name: "Parimatch",
        ratingImageUrl: "https://www.casinotsu.com/wp-content/themes/tokyo/public/svg/stars/4.cdbb0e.svg",
        features: "2024年11月オープンの最新オンカジを徹底レビュー！",
        playUrl: "https://go.casinotsu.com/go/parimatch:parimatch?referrer_path=%2Fpoker%2Fpai-gow",
        reviewUrl: "https://www.casinotsu.com/reviews/parimatch",
      },
      {
        name: "Duelbits",
        ratingImageUrl: "https://www.casinotsu.com/wp-content/themes/tokyo/public/svg/stars/4.cdbb0e.svg",
        features: "500フリースピンが嬉しいクリプトカジノ♪",
        playUrl: "https://go.casinotsu.com/go/duelbits:duelbits?referrer_path=%2Fpoker%2Fpai-gow",
        reviewUrl: "https://www.casinotsu.com/reviews/duelbits",
      },
    ],
    note: "責任あるプレイを心がけましょう。",
  },

  introduction: {
    heading: "パイ・ゴウ・ポーカーとは",
    paragraphs: [
      "パイ・ゴウは、シンプルながらも奥深い戦略性を持つカードゲームです。その起源は中国のドミノゲーム「**牌九（パイ・ゴウ）**」にあり、アメリカでポーカーの要素が加わり、「パイ・ゴウ・ポーカー」として親しまれるようになりました。現在では、多くの評判の高い**[オンラインカジノ](https://www.casinotsu.com/poker)** でこのエキサイティングなゲームをプレイすることが可能です。</>,
      "ローリスクかつゆったりとしたペースで進行するため、初心者から熟練プレイヤーまで、世界中に多くのファンを持つクラシックゲームです。",
    ],
    mascotCallout: {
      characterName: "カジ子",
      avatarUrl: "https://img.casinotsu.com/svg/jp/mascots/happy/casiko.svg",
      text: <>カードゲームがお好きで、<a href="https://www.casinotsu.com/blackjack" target="_blank" rel="noopener noreferrer">ブラックジャックや<a href="https://www.casinotsu.com/poker" target="_blank" rel="noopener noreferrer">ポーカー、<a href="https://www.casinotsu.com/baccarat" target="_blank" rel="noopener noreferrer">バカラといった定番ゲームとは一味違う体験をお求めなら、パイ・ゴウはまさにうってつけのゲームと言えるでしょう。</>,
    },
    cta: {
      heading: "👇CasinoTsu おすすめのオンラインカジノで、豊富なゲームをお楽しみください！👇",
      linkText: "👉 CasinoTsu 推薦！ベラジョンで遊ぶ！",
      linkUrl: "https://go.casinotsu.com/go/vera-john",
    },
  },

  rulesSection: {
    heading: "パイ・ゴウのルール",
    image: {
      src: "https://www.casinotsu.com/wp-content/uploads/PaiGow.jpg",
      alt: "パイ・ゴウ｜イメージ",
    },
    paragraphs: [
      "パイ・ゴウは、標準的な52枚のトランプにジョーカー1枚を加えた、**合計53枚のカードを使用してプレイ**されます。ゲームの基本となるのは、**[クラシックポーカー](https://www.casinotsu.com/poker)** の役の組み合わせです。通常、ゲームは6人のプレイヤーと1人のディーラーで進行し、プレイヤーがベットを行うことから始まります。</>,
      "ディーラーはカードをシャッフルした後、自分自身を含む各プレイヤーに7枚ずつカードを裏向きに配ります。残りの4枚のカードは使用されません。パイ・ゴウはプレイヤー同士が競い合うのではなく、**プレイヤー対ディーラーの勝負**となります。",
      "プレイヤーは配られたカードを受け取ると、これらを2つのハンドに分けます。1つ目は「ハイハンド」または「バックハンド」と呼ばれ、5枚のカードで構成されるスタンダードなポーカーハンドです。2つ目は「ローハンド」または「フロントハンド」と呼ばれ、2枚のカードで構成されます。ローハンドは、ワンペアになるか、あるいはハイカード（役がない状態）となります。",
      "ここで重要なルールがいくつかあります。カードを2つのハンドに分ける際、**ハイハンドは必ずローハンドよりも強い役**でなくてはなりません。このルールを誤ると、その時点で負けとなります。また、ジョーカーは、ストレートまたはフラッシュを成立させる場合にのみ、任意のカードの代わりとして使用できます。それ以外の場合は、エース（A）として扱われます。",
      "全てのプレイヤーが2つのハンドを完成させた後、ディーラーは自身のカードを表向きにし、2つのハンドに分けます。その後、各プレイヤーのハンドとディーラーのハンドを比較し、勝敗を決定します。勝敗の決定には、**3通りの可能性**があります。",
    ],
    outcomes: [
      "プレイヤーの2つのハンドが、共にディーラーのハンドよりも強い場合：ベット額と同額が支払われます。",
      "プレイヤーの2つのハンドのうち、どちらか一方のみがディーラーのハンドよりも強い場合：引き分けとなります。",
      "プレイヤーの2つのハンドが、共にディーラーのハンドよりも弱い場合：ベットは没収されます。",
    ],
    callout: {
      emoji: "🔰",
      heading: "まずはこのページでオンラインポーカーの基礎知識と始め方をマスターだ！",
      linkText: "オンラインポーカー入門／プレイ方法は？",
      linkUrl: "https://www.casinotsu.com/poker",
    },
  },

  strategySection: {
    heading: "オンライン・パイ・ゴウ － 勝利の秘訣",
    image: {
      src: "https://www.casinotsu.com/wp-content/uploads/PaiGow-demo.jpg",
      alt: "パイ・ゴウ｜デモ",
    },
    paragraphs: [
      "オンライン・パイ・ゴウで勝利を掴むための鍵は、「**7枚のカードをどのように2つのハンドに分けるか**」に尽きます。基本戦略としては、少なくとも一方のハンドがディーラーのハンドよりも強くなるように配置することです。これにより、負けを回避することができます。上級者の中には、2枚カードのローハンドを可能な限り強く作ることを目指すプレイヤーもいますが、その際も5枚カードのハイハンドよりも役が弱くならないよう、[パイ・ゴウのルール](https://www.casinotsu.com/guides/strategy)を遵守する必要があります。</>,
      "しかし、5枚カードのハイハンドでストレート以上の役ができた場合は、それを優先的にキープするのが賢明でしょう。なぜなら、そのような役は高い確率で勝利につながるからです。",
    ],
  },

  playNowSection: {
    heading: "早速パイ・ゴウをプレイ",
    image: {
      src: "https://www.casinotsu.com/wp-content/uploads/PaiGow-play.jpg",
      alt: "パイ・ゴウ｜プレイ",
    },
    paragraphs: [
      "CasinoTsuが**推薦するオンラインカジノ**の中には、パイ・ゴウ・ポーカーを提供しているところが複数ございます。もちろん、パイ・ゴウだけでなく、他のクラシックカードゲームも豊富に取り揃えております。さらに、新規登録者限定の**[ウェルカムボーナス](https://www.casinotsu.com/bonuses/welcome-bonus)** もご用意しております。初回入金額に応じて、様々なボーナスやフリースピンを獲得するチャンスがあります。<a href="https://www.casinotsu.com/bonuses" target="_blank" rel="noopener noreferrer"><strong>オンラインカジノによって提供される入金ボーナス</strong>は異なりますので、ぜひ下のリンクから詳細をご確認いただき、ご自身に合ったカジノを選んで、お得なボーナスを受け取ってください。</>,
    ],
    callout: {
      emoji: "📊",
      heading: "このハンド、強気で勝負すべき？",
      linkText: "役のできる確率を知って勝率を上げよう！",
      linkUrl: "https://www.casinotsu.com/guides/hand-probabilities",
    },
  },

  offerSection: {
    heading: "CasinoTsu 推薦カジノ：Duelbits 詳細情報",
    casino: {
      name: "Duelbits",
      slug: "duelbits",
      description: [
        "Duelbitsは2020年に設立され、Liquid Entertainment N.V.によって運営されている、キュラソーeGamingライセンスを取得したオンラインカジノおよびスポーツブックです。特に仮想通貨に特化したプラットフォームとして知られており、スポーツベッティング機能も提供しています。",
      ],
      imageUrl: "https://www.casinotsu.com/wp-content/uploads/duelbits_375x375-1.png",
      ctaUrl: "https://go.casinotsu.com/go/duelbits:duelbits?referrer_path=%2Fpoker%2Fpai-gow",
    },
    offerDetails: {
      heading: "Duelbits：ウェルカムボーナス詳細",
      casinoBonus: {
        heading: "【カジノ】ウェルカムボーナス：最大500フリースピン",
        description: "このボーナスは、3つの賭け条件達成チャレンジを通じて段階的に付与されます。",
        steps: [
          "$200の賭け → 50フリースピン（Sugar Rushで使用）",
          "$500の賭け → 150フリースピン（Gates of Olympusで使用）",
          "$1000の賭け → 300フリースピン（Sweet Bonanzaで使用）",
        ],
        note: "獲得したフリースピンからの賞金には、賭け条件が一切なく、リアルマネーとしてアカウントに反映されます。",
      },
      sportsBonus: {
        heading: "【スポーツ】ウェルカムボーナス：最大$100のフリーベット",
        bullets: [
          "100%ボーナスで、最大$100までフリーベットとして提供されます。",
          "最小入金額および入金額と同額の賭け条件が適用されます。",
          "フリーベットからの勝利金には、追加の賭け条件はありません。",
        ],
      },
      bonusCodeInfo: {
        heading: "プロモーションコード",
        description: "プロモーションコード「**vipgrinders**」を使用すると、限定ボーナスにアクセスできます。このコードは、初回入金前のご利用ガイドの「マイリワード」セクションで利用する必要があり、最大50%の生涯レーキバックが付与されます。",
      },
    },
    features: [
      {
        heading: "会社情報とライセンス",
        bullets: [
          "**設立年:** 2020年",
          "**運営会社:** Liquid Entertainment N.V.",
          "**ライセンス:** キュラソーeGaming",
        ],
      },
      {
        heading: "入出金方法",
        description: [
          "Duelbitsでは、<a href="https://www.casinotsu.com/payment/bitcoin" target="_blank" rel="noopener noreferrer">ビットコイン</a>、<a href="https://www.casinotsu.com/payment/ethereum" target="_blank" rel="noopener noreferrer">イーサリアム、ライトコインといった主要な仮想通貨を幅広く受け入れています。さらに、フィアット通貨で仮想通貨を購入できるオプションも提供しており、利便性を高めています。出金処理は非常に迅速で、ネットワーク状況にもよりますが、通常数分で完了します。また、多くの場合、KYC（本人確認）プロセスが不要である可能性があり、VPNの使用も許可されています。<a href="https://www.casinotsu.com/payment/crypto" target="_blank" rel="noopener noreferrer"><strong>仮想通貨での入出金</strong>は、その匿名性とスピードから多くのプレイヤーに支持されています。</>,
        ],
        bullets: [
          "**対応通貨:** ビットコイン、イーサリアム、ライトコインなど多数",
          "**フィアット購入:** 可能",
          "**出金処理時間:** 数分（ネットワーク状況による）",
          "**KYC:** 不要の可能性あり",
          "**VPN:** 使用可能",
        ],
      },
      {
        heading: "VIPプログラム",
        description: [
          "「Ace's VIP Lounge」と呼ばれるこのVIPプログラムは、賭け額に基づいた段階的なシステムを採用しています。上位レベルになるにつれて、以下のような特典が強化されます。",
        ],
        bullets: [
          "インスタント、デイリー、ウィークリー、マンスリーレーキバック",
          "リロードボーナス",
          "最大12.5%のレーキバック",
        ],
      },
      {
        heading: "その他のプロモーション",
        bullets: [
          "**Duelbits TV:** 毎日ライブストリーム配信。",
          "**マンスリーギブアウェイ:** 最大$50,000までの賞金。",
          "**トーナメント:** 定期的に開催され、賞金プールが用意されています。",
          "**競馬＆グレイハウンド:** 100%ベットマッチ（最大$100まで）。",
          "**レベルアップボーナス:** 入金不要の報酬。",
        ],
      },
      {
        heading: "パートナーシップ",
        description: ["元UFC世界王者コナー・マクレガーや、サッカー選手のルイス・スアレスなどがスポンサーアスリートとして名を連ねています。"],
      },
    ],
    warnings: {
      heading: "ボーナス利用規約",
      points: [
        "ボーナスを受け取るには、メール認証が必要です。",
        "スポーツボーナスは通常、最低オッズ条件を満たす5倍の賭け条件が適用されます。",
        "フリーベットは通常7日以内に失効します。",
        "フリースピンの賞金は24時間以内に失効します。",
        "地域によっては利用制限が適用される場合があります。",
      ],
    },
  },

  faq: <a href="https://www.casinotsu.com/info/story-of-cards" target="_blank" rel="noopener noreferrer">
    {
      question: "パイ・ゴウとはどのようなゲームですか？",
      answer: "パイ・ゴウ・ポーカーは、アメリカの影響を受けた中国のドミノゲーム「牌九（パイ・ゴウ）」です。[カードゲームの歴史](https://www.casinotsu.com/guides/card-game-history)に興味のある方には特に面白いかもしれません。</>,
      character: "oka-kyoju",
      characterName: "Oka Kyoju",
      avatarUrl: "https://img.casinotsu.com/svg/jp/mascots/happy/oka-kyoju.svg",
      questioner: {
        name: "カジ子",
        avatarUrl: "https://img.casinotsu.com/svg/jp/mascots/happy/casiko.svg",
      },
    },
    {
      question: "パイ・ゴウのルールはどのようでですか？",
      answer: <>パイ・ゴウの主要なルールは、クラシックポーカーの手の組み合わせが基本となっています。<a href="https://www.casinotsu.com/poker/rules" target="_blank" rel="noopener noreferrer">ポーカーのルールを理解していれば、スムーズにゲームに入れます。</>,
      character: "oka-kyoju",
      characterName: "Oka Kyoju",
      avatarUrl: "https://img.casinotsu.com/svg/jp/mascots/happy/oka-kyoju.svg",
      questioner: {
        name: "カジ子",
        avatarUrl: "https://img.casinotsu.com/svg/jp/mascots/happy/casiko.svg",
      },
    },
    {
      question: "パイ・ゴウをプレイする際の勝利の秘訣は？",
      answer: <>パイ・ゴウをプレイする際の勝利の秘訣、それは「7枚のカードをどうやって2つの手に分けるか」それにつきます。<a href="https://www.casinotsu.com/poker/pai-gow/strategy" target="_blank" rel="noopener noreferrer">パイ・ゴウの戦略を学ぶことで、より有利にゲームを進めることができます。</>,
      character: "oka-kyoju",
      characterName: "Oka Kyoju",
      avatarUrl: "https://img.casinotsu.com/svg/jp/mascots/happy/oka-kyoju.svg",
      questioner: {
        name: "カジ子",
        avatarUrl: "https://img.casinotsu.com/svg/jp/mascots/happy/casiko.svg",
      },
    },
  ],

  author: {
    name: "Rina Okabe",
    nameJapanese: "岡部 リナ",
    role: "実戦経験6年のカジノ専門家",
    avatarUrl: "/rina/avatar.png",
    bio: "2019年から6年間で80以上のカジノを実際にプレイ。¥250万以上を賭けた実体験から得た本物の知識を、失敗も成功も包み隠さず共有します。",
    authorPageUrl: "/authors/rina-okabe",
  },

  notice: {
    heading: "クッキーポリシー",
    content: <>当サイトはクッキーを使用しています。\n続行することにより、お客様は当サイトの <a href="https://www.casinotsu.com/about/cookie-policy" target="_blank" rel="noopener noreferrer">Cookies Policy に同意したとみなされます。</>,
    buttons: [
      { text: "同意せず閉じる", action: "decline" },
      { text: "同意して閉じる", action: "accept" },
    ],
  },

  metadata: {
    category: "pai-gow-poker",
    tags: ["パイ・ゴウ", "ポーカー", "ルール", "戦略"],
    lastModified: "2024-11-01",
    locale: "ja",
  },
};