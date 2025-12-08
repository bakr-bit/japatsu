import SlotTemplate, { SlotPageData } from "@/components/templates/SlotTemplate";

const data: SlotPageData = {
  title: "Razor Shark／レイザーシャークのスロットレビュー＆攻略法",
  hero: {
    title: "Razor Shark",
    subheading: "レイザーシャーク",
    description: "Push Gaming社によって2019年9月13日にリリースされた、非常に人気のあるオンラインスロットゲームです。そのユニークな深海テーマと、驚異的な勝利の可能性で、多くのプレイヤーを魅了してきました。",
    score: 4.7,
    scoreMax: 5,
    rtp: "96.70%",
    maxMultiplier: "x85,475",
    provider: "PUSH GAMING",
    releaseDate: "2019-09-13",
    volatility: "高 (High)",
    reels: "5×4",
    paylines: "20 (固定)",
    minBet: "€0.10",
    maxBet: "$100.00",
    slotImageSrc: "/slots/razor-shark.png",
    highlights: [
      "深海テーマとユニークなゲーム性",
      "驚異的な最大配当倍率 x85,475",
      "ミステリースタックとシャークボーナスによる爆発力",
      "高ボラティリティでハイリスク・ハイリターンなゲームプレイ"
    ],
    watchouts: [
      "高ボラティリティのため、勝利頻度は低い傾向がある",
      "フリースピンのトリガーに時間がかかる場合がある",
      "Push Gaming社の日本市場撤退により、一部カジノでプレイできなくなった"
    ]
  },
  featuredCasino: {
    name: "ルーベット Roobet",
    logo: "/assets/casino/roobet.png",
    href: "/reviews/roobet",
    ctaText: "今すぐプレイ！",
    ctaHref: "/bonuses",
    tagline: "世界的有名人がアンバサダーを務めるオンラインカジノ！"
  },
  casinos: [
    {
      name: "Bitz",
      logo: "/assets/casino/bitz.jpg",
      href: "/reviews/bitz",
      bonus: "$1,000",
      freeSpins: "-",
      wagering: "29x",
      rating: 4,
      tagline: "本人確認書類不要！？ 匿名性もバッチリの最新仮想通貨カジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/bonuses"
    },
    {
      name: "Roobet",
      logo: "/assets/casino/roobet.jpg",
      href: "/reviews/roobet",
      bonus: "$0",
      freeSpins: "-",
      wagering: undefined,
      rating: 4,
      tagline: "世界的有名人がアンバサダーを務めるオンラインカジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/bonuses"
    }
  ],
  gameInfo: {
    intro: "Razor Sharkは、Push Gaming社によって2019年9月13日にリリースされた、非常に人気のあるオンラインスロットゲームです。そのユニークな深海テーマと、驚異的な勝利の可能性で、多くのプレイヤーを魅了してきました。Push Gaming社の最も成功し、人気のあるリリースの一つとされています。",
    basicInfo: {
      rtp: "96.70%",
      volatility: "高 (High)",
      reels: "5×4",
      paylines: "20 (固定)",
      minBet: "€0.10",
      maxBet: "$100.00",
      provider: "PUSH GAMING",
      releaseDate: "2019-09-13"
    }
  },
  payoutTable: {
    title: "レイザーシャークのシンボルとペイアウト",
    symbols: [
      {
        name: "パープルシャーク",
        description: "最も配当が高いシンボル",
        payout5: "$25.00",
        payout4: undefined,
        payout3: undefined,
        isSpecial: false
      },
      {
        name: "グリーンシャーク",
        payout5: "$6.00",
        isSpecial: false
      },
      {
        name: "オレンジシャーク",
        payout5: "$5.00",
        isSpecial: false
      },
      {
        name: "ブルーシャーク",
        payout5: "$4.00",
        isSpecial: false
      },
      {
        name: "酸素タンク",
        description: "低配当シンボル",
        payout5: "$2.00",
        isSpecial: false
      },
      {
        name: "ダイビングマスク",
        description: "低配当シンボル",
        payout5: "$2.00",
        isSpecial: false
      },
      {
        name: "スイミングフィン",
        description: "低配当シンボル",
        payout5: "$1.00",
        isSpecial: false
      },
      {
        name: "水中カメラ",
        description: "低配当シンボル",
        payout5: "$1.00",
        isSpecial: false
      }
    ],
    maxPayout: "$25.00 (1ドルベット時)",
    notes: [
      "1ドルベット時の配当です。",
      "ワイルドシンボルはスキャッターシンボルを除く全てのシンボルの代わりになります。",
      "ワイルドシンボル自体も配当が発生します。"
    ]
  },
  features: {
    title: "Razor Sharkの特別フィーチャー",
    items: [
      {
        name: "ミステリースタックフィーチャー",
        description: "スピン中に海藻のシンボルが縦に1〜4つ出現し、他の1種類のシンボルに変化します。次のスピンから1段ずつ移動し、ペイアウトのコンビネーション成立を助けます。フリースピンを誘発する可能性もあります。",
        icon: undefined
      },
      {
        name: "レイザーシャークのフリースピン（シャークボーナス）",
        description: "「Bonus」と書かれたスキャッターシンボルが3つ以上揃うと発動します。2つ目と4つ目のリールにミステリースタックが出現し、マルチプライヤーがスピンごとに増加します。理論上無限に継続・増加する可能性があります。",
        icon: undefined
      },
      {
        name: "レイザー表示機能",
        description: "ミステリースタックからランダムでゴールデンシャークが出現し、ベットマルチプライヤーコインまたはスキャッターシンボルを明らかにします。ベットマルチプライヤーコインはベット額に掛けられ、フリースピン中はさらにマルチプライヤーが適用されます。",
        icon: undefined
      }
    ]
  },
  sections: [
    {
      heading: "Razor Sharkのゲームフロー",
      paragraphs: [
        "このスロットの基本的なゲームフローは、通常スピンから「シャークボーナス（フリースピン）」を狙うことです。ランダムに出現する「ミステリースタック」シンボルを待ち、それがフリースピンや高配当に繋がることを期待してプレイを続けます。"
      ]
    },
    {
      heading: "Razor Sharkのグラフィックとサウンド",
      paragraphs: [
        "Razor Sharkは、鮮やかな色彩と滑らかなアニメーションで、深海の冒険をリアルに表現しています。ディズニー映画「ファインディング・ニモ」を彷彿とさせるような、魅力的で親しみやすいビジュアルデザインが特徴です。",
        "サウンドも、まるで水中にいるかのような没入感のある体験を提供します。爽やかなBGMと、スピンや勝利時の効果音が、ゲームプレイを一層盛り上げます。"
      ]
    },
    {
      heading: "Razor Sharkのモバイル対応",
      paragraphs: [
        "Razor Sharkは、HTML5技術を用いて開発されているため、スマートフォンやタブレットなどのモバイルデバイスで快適にプレイすることができます。特別なアプリのダウンロードは不要で、お使いのデバイスのウェブブラウザから直接アクセスできます。インターフェースはモバイル画面に最適化されており、PC版と同様にスムーズな操作性と美しいグラフィックを楽しむことができます。"
      ]
    },
    {
      heading: "Razor Sharkの戦略・攻略法",
      paragraphs: [
        "Razor Sharkは高ボラティリティのスロットであるため、戦略的にプレイすることが重要です。",
        "ベースゲーム中は、勝利が頻繁に発生しない「デッドスピン」が続くこともありますが、これはゲームの性質上避けられません。しかし、「レイザー表示機能」によって、ベースゲーム中にも大きな勝利が得られる可能性があります。",
        "フリースピンボーナスをトリガーするのは難しい場合があり、時間がかかることもあります。そのため、十分な資金管理を行い、焦らずにプレイすることが大切です。",
        "資金が少ない場合は、ベット額を低めに設定し、長くプレイできるように調整しましょう。逆に、資金に余裕がある場合は、高めのベットで一攫千金を狙うことも可能です。",
        "ミステリースタックやレイザー表示機能がどのように機能するかを理解し、それらを最大限に活用することを目指しましょう。特に、フリースピン中のマルチプライヤーは、配当を劇的に増加させる鍵となります。",
        "実際のお金でプレイする前に、多くのカジノで無料でプレイできるデモモードを活用しましょう。これにより、ゲームのルールやフィーチャーを十分に理解し、自分に合った戦略を練ることができます。"
      ],
      bullets: [
        "**高ボラティリティの意味**: 勝利の頻度は低いものの、一度の勝利で得られる配当が非常に大きくなる可能性があることを意味します。したがって、大きな勝利を期待できる反面、資金が短時間で失われるリスクも伴います。"
      ]
    },
    {
      heading: "Razor Sharkの類似ゲーム",
      paragraphs: [
        "Razor Sharkは、そのユニークなテーマとゲーム性から、他に類を見ない魅力を持っていますが、似たような雰囲気やフィーチャーを持つスロットも存在します。"
      ],
      table: {
        title: "類似ゲーム",
        columns: ["ゲーム名", "プロバイダー", "特徴"],
        rows: [
          ["Big Bass Splash", "Pragmatic Play", "海をテーマにしたスロット、魚モチーフのシンボル、フリースピン"],
          ["Jammin' Jars", "Push Gaming", "ユニークで高ボラティリティなスロット"],
          ["Fat Rabbit", "Push Gaming", "ユニークで高ボラティリティなスロット"]
        ]
      }
    },
    {
      heading: "Razor Sharkのまとめ",
      paragraphs: [
        "Razor Sharkは、Push Gaming社が誇る、中毒性の高いオンラインスロットです。深海を舞台にした魅力的なビジュアルとサウンド、そして何よりもその驚異的な最大配当倍率（x85,475）が、プレイヤーを惹きつけてやみません。",
        "高ボラティリティのため、初心者には少し難しく感じるかもしれませんが、フリースピンやミステリースタックといった多彩なフィーチャーが、ゲームに飽きさせない刺激を与えてくれます。焦らず、じっくりとプレイすることで、大きな勝利を掴むチャンスがあるでしょう。"
      ],
      bullets: [
        "高額配当を狙いたいプレイヤー",
        "スリル満点のゲーム体験を求めるプレイヤー",
        "ユニークなフィーチャーやアニメーションが好きなプレイヤー",
        "深海やサメをテーマにしたスロットが好きなプレイヤー"
      ]
    },
    {
      heading: "Razor Sharkの勝手に評価！",
      bullets: [
        "グラフィック: ★★★★★ ー ディズニー「ファインディング・ニモ」を思い出させるようなビジュアルです。",
        "サウンド: ★★★★★ ー まるで水中にいるような感覚の、爽やかなサウンドが楽しめます。",
        "面白さ: ★★★★★ ー 爆発的な配当が狙える点にはハラハラドキドキさせられます。",
        "賞金獲得: ★★★★☆ ー ボラティリティは高め、RTPも悪くない他、ボーナスが出やすい。",
        "総合評価: ★★★★☆ ー 4.7／5段階評価中"
      ]
    }
  ],
  similarGames: [
    {
      name: "Big Bass Splash",
      href: undefined,
      provider: "Pragmatic Play",
      description: "海をテーマにしたスロットで、魚モチーフのシンボルやフリースピンが楽しめます。"
    },
    {
      name: "Jammin' Jars",
      href: undefined,
      provider: "Push Gaming",
      description: "ユニークで高ボラティリティなスロットです。"
    },
    {
      name: "Fat Rabbit",
      href: undefined,
      provider: "Push Gaming",
      description: "ユニークで高ボラティリティなスロットです。"
    }
  ],
  prosCons: {
    pros: [
      "驚異的な最大配当倍率 x85,475",
      "ユニークなミステリースタックとシャークボーナスフィーチャー",
      "高ボラティリティによる大きな勝利の可能性",
      "深海をテーマにした魅力的なグラフィックとサウンド",
      "RTPが96.70%と平均よりやや高め"
    ],
    cons: [
      "高ボラティリティのため、勝利頻度が低い場合がある",
      "フリースピンのトリガーに時間がかかることがある",
      "Push Gaming社の日本市場撤退により、一部カジノでプレイできなくなった"
    ]
  },
  faq: [
    {
      q: "Razor SharkのRTP（還元率）は？",
      a: "Razor SharkのRTPは96.70%です。これは、長期的に見てプレイヤーに還元される金額の割合を示しています。"
    },
    {
      q: "Razor Sharkはどこで無料でプレイできますか？",
      a: "多くのオンラインカジノでは、Razor Sharkをデモモードで無料でプレイすることができます。これにより、実際のお金を使わずにゲームの練習をしたり、フィーチャーを試したりすることが可能です。"
    },
    {
      q: "Razor Sharkのボラティリティについて教えてください。",
      a: "Razor Sharkは「高ボラティリティ」のスロットです。これは、勝利の頻度は低いものの、一度の勝利で得られる配当が非常に大きくなる可能性があることを意味します。大きな勝利を狙いたいプレイヤーには魅力的ですが、資金管理には十分注意が必要です。"
    },
    {
      q: "フリースピンはどのようにトリガーされますか？",
      a: "フリースピン（シャークボーナス）は、画面上に3つ以上の「Bonus」と書かれたスキャッターシンボル（機雷）が出現することでトリガーされます。"
    },
    {
      q: "最大配当倍率はどれくらいですか？",
      a: "Razor Sharkの最大配当倍率は、ベット額のx85,475倍と非常に高いです。"
    }
  ],
  cta: {
    text: "今すぐプレイ！",
    href: "/bonuses"
  },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Slots", href: "/slots" },
    { label: "Razor shark", href: "/slots/razor-shark" }
  ],
  tableOfContents: [
    { label: "プレイ可能なカジノ", href: "#play-casinos" },
    { label: "Razor Sharkの基本情報", href: "#game-info" },
    { label: "Razor Sharkのゲームフロー", href: "#game-flow" },
    { label: "レイザーシャークのシンボルとペイアウト", href: "#symbols-payouts" },
    { label: "Razor Sharkの特別フィーチャー", href: "#features" },
    { label: "Razor Sharkのグラフィックとサウンド", href: "#graphics-sound" },
    { label: "Razor Sharkのモバイル対応", href: "#mobile" },
    { label: "Razor Sharkの戦略・攻略法", href: "#strategy" },
    { label: "Razor Sharkの類似ゲーム", href: "#similar-games" },
    { label: "Razor Sharkのまとめ", href: "#summary" },
    { label: "Razor Sharkの勝手に評価！", href: "#rating" },
    { label: "よくある質問", href: "#faq" }
  ]
};

export default function Page() {
  return <SlotTemplate data={data} canonicalPath="/slots/razor-shark" />;
}
