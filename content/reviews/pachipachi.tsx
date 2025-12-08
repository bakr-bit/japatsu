import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewPachiPachi: ReviewPageContent = {
  hero: {
    title: "パチパチカジノ 最新レビュー｜入金不要ボーナス・評判 2025年",
    subheading: "最大$165ボーナス + 25回フリースピン",
    description: "パチパチカジノは、2020年に登場したユニークなオンラインカジノです。ロト、ドッグレース、ビンゴといった多様なゲームを取り揃えており、日本のプレイヤー向けに日本語サポートや日本市場に合わせたゲームセレクションを提供しています。",
    score: 3.8,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 75,
        note: "知名度はまだ低いものの、バラエティ豊かなゲームセレクションと日本市場への対応力から、今後の人気上昇が期待されます。",
      },
      {
        label: "規約",
        percent: 71,
        note: "段階的なウェルカムボーナスや仮想通貨専用オファーが魅力的。ただし入金不要ボーナスは現在提供されていないようです。",
      },
      {
        label: "操作性",
        percent: 73,
        note: "スマートフォン版はシンプルで操作しやすいですが、デスクトップ版では若干の遅延や視認性の問題が感じられる場合があります。",
      },
      {
        label: "サポート",
        percent: 83,
        note: "毎日8時間の日本語サポートを提供。土日祝日もライブチャットで対応しており、返信速度はやや遅めですが丁寧です。",
      },
    ],
    highlights: [
      "バラエティ豊かなゲームラインナップ",
      "日本マーケットに特化したサイト設計",
      "毎週のキャッシュバック（変更の可能性あり）",
      "充実した日本語サポート",
      "多様な仮想通貨に対応",
    ],
    watchouts: [
      "スロットゲームの種類が、他カジノと比較してやや少なめ",
      "入金ボーナスの利用規約が複雑",
      "VIPプログラムや会員制度が存在しない",
      "一部の日本語訳に不自然な箇所が見られる",
      "登録確認メールが届かない場合がある",
      "デスクトップ版の操作性に改善の余地あり",
    ],
    avatarSrc: "/assets/casino/pachipachi.png",
    avatarAlt: "Pachipachiのロゴ",
  },
  payments: {
    featured: [
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "人気",
        note: "主要なクレジットカードブランドに対応",
      },
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "定番",
        note: "安心の国内銀行送金",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://casinotsu.com/payment/vegawallet",
        badge: "Eウォレット",
        note: "日本円での利用に便利な決済手段",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "複数の仮想通貨に対応",
      },
    ],
    deposits: [
        { name: "MasterCard", icon: "/assets/payments/mastercard.svg" },
        { name: "JCB" },
        { name: "VISA", icon: "/assets/payments/visa.svg" },
        { name: "Diners Club" },
        { name: "Discover" },
        { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg" },
        { name: "Payz", icon: "/assets/payments/payz.svg" },
        { name: "Jeton" },
        { name: "Jeton Cash" },
        { name: "SticPay", icon: "/assets/payments/sticpay.svg" },
        { name: "Venus Point", icon: "/assets/payments/venus-point.svg" },
        { name: "iWallet", icon: "/assets/payments/iwallet.svg" },
        { name: "AstroPay" },
        { name: "Vega wallet JP", icon: "/assets/payments/vega-wallet.svg" },
        { name: "Ripple (XRP)" },
        { name: "Litecoin (LTC)" },
        { name: "Bitcoin Cash (BCH)" },
        { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
        { name: "Tether Wallet" },
        { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
    ],
    withdrawals: [
        { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg" },
        { name: "Payz", icon: "/assets/payments/payz.svg" },
        { name: "SticPay", icon: "/assets/payments/sticpay.svg" },
        { name: "Venus Point", icon: "/assets/payments/venus-point.svg" },
        { name: "AstroPay" },
        { name: "iWallet", icon: "/assets/payments/iwallet.svg" },
        { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
        { name: "Jeton" },
        { name: "Jeton Cash" },
        { name: "Vega wallet JP", icon: "/assets/payments/vega-wallet.svg" },
        { name: "Ripple (XRP)" },
        { name: "Litecoin (LTC)" },
        { name: "Bitcoin Cash (BCH)" },
        { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
        { name: "Tether Wallet" },
    ],
    notes: [
      "合計16種類の決済方法に対応。入出金には手数料が発生する場合があります。",
      "出金限度額は1日あたり¥140,000、1週間あたり¥340,000、1ヶ月あたり¥1,360,000です。",
      "出金処理時間はE-Walletsで即時、銀行送金で2～3営業日です。",
    ],
  },
  bonuses: {
    overview:
      "パチパチカジノでは、ウェルカムパッケージに加え、毎週開催されるプロモーションをご用意しています。さらに、毎週提供されるキャッシュバックも既存プレイヤーにご満足いただける内容となっています♪",
    noDeposit:
      "現在、パチパチカジノの入金不要ボーナスは提供が終了している可能性が高いです。以前は賭け条件1倍の1,000円ボーナスなどが提供されていましたが、最新の情報は公式サイトでご確認ください。",
    extraSpins: {
      summary:
        "ウェルカムボーナスの一環として、合計25回のフリースピンが提供される場合があります。詳細はプロモーション利用時にご確認ください。",
      schedule: [
        "フリースピンの配布タイミングや対象ゲームは、プロモーションによって異なります。",
      ],
      warning: "フリースピンで得た勝利金には25倍の賭け条件が設定されます。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "150%", cap: "不明", code: "不要" },
      { depositNumber: "2回目", percent: "250%", cap: "不明", code: "不要" },
      { depositNumber: "3回目", percent: "300%", cap: "不明", code: "不要" },
      { depositNumber: "仮想通貨初回", percent: "300%", cap: "不明", code: "不要" },
    ],
    conditions: [
      "ボーナス獲得には最低$10の入金が必要です。",
      "賭け条件は通常ボーナスで30倍、仮想通貨ボーナスで35倍です。",
      "ベット額上限はボーナス額の30%です。",
      "有効期限は28日間です。",
      "スロットの消化率は100%、ルーレット等は20%、バカラ等は10%です。",
    ],
    prohibitedGames: [
      "ポーカー",
      "ブラックジャックスイッチ",
      "ブラックジャックサレンダー",
    ],
  },
  offers: [
    {
      title: "毎週10%キャッシュバック",
      description: "毎週月曜日から日曜日までのスロット・ライブカジノにおける純損失額の10%が、翌週月曜日にキャッシュバックされます。賭け条件は1倍です。",
      highlight: "ライブカジノも対象になる珍しいキャッシュバックオファー",
    },
    {
      title: "金曜日の50%マッチボーナス",
      description: "毎週金曜日に、最低$15の入金で50%のマッチボーナスが提供されます。賭け条件は30倍です。",
    },
  ],
  facts: [
    { label: "名称", value: "PachiPachi" },
    { label: "ローンチ", value: "2020年" },
    { label: "運営会社", value: "Evonix Limitada" },
    { label: "ライセンス", value: "コモロ政府（Anjouan Gaming Board）" },
    { label: "VIPプログラム", value: "❌" },
    { label: "対応言語", value: "日本語、英語" },
    { label: "対応通貨", value: "JPY, USD, EUR" },
    {
      label: "ゲームタイプ",
      value:
        "Baccarat, Blackjack, Craps, Game Shows, Jackpot Games, Keno, Live Casino, Lottery, Poker, Roulette, Scratch cards, Slots, Virtual sports, Crash games",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://www.japanesecasino.com/providers/evolution">Evolution Gaming</Link>, <Link href="https://www.japanesecasino.com/providers/golden-hero-games">Golden Hero</Link>, Manna Play, <Link href="https://www.japanesecasino.com/providers/netent">NetEnt</Link>, <Link href="https://www.japanesecasino.com/providers/play-n-go">Play’n Go</Link>, <Link href="https://www.japanesecasino.com/providers/playtech">Playtech</Link>, <Link href="https://www.japanesecasino.com/providers/pg-soft">Pocket Games Soft</Link>, <Link href="https://www.japanesecasino.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://www.japanesecasino.com/providers/red-tiger">Red Tiger</Link>, <Link href="https://www.japanesecasino.com/providers/relax-gaming">Relax Gaming</Link>, SLOTMILL, SPRIBE, Swintt, <Link href="https://www.japanesecasino.com/providers/yggdrasil">Yggdrasil Gaming</Link>, Apricot (Microgaming), EGT
        </span>
      ),
    },
    { label: "最小入金額", value: "$10" },
    { label: "最小出金額", value: "$15" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@pachipachi.com">support@pachipachi.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート（日本語・英語）" },
  ],
  intro: {
    paragraphs: [
      "この度、新たなオンラインカジノ【パチパチカジノ／Pachi Pachi Casino】が日本のプレイヤーの皆様の元へ登場いたしました！🎉 2020年の登場以来、日本のオンラインカジノ界で徐々にその存在感を高めています。",
      "「パチパチ」という名前からパチンコとの関連を想像するかもしれませんが、直接的な関係はありません。しかし、他のオンラインカジノではあまり見られない「ドッグレース」や「ロト」、「ビンゴ」といったユニークなゲームを取り扱っている点が、非常に興味深いところです。",
      "CasinoTsu / casinotsu.comでは、今回もパチパチカジノに突撃訪問し、詳細なレビューをお届けします！",
    ],
    ctas: [
      { text: "🎁 オンカジのボーナス厳選おすすめガイド", href: "https://www.japanesecasino.com/bonuses" },
    ],
  },
  games: [
    "パチパチカジノでは、人気のスロットゲームをはじめ、ライブカジノ、ジャックポットゲーム、キノ、スクラッチカードなどに加え、オンラインカジノでは珍しいドッグレースやビンゴ、ロトもお楽しみいただけます。",
    "67社のゲームプロバイダーと提携しており、Evolution社やPlaytech社のライブカジノも豊富に搭載しています。日本のプレイヤーに人気の主要ソフトウェアは、ほぼ網羅されているようです。",
  ],
  features: [
    "デスクトップ版では若干の遅延や視認性の問題が感じられる場合がありますが、スマートフォン版ではシンプルで操作しやすいため、モバイルプレイに最適化されていると言えます。",
    "AndroidおよびiOS専用アプリはありませんが、モバイルウェブサイトから快適にプレイできます。",
  ],
  editorial: {
    author: "CasinoTsu 編集部",
    profileHref: "/authors/rina-okabe",
    hook: "ドッグレースやビンゴなどユニークなゲームが魅力。モバイルプレイに最適化されたニッチなカジノです。",
    theGoodStuff: "他のカジノでは見られないゲームセレクションと、日本市場への強い注力が最大の魅力です。日本語サポートも充実しており、モバイルでの操作性は良好です。",
    theHeadsUp: "VIPプログラムがなく、スロットの種類も大手と比較すると少なめです。デスクトップ版の操作性やボーナス規約の複雑さには改善の余地があります。",
    finalThought: "定番ゲームに加えて新しい刺激を求めている方や、スマートフォンで気軽に遊びたい方には面白い選択肢です。今後の発展に期待したいカジノです。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "2020年に設立されたパチパチカジノは、そのユニークなゲーム提供で注目を集めるオンラインカジノです。特にドッグレース、ビンゴ、ロトといったニッチなジャンルに強く、一般的なスロットやライブカジノに加えて新しい遊びを求めるプレイヤーに適しています。サイトは日本市場に特化しており、日本語サポートや日本円での決済に対応しているため、日本のプレイヤーにとって親しみやすい環境が整っています。",
      "安全性については、コモロ政府のライセンスを所持し、運営会社Evonix LimitadaはCasino Guruから7.9/10という高い安全性指数を得ています。ゲームの公平性もRNGによって保証されており、安心してプレイできるカジノと言えます。",
      "ボーナス面では、初回から3回目まで続くウェルカムパッケージや、仮想通貨専用の初回入金ボーナスが用意されています。また、毎週10%のキャッシュバックはライブカジノも対象となり、プレイヤーにとって嬉しい特典です。ただし、VIPプログラムは現時点ではなく、長期的なプレイヤーへのインセンティブはやや物足りないかもしれません。",
      "決済方法はクレジットカード、Eウォレット、仮想通貨など16種類と豊富です。操作性に関しては、モバイルでの利用が推奨されており、デスクトップではパフォーマンスに若干の問題が見られます。全体として、ユニークなゲームをスマホで楽しみたいプレイヤーにとって試す価値のあるカジノですが、今後のサービス拡充とサイト改善に期待が寄せられます。",
    ],
  },
  security: [
    "コモロ政府（Anjouan Gaming Board）発行のライセンスを所有",
    "運営会社Evonix LimitadaはCasino Guruの安全性指数で7.9/10の高評価",
    "公式サイトのプライバシーポリシーに基づき個人情報を保護",
    "RNG（乱数生成器）によりゲーム結果の公平性を維持",
  ],
  responsiblePlay: [
    "入金制限",
    "損失制限",
    "自己評価テスト",
    "自己排除",
    "タイムアウト",
    "（注意：タイムリミットや賭け金制限の自己設定システムはなし）",
  ],
  complaintStats: [
    "Casino Guru 安全性指数: 7.9/10（苦情4件中3件が解決済み）",
    "BetBrain 評価: 8/10",
    "Chipy.com 評価: 3/5（232件の投票に基づく）",
  ],
  awards: [
    "特になし",
  ],
  restrictedCountries: [
    "アメリカ合衆国（フロリダ州を含む）",
    "キプロス",
    "チェコ共和国",
    "エストニア",
    "フランス",
    "ハンガリー",
    "イタリア",
    "オランダ",
    "スロバキア",
    "トルコ",
    "イギリス",
  ],
  userConcerns: [
    "ボーナス規約の複雑さ",
    "デスクトップ版の操作性の問題",
    "登録確認メールが届かない場合があるとの報告",
    "VIPプログラムが存在しない",
  ],
  summary: [
    "ユニークなドッグレースやビンゴ、ロトなどを中心にプレイしたい方、あるいはサブのオンラインカジノをお探しの方には、試してみる価値があるカジノと言えるでしょう。ただし、デスクトップ版では操作性がやや遅く感じられるため、スマートフォン版での利用をおすすめします。",
    "ウェルカムパッケージを利用して、様々なオンラインカジノを試してみたい方にとっても、登録するメリットはあるはずです。既存プレイヤー向けのプロモーションは、長くプレイするにはやや物足りなさを感じるかもしれません。",
    "しかしながら、日本語でのカスタマーサポートが充実しており、日本専用サイトのような作りであることから、日本マーケットへの注力度は強く感じられます。今後の更なる発展に期待したいところです。",
  ],
  extraLinks: [
    { text: "🎁 オンカジのボーナス厳選おすすめガイド", href: "https://www.japanesecasino.com/bonuses" },
  ],
  faq: [],
  cta: {
    text: "最新のボーナス情報をチェックする",
    href: "https://www.japanesecasino.com/bonuses",
  },
};