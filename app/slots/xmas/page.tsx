import SlotsTemplate, { SlotsPageData } from "@/components/templates/SlotsTemplate";

const data: SlotsPageData = {
  "title": "クリスマススロットで気分を高めよう！おすすめ機種＆徹底解説",
  "intro": "キラキラ輝くオーナメント、心温まる音楽、そして高額賞金のチャンス！クリスマススロットは、ホリデーシーズンにぴったりのエンターテイメントです。定番機種から最新作まで、最高のクリスマススロットを厳選してご紹介。選び方や遊び方のコツ、ボーナス情報まで、この記事を読めばクリスマススロットを遊び尽くせます！",
  "featured": {
    "title": "注目のクリスマススロット",
    "items": [
      {
        "name": "Secrets of Christmas（シークレッツ・オブ・クリスマス）",
        "href": "/slots/secrets-of-christmas",
        "img": "https://example.com/secrets-of-christmas.jpg",
        "provider": "NetEnt",
        "rtp": "96.72%",
        "volatility": "中",
        "rating": 4.5
      },
      {
        "name": "Santa vs Rudolf（サンタ vs ルドルフ）",
        "href": "/slots/santa-vs-rudolf",
        "img": "https://example.com/santa-vs-rudolf.jpg",
        "provider": "NetEnt",
        "rtp": "96.35%",
        "volatility": "高",
        "rating": 4
      },
      {
        "name": "Jingle Spin（ジングルスピン）",
        "href": "/slots/jingle-spin",
        "img": "https://example.com/jingle-spin.jpg",
        "provider": "NetEnt",
        "rtp": "96.48%",
        "volatility": "中",
        "rating": 4.2
      }
    ]
  },
  "rankings": {
    "title": "クリスマススロットランキングTOP3",
    "items": [
      {
        "rank": 1,
        "slot": {
          "name": "Secrets of Christmas",
          "href": "/slots/secrets-of-christmas",
          "img": "https://example.com/secrets-of-christmas.jpg",
          "provider": "NetEnt",
          "rtp": "96.72%",
          "volatility": "中",
          "rating": 4.5
        },
        "facts": [
          {
            "label": "RTP",
            "value": "96.72%"
          },
          {
            "label": "ボラティリティ",
            "value": "中"
          },
          {
            "label": "プロバイダー",
            "value": "NetEnt"
          }
        ],
        "summary": "フリースピンやボーナスゲームが豊富で、高額賞金のチャンスも！",
        "cta": {
          "text": "詳しく見る",
          "href": "/slots/secrets-of-christmas"
        }
      },
      {
        "rank": 2,
        "slot": {
          "name": "Santa vs Rudolf",
          "href": "/slots/santa-vs-rudolf",
          "img": "https://example.com/santa-vs-rudolf.jpg",
          "provider": "NetEnt",
          "rtp": "96.35%",
          "volatility": "高",
          "rating": 4
        },
        "facts": [
          {
            "label": "RTP",
            "value": "96.35%"
          },
          {
            "label": "ボラティリティ",
            "value": "高"
          },
          {
            "label": "プロバイダー",
            "value": "NetEnt"
          }
        ],
        "summary": "サンタとルドルフの対決が楽しい！一攫千金のチャンスも！",
        "cta": {
          "text": "詳しく見る",
          "href": "/slots/santa-vs-rudolf"
        }
      },
      {
        "rank": 3,
        "slot": {
          "name": "Jingle Spin",
          "href": "/slots/jingle-spin",
          "img": "https://example.com/jingle-spin.jpg",
          "provider": "NetEnt",
          "rtp": "96.48%",
          "volatility": "中",
          "rating": 4.2
        },
        "facts": [
          {
            "label": "RTP",
            "value": "96.48%"
          },
          {
            "label": "ボラティリティ",
            "value": "中"
          },
          {
            "label": "プロバイダー",
            "value": "NetEnt"
          }
        ],
        "summary": "賑やかな演出とボーナス機能で、クリスマス気分を満喫！",
        "cta": {
          "text": "詳しく見る",
          "href": "/slots/jingle-spin"
        }
      }
    ]
  },
  "criteria": [
    "RTP",
    "ボラティリティ",
    "ボーナス機能",
    "テーマ"
  ],
  "tips": [
    "予算を決めて遊ぶ",
    "RTPが高いスロットを選ぶ",
    "ボーナスを有効活用する"
  ],
  "faq": [
    {
      "q": "クリスマススロットはどこで遊べますか？",
      "a": "当サイトで紹介しているオンラインカジノでプレイできます。"
    },
    {
      "q": "無料プレイはできますか？",
      "a": "多くのカジノでデモプレイが可能です。"
    }
  ],
  "cta": {
    "text": "おすすめのオンラインカジノを見る",
    "href": "/offers"
  }
};

export default function Page() {
  return <SlotsTemplate data={data} canonicalPath="/slots/xmas" />;
}
