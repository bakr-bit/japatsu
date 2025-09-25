import SlotsTemplate, { SlotsPageData } from "@/components/templates/SlotsTemplate";

const data: SlotsPageData = {
  "title": "バレンタインスロット特集｜甘く刺激的なオンラインスロットで勝利の女神をゲット！",
  "intro": "バレンタインデーの甘い雰囲気をさらに盛り上げる、厳選バレンタインスロットをご紹介！ロマンチックなテーマから、ちょっぴり刺激的なものまで、多様なスロットで運試しを楽しんでみませんか？高RTP、爆発力のあるフリースピン、魅力的なボーナス機能など、勝利の女神を射止めるためのヒントも満載です。責任あるプレイを忘れずに、素敵なバレンタインをお過ごしください。",
  "featured": {
    "title": "注目のバレンタインスロット",
    "items": [
      {
        "name": "Sweet Bonanza（スイートボナンザ）",
        "href": "/reviews/sweet-bonanza",
        "img": "https://example.com/sweet-bonanza.jpg",
        "provider": "Pragmatic Play",
        "rtp": "96.51%",
        "volatility": "高",
        "maxMultiplier": "21,100倍",
        "rating": 4.8,
        "badge": "人気No.1"
      },
      {
        "name": "Immortal Romance（イモータルロマンス）",
        "href": "/reviews/immortal-romance",
        "img": "https://example.com/immortal-romance.jpg",
        "provider": "Microgaming",
        "rtp": "96.86%",
        "volatility": "中",
        "maxMultiplier": "12,150倍",
        "rating": 4.5,
        "badge": "高RTP"
      }
    ]
  },
  "rankings": {
    "title": "バレンタインスロットランキングTOP3",
    "items": [
      {
        "rank": 1,
        "slot": {
          "name": "Sweet Bonanza",
          "href": "/reviews/sweet-bonanza",
          "img": "https://example.com/sweet-bonanza.jpg",
          "provider": "Pragmatic Play",
          "rtp": "96.51%",
          "volatility": "高",
          "maxMultiplier": "21,100倍",
          "rating": 4.8
        },
        "facts": [
          {
            "label": "テーマ",
            "value": "スイーツ"
          },
          {
            "label": "ボーナス",
            "value": "フリースピン、マルチプライヤー"
          }
        ],
        "summary": "キャンディやフルーツが溢れるSweet Bonanzaは、バレンタインの雰囲気にぴったり。高RTPと爆発力のあるマルチプライヤーで、大きな勝利を狙えます。",
        "cta": {
          "text": "詳しく見る",
          "href": "/reviews/sweet-bonanza"
        }
      }
    ]
  },
  "criteria": [
    "RTP（還元率）",
    "ボラティリティ",
    "ボーナス機能",
    "テーマ",
    "ゲーム性"
  ],
  "tips": [
    "予算を決めてプレイしましょう。",
    "RTPやボラティリティを考慮してスロットを選びましょう。",
    "ボーナスを有効活用しましょう。"
  ],
  "prosCons": {
    "pros": [
      "バレンタイン限定のプロモーションが楽しめる",
      "ロマンチックなテーマのスロットで気分が盛り上がる"
    ],
    "cons": [
      "特定のテーマに限定される",
      "プロモーション期間が短い場合がある"
    ]
  },
  "faq": [
    {
      "q": "バレンタインスロットはどこでプレイできますか？",
      "a": "当サイトで紹介しているオンラインカジノでプレイできます。各カジノのレビューページも参考にしてください。"
    }
  ],
  "cta": {
    "text": "バレンタインスロットをプレイする",
    "href": "/offers"
  }
};

export default function Page() {
  return <SlotsTemplate data={data} canonicalPath="/slots/valentine" />;
}
