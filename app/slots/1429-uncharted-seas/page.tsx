import SlotTemplate, { SlotPageData } from "@/components/templates/SlotTemplate";
const data = {

  title: "1429 Uncharted Seas",
  hero: {
    title: "1429 Uncharted Seas",
    subheading: "1429アンチャーテッド・シーズ：高RTPとユニークなアートスタイルで魅せる海中探検スロット！",
    score: 3.6,
    scoreMax: 5,
    rtp: "98.6%",
    maxMultiplier: "x700",
    provider: "Thunderkick",
    releaseDate: "2014-07-15",
    volatility: "Low",
    reels: "5",
    paylines: "25",
    minBet: "0.10",
    maxBet: "100",
    slotImageSrc: "/slots/1429-uncharted-seas-sqr.png",
    highlights: [
      "ユニークなアートスタイル",
      "高RTP (98.6%)",
      "ボーナス機能（ワイルド、リスピン）",
      "比較的低いボラティリティ"
    ],
    watchouts: [
      "最大配当倍率が他のスロットと比較して低い可能性",
      "ボーナス機能の出現頻度や内容にばらつきがある可能性"
    ]
  },
  featuredCasino: {
    name: "1win",
    logo: "/assets/casino/1win.png",
    href: "/reviews/1win",
    ctaText: "1win で今すぐプレイ",
  },
  casinos: [],
  gameInfo: {
    intro: "「1429 Uncharted Seas」は、Thunderkick社によって開発された、海賊時代の未開の海をテーマにしたビデオスロットです。その最大の特徴は、手書き風のユニークなアートスタイルと、驚異的な98.6%という高いRTP（還元率）にあります。プレイヤーは、古代の地図を彷彿とさせるリールを回転させながら、宝の眠る海域を探検します。低いボラティリティ設計のため、比較的安定したゲームプレイが期待でき、初心者から経験豊富なプレイヤーまで幅広く楽しめます。",
    basicInfo: {
      rtp: "98.6%",
      volatility: "Low",
      reels: "5",
      paylines: "25",
      minBet: "0.10",
      maxBet: "100",
      provider: "Thunderkick",
      releaseDate: "2014-07-15"
    }
  },
  payoutTable: {
    title: "1429 Uncharted Seas ペイアウトテーブル",
    symbols: [
      {
        name: "コンパス",
        description: "最も高配当のシンボル。5つ揃うと最大100倍の配当。",
        payout5: "100x",
        payout4: "20x",
        payout3: "5x"
      },
      {
        name: "宝箱",
        description: "高配当シンボル。5つ揃うと最大50倍の配当。",
        payout5: "50x",
        payout4: "10x",
        payout3: "3x"
      },
      {
        name: "カニ",
        description: "中配当シンボル。5つ揃うと最大30倍の配当。",
        payout5: "30x",
        payout4: "8x",
        payout3: "2x"
      },
      {
        name: "カエル",
        description: "中配当シンボル。5つ揃うと最大20倍の配当。",
        payout5: "20x",
        payout4: "6x",
        payout3: "2x"
      },
      {
        name: "魚",
        description: "低配当シンボル。5つ揃うと最大10倍の配当。",
        payout5: "10x",
        payout4: "4x",
        payout3: "1x"
      },
      {
        name: "タコ",
        description: "低配当シンボル。5つ揃うと最大10倍の配当。",
        payout5: "10x",
        payout4: "4x",
        payout3: "1x"
      },
      {
        name: "ワイルドシンボル (船)",
        description: "ワイルドシンボルは、他のすべてのシンボル（ボーナスシンボルを除く）の代わりとなり、ペイラインを完成させます。リール全体に拡張することがあります。",
        isSpecial: true
      },
      {
        name: "ボーナスシンボル (星)",
        description: "ボーナスシンボルは、スキャッターシンボルの役割を果たします。3つ以上出現するとフリースピンを獲得できます。",
        isSpecial: true
      }
    ],
    maxPayout: "700x",
    notes: [
      "ペイアウトは、ベット額1単位あたりの倍率です。",
      "ワイルドシンボルは、ボーナスシンボルを除くすべてのシンボルに代用されます。",
      "ボーナスシンボルは、リールのどこにでも出現できます。"
    ]
  },
  features: {
    title: "ゲームの特徴",
    items: [
      {
        name: "拡張ワイルド",
        description: "リール上にワイルドシンボルが出現すると、そのリール全体に拡張し、勝利のチャンスを高めます。さらに、拡張ワイルドが出現した際はリスピンが発生する可能性があります。",
        icon: "/svg/features/expanding-wilds.svg"
      },
      {
        name: "フリースピン",
        description: "3つ以上のボーナスシンボル（星）がリール上に停止すると、フリースピンラウンドが開始されます。獲得できるフリースピンの回数は、出現したボーナスシンボルの数によって異なります（3つで10回、4つで20回、5つで30回）。",
        icon: "/svg/features/free-spins.svg"
      },
      {
        name: "ユニークなアートスタイル",
        description: "手書き風のコミック調グラフィックと、海中世界の幻想的な雰囲気が融合した、他にはないビジュアル体験を提供します。",
        icon: "/svg/features/art-style.svg"
      },
      {
        name: "高RTP",
        description: "98.6%という非常に高いRTPは、プレイヤーにとって長期的に有利なゲームプレイを示唆しています。",
        icon: "/svg/features/high-rtp.svg"
      },
      {
        name: "低いボラティリティ",
        description: "頻繁に小役が当選するため、資金管理がしやすく、初心者でも安心してプレイできます。",
        icon: "/svg/features/low-volatility.svg"
      }
    ]
  },
  sections: [
    {
      heading: "「1429 Uncharted Seas」の基本情報",
      paragraphs: [
        "「1429 Uncharted Seas」は、Thunderkick社が2014年7月15日にリリースしたビデオスロットです。5リール、3列、25ペイラインの構成で、プレイヤーは広大な未開の海を舞台に冒険を繰り広げます。このスロットの最大の特徴は、そのユニークなアートスタイルと、業界でもトップクラスの98.6%という高いRTP（Return To Player）率です。低いボラティリティ設計のため、比較的頻繁に配当が発生し、安定したゲームプレイを楽しめます。最大ベット額は100ユーロ（またはそれに相当する現地通貨）で、ベット額の700倍までが最大配当として設定されています。"
      ]
    },
    {
      heading: "ゲームプレイと特徴",
      paragraphs: [
        "ゲームのシンボルは、海賊時代の地図に描かれそうな生き物やアイテムで構成されています。コンパス、宝箱、カニ、カエル、魚、タコなどが低～中配当シンボルとして登場し、最も高配当なのはコンパスです。ワイルドシンボルは船のマークで、ボーナスシンボルを除くすべてのシンボルに代用でき、リール全体に拡張する「拡張ワイルド」機能を持っています。拡張ワイルドが出現すると、そのリールが固定され、他のリールが再スピンします。ボーナスシンボルは星のマークで、3つ以上出現するとフリースピンラウンドが開始されます。3つで10回、4つで20回、5つで30回のフリースピンを獲得でき、フリースピン中も拡張ワイルドによるリスピンのチャンスがあります。"
      ]
    },
    {
      heading: "グラフィックとサウンド",
      paragraphs: [
        "「1429 Uncharted Seas」のグラフィックは、手書き風のコミックアートスタイルが特徴的で、他のスロットにはない独特の世界観を作り出しています。背景には、暗く神秘的な海中が描かれ、プレイヤーを異世界へと誘います。サウンドも、海の静けさや冒険の雰囲気を盛り上げるような、落ち着いたトーンで統一されており、ゲームプレイに没入感を高めます。派手さはありませんが、洗練されたアートとサウンドデザインが、このスロットの大きな魅力となっています。"
      ]
    },
    {
      heading: "モバイル互換性",
      paragraphs: [
        "Thunderkick社は、最新のテクノロジーを使用してゲームを開発しており、「1429 Uncharted Seas」も例外ではありません。HTML5技術により、PCはもちろん、スマートフォンやタブレットなどのモバイルデバイスでも、ネイティブアプリのようにスムーズにプレイすることが可能です。画面サイズに合わせて最適化されたインターフェースと、高品質なグラフィック・サウンドは、外出先でも本格的なカジノ体験を提供します。"
      ]
    },
    {
      heading: "戦略とヒント",
      paragraphs: [
        "「1429 Uncharted Seas」は低いボラティリティのスロットであるため、頻繁に小役が当選する傾向があります。そのため、資金を大きく失うリスクは比較的低く、じっくりとゲームを楽しむことができます。しかし、高配当を狙うには、拡張ワイルドによるリスピンや、フリースピンラウンドでの複数回の勝利が重要になります。フリースピンは一度に多くの回数を獲得できるチャンスがありますが、出現頻度はそれほど高くありません。そのため、ボーナスシンボルが揃うのを気長に待つか、拡張ワイルドによるリスピンを狙って資金を維持しながらプレイするのが良いでしょう。RTPが非常に高いため、長期的なプレイでは理論上プレイヤーに有利に働く可能性が高いですが、あくまでギャンブルであるため、責任あるプレイを心がけることが最も重要です。"
      ]
    }
  ],
  similarGames: [
    {
      name: "Esqueleto Explosivo",
      href: "/slots/esqueleto-explosivo-3",
      provider: "Thunderkick",
      description: "ユニークなテーマと連鎖爆発機能が特徴のスロット。"
    },
    ],
  prosCons: {
    pros: [
      "非常に高いRTP (98.6%)",
      "ユニークで魅力的なアートスタイル",
      "拡張ワイルドとリスピン機能",
      "低いボラティリティで安定したゲームプレイ",
      "モバイルデバイスとの高い互換性"
    ],
    cons: [
      "最大配当倍率が他の高ボラティリティスロットと比較して低い",
      "フリースピンの獲得に時間がかかる場合がある"
    ]
  },
  faq: [
    {
      q: "「1429 Uncharted Seas」のRTPはいくつですか？",
      a: "「1429 Uncharted Seas」のRTPは98.6%です。これは業界でも非常に高い数値です。"
    },
    {
      q: "「1429 Uncharted Seas」はどのプロバイダーによって開発されましたか？",
      a: "「1429 Uncharted Seas」は、Thunderkick社によって開発されました。"
    },
    {
      q: "「1429 Uncharted Seas」の最大配当倍率は？",
      a: "最大配当倍率は700倍とされていますが、一部情報源では670倍とも記載されています。これは、ベット額全体に対する倍率です。"
    },
    {
      q: "「1429 Uncharted Seas」はモバイルでプレイできますか？",
      a: "はい、HTML5技術により、スマートフォンやタブレットなどのモバイルデバイスで快適にプレイできます。"
    },
    {
      q: "「1429 Uncharted Seas」のボラティリティは？",
      a: "「1429 Uncharted Seas」は低いボラティリティのスロットです。そのため、比較的頻繁に配当が発生し、安定したゲームプレイが期待できます。"
    },
    {
      q: "「1429 Uncharted Seas」にはフリースピン機能はありますか？",
      a: "はい、3つ以上のボーナスシンボル（星）が出現するとフリースピンラウンドが開始されます。最大30回のフリースピンを獲得できます。"
    }
  ],
  cta: {
    text: "1win で今すぐプレイ",
    href: "/go/1429-uncharted-seas"
  },
  breadcrumbs: [
    { label: "ホーム", href: "https://casinotsu.com/" },
    { label: "スロット", href: "https://casinotsu.com/slots" },
    { label: "1429 Uncharted Seas", href: "https://casinotsu.com/slots/1429-uncharted-seas" }
  ],
  tableOfContents: [
    { label: "「1429 Uncharted Seas」の基本情報", href: "#基本情報" },
    { label: "ゲームプレイと特徴", href: "#ゲームプレイと特徴" },
    { label: "グラフィックとサウンド", href: "#グラフィックとサウンド" },
    { label: "モバイル互換性", href: "#モバイル互換性" },
    { label: "戦略とヒント", href: "#戦略とヒント" },
    { label: "よくある質問", href: "#よくある質問" }
  ]
}


export default function Page() {
  return <SlotTemplate data={data} canonicalPath="/slots/1429-uncharted-seas" />;
}
