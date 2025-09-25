import SlotsTemplate, { SlotsPageData } from "@/components/templates/SlotsTemplate";

const data: SlotsPageData = {
  "title": "Megawaysスロット徹底攻略【2024年最新】",
  "intro": "Megawaysスロットは、数千から数十万通りのペイラインを持つ革新的なオンラインスロットです。高ボラティリティで爆発的な勝利の可能性を秘めており、多くのプレイヤーを魅了しています。本ページでは、Megawaysスロットの仕組み、遊び方、おすすめ機種、そして安全性までを網羅的に解説。初心者から上級者まで、Megawaysスロットの魅力を最大限に楽しむための情報を提供します。",
  "featured": {
    "title": "注目のMegawaysスロット",
    "items": [
      {
        "name": "Bonanza Megaways",
        "href": "/reviews/bonanza-megaways",
        "img": "https://example.com/bonanza.jpg",
        "provider": "Big Time Gaming",
        "rtp": "96%",
        "volatility": "高",
        "maxMultiplier": "10000x",
        "rating": 4.5
      },
      {
        "name": "Extra Chilli Megaways",
        "href": "/reviews/extra-chilli-megaways",
        "img": "https://example.com/extrachilli.jpg",
        "provider": "Big Time Gaming",
        "rtp": "96.82%",
        "volatility": "高",
        "maxMultiplier": "20000x",
        "rating": 4.8,
        "badge": "人気No.1"
      },
      {
        "name": "Great Rhino Megaways",
        "href": "/reviews/great-rhino-megaways",
        "img": "https://example.com/greatrhino.jpg",
        "provider": "Pragmatic Play",
        "rtp": "96.58%",
        "volatility": "高",
        "maxMultiplier": "20000x",
        "rating": 4.2
      }
    ]
  },
  "rankings": {
    "title": "Megawaysスロットおすすめランキング",
    "items": [
      {
        "rank": 1,
        "slot": {
          "name": "Dog House Megaways",
          "href": "/reviews/dog-house-megaways",
          "img": "https://example.com/doghouse.jpg",
          "provider": "Pragmatic Play",
          "rtp": "96.55%",
          "volatility": "高",
          "maxMultiplier": "12000x",
          "rating": 4.7,
          "badge": "高配当"
        },
        "facts": [
          {
            "label": "RTP",
            "value": "96.55%"
          },
          {
            "label": "最大配当",
            "value": "12,000倍"
          },
          {
            "label": "ボラティリティ",
            "value": "高"
          }
        ],
        "summary": "フリースピンでマルチプライヤーがどんどん上昇！爆発力抜群！",
        "cta": {
          "text": "詳しく見る",
          "href": "/reviews/dog-house-megaways"
        }
      }
    ]
  },
  "criteria": [
    "RTP（還元率）",
    "ボラティリティ",
    "最大ペイライン数",
    "ボーナス機能",
    "ゲームテーマ"
  ],
  "providers": [
    {
      "provider": "Big Time Gaming",
      "description": "Megawaysの開発元",
      "picks": [
        {
          "name": "Bonanza Megaways",
          "href": "/reviews/bonanza-megaways"
        }
      ]
    },
    {
      "provider": "Pragmatic Play",
      "picks": [
        {
          "name": "Great Rhino Megaways",
          "href": "/reviews/great-rhino-megaways"
        }
      ]
    }
  ],
  "tips": [
    "少額から始める",
    "予算を設定する",
    "デモプレイで練習する"
  ],
  "prosCons": {
    "pros": [
      "数万通りのペイラインで高配当のチャンス",
      "様々なボーナス機能で飽きない",
      "多くのゲームプロバイダーが提供"
    ],
    "cons": [
      "ボラティリティが高く、資金管理が重要",
      "ペイラインの仕組みが複雑に見える場合も"
    ]
  },
  "faq": [
    {
      "q": "Megawaysスロットとは？",
      "a": "Megawaysスロットとは、スピンごとに変化するペイラインを持つオンラインスロットです。"
    },
    {
      "q": "Megawaysスロットはどこで遊べますか？",
      "a": "当サイトで紹介しているオンラインカジノでプレイできます。[オンラインカジノ一覧へのリンク]"
    }
  ],
  "cta": {
    "text": "Megawaysスロットをプレイする",
    "href": "/offers"
  }
};

export default function Page() {
  return <SlotsTemplate data={data} canonicalPath="/slots/megaways" />;
}
