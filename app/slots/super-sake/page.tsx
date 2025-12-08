import SlotTemplate, { SlotPageData } from "@/components/templates/SlotTemplate";

const data: SlotPageData = {
  title: "スーパー酒 (Super Sake) スロットレビュー | 特徴・ボーナス・攻略法",
  hero: {
    title: "スーパー酒",
    subheading: "お酒とお寿司がテーマのユニークなスロット！",
    description: "ワイルドシンボルが酔っ払うと分裂！？Indigo Magic社がお届けする、お酒とお寿司をテーマにした最新スロット「スーパー酒」のレビューと攻略法。",
    score: 3.9,
    scoreMax: 5,
    rtp: "96.25%",
    maxMultiplier: "x10,000",
    provider: "Indigo Magic",
    releaseDate: "2024-04-18",
    volatility: "中〜高",
    reels: "5",
    paylines: "50",
    minBet: "$0.5",
    maxBet: "$150",
    slotImageSrc: "/slots/super-sake.jpg",
    highlights: [
      "ユニークなフリースピン機能",
      "移動スティッキーワイルドとマルチプライヤー",
      "ワイルドシンボルが分裂する機能",
      "ボーナス購入とサイドベットオプション",
      "最大10,000倍の配当可能性"
    ],
    watchouts: [
      "寿司のグラフィックがあまり美味しそうではない",
      "プレイできるカジノがまだ少ない",
      "カジノによってRTPが変動する可能性がある"
    ]
  },
  featuredCasino: {
    name: "Vera&John",
    logo: "/assets/casino/vera-john.png",
    href: "https://go.casinotsu.com/go/vera-john:vera-john?referrer_path=%2Fslots%2Fsuper-sake",
    ctaText: "今すぐプレイ！",
    ctaHref: "https://go.casinotsu.com/go/vera-john:vera-john?referrer_path=%2Fslots%2Fsuper-sake",
    tagline: "オンラインカジノの代名詞とも言える人気カジノ。新規登録者向けのボーナスも充実しています。"
  },
  casinos: [
    {
      name: "カジノシークレット",
      href: "https://casinotsu.com/reviews/casino-secret",
      bonus: "キャッシュバックボーナス",
      tagline: "今では当たり前「キャッシュバックボーナス」の火付け役🔥 サッカー日本代表の南野選手が所属するASモナコのパートナー。",
      ctaText: "詳細を見る",
      ctaHref: "https://casinotsu.com/reviews/casino-secret"
    },
    {
      name: "K8",
      href: "https://casinotsu.com/reviews/k8",
      tagline: "パチンコが遊べるオンラインカジノ。他のゲームもかなり豊富🎰",
      ctaText: "詳細を見る",
      ctaHref: "https://casinotsu.com/reviews/k8"
    },
    {
      name: "Betcoin Casino",
      tagline: "仮想通貨に特化したカジノ。",
      ctaText: "詳細を見る",
      ctaHref: "https://casinotsu.com/reviews/betcoin-casino"
    },
    {
      name: "Casino RedKings",
      tagline: "幅広いスロットタイトルを提供。",
      ctaText: "詳細を見る",
      ctaHref: "https://casinotsu.com/reviews/casino-redkings"
    },
    {
      name: "Vera&John",
      logo: "/assets/casinos/VeraJohn_375x375-1.png",
      href: "https://go.casinotsu.com/go/vera-john:vera-john?referrer_path=%2Fslots%2Fsuper-sake",
      rating: 4.5,
      tagline: "オンラインカジノの代名詞とも言える人気カジノ。新規登録者向けのボーナスも充実しています。",
      ctaText: "今すぐプレイ！",
      ctaHref: "https://go.casinotsu.com/go/vera-john:vera-john?referrer_path=%2Fslots%2Fsuper-sake"
    }
  ],
  gameInfo: {
    intro: "スーパー酒は、Indigo Magic（インディゴ・マジック）社よりリリースされた、お酒とお寿司をテーマにした最新スロットです。ワイルドシンボルが酔っ払うと分裂するというユニークな機能に注目です。",
    basicInfo: {
      rtp: "96.25%",
      volatility: "中〜高",
      reels: "5",
      paylines: "50",
      minBet: "$0.5",
      maxBet: "$150",
      provider: "Indigo Magic",
      releaseDate: "2024-04-18"
    }
  },
  payoutTable: {
    title: "スーパー酒のシンボルとペイアウト",
    symbols: [
      {
        name: "海老握り",
        payout5: "x20",
        payout4: "x5",
        payout3: "x1.5"
      },
      {
        name: "サーモン握り",
        payout5: "x18",
        payout4: "x4",
        payout3: "x1.4"
      },
      {
        name: "玉子握り",
        payout5: "x16",
        payout4: "x3",
        payout3: "x1.3"
      },
      {
        name: "アボカド握り",
        payout5: "x14",
        payout4: "x2.5",
        payout3: "x1.2"
      },
      {
        name: "巻き寿司",
        payout5: "x12",
        payout4: "x2",
        payout3: "x1"
      },
      {
        name: "ワイルドシンボル (お猪口)",
        description: "スキャッター以外の全てのシンボルの代わりになります。フリースピン中はマルチプライヤーが付与され、分裂することもあります。",
        isSpecial: true
      },
      {
        name: "スキャッターシンボル (酒瓶)",
        description: "フリースピンをトリガーします。リールの一番左に1つ出現し、他のシンボルにワイルドが移動するとフリースピンに突入します。",
        isSpecial: true
      }
    ],
    maxPayout: "10,000x",
    notes: [
      "ペイラインは50通り。",
      "左から右へ同一シンボルが3つ以上揃うと配当獲得。",
      "ワイルドシンボルはフリースピン中にマルチプライヤーを獲得し、分裂することがあります。"
    ]
  },
  features: {
    title: "ゲーム特徴・フィーチャー",
    items: [
      {
        name: "Super Sake Cup Feature",
        description: "リール左にいるキャラクターがランダムに最大5つのワイルドシンボルをベースゲームに追加します。",
        icon: "/images/super-sake-feature1.jpg"
      },
      {
        name: "フリースピン",
        description: "左リールにスキャッター、他のリールにワイルドが出現すると6回のフリースピンに突入。ワイルドは移動し、マルチプライヤーを獲得、分裂することがあります。",
        icon: "/images/super-sake-FS1.jpg"
      },
      {
        name: "移動スティッキーワイルド",
        description: "フリースピン中は、スキャッターの位置にワイルドが移動し、その場に留まります。",
        icon: "/images/super-sake-FS4.jpg"
      },
      {
        name: "マルチプライヤー",
        description: "フリースピン中のワイルドシンボルは、お酒が注がれるたびにマルチプライヤーが1倍ずつ増加します。",
        icon: "/images/super-sake-FS4.jpg"
      },
      {
        name: "ワイルド分裂",
        description: "マルチプライヤーがx4、x7、x10になると、ワイルドシンボルが分裂し、追加スピンを獲得します。",
        icon: "/images/super-sake-FS5.jpg"
      },
      {
        name: "ボーナス購入",
        description: "ベット額の85倍でフリースピンラウンドを直接購入できます。",
        icon: "/images/super-sake-bonus-buy1.jpg"
      },
      {
        name: "サイドベット",
        description: "ベット額の1.5倍でフリースピンの発動確率が70%アップします。",
        icon: "/images/super-sake-bonus-buy2.jpg"
      }
    ]
  },
  sections: [
    {
      heading: "ゲーム基本情報",
      paragraphs: [
        "スーパー酒は、お酒とお寿司をテーマにしたスロットで、5リール50ペイラインで構成されています。RTPはカジノによって変動する可能性がありますが、最大で96.25%です。ボラティリティは中〜高で、勝利が頻繁に発生するわけではありませんが、一度当たると比較的高額な配当が期待できます。ヒット率は28.11%で、約3〜4回スピンするうち1回は配当が得られる計算になります。"
      ],
      table: {
        title: "基本情報詳細",
        columns: ["項目", "詳細"],
        rows: [
          ["RTP (還元率)", "96.25% (※カジノにより 93.99%, 95.9% の設定も存在)"],
          ["ボラティリティ", "中〜高 (Medium-High)"],
          ["リール数", "5"],
          ["ペイライン数", "50"],
          ["最小ベット額", "$0.5"],
          ["最大ベット額", "$150"],
          ["ヒット率", "28.11%"],
          ["ゲームサイズ", "14.8 MB"],
          ["テクノロジー", "JavaScript, HTML5"]
        ]
      }
    },
    {
      heading: "どこで遊べるか",
      paragraphs: [
        "スーパー酒は、現在42カ国でプレイ可能となっており、特にノルウェー、フィンランド、ニュージーランド、オーストリアなどのカジノで多く提供されています。アメリカ市場では、ニュージャージー州での提供について情報が錯綜しています。Fanatics Casinoではプレイ可能という情報がある一方、SlotCatalogでは提供されていないという情報もあります。プレイを検討されている方は、各カジノの利用規約や提供状況を事前にご確認ください。"
      ]
    },
    {
      heading: "グラフィック・サウンド",
      paragraphs: [
        "グラフィックは中国と日本のミックスされたようなデザインで、サウンドはどちらかというと中華風です。寿司のシンボルは美味しそうに見えないという意見もありますが、お猪口のワイルドシンボルは可愛らしく、酔っ払った際の表情の変化も楽しめます。"
      ],
      table: {
        title: "グラフィック・サウンド詳細",
        columns: ["項目", "詳細"],
        rows: [
          ["グラフィック", "中国と日本のミックスされたようなグラフィックデザイン"],
          ["モバイル対応", "👍"],
          ["サウンド・音響効果", "どちらかというと中華風なサウンド"],
          ["特別フィーチャー", "・移動スティッキーワイルド<br>・マルチプライヤー<br>・追加スピン<br>・Super Sake Cup Feature (ランダムワイルド追加)"]
        ]
      }
    },
    {
      heading: "モバイル対応",
      paragraphs: [
        "スーパー酒は、スマホでも快適に遊べます。縦持ちでも横持ちでもプレイ可能で、さらに横持ちのときにスピンボタンが左側にくる”Left Mode”もメニューから設定できます。"
      ]
    },
    {
      heading: "戦略・攻略法",
      paragraphs: [
        "ボラティリティが中〜高であるため、プレイする際は、ある程度の資金を用意し、無理のない範囲でベット額を調整しましょう。フリースピンを効率的に狙いたい場合は、サイドベットの活用を検討する価値があります。ただし、ベット額が増加するため、資金管理には十分注意してください。短時間でフリースピンを楽しみたい場合は、ボーナス購入機能が便利ですが、購入費用に見合う配当が得られるとは限らないため、リスクを理解した上で利用しましょう。プレイするカジノによってRTPが異なる場合があるため、事前に確認することをおすすめします。"
      ],
      table: {
        title: "スーパー酒のおすすめ・残念ポイント",
        columns: ["おすすめポイント👍", "残念ポイント👎"],
        rows: [
          ["フリースピンがユニークで楽しい", "寿司が美味しそうに見えない"],
          ["ボーナス購入機能、サイドベットでフリースピン確率アップ", "遊べるカジノが少ない"],
          ["ランダムワイルド追加機能 (Super Sake Cup Feature)", ""],
          ["高い最大配当倍率 (x10,000)", ""]
        ]
      }
    },
    {
      heading: "まとめ",
      paragraphs: [
        "スーパー酒は、寿司はマズそう、お酒は中国酒っぽい、なんちゃって日本…という第一印象かもしれませんが、フリースピンに突入すると、お猪口シンボル（ワイルド）が一変します。分裂もするし、マルチプライヤーも付きます。そして、酔っ払ったときの顔がいやらしい表情には、日本っぽさを感じます。ツッコミどころは満載ですが、なかなか楽しいスロットです。ぜひ、みなさんもスーパー酒をプレイしてみてください。ユニークなフリースピン機能を求めているプレイヤー、マルチプライヤーやワイルド分裂などのフィーチャーが好きなプレイヤー、日本やアジアのテーマに興味があるプレイヤー、ある程度の資金で高配当を狙いたいプレイヤーにおすすめです。"
      ]
    }
  ],
  similarGames: [
    {
      name: "シノビ・スピリット",
      href: "https://casinotsu.com/slots/shinobi-spirit",
      provider: "Pragmatic Play",
      description: "忍者のスロット🐱‍👤 フリースピンがユニークで、見ているだけでも楽しい。"
    },
    ],
  prosCons: {
    pros: [
      "フリースピンがユニークで楽しい",
      "ボーナス購入機能、サイドベットでフリースピン確率アップ",
      "ランダムワイルド追加機能 (Super Sake Cup Feature)",
      "高い最大配当倍率 (x10,000)"
    ],
    cons: [
      "寿司のグラフィックがあまり美味しそうではない",
      "プレイできるカジノがまだ少ない",
      "カジノによってRTPが変動する可能性がある"
    ]
  },
  faq: [
    {
      q: "スーパー酒の還元率（RTP）は？",
      a: "96.25%、93.99%、95.9%、92.02%のいずれかです。プレイするカジノによって異なりますので、事前にご確認ください。"
    },
    {
      q: "スーパー酒の”サイドベット”とは？",
      a: "サイドベットをオンにすると、通常のベット額に加えて50%の割増料金が発生しますが、フリースピンの出現確率が70%アップする機能です。"
    },
    {
      q: "ゲーム中に問題が発生した場合、どうなりますか？",
      a: "ゲームの不具合により払い出しが無効になる場合があります。ただし、ラウンドが中断された場合は、再開時に続きからプレイすることが可能です。"
    },
    {
      q: "ユーザーからの評価は？",
      a: "様々なプラットフォームで評価されており、例えばChipy.comでは5つ星中4.2（29票）、SlotCatalogでは10点中2.0（1票）といった評価が見られます。総合的な評価はプレイヤーによって分かれる傾向にあります。"
    }
  ],
  cta: {
    text: "今すぐスーパー酒をプレイ！",
    href: "https://go.casinotsu.com/go/vera-john:vera-john?referrer_path=%2Fslots%2Fsuper-sake"
  },
  breadcrumbs: [
    { label: "ホーム", href: "https://casinotsu.com/" },
    { label: "スロット", href: "https://casinotsu.com/slots" },
    { label: "スーパー酒", href: "https://casinotsu.com/slots/super-sake" }
  ],
  tableOfContents: [
    { label: "スーパー酒のレビュー", href: "#%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E9%85%92%E3%81%AE%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC" },
    { label: "スーパー酒のシンボルとペイアウト", href: "#%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E9%85%92%E3%81%AE%E3%82%B7%E3%83%B3%E3%83%9C%E3%83%AB%E3%81%A8%E3%83%9A%E3%82%A4%E3%82%A2%E3%82%A6%E3%83%88" },
    { label: "スーパー酒のゲーム機能と特別なフィーチャー", href: "#%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E9%85%92%E3%81%AE%E3%82%B2%E3%83%BC%E3%83%A0%E6%A9%9F%E8%83%BD%E3%81%A8%E7%89%B9%E5%88%A5%E3%81%AA%E3%83%95%E3%82%A3%E3%83%BC%E3%83%81%E3%83%A3%E3%83%BC" },
    { label: "スーパー酒のグラフィックとサウンド", href: "#%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E9%85%92%E3%81%AE%E3%82%B0%E3%83%A9%E3%83%95%E3%82%A3%E3%83%83%E3%82%AF%E3%81%A8%E3%82%B5%E3%82%A6%E3%83%B3%E3%83%89" },
    { label: "スーパー酒のモバイル仕様", href: "#%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E9%85%92%E3%81%AE%E3%83%A2%E3%83%90%E3%82%A4%E3%83%AB%E4%BB%95%E6%A7%98" },
    { label: "スーパー酒のおすすめ・残念ポイント", href: "#%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E9%85%92%E3%81%AE%E3%81%8A%E3%81%99%E3%81%99%E3%82%81%E3%83%BB%E6%AE%8B%E5%BF%86%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88" },
    { label: "スーパー酒が遊べる一押しオンラインカジノ", href: "#%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E9%85%92%E3%81%8C%E9%81%8A%E3%81%B9%E3%82%8B%E4%B8%80%E6%8A%BC%E3%81%97%E3%81%AA%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E3%82%AB%E3%82%B8%E3%83%8E" },
    { label: "ゲーム中に問題発生した時の解決法は？", href: "#%E3%82%B2%E3%83%BC%E3%83%A0%E4%B8%AD%E3%81%AB%E5%95%8F%E9%A1%8C%E7%99%BA%E7%94%9F%E3%81%97%E3%81%9F%E6%99%82%E3%81%AE%E8%A7%A3%E6%B1%BA%E6%B3%95%E3%81%AF%EF%BC%9F" },
    { label: "お猪口が可愛いスーパー酒♪", href: "#%E3%81%8A%E7%8C%AA%E5%8F%A3%E3%81%8C%E5%8F%AF%E6%84%9B%E3%81%84%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E9%85%92%E2%99%AA" },
    { label: "スーパー酒好きにおすすめの、日本がテーマのスロット", href: "#%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E9%85%92%E5%A5%BD%E3%81%8D%E3%81%AB%E3%81%8A%E3%81%99%E3%81%99%E3%82%81%E3%81%AE%E3%80%81%E6%97%A5%E6%9C%AC%E3%81%8C%E3%83%86%E3%83%BC%E3%83%9E%E3%81%AE%E3%82%B9%E3%83%AD%E3%83%83%E3%83%88" }
  ]
};

export default function Page() {
  return <SlotTemplate data={data} canonicalPath="/slots/super-sake" />;
}
