import SlotTemplate, { SlotPageData } from "@/components/templates/SlotTemplate";

const data: SlotPageData = {
  title: "スターバースト（Starburst）世界で一番人気のスロットレビュー",
  hero: {
    title: "スターバースト（Starburst）",
    subheading: "世界で一番人気のスロットレビュー",
    description: "スターバーストは、NETENT（ネットエント）社が開発した、世界中で絶大な人気を誇るオンラインスロットゲームです。そのシンプルながらも洗練されたゲーム性、美しいグラフィック、そして宇宙をテーマにした魅力的な世界観で、多くのプレイヤーを魅了し続けています。フリースピンや複雑なボーナスゲームは搭載されていませんが、その分、初心者からベテランまで誰でも簡単に楽しむことができるのが特徴です。リール全体を覆うワイルドシンボルからの連鎖的な配当獲得を目指す、王道とも言えるスロット体験を提供します。 CasinoTsu 推薦！",
    score: 4.7,
    scoreMax: 5,
    rtp: "96.1%",
    maxMultiplier: "x500",
    provider: "NETENT",
    releaseDate: "2013年11月12日",
    volatility: "Low",
    reels: "5",
    paylines: "10 (左右両方向)",
    minBet: "$0.10",
    maxBet: "$100",
    slotImageSrc: "/slots/starburst.jpg",
    highlights: [
      "左右どちらからでも配当が成立する「両方向ペイライン」を採用。",
      "中央3リール（2, 3, 4）に出現し、リール全体に拡張するワイルドシンボル。",
      "ワイルド出現時に最大3回連続のリスピンが発生。"
    ],
    watchouts: [
      "フリースピンや複雑なボーナスゲームは搭載されていない。",
      "低ボラティリティのため、一撃の爆発力は限定的。"
    ]
  },
  featuredCasino: {
    name: "2アップカジノ",
    logo: "/assets/casino/2up.png",
    href: "https://go.casinotsu.com/go/2up:2up?referrer_path=%2Fslots%2Fstarburst",
    ctaText: "今すぐプレイ",
    ctaHref: "https://go.casinotsu.com/go/2up:2up?referrer_path=%2Fslots%2Fstarburst",
    tagline: "仮想通貨と日本円で遊べる最新カジノ"
  },
  casinos: [
    {
      name: "ボンズカジノ",
      href: "https://casinotsu.com/reviews/bons",
      bonus: "ジャパカジ限定で4,500円の入金不要ボーナス＋ムーンプリンセス入金不要フリースピン20回分",
      freeSpins: "20回分",
      wagering: "記載なし",
      rating: 4.5,
      tagline: "多彩なプロモーションと豊富なゲーム数",
      ctaText: "詳細を見る",
      ctaHref: "https://casinotsu.com/reviews/bons"
    },
    {
      name: "ジョイカジノ",
      href: "https://casinotsu.com/reviews/joycasino",
      bonus: "入金不要で4,500円ボーナス",
      freeSpins: "なし",
      wagering: "記載なし",
      rating: 4.4,
      tagline: "洗練されたインターフェースと充実したVIPプログラム",
      ctaText: "詳細を見る",
      ctaHref: "https://casinotsu.com/reviews/joycasino"
    },
    {
      name: "トラストダイス",
      href: "https://casinotsu.com/reviews/trustdice",
      bonus: "【ジャパカジ限定】入金不要ボーナス最大25ドル",
      freeSpins: "なし",
      wagering: "記載なし",
      rating: 4.3,
      tagline: "ブロックチェーン技術を活用したユニークなカジノ",
      ctaText: "詳細を見る",
      ctaHref: "https://casinotsu.com/reviews/trustdice"
    },
    {
      name: "ビットカジノ",
      href: "https://casinotsu.com/reviews/bitcasino-io",
      bonus: "100%初回入金ボーナス（最大1,500USDT/200,000円）",
      freeSpins: "なし",
      wagering: "記載なし",
      rating: 4.6,
      tagline: "仮想通貨に特化した元祖オンラインカジノ",
      ctaText: "詳細を見る",
      ctaHref: "https://casinotsu.com/reviews/bitcasino-io"
    },
    {
      name: "ベラジョン",
      href: "https://casinotsu.com/reviews/vera-john",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.7,
      tagline: "日本で最も有名なオンラインカジノの一つ",
      ctaText: "詳細を見る",
      ctaHref: "https://casinotsu.com/reviews/vera-john"
    },
    {
      name: "カジノシークレット",
      href: "https://casinotsu.com/reviews/casino-secret",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.5,
      tagline: "キャッシュバック制度が魅力",
      ctaText: "詳細を見る",
      ctaHref: "https://casinotsu.com/reviews/casino-secret"
    },
    {
      name: "ミスティーノ",
      href: "https://casinotsu.com/reviews/mystino",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.4,
      tagline: "分かりやすいボーナス条件と初回特典",
      ctaText: "詳細を見る",
      ctaHref: "https://casinotsu.com/reviews/mystino"
    },
    {
      name: "1win",
      href: "https://go.casinotsu.com/go/1win:1win?referrer_path=%2Fslots%2Fstarburst",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.3,
      tagline: "幅広いゲームラインナップと仮想通貨対応",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/1win:1win?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Miki",
      href: "https://go.casinotsu.com/go/miki:miki?referrer_path=%2Fslots%2Fstarburst",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.2,
      tagline: "充実したゲームとボーナス",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/miki:miki?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Betgoat",
      href: "https://go.casinotsu.com/go/betgoat:betgoat?referrer_path=%2Fslots%2Fstarburst",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.1,
      tagline: "最新クリプトカジノ、独自コインも利用可能",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/betgoat:betgoat?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "2up",
      href: "https://go.casinotsu.com/go/2up:2up?referrer_path=%2Fslots%2Fstarburst",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.0,
      tagline: "仮想通貨と日本円で遊べる最新カジノ",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/2up:2up?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Cybet",
      href: "https://go.casinotsu.com/go/cybet:cybet?referrer_path=%2Fslots%2Fstarburst",
      bonus: "$500ボーナス、50フリースピン",
      freeSpins: "50",
      wagering: "35倍賭け条件",
      rating: 4.2,
      tagline: "可愛いマスコットキャラが魅力のクリプトカジノ",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/cybet:cybet?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Bitz",
      href: "https://go.casinotsu.com/go/bitz:bitz?referrer_path=%2Fslots%2Fstarburst",
      bonus: "$1,000ボーナス",
      freeSpins: "なし",
      wagering: "29倍賭け条件",
      rating: 4.3,
      tagline: "匿名性の高い仮想通貨カジノ",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/bitz:bitz?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Wikibet",
      href: "https://go.casinotsu.com/go/wikibet:wikibet?referrer_path=%2Fslots%2Fstarburst",
      bonus: "¥50,000ボーナス、200フリースピン",
      freeSpins: "200",
      wagering: "20倍賭け条件",
      rating: 4.4,
      tagline: "シンプルな操作性と可愛いデザイン",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/wikibet:wikibet?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Sushi Casino",
      href: "https://go.casinotsu.com/go/sushi-casino:sushi-casino?referrer_path=%2Fslots%2Fstarburst",
      bonus: "¥200,000ボーナス、50フリースピン",
      freeSpins: "50",
      wagering: "35倍・40倍賭け条件",
      rating: 4.5,
      tagline: "豊富なオファーとVIPプログラム",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/sushi-casino:sushi-casino?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Parimatch",
      href: "https://go.casinotsu.com/go/parimatch:parimatch?referrer_path=%2Fslots%2Fstarburst",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.3,
      tagline: "2024年11月オープンの注目カジノ",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/parimatch:parimatch?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Bets.io",
      href: "https://go.casinotsu.com/go/betsio:bets-io?referrer_path=%2Fslots%2Fstarburst",
      bonus: "最大1BTCの入金ボーナス",
      freeSpins: "なし",
      wagering: "記載なし",
      rating: 4.6,
      tagline: "豪華な入金ボーナスがあるクリプトカジノ",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/betsio:bets-io?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Duelbits",
      href: "https://go.casinotsu.com/go/duelbits:duelbits?referrer_path=%2Fslots%2Fstarburst",
      bonus: "500フリースピン",
      freeSpins: "500",
      wagering: "記載なし",
      rating: 4.4,
      tagline: "人気のクリプトカジノ",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/duelbits:duelbits?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Sportsbet.io",
      href: "https://go.casinotsu.com/go/sportsbet-io:sportsbet-io?referrer_path=%2Fslots%2Fstarburst",
      bonus: "1,000USDTボーナス",
      freeSpins: "なし",
      wagering: "記載なし",
      rating: 4.5,
      tagline: "スポーツベットも楽しめる",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/sportsbet-io:sportsbet-io?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Shuffle",
      href: "https://go.casinotsu.com/go/shuffle:shuffle?referrer_path=%2Fslots%2Fstarburst",
      bonus: "$2,020ボーナス",
      freeSpins: "なし",
      wagering: "40倍賭け条件",
      rating: 4.3,
      tagline: "独自のトークンで資産運用も可能",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/shuffle:shuffle?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Winz",
      href: "https://go.casinotsu.com/go/winz:winz-io?referrer_path=%2Fslots%2Fstarburst",
      bonus: "最大$10,000ボーナス、800フリースピン",
      freeSpins: "800",
      wagering: "賭け条件なし",
      rating: 4.7,
      tagline: "賭け条件なしのボーナスが魅力",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/winz:winz-io?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Dafabet",
      href: "https://go.casinotsu.com/go/dafabet:dafabet?referrer_path=%2Fslots%2Fstarburst",
      bonus: "$500ボーナス",
      freeSpins: "なし",
      wagering: "20倍賭け条件",
      rating: 4.4,
      tagline: "セルティックFCのスポンサーカジノ",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/dafabet:dafabet?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Lucky Block",
      href: "https://go.casinotsu.com/go/lucky-block:lucky-block?referrer_path=%2Fslots%2Fstarburst",
      bonus: "€25,000ボーナス、50フリースピン",
      freeSpins: "50",
      wagering: "35倍賭け条件",
      rating: 4.5,
      tagline: "独自トークンがある仮想通貨カジノ",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/lucky-block:lucky-block?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Flush Casino",
      href: "https://go.casinotsu.com/go/flush-casino:flush?referrer_path=%2Fslots%2Fstarburst",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.3,
      tagline: "今年注目のクリプトカジノ",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/flush-casino:flush?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Queen Casino",
      href: "https://go.casinotsu.com/go/queen-casino:queen-casino?referrer_path=%2Fslots%2Fstarburst",
      bonus: "1,800USDTボーナス、288フリースピン",
      freeSpins: "288",
      wagering: "30倍・20倍賭け条件",
      rating: 4.6,
      tagline: "アジア市場で高い知名度",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/queen-casino:queen-casino?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Roobet",
      href: "https://go.casinotsu.com/go/roobet:roobet?referrer_path=%2Fslots%2Fstarburst",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.4,
      tagline: "世界的有名人がアンバサダーを務める",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/roobet:roobet?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Casino Sky",
      href: "https://go.casinotsu.com/go/casino-sky:casino-sky?referrer_path=%2Fslots%2Fstarburst",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.2,
      tagline: "日本のオンカジ業界プロが運営",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/casino-sky:casino-sky?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Mega Dice",
      href: "https://go.casinotsu.com/go/mega-dice:mega-dice?referrer_path=%2Fslots%2Fstarburst",
      bonus: "最大1BTCボーナス、50フリースピン",
      freeSpins: "50",
      wagering: "35倍・40倍賭け条件",
      rating: 4.5,
      tagline: "ボーナス最大1BTCの仮想通貨カジノ",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/mega-dice:mega-dice?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Fresh Casino",
      href: "https://go.casinotsu.com/go/fresh-casino:fresh-casino?referrer_path=%2Fslots%2Fstarburst",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.3,
      tagline: "6,000種類以上のゲーム",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/fresh-casino:fresh-casino?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "BC.Game",
      href: "https://go.casinotsu.com/go/bc-game:bc-game?referrer_path=%2Fslots%2Fstarburst",
      bonus: "最大$1,600ボーナス、460フリースピン",
      freeSpins: "460",
      wagering: "45倍・60倍賭け条件",
      rating: 4.6,
      tagline: "圧倒的なゲーム数と初回入金ボーナス",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/bc-game:bc-game?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Empire.io",
      href: "https://go.casinotsu.com/go/empire-io:empire-io?referrer_path=%2Fslots%2Fstarburst",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.4,
      tagline: "賭け条件なしのキャッシュバック",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/empire-io:empire-io?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Stake",
      href: "https://go.casinotsu.com/go/stake:stake?referrer_path=%2Fslots%2Fstarburst",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.5,
      tagline: "ハウスエッジ5%レーキバック＆VIP特典",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/stake:stake?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Wonder Casino",
      href: "https://go.casinotsu.com/go/wonder-casino:wonder-casino?referrer_path=%2Fslots%2Fstarburst",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.3,
      tagline: "業界最速の出金スピード",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/wonder-casino:wonder-casino?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "OhMySpins",
      href: "https://go.casinotsu.com/go/ohmyspins:ohmyspins?referrer_path=%2Fslots%2Fstarburst",
      bonus: "¥65,000ボーナス、200フリースピン",
      freeSpins: "200",
      wagering: "35倍・40倍賭け条件",
      rating: 4.5,
      tagline: "マニアックなプロバイダーも網羅",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/ohmyspins:ohmyspins?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Yuugado",
      href: "https://go.casinotsu.com/go/yuugado:yuugado?referrer_path=%2Fslots%2Fstarburst",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.2,
      tagline: "「和」がテーマ、パチンコも遊べる",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/yuugado:yuugado?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Tedbet",
      href: "https://go.casinotsu.com/go/tedbet:tedbet?referrer_path=%2Fslots%2Fstarburst",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.3,
      tagline: "豊富な決済方法",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/tedbet:tedbet?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "BetRebels",
      href: "https://go.casinotsu.com/go/betrebels:betrebels?referrer_path=%2Fslots%2Fstarburst",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.1,
      tagline: "スポーツベットも充実",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/betrebels:betrebels?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Conquestador",
      href: "https://go.casinotsu.com/go/conquestador:conquestador?referrer_path=%2Fslots%2Fstarburst",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.4,
      tagline: "検索機能が優秀",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/conquestador:conquestador?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Cloudbet",
      href: "https://go.casinotsu.com/go/cloudbet:cloudbet?referrer_path=%2Fslots%2Fstarburst",
      bonus: "5BTCボーナス",
      freeSpins: "なし",
      wagering: "記載なし",
      rating: 4.6,
      tagline: "入出金上限なし、ハイローラー向け",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/cloudbet:cloudbet?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Lilibet",
      href: "https://go.casinotsu.com/go/lilibet:lilibet?referrer_path=%2Fslots%2Fstarburst",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.2,
      tagline: "初心者でも安心",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/lilibet:lilibet?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Livecasino.io",
      href: "https://go.casinotsu.com/go/livecasino-io:livecasino-io?referrer_path=%2Fslots%2Fstarburst",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.5,
      tagline: "ライブカジノと仮想通貨の融合",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/livecasino-io:livecasino-io?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Lucky Bull",
      href: "https://go.casinotsu.com/go/lucky-bull:lucky-bull?referrer_path=%2Fslots%2Fstarburst",
      bonus: "$917ボーナス",
      freeSpins: "なし",
      wagering: "30倍賭け条件",
      rating: 4.3,
      tagline: "キャラクターと一緒にクエスト攻略",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/lucky-bull:lucky-bull?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Gamdom",
      href: "https://go.casinotsu.com/go/gamdom:gamdom?referrer_path=%2Fslots%2Fstarburst",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.4,
      tagline: "ハイローラー向けのレーキバックカジノ",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/gamdom:gamdom?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Energy Casino",
      href: "https://go.casinotsu.com/go/energy-casino:energy-casino?referrer_path=%2Fslots%2Fstarburst",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.2,
      tagline: "見やすいウェブサイトと操作性",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/energy-casino:energy-casino?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Konibet",
      href: "https://go.casinotsu.com/go/konibet:konibet?referrer_path=%2Fslots%2Fstarburst",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.3,
      tagline: "パチンコ・パチスロも遊べる",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/konibet:konibet?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Vulkan Vegas",
      href: "https://go.casinotsu.com/go/vulkan-vegas:vulkanvegas?referrer_path=%2Fslots%2Fstarburst",
      bonus: "¥100,000ボーナス、125フリースピン",
      freeSpins: "125",
      wagering: "40倍・30倍賭け条件",
      rating: 4.5,
      tagline: "アメコミ風の世界観",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/vulkan-vegas:vulkanvegas?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Casino Me",
      href: "https://go.casinotsu.com/go/casino-me:casino-me?referrer_path=%2Fslots%2Fstarburst",
      bonus: "$777ボーナス、77フリースピン",
      freeSpins: "77",
      wagering: "20倍賭け条件",
      rating: 4.4,
      tagline: "独自システムのお得なキャッシュバック",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/casino-me:casino-me?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Kakeyo",
      href: "https://go.casinotsu.com/go/kakeyo:kakeyo?referrer_path=%2Fslots%2Fstarburst",
      bonus: "¥100,000ボーナス、50フリースピン",
      freeSpins: "50",
      wagering: "10倍賭け条件",
      rating: 4.6,
      tagline: "ボーナス充実、スポーツベットにも最適",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/kakeyo:kakeyo?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Bons.com",
      href: "https://go.casinotsu.com/go/bons-com:bons?referrer_path=%2Fslots%2Fstarburst",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.3,
      tagline: "マインクラフト風のデザイン",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/bons-com:bons?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "InterCasino",
      href: "https://go.casinotsu.com/go/intercasino-japan:inter-casino?referrer_path=%2Fslots%2Fstarburst",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.5,
      tagline: "20年以上の歴史を持つ老舗カジノ",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/intercasino-japan:inter-casino?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Empire777",
      href: "https://go.casinotsu.com/go/empire777:empire777?referrer_path=%2Fslots%2Fstarburst",
      bonus: "$1,600ボーナス",
      freeSpins: "なし",
      wagering: "20倍賭け条件",
      rating: 4.4,
      tagline: "アジアNo.1を掲げるオンカジ",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/empire777:empire777?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "BitStarz",
      href: "https://go.casinotsu.com/go/bitstarz:bitstarz?referrer_path=%2Fslots%2Fstarburst",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.6,
      tagline: "複数通貨対応のマルチウォレット",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/bitstarz:bitstarz?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Casino-X",
      href: "https://go.casinotsu.com/go/casino-x:casino-x?referrer_path=%2Fslots%2Fstarburst",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.3,
      tagline: "太っ腹ボーナスが魅力",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/casino-x:casino-x?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Casitabi",
      href: "https://go.casinotsu.com/go/casitabi:casitabi?referrer_path=%2Fslots%2Fstarburst",
      bonus: "$500ボーナス、250フリースピン",
      freeSpins: "250",
      wagering: "20倍賭け条件",
      rating: 4.5,
      tagline: "RPG型カジノ",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/casitabi:casitabi?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "William Hill",
      href: "https://go.casinotsu.com/go/william-hill-casino:william-hill?referrer_path=%2Fslots%2Fstarburst",
      bonus: "$300ボーナス",
      freeSpins: "なし",
      wagering: "25倍賭け条件",
      rating: 4.6,
      tagline: "世界三大の超老舗ブックメーカー",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/william-hill-casino:william-hill?referrer_path=%2Fslots%2Fstarburst"
    },
    {
      name: "Eldoah Casino",
      href: "https://go.casinotsu.com/go/eldoah-casino:eldoah?referrer_path=%2Fslots%2Fstarburst",
      bonus: "記載なし",
      freeSpins: "記載なし",
      wagering: "記載なし",
      rating: 4.4,
      tagline: "ライブカジノ満足度No.1",
      ctaText: "今すぐプレイ",
      ctaHref: "https://go.casinotsu.com/go/eldoah-casino:eldoah?referrer_path=%2Fslots%2Fstarburst"
    }
  ],
  gameInfo: {
    intro: "スターバーストは、2013年のリリース以来、オンラインカジノの世界で「最も人気のあるスロットの一つ」として不動の地位を築いています。その最大の魅力は、何といっても**シンプルながらも中毒性の高いゲーム性**にあります。複雑なボーナスラウンドやフリースピンがない代わりに、出現するワイルドシンボルがゲームの鍵を握ります。 CasinoTsu も、そのシンプルさの中に隠された奥深さを高く評価しております。",
    basicInfo: {
      rtp: "96.1%",
      volatility: "Low",
      reels: "5",
      paylines: "10 (左右両方向)",
      minBet: "$0.10",
      maxBet: "$100",
      provider: "NETENT",
      releaseDate: "2013年11月12日"
    }
  },
  payoutTable: {
    title: "スターバーストのシンボルとペイライン",
    symbols: [
      {
        name: "BAR",
        payout5: "x250",
        payout4: "x100",
        payout3: "x50"
      },
      {
        name: "7",
        payout5: "x120",
        payout4: "x50",
        payout3: "x30"
      },
      {
        name: "ゴールド・スター",
        payout5: "x60",
        payout4: "x25",
        payout3: "x15"
      },
      {
        name: "パープル・スター",
        payout5: "x50",
        payout4: "x20",
        payout3: "x10"
      },
      {
        name: "ブルー・スター",
        payout5: "x40",
        payout4: "x15",
        payout3: "x8"
      },
      {
        name: "レッド・スター",
        payout5: "x30",
        payout4: "x12",
        payout3: "x7"
      },
      {
        name: "グリーン・スター",
        payout5: "x25",
        payout4: "x10",
        payout3: "x5"
      }
    ],
    maxPayout: "ベット額の500倍",
    notes: [
      "上記はベット額に対する倍率です。実際の配当は、ベット額とコインバリューによって変動します。",
      "ワイルドシンボルは配当シンボルではありませんが、他のシンボルの代わりとなり、配当成立を助けます。"
    ]
  },
  features: {
    title: "ゲームの特徴・フィーチャー：スターバーストワイルドとリスピン",
    items: [
      {
        name: "ワイルドシンボル",
        description: "リール2、3、4の中央3つのリールにのみ出現します。出現すると、そのリール全体に拡張（スタックワイルド）し、全てのシンボルの代わりとなります。",
        icon: "/images/slot-features/wild.svg"
      },
      {
        name: "リスピン機能",
        description: "ワイルドが出現すると、そのワイルドを固定したまま1回のリスピンが発生します。最大3回連続のリスピンが可能です。",
        icon: "/assets/casino/respin.jpg"
      },
      {
        name: "両方向ペイライン",
        description: "左右どちらからでも配当が成立するため、実質20ライン分のチャンスがあります。",
        icon: "/images/slot-features/payline.svg"
      }
    ]
  },
  sections: [
    {
      heading: "スターバーストの魅力と基本情報",
      paragraphs: [
        "スターバーストは、2013年のリリース以来、オンラインカジノの世界で「最も人気のあるスロットの一つ」として不動の地位を築いています。その最大の魅力は、何といっても**シンプルながらも中毒性の高いゲーム性**にあります。複雑なボーナスラウンドやフリースピンがない代わりに、出現するワイルドシンボルがゲームの鍵を握ります。 CasinoTsu も、そのシンプルさの中に隠された奥深さを高く評価しております。"
      ],
      bullets: [
        "テーマ: 宇宙、宝石、キラキラしたシンボル",
        "ゲーム性: シンプル、高速、リラックス",
        "特徴:",
        "  - ペイライン: 左右どちらからでも配当が成立する「両方向ペイライン」を採用。実質20ライン分のチャンスがあります。",
        "  - ワイルドシンボル: 中央3リール（2, 3, 4）に出現し、リール全体に拡張します。",
        "  - リスピン機能: ワイルドが出現すると、そのワイルドを固定したまま1回のリスピンが発生します。最大3回連続のリスピンが可能です。",
        "ターゲット層: 初心者、シンプルで分かりやすいスロットを好むプレイヤー、短時間で気軽にプレイしたいプレイヤー、少額からでも長く楽しみたいプレイヤー。"
      ]
    },
    {
      heading: "スターバーストのシンボルとペイライン",
      paragraphs: [
        "スターバーストには、色とりどりの宝石や、縁起の良い「BAR」、そしてラッキーナンバーの「7」といったシンボルが登場します。これらのシンボルがペイライン上に揃うことで配当が発生します。"
      ]
    },
    {
      heading: "スターバーストのWILD（ワイルド）",
      paragraphs: [
        "スターバーストのワイルドシンボルは、ゲームの展開を大きく左右する最も重要な存在です。 CasinoTsu は、このワイルドシンボルがもたらす連鎖的な勝利の可能性に注目しています。",
        "出現場所: **リール2、3、4の中央3つのリールにのみ出現します。**",
        "効果: 出現すると、そのリール全体に拡張（スタックワイルド）し、全てのシンボルの代わりとなります。",
        "リスピン: ワイルドが出現したリールは固定され、**1回のリスピン**が発生します。もし複数のリールにワイルドが出現した場合、それらがすべて固定された状態でリスピンが繰り返されます。最大で3回連続のリスピンが発生する可能性があります。",
        "このワイルドシンボルと、高配当シンボルである「BAR」や「7」との組み合わせが、BIG WIN（大きな勝利）への道となります。"
      ]
    },
    {
      heading: "スターバーストのゲームフィーチャー！目指すはワイルド3つ！いや、せめて2つ！",
      paragraphs: [
        "スターバーストのゲームプレイは、そのシンプルさゆえに非常にスピーディーで、常に何かが起こる期待感があります。 CasinoTsu は、このスピード感と期待感のバランスが、多くのプレイヤーを惹きつける要因だと考えております。"
      ],
      bullets: [
        "**連続リスピンの可能性:** もし複数のリールにワイルドが出現した場合、それらすべてが固定された状態でリスピンが繰り返されます。例えば、リール2と4にワイルドが出現した場合、それらが固定されたままリスピンが行われ、もしそのリスピンでリール3にもワイルドが出現すれば、3つのリールすべてがワイルドで埋め尽くされた状態となり、さらなるリスピンが発生します。",
        "**最大3回の連続リスピン:** このように、ワイルドシンボルがリール2、3、4すべてに出現すると、最大3回連続でリスピンが発生し、画面全体がワイルドで覆われる可能性があります。この状態での配当は非常に高額になることが期待できます。"
      ]
    },
    {
      heading: "BIG WINの瞬間",
      paragraphs: [
        "ワイルドシンボルが絡むことで、通常時でもベット額の数十倍、時には数百倍の配当が発生することがあります。特に、高配当シンボルの「BAR」がペイライン上に揃い、さらにワイルドシンボルが絡むと、一撃で高額賞金を獲得できるチャンスが生まれます。 CasinoTsu は、こうしたBIG WINの瞬間が、スターバーストのプレイをより一層エキサイティングにすると考えています。",
        "「BAR」シンボルは、スターバーストにおいて最も配当の高いシンボルの一つです。これは、「スターバースト」という名前にちなんで、「バー」が最も重要視されているのかもしれません。",
        "このように、ワイルドシンボルが絡むことで、普段はそれほど高くない配当のシンボルでも、予想外の高配当につながることがあります。",
        "BIG WINが発生した際の、まばゆい光と迫力あるサウンドエフェクトは、プレイヤーを興奮の渦に巻き込みます。正確さが第一。興奮はその次。"
      ]
    },
    {
      heading: "スターバーストの基本スペック",
      table: {
        columns: ["項目", "詳細"],
        rows: [
          ["リール数", "5リール、3行"],
          ["ペイライン", "10ライン（左右どちらからでも成立）"],
          ["COIN VALUE（コイン価値）", "$0.01 – $3.00 （※カジノにより異なる場合があります）"],
          ["BET（賭け金）", "$0.10 – $100 （※COIN VALUE x LEVEL x BET）"],
          ["MAX BET機能", "あり"],
          ["AUTO SPIN機能", "あり"],
          ["RTP（還元率）", "96.1%"],
          ["ボラティリティ", "Low（低）"],
          ["ヒット率（Hit Frequency）", "約23%（平均して4.42スピンに1回の割合で配当が発生）"],
          ["最大配当倍率", "ベット額の500倍（または最大50,000コイン）"],
          ["ワイルドシンボル", "リール2, 3, 4に出現し、拡張＆リスピンをトリガー"],
          ["リスピン", "ワイルド出現時に最大3回連続"],
          ["フリースピン・ボーナスゲーム", "なし"]
        ]
      },
      paragraphs: [
        "補足:",
        "*   **ペイライン:** 通常10ラインですが、左右両方から配当が成立するため、実質20ライン分のチャンスがあります。",
        "*   **ベット額:** COIN VALUE（コイン価値）とLEVEL（コインレベル）の組み合わせで決定されます。例えば、COIN VALUEが$0.10、LEVELが1の場合、1スピンあたりのベット額は$1.00となります。",
        "*   **最大配当:** 画面全体を最も配当の高いBARシンボルで埋めた場合、ワイルドシンボルが絡むことで、ベット額の500倍（約50,000コイン）に相当する賞金が得られる可能性があります。 CasinoTsu は、これらの基本スペックの正確性を重視しています。"
      ]
    },
    {
      heading: "グラフィック・サウンド",
      paragraphs: [
        "スターバーストのグラフィックとサウンドは、その長年にわたる人気を支える重要な要素です。 CasinoTsu は、その洗練されたデザインがプレイヤーに快適な体験を提供すると評価しています。",
        "*   **グラフィック:** 宇宙空間をイメージした背景に、宝石のように輝くシンボルが美しくデザインされています。特に、ワイルドシンボルが出現した際やBIG WINが発生した際の、まばゆい光の演出は圧巻です。シンプルながらも洗練されたビジュアルは、プレイヤーを飽きさせません。",
        "*   **サウンド:** ゲームのBGMは、宇宙の雰囲気にマッチした、落ち着きがありながらも心地よい電子音楽です。リールが回転する音や配当が発生した際のサウンドエフェクトも、ゲームのテンポを損なうことなく、プレイヤーの気分を高揚させてくれます。派手すぎず、しかしゲームの盛り上がりをしっかり演出する、絶妙なバランスのサウンドデザインと言えるでしょう。"
      ]
    },
    {
      heading: "プロバイダー情報",
      paragraphs: [
        "スターバーストは、スウェーデンに本社を置く世界有数のオンラインスロットプロバイダー、**NetEnt（ネットエント）**によって開発・提供されています。 CasinoTsu は、NetEnt社の信頼性と革新性を高く評価しており、スターバーストはその代表格として自信を持って推薦いたします。"
      ],
      bullets: [
        "会社名: NetEnt (Net Entertainment)",
        "設立: 1996年",
        "ライセンス: マルタ、イギリス、ジブラルタルなど、多数の国や地域でライセンスを取得。",
        "特徴: 革新的なゲーム開発で知られ、高品質なグラフィック、ユニークなボーナス機能、そして優れたプレイヤーエクスペリエンスを提供することで定評があります。",
        "リリース日: 2013年11月12日",
        "他の人気作品: Gonzo's Quest、Mega Fortune、Dead or Alive、Narcos Slot など、数々のヒット作を生み出しています。"
      ],
      notes: [
        "NetEntは、長年にわたりオンラインカジノ業界を牽引してきた信頼性の高いプロバイダーであり、スターバーストはその代表作の一つとして、世界中のカジノで愛され続けています。"
      ]
    },
    {
      heading: "ペイアウト・配当表",
      paragraphs: [
        "スターバーストの配当は、ペイライン上に同じシンボルが3つ以上揃うことで成立します。特に、**左右どちらからでもペイラインが成立する**ため、通常のスロットよりも配当が発生しやすいのが特徴です。 CasinoTsu は、このペイアウト構造の公平性と透明性を確認しております。"
      ]
    },
    {
      heading: "モバイル対応",
      paragraphs: [
        "スターバーストは、現代のプレイヤーが求めるモバイルでのプレイに完全対応しています。NetEntはHTML5技術を駆使してゲームを開発しているため、 CasinoTsu は、どのような環境でも快適にプレイできることを確認済みです。"
      ],
      bullets: [
        "スマートフォン・タブレット: iOS、Androidなど、ほとんどのモバイルデバイスで快適にプレイできます。",
        "シームレスな体験: デスクトップ版と変わらない美しいグラフィックとスムーズな操作性を、外出先でも楽しむことが可能です。",
        "簡単アクセス: カジノアプリやブラウザから、いつでもどこでもスターバーストにアクセスできます。"
      ],
      notes: [
        "外出先でも、ベッドの中でも、お気に入りのスターバーストを気軽に楽しむことができます。"
      ]
    },
    {
      heading: "戦略・攻略法",
      paragraphs: [
        "スターバーストは運に左右される要素が大きいスロットですが、CasinoTsu では、いくつかの戦略やヒントを参考にすることで、より長く、そして楽しくプレイすることが可能だと考えています。"
      ],
      bullets: [
        "ベット戦略:",
        "  - 低ボラティリティを活かす: スターバーストは低ボラティリティなので、比較的頻繁に配当が発生します。少額ベットで長くプレイするのに適しています。",
        "  - ベット額の調整: [資金管理](https://casinotsu.com/info/money-list)をしっかり行い、自分の予算内でプレイすることが重要です。大きく勝とうと焦ってベット額を上げすぎると、すぐに資金が底をついてしまう可能性があります。",
        "  - コインバリューとレベルの理解: コインバリューとレベルを調整することで、1スピンあたりのベット額を細かく設定できます。自分のプレイスタイルや予算に合わせて調整しましょう。",
        "  - 「MAX BET」機能の活用: 一撃のBIG WINを狙いたい場合は、MAX BET機能を使うのも一つの手ですが、リスクも高まります。",
        "**フィーチャー活用法:**",
        "  - ワイルドとリスピンを待つ: スターバーストの醍醐味はワイルドシンボルからのリスピンです。焦らず、ワイルドの出現を待ちましょう。",
        "  - 左右両方のペイラインを意識する: 配当は左からだけでなく、右からでも成立します。揃いそうなラインがないか、注意深く観察しましょう。",
        "  - 「BAR」シンボルに注目: 「BAR」シンボルは最も配当の高いシンボルの一つです。ワイルドと絡むことで大きな勝利につながる可能性が高まります。",
        "**注意点:**",
        "  - 過度な期待は禁物: 低ボラティリティとはいえ、常に大勝利が得られるわけではありません。連敗が続くこともあります。",
        "  - シンプルさゆえの単調さ: ボーナス機能が少ないため、人によっては飽きを感じることもあります。気分転換に他のスロットとローテーションするのも良いでしょう。",
        "  - 予算管理の徹底: [ギャンブル依存症](https://casinotsu.com/responsible-gambling/gambling-addiction-help)にならないよう、あらかじめプレイ時間や予算の上限を決めて、それを守ることが最も重要です。 CasinoTsu は、[責任あるギャンブル](https://casinotsu.com/info/responsible-gambling)を強く推奨いたします。"
      ]
    },
    {
      heading: "類似ゲーム",
      paragraphs: [
        "スターバーストのような宇宙や宝石をテーマにしたスロット、またはシンプルながらも中毒性の高いスロットは他にも多数存在します。 CasinoTsu では、これらの類似ゲームも、スターバーストとは異なる魅力を秘めていると考えています。"
      ],
      bullets: [
        "類似テーマのスロット:",
        "  - Gemix (Play'n GO): 宝石がテーマのクラスターペイ型のスロット。",
        "  - Crystal Rift (Rabcat): クリスタルがテーマの落下式スロット。",
        "  - Space Invaders (Playtech): レトロな宇宙シューティングゲームがモチーフのスロット。",
        "シンプル・王道スロット:",
        "  - Twin Spin (NetEnt): リンクスピン機能が特徴のクラシックスロット。",
        "  - Aloha! Cluster Pays (NetEnt): クラスターペイ方式を採用したハワイアンテーマのスロット。",
        "  - Book of Dead (Play'n GO): エジプト冒険テーマの、ボーナス機能が特徴的な人気スロット。"
      ],
      notes: [
        "これらのスロットも、スターバーストとはまた違った魅力を持っていますので、ぜひ試してみてください。"
      ]
    },
    {
      heading: "スターバーストを勝手に評価！",
      paragraphs: [
        "CasinoTsu が、スターバーストを以下の項目で評価いたしました。"
      ],
      bullets: [
        "グラフィック: ★★★★☆",
        "  宇宙のテーマに合わせた、キラキラと輝く宝石のシンボルが魅力的です。BIG WIN時の光の演出は特に美しく、没入感を高めます。",
        "サウンド: ★★★☆☆",
        "  シンプルながらも、ゲームの雰囲気にマッチしたBGMと効果音は、プレイを心地よく彩ります。BIG WIN時のサウンドは気分を高揚させます。",
        "面白さ: ★★★★★",
        "  複雑なルールがなく、誰でもすぐにプレイできる手軽さが最大の魅力です。ワイルドからのリスピンというシンプルなメカニクスながら、何度でもプレイしたくなる中毒性があります。",
        "賞金獲得: ★★★★☆",
        "  低ボラティリティのため、比較的頻繁に配当が発生します。ワイルドシンボルからの連続リスピンや、高配当シンボルとの組み合わせでBIG WINのチャンスがあり、満足感の高いプレイが期待できます。",
        "総合評価: ★★★★☆ (4.5/5)",
        "  スターバーストは、そのシンプルさ、美しさ、そして確かな面白さで、オンラインスロットの定番中の定番と言えるでしょう。初心者からベテランまで、誰もが楽しめる万能型スロットです。 CasinoTsu 推薦！"
      ]
    },
    {
      heading: "スターバーストをプレイした感想",
      paragraphs: [
        "スターバーストは、まさに「シンプル・イズ・ベスト」を体現したスロットだと感じました。複雑なボーナスラウンドを待つ必要がなく、常にワイルドシンボルからのリスピンという明確な目標があるため、ストレスなくプレイできます。 CasinoTsu は、このようなプレイヤー目線に立ったゲームデザインを高く評価しております。",
        "プレイしていると、ワイルドシンボルがなかなか出ない時間帯もありますが、それが逆に「次こそは！」という期待感を煽ります。そして、ワイルドがリールに現れた時の興奮は格別です。特に、ワイルドが拡張してリスピンが発生し、さらにワイルドが追加される瞬間は、まさにBIG WINの予感に満ちています。",
        "ベット額を抑えてじっくりプレイすれば、少額の賞金を積み重ねて長く楽しむこともできますし、ここぞというタイミングでベット額を上げて一攫千金を狙うことも可能です。私自身も、少額ベットでコツコツと資金を増やし、調子の良い時にベット額を上げてBIG WINを獲得した経験があり、その時の興奮は忘れられません。",
        "スターバーストは、気分転換にサクッとプレイしたい時や、じっくりとスロットを楽しみたい時など、どんなシチュエーションでも満足感を与えてくれる、まさに「いつでも頼れる相棒」のような存在です。"
      ]
    },
    {
      heading: "よくある質問",
      faq: [
        {
          q: "スターバーストのRTP（還元率）は？",
          a: "スターバーストのRTPは**96.1%**です。これは、プレイヤーが長期間プレイした場合に、平均してベット額の96.1%が払い戻されることを意味します。 CasinoTsu は、このRTP率が標準的であり、信頼できる数値であることを確認しております。"
        },
        {
          q: "スターバーストにフリースピンやボーナスゲームはありますか？",
          a: "スターバーストには、**伝統的なフリースピンやボーナスゲームは搭載されていません。** その代わりに、ワイルドシンボルが出現すると、そのワイルドを固定したまま1回のリスピンが発生する「リスピン機能」があります。このリスピン機能が、スターバーストの主なフィーチャーとなります。 CasinoTsu は、このシンプルさがスターバーストの魅力の一つだと考えております。"
        },
        {
          q: "スターバーストの最大配当はいくらですか？",
          a: "スターバーストの最大配当は、**ベット額の500倍**です。これは、画面全体を最も配当の高い「BAR」シンボルで埋め尽くすことができた場合に達成される可能性があります。 CasinoTsu は、この目標がプレイヤーのモチベーション維持に繋がると考えています。"
        },
        {
          q: "スターバーストは初心者でも楽しめますか？",
          a: "はい、スターバーストは**初心者の方に特におすすめ**です。ルールが非常にシンプルで、複雑な機能がないため、オンラインスロットを初めてプレイする方でもすぐに楽しむことができます。また、低ボラティリティのため、配当が比較的発生しやすく、ゲームの進行を掴みやすいのも特徴です。 CasinoTsu 推薦！"
        },
        {
          q: "スターバーストはどこでプレイできますか？",
          a: "スターバーストは、ほとんどの主要なオンラインカジノでプレイ可能です。本サイトで紹介しているカジノリストからも、お好みのカジノを見つけてプレイすることができます。 CasinoTsu では、安全で信頼できるカジノのみを掲載しております。"
        }
      ]
    }
  ],
  similarGames: [
    {
      name: "Gemix",
      provider: "Play'n GO",
      description: "宝石がテーマのクラスターペイ型のスロット。"
    },
    {
      name: "Crystal Rift",
      provider: "Rabcat",
      description: "クリスタルがテーマの落下式スロット。"
    },
    {
      name: "Space Invaders",
      provider: "Playtech",
      description: "レトロな宇宙シューティングゲームがモチーフのスロット。"
    },
    {
      name: "Twin Spin",
      provider: "NetEnt",
      description: "リンクスピン機能が特徴のクラシックスロット。"
    },
    {
      name: "Aloha! Cluster Pays",
      provider: "NetEnt",
      description: "クラスターペイ方式を採用したハワイアンテーマのスロット。"
    },
    {
      name: "Book of Dead",
      provider: "Play'n GO",
      description: "エジプト冒険テーマの、ボーナス機能が特徴的な人気スロット。"
    }
  ],
  prosCons: {
    pros: [
      "シンプルで分かりやすいゲーム性",
      "美しいグラフィックとサウンド",
      "左右両方向からのペイライン成立",
      "ワイルドシンボルによるリスピン機能",
      "低ボラティリティで安定したプレイ",
      "初心者から上級者まで楽しめる",
      "モバイル対応でいつでもどこでもプレイ可能"
    ],
    cons: [
      "フリースピンやボーナスゲームがない",
      "最大配当倍率が比較的低い",
      "人によっては単調に感じる可能性がある"
    ]
  },
  cta: {
    text: "今すぐスターバーストをプレイ！",
    href: "https://go.casinotsu.com/go/2up:2up?referrer_path=%2Fslots%2Fstarburst"
  },
  breadcrumbs: [
    { label: "Home", href: "https://casinotsu.com/" },
    { label: "Slots", href: "https://casinotsu.com/slots" },
    { label: "Starburst", href: "https://casinotsu.com/slots/starburst" }
  ],
  tableOfContents: [
    { label: "スターバーストの魅力と基本情報", href: "#スターバーストの魅力と基本情報" },
    { label: "スターバーストのシンボルとペイライン", href: "#スターバーストのシンボルとペイライン" },
    { label: "スターバーストで遊べるオンラインカジノ", href: "#スターバーストで遊べるオンラインカジノ" },
    { label: "ゲームの特徴・フィーチャー：スターバーストワイルドとリスピン", href: "#ゲームの特徴・フィーチャー：スターバーストワイルドとリスピン" },
    { label: "スターバーストの基本スペック", href: "#スターバーストの基本スペック" },
    { label: "グラフィック・サウンド", href: "#グラフィック・サウンド" },
    { label: "プロバイダー情報", href: "#プロバイダー情報" },
    { label: "ペイアウト・配当表", href: "#ペイアウト・配当表" },
    { label: "モバイル対応", href: "#モバイル対応" },
    { label: "戦略・攻略法", href: "#戦略・攻略法" },
    { label: "類似ゲーム", href: "#類似ゲーム" },
    { label: "スターバーストを勝手に評価！", href: "#スターバーストを勝手に評価！" },
    { label: "スターバーストをプレイした感想", href: "#スターバーストをプレイした感想" },
    { label: "よくある質問", href: "#よくある質問" }
  ]
};

export default function Page() {
  return <SlotTemplate data={data} canonicalPath="/slots/starburst" />;
}
