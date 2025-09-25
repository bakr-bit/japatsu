import { PaymentPageData } from "@/components/templates/PaymentTemplate";

const data: PaymentPageData = {
  "title": "MATCHPAY",
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
    "title": "MatchPay入出金ガイド",
    "subheading": "使い方・手数料・注意点",
    "description": "MatchPayでの入出金の仕組み、手数料、セキュリティを解説。"
  },
  "intro": "- [![JapaneseCasino.com](https://www.japanesecasino.com/wp-content/themes/tokyo/public/svg/logo-header-small-jp.c69314.svg)](https://www.japanesecasino.com/)\n- [![crown](https://img.japanesecasino.com/svg/jp/nav/crown.svg)\\\\\nジャパカジ厳選](https://www.japanesecasino.com/reviews)",
  "howto": [
    "[Home](https://www.japanesecasino.com/)",
    "[Payment](https://www.japanesecasino.com/payment)",
    "[Matchpay](https://www.japanesecasino.com/payment/matchpay)"
  ],
  "feeTable": {
    "columns": [
      "カジノ",
      "入金手数料",
      "出金手数料"
    ],
    "rows": [
      [
        "**[ワンダーカジノ](https://www.japanesecasino.com/reviews/wonder-casino)**",
        "0%",
        "0%"
      ],
      [
        "**[コニベット](https://www.japanesecasino.com/reviews/konibet)**",
        "0%",
        "0%"
      ],
      [
        "**[勝WIN](https://www.japanesecasino.com/reviews/katsuwin)**",
        "0%",
        "0%"
      ],
      [
        "**[ミラクルカジノ](https://www.japanesecasino.com/reviews/miracle-casino)**",
        "0%",
        "0%"
      ]
    ]
  },
  "prosCons": {
    "pros": [
      "**本人確認（KYC）が不要** ✅<br>倒な書類提出なしで、メールアドレスと電話番号だけでサクッと始められちゃいます🙌 プライバシーも守られて安心！",
      "**セキュリティがしっかり** ✅<br>EAL5+暗号化で個人情報もお金も安全にガード🔒 カジノに銀行情報を教える必要もありません！"
    ],
    "cons": [
      "**対応カジノが少ない** 🤔<br>現在マッチペイを使えるカジノはまだ少なめ😅 今後どんどん増えるといいですね♪",
      "**P2P取引は難しい？🤔**<br>他のユーザーとの取引が必要なので、ワンクリックで完了する従来の方法より少し複雑かも🤔 最初は慣れが必要です！"
    ]
  },
  "summary": "現在はまだ対応カジノが限られていますが、今後さらに多くのカジノに導入されていくのではないでしょうか？💪",
  "faq": [
    {
      "q": "マッチペイ（MatchPay）とは何ですか？",
      "a": "マッチペイは、プレイヤー同士で資金をやり取りするP2P型のデジタルウォレット決済サービスです。マッチペイでは、他のプレイヤーと日本円とマッチコインを交換し、マッチコインをオンラインカジノに送金します。"
    },
    {
      "q": "マッチペイ（Match Pay）での入金方法は？",
      "a": "マッチペイでの入金は2つのステップがあります。 ①マッチペイで、希望の売り手を見つけてマッチング。送金してMコインを受取る。 ②取得したMコインをカジノの入金ページでマッチペイを選択して送金する。"
    },
    {
      "q": "マッチペイでの出金は、どのような流れですか？",
      "a": "出金も2ステップです。 ①カジノの出金ページでMatchPayを選択して出金申請。 ②マッチペイアカウントにカジノから送金が完了したらマッチペイで、Mコインを売却して現金化。"
    },
    {
      "q": "マッチペイはどのオンラインカジノで利用できますか？",
      "a": "現在ジャパカジで紹介するオンカジでは、勝WIN、ワンダーカジノ、ミラクルカジノなどでマッチペイを利用できます。（2025年8月）"
    },
    {
      "q": "マッチペイのアカウント登録方法を教えてください",
      "a": "マッチペイの登録は、公式サイトから行えます。電話番号やパスワードを入力し、SMS認証を完了させます。本人確認書類の提出は不要で、登録には約1分程で簡単ですよ！"
    },
    {
      "q": "ライター**",
      "a": "[![Nanami](https://img.japanesecasino.com/150x164/authors/eat/mio-nomura.webp)](https://www.japanesecasino.com/authors/nanami)"
    }
  ],
  "cta": {
    "text": "入出金ガイド一覧を見る",
    "href": "/payment"
  }
} as const;

export default data;
