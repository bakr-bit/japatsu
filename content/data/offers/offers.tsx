import type { BonusPageContent } from "@/components/templates/BonusDetailTemplate";

export const offersPageData: BonusPageContent = {
  hero: {
    title: "オンラインカジノ特典・キャンペーン【2025年最新】",
    description: "CasinoTsuでは、日本のプレイヤーの皆様に最もお得なオンラインカジノのオファー情報をお届けしています。入金不要ボーナス、初回入金ボーナス、フリースピン、キャッシュバックなど、様々な特典をご用意。当サイト限定の特別オファーも多数掲載しています。🎁\n\nこのオファーガイドでは、期間限定プロモーションから常設ボーナスまで、お得な情報を厳選してご紹介します。CasinoTsu限定オファーは通常よりも好条件なので、ぜひチェックしてください！✨",
    lastUpdated: "2025-10-02",
  },

  featuredOffers: [
    {
      casino: "勝WIN",
      casinoSlug: "katsuwin",
      title: "入金不要ボーナス¥5,000＆キャッシュバック最大¥77,777",
      imageUrl: "https://casinotsu.com/wp-content/uploads/katsuwin_1440x320.png",
      offerUrl: "/offers/katsuwin-exclusive",
      expiryDate: "2025-12-31",
      featured: true,
    },
    {
      casino: "ミスティーノ",
      casinoSlug: "mystino",
      title: "入金不要ボーナス¥4,500＋入金ボーナス最大¥150,000",
      imageUrl: "https://casinotsu.com/images/mystino_960x495.png",
      offerUrl: "/offers/mystino-exclusive",
      expiryDate: "2025-12-31",
      featured: true,
    },
    {
      casino: "デュエルビッツ",
      casinoSlug: "duelbits",
      title: "新規限定フリースピン500回＋テレグラムでアマギフ¥3,000",
      imageUrl: "https://casinotsu.com/images/duelbits_1440x320-1.png",
      offerUrl: "/offers/duelbits-exclusive",
      expiryDate: "2025-12-31",
      featured: true,
    },
    {
      casino: "ベラジョン",
      casinoSlug: "vera-john",
      title: "入金不要フリースピン150回＋入金ボーナス最大$1,000",
      imageUrl: "https://www.casinotsu.com/wp-content/uploads/VeraJohn_1440x320-1.png",
      offerUrl: "/offers/vera-john-exclusive",
      expiryDate: "2025-12-31",
      featured: true,
    },
    {
      casino: "ワンダーカジノ",
      casinoSlug: "wonder-casino",
      title: "入金不要ボーナス$40（賭け条件1倍）",
      imageUrl: "https://casinotsu.com/images/wonder-casino_1440x320.png",
      offerUrl: "/offers/wonder-casino-exclusive",
      expiryDate: "2025-10-31",
      featured: true,
    },
  ],

  rankings: {
    title: "人気オファーランキング【2025年】",
    description: "CasinoTsuが厳選した、2025年のおすすめオファーをランキング形式でご紹介します！入金不要ボーナスから期間限定キャンペーンまで、お得な情報が満載です🎉",
    columns: ["ランキング", "カジノ名", "オファー内容", "賭け条件"],
    rows: [
      {
        rank: "1",
        casino: "勝WIN",
        casinoSlug: "katsuwin",
        bonusDetails: "・入金不要ボーナス¥5,000\n・キャッシュバック最大¥77,777（初回入金からの損失額50%）\n・賭け条件が業界最低水準の8倍",
        offerLink: "/offers/katsuwin-exclusive",
        wagering: "・入金不要ボーナス：8倍\n・キャッシュバック：1倍",
      },
      {
        rank: "2",
        casino: "ミスティーノ",
        casinoSlug: "mystino",
        bonusDetails: "・入金不要ボーナス¥4,500（CasinoTsu限定）\n・入金ボーナス最大¥150,000\n・フリースピンも多数",
        offerLink: "/offers/mystino-exclusive",
        wagering: "・入金不要ボーナス：30倍\n・入金ボーナス：20倍",
      },
      {
        rank: "3",
        casino: "ワンダーカジノ",
        casinoSlug: "wonder-casino",
        bonusDetails: "・入金不要ボーナス$40\n・賭け条件が驚異の1倍！\n・出金しやすさNo.1",
        offerLink: "/offers/wonder-casino-exclusive",
        wagering: "・入金不要ボーナス：1倍",
      },
      {
        rank: "4",
        casino: "デュエルビッツ",
        casinoSlug: "duelbits",
        bonusDetails: "・フリースピン500回（新規限定）\n・テレグラム登録でアマギフ¥3,000\n・仮想通貨カジノ",
        offerLink: "/offers/duelbits-exclusive",
        wagering: "・フリースピン：賭け条件なし",
      },
      {
        rank: "5",
        casino: "Tedbet",
        casinoSlug: "tedbet",
        bonusDetails: "・入金不要ボーナス¥4,500\n・有効期限720時間（30日間）\n・出金上限¥12,000",
        offerLink: "/offers/tedbet",
        wagering: "・入金不要ボーナス：30倍",
      },
      {
        rank: "6",
        casino: "ベラジョン",
        casinoSlug: "vera-john",
        bonusDetails: "・入金不要フリースピン150回（カジノツ限定）\n・入金ボーナス最大$1,000\n・日本で最も人気のカジノ",
        offerLink: "/offers/vera-john-exclusive",
        wagering: "・フリースピン：20倍\n・入金ボーナス：20倍",
      },
      {
        rank: "7",
        casino: "ボンズカジノ",
        casinoSlug: "bons",
        bonusDetails: "・入金不要ボーナス¥5,000\n・フリースピン20回\n・豊富なゲームラインナップ",
        offerLink: "/offers/bons-exclusive",
        wagering: "・入金不要ボーナス：40倍",
      },
      {
        rank: "8",
        casino: "インターカジノ",
        casinoSlug: "intercasino",
        bonusDetails: "・フリースピン150回（ジャパカジ限定）\n・ベラジョンの姉妹カジノ\n・キャッシュバックシステムあり",
        offerLink: "/offers/intercasino-welcome-offer",
        wagering: "・フリースピン：20倍",
      },
      {
        rank: "9",
        casino: "フレッシュカジノ",
        casinoSlug: "fresh-casino",
        bonusDetails: "・入金不要フリースピン50回\n・対象ゲーム：人気スロット\n・初回入金ボーナスも豪華",
        offerLink: "/offers/fresh-casino-exclusive",
        wagering: "・フリースピン：40倍",
      },
      {
        rank: "10",
        casino: "リリベット",
        casinoSlug: "lilibet",
        bonusDetails: "・入金不要ボーナス¥2,000\n・3回目までの入金ボーナスも\n・CasinoTsu推薦",
        offerLink: "/offers/lilibet-exclusive",
        wagering: "・入金不要ボーナス：30倍",
      },
    ],
  },

  bonusTypeCategories: [
    {
      title: "入金不要ボーナス特集",
      description: "登録だけで貰えるボーナス。リスクゼロでカジノをお試しできます。",
      casinos: [
        {
          casino: "勝WIN",
          casinoSlug: "katsuwin",
          bonusDetails: "¥5,000（賭け条件8倍）",
          offerLink: "/offers/katsuwin-exclusive",
        },
        {
          casino: "ミスティーノ",
          casinoSlug: "mystino",
          bonusDetails: "¥4,500（賭け条件30倍）",
          offerLink: "/offers/mystino-exclusive",
        },
        {
          casino: "Tedbet",
          casinoSlug: "tedbet",
          bonusDetails: "¥4,500（賭け条件30倍、出金上限¥12,000）",
          offerLink: "/offers/tedbet",
        },
        {
          casino: "ワンダーカジノ",
          casinoSlug: "wonder-casino",
          bonusDetails: "$40（賭け条件1倍）",
          offerLink: "/offers/wonder-casino-exclusive",
        },
        {
          casino: "ボンズカジノ",
          casinoSlug: "bons",
          bonusDetails: "¥5,000 + フリースピン20回",
          offerLink: "/offers/bons-exclusive",
        },
        {
          casino: "ジョイカジノ",
          casinoSlug: "joycasino",
          bonusDetails: "¥4,500",
          offerLink: "/offers/joycasino-exclusive",
        },
        {
          casino: "コニベット",
          casinoSlug: "konibet",
          bonusDetails: "$20 + キャッシュスピン50回",
          offerLink: "/offers/konibet-exclusive",
        },
        {
          casino: "リリベット",
          casinoSlug: "lilibet",
          bonusDetails: "¥2,000",
          offerLink: "/offers/lilibet-exclusive",
        },
      ],
      cta: {
        text: "すべての入金不要ボーナスを見る",
        href: "/bonuses/no-deposit",
      },
    },
    {
      title: "フリースピンオファー",
      description: "スロットゲームで使える無料回転。人気ゲームを無料でプレイできます。",
      casinos: [
        {
          casino: "デュエルビッツ",
          casinoSlug: "duelbits",
          bonusDetails: "500回（賭け条件なし）+ アマギフ¥3,000",
          offerLink: "/offers/duelbits-exclusive",
        },
        {
          casino: "ベラジョン",
          casinoSlug: "vera-john",
          bonusDetails: "150回（カジノツ限定、賭け条件20倍）",
          offerLink: "/offers/vera-john-exclusive",
        },
        {
          casino: "インターカジノ",
          casinoSlug: "intercasino",
          bonusDetails: "150回（ジャパカジ限定、賭け条件20倍）",
          offerLink: "/offers/intercasino-welcome-offer",
        },
        {
          casino: "フレッシュカジノ",
          casinoSlug: "fresh-casino",
          bonusDetails: "50回（賭け条件40倍）",
          offerLink: "/offers/fresh-casino-exclusive",
        },
        {
          casino: "ビットスターズ",
          casinoSlug: "bitstarz",
          bonusDetails: "通常より多い入金不要フリースピン",
          offerLink: "/offers/bitstars-exclusive",
        },
      ],
      cta: {
        text: "フリースピンオファーをもっと見る",
        href: "/free-spins",
      },
    },
    {
      title: "期間限定キャンペーン",
      description: "季節やイベントに合わせた特別オファー。通常より高額なボーナスのチャンス！",
      casinos: [
        {
          casino: "イースターキャンペーン特集",
          bonusDetails: "2025年最新のイースターキャンペーン情報",
          offerLink: "/offers/easter",
        },
        {
          casino: "ゴールデンウィーク特集",
          bonusDetails: "2025年GWのお得なオファー",
          offerLink: "/offers/golden-week",
        },
        {
          casino: "夏のキャンペーン",
          bonusDetails: "夏限定のオファー＆プロモーション",
          offerLink: "/offers/summer-holiday",
        },
        {
          casino: "バレンタインオファー",
          bonusDetails: "バレンタイン限定キャンペーン特集",
          offerLink: "/offers/valentines-day",
        },
        {
          casino: "クリスマス＆年末年始",
          bonusDetails: "2025年クリスマス・お正月キャンペーン",
          offerLink: "/offers/christmas",
        },
      ],
      cta: {
        text: "期間限定オファーをすべて見る",
        href: "/offers",
      },
    },
    {
      title: "初回入金ボーナス",
      description: "初めての入金時に貰えるボーナス。マッチボーナスやフリースピンが一般的。",
      casinos: [
        {
          casino: "1winカジノ",
          casinoSlug: "1win",
          bonusDetails: "最大500%還元 + フリースピン70回",
          offerLink: "/offers/1win",
        },
        {
          casino: "2up",
          casinoSlug: "2up",
          bonusDetails: "最大$2,000 + フリースピン",
          offerLink: "/offers/2up-exclusive",
        },
        {
          casino: "フラッシュカジノ",
          casinoSlug: "flush",
          bonusDetails: "最大$2,000",
          offerLink: "/offers/flush-welcome-offer",
        },
        {
          casino: "WSMカジノ",
          casinoSlug: "wsm",
          bonusDetails: "最大$25,000",
          offerLink: "/offers/wsm",
        },
      ],
      cta: {
        text: "初回入金ボーナスをもっと見る",
        href: "/bonuses/welcome-bonus",
      },
    },
  ],

  educational: [
    {
      heading: "オファーの受け取り方",
      paragraphs: [
        "オンラインカジノのオファーを受け取る手順は、カジノやボーナスの種類によって異なりますが、基本的な流れは以下の通りです。",
      ],
      bullets: [
        "【Step 1】CasinoTsuでお好みのオファーを選ぶ - このページから気になるオファーを探しましょう",
        "【Step 2】リンクをクリックしてカジノへ移動 - CasinoTsu経由での登録が限定オファー獲得の条件です",
        "【Step 3】アカウントを登録 - メールアドレス、パスワード、必要情報を入力します",
        "【Step 4】ボーナスコードを入力（必要な場合）- 各オファーページに記載されているコードを入力",
        "【Step 5】本人確認書類を提出（必要な場合）- 運転免許証やパスポートなどの身分証明書",
        "【Step 6】ボーナスを受け取る - 自動付与または、マイページから有効化",
        "【Step 7】プレイ開始！- 対象ゲームで楽しくプレイしましょう",
      ],
    },
    {
      heading: "お得なオファーの選び方",
      subsections: [
        {
          subheading: "賭け条件を確認する",
          paragraphs: [
            "ボーナスを現金化するために必要な賭け金の倍率です。低いほど出金しやすくなります。",
            "・理想的な賭け条件：1倍～20倍\n・平均的な賭け条件：20倍～40倍\n・高めの賭け条件：40倍以上",
          ],
        },
        {
          subheading: "有効期限をチェック",
          paragraphs: [
            "ボーナスや賭け条件を満たすまでの期限を確認しましょう。期限が短いと消化が難しくなります。",
            "入金不要ボーナスは24～72時間の場合が多く、初回入金ボーナスは7～30日間が一般的です。",
          ],
        },
        {
          subheading: "出金上限を確認",
          paragraphs: [
            "入金不要ボーナスには出金上限が設定されている場合が多いです。",
            "一般的には¥10,000～¥20,000程度ですが、カジノによって異なります。高額勝利を狙う場合は、出金上限の高いオファーを選びましょう。",
          ],
        },
      ],
    },
    {
      heading: "攻略のコツ・注意点",
      prosCons: {
        pros: [
          "賭け条件が低いオファーを選ぶ - 出金しやすくなります（1倍～20倍が理想）",
          "有効期限を確認する - 期限切れにならないよう計画的にプレイ",
          "出金上限をチェック - 高額勝利を狙う場合は上限の高いオファーを",
          "ボーナスコードを忘れずに - 入力し忘れるとボーナスが貰えません",
          "本人確認は早めに済ませる - 出金時に必要なので先に提出しておくとスムーズ",
          "対象ゲームを確認 - すべてのゲームで使えるとは限りません",
          "複数のカジノに登録 - それぞれの入金不要ボーナスを活用してリスクゼロで楽しめます",
        ],
        cons: [
          "利用規約を読まない - 禁止行為をすると没収されることも",
          "賭け条件を無視してプレイ - 出金条件を満たせず出金できない",
          "複数アカウントの作成 - 絶対に禁止。ボーナス没収やアカウント凍結のリスク",
          "ボーナスハンターと判断される - 不自然なプレイパターンは避けましょう",
          "最大ベット額を超える - ボーナス使用時のベット上限に注意",
          "禁止ゲームでプレイ - 賭け条件にカウントされないだけでなく、規約違反になることも",
          "VPN使用で登録 - 不正アクセスと判断され、アカウント凍結の可能性",
        ],
      },
    },
    {
      heading: "ボーナス用語集",
      table: {
        columns: ["用語", "説明"],
        rows: [
          ["入金不要ボーナス", "アカウント登録のみで貰えるボーナス。入金の必要がないため、リスクゼロで始められます。"],
          ["賭け条件（出金条件）", "ボーナスを現金化するために必要な賭け金の倍率。例：¥1,000のボーナスで30倍なら、¥30,000分プレイする必要があります。"],
          ["有効期限", "ボーナスや賭け条件を満たすまでの期限。期限を過ぎるとボーナスと勝利金が失効します。"],
          ["出金上限", "ボーナスから得た勝利金の出金できる最大額。入金不要ボーナスは通常¥10,000～¥20,000程度。"],
          ["ボーナスコード", "ボーナスを受け取るために入力が必要なコード。登録時または入金時に入力します。"],
          ["フリースピン（FS）", "スロットゲームで使える無料回転。指定されたゲームでのみ利用可能。"],
          ["キャッシュバック", "損失額の一部が返金されるボーナス。賭け条件が低い、または無しの場合が多い。"],
          ["本人確認（KYC）", "身分証明書などを提出して本人確認を行うこと。出金時や入金不要ボーナス受け取り時に必要。"],
          ["最大ベット額", "ボーナス使用時に1回のベットで賭けられる上限額。通常¥500～¥1,000程度。"],
          ["禁止ゲーム", "ボーナス使用時にプレイが禁止、または賭け条件にカウントされないゲーム。"],
        ],
      },
    },
  ],

  faq: [
    {
      question: "入金不要ボーナスは本当に無料ですか？",
      answer: "はい、完全に無料です。アカウント登録だけで受け取れます。ただし、出金するには賭け条件を満たす必要があり、本人確認書類の提出が求められることもあります。",
    },
    {
      question: "CasinoTsu限定オファーとは何ですか？",
      answer: "当サイト経由で登録した場合にのみ獲得できる特別なボーナスです。通常のオファーよりも金額が高かったり、賭け条件が低かったりと、好条件になっています。必ずCasinoTsuのリンクから登録してください。",
    },
    {
      question: "賭け条件とは何ですか？",
      answer: "ボーナスを現金化して出金するために必要な賭け金の倍率です。例えば、¥1,000のボーナスで賭け条件30倍の場合、¥30,000分のベットを行う必要があります。",
    },
    {
      question: "ボーナスコードはどこで入力しますか？",
      answer: "通常、アカウント登録画面の「プロモーションコード」または「ボーナスコード」欄に入力します。カジノによっては、登録後にマイページから入力する場合もあります。各オファーページに詳しい手順が記載されています。",
    },
    {
      question: "複数のカジノの入金不要ボーナスを受け取れますか？",
      answer: "はい、それぞれ別のカジノなので、すべての入金不要ボーナスを受け取ることができます。ただし、同じカジノで複数アカウントを作成することは禁止されています。",
    },
    {
      question: "ボーナスの有効期限が切れたらどうなりますか？",
      answer: "有効期限を過ぎると、ボーナスとそのボーナスを使って得た勝利金がすべて失効します。期限は各オファーページに記載されているので、必ず確認しましょう。",
    },
    {
      question: "本人確認（KYC）は必要ですか？",
      answer: "多くのカジノで、初回出金時または入金不要ボーナス受け取り時に本人確認が必要です。運転免許証、パスポート、住民票などの書類を提出します。",
    },
    {
      question: "オファーが表示されない・受け取れない場合はどうすればいいですか？",
      answer: "まず、CasinoTsuのリンクから登録したか、ボーナスコードを正しく入力したかを確認してください。それでも解決しない場合は、カジノのカスタマーサポートに問い合わせましょう。",
    },
  ],

  cta: {
    text: "お得なオファーで今すぐプレイを始めましょう！",
    href: "/reviews",
  },
};
