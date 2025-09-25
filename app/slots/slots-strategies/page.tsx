import SlotsTemplate, { SlotsPageData } from "@/components/templates/SlotsTemplate";

const data: SlotsPageData = {
  "title": "スロット必勝戦略ガイド：高RTPスロットで勝利を掴む方法",
  "intro": "オンラインカジノのスロットで勝ちたいなら、戦略は必須です。このガイドでは、高RTPスロットの選び方、効果的な資金管理、ボーナス活用術など、勝利に近づくための具体的な戦略を徹底解説。初心者から上級者まで、ぜひご活用ください。責任あるギャンブルを心がけ、無理のない範囲でお楽しみください。",
  "featured": {
    "title": "編集部おすすめ高RTPスロット",
    "items": [
      {
        "name": "Book of Dead",
        "href": "/slots/book-of-dead",
        "img": "https://example.com/book-of-dead.jpg",
        "provider": "Play'n GO",
        "rtp": "96.21%",
        "volatility": "高",
        "maxMultiplier": "5000x",
        "rating": 4.5
      },
      {
        "name": "Starburst",
        "href": "/slots/starburst",
        "img": "https://example.com/starburst.jpg",
        "provider": "NetEnt",
        "rtp": "96.09%",
        "volatility": "低",
        "maxMultiplier": "500x",
        "rating": 4
      },
      {
        "name": "Sweet Bonanza",
        "href": "/slots/sweet-bonanza",
        "img": "https://example.com/sweet-bonanza.jpg",
        "provider": "Pragmatic Play",
        "rtp": "96.51%",
        "volatility": "高",
        "maxMultiplier": "21100x",
        "rating": 4.8
      }
    ]
  },
  "rankings": {
    "title": "高RTPスロットランキング TOP3",
    "items": [
      {
        "rank": 1,
        "slot": {
          "name": "Sweet Bonanza",
          "href": "/slots/sweet-bonanza",
          "rtp": "96.51%"
        },
        "facts": [
          {
            "label": "RTP",
            "value": "96.51%"
          },
          {
            "label": "プロバイダー",
            "value": "Pragmatic Play"
          }
        ],
        "summary": "高いRTPと爆発力のあるマルチプライヤーが魅力。",
        "cta": {
          "text": "詳しく見る",
          "href": "/slots/sweet-bonanza"
        }
      },
      {
        "rank": 2,
        "slot": {
          "name": "Book of Dead",
          "href": "/slots/book-of-dead",
          "rtp": "96.21%"
        },
        "facts": [
          {
            "label": "RTP",
            "value": "96.21%"
          },
          {
            "label": "プロバイダー",
            "value": "Play'n GO"
          }
        ],
        "summary": "フリースピンで高配当を狙える人気スロット。",
        "cta": {
          "text": "詳しく見る",
          "href": "/slots/book-of-dead"
        }
      }
    ]
  },
  "criteria": [
    "RTP（還元率）",
    "ボラティリティ",
    "最大ペイアウト",
    "ボーナス機能",
    "ゲーム性"
  ],
  "tips": [
    "高RTPスロットを選ぶ",
    "予算を設定し、それを守る",
    "ボーナスを有効活用する",
    "ペイテーブルを確認する",
    "デモプレイで練習する"
  ],
  "prosCons": {
    "pros": [
      "高RTPスロットは還元率が高く、勝ちやすい可能性がある",
      "オンラインカジノでは様々なボーナスが利用できる"
    ],
    "cons": [
      "ギャンブルには必ずリスクが伴う",
      "必ず勝てるわけではない"
    ]
  },
  "faq": [
    {
      "q": "RTPとは？",
      "a": "Return to Playerの略で、賭け金に対する理論上の還元率です。RTPが高いほど、プレイヤーに有利と言えます。（※個々の結果を保証するものではありません）"
    },
    {
      "q": "ボラティリティとは？",
      "a": "ペイアウトの頻度と金額のばらつきを表す指標です。高ボラティリティスロットは、大勝ちの可能性も高いですが、負けるリスクも高くなります。"
    }
  ],
  "cta": {
    "text": "おすすめスロットランキングを見る",
    "href": "/slots"
  }
};

export default function Page() {
  return <SlotsTemplate data={data} canonicalPath="/slots/slots-strategies" />;
}
