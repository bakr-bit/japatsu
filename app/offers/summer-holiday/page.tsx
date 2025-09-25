import OffersTemplate, { OffersPageData } from "@/components/templates/OffersTemplate";

const data: OffersPageData = {
  "title": "夏のオンラインカジノキャンペーン特集【2024年最新】",
  "intro": "夏休みはオンラインカジノで楽しもう！当サイトでは、お得な夏のボーナスやフリースピンなど、厳選された最新キャンペーン情報を掲載中。人気カジノの限定プロモーションを見逃すな！",
  "promos": [
    {
      "href": "/offers",
      "title": "最新オンラインカジノボーナス情報",
      "expiry": "随時更新",
      "img": "https://example.com/summer_bonus.jpg"
    },
    {
      "href": "/reviews",
      "title": "おすすめカジノランキング",
      "expiry": "随時更新",
      "img": "https://example.com/casino_ranking.jpg"
    }
  ],
  "offers": [
    {
      "link": "/reviews/casino-a",
      "img": "https://example.com/casino-a_logo.png",
      "text": "Casino A：最大$500ボーナス＋100フリースピン！",
      "expiry": "2024年8月31日まで",
      "alt": "Casino Aのロゴ"
    },
    {
      "link": "/reviews/casino-b",
      "img": "https://example.com/casino-b_logo.png",
      "text": "Casino B：入金不要ボーナス$30プレゼント！",
      "expiry": "2024年9月15日まで",
      "alt": "Casino Bのロゴ"
    },
    {
      "link": "/reviews/casino-c",
      "img": "https://example.com/casino-c_logo.png",
      "text": "Casino C：週末限定！キャッシュバック10%！",
      "expiry": "毎週日曜日まで",
      "alt": "Casino Cのロゴ"
    }
  ],
  "faq": [
    {
      "q": "オンラインカジノのボーナスとは？",
      "a": "オンラインカジノが提供する特典のことです。入金ボーナスやフリースピンなど様々な種類があります。詳しくは<a href=\"/offers\">ボーナス一覧</a>をご覧ください。"
    },
    {
      "q": "ボーナスを受け取るにはどうすればいいですか？",
      "a": "各カジノによって異なりますが、一般的にはアカウント登録や入金が必要です。詳細は各カジノの<a href=\"/reviews\">レビューページ</a>をご確認ください。"
    },
    {
      "q": "オンラインカジノは安全ですか？",
      "a": "ライセンスを取得し、適切なセキュリティ対策を講じているカジノは安全にプレイできます。当サイトでは、<a href=\"/safety\">安全なカジノ選び</a>のポイントも解説しています。"
    },
    {
      "q": "オンラインカジノで使える決済方法は？",
      "a": "クレジットカード、電子決済サービス、仮想通貨など、様々な方法があります。詳しくは<a href=\"/payment\">決済方法</a>のページをご覧ください。"
    }
  ]
};

export default function Page() {
  return <OffersTemplate data={data} canonicalPath="/offers/summer-holiday" />;
}
