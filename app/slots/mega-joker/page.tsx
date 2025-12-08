import SlotTemplate, { SlotPageData } from "@/components/templates/SlotTemplate";

const data: SlotPageData = {
  title: "メガジョーカー / Mega Joker レビュー｜NetEntの高RTPスロット！",
  hero: {
    title: "メガジョーカー / Mega Joker",
    subheading: "NetEntの高RTPスロット！",
    description: "メガジョーカー（Mega Joker）は、NetEnt社が開発した、クラシックな雰囲気を纏ったビデオスロットです。その最大の特徴は、特定の条件下で実現する、驚異的に高いRTP（還元率）にございます。コイン10枚ベットのスーパーメーターモードでは、RTPが約99%に達することもあり、これはオンラインスロットの中でもトップクラスの数値です。レトロなデザインながら、ジャックポット機能も搭載しており、昔ながらのスロットの魅力を追求されるプレイヤーから注目を集めております。 CasinoTsu 推薦のスロットです。",
    score: 4.9,
    scoreMax: 5,
    rtp: "76.9%～99%",
    maxMultiplier: "x2,000",
    provider: "NetEnt",
    volatility: "中～高",
    reels: "5",
    paylines: "5",
    minBet: "0.10",
    maxBet: "10.00",
    slotImageSrc: "/slots/mega-joker.png",
    highlights: [
      "驚異的に高いRTP（スーパーメーターモードで約99%）",
      "プログレッシブジャックポット搭載",
      "クラシックなデザインとサウンド",
      "シンプルで分かりやすいゲーム性"
    ],
    watchouts: [
      "通常モードのRTPは低め",
      "中～高のボラティリティのため資金管理に注意",
      "グラフィックはやや古く感じられる可能性あり"
    ]
  },
  featuredCasino: {
    name: "CasinoTsu 推薦",
    ctaText: "プレイする",
    ctaHref: "/casinos/recommended"
  },
  casinos: [
    {
      name: "カジノA",
      logo: "/images/casino/casinoA.png",
      href: "/casinos/casinoA",
      bonus: "初回入金で100%ボーナス＋フリースピン",
      freeSpins: "50回",
      wagering: "30倍",
      rating: 4.5,
      tagline: "豊富なゲーム数と充実のサポート",
      ctaText: "今すぐ登録",
      ctaHref: "/casinos/casinoA/signup"
    },
    {
      name: "カジノB",
      logo: "/images/casino/casinoB.png",
      href: "/casinos/casinoB",
      bonus: "入金不要ボーナス $20 プレゼント",
      freeSpins: "なし",
      wagering: "40倍",
      rating: 4.7,
      tagline: "モバイルプレイに最適化",
      ctaText: "ボーナスを受け取る",
      ctaHref: "/casinos/casinoB/bonus"
    }
  ],
  gameInfo: {
    intro: "メガジョーカーは、クラシックなスロットマシンの外観を持ちながらも、ユニークなゲームプレイを提供いたします。正確さが第一。興奮はその次。",
    basicInfo: {
      rtp: "76.9%～99%",
      volatility: "中～高",
      reels: "5",
      paylines: "5",
      minBet: "0.10",
      maxBet: "10.00",
      provider: "NetEnt",
      releaseDate: "不明"
    }
  },
  payoutTable: {
    title: "配当表",
    symbols: [
      {
        name: "ジョーカー",
        description: "ワイルドシンボル。ペイライン上に3つ揃うとジャックポット獲得のチャンス。",
        payout5: "-",
        payout4: "-",
        payout3: "-",
        isSpecial: true
      },
      {
        name: "メガジョーカー",
        payout5: "2000",
        payout4: "200",
        payout3: "40",
        isSpecial: false
      },
      {
        name: "ベル",
        payout5: "200",
        payout4: "40",
        payout3: "20",
        isSpecial: false
      },
      {
        name: "7",
        payout5: "100",
        payout4: "20",
        payout3: "10",
        isSpecial: false
      },
      {
        name: "チェリー",
        payout5: "20",
        payout4: "10",
        payout3: "4",
        isSpecial: false
      },
      {
        name: "レモン",
        payout5: "20",
        payout4: "10",
        payout3: "4",
        isSpecial: false
      },
      {
        name: "オレンジ",
        payout5: "20",
        payout4: "10",
        payout3: "4",
        isSpecial: false
      },
      {
        name: "プラム",
        payout5: "20",
        payout4: "10",
        payout3: "4",
        isSpecial: false
      }
    ],
    maxPayout: "2000",
    notes: [
      "上記はコインバリュー1.00ベット時の配当です。",
      "ジャックポットの獲得条件はゲーム内ヘルプをご確認ください。"
    ]
  },
  features: {
    title: "ゲームの特徴",
    items: [
      {
        name: "高いRTP",
        description: "通常モードでは76.9%ですが、スーパーメーターモードで10枚ベットすると99%に達します。",
        icon: "icon-rtp"
      },
      {
        name: "スーパーメーターモード",
        description: "通常モードの勝利金を移動させ、より高配当を狙えるモード。99% RTPの鍵。",
        icon: "icon-bonus"
      },
      {
        name: "プログレッシブジャックポット",
        description: "ベット額の一部が蓄積され、一攫千金のチャンスがあります。",
        icon: "icon-jackpot"
      },
      {
        name: "クラシックデザイン",
        description: "昔ながらのフルーツスロットを彷彿とさせるレトロなデザインとサウンド。",
        icon: "icon-classic"
      }
    ]
  },
  sections: [
    {
      heading: "メガジョーカーの遊び方",
      paragraphs: [
        "メガジョーカーのプレイは、比較的シンプルです。"
      ],
      bullets: [
        "1. **ベット額の設定:** まず、画面下部にある「BET」ボタンで、1スピンあたりのベット額を設定します。コインの枚数とコインバリューを調整することで、最終的なベット額が決まります。",
        "2. **スピン:** ベット額を設定したら、「SPIN」ボタンを押してリールを回転させます。",
        "3. **勝利:** 5つのペイラインのいずれかに、同じシンボルが3つ以上揃うと配当が発生します。",
        "4. **スーパーメーターモードへの移行:** 通常モードで勝利した場合、賞金を「COLLECT」ボタンで受け取るか、「TRANSFER TO SUPERMETER」ボタンでスーパーメーターに移動させるかを選択できます。",
        "5. **スーパーメーターモードでのプレイ:** スーパーメーターに賞金が移動したら、スーパーメーターモードでプレイを開始できます。このモードでは、ベット額が一定になり、より高配当を狙えます。"
      ]
    },
    {
      heading: "ジャックポットの狙い方",
      paragraphs: [
        "プログレッシブジャックポットを獲得するには、通常、スーパーメーターモードで最大ベット（コイン10枚）を行い、リール上に特定のシンボルの組み合わせ（通常は3つのジョーカース symbols）を揃える必要があります。ジャックポットの詳細は、ゲーム内のヘルプ画面で確認できます。"
      ]
    },
    {
      heading: "NetEntについて",
      paragraphs: [
        "NetEntは、革新的なゲーム開発で知られる大手プロバイダーであり、その中でもメガジョーカーは、伝統的なスロット体験を求めるプレイヤーに愛されています。このゲームは、特に[高 RTP スロット](/slots/high-rtp)の中でも際立った存在です。"
      ]
    }
  ],
  similarGames: [
    {
      name: "Starbust",
      href: "/slots/starburst",
      provider: "NetEnt",
      description: "NetEntの人気スロット。シンプルなゲーム性と美しいグラフィックが特徴。"
    },
    {
      name: "Gonzo's Quest",
      href: "/slots/gonzos-quest",
      provider: "NetEnt",
      description: "革新的なアバランチ機能搭載。冒険心をくすぐるスロット。"
    }
  ],
  prosCons: {
    pros: [
      "驚異的に高いRTP: スーパーメーターモードでの RTP は 99% に達し、プレイヤーに非常に有利です。",
      "プログレッシブジャックポット: 一攫千金のチャンスがあります。",
      "クラシックな魅力: 昔ながらのスロットが好きなプレイヤーにはたまらないデザインとゲーム性です。",
      "シンプルで分かりやすい: 初心者でもすぐにプレイできます。"
    ],
    cons: [
      "RTPの低さ: 通常モードの RTP は低めです。スーパーメーターモードを効果的に活用する必要があります。",
      "ボラティリティ: 中～高のボラティリティのため、資金管理には注意が必要です。",
      "グラフィック: 最新のスロットと比較すると、グラフィックはやや古く感じられるかもしれません。"
    ]
  },
  faq: [
    {
      q: "メガジョーカーのRTPはいくつですか？",
      a: "通常モードでは76.9%ですが、スーパーメーターモードで10枚ベットすると99%に達します。"
    },
    {
      q: "ジャックポットはありますか？",
      a: "はい、プログレッシブジャックポットが搭載されています。"
    },
    {
      q: "モバイルでもプレイできますか？",
      a: "はい、PCおよびモバイルデバイスに対応しています。"
    }
  ],
  cta: {
    text: "今すぐメガジョーカーをプレイ！",
    href: "/casinos/recommended"
  },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "スロット", href: "/slots" },
    { label: "NetEnt", href: "/providers/netent" },
    { label: "メガジョーカー", href: "/slots/mega-joker" }
  ],
  tableOfContents: [
    { label: "導入・概要", href: "#intro" },
    { label: "ゲーム基本情報", href: "#game-info" },
    { label: "ゲームの特徴", href: "#features" },
    { label: "メガジョーカーの遊び方", href: "#how-to-play" },
    { label: "ジャックポットの狙い方", href: "#how-to-win-jackpot" },
    { label: "メガジョーカーのメリット・デメリット", href: "#pros-cons" },
    { label: "まとめ", href: "#summary" },
    { label: "よくある質問", href: "#faq" }
  ]
};

export default function Page() {
  return <SlotTemplate data={data} canonicalPath="/slots/mega-joker" />;
}
