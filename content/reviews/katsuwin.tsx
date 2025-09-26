import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewKatsuwin: ReviewPageContent = {
  hero: {
    title: "勝WIN（Katsuwin）カジノの入金不要ボーナスや口コミ・評判【最新】",
    subheading: "¥5,000入金不要ボーナス + 最大¥155,000ウェルカムボーナス",
    description: "2023年にオープンした新進気鋭のオンラインカジノ「勝WIN」。5,000円分の入金不要ボーナスに加え、業界トップクラスのパチンコ・パチスロ台数を誇る話題のカジノをCasinoTsuが徹底レビューします。",
    score: 4.3,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 86,
        note: "新しいカジノながらゲームラインナップとボーナスが豊富。24時間日本語対応サポートも魅力で、今後の人気上昇に期待。",
      },
      {
        label: "規約",
        percent: 82,
        note: "入金不要ボーナスの賭け条件8倍は非常に優秀。ウェルカムボーナスやVIPプログラムも充実しており、長く楽しめる。",
      },
      {
        label: "操作性",
        percent: 84,
        note: "サイトは初心者にも分かりやすい構成。ただし、決済方法の選択肢が少なく、クレジットカードが直接利用できない点が課題。",
      },
      {
        label: "サポート",
        percent: 87,
        note: "24時間日本語対応のライブチャットは対応も迅速。安心してプレイできる環境が整っている。",
      },
    ],
    highlights: [
      "賭け条件の優しい入金不要ボーナス！",
      "業界トップバラエティのパチンコ・パチスロが遊べる★",
      "24時間日本語対応のカスタマーサポート♪",
      "出金速度は業界トップクラス！",
    ],
    watchouts: [
      "決済方法が少ない",
      "知名度が低く、口コミが少ない",
      "サイトの表示速度が遅くなることがある",
      "責任あるギャンブル機能が限定的",
    ],
  },
  payments: {
    featured: [
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "定番",
        note: "日本のプレイヤーに安心の決済手段",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://casinotsu.com/payment/vega-wallet",
        badge: "Eウォレット",
        note: "迅速な入出金に対応する人気ウォレット",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "主要な暗号資産でスピーディーな取引",
      },
      {
        name: "USDT (Tether)",
        icon: "/assets/payments/tether.svg",
        href: "https://casinotsu.com/payment/usdt",
        badge: "購入可能",
        note: "サイト内で直接購入できる便利な仮想通貨",
      },
    ],
    deposits: [
      { name: "Bank Transfer", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg" },
      { name: "Match Pay", href: "https://casinotsu.com/payment/matchpay" },
      { name: "TIGER PAY" },
      { name: "Jetonbank" },
      { name: "Mastercard", icon: "/assets/payments/mastercard.svg"},
      { name: "VISA", icon: "/assets/payments/visa.svg", },
      { name: "JCB", icon: "/assets/payments/jcb.svg"},
      { name: "ApplePay", icon: "/assets/payments/applepay.svg"},
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg" },
      { name: "Tether (USDT)" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
      { name: "Litecoin (LTC)" },
      { name: "Ripple (XRP)" },
      { name: "Dogecoin (DOGE)" },
      { name: "Bitcoin Cash (BCH)" },
      { name: "Tron (TRX)" },
      { name: "Binance Coin (BNB)" },
      { name: "USD Coin (USDC)" },
      { name: "Shiba Inu (SHIB)" },
    ],
    withdrawals: [
      { name: "Bank Transfer", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg" },
      { name: "Match Pay", href: "https://casinotsu.com/payment/matchpay" },
      { name: "TIGER PAY" },
      { name: "Jetonbank" },
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg" },
      { name: "Tether (USDT)" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
      { name: "Litecoin (LTC)" },
      { name: "Ripple (XRP)" },
      { name: "Dogecoin (DOGE)" },
      { name: "Bitcoin Cash (BCH)" },
      { name: "Tron (TRX)" },
      { name: "Binance Coin (BNB)" },
      { name: "USD Coin (USDC)" },
      { name: "Shiba Inu (SHIB)" },
    ],
    notes: [
      "出金速度は業界トップクラスで、仮想通貨は即時反映されることもあります。処理時間は通常0〜24時間です。",
      "クレジットカード（Mastercard, VISA, JCB）やApple Payは、サイト内で仮想通貨（USDT）を購入するためにのみ使用できます。",
      "出金するには、入金額の2倍のベットが必要です。",
    ],
  },
  bonuses: {
    overview:
      "勝WINでは、無料で受け取れる上に賭け条件も優しい入金不要ボーナスに加え、ウェルカムボーナスなど、豪華特典が盛りだくさんです。",
    noDeposit:
      "CasinoTsuから新規登録するだけで、無料で5,000円の入金不要ボーナスがもらえます。賭け条件はわずか8倍と非常に緩やかで、最大15,000円まで出金可能です。有効期限は30日間で、自動的に付与されるため申請は不要です。",
    extraSpins: {
      summary:
        "VIPランクがシルバー以上のプレイヤー限定で、毎日500円分のフリースピンボーナスが提供されます。このフリースピンには賭け条件がなく、ベット上限や出金上限もありません。",
      schedule: [
        "対象：VIPランクがシルバー以上のプレイヤー",
        "条件：15,000円以上の入金",
        "特典：毎日500円分のフリースピン",
        "賭け条件：なし",
        "有効期限：7日間",
      ],
      warning: "このオファーは入金W特典の一部であり、VIPランク昇格が必要です。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "¥50,000", code: "1stWIN" },
      { depositNumber: "2回目", percent: "50%", cap: "¥50,000", code: "2ndWIN" },
      { depositNumber: "3回目", percent: "75%", cap: "¥50,000", code: "3rdWIN" },
    ],
    conditions: [
      "ボーナスを受け取るには、入金後ベット開始前にライブチャットで合言葉を伝える必要があります。",
      "最低入金額は2,000円です。",
      "賭け条件は初回30倍、2回目20倍、3回目25倍です。",
      "スロット専用ボーナスで、パチスロは対象外です。",
      "出金上限はボーナス額の10倍、最大ベット額は625円です。",
    ],
    prohibitedGames: [
      "パチスロ",
      "ライブカジノ",
      "テーブルゲーム",
    ],
  },
  offers: [
    {
      title: "【仮想通貨限定】強化ウェルカムボーナス",
      description: "仮想通貨で入金すると、ウェルカムボーナスが最大22万5千円にパワーアップ！初回入金は還元率200%（最大10万円）と非常にお得です。",
      highlight: "還元率200%の初回入金ボーナスは必見",
    },
    {
      title: "VIP限定ウィークリーキャッシュバック",
      description: "VIPランクがシルバー以上のプレイヤーは、毎週の損失額の5%（最大5万円）がキャッシュバックされます。賭け条件はわずか2倍と非常に緩やかです。",
    },
    {
      title: "VIPプログラム",
      description: "全10段階のVIPランクがあり、昇格するとレベルアップボーナス、デイリーリベート、誕生日ボーナスなどの豪華特典が受け取れます。",
    },
  ],
  facts: [
    { label: "名称", value: "Katsuwin" },
    { label: "ローンチ", value: "2023年" },
    { label: "運営会社", value: "Initial Singularity Limited" },
    { label: "ライセンス", value: "Anjouan Gaming License" },
    { label: "VIPプログラム", value: "✅" },
    { label: "対応言語", value: "日本語, 英語" },
    { label: "ゲームタイプ", value: "パチンコ, パチスロ, バカラ, ブラックジャック, クラップス, ゲームショー, ライブカジノ, ポーカー, ルーレット, スロット, バーチャルスポーツ, クラッシュゲーム, ケノ, スクラッチカード, ビンゴ, ビデオポーカー, ダイスゲーム" },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/betsoft">BetSoft</Link>, <Link href="https://casinotsu.com/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="https://casinotsu.com/providers/blueprint-gaming">Blueprint Gaming</Link>, <Link href="https://casinotsu.com/providers/booming-games">Booming Games</Link>, <Link href="https://casinotsu.com/providers/hacksaw-gaming">Hacksaw Gaming</Link>, <Link href="https://casinotsu.com/providers/pg-soft">PG SOFT</Link>, <Link href="https://casinotsu.com/providers/playson">Playson</Link>, <Link href="https://casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/red-tiger">Red Tiger</Link>, <Link href="https://casinotsu.com/providers/relax-gaming">Relax</Link>, <Link href="https://casinotsu.com/providers/wazdan">Wazdan</Link>, Win Fast, <Link href="https://casinotsu.com/providers/yggdrasil">Yggdrasil</Link>, etc.
        </span>
      ),
    },
    { label: "最小入金額", value: "¥1,500" },
    { label: "最小出金額", value: "¥5,000 (銀行送金)" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@katsuwin.ai">support@katsuwin.ai</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間日本語対応)" },
    { label: "信頼性", value: "Casino Guru Safety Index: 7.9/10 (Above average)" },
  ],
  intro: {
    paragraphs: [
      "勝WIN（KatsuWIN）は、2023年に登場したばかりの新しいオンラインカジノです。最大の特徴は、5,000円の入金不要ボーナスと、6,000種類以上の豊富なゲーム数です。",
      "特にパチンコ・パチスロファンの方には必見です。アツパチ（激パチ）をはじめとするプロバイダーと提携し、業界トップクラスの台数を提供しており、懐かしの4号機・5号機も遊べますよ！",
      "そんなオンラインカジノ限定ボーナスもゲームラインナップも最高な勝ウィンについて、CasinoTsuが徹底解説いたします。",
    ],
    ctas: [
      { text: "👉 勝WINの無料ボーナスGET！", href: "https://go.japanesecasino.com/go/katsuwin" },
      { text: "おススメ入金不要ボーナス最新版♡", href: "https://casinotsu.com/bonuses/no-deposit" },
    ],
  },
  games: [
    "勝WINでは6,000種類以上のゲームを楽しめます。最大の魅力は、実機のパチスロ・パチンコをオンラインでプレイできる点です。",
    "「アツパチ（激パチ）」、「V Game」、「MillionGod Gaming」という3つのパチンコプロバイダーを提供しており、業界トップクラスのバラエティを誇ります。懐かしの4号機・5号機（北斗の拳、吉宗など）や、人気のパチンコ（海物語、エヴァンゲリオンなど）もプレイ可能です。",
    "もちろん、シュガーラッシュ1000やムーンプリンセスなどの人気スロット、クレイジータイムなどのライブカジノも豊富に取り揃えています。",
  ],
  features: [
    "サイトはシンプルで分かりやすく、ゲームカテゴリーも見やすく整理されているため、オンラインカジノ初心者でも直感的に操作できます。",
    "専用アプリはありませんが、ブラウザからアクセス可能で、スマートフォン画面に最適化されているため、外出先でも快適にプレイできます。",
  ],
  editorial: {
    author: "Nanami",
    profileHref: "https://casinotsu.com/authors/nanami",
    hook: "賭け条件8倍の¥5,000入金不要ボーナスは破格！パチンコ・パチスロ好きなら見逃せないカジノです。",
    theGoodStuff: "なんといっても業界トップクラスのパチンコ・パチスロの品揃えが魅力です。加えて、¥5,000という高額な入金不要ボーナスに8倍という甘い賭け条件は、新規プレイヤーにとって最高のスタートダッシュを約束してくれます。24時間日本語サポートも安心材料です。",
    theHeadsUp: "決済方法の種類がまだ少ない点が最大のネックです。特にクレジットカードが直接使えず、仮想通貨購入を経由する必要があるのは手間かもしれません。また、出金には入金額の2倍のベットが必要という点も注意が必要です。",
    finalThought: "弱点はあるものの、それを補って余りある強みを持つカジノです。特に日本のプレイヤー、中でもパチンコ・パチスロファンを強く意識したサービス内容は高く評価できます。まずは超お得な入金不要ボーナスで、その実力を試してみてください。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "勝WIN（KatsuWIN）は2023年に彗星の如く現れた、日本のプレイヤー、特にパチンコ・パチスロファンに焦点を当てたオンラインカジノです。その最大の特徴は、「アツパチ」を含む3つのプロバイダーによる豊富なパチンコ・パチスロ実機のラインナップで、4号機・5号機といった往年の名機で遊べる点は他のカジノにはない大きな魅力となっています。",
      "ボーナス面も非常に強力です。CasinoTsu限定の5,000円入金不要ボーナスは、賭け条件がわずか8倍と破格の設定。最大15,000円の出金が可能で、ノーリスクで大きな勝利を狙えます。さらに、最大15万円（仮想通貨なら22.5万円）のウェルカムパッケージや、VIPプログラムも充実しており、長期的に楽しめる環境が整っています。",
      "ユーザー体験の面では、サイトはシンプルで直感的に操作でき、初心者でも安心です。また、24時間対応の日本語ライブチャットサポートは質が高く、迅速かつ丁寧な対応が期待できます。これは日本のプレイヤーにとって心強いポイントでしょう。",
      "一方で、課題も存在します。決済方法の選択肢が銀行振込と仮想通貨中心で、クレジットカードが直接利用できない点は改善が待たれます。また、出金条件として入金額の2倍のベットが求められる点は、一部のプレイヤーにとってはハードルに感じるかもしれません。",
      "総評として、勝WINは明確な強みを持つ、将来有望なカジノです。決済方法の拡充など今後のアップデートに期待しつつも、現状でもパチンコ・パチスロファンにとっては最高の選択肢の一つと言えます。まずは賭け条件の甘い入金不要ボーナスを活用して、その魅力を体験してみることを強くお勧めします。",
    ],
  },
  security: [
    "コモロ連合アンジュアン島発行のゲーミングライセンス（Anjouan Gaming License）を取得して合法的に運営",
    "明確なプライバシーポリシーに基づき個人情報を保護",
    "ライセンス取得済みプロバイダーのゲームのみを提供し、乱数生成器（RNG）により公平性を確保",
    "Casino Guruから7.9/10（平均以上）の安全性評価を獲得",
  ],
  responsiblePlay: [
    "自己規制機能: ログイン制限をプレイヤー自身で簡単に設定可能",
    "ログインできなくなる期間を選択し、2クリックで設定が完了",
    "（利用可能な責任あるギャンブルツールは限定的との指摘あり）",
  ],
  complaintStats: [
    "Casino Guru Safety Index: 7.9/10 (Above average)",
    "利用規約は「ほぼ公正」と評価されており、軽微な問題条項のみ指摘されている",
    "新しいカジノのため、プレイヤーからのレビューはまだ少ない",
  ],
  awards: [
    "特になし（2023年設立の新しいカジノのため）",
  ],
  restrictedCountries: [
    "アメリカ合衆国",
    "ノルウェー",
  ],
  userConcerns: [
    "決済方法の少なさ: 特にクレジットカードが直接入金に使えない点が不便との声",
    "サイトの速度: ページの表示が時々遅くなることがある",
    "ゲーム検索機能: 検索機能が分かりにくい場合があるとの指摘",
    "コンテンツの言語: 一部のコンテンツが英語など他言語で表示されることがある",
  ],
  summary: [
    "2023年に登場した勝WINは、5,000円（賭け条件8倍）の太っ腹な入金不要ボーナスと最大15万円のウェルカムボーナスでプレイヤーを迎えます。",
    "業界最速クラスの出金スピードと、懐かしの4号機・5号機パチスロまで楽しめる6,000種類以上のゲームラインナップが最大の魅力です。",
    "24時間日本語に完全対応したサポート、豊富な決済方法（銀行振込・仮想通貨）も完備しており、全体的にバランスよく完成度の高いカジノと言えます。",
    "アツパチ（激パチ）が提供する最新・懐かしのパチスロ・パチンコ、そして豊富なカジノゲームを、お得なボーナスで存分にお楽しみください。",
  ],
  extraLinks: [
    { text: "✅ オンカジの本人確認（KYC）を簡単解説！", href: "https://casinotsu.com/guides/document-verification" },
    { text: "🤔 出金条件が甘いボーナス特集はこちら", href: "https://casinotsu.com/bonuses/low-wagering" },
  ],
  faq: [
    {
      question: "勝WINの入金不要ボーナスの賭け条件は厳しいですか？",
      answer: "いいえ、非常に緩やかです。賭け条件は8倍で、入金不要ボーナスの中ではかなり甘い設定です。最大出金額は15,000円です。",
    },
    {
      question: "勝ウィンでは、オンラインパチンコ・パチスロはプレイできますか？",
      answer: "はい、プレイ可能です。アツパチ（激パチ）をはじめ、計3つのゲームプロバイダーから提供される日本のパチンコ・パチスロ実機を、いつでもオンラインでお楽しみいただけます。",
    },
    {
      question: "勝WINでは、決済にクレジットカードは利用できますか？",
      answer: "いいえ、直接の入金・出金にクレジットカードは利用できません。ただし、サイト内でクレジットカードを使って仮想通貨（USDT）を購入し、それを使って入金することは可能です。",
    },
  ],
  cta: {
    text: "勝WINで勝利を掴もう！",
    href: "https://go.japanesecasino.com/go/katsuwin",
  },
};