import OffersTemplate, { OffersPageData } from "@/components/templates/OffersTemplate";

const data: OffersPageData = {
  "title": "クリスマス限定オンラインカジノボーナスオファー2024",
  "intro": "一年で最も華やかな季節、クリスマスがやってきました！オンラインカジノもクリスマスムード一色となり、豪華なボーナスやプロモーションが満載です。当サイトでは、厳選されたクリスマス限定オファーをまとめてご紹介。お得なボーナスをゲットして、ホリデーシーズンをさらに盛り上げましょう！責任あるギャンブルを心がけ、健全な範囲でお楽しみください。",
  "promos": [
    {
      "href": "/offers/casino-a-christmas",
      "title": "Casino A：クリスマス入金ボーナス最大10万円＋フリースピン100回！",
      "expiry": "2024-12-25",
      "img": "https://example.com/casino-a-christmas.jpg"
    },
    {
      "href": "/offers/casino-b-christmas",
      "title": "Casino B：クリスマス限定スロットトーナメント開催！賞金総額1000万円！",
      "expiry": "2024-12-31",
      "img": "https://example.com/casino-b-christmas.jpg"
    },
    {
      "href": "/offers/casino-c-christmas",
      "title": "Casino C：毎日ログインでクリスマスギフトゲット！豪華賞品が当たるチャンス！",
      "expiry": "2024-12-24",
      "img": "https://example.com/casino-c-christmas.jpg"
    }
  ],
  "offers": [
    {
      "link": "/reviews/casino-a",
      "img": "https://example.com/casino-a-logo.png",
      "text": "Casino Aの詳細レビューはこちら",
      "alt": "Casino Aのロゴ"
    },
    {
      "link": "/reviews/casino-b",
      "img": "https://example.com/casino-b-logo.png",
      "text": "Casino Bの詳細レビューはこちら",
      "alt": "Casino Bのロゴ"
    },
    {
      "link": "/reviews/casino-c",
      "img": "https://example.com/casino-c-logo.png",
      "text": "Casino Cの詳細レビューはこちら",
      "alt": "Casino Cのロゴ"
    }
  ],
  "faq": [
    {
      "q": "クリスマス限定ボーナスはどこで確認できますか？",
      "a": "各オンラインカジノの公式サイト、または当サイトの「/offers」ページで最新情報をご確認ください。"
    },
    {
      "q": "ボーナスを受け取るための条件はありますか？",
      "a": "カジノによって異なります。利用規約をよくご確認ください。多くの場合、新規登録や入金が必要となります。"
    },
    {
      "q": "ボーナスには賭け条件（出金条件）はありますか？",
      "a": "ほとんどのボーナスには賭け条件が設定されています。賭け条件を満たさないと、ボーナスで得た winnings を出金できません。詳細は各カジノの利用規約をご確認ください。"
    },
    {
      "q": "複数のクリスマスボーナスを併用できますか？",
      "a": "カジノによって異なります。利用規約をよくご確認ください。一般的には、複数のボーナスを同時に利用することはできません。"
    }
  ]
};

export default function Page() {
  return <OffersTemplate data={data} canonicalPath="/offers/christmas" />;
}
