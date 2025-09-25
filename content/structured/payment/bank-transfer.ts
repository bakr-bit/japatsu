import { PaymentPageData } from "@/components/templates/PaymentTemplate";

const data: PaymentPageData = {
  "title": "BANK-TRANSFER",
  "banner": {
    "menu": [
      {
        "href": "#howto",
        "label": "使い方",
        "icon": "🧭"
      },
      {
        "href": "#fees",
        "label": "手数料",
        "icon": "💸"
      },
      {
        "href": "#proscons",
        "label": "メリデメ",
        "icon": "⚖️"
      },
      {
        "href": "#safety",
        "label": "注意点",
        "icon": "🛡️"
      },
      {
        "href": "#comparison",
        "label": "比較",
        "icon": "📊"
      },
      {
        "href": "#faq",
        "label": "FAQ",
        "icon": "❓"
      }
    ],
    "title": "銀行振込ガイド",
    "subheading": "手数料・反映時間・使い方",
    "description": "銀行振込での入出金の手順、反映、注意点、比較を解説。"
  },
  "intro": "- [![JapaneseCasino.com](https://www.japanesecasino.com/wp-content/themes/tokyo/public/svg/logo-header-small-jp.c69314.svg)](https://www.japanesecasino.com/)\n- [![crown](https://img.japanesecasino.com/svg/jp/nav/crown.svg)\\\\\nジャパカジ厳選](https://www.japanesecasino.com/reviews)",
  "howto": [
    "[Home](https://www.japanesecasino.com/)",
    "[Payment](https://www.japanesecasino.com/payment)",
    "[Bank transfer](https://www.japanesecasino.com/payment/bank-transfer)"
  ],
  "cta": {
    "text": "入出金ガイド一覧を見る",
    "href": "/payment"
  }
} as const;

export default data;
