import SlotTemplate, { SlotPageData } from "@/components/templates/SlotTemplate";

const data: SlotPageData = {
  title: "ドクター・トゥーンズ（Dr.Toonz）最新スロットレビュー！ 🧪",
  hero: {
    title: "Dr Toonz",
    subheading: "ドクター・トゥーンズ",
    description: "あのリアクトゥーンズはこうして生まれた！？ 高ボラティリティでもヘビーな当たりが満載のDr.Toonz(ドクター・トゥーンズ) ☆ マックス22,000倍の特大勝利金をつかみとれ！ CasinoTsu 推薦！",
    score: 4.7,
    scoreMax: 5,
    rtp: "96.25% (変動あり)",
    maxMultiplier: "x22,000",
    provider: "Play’n GO",
    releaseDate: "2021年9月8日",
    volatility: "High (Play'n GOによる評価は8/10)",
    reels: "6",
    paylines: "4096通り（ウェイウィンシステム）",
    minBet: "$0.2",
    maxBet: "$100",
    slotImageSrc: "/slots/dr-toonz.png",
    highlights: [
      "最大22,000倍の勝利ポテンシャル",
      "Play'n GOの人気シリーズ「リアクトゥーンズ」の前日譚",
      "6リール×4行のウェイウィンシステム（4096通り）",
      "勝利連鎖でチャージされるクアンタムメーター機能",
      "フリースピン中はリール上のマルチプライヤーで勝利を最大化"
    ],
    watchouts: [
      "RTPは変動制のため、プレイ前にカジノで確認が必要",
      "ボラティリティが高いため、少額ベットで慎重にプレイすることを推奨"
    ]
  },
  featuredCasino: {
    name: "2up Casino",
    logo: "/assets/casino/2up.png",
    href: "/reviews/2up",
    ctaText: "今すぐプレイ",
    ctaHref: "/reviews/2up",
    tagline: "仮想通貨でも日本円でも遊べる、最新オンラインカジノ"
  },
  casinos: [
    {
      name: "Golden Panda",
      logo: "/assets/casino/golden-panda.jpg",
      href: "/reviews/golden-panda",
      rating: 4,
      tagline: "出金は基本的に即時反映でストレスフリー♪",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/golden-panda"
    },
    {
      name: "2up Casino",
      logo: "/assets/casino/2up.png",
      href: "/reviews/2up",
      rating: 4,
      tagline: "仮想通貨でも日本円でも遊べる、最新オンラインカジノ",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/2up"
    },
    {
      name: "Miki Casino",
      logo: "/assets/casino/miki.jpg",
      href: "/reviews/miki",
      rating: 4,
      tagline: "充実したゲームラインナップ！盛りだくさんのボーナスでお得にプレイ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/miki"
    },
    {
      name: "WSM Casino",
      logo: "/assets/casino/wsm-casino.png",
      href: "/reviews/wsm-casino",
      rating: 4,
      tagline: "時代の最先端？！「ミームコイン」×「オンラインカジノ」",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/wsm-casino"
    },
    {
      name: "Bitz Casino",
      logo: "/assets/casino/bitz.jpg",
      href: "/reviews/bitz",
      bonus: "$1,000",
      freeSpins: "-",
      wagering: "29x",
      rating: 4,
      tagline: "本人確認書類不要！？ 匿名性もバッチリの最新仮想通貨カジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/bitz"
    },
    {
      name: "Wikibet",
      logo: "/assets/casino/wikibet.jpg",
      href: "/reviews/wikibet",
      bonus: "¥50,000",
      freeSpins: "200",
      wagering: "20x",
      rating: 4,
      tagline: "シンプルな操作性と可愛いデザインが特徴！厳選されたゲームをプレイしよう★",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/wikibet"
    },
    {
      name: "Katsuwin",
      logo: "/assets/casino/katsuwin.png",
      href: "/reviews/katsuwin",
      rating: 4.5,
      tagline: "業界トップクラスのパチンコ・パチスロ台数を誇る新星カジノ",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/katsuwin"
    },
    {
      name: "Sushi Casino",
      logo: "/assets/casino/sushi-casino.jpg",
      href: "/reviews/sushi-casino",
      bonus: "¥200,000",
      freeSpins: "50",
      wagering: "35x",
      rating: 4,
      tagline: "てんこ盛りのオファーやVIPプログラムが魅力的な最新オンラインカジノ",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/sushi-casino"
    },
    {
      name: "Parimatch",
      logo: "/assets/casino/parimatch.png",
      href: "/reviews/parimatch",
      rating: 4,
      tagline: "2024年11月オープンの最新オンカジを徹底レビュー！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/parimatch"
    },
    {
      name: "Duelbits",
      logo: "/assets/casino/duelbits.png",
      href: "/reviews/duelbits",
      rating: 4,
      tagline: "500フリースピンが嬉しいクリプトカジノ♪",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/duelbits"
    },
    {
      name: "Sportsbet.io",
      logo: "/assets/casino/sportsbetio.jpg",
      href: "/reviews/sportsbet-io",
      bonus: "1,000USDT",
      freeSpins: "-",
      rating: 4.5,
      tagline: "スポーツベットだけじゃない！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/sportsbet-io"
    },
    {
      name: "Shuffle Casino",
      logo: "/assets/casino/shuffle.jpg",
      href: "/reviews/shuffle",
      bonus: "$2,020",
      freeSpins: "-",
      wagering: "40x",
      rating: 4,
      tagline: "独自のトークンで資産運用もできる仮想通貨カジノ★",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/shuffle"
    },
    {
      name: "Winz",
      logo: "/assets/casino/winz.jpg",
      href: "/reviews/winz-io",
      bonus: "$10,000",
      freeSpins: "800",
      rating: 4.5,
      tagline: "ウェルカムオファーやボーナスに賭け条件なし♪",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/winz-io"
    },
    {
      name: "Dafabet",
      logo: "/assets/casino/dafabet.jpg",
      href: "/reviews/dafabet",
      bonus: "$500",
      freeSpins: "-",
      wagering: "20x",
      rating: 4,
      tagline: "セルティックFCのスポンサーカジノ",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/dafabet"
    },
    {
      name: "Lucky Block",
      logo: "/assets/casino/lucky-block.jpg",
      href: "/reviews/lucky-block",
      bonus: "€25,000",
      freeSpins: "50",
      wagering: "35x",
      rating: 4,
      tagline: "独自トークンもある仮想通貨カジノ♪",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/lucky-block"
    },
    {
      name: "Ramenbet",
      logo: "/assets/casino/ramenbet.png",
      href: "/reviews/ramenbet",
      rating: 4,
      tagline: "スロットもライブカジノもスポーツも充実！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/ramenbet"
    },
    {
      name: "Flush Casino",
      logo: "/assets/casino/flush-casino.png",
      href: "/reviews/flush-casino",
      rating: 4,
      tagline: "今年大注目のクリプトカジノ",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/flush-casino"
    },
    {
      name: "Queen Casino",
      logo: "/assets/casino/shinqueen.jpg",
      href: "/reviews/queen-casino",
      bonus: "1,800USDT",
      freeSpins: "288",
      wagering: "30x",
      rating: 4.5,
      tagline: "アジア市場知名度ナンバーワンに君臨するオンラインカジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/queen-casino"
    },
    {
      name: "Roobet",
      logo: "/assets/casino/roobet.jpg",
      href: "/reviews/roobet",
      bonus: "$0",
      freeSpins: "-",
      rating: 4,
      tagline: "世界的有名人がアンバサダーを務めるオンラインカジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/roobet"
    },
    {
      name: "Casino Sky",
      logo: "/images/casino/casinosky.png",
      href: "/reviews/casino-sky",
      rating: 4,
      tagline: "日本のオンカジ業界プロが運営する期待のカジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/casino-sky"
    },
    {
      name: "Mega Dice",
      logo: "/assets/casino/mega-dice.jpg",
      href: "/reviews/mega-dice",
      bonus: "1BTC",
      freeSpins: "50",
      wagering: "35x",
      rating: 3.5,
      tagline: "ボーナス最大1BTCの仮想通貨カジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/mega-dice"
    },
    {
      name: "Cosmoswin",
      logo: "/assets/casino/cosmoswin.jpg",
      href: "/reviews/cosmoswin",
      bonus: "キャッシュバック 最大$10,000",
      freeSpins: "-",
      rating: 4,
      tagline: "可愛い女の子のキャラが案内役♪ ユニークなボーナスショップも必見です！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/cosmoswin"
    },
    {
      name: "BC.Game",
      logo: "/assets/casino/bcgame.jpg",
      href: "/reviews/bc-game",
      bonus: "$1,600",
      freeSpins: "460",
      wagering: "45x",
      rating: 4,
      tagline: "圧巻のゲーム数＆最大1,600ドルの初回入金ボーナス！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/bc-game"
    },
    {
      name: "Stake Casino",
      logo: "/assets/casino/stake.png",
      href: "/reviews/stake",
      rating: 4,
      tagline: "ハウスエッジ5%レーキバック＆VIP特典が超おトク！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/stake"
    },
    {
      name: "Wonder Casino",
      logo: "/assets/casino/wonder-casino.png",
      href: "/reviews/wonder-casino",
      rating: 4.5,
      tagline: "業界最速の出金スピードと仮想通貨特化ボーナス！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/wonder-casino"
    },
    {
      name: "OhMySpins",
      logo: "/assets/casino/ohmyspins.jpg",
      href: "/reviews/ohmyspins",
      bonus: "¥65,000",
      freeSpins: "200",
      wagering: "35x",
      rating: 4,
      tagline: "マニアックなプロバイダーもココなら見つかる！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/ohmyspins"
    },
    {
      name: "Yuugado",
      logo: "/assets/casino/yuugado.png",
      href: "/reviews/yuugado",
      rating: 4.5,
      tagline: "「和」がテーマのオンラインカジノ \| パチンコからスポーツベットまで！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/yuugado"
    },
    {
      name: "Tedbet",
      logo: "/assets/casino/tedbet.png",
      href: "/reviews/tedbet",
      rating: 4.5,
      tagline: "豊富な決済方法が嬉しいっ♪",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/tedbet"
    },
    {
      name: "BetRebels",
      logo: "/assets/casino/betrebels.png",
      href: "/reviews/betrebels",
      rating: 4,
      tagline: "スポーツ好き必須！カジノもどんどん充実中",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/betrebels"
    },
    {
      name: "Conquestador",
      logo: "/assets/casino/conquestador.png",
      href: "/reviews/conquestador",
      rating: 4,
      tagline: "検索機能抜群！好みのゲームをサクサク検索できちゃう！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/conquestador"
    },
    {
      name: "Cloudbet",
      logo: "/assets/casino/cloudbet.jpg",
      href: "/reviews/cloudbet",
      bonus: "5BTC",
      freeSpins: "-",
      rating: 4,
      tagline: "入出金額上限なし！仮想通貨好きハイローラー必見",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/cloudbet"
    },
    {
      name: "Lilibet",
      logo: "/assets/casino/lilibet.png",
      href: "/reviews/lilibet",
      rating: 4,
      tagline: "勝ったらラッキー、負けても安心！初心者さんいらっしゃい！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/lilibet"
    },
    {
      name: "Konibet",
      logo: "/assets/casino/konibet.png",
      href: "/reviews/konibet",
      rating: 4.5,
      tagline: "パチンコ・パチスロが遊べるオンラインカジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/konibet"
    },
    {
      name: "Casino Me",
      logo: "/assets/casino/casino-me.jpg",
      href: "/reviews/casino-me",
      bonus: "$777",
      freeSpins: "77",
      wagering: "20x",
      rating: 4,
      tagline: "独自システムのお得なキャッシュバックあり！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/casino-me"
    },
    {
      name: "Mystino",
      logo: "/assets/casino/mystino.png",
      href: "/reviews/mystino",
      rating: 4.5,
      tagline: "日本人プレイヤーの心をグッと掴むカジノといえば…！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/mystino"
    },
    {
      name: "Trustdice",
      logo: "/assets/casino/trustdice.png",
      href: "/reviews/trustdice",
      rating: 4,
      tagline: "賭けて遊んで資産運用もできるオンラインカジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/trustdice"
    },
    {
      name: "InterCasino",
      logo: "/images/casino/inter-casino.png",
      href: "/reviews/inter-casino",
      rating: 4.5,
      tagline: "実は20年以上歴史のあるカジノはココ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/inter-casino"
    },
    {
      name: "Empire777",
      logo: "/assets/casino/empire777.jpg",
      href: "/reviews/empire777",
      bonus: "$1,600",
      freeSpins: "-",
      wagering: "20x",
      rating: 4,
      tagline: "アジアNo.1を豪語するオンカジはここだ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/empire777"
    },
    {
      name: "Pinnacle",
      logo: "/assets/casino/pinnacle.jpg",
      href: "/reviews/pinnacle",
      bonus: "$0",
      freeSpins: "-",
      rating: 3.5,
      tagline: "カジノもスポーツベットも楽しめるハイブリッド！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/pinnacle"
    },
    {
      name: "Joy Casino",
      logo: "/images/casino/joycasino.png",
      href: "/reviews/joycasino",
      rating: 4.5,
      tagline: "ジョイカジノのてんこ盛りボーナスを貰っちゃおう！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/joycasino"
    },
    {
      name: "Vera&John Casino",
      logo: "/assets/casino/vera-john.png",
      href: "/reviews/vera-john",
      rating: 4.5,
      tagline: "オンカジといえば、やっぱりベラジョン！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/vera-john"
    },
    {
      name: "Live Casino House",
      logo: "/assets/casino/live-casino-house.jpg",
      href: "/reviews/live-casino-house",
      bonus: "¥50,000",
      freeSpins: "-",
      wagering: "20x",
      rating: 4,
      tagline: "ライブカジノを始め、多種多様なゲームが遊べるおなじみのカジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/live-casino-house"
    },
    {
      name: "Bitcasino.io",
      logo: "/assets/casino/bitcasinoio.jpg",
      href: "/reviews/bitcasino-io",
      bonus: "¥200,000",
      freeSpins: "-",
      wagering: "40x",
      rating: 4.5,
      tagline: "元祖仮想通貨カジノ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/bitcasino-io"
    },
    {
      name: "Casino-X",
      logo: "/assets/casino/casino-x.png",
      href: "/reviews/casino-x",
      rating: 4.5,
      tagline: "太っ腹ボーナス盛りだくさんのカジノエックスで、お得にプレイ♪",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/casino-x"
    },
    {
      name: "Casitabi",
      logo: "/assets/casino/casitabi.jpg",
      href: "/reviews/casitabi",
      bonus: "$500",
      freeSpins: "250",
      wagering: "20x",
      rating: 4.5,
      tagline: "RPG型カジノで旅をしながらボスを倒してお得にプレイ！",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/casitabi"
    },
    {
      name: "Eldoah Casino",
      logo: "/images/casino/eldoah.png",
      href: "/reviews/eldoah",
      rating: 4.5,
      tagline: "ライブカジノ利用満足度6年連続ナンバー1のオンラインカジノ",
      ctaText: "今すぐプレイ！",
      ctaHref: "/reviews/eldoah"
    }
  ],
  gameInfo: {
    intro: "Play'n GO社より、ユニークな新作スロット「ドクター・トゥーンズ」が登場しました！CasinoTsu 推薦！◯◯トゥーンズといえば、同社の **リアクトゥーンズ** や **[リアクトゥーンズ2](https://casinotsu.com/slots/reactoonz-2)** が有名ですね👾 ドクター・トゥーンズでは、リアクトゥーンズと酷似したシンボルが登場します。それもそのはず！ **実は、あのトゥーンズたちは、このドクター・トゥーンズによって生み出された謎の生命体だったのです** 👨‍🔬 **シリーズの進化と物語**: ドクター・トゥーンズは、リアクトゥーンズシリーズの物語に深みを与える存在です。前作がキャラクターたちの活躍を描いたのに対し、本作は「ドクター・トゥーンズ」というキャラクターに焦点を当て、彼がどのようにしてあのユニークな「トゥーンズ」たちを生み出したのか、という背景ストーリーを描いています。最大勝利倍率も22,000倍と、前作から大幅にパワーアップしており、シリーズの進化を感じさせます。さて、今回はギュッと密集した雰囲気ではなく、 **6リール×4行のすっきりとしたグラフィックデザイン** とテクノ調のBGMが採用され、非常に洗練された印象です！シンボルが消えるたびに、博士の乗り物の下のファイヤーボールにエネルギーが蓄積され、蓄積されるたびにBGMのバスが効いてくるのが楽しいんです😍視覚と聴覚からワクワクを誘ってくれる、このクールなスロットを早速レビューしていきましょう！",
    basicInfo: {
      rtp: "96.25% (※変動制。カジノによって異なる場合があるため、プレイ前に確認推奨)",
      volatility: "High (Play'n GOによる評価は8/10)",
      reels: "6",
      paylines: "4096通り（ウェイウィンシステム）",
      minBet: "$0.2",
      maxBet: "$100",
      provider: "Play’n GO",
      releaseDate: "2021年9月8日"
    }
  },
  payoutTable: {
    title: "シンボルと配当表",
    symbols: [
      {
        name: "目が2つあるトゥーンズ（ピンク）",
        payout5: "5x",
        payout4: "3x",
        payout3: "2x",
        payout2: "1x"
      },
      {
        name: "目が2つあるトゥーンズ（オレンジ）",
        payout5: "4x",
        payout4: "2.5x",
        payout3: "1.5x",
        payout2: "0.8x"
      },
      {
        name: "目が2つあるトゥーンズ（グリーン）",
        payout5: "3x",
        payout4: "2x",
        payout3: "1x",
        payout2: "0.7x"
      },
      {
        name: "目が2つあるトゥーンズ（ブルー）",
        payout5: "2.5x",
        payout4: "1.5x",
        payout3: "0.8x",
        payout2: "0.6x"
      },
      {
        name: "目が1つあるトゥーンズ（イエロー）",
        payout5: "1x",
        payout4: "0.7x",
        payout3: "0.5x",
        payout2: "0.4x"
      },
      {
        name: "目が1つあるトゥーンズ（パープル）",
        payout5: "0.8x",
        payout4: "0.6x",
        payout3: "0.4x",
        payout2: "0.3x"
      },
      {
        name: "目が1つあるトゥーンズ（ライトブルー）",
        payout5: "0.7x",
        payout4: "0.5x",
        payout3: "0.3x",
        payout2: "0.2x"
      },
      {
        name: "目が1つあるトゥーンズ（ライトグリーン）",
        payout5: "0.6x",
        payout4: "0.4x",
        payout3: "0.2x",
        payout2: "0.1x"
      },
      {
        name: "プラズマボール (Wild)",
        description: "ワイルドシンボルとして機能し、スキャッター以外の全てのシンボルに代用できます。",
        payout5: "2x",
        payout4: "1x",
        payout3: "0.5x",
        payout2: "0.2x"
      }
    ],
    maxPayout: "x22,000",
    notes: [
      "※上記は$1ベットの場合の配当表です。",
      "ペイラインではなく、左端から隣接するシンボルが3つ以上揃うことで成立するウェイウィンシステムを採用。",
      "ゲームのペイウェイ（勝利方法）は、ベースゲームでは4096通りから始まりますが、ボーナスラウンド中には最大で262,144通りまで拡張される可能性があります。"
    ]
  },
  features: {
    title: "ゲーム内機能",
    items: [
      {
        name: "クアンタムメーター",
        description: "勝利の連鎖（カスケード）発生ごとにチャージされ、3回のカスケード連鎖で「QUANTUM WILDS」（ワイルド追加）、「METAMORPHOSIS」（シンボル変化）、「DISINTEGRATION」（特定シンボル消滅＆ワイルド追加）のいずれかの機能が発動します。",
        icon: "/images/icons/quantum-meter.png"
      },
      {
        name: "フリースピン",
        description: "DNAシンボルのスキャッターが3つ以上揃うと突入します。スキャッターの数に応じて、10〜25回のフリースピンを獲得できます。フリースピン中はクアンタムメーターの機能が発動しやすくなります。",
        icon: "/images/icons/free-spins.png"
      },
      {
        name: "マルチプライヤー",
        description: "フリースピン中はリール上にランダムマルチプライヤー（x2）が出現し、勝利を最大64倍まで底上げする可能性があります。これらのマルチプライヤーシンボルは、そのリール上の勝利に適用され、ペイウェイ数を倍増させます。",
        icon: "/images/icons/multiplier.png"
      },
      {
        name: "カスケードリール",
        description: "勝利の組み合わせが成立すると、そのシンボルが消滅し、上から新しいシンボルが落ちてくるシステムです。これにより、1回のスピンで複数回の勝利が発生する可能性があります。",
        icon: "/images/icons/cascade.png"
      }
    ]
  },
  sections: [
    {
      heading: "ドクター・トゥーンズの世界観 🔬",
      paragraphs: [
        "[Play'n GO](https://casinotsu.com/providers/play-n-go) 社のウェブサイトによると、トゥーンズ博士（ゲーム画面左側で機械に乗って浮遊している人物）は、科学界の異端児として設定されています。",
        "「わしの手にかかれば、画期的な方法で新しい生命体を創り出すことができる😈」そんな異端児らしい発言が原因で、博士は学会から追放されてしまいます。💨",
        "その後も独自に研究を続けた結果、 **”生命の創造”** という科学界最大のタブーを犯してしまったトゥーンズ氏🥺 これこそが **リアクトゥーンズの始まりであり、ドクタートゥーンズのスロットテーマ** となっているのです。"
      ],
      table: {
        title: "Dr Toonz 基本情報",
        columns: ["概要", "詳細"],
        rows: [
          ["名称", "Dr Toonz"],
          ["リリース日", "2021年9月8日"],
          ["プロバイダー", "[Play’n GO](https://casinotsu.com/providers/play-n-go)"],
          ["最大配当倍率", "x22,000"],
          ["ボラティリティ", "High (Play'n GOによる評価は8/10)"],
          ["最小ベット額", "$0.2"],
          ["最大ベット額", "$100"],
          ["RTP（還元率）", "**96.25%** (※変動制。カジノによって異なる場合があるため、プレイ前に確認推奨)"],
          ["リール数", "6"],
          ["行数", "4"],
          ["ペイライン（賭け方）", "4096通り（ウェイウィンシステム）"]
        ]
      }
    },
    {
      heading: "勝利方法とスペック 📊",
      paragraphs: [
        "マッド・サイエンティストであるトゥーンズ博士が生み出した生命体（シンボル）は8種類。",
        "目が1つだけのトゥーンズの絵柄はペイアウトが低めですが、目が2つあるトゥーンズのペイアウト率は高くなっています。**プラズマボールはワイルドシンボル**として機能し、**DNAヘリックスはスキャッターシンボル**です。"
      ],
      bullets: [
        "ゲームのペイウェイ（勝利方法）は、ベースゲームでは4096通りから始まりますが、ボーナスラウンド中には最大で262,144通りまで拡張される可能性があります。",
        "**※残念ながら、このスロットにはターボプレイ機能は搭載されていません。** 通常スピンの速度が少し遅く感じるかもしれませんが、カスケードの演出などをじっくりと楽しむことができます。"
      ]
    },
    {
      heading: "ゲーム内機能 ✨",
      paragraphs: [
        "ベースゲーム中にもフリースピン中にも大活躍してくれるのが、 **勝利の連鎖（カスケード）発生ごとにチャージされていく「QUANTUMETER（クアンタムメーター）」** ⚡️",
        "**クアンタムメーターは、勝利が発生し、シンボルがカスケードで除去されるごとにチャージされます。**",
        "[リアクトゥーンズ2](https://casinotsu.com/slots/reactoonz-2) をプレイされたことがある方にはお馴染みですよね！前作では、あのメガエイリアンの **ガーガントゥーン** が溜めていたエネルギーですw",
        "**クアンタムメーターは、ベースゲームでは0〜2個、フリースピン中は1〜2個のチャージからスタートします。** そして、**正確に3回のカスケード連鎖が発生すると、メーターに蓄積されたエネルギーに応じて以下のいずれかの機能が発動します。**",
        "ファイヤーボールの色が、",
        "このクアンタムメーターは、ただ溜まっているだけでなく、1回、2回、3回とチャージされるごとにBGMのバスも効いてきて、ゲーム全体がヒートアップしていくのが感じられます🔥",
        "**3回のカスケード連鎖でメーターが満タンになると、ドクター・トゥーンズは「Quantum Feature」を発動させます。**",
        "フリースピンは、DNAをかたどったスキャッターが3つ以上揃うと突入します🎰",
        "SCATTERが3つで10回、4つで15回、5つで20回、6つで25回のフリースピンを獲得可能です🎁",
        "さらにフリースピン中は、クアンタムメーターのチャージフィーチャーが発動しやすくなっています！たった1、2回の連鎖が決まるだけで、博士のビーム発射⚡️博士のつぶやきも増え、テンションが高まっているように感じられます🕺",
        "また、フリースピン中はリール上にランダムマルチプライヤー（x2）が現れ、なんと勝利を最高64倍まで底上げしてくれます🤩 **これらのマルチプライヤーシンボルは、出現したリールの勝利に適用され、そのリール上の勝利のペイウェイ数を倍増させます。** 全リールにマルチプライヤーが付いた状態で前消しなんて、ぜひ経験してみたいものです…",
        "……と、そんな夢を見ていたら、おやおやっ！",
        "DNAが揃いました！🤑 結果、$2ベットから$197、約100倍の勝利となりました😇",
        "前消しには至りませんでしたが、さすがマルチプライヤーの威力です！",
        "このBIG WINよりもさらに勝てば、MEGA BIG WIN、ULTRA BIG WIN…と続きます。こういう時に限って「ベット額を上げておけばよかったぁぁぁ\_:(´ཀ\`」 ∠):」となってしまうものですよね。笑",
        "**⚡️カスケードリールとは？** 勝利の組み合わせが成立すると、そのシンボルが消滅し、上から新しいシンボルが落ちてくる「カスケードリール」システムが採用されています。これにより、1回のスピンで複数回の勝利が発生する可能性があります。"
      ]
    },
    {
      heading: "ドクター・トゥーンズを遊ぶならこのカジノ！ 🃏",
      paragraphs: [
        "こちらの[ボーナス](https://casinotsu.com/bonuses)はすべて **ジャパカジ限定** です👇"
      ],
      table: {
        columns: ["カジノ名", "登録ボーナス"],
        rows: [
          ["[**ベラジョンカジノ**](https://casinotsu.com/reviews/vera-john)", "ベラジョンカジノの[入金不要ボーナス](https://casinotsu.com/bonuses/no-deposit)｜150フリースピン【ジャパカジ限定】<br>👉 **[ベラジョン のオファー](https://casinotsu.com/offers/vera-john-exclusive)** へ"],
          ["[**ビットカジノ**](https://casinotsu.com/reviews/bitcasino-io)", "ビットカジノの初回入金ボーナス｜最大20万円\*:･ﾟ✧"],
          ["[**インターカジノ**](https://casinotsu.com/reviews/inter-casino)", "ジャパカジからの登録で、今なら3倍の150回分（30ドル相当）登録フリースピンが獲得できますっ(/≧▽≦)/<br>👉 **[インターカジノ のオファー](https://casinotsu.com/offers/shinqueen-no-deposit-bonus)** へ"],
          ["[**カジノエックス**](https://casinotsu.com/reviews/casino-x)", "カジノエックスさんから、ジャパカジ限定の[入金不要ボーナス](https://casinotsu.com/bonuses/no-deposit)をご用意いただきました〜🎉 入金不要で4,500円も獲得可能！🔥 <br>**👉 [カジノエックス のオファー](https://casinotsu.com/offers/casino-x-exclusive)** へ"],
          ["[コンクエスタドール](https://casinotsu.com/reviews/conquestador)", "コンクエスタドールで[入金不要ボーナス](https://casinotsu.com/bonuses/no-deposit)40ドル＆フリースピン25回をゲット！🌟<br>👉 [**コンクエスタドールのオファー**](https://casinotsu.com/offers/conquestador-exclusive) へ"]
        ]
      }
    },
    {
      heading: "ドクタートゥーンズ｜まとめ 📝",
      paragraphs: [
        "数日間にわたり、1日1時間ずつプレイしてみたところ、約100回に2回程度の「BIG WIN」と、約1回のフリースピンが当たりました。",
        "フリースピン以外のフィーチャーや当たりは比較的頻繁に出現しますが、やはり高ボラティリティのため、フリースピンはなかなかお目にかかれませんでした。しかし、当たった時の金額は大きく、ガッツリ稼げる可能性を感じさせてくれる魅力的な一台でした。個人的には、今後もプレイし続けたい注目の機種です😎",
        "**🤩ジャパカジ限定ボーナスも盛りだくさん！** [すべてのお得なオファーを今すぐチェック！](https://casinotsu.com/offers)！"
      ]
    },
    {
      heading: "ドクタートゥーンズを勝手に評価！ ⭐",
      bullets: [
        "グラフィック: ★★★★★\nいつも見やすく、滑らかなグラフィックを提供してくれるPlay'n GOに感謝します！可愛らしいキャラクターたちは、世代を問わず受け入れられることでしょう！",
        "サウンド: ★★★★★\nテクノ調のBGMと、ゲージの変動に合わせて変化するサウンドエフェクトの緩急が絶妙です！😆",
        "面白さ: ★★★☆☆\nフリースピンやBIG WIN、各種チャージフィーチャーはシンプルで分かりやすいのですが、長時間プレイしていると単調さを感じてしまうかもしれません。**このゲームは、デモプレイで試してみることをお勧めします。** [Play'n GO](https://casinotsu.com/providers/play-n-go) の公式サイトや、[スロット情報サイト](https://casinotsu.com/games) で無料プレイ版が提供されていることがあります。",
        "RTPと変動率: ★★★★☆\nRTPは96.25%で平均的です。変動率（ボラティリティ）は高め（Play'n GO評価 8/10）。",
        "まとめ: ★★★★☆\n予想以上にボリューミーな当たりが頻繁に発生するため、大きく勝てるチャンスもその分だけ多いと感じました。プレイ後もワクワクが冷めない、良いゲームだと思います！",
        "総合評価： 4.1／5段階評価中"
      ]
    },
    {
      heading: "よくある質問 ❓",
      faq: [
        {
          q: "Dr. Toonzの前作は何ですか？",
          a: "Dr. Toonzは、TOONZシリーズの3作目です！前作は[Reactoonz](https://casinotsu.com/slots/reactoonz)と[Reactoonz 2](https://casinotsu.com/slots/reactoonz-2)になります。"
        },
        {
          q: "Dr. Toonzの最大配当倍率は？",
          a: "22,000倍です。"
        },
        {
          q: "Dr. ToonzのRTPはどれくらいですか？",
          a: "標準的なRTPは96.25%ですが、カジノによって変動する可能性があります。プレイ前に必ずご確認ください。"
        },
        {
          q: "Dr. Toonzは無料でプレイできますか？",
          a: "はい、多くの[オンラインカジノ](https://casinotsu.com/)や[スロット情報サイト](https://casinotsu.com/games)でデモプレイが提供されています。実際の資金を使う前に、ゲームの仕組みを理解するために活用できます。"
        }
      ]
    }
  ],
  similarGames: [
    {
      name: "Reactoonz",
      href: "/slots/reactoonz-2",
      provider: "Play'n GO",
      description: "Dr. Toonzの元となった、人気のクラスターペイ・スロット。"
    },
    {
      name: "Reactoonz 2",
      href: "/slots/reactoonz-2",
      provider: "Play'n GO",
      description: "Reactoonzの続編で、さらにパワーアップした機能が特徴。"
    },
    {
      name: "Money Train 3",
      href: "/slots/money-train-3",
      provider: "Relax Gaming",
      description: "高ボラティリティと巨大なペイアウトポテンシャルを持つ人気シリーズ。"
    }
  ],
  prosCons: {
    pros: [
      "最大22,000倍の魅力的な最大勝利倍率",
      "Play'n GOの人気シリーズ「リアクトゥーンズ」の世界観を踏襲",
      "勝利連鎖で発動する多彩なクアンタムメーター機能",
      "フリースピン中のマルチプライヤーで高配当を狙える",
      "6リール×4行のウェイウィンシステムで4096通りのペイウェイ",
      "洗練されたグラフィックとサウンドデザイン"
    ],
    cons: [
      "RTPは変動制のため、プレイするカジノで確認が必要",
      "ボラティリティが高いため、初心者にはやや厳しい可能性がある",
      "ベースゲームの単調さを感じる場合がある"
    ]
  },
  breadcrumbs: [
    { label: "Home", href: "https://casinotsu.com/" },
    { label: "Slots", href: "https://casinotsu.com/slots" },
    { label: "Dr toonz", href: "https://casinotsu.com/slots/dr-toonz" }
  ],
  tableOfContents: [
    { label: "ドクター・トゥーンズの世界観", href: "#%E3%83%89%E3%82%AF%E3%82%BF%E3%83%BC%E3%83%BB%E3%83%88%E3%82%A5%E3%83%BC%E3%83%B3%E3%82%BA%E3%81%AE%E4%B8%96%E7%95%8C%E8%A7%82" },
    { label: "ボーナスもらってドクター・トゥーンズをプレイ！", href: "#%E3%83%9C%E3%83%BC%E3%83%8A%E3%82%B9%E3%82%82%E3%82%89%E3%81%A3%E3%81%A6%E3%83%89%E3%82%AF%E3%82%BF%E3%83%BC%E3%83%BB%E3%83%88%E3%82%A5%E3%83%BC%E3%83%B3%E3%82%BA%E3%82%92%E3%83%97%E3%83%AC%E3%82%A4%EF%BC%81" },
    { label: "勝利方法とスペック", href: "#%E5%8B%9D%E5%88%A9%E6%96%B9%E6%B3%95%E3%81%A8%E3%82%B9%E3%83%9A%E3%83%83%E3%82%AF" },
    { label: "シンボルと配当表", href: "#%E3%82%B7%E3%83%B3%E3%83%9C%E3%83%AB%E3%81%A8%E9%85%8D%E5%BD%95%E8%A1%A8" },
    { label: "オートプレイ", href: "#%E3%82%AA%E3%83%BC%E3%83%88%E3%83%97%E3%83%AC%E3%82%A4" },
    { label: "RTP（還元率）", href: "#RTP%EF%BC%88%E5%85%89%E5%85%89%E7%8E%87%EF%BC%89" },
    { label: "ボラティリティ", href: "#%E3%83%9C%E3%83%A9%E3%83%86%E3%82%A3%E3%83%AA%E3%83%86%E3%82%A3" },
    { label: "最高配当倍率", href: "#%E6%9C%80%E9%AB%98%E9%85%8D%E5%BD%95%E5%80%8D%E7%8E%87" },
    { label: "ゲーム内機能", href: "#%E3%82%B2%E3%83%BC%E3%83%A0%E5%86%85%E6%A9%9F%E8%83%BD" },
    { label: "クアンタムメーター", href: "#%E3%82%AF%E3%82%A2%E3%83%B3%E3%82%BF%E3%83%A0%E3%83%A1%E3%83%BC%E3%82%BF%E3%83%BC" },
    { label: "フリースピン", href: "#%E3%83%95%E3%83%AA%E3%83%BC%E3%82%B9%E3%83%94%E3%83%B3" },
    { label: "マルチプライヤー（フリースピン発生中）", href: "#%E3%83%9E%E3%83%AB%E3%83%81%E3%83%97%E3%83%A9%E3%82%A4%E3%83%A4%E3%83%BC%EF%BC%88%E3%83%95%E3%83%AA%E3%83%BC%E3%82%B9%E3%83%94%E3%83%B3%E7%99%BA%E7%94%9F%E4%B8%AD%EF%BC%89" },
    { label: "ドクター・トゥーンズ を遊ぶならこのカジノ！", href: "#%E3%83%89%E3%82%AF%E3%82%BF%E3%83%BC%E3%83%BB%E3%83%88%E3%82%A5%E3%83%BC%E3%83%B3%E3%82%BA-%E3%82%92%E9%81%8A%E3%81%B6%E3%81%AA%E3%82%89%E3%81%93%E3%81%AE%E3%82%AB%E3%82%B8%E3%83%8E%EF%BC%81" },
    { label: "ドクタートゥーンズ｜まとめ", href: "#%E3%83%89%E3%82%AF%E3%82%BF%E3%83%BC%E3%83%88%E3%82%A5%E3%83%BC%E3%83%B3%E3%82%BA%EF%BD%9C%E3%81%BE%E3%81%A8%E3%82%81" },
    { label: "ドクタートゥーンズを勝手に評価！", href: "#%E3%83%89%E3%82%AF%E3%82%BF%E3%83%BC%E3%83%88%E3%82%A5%E3%83%BC%E3%83%B3%E3%82%BA%E3%82%92%E5%8B%90%E6%89%8B%E3%81%AB%E8%A9%95%E4%BE%A1%EF%BC%81" },
    { label: "よくある質問", href: "#%E3%82%88%E3%81%8F%E3%81%82%E3%82%8B%E8%B3%AA%E5%95%8F" }
  ],
  cta: {
    text: "今すぐプレイ！",
    href: "/reviews/2up"
  }
};

export default function Page() {
  return <SlotTemplate data={data} canonicalPath="/slots/dr-toonz" />;
}
