import SlotsTemplate, { SlotsPageData } from "@/components/templates/SlotsTemplate";

const data: SlotsPageData = {
  "title": "高ボラティリティスロットで一攫千金！爆発力満点のおすすめ機種を徹底解説",
  "intro": "高ボラティリティスロットは、爆発的な勝利金を狙えるハイリスク・ハイリターンなゲームです。ペイアウトの頻度は低いものの、一度の勝利で大きなリターンが期待できます。この記事では、高ボラティリティスロットの特徴、メリット・デメリット、おすすめ機種、プレイ時の注意点などを詳しく解説します。",
  "featured": {
    "title": "編集部おすすめの高ボラティリティスロット",
    "items": [
      {
        "name": "Sweet Bonanza Xmas",
        "href": "/reviews/sweet-bonanza-xmas",
        "img": "https://example.com/sweet-bonanza-xmas.jpg",
        "provider": "Pragmatic Play",
        "rtp": "96.51%",
        "volatility": "高",
        "maxMultiplier": "21,100倍",
        "rating": 4.8,
        "badge": "おすすめ"
      },
      {
        "name": "Jammin' Jars 2",
        "href": "/reviews/jammin-jars-2",
        "img": "https://example.com/jammin-jars-2.jpg",
        "provider": "Push Gaming",
        "rtp": "96.40%",
        "volatility": "高",
        "maxMultiplier": "50,000倍",
        "rating": 4.5
      },
      {
        "name": "Razor Shark",
        "href": "/reviews/razor-shark",
        "img": "https://example.com/razor-shark.jpg",
        "provider": "Push Gaming",
        "rtp": "96.70%",
        "volatility": "高",
        "maxMultiplier": "2,500倍",
        "rating": 4.7
      }
    ]
  },
  "criteria": [
    "ペイアウト率（RTP）",
    "最大配当倍率",
    "ボーナス機能",
    "ゲーム性",
    "人気度"
  ],
  "prosCons": {
    "pros": [
      "一撃で高額賞金を獲得できる可能性がある",
      "少ない資金で大きなリターンを狙える",
      "ゲーム展開がスリリングで刺激的"
    ],
    "cons": [
      "資金が減りやすい",
      "勝ちにくい",
      "忍耐力が必要"
    ]
  },
  "tips": [
    "資金管理を徹底しましょう",
    "高ボラティリティスロットに適したベット額を設定しましょう",
    "損失額を設定し、それを超えたらプレイを止めましょう",
    "オンラインカジノのボーナスを有効活用しましょう"
  ],
  "faq": [
    {
      "q": "高ボラティリティスロットとは？",
      "a": "高ボラティリティスロットとは、ペイアウトの頻度は低いものの、一度の勝利で大きなリターンが期待できるスロットゲームです。ハイリスク・ハイリターンなゲーム性で、一攫千金を狙うプレイヤーに人気です。"
    },
    {
      "q": "高ボラティリティスロットのメリットは？",
      "a": "大きな勝利金を獲得できる可能性があることです。少ない資金で大きなリターンを狙えるため、資金が少ないプレイヤーにもおすすめです。"
    },
    {
      "q": "高ボラティリティスロットのデメリットは？",
      "a": "資金が減りやすい点です。また、勝ちにくいゲーム性のため、忍耐力が必要です。資金管理を徹底し、無理のない範囲でプレイすることが重要です。"
    }
  ],
  "cta": {
    "text": "高ボラティリティスロットランキングを見る",
    "href": "/slots/high-volatility/ranking"
  }
};

export default function Page() {
  return <SlotsTemplate data={data} canonicalPath="/slots/high-volatility" />;
}
