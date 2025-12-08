import SlotTemplate, { SlotPageData } from "@/components/templates/SlotTemplate";

const data: SlotPageData = {
  title: "ブックオブデッド｜レビュー、基本情報、攻略法",
  hero: {
    title: "ブックオブデッド",
    subheading: "古代エジプトの秘宝を求めて！高配当を狙える人気スロット",
    description: "CasinoTsuより、人気スロット「Book of Dead」に関する徹底レビューをお届けします。長年にわたりスロットランキングの常連であるこのゲームの人気の秘密を、CasinoTsuが深く掘り下げて解説いたします。✨",
    score: 4.7,
    scoreMax: 5,
    rtp: "96.21%",
    maxMultiplier: "x10,000",
    provider: "Play'n GO",
    releaseDate: "2016",
    volatility: "高",
    reels: "5",
    paylines: "10",
    minBet: "0.01",
    maxBet: "100",
    slotImageSrc: "/slots/book-of-dead.jpg",
    highlights: [
      "高ボラティリティで高配当の可能性",
      "フリースピン中の拡大シンボルが強力",
      "ワイルドとスキャッターを兼ねる「死者の書」",
      "ギャンブル機能でさらにスリルアップ"
    ],
    watchouts: [
      "RTPはカジノによって変動する可能性あり",
      "高ボラティリティのため、当たるまで忍耐が必要",
      "ボーナス購入機能はない"
    ]
  },
  featuredCasino: {
    name: "2アップカジノ",
    logo: "/assets/casino/2up.png",
    ctaText: "今すぐプレイ",
    tagline: "仮想通貨でも日本円でも遊べる、最新オンラインカジノ"
  },
  casinos: [
    {
      name: "ゴールデンパンダ",
      bonus: "ボーナス30倍賭け条件、フリースピン30倍賭け条件、50フリースピン",
      wagering: "30倍",
      freeSpins: "50",
      tagline: "出金は基本的に即時反映でストレスフリー♪",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/golden-panda"
    },
    {
      name: "2アップカジノ",
      bonus: "仮想通貨でも日本円でも遊べる、最新オンラインカジノ",
      tagline: "仮想通貨でも日本円でも遊べる、最新オンラインカジノ",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/2up-casino"
    },
    {
      name: "Miki",
      bonus: "ボーナス30倍賭け条件、$4,000まで、フリースピン20倍賭け条件、200フリースピン",
      wagering: "30倍",
      freeSpins: "200",
      tagline: "充実したゲームラインナップ！盛りだくさんのボーナスでお得にプレイ！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/miki"
    },
    {
      name: "WSM Casino",
      tagline: "時代の最先端？！「ミームコイン」×「オンラインカジノ」",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/wsm-casino"
    },
    {
      name: "Bitz",
      bonus: "ボーナス29倍賭け条件、$1,000まで",
      wagering: "29倍",
      tagline: "本人確認書類不要！？ 匿名性もバッチリの最新仮想通貨カジノ！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/bitz"
    },
    {
      name: "Wikibet",
      bonus: "ボーナス20倍賭け条件、$50,000まで、フリースピン20倍賭け条件、200フリースピン",
      wagering: "20倍",
      freeSpins: "200",
      tagline: "シンプルな操作性と可愛いデザインが特徴！厳選されたゲームをプレイしよう★",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/wikibet"
    },
    {
      name: "Katsuwin",
      tagline: "業界トップクラスのパチンコ・パチスロ台数を誇る新星カジノ",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/katsuwin"
    },
    {
      name: "Sushi Casino",
      bonus: "ボーナス35倍賭け条件、$200,000まで、フリースピン40倍賭け条件、50フリースピン",
      wagering: "35倍",
      freeSpins: "50",
      tagline: "てんこ盛りのオファーやVIPプログラムが魅力的な最新オンラインカジノ",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/sushi-casino"
    },
    {
      name: "Parimatch",
      tagline: "2024年11月オープンの最新オンカジを徹底レビュー！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/parimatch"
    },
    {
      name: "Duelbits",
      freeSpins: "500",
      tagline: "500フリースピンが嬉しいクリプトカジノ♪",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/duelbits"
    },
    {
      name: "Sportsbet.io",
      bonus: "ボーナス1,000USDT",
      tagline: "スポーツベットだけじゃない！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/sportsbet-io"
    },
    {
      name: "Shuffle",
      bonus: "ボーナス40倍賭け条件、$2,020まで、フリースピンなし",
      wagering: "40倍",
      tagline: "独自のトークンで資産運用もできる仮想通貨カジノ★",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/shuffle"
    },
    {
      name: "Winz",
      bonus: "ボーナスなし（賭け条件なし）、フリースピン800回",
      freeSpins: "800",
      tagline: "ウェルカムオファーやボーナスに賭け条件なし♪",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/winz"
    },
    {
      name: "Dafabet",
      bonus: "ボーナス20倍賭け条件、$500まで",
      wagering: "20倍",
      tagline: "セルティックFCのスポンサーカジノ",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/dafabet"
    },
    {
      name: "Lucky Block",
      bonus: "ボーナス€25,000まで、フリースピン35倍賭け条件、50フリースピン",
      wagering: "35倍",
      freeSpins: "50",
      tagline: "独自トークンもある仮想通貨カジノ♪",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/lucky-block"
    },
    {
      name: "Ramenbet",
      tagline: "スロットもライブカジノもスポーツも充実！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/ramenbet"
    },
    {
      name: "Flush Casino",
      tagline: "今年大注目のクリプトカジノ",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/flush-casino"
    },
    {
      name: "Queen Casino",
      bonus: "ボーナス30倍賭け条件、1,800USDTまで、フリースピン20倍賭け条件、288フリースピン",
      wagering: "30倍",
      freeSpins: "288",
      tagline: "アジア市場知名度ナンバーワンに君臨するオンラインカジノ！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/queen-casino"
    },
    {
      name: "Roobet",
      bonus: "ボーナス$0",
      tagline: "世界的有名人がアンバサダーを務めるオンラインカジノ！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/roobet"
    },
    {
      name: "Casino Sky",
      tagline: "日本のオンカジ業界プロが運営する期待のカジノ！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/casino-sky"
    },
    {
      name: "Mega Dice",
      bonus: "ボーナス35倍賭け条件、1BTCまで、フリースピン40倍賭け条件、50フリースピン",
      wagering: "35倍",
      freeSpins: "50",
      tagline: "ボーナス最大1BTCの仮想通貨カジノ！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/mega-dice"
    },
    {
      name: "Cosmoswin",
      bonus: "キャッシュバック最大$10,000",
      tagline: "可愛い女の子のキャラが案内役♪ ユニークなボーナスショップも必見です！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/cosmoswin"
    },
    {
      name: "BC.Game",
      bonus: "ボーナス45倍賭け条件、$1,600まで、フリースピン60倍賭け条件、460フリースピン",
      wagering: "45倍",
      freeSpins: "460",
      tagline: "圧巻のゲーム数＆最大1,600ドルの初回入金ボーナス！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/bc-game"
    },
    {
      name: "Stake",
      tagline: "ハウスエッジ5%レーキバック＆VIP特典が超おトク！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/stake"
    },
    {
      name: "Wonder Casino",
      tagline: "業界最速の出金スピードと仮想通貨特化ボーナス！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/wonder-casino"
    },
    {
      name: "OhMySpins",
      bonus: "ボーナス35倍賭け条件、¥65,000まで、フリースピン40倍賭け条件、200フリースピン",
      wagering: "35倍",
      freeSpins: "200",
      tagline: "マニアックなプロバイダーもココなら見つかる！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/ohmyspins"
    },
    {
      name: "Yuugado",
      tagline: "「和」がテーマのオンラインカジノ \| パチンコからスポーツベットまで！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/yuugado"
    },
    {
      name: "Tedbet",
      tagline: "豊富な決済方法が嬉しいっ♪",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/tedbet"
    },
    {
      name: "BetRebels",
      tagline: "スポーツ好き必須！カジノもどんどん充実中",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/betrebels"
    },
    {
      name: "Conquestador",
      tagline: "検索機能抜群！好みのゲームをサクサク検索できちゃう！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/conquestador"
    },
    {
      name: "Cloudbet",
      bonus: "ボーナス5BTC",
      tagline: "入出金額上限なし！仮想通貨好きハイローラー必見",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/cloudbet"
    },
    {
      name: "Lilibet",
      tagline: "勝ったらラッキー、負けても安心！初心者さんいらっしゃい！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/lilibet"
    },
    {
      name: "Konibet",
      tagline: "パチンコ・パチスロが遊べるオンラインカジノ！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/konibet"
    },
    {
      name: "Casino Me",
      tagline: "独自システムのお得なキャッシュバックあり！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/casino-me"
    },
    {
      name: "Mystino",
      tagline: "日本人プレイヤーの心をグッと掴むカジノといえば…！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/mystino"
    },
    {
      name: "Trustdice",
      tagline: "賭けて遊んで資産運用もできるオンラインカジノ！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/trustdice"
    },
    {
      name: "InterCasino",
      tagline: "実は20年以上歴史のあるカジノはココ！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/intercasino"
    },
    {
      name: "Empire777",
      tagline: "アジアNo.1を豪語するオンカジはここだ！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/empire777"
    },
    {
      name: "Pinnacle",
      tagline: "カジノもスポーツベットも楽しめるハイブリッド！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/pinnacle"
    },
    {
      name: "Joy Casino",
      tagline: "ジョイカジノのてんこ盛りボーナスを貰っちゃおう！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/joy-casino"
    },
    {
      name: "Vera&John",
      tagline: "オンカジといえば、やっぱりベラジョン！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/verajohn"
    },
    {
      name: "Live Casino House",
      tagline: "ライブカジノを始め、多種多様なゲームが遊べるおなじみのカジノ！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/live-casino-house"
    },
    {
      name: "Bitcasino.io",
      tagline: "元祖仮想通貨カジノ！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/bitcasino-io"
    },
    {
      name: "Casino-X",
      tagline: "太っ腹ボーナス盛りだくさんのカジノエックスで、お得にプレイ♪",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/casino-x"
    },
    {
      name: "Casitabi",
      tagline: "RPG型カジノで旅をしながらボスを倒してお得にプレイ！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/casitabi"
    },
    {
      name: "William Hill",
      tagline: "世界三大の超老舗ブックメーカー！",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/william-hill"
    },
    {
      name: "Eldoah Casino",
      tagline: "ライブカジノ利用満足度6年連続ナンバー1のオンラインカジノ",
      ctaText: "詳細を見る",
      ctaHref: "/casinos/eldoah-casino"
    }
  ],
  gameInfo: {
    intro: "「Rich Wilde and the Book of Dead」は、Play’n GO社が提供する、古代エジプトをテーマにした極めて人気の高いスロットゲームです。2016年のリリース以来、その中毒性の高いゲーム性と高配当の可能性が多くのプレイヤーを魅了し続けています。業界では「クラシック」かつ「象徴的」なタイトルとして評価されており、数多くの「Book of」スタイルのスロットに影響を与えた、まさにパイオニア的存在と言えるでしょう。 CasinoTsuは、正確さが第一。興奮はその次。このゲームの魅力を徹底的に検証しました。",
    basicInfo: {
      rtp: "96.21%",
      volatility: "高",
      reels: "5",
      paylines: "10",
      minBet: "0.01",
      maxBet: "100",
      provider: "Play'n GO",
      releaseDate: "2016"
    }
  },
  payoutTable: {
    title: "シンボルと配当",
    symbols: [
      {
        name: "Rich Wilde",
        description: "冒険家リッチワイルド（最高配当シンボル）",
        payout5: "x5,000",
        payout4: "x1,000",
        payout3: "x200",
        payout2: "x20"
      },
      {
        name: "Pharaoh",
        description: "ファラオ",
        payout5: "x2,000",
        payout4: "x400",
        payout3: "x80",
        payout2: "x16"
      },
      {
        name: "Anubis",
        description: "アヌビス",
        payout5: "x1,600",
        payout4: "x320",
        payout3: "x64",
        payout2: "x12"
      },
      {
        name: "Horus",
        description: "ホルス",
        payout5: "x1,200",
        payout4: "x240",
        payout3: "x48",
        payout2: "x10"
      },
      {
        name: "A",
        description: "トランプのA",
        payout5: "x800",
        payout4: "x160",
        payout3: "x32"
      },
      {
        name: "K",
        description: "トランプのK",
        payout5: "x800",
        payout4: "x160",
        payout3: "x32"
      },
      {
        name: "Q",
        description: "トランプのQ",
        payout5: "x600",
        payout4: "x120",
        payout3: "x24"
      },
      {
        name: "J",
        description: "トランプのJ",
        payout5: "x600",
        payout4: "x120",
        payout3: "x24"
      },
      {
        name: "10",
        description: "トランプの10",
        payout5: "x500",
        payout4: "x100",
        payout3: "x20"
      },
      {
        name: "Book Symbol",
        description: "「死者の書」（ワイルド＆スキャッター）",
        payout5: "x2,000",
        payout4: "x400",
        payout3: "x40"
      }
    ],
    maxPayout: "ベット額の10,000倍",
    notes: [
      "高配当シンボル（人物シンボル）は2つ揃っただけでも配当が発生します。",
      "「死者の書」シンボルはワイルドシンボルとスキャッターシンボルの両方の役割を果たします。",
      "配当は、ペイライン上に左から右へ連続して揃ったシンボルの組み合わせに基づいて支払われます。"
    ]
  },
  features: {
    title: "ゲーム機能",
    items: [
      {
        name: "ワイルドシンボル",
        description: "「死者の書」シンボルはワイルドとして機能し、他のシンボルの代わりとなって配当成立を助けます。また、3つ以上揃うとフリースピンがトリガーされます。",
        icon: "/images/icons/wild.png"
      },
      {
        name: "スキャッターシンボル",
        description: "「死者の書」シンボルはスキャッターとしても機能し、3つ以上揃うと10回のフリースピンを獲得できます。",
        icon: "/images/icons/scatter.png"
      },
      {
        name: "フリースピン",
        description: "10回のフリースピン中に、ランダムに選ばれた特別な拡大シンボルがリール全体に拡大し、高配当のチャンスを生み出します。フリースピン中に再度スキャッターが出現すると、追加フリースピンを獲得できます。",
        icon: "/images/icons/freespins.png"
      },
      {
        name: "ギャンブル機能",
        description: "配当成立後、カードの色またはスーツを当てて配当を倍増させるリスクのある機能です。最大5回まで挑戦可能ですが、外れると配当は没収されます。",
        icon: "/images/icons/gamble.png"
      },
      {
        name: "拡大シンボル",
        description: "フリースピン中にランダムに選ばれ、リール上に3つ以上出現するとリール全体に拡大します。ペイラインに関係なく配当が発生するため、高額配当の鍵となります。",
        icon: "/images/icons/expanding-symbol.png"
      }
    ]
  },
  sections: [
    {
      heading: "ゲーム概要とペイライン",
      paragraphs: [
        "「Rich Wilde and the Book of Dead」は、5リール、3行のグリッドでプレイされ、最大10のペイラインを備えています。ペイライン数はプレイヤーが1から10の間で自由に調整可能ですが、多くのプレイヤーは当選確率を高めるために10ライン設定でプレイします。",
        "このゲームの際立った特徴の一つは、高配当シンボル（人物シンボル）がペイライン上にわずか2つ揃うだけでも配当が発生する点であり、比較的緩やかな配当成立条件を備えています。"
      ]
    },
    {
      heading: "シンボルと配当",
      paragraphs: [
        "ゲーム内には、高配当シンボル（Rich Wilde、Pharaoh、Anubis、Horus）と低配当シンボル（A, K, Q, J, 10）が存在します。高配当シンボルは2つから、低配当シンボルは3つ以上揃うと配当が発生します。",
        "「死者の書」シンボルは、ワイルドシンボルとスキャッターシンボルの両方の役割を担い、配当成立を助けるとともに、3つ以上揃うとフリースピンをトリガーします。"
      ]
    },
    {
      heading: "ベット額の設定",
      paragraphs: [
        "スピンを開始する前に、コインバリュー、コイン数、ペイライン数を組み合わせて1スピンあたりのベット額を調整します。コインバリューは$0.01から$1.00（または$2.00）まで設定可能で、最小ベット額は$0.01、最大ベット額は$100です。",
        "オートプレイ機能も搭載されており、連続スピンを自動で行うことが可能です。"
      ]
    },
    {
      heading: "RTP（還元率）について",
      paragraphs: [
        "「Book of Dead」の標準RTPは96.21%ですが、カジノによっては低い設定が採用されている可能性があります。プレイ前にゲーム内のヘルプセクションでRTPを必ず確認することが推奨されます。"
      ]
    },
    {
      heading: "変動率（ボラティリティ）",
      paragraphs: [
        "このゲームの変動率は「High（高）」であり、一度の配当で得られる金額が大きい可能性がある一方で、当選頻度が比較的低いことを意味します。大きな勝利を狙えるポテンシャルがある反面、当たるまでには忍耐が必要となるゲームプレイが期待できます。"
      ]
    },
    {
      heading: "最大配当",
      paragraphs: [
        "「Book of Dead」の最大配当倍率は、ベット額の10,000倍です。理論上の最大値であり、高額ベットでプレイした場合、€500,000（約8500万円相当）といった具体的な上限額が設定されている場合もあります。"
      ]
    },
    {
      heading: "ボーナス購入機能について",
      paragraphs: [
        "「Book of Dead」には、直接フリースピンラウンドを購入できる「ボーナスバイ機能」は搭載されていません。フリースピンを獲得するには、通常ゲーム中にスキャッターシンボルを3つ以上出現させる必要があります。"
      ]
    },
    {
      heading: "グラフィックとサウンド",
      paragraphs: [
        "古代エジプトをテーマにした重厚で豪華なデザインと、没入感のあるサウンドがゲーム体験を向上させます。モバイルデバイスにも最適化されており、どこでも快適にプレイできます。"
      ]
    },
    {
      heading: "モバイル対応について",
      paragraphs: [
        "スマートフォンやタブレット（iOS、Android）のブラウザから直接アクセスし、スムーズにゲームをプレイできます。特別なアプリのダウンロードは不要です。"
      ]
    },
    {
      heading: "デモプレイ（無料プレイ）について",
      paragraphs: [
        "多くのオンラインカジノでデモプレイモードが提供されており、実際の資金を使わずにゲームのルールやフィーチャーを試すことができます。初心者の方にはデモプレイから始めることをお勧めします。"
      ]
    },
    {
      heading: "ゲーム中に問題が起こったら？",
      paragraphs: [
        "万が一、ゲームプレイ中に問題が発生した場合、ゲームは中断され、ベット資金は払い戻されるか、自動的に結果が反映されます。解決しない場合は、カジノのカスタマーサポートに連絡してください。"
      ]
    },
    {
      heading: "ブックオブデッド｜総評・レビューまとめ",
      paragraphs: [
        "「Book of Dead」は、その高いボラティリティとフリースピンモードでの爆発力により、長年にわたり多くのプレイヤーに愛され続けているスロットです。シンプルながらも強力なフィーチャー、魅力的なテーマ、そして高いポテンシャルにより、一撃の大きな配当を狙いたいプレイヤーや、古代エジプトの冒険を楽しみたいプレイヤーに強くお勧めできます。"
      ],
      table: {
        title: "各評価項目",
        columns: ["項目", "評価"],
        rows: [
          ["グラフィック", "★★★★★"],
          ["サウンド", "★★★★★"],
          ["面白さ", "★★★★☆"],
          ["還元率と変動率", "★★★★☆"],
          ["総合評価", "★★★★☆"]
        ]
      }
    },
    {
      heading: "ブックオブデッドが好きなら、このスロットもおすすめ！",
      table: {
        columns: ["スロット名", "おすすめポイント"],
        rows: [
          ["レガシーオブデッド (Legacy Of Dead)", "「Book of Dead」の続編とも言えるPlay’n GO社のスロット。RTPが96.58%とやや高めに設定。"],
          ["ブックオブオズ (Book of OZ)", "Microgaming社からリリースされた「Book of」スタイルのスロット。リールを個別に再スピンできるリスピン機能が特徴。"]
        ]
      }
    },
    {
      heading: "よくある質問（FAQ）",
      faq: [
        {
          q: "「Book of Dead」はシリーズスロットですか？",
          a: "はい、Play’n GO社が展開する「リッチワイルドシリーズ」の人気作の一つです。他にも冒険家のリッチワイルドが登場するスロットがあります。"
        },
        {
          q: "「Book of Dead」はどのオンラインカジノで遊べますか？",
          a: "多くのオンラインカジノで提供されています。例えば、2アップカジノやミキカジノなどでプレイ可能です。"
        }
      ]
    }
  ],
  similarGames: [
    ],
  prosCons: {
    pros: [
      "高ボラティリティによる高配当の可能性",
      "フリースピン中の拡大シンボルが強力",
      "ワイルドとスキャッターを兼ねる「死者の書」シンボル",
      "ギャンブル機能によるスリル",
      "古代エジプトをテーマにした魅力的なグラフィックとサウンド",
      "モバイルデバイスに完全対応"
    ],
    cons: [
      "RTPはカジノによって変動する可能性あり",
      "高ボラティリティのため、当たるまで忍耐が必要",
      "ボーナス購入機能はない",
      "ゲーム性は比較的シンプル"
    ]
  },
  faq: [
    {
      q: "「Book of Dead」はシリーズスロットですか？",
      a: "はい、その通りです。「Book of Dead」は、Play’n GO社が展開する「リッチワイルドシリーズ」の人気作の一つです。このシリーズには、「Rich Wilde and the Tome of Madness」や「Doom of Dead」など、他にも冒険家のリッチワイルドが登場する魅力的なスロットがございます。 CasinoTsuは、シリーズ全体を通して一貫したテーマとゲーム性が楽しめる点を評価しています。"
    },
    {
      q: "「Book of Dead」はどのオンラインカジノで遊べますか？",
      a: "「Book of Dead」は非常に人気が高いため、多くのオンラインカジノで提供されています。例えば、当サイトで CasinoTsu が紹介している [2アップカジノ](https://casinotsu.com/) や [ミキカジノ](https://casinotsu.com/) といったカジノでもプレイ可能です。他にも多数のカジノで遊べますので、皆様のお好みに合ったカジノを見つけてみてください。"
    }
  ],
  cta: {
    text: "今すぐブックオブデッドをプレイ！",
    href: "/casinos"
  },
  breadcrumbs: [
    { label: "CasinoTsu", href: "/" },
    { label: "スロット", href: "/slots" },
    { label: "ブックオブデッド", href: "/slots/book-of-dead" }
  ],
  tableOfContents: [
    { label: "ブックオブデッド｜レビューの流れ", href: "#%E3%83%96%E3%83%83%E3%82%AF%E3%82%AA%E3%83%96%E3%83%83%E3%83%89%EF%BD%9C%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC%E3%81%AE%E6%B5%81%E3%82%8C" },
    { label: "ボーナスをもらってブックオブデッドをプレイ！", href: "#%E3%83%9C%E3%83%BC%E3%83%8A%E3%82%B9%E3%82%82%E3%82%89%E3%81%A3%E3%81%A6%E3%83%96%E3%83%83%E3%82%AF%E3%82%AA%E3%83%96%E3%83%83%E3%83%89%E3%82%92%E3%83%97%E3%83%AC%E3%82%A4%EF%BC%81" },
    { label: "ブックオブデッドの基本情報とルール", href: "#%E3%83%96%E3%83%83%E3%82%AF%E3%82%AA%E3%83%96%E3%83%83%E3%83%89%E3%81%AE%E5%91%BA%E6%9C%AC%E6%83%85%E5%A0%B1%E3%81%A8%E3%83%AB%E3%83%BC%E3%83%AB" },
    { label: "ゲーム概要とペイライン", href: "#%E3%82%B2%E3%83%BC%E3%83%A0%E6%A6%82%E8%A6%81%E3%81%A8%E3%83%9A%E3%82%A4%E3%83%A9%E3%82%A4%E3%83%B3" },
    { label: "シンボルと配当", href: "#%E3%82%B7%E3%83%B3%E3%83%9C%E3%83%AB%E3%81%A8%E9%85%8D%E5%BD%95" },
    { label: "ベット額の設定", href: "#%E3%83%99%E3%83%83%E3%83%88%E9%A1%8D%E3%81%AE%E8%A8%AD%E5%AE%9A" },
    { label: "RTP（還元率）について", href: "#rtp-%E9%82%84%E5%85%83%E7%8E%87-%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6" },
    { label: "変動率（ボラティリティ）", href: "#%E5%8F%98%E5%8B%95%E7%8E%87-%E3%83%9C%E3%83%A9%E3%83%86%E3%82%A3%E3%83%AA%E3%83%86%E3%82%A3" },
    { label: "最大配当", href: "#%E6%9C%80%E5%A4%A7%E9%85%8D%E5%BD%95" },
    { label: "ボーナス購入機能について", href: "#%E3%83%9C%E3%83%BC%E3%83%8A%E3%82%B9%E8%B3%BC%E5%85%A5%E6%A9%9F%E8%83%BD%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6" },
    { label: "ブックオブデッド｜ゲーム機能", href: "#%E3%83%96%E3%83%83%E3%82%AF%E3%82%AA%E3%83%96%E3%83%83%E3%83%89%EF%BD%9C%E3%82%B2%E3%83%BC%E3%83%A0%E6%A9%9F%E8%83%BD" },
    { label: "ワイルドシンボル", href: "#%E3%83%AF%E3%82%A4%E3%83%AB%E3%83%89%E3%82%B7%E3%83%B3%E3%83%9C%E3%83%AB" },
    { label: "フリースピン", href: "#%E3%83%95%E3%83%AA%E3%83%BC%E3%82%B9%E3%83%94%E3%83%B3" },
    { label: "ギャンブル機能", href: "#%E3%82%AE%E3%83%A3%E3%83%B3%E3%83%96%E3%83%AB%E6%A9%9F%E8%83%BD" },
    { label: "グラフィックとサウンド", href: "#%E3%82%B0%E3%83%A9%E3%83%95%E3%82%A3%E3%83%83%E3%82%AF%E3%81%A8%E3%82%B5%E3%82%A6%E3%83%B3%E3%83%89" },
    { label: "モバイル対応について", href: "#%E3%83%A2%E3%83%90%E3%82%A4%E3%83%AB%E5%AF%A7%E5%BF%9C%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6" },
    { label: "デモプレイ（無料プレイ）について", href: "#%E3%83%87%E3%83%A2%E3%83%97%E3%83%AC%E3%82%A4-%E7%84%A1%E6%96%99%E3%83%97%E3%83%AC%E3%82%A4-%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6" },
    { label: "ゲーム中に問題が起こったら？", href: "#%E3%82%B2%E3%83%BC%E3%83%A0%E4%B8%AD%E3%81%AB%E5%95%8F%E9%A1%8C%E3%81%8C%E8%B5%B7%E3%81%93%E3%81%A3%E3%81%9F%E3%82%89%EF%BC%9F" },
    { label: "ブックオブデッド｜総評・レビューまとめ", href: "#%E3%83%96%E3%83%83%E3%82%AF%E3%82%AA%E3%83%96%E3%83%83%E3%83%89%EF%BD%9C%E7%B7%8F%E8%A9%95-%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC%E3%81%BE%E3%81%A8%E3%80%85%E3%82%81" },
    { label: "ブックオブデッドが好きなら、このスロットもおすすめ！", href: "#%E3%83%96%E3%83%83%E3%82%AF%E3%82%AA%E3%83%96%E3%83%83%E3%83%89%E3%81%8C%E5%A5%BD%E3%81%8D%E3%81%AA%E3%82%89%E3%80%81%E3%81%93%E3%81%AE%E3%82%B9%E3%83%AD%E3%83%83%E3%83%88%E3%82%82%E3%81%8A%E3%81%99%E3%81%99%E3%82%81%EF%BC%81" },
    { label: "よくある質問（FAQ）", href: "#%E3%82%88%E3%81%8F%E3%81%82%E3%82%8B%E8%B3%AA%E5%95%8F" }
  ]
};

export default function Page() {
  return <SlotTemplate data={data} canonicalPath="/slots/book-of-dead" />;
}
