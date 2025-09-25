import SlotsTemplate, { SlotsPageData } from "@/components/templates/SlotsTemplate";

const data: SlotsPageData = {
  "title": "高配当スロットランキング｜還元率(RTP)の高いおすすめ機種【2024年最新】",
  "intro": "還元率（RTP）の高いスロットで遊びたいと思いませんか？このページでは、高配当スロットの選び方やおすすめ機種、安全性などを徹底解説。高RTPスロットで勝利のチャンスを掴みましょう！",
  "featured": {
    "title": "編集部おすすめ高配当スロット",
    "items": [
      {
        "name": "Book of Dead",
        "href": "/slots/book-of-dead",
        "img": "https://example.com/book-of-dead.jpg",
        "provider": "Play'n GO",
        "rtp": "96.21%",
        "volatility": "高",
        "maxMultiplier": "5000x",
        "rating": 4.8,
        "badge": "おすすめ"
      },
      {
        "name": "Starburst XXXtreme",
        "href": "/slots/starburst-xxxtreme",
        "img": "https://example.com/starburst-xxxtreme.jpg",
        "provider": "NetEnt",
        "rtp": "96.26%",
        "volatility": "高",
        "maxMultiplier": "200000x",
        "rating": 4.5
      },
      {
        "name": "Sweet Bonanza",
        "href": "/slots/sweet-bonanza",
        "img": "https://example.com/sweet-bonanza.jpg",
        "provider": "Pragmatic Play",
        "rtp": "96.51%",
        "volatility": "中",
        "maxMultiplier": "21100x",
        "rating": 4.7
      }
    ]
  },
  "rankings": {
    "title": "高配当スロットランキングTOP5",
    "items": [
      {
        "rank": 1,
        "slot": {
          "name": "Mega Moolah",
          "href": "/slots/mega-moolah",
          "img": "https://example.com/mega-moolah.jpg",
          "provider": "Microgaming",
          "rtp": "96%",
          "volatility": "高",
          "maxMultiplier": "プログレッシブジャックポット",
          "rating": 4.9,
          "badge": "No.1"
        },
        "facts": [
          {
            "label": "還元率",
            "value": "96%"
          },
          {
            "label": "最大配当",
            "value": "プログレッシブジャックポット"
          },
          {
            "label": "ボラティリティ",
            "value": "高"
          }
        ],
        "summary": "Mega Moolahは、巨額のプログレッシブジャックポットで有名なスロットです。一攫千金を狙うなら、Mega Moolahに挑戦してみましょう。",
        "cta": {
          "text": "詳しく見る",
          "href": "/slots/mega-moolah"
        }
      },
      {
        "rank": 2,
        "slot": {
          "name": "Blood Suckers",
          "href": "/slots/blood-suckers",
          "img": "https://example.com/blood-suckers.jpg",
          "provider": "NetEnt",
          "rtp": "98.6%",
          "volatility": "低",
          "maxMultiplier": "900x",
          "rating": 4.6
        },
        "facts": [
          {
            "label": "還元率",
            "value": "98.6%"
          },
          {
            "label": "最大配当",
            "value": "900x"
          },
          {
            "label": "ボラティリティ",
            "value": "低"
          }
        ],
        "summary": "Blood Suckersは、非常に高いRTPを誇るスロットです。安定したプレイを好むプレイヤーにおすすめです。",
        "cta": {
          "text": "詳しく見る",
          "href": "/slots/blood-suckers"
        }
      }
    ]
  },
  "criteria": [
    "還元率(RTP)",
    "ボラティリティ",
    "最大配当",
    "ゲーム性",
    "人気度"
  ],
  "providers": [
    {
      "provider": "NetEnt",
      "description": "NetEntは、高品質なスロットで知られる有名プロバイダーです。",
      "picks": [
        {
          "name": "Starburst",
          "href": "/slots/starburst",
          "note": "定番スロット"
        },
        {
          "name": "Gonzo's Quest",
          "href": "/slots/gonzos-quest",
          "note": "人気アドベンチャースロット"
        }
      ]
    }
  ],
  "tips": [
    "高RTPスロットを選ぶ",
    "予算管理を徹底する",
    "無料デモで練習する"
  ],
  "prosCons": {
    "pros": [
      "高RTPで勝ちやすい",
      "ジャックポット獲得のチャンス"
    ],
    "cons": [
      "還元率は保証値ではない",
      "ギャンブル依存症のリスク"
    ]
  },
  "faq": [
    {
      "q": "RTPとは何ですか？",
      "a": "RTP(Return to Player)は、プレイヤーへの還元率のことです。RTPが高いほど、プレイヤーに有利なスロットと言えます。"
    },
    {
      "q": "ボラティリティとは何ですか？",
      "a": "ボラティリティは、配当の変動性を表します。ボラティリティが高いスロットは、大きな配当が期待できますが、同時にリスクも高くなります。"
    }
  ],
  "cta": {
    "text": "おすすめスロットをもっと見る",
    "href": "/slots"
  }
};

export default function Page() {
  return <SlotsTemplate data={data} canonicalPath="/slots/best-payout" />;
}
