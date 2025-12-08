import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewMystino: ReviewPageContent = {
  hero: {
    title: "ミスティーノ（Mystino）レビュー",
    subheading: "最大¥150,000ボーナス + 限定¥4,500入金不要ボーナス",
    description: "日本人プレイヤーから絶大な支持を得る初心者向けカジノ、ミスティーノを徹底解説。複雑なルールを排除し、賭け条件の緩やかな限定ボーナスや賭け条件なしのスピンで、安心してオンラインカジノを始められます。",
    score: 4.6,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 90,
        note: "複雑な賭け条件を簡略化し、初心者から絶大な人気を博す。SNSでの評価も高く、トップクラスのカジノとして定着。",
      },
      {
        label: "規約",
        percent: 82,
        note: "入金不要ボーナスは賭け条件10倍、入金ボーナスは25倍と緩やか。さらに賭け条件なしのキャッシュスピンも提供。",
      },
      {
        label: "操作性",
        percent: 97,
        note: "日本語・英語両対応の検索フィルターは業界でも稀。サイトデザインは洗練され、Androidアプリも完備で非常に使いやすい。",
      },
      {
        label: "サポート",
        percent: 90,
        note: "ネイティブの日本人オペレーターが毎日12時間、365日対応。丁寧かつ的確なサポートで安心感が高い。",
      },
    ],
    highlights: [
      "CasinoTsu限定！¥4,500入金不要ボーナス（賭け条件10倍）",
      "登録後7日間毎日もらえる賭け条件なしの入金特典スピン",
      "初心者向けに複雑なルールを排除したシンプルな設計",
      "ベット額の一部が貯まる「サプライズキャッシュバック」機能",
      "リアルタイムのRTPがわかる独自ツール『Mウェーブ』搭載",
    ],
    watchouts: [
      "出金速度にばらつきがあるとの口コミあり",
      "Casino Guruによる安全性評価は「平均以下」",
      "経験豊富なプレイヤーにはシンプルすぎると感じる可能性",
      "クレジットカード入金に2.25%の手数料が発生",
    ],
    avatarSrc: "/assets/casino/mystino.png",
    avatarAlt: "Mystinoのロゴ",
  },
  payments: {
    featured: [
      {
        name: "PayPay",
        icon: "/assets/payments/paypay.svg",
        href: "https://www.japanesecasino.com/payment/paypay",
        badge: "人気",
        note: "PayPay銀行経由で簡単に入出金可能",
      },
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://www.japanesecasino.com/payment/bank-transfer",
        badge: "定番",
        note: "日本の主要銀行に対応し安心",
      },
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://www.japanesecasino.com/payment/visa",
        badge: "カード",
        note: "主要なクレジットカード・デビットカードに対応",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://www.japanesecasino.com/payment/vega-wallet",
        badge: "Eウォレット",
        note: "スピーディーなポイント制決済サービス",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://www.japanesecasino.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "約13種類の暗号資産に対応",
      },
    ],
    deposits: [
      { name: "VISA", icon: "/assets/payments/visa.svg" },
      { name: "MasterCard", icon: "/assets/payments/mastercard.svg" },
      { name: "JCB", icon: "/assets/payments/jcb.svg" },
      { name: "American Express" },
      { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg" },
      { name: "PayPay銀行", icon: "/assets/payments/paypay.svg" },
      { name: "LINE Pay" },
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg" },
      { name: "SticPay", icon: "/assets/payments/sticpay.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg" },
      { name: "VenusPoint" },
      { name: "Jetonbank" },
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
      { name: "Ripple (XRP)" },
      { name: "Litecoin (LTC)" },
      { name: "Bitcoin Cash (BCH)" },
      { name: "Tether (USDT)" },
      { name: "Cardano (ADA)" },
      { name: "Stellar (XLM)" },
      { name: "Avalanche (AVAX)" },
      { name: "USD Coin (USDC)" },
      { name: "Chainlink (LINK)" },
    ],
    withdrawals: [
      { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg" },
      { name: "PayPay銀行", icon: "/assets/payments/paypay.svg" },
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg" },
      { name: "SticPay", icon: "/assets/payments/sticpay.svg" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg" },
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum (ETH)", icon: "/assets/payments/ethereum.svg" },
      { name: "Ripple (XRP)" },
      { name: "Litecoin (LTC)" },
      { name: "Bitcoin Cash (BCH)" },
    ],
    notes: [
      "出金時間は平均して1～3営業日です。出金速度にはばらつきがあるとの報告もあります。",
      "クレジットカードでの入金には2.25%（最大$5）の手数料がかかります。",
      "初回出金時には本人確認（KYC）が必要です。ただし、登録自体はKYC不要で匿名で行えます。",
      "入金と出金は同じ決済方法を利用する必要があります（クレジットカード入金の場合は銀行振込で出金）。",
    ],
  },
  bonuses: {
    overview:
      "ミスティーノのボーナスは「分かりやすさ」と「お得さ」が両立しています。CasinoTsu限定の¥4,500入金不要ボーナスから始まり、3回にわたる最大¥150,000の分離型入金ボーナス、さらに毎日もらえる賭け条件なしのフリースピンと、初心者でも安心して利用できる特典が満載です。",
    noDeposit:
      "CasinoTsuからの新規登録者限定で、¥4,500のボーナスマネーをプレゼント。賭け条件は10倍と非常に緩やかで、スロットだけでなくライブカジノでも利用可能です。最大$100まで出金でき、有効期限は14日間です。",
    extraSpins: {
      summary:
        "登録後7日間、毎日「日替わり入金特典スピン」が提供されます。これは最低入金額（$10）を入金することで獲得でき、スピンからの勝利金には一切賭け条件がない『キャッシュスピン』です。",
      schedule: [
        "登録初日から7日間、毎日オファーが利用可能。",
        "その日の最低入金額を入金し、$10分をベットするとフリースピンが進呈される。",
        "勝利金は即時出金可能なキャッシュ。",
        "フリースピンの有効期限は獲得後24時間。",
      ],
      warning: "7日間連続で自動的にもらえるわけではなく、毎日入金とベットの条件を満たす必要があります。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "¥70,000", code: "不要" },
      { depositNumber: "2回目", percent: "75%", cap: "¥40,000", code: "不要" },
      { depositNumber: "3回目", percent: "50%", cap: "¥40,000", code: "不要" },
    ],
    conditions: [
      "入金ボーナスは分離型（ノンステッキー）です。リアルマネーを使い切った後にボーナスマネーが有効になります。",
      "ボーナスマネーの賭け条件は25倍です。",
      "有効期限は14日間、最大ベット額は$6.25です。",
      "賭け条件への貢献率：スロット100%、ライブゲーム・テーブルゲーム10%、ジャックポット0%。",
    ],
    prohibitedGames: [
        "ジャックポットゲームは賭け条件消化への貢献率が0%です。",
    ],
  },
  offers: [
    {
      title: "サプライズキャッシュバック",
      description: "ベット額の一部がキャッシュバックポットに貯まっていき、ポット残高が$10以上になると、ジャックポットのようにランダムなタイミングで全額がプレイヤーに還元されます。賭け条件はなく、現金として扱われます。",
      highlight: "いつ当たるかわからないドキドキ感が魅力の独自システム",
    },
    {
      title: "VIPラウンジ",
      description: "完全招待制のVIPプログラム。招待されると、キャッシュバック増量、VIP専用サポート、迅速なアカウント認証、新作ゲームの先行プレイ、限定トーナメントなどの特別な待遇が受けられます。",
      highlight: "昇格基準は非公開で、選ばれたプレイヤーのみが参加可能",
    },
  ],
  facts: [
    { label: "名称", value: "ミスティーノ (Mystino)" },
    { label: "ローンチ", value: "2020年" },
    { label: "運営会社", value: "Curisle N.V." },
    { label: "ライセンス", value: "Antillephone License Validation (Curaçao), Comoros (AOFA)" },
    { label: "VIPプログラム", value: "✅ (完全招待制)" },
    { label: "対応言語", value: "日本語" },
    { label: "対応通貨", value: "JPY, USD" },
    {
      label: "ゲームタイプ",
      value: "スロット, ライブカジノ, ゲームショー, バカラ, ブラックジャック, クラップス, ポーカー, ルーレット, クラッシュゲーム, 独占ゲーム",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://www.japanesecasino.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://www.japanesecasino.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://www.japanesecasino.com/providers/netent">NetEnt</Link>, <Link href="https://www.japanesecasino.com/providers/evolution">Evolution</Link>, <Link href="https://www.japanesecasino.com/providers/golden-hero-games">Golden Hero</Link>, <Link href="https://www.japanesecasino.com/providers/relax-gaming">Relax</Link>, <Link href="https://www.japanesecasino.com/providers/yggdrasil">Yggdrasil</Link>, <Link href="https://www.japanesecasino.com/providers/nolimit-city">Nolimit City</Link>, <Link href="https://www.japanesecasino.com/providers/hacksaw-gaming">Hacksaw Gaming</Link>, Microgamingなど約67社
        </span>
      ),
    },
    { label: "最小入金額", value: "$10" },
    { label: "最小出金額", value: "$20" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:customer@mystino.com">customer@mystino.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (毎日12時間日本語対応)" },
    { label: "LINEサポート", value: "✅" },
  ],
  intro: {
    paragraphs: [
      "2020年の登場以来、日本人プレイヤーの間で瞬く間に人気カジノの地位を確立した「ミスティーノ（Mystino）」。その最大の魅力は、「オンラインカジノの複雑なルールをなくし、誰でも安心して楽しめる」という明確なコンセプトにあります。",
      "公式キャラクターのミスティとジャックが案内するサイトは、初心者でも直感的に操作でき、賭け条件の緩やかなボーナスや賭け条件のないフリースピンが、初めてのプレイヤーの不安を和らげます。",
      "CasinoTsu限定の豪華な入金不要ボーナスから始まり、豊富なゲームラインナップ、そして充実した日本語サポートまで、ミスティーノがなぜこれほどまでに支持されるのか、その理由を徹底的にレビューします。",
    ],
    ctas: [
      { text: "👉 CasinoTsu限定ボーナスでミスティーノを始める！", href: "https://go.japanesecasino.com/go/mystino:mystino" },
      { text: "🔰 オンラインカジノの始め方をチェック", href: "https://www.japanesecasino.com/guides" },
    ],
  },
  games: [
    "ミスティーノでは、5,600種類以上の豊富なゲームが楽しめます。Pragmatic Play社と共同開発した『ミスティーノ・プリンセス』や、Golden Hero社の人気スロットとコラボした『ミスティーノ・花魁ドリーム』など、ここでしか遊べない独占ゲームも多数用意されています。",
    "特筆すべきは、世界初となる独自機能『Mウェーブ』です。これは、各スロットのリアルタイムでのRTP推移や当たり履歴を確認できる画期的なツールで、プレイヤーは「今勝てるスロット」をデータに基づいて選ぶことができます。",
    "ライブカジノもEvolution Gamingをはじめとする主要プロバイダーを網羅しており、スロットからライブゲームまで、あらゆるプレイヤーのニーズに応えるラインナップとなっています。",
  ],
  features: [
    "ミスティーノはプレイヤーの使いやすさを第一に考えています。業界でも珍しい、ゲーム名をカタカナでも英語でも検索できるフィルター機能はその象徴です。",
    "Androidユーザー向けには専用のモバイルアプリが提供されており、外出先でも快適にプレイできます。また、LINEを通じたカスタマーサポートも可能で、日本人プレイヤーにとって非常に便利な環境が整っています。",
  ],
  editorial: {
    author: "Nanami",
    profileHref: "/authors/rina-okabe",
    hook: "初心者にとって、これ以上ないほど親切なカジノ。分かりやすさと安心感が最大の武器です。",
    theGoodStuff: "複雑なボーナス規約を極力排除し、賭け条件10倍の入金不要ボーナスや賭け条件なしのスピンを提供する姿勢は、プレイヤーへの誠実さの表れです。24時間ではないものの、ネイティブ日本人による質の高いサポートは絶大な安心感を与えてくれます。",
    theHeadsUp: "一方で、そのシンプルさゆえに、複雑なプロモーションやトーナメントを好む経験豊富なプレイヤーには物足りなく感じられるかもしれません。また、出金速度にばらつきがあるという口コミや、Casino Guruの安全評価が平均以下である点は留意すべきです。",
    finalThought: "ミスティーノは、「最初のオンラインカジノ」として自信を持っておすすめできるプラットフォームです。リスクを抑えながらオンラインカジノの楽しさを体験するには最適の選択肢と言えるでしょう。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "ミスティーノが2020年のデビューから短期間で日本のトップカジノの一つに数えられるようになった理由は、その徹底した「プレイヤーファースト」の姿勢にあります。多くのオンラインカジノが複雑なボーナス条件でプレイヤーを混乱させる中、ミスティーノは「分かりやすさ」を前面に打ち出し、特に初心者層の心を掴みました。",
      "その象徴がボーナスシステムです。CasinoTsu限定の¥4,500入金不要ボーナスは賭け条件10倍、3段階の入金ボーナスは出金しやすい分離型で賭け条件25倍、そして毎日の入金特典スピンは賭け条件なし。これらの条件は、業界標準と比較しても非常に良心的です。さらに、ベット額の一部がランダムに還元される「サプライズキャッシュバック」は、予期せぬ喜びを提供してくれるユニークな試みです。",
      "操作性も際立っています。5,600以上のゲームの中から目当てのゲームを探す際、カタカナでも英語でも検索できる機能は、些細なようでいて非常に便利です。また、独自開発の『Mウェーブ』ツールを使えば、どのスロットが現在ペイアウトしやすいかをデータで確認できるため、戦略的なプレイが可能になります。",
      "安全性については、キュラソーとコモロのライセンスを保有し、運営の透明性は確保されています。しかし、Casino Guruの安全評価が6.3/10（平均以下）である点は無視できません。これは主に、カジノの規模が比較的小さいことや、利用規約の解釈などが影響していると考えられますが、大多数のプレイヤーにとっては問題なく楽しめるレベルです。出金速度に関する一部のネガティブな口コミもありますが、全体としてはサポート体制の評価が高く、トラブル時も安心できる環境が整っています。",
      "結論として、ミスティーノは、可愛らしいキャラクターと洗練されたデザインの裏に、プレイヤーのことを第一に考えた堅実な運営哲学を持つ優れたカジノです。特にオンラインカジノが初めての方、複雑なルールにうんざりしている方には、最高の選択肢となるでしょう。",
    ],
  },
  security: [
    "キュラソー政府発行の「Antillephone License Validation」およびコモロ（AOFA）ライセンスを保有し、合法的に運営。",
    "全てのゲームに乱数発生器（RNG）が搭載され、公平性を保証。",
    "サイト内のプライバシーポリシーで個人情報の取り扱いを明確化。",
  ],
  responsiblePlay: [
    "入金制限: マイページから日・週・月単位で簡単に入金額の上限を設定可能。",
    "自己規制: ギャンブル依存のリスクを感じた際に、アカウントの一時的または永久的な利用停止を申請できる。",
  ],
  complaintStats: [
    "Casino Guruによる安全性評価は6.3/10で「平均以下」。これは主にカジノの規模や規約の厳格な解釈によるものと見られる。",
    "プレイヤーからの主な不満点は、出金速度のばらつきに関するもの。",
  ],
  awards: [],
  restrictedCountries: [
    "アメリカ合衆国",
  ],
  userConcerns: [
    "出金速度が他のカジノと比較して遅い場合がある。",
    "サプライズキャッシュバックの当選タイミングがランダムで、プレイヤーが能動的に利用できない。",
  ],
  summary: [
    "初心者にとって理想的なオンラインカジノで、分かりやすいルールと手厚いボーナスが魅力。",
    "CasinoTsu限定の¥4,500入金不要ボーナス（賭け条件10倍）は非常にお得。",
    "賭け条件なしのフリースピンやキャッシュバックが豊富で、リスクを抑えて楽しめる。",
    "出金速度には改善の余地があるものの、質の高い日本語サポートと全体的な信頼性でカバーしている。",
  ],
  extraLinks: [
    { text: "🔰 賭け条件が緩いカジノ特集", href: "https://www.japanesecasino.com/bonuses/low-wagering" },
    { text: "💰 分離型ボーナスとは？詳しく解説", href: "https://www.japanesecasino.com/bonuses/non-sticky" },
  ],
  faq: [
    {
      question: "ミスティーノのキャラクターの名前は何ですか？",
      answer: "美少女キャラクターが「ミスティ」で、ウサギのキャラクターは「ジャック」です。",
    },
    {
      question: "ミスティーノで勝てない時はどうすればいいですか？",
      answer: "独自ツール『Mウェーブ』を利用して、リアルタイムのRTP（還元率）や当たり履歴を確認し、現在ペイアウトしやすいスロットを探してみることをお勧めします。",
    },
    {
      question: "ミスティーノの出金は早いですか？",
      answer: "出金速度は平均24時間～3営業日とされており、他のカジノと比較してばらつきがあるとの口コミもあります。仮想通貨を利用すると比較的早い傾向にあります。",
    },
    {
      question: "ミスティーノは本人確認（KYC）が必要ですか？",
      answer: "登録時にKYCは不要で、匿名でのプレイが可能です。ただし、初めて出金する際には、アカウント認証（KYC）が求められる場合があります。",
    },
  ],
  cta: {
    text: "CasinoTsu限定ボーナスでミスティーノを始める！",
    href: "https://go.japanesecasino.com/go/mystino:mystino",
  },
    images: {
    casino: [
      "/assets/casinos/mystino_375x375.png",
      "/assets/jp/mystino.png",
      "/assets/casino/mystino.png",
      "/assets/casino/mystino.jpg",
    ],
  },
};