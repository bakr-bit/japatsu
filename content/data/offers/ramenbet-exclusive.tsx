import Link from "next/link";
import type { OfferPageContent } from "@/components/templates/OfferDetailTemplate";

export const ramenbetExclusive: OfferPageContent = {
  hero: {
    title: "ジャパカジ限定！ ラーメンベットで入金不要ボーナス¥3,000！",
    casino: "Ramenbet",
    casinoSlug: "ramenbet",
    description: "200%初回入金ボーナスだけではありません。入金不要でボーナスが獲得可能です。まずは、無料でお試しください♪",
    bannerImageUrl: "https://casinotsu.com/images/ramenbet_1440x320-1.png",
    promotionalPeriod: {
      startDate: "2024-08-21",
      endDate: "2024-12-31",
      daysRemaining: 104,
    },
  },

  offerHighlight: {
    bonusAmount: "¥3,000",
    bonusType: "入金不要ボーナス",
    wagering: "5倍",
    validity: "30日",
    maxWinnings: "¥10,000",
    bonusCode: "JAPACASI30",
    featured: true,
  },

  tableOfContents: [
    { text: "今すぐ賭け条件5倍の¥3,000ボーナスを獲得しよう♪", url: "#get-bonus-now" },
    { text: "ラーメンベットの入金不要ボーナスの獲得方法", url: "#how-to-claim" },
    { text: "ラーメンベットの入金不要ボーナスで満足満腹♪", url: "#bonus-details" },
    { text: "よくある質問", url: "#faq" },
  ],

  intro: [
    "2024年にローンチされたばかりの新星オンカジ「ラーメンベット（Ramenbet）」🍜",
    "ボンズカジノ や テッドベット などの姉妹カジノでも、ゲーム数が豊富で検索が使いやすいカジノです✨ CasinoTsu.com では、ラーメンベットの運営会社は Pomadorro N.V. であると認識しております。",
    "そんなラーメンベットに、 ジャパカジ限定でウェルカムオファー をご用意いただきました😍",
    "3,000円分 の 入金不要ボーナス 🔥",
    "しかも、 スロット、 ライブカジノ、 スポーツベットでご利用可能です🎰",
    "そして何よりも、このボーナスは『 賭け条件が5倍』 と、非常に緩やかな条件となっております😍",
    "出金も夢ではありませんよ🔥",
    "獲得方法は、 登録時にボーナスコード【JAPACASI30】を入力 していただくだけです❗️",
    "今すぐ、ボーナスを獲得し、ラーメンベットの豊富なゲームをボーナスで存分にお楽しみください💖🎁",
  ],

  claimSteps: [
    {
      stepNumber: 1,
      title: "サイトへアクセス",
      description: [
        "まずは、ジャパカジ経由でラーメンベットのサイトへアクセスしてください🚀",
        "「今すぐ登録」をクリックします。",
      ],
      imageUrl: "https://casinotsu.com/images/Ramenbet-Exclusive-Offer-1-1.jpg",
    },
    {
      stepNumber: 2,
      title: "登録フォームを入力",
      description: [
        "登録フォームに、メールアドレス、パスワード、電話番号を入力します。そして、 ボーナスコード【JAPACASI30】の入力を忘れないよう にしてください😉",
      ],
      imageUrl: "https://casinotsu.com/images/ramen-bet-NDB.jpg",
      bonusCode: "JAPACASI30",
    },
    {
      stepNumber: 3,
      title: "ボーナスを有効化",
      description: [
        "登録後、 プロモーションページにて「¥3,000 Cash Bonus」を有効化 すると、 入金不要ボーナスを獲得 できます。",
      ],
      note: "ボーナスを有効にするには、メールアドレスと電話番号の認証が必須となります。",
    },
    {
      stepNumber: 4,
      title: "ゲームを楽しむ",
      description: [
        "ボーナスを獲得したら、あとはスロットでもライブカジノでも、スポーツベットでも。お好きなゲームを存分にお楽しみください😍",
      ],
    },
  ],

  characterDialogues: [
    {
      character: "casiko",
      characterName: "カジ子",
      avatarUrl: "https://casinotsu.com/images/casiko.svg",
      message: "無料で提供されるにも関わらず、賭け条件が5倍とは、大変太っ腹なオファーですね！",
    },
    {
      character: "slotaro",
      characterName: "Slotaro",
      avatarUrl: "https://casinotsu.com/images/slotaro.svg",
      message: "ベットカバー率とは？",
    },
    {
      character: "bonabo",
      characterName: "Bonabo",
      avatarUrl: "https://casinotsu.com/images/bonabo.svg",
      message: "ベットカバー率とは、ベットしたエリアの割合のことです💡 例えば、全ての数字にベットするとベットカバー率100%。赤黒ベットは50%弱、1つの数字にかけると2.7%になります。これは、ルーレットではプレイヤー次第でローリスクローリターンのベットができてしまうため、賭け条件を消化する目的でのベットとみなされ、消化率が低く設定されているのです😉",
    },
  ],

  termsAndConditions: {
    heading: "入金不要ボーナスの利用規約",
    items: [
      { label: "賭け条件", value: "5倍" },
      { label: "最大出金額", value: "10,000円" },
      { label: "有効期限", value: "ボーナス受け取り後30日間", note: "受け取り自体は登録から3日以内" },
      { label: "対象ゲーム", value: "一部のゲームではボーナスの利用が制限される場合があります。" },
      { label: "ボーナスからの勝利金", value: "ボーナスで獲得した勝利金が5,000円を超える場合、7日間に最大5,000円までしか出金できません。" },
      { label: "賭け条件消化率 (ライブルーレット)", value: "ベットカバー率により変動", note: "Evolution社提供のライブルーレットでは、ベットカバー率に応じて消化率が変動します。ベットカバー率0〜5%：100%、5〜10%：95%、10〜15%：75%、15〜20%：50%、20〜40%：20%、40〜50%：10%、50%〜：5%。" },
    ],
    prohibitions: [
      "賭け条件消化目的のベットは通常禁止されています🚨 純粋にゲームそのものをお楽しみください。",
    ],
  },

  casinoInfo: {
    heading: "ラーメンベット カジノ情報",
    paragraphs: [
      "運営会社とライセンス: ラーメンベットは、Pomadorro N.V. によって運営されています。同社はキュラソー（GCB）およびキルギス共和国のライセンスを保有しています。Casino.guruの評価によると、ラーメンベットの安全性指数は 5.6/10 と平均を下回っています。",
      "安全性と評判: ラーメンベット自体に関する直接的な苦情は1件報告されていますが、関連カジノを含めると9件の苦情があります。苦情に関連する合計11,628件のブラックポイントが累積されており、これには賞金の没収に関する問題も含まれています。プレイヤーからのレビューは賛否両論で、迅速な出金や豊富なゲーム種類を評価する声がある一方、オッズの悪さやカスタマーサポートへの不満も指摘されています。",
      "責任あるギャンブル: ラーメンベットには、責任あるギャンブルのための機能が不足しています。プレイヤーは自己規制ツールなどの利用ができないため、利用にあたっては十分な注意が必要です。",
      "地域情報: ラーメンベットは特にトルコ市場で人気があり、トルコ専用のウェブサイトも運営しています。しかし、複数の国際市場に対応しており、グローバルな展開を行っています。",
    ],
    rating: 5.6,
    officialUrl: "https://casinotsu.com/reviews/ramenbet",
  },

  targetGames: {
    heading: "ゲームとプロバイダー情報",
    description: "ラーメンベットは、81社のゲームプロバイダーと提携しており、NetEnt、Pragmatic Play、Evolution Gaming、Play'n GOなどの有名プロバイダーのゲームを提供しています。",
    eligibleGames: [
      "スロット",
      "ルーレット",
      "ブラックジャック",
      "ベッティング（スポーツベット）",
      "ビデオポーカー",
      "ビンゴ",
      "バカラ",
      "ジャックポットゲーム",
      "ライブゲーム",
    ],
  },

  paymentMethods: {
    heading: "入出金方法",
    depositMethods: ["Skrill", "Neteller", "VISA", "Mastercard", "ビットコイン", "テザー", "ライトコイン", "イーサリアム", "その他仮想通貨を含む47種類の決済オプション"],
    withdrawalMethods: ["Skrill", "Neteller", "VISA", "Mastercard", "ビットコイン", "テザー", "ライトコイン", "イーサリアム", "その他仮想通貨"],
    notes: [
      "月額100,000ドルまで出金が可能です。",
      "1日に2回以上の出金を行う場合、10%の手数料が発生します。",
      "一部の決済方法では、別途手数料がかかる場合があります。",
      "全ての決済方法が全ての国で利用できるわけではありません。",
    ],
  },

  mobileCompatibility: {
    heading: "モバイル対応",
    description: [
      "ラーメンベットは、スマートフォンやタブレットから快適にプレイできるよう、モバイルデバイスに完全対応しています。",
      "専用アプリの有無については明記されていませんが、ウェブブラウザを通じてほとんどのデバイスでアクセス可能です。",
    ],
  },

  strategy: {
    heading: "攻略法・注意点",
    subsections: [
      {
        subheading: "ボーナス活用法",
        tips: [
          "まずは入金不要ボーナスでリスクなくゲームを試しましょう。賭け条件5倍なので、比較的クリアしやすいはずです。",
        ],
      },
      {
        subheading: "賭け条件クリア戦略",
        tips: [
          "ルーレットの場合、ベットカバー率を意識して賭け条件消化率を最大化しましょう。ただし、過度なベットカバーは規約違反とみなされる可能性があるので注意が必要です。",
        ],
      },
      {
        subheading: "注意事項",
        tips: [
          "ボーナス利用規約に記載されている禁止ゲームでのプレイは避けましょう。",
          "ボーナスで得た勝利金には出金上限額（7日間で最大5,000円）が設定されている場合があるため、規約をよく確認してください。",
          "日本からのプレイヤーは、20歳以上である必要があります。",
        ],
      },
    ],
  },

  similarOffers: {
    heading: "ラーメンベットがお好きな方におすすめのカジノもチェック",
    offers: [
      {
        casino: "ボンズカジノ",
        casinoSlug: "bons",
        feature: "ラーメンベットの姉妹カジノ。ゲーム数が豊富で検索が使いやすい。",
        offerLink: "https://casinotsu.com/reviews/bons",
      },
      {
        casino: "テッドベット",
        casinoSlug: "tedbet",
        feature: "ラーメンベットの姉妹カジノ。同様のプロモーションやサービスが期待できる。",
        offerLink: "https://casinotsu.com/reviews/tedbet",
      },
    ],
  },

  summary: {
    heading: "まとめ",
    paragraphs: [
      "ジャパカジ限定のラーメンベット¥3,000登録ボーナスは、リスクなくカジノをお試しいただける絶好の機会です。賭け条件5倍という緩やかな条件と、スロット・ライブカジノ・スポーツベットと幅広い対象ゲームで利用できる点が魅力です。",
      "ただし、ラーメンベットは安全性指数が平均以下であること、プレイヤーからの苦情も報告されていることを念頭に置く必要があります。利用規約や出金条件、手数料などを十分に確認し、自己責任でプレイするようにしましょう。 CasinoTsu は、正確さが第一。興奮はその次、という姿勢で情報を提供しています。",
    ],
    recommendedFor: [
      "オンラインカジノ初心者で、まずは無料で試したい方",
      "新しいカジノのゲームラインナップや使い勝手を体験したい方",
      "低リスクで勝利金獲得を目指したい方",
    ],
  },

  faq: [
    {
      question: "ボーナスコードは？ いつ入力するのですか？",
      answer: "ボーナスコード【JAPACASI30】を、登録時に入力してください。",
    },
    {
      question: "ボーナスコードを入力しましたが、ボーナスが残高に追加されていません。",
      answer: "登録後、マイページのプロモーションから、「¥3,000 Cash Bonus」を有効化してください。メールアドレスと電話番号の認証も必要です。",
    },
    {
      question: "ボーナスの有効期限は？",
      answer: "受け取りは登録から3日以内、受け取り後は30日間です。",
    },
    {
      question: "ボーナスからの勝利金には出金上限はありますか？",
      answer: "はい、ボーナスで得た勝利金が5,000円を超える場合、7日間に最大5,000円までしか出金できません。",
    },
    {
      question: "ラーメンベットの安全性は？",
      answer: "Casino.guruの評価では安全性指数が5.6/10と平均以下であり、プレイヤーからの苦情も報告されています。利用には注意が必要です。",
    },
    {
      question: "どのような入出金方法がありますか？",
      answer: "Skrill、Neteller、VISA、Mastercard、ビットコイン、テザーなどの仮想通貨を含む47種類の決済オプションがあります。一部手数料がかかる場合や、地域制限がある場合があります。",
    },
  ],

  cta: {
    text: "今すぐラーメンベットでボーナスを獲得",
    href: "https://go.casinotsu.com/go/ramenbet",
    buttonText: "無料ボーナスGETはこちらから！",
  },

  breadcrumbs: [
    { label: "ホーム", href: "https://casinotsu.com/" },
    { label: "オファー", href: "https://casinotsu.com/offers" },
    { label: "ラーメンベット限定", href: "https://casinotsu.com/offers/ramenbet-exclusive" },
  ],

  metadata: {
    category: "exclusive-offer",
    tags: ["入金不要ボーナス", "ラーメンベット", "期間限定", "ジャパカジ限定"],
    publishDate: "2024-08-21",
  },

  author: {
    name: "Rina Okabe",
    nameJapanese: "岡部 りな",
    role: "実戦経験6年のカジノ専門家",
    avatarUrl: "/rina/avatar.png",
    bio: "2019年から6年間で80以上のカジノを実際にプレイ。¥250万以上を賭けた実体験から得た本物の知識を、失敗も成功も包み隠さず共有します。",
    authorPageUrl: "/authors/rina-okabe",
    expertise: ["オンラインカジノレビュー", "ボーナス戦略", "パチスロ風スロット", "日本市場特化"],
  },
};