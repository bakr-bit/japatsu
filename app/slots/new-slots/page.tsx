import SlotsTemplate, { SlotsPageData } from "@/components/templates/SlotsTemplate";

const data: SlotsPageData = {
  "title": "最新オンラインスロット徹底ガイド【2024年版】",
  "intro": "常に新しい刺激を求めるスロットファン必見！\n\nこのページでは、最新のオンラインスロットゲームを厳選してご紹介。人気プロバイダーの新作から、革新的な機能を搭載した注目作まで、様々な切り口で魅力的なスロットを深掘りします。還元率（RTP）、ボラティリティ、最大ペイアウト倍率などの主要スペックはもちろん、ゲームのテーマや特徴、プレイ体験に基づくレビューも掲載。自分にぴったりの最新スロットを見つけるための、徹底ガイドとしてご活用ください。",
  "featured": {
    "title": "注目の最新スロット",
    "items": [
      {
        "name": "仮タイトル1",
        "href": "/slots/example1",
        "img": "https://example.com/image1.jpg",
        "provider": "プロバイダーA",
        "rtp": "96.5%",
        "volatility": "中",
        "maxMultiplier": "5000倍",
        "rating": 4.5,
        "badge": "NEW"
      },
      {
        "name": "仮タイトル2",
        "href": "/slots/example2",
        "img": "https://example.com/image2.jpg",
        "provider": "プロバイダーB",
        "rtp": "97.0%",
        "volatility": "高",
        "maxMultiplier": "10000倍",
        "rating": 4,
        "badge": "HOT"
      },
      {
        "name": "仮タイトル3",
        "href": "/slots/example3",
        "img": "https://example.com/image3.jpg",
        "provider": "プロバイダーC",
        "rtp": "95.8%",
        "volatility": "低",
        "maxMultiplier": "2000倍",
        "rating": 3.5
      }
    ]
  },
  "rankings": {
    "title": "最新スロットランキング TOP3",
    "items": [
      {
        "rank": 1,
        "slot": {
          "name": "仮タイトル1",
          "href": "/slots/example1",
          "img": "https://example.com/image1.jpg",
          "provider": "プロバイダーA",
          "rtp": "96.5%",
          "volatility": "中",
          "maxMultiplier": "5000倍",
          "rating": 4.5,
          "badge": "BEST"
        },
        "facts": [
          {
            "label": "還元率",
            "value": "96.5%"
          },
          {
            "label": "最大ペイアウト",
            "value": "5000倍"
          }
        ],
        "summary": "革新的なボーナス機能と美しいグラフィックが魅力。",
        "cta": {
          "text": "詳しく見る",
          "href": "/slots/example1"
        }
      },
      {
        "rank": 2,
        "slot": {
          "name": "仮タイトル2",
          "href": "/slots/example2",
          "img": "https://example.com/image2.jpg",
          "provider": "プロバイダーB",
          "rtp": "97.0%",
          "volatility": "高",
          "maxMultiplier": "10000倍",
          "rating": 4,
          "badge": "HOT"
        },
        "facts": [
          {
            "label": "還元率",
            "value": "97.0%"
          },
          {
            "label": "最大ペイアウト",
            "value": "10000倍"
          }
        ],
        "summary": "高ボラティリティで一攫千金を狙えるスリリングなスロット。",
        "cta": {
          "text": "詳しく見る",
          "href": "/slots/example2"
        }
      },
      {
        "rank": 3,
        "slot": {
          "name": "仮タイトル3",
          "href": "/slots/example3",
          "img": "https://example.com/image3.jpg",
          "provider": "プロバイダーC",
          "rtp": "95.8%",
          "volatility": "低",
          "maxMultiplier": "2000倍",
          "rating": 3.5
        },
        "facts": [
          {
            "label": "還元率",
            "value": "95.8%"
          },
          {
            "label": "最大ペイアウト",
            "value": "2000倍"
          }
        ],
        "summary": "安定したプレイを楽しみたい方におすすめ。",
        "cta": {
          "text": "詳しく見る",
          "href": "/slots/example3"
        }
      }
    ]
  },
  "criteria": [
    "還元率(RTP)",
    "ボラティリティ",
    "最大ペイアウト倍率",
    "ゲームテーマ",
    "ボーナス機能"
  ],
  "tips": [
    "少額から始める",
    "予算を決めておく",
    "RTPの高いスロットを選ぶ"
  ],
  "faq": [
    {
      "q": "新しいスロットはどこで見つけられますか？",
      "a": "このページで最新情報を随時更新しています。また、各オンラインカジノの新着情報セクションもおすすめです。"
    },
    {
      "q": "無料プレイはできますか？",
      "a": "多くのオンラインカジノでは、デモモードで無料でプレイできます。/free-play で詳細をご確認ください。"
    }
  ],
  "cta": {
    "text": "最新スロットをプレイする！",
    "href": "/offers"
  }
};

export default function Page() {
  return <SlotsTemplate data={data} canonicalPath="/slots/new-slots" />;
}
