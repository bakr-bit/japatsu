import SlotsTemplate, { SlotsPageData } from "@/components/templates/SlotsTemplate";

const data: SlotsPageData = {
  "title": "プログレッシブジャックポットスロットで億万長者を目指そう！",
  "intro": "人生を変える一攫千金を夢見るなら、プログレッシブジャックポットスロットに挑戦してみませんか？ジャックポットは遊び続けるごとに膨らみ、当選すれば文字通り億万長者も夢ではありません。当サイトでは、還元率(RTP)、ボラティリティ、最大ペイアウト倍率などの重要な要素を考慮し、厳選したおすすめスロットをご紹介。ジャックポットの仕組みや攻略法、よくある質問など、ジャックポットスロットを始めるにあたって知っておくべき情報を網羅的に解説します。さあ、夢への扉を開きましょう！",
  "featured": {
    "title": "編集部おすすめ プログレッシブジャックポットスロット",
    "items": [
      {
        "name": "Mega Moolah（メガムーラ）",
        "href": "/reviews/mega-moolah",
        "img": "https://example.com/img/mega-moolah.jpg",
        "provider": "Microgaming",
        "rtp": "88.85%",
        "volatility": "高",
        "maxMultiplier": "非公開",
        "rating": 4.8,
        "badge": "人気No.1"
      },
      {
        "name": "WowPot!（ワオポット）",
        "href": "/reviews/wowpot",
        "img": "https://example.com/img/wowpot.jpg",
        "provider": "Microgaming",
        "rtp": "92.11%",
        "volatility": "中",
        "maxMultiplier": "非公開",
        "rating": 4.5,
        "badge": "高RTP"
      },
      {
        "name": "Mega Fortune（メガフォーチュン）",
        "href": "/reviews/mega-fortune",
        "img": "https://example.com/img/mega-fortune.jpg",
        "provider": "NetEnt",
        "rtp": "96.6%",
        "volatility": "低",
        "maxMultiplier": "非公開",
        "rating": 4.2,
        "badge": "安定感"
      }
    ]
  },
  "rankings": {
    "title": "プログレッシブジャックポットスロットランキング TOP3",
    "items": [
      {
        "rank": 1,
        "slot": {
          "name": "Mega Moolah",
          "href": "/reviews/mega-moolah",
          "img": "https://example.com/img/mega-moolah.jpg",
          "provider": "Microgaming",
          "rtp": "88.85%",
          "volatility": "高",
          "maxMultiplier": "非公開",
          "rating": 4.8
        },
        "facts": [
          {
            "label": "最高当選金",
            "value": "約24億円"
          },
          {
            "label": "還元率",
            "value": "88.85%"
          }
        ],
        "summary": "ギネス記録にも認定された、ジャックポットスロットの王者。一攫千金を狙うなら、まずはMega Moolahから！",
        "cta": {
          "text": "詳しく見る",
          "href": "/reviews/mega-moolah"
        }
      },
      {
        "rank": 2,
        "slot": {
          "name": "WowPot!",
          "href": "/reviews/wowpot",
          "img": "https://example.com/img/wowpot.jpg",
          "provider": "Microgaming",
          "rtp": "92.11%",
          "volatility": "中",
          "maxMultiplier": "非公開",
          "rating": 4.5
        },
        "facts": [
          {
            "label": "平均当選金",
            "value": "約1億円"
          },
          {
            "label": "還元率",
            "value": "92.11%"
          }
        ],
        "summary": "比較的当選しやすいWowPot!は、ジャックポット初心者にもおすすめ。高RTPも魅力です。",
        "cta": {
          "text": "詳しく見る",
          "href": "/reviews/wowpot"
        }
      },
      {
        "rank": 3,
        "slot": {
          "name": "Mega Fortune",
          "href": "/reviews/mega-fortune",
          "img": "https://example.com/img/mega-fortune.jpg",
          "provider": "NetEnt",
          "rtp": "96.6%",
          "volatility": "低",
          "maxMultiplier": "非公開",
          "rating": 4.2
        },
        "facts": [
          {
            "label": "当選頻度",
            "value": "高"
          },
          {
            "label": "還元率",
            "value": "96.6%"
          }
        ],
        "summary": "安定したプレイを楽しみたいならMega Fortune。高RTPで、小額当選のチャンスも多いです。",
        "cta": {
          "text": "詳しく見る",
          "href": "/reviews/mega-fortune"
        }
      }
    ]
  },
  "criteria": [
    "還元率(RTP)",
    "ボラティリティ",
    "最大ペイアウト倍率",
    "ジャックポットの当選頻度",
    "ゲームのテーマ"
  ],
  "tips": [
    "ジャックポット当選確率はベット額に比例しないため、無理のない範囲でプレイしましょう。",
    "高ボラティリティスロットは一撃性が高い一方、資金管理が重要です。",
    "オンラインカジノによってジャックポットの金額や当選確率が異なる場合があります。"
  ],
  "faq": [
    {
      "q": "プログレッシブジャックポットとは？",
      "a": "複数のプレイヤーのベット額の一部が積み立てられ、ジャックポットが形成される仕組みです。"
    },
    {
      "q": "ジャックポットの当選確率は？",
      "a": "一般的に公表されていませんが、非常に低い確率であることは確かです。"
    },
    {
      "q": "ジャックポットに当選したらどうすればいい？",
      "a": "オンラインカジノのサポートに連絡し、手続き方法を確認しましょう。"
    }
  ],
  "cta": {
    "text": "プログレッシブジャックポットスロットをプレイする！",
    "href": "/offers"
  }
};

export default function Page() {
  return <SlotsTemplate data={data} canonicalPath="/slots/progressive-jackpot" />;
}
