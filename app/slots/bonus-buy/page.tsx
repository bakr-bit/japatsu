import SlotsTemplate, { SlotsPageData } from "@/components/templates/SlotsTemplate";

const data: SlotsPageData = {
  "title": "ボーナス購入スロット徹底ガイド【2024年最新】",
  "intro": "オンラインカジノで人気急上昇中のボーナス購入スロット。通常プレイよりも高額配当のチャンスを狙える魅力的な機能ですが、メリット・デメリットを理解した上でプレイすることが大切です。このページでは、ボーナス購入スロットの仕組み、遊び方、メリット・デメリット、おすすめ機種、よくある質問など、ボーナス購入スロットを徹底解説します。",
  "featured": {
    "title": "編集部おすすめボーナス購入スロット",
    "items": [
      {
        "name": "Gates of Olympus",
        "href": "/slots/gates-of-olympus",
        "img": "gates-of-olympus.jpg",
        "provider": "Pragmatic Play",
        "rtp": "96.5%",
        "volatility": "高",
        "maxMultiplier": "5000x",
        "rating": 4.8,
        "badge": "人気No.1"
      },
      {
        "name": "Sweet Bonanza",
        "href": "/slots/sweet-bonanza",
        "img": "sweet-bonanza.jpg",
        "provider": "Pragmatic Play",
        "rtp": "96.48%",
        "volatility": "中",
        "maxMultiplier": "21100x",
        "rating": 4.5
      },
      {
        "name": "Money Train 3",
        "href": "/slots/money-train-3",
        "img": "money-train-3.jpg",
        "provider": "Relax Gaming",
        "rtp": "96.1%",
        "volatility": "高",
        "maxMultiplier": "100000x",
        "rating": 4.7,
        "badge": "高配当"
      }
    ]
  },
  "rankings": {
    "title": "ボーナス購入スロットランキングTOP3",
    "items": [
      {
        "rank": 1,
        "slot": {
          "name": "Gates of Olympus",
          "href": "/slots/gates-of-olympus",
          "img": "gates-of-olympus.jpg",
          "provider": "Pragmatic Play",
          "rtp": "96.5%",
          "volatility": "高",
          "maxMultiplier": "5000x",
          "rating": 4.8
        },
        "facts": [
          {
            "label": "ボーナス購入価格",
            "value": "ベット額の100倍"
          },
          {
            "label": "フリースピン回数",
            "value": "15回"
          }
        ],
        "summary": "ギリシャ神話をモチーフにした人気スロット。フリースピン中に最大5000倍の配当が狙える。",
        "cta": {
          "text": "詳しく見る",
          "href": "/slots/gates-of-olympus"
        }
      },
      {
        "rank": 2,
        "slot": {
          "name": "Sweet Bonanza",
          "href": "/slots/sweet-bonanza",
          "img": "sweet-bonanza.jpg",
          "provider": "Pragmatic Play",
          "rtp": "96.48%",
          "volatility": "中",
          "maxMultiplier": "21100x",
          "rating": 4.5
        },
        "facts": [
          {
            "label": "ボーナス購入価格",
            "value": "ベット額の100倍"
          },
          {
            "label": "フリースピン回数",
            "value": "10回"
          }
        ],
        "summary": "キャンディがテーマの可愛らしいスロット。マルチプライヤーシンボルで高額配当を狙える。",
        "cta": {
          "text": "詳しく見る",
          "href": "/slots/sweet-bonanza"
        }
      }
    ]
  },
  "criteria": [
    "RTP（還元率）",
    "ボラティリティ",
    "最大配当倍率",
    "ボーナス購入価格",
    "ゲーム性",
    "人気度"
  ],
  "tips": [
    "資金管理を徹底しましょう。",
    "高ボラティリティのスロットはリスクが高いことを理解しましょう。",
    "ボーナス購入は必ずしも勝利を保証するものではありません。",
    "責任あるギャンブルを心がけましょう。"
  ],
  "prosCons": {
    "pros": [
      "すぐにボーナスラウンドを楽しめる",
      "高額配当のチャンスが増える"
    ],
    "cons": [
      "資金を失うリスクが高まる",
      "通常プレイよりもRTPが低い場合がある"
    ]
  },
  "faq": [
    {
      "q": "ボーナス購入スロットとは？",
      "a": "ボーナス購入スロットとは、追加料金を支払うことで、フリースピンなどのボーナスラウンドをすぐに購入できる機能が搭載されたスロットゲームです。"
    },
    {
      "q": "ボーナス購入のメリットは？",
      "a": "ボーナスラウンドをすぐにプレイできるため、時間短縮になり、高額配当獲得のチャンスも増えます。"
    }
  ],
  "cta": {
    "text": "ボーナス購入スロットを探す",
    "href": "/offers"
  }
};

export default function Page() {
  return <SlotsTemplate data={data} canonicalPath="/slots/bonus-buy" />;
}
