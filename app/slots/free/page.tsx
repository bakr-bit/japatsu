import SlotsTemplate, { SlotsPageData } from "@/components/templates/SlotsTemplate";

const data: SlotsPageData = {
  "title": "無料スロットで遊び尽くそう！ - 日本語カジノ",
  "intro": "オンラインカジノで無料スロットをプレイする方法、おすすめの無料スロット、そして無料スロットを最大限に楽しむためのヒントを網羅した完全ガイドです。リスクなしでスロットの仕組みを理解し、お気に入りのゲームを見つけるための第一歩を踏み出しましょう！",
  "featured": {
    "title": "注目の無料スロット",
    "items": [
      {
        "name": "Starburst XXXtreme",
        "href": "/slots/starburst-xxxtreme",
        "img": "https://example.com/starburst.jpg",
        "provider": "NetEnt",
        "rtp": "96.26%",
        "volatility": "高",
        "maxMultiplier": "200,000x",
        "rating": 4.5
      },
      {
        "name": "Moon Princess",
        "href": "/slots/moon-princess",
        "img": "https://example.com/moonprincess.jpg",
        "provider": "Play'n GO",
        "rtp": "96.5%",
        "volatility": "中",
        "maxMultiplier": "5,000x",
        "rating": 4
      },
      {
        "name": "Sweet Bonanza",
        "href": "/slots/sweet-bonanza",
        "img": "https://example.com/sweetbonanza.jpg",
        "provider": "Pragmatic Play",
        "rtp": "96.48%",
        "volatility": "高",
        "maxMultiplier": "21,100x",
        "rating": 4.8
      }
    ]
  },
  "rankings": {
    "title": "人気無料スロットランキング",
    "items": [
      {
        "rank": 1,
        "slot": {
          "name": "Gates of Olympus",
          "href": "/slots/gates-of-olympus",
          "img": "https://example.com/gatesofolympus.jpg",
          "provider": "Pragmatic Play",
          "rtp": "96.5%",
          "volatility": "高",
          "maxMultiplier": "5,000x",
          "rating": 4.9
        },
        "facts": [
          {
            "label": "プロバイダー",
            "value": "Pragmatic Play"
          },
          {
            "label": "RTP",
            "value": "96.5%"
          },
          {
            "label": "ボラティリティ",
            "value": "高"
          }
        ],
        "summary": "ギリシャ神話をテーマにしたビジュアルと、高ボラティリティによる爆発力が魅力。",
        "cta": {
          "text": "詳しく見る",
          "href": "/slots/gates-of-olympus"
        }
      }
    ]
  },
  "criteria": [
    "ゲーム性",
    "RTP（還元率）",
    "ボラティリティ",
    "ボーナス機能",
    "グラフィック",
    "人気度"
  ],
  "providers": [
    {
      "provider": "NetEnt",
      "description": "高品質なグラフィックと革新的なゲーム性で知られる老舗プロバイダー。",
      "picks": [
        {
          "name": "Starburst",
          "href": "/slots/starburst"
        }
      ]
    }
  ],
  "tips": [
    "様々な無料スロットを試して、自分に合ったゲームを見つけよう。",
    "無料プレイでゲームのルールやペイラインを理解してから、リアルマネーでプレイすることを検討しましょう。"
  ],
  "prosCons": {
    "pros": [
      "リスクなしでプレイできる",
      "様々なゲームを試せる",
      "リアルマネーを使う前に練習できる"
    ],
    "cons": [
      "実際のお金は獲得できない"
    ]
  },
  "faq": [
    {
      "q": "無料スロットはどこでプレイできますか？",
      "a": "多くのオンラインカジノで、登録不要で無料スロットをプレイできます。当サイトのおすすめカジノもチェックしてみてください。"
    },
    {
      "q": "無料スロットとリアルマネートスロットの違いは何ですか？",
      "a": "無料スロットは仮想通貨でプレイするため、実際のお金を賭ける必要がなく、賞金を獲得することもできません。リアルマネートスロットは実際のお金でプレイし、賞金を獲得できます。"
    }
  ],
  "cta": {
    "text": "無料スロットをプレイ！",
    "href": "/offers"
  }
};

export default function Page() {
  return <SlotsTemplate data={data} canonicalPath="/slots/free" />;
}
