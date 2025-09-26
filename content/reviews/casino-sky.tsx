import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewCasinoSky: ReviewPageContent = {
  hero: {
    title: "カジノスカイ（Casino Sky）レビュー",
    subheading: "¥7,777入金不要ボーナス＋最大¥50,000初回入金マネーバック",
    description: "人気の「カジ旅」チームが手掛ける新カジノ『カジノスカイ』をCasinoTsuが徹底レビュー。シンプルで使いやすいサイトデザイン、賭け条件なしのキャッシュバック、豊富な決済方法を詳しく解説します。",
    score: 4.1,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 81,
        note: "大人気カジノ『カジ旅』の姉妹ブランドとして、リリース直後から多くのプレイヤーに支持されている。",
      },
      {
        label: "規約",
        percent: 74,
        note: "ボーナス規約は明確で分かりやすい。賭け条件はやや厳しめだが、賭け条件のないキャッシュバックは非常に魅力的。",
      },
      {
        label: "操作性",
        percent: 87,
        note: "シンプルで直感的なデザイン。必要なフィルターも完備されており、初心者でも快適に操作できる。",
      },
      {
        label: "サポート",
        percent: 80,
        note: "完全日本語対応のライブチャットは心強い。ただし対応時間（15:00-01:00 JST）が限られている。",
      },
    ],
    highlights: [
      "登録するだけで貰える¥7,777の入金不要ボーナス",
      "賭け条件なしのウィークリーキャッシュバック制度",
      "日本のオンラインカジノ市場で豊富な実績を持つチームが運営",
      "15種類以上の仮想通貨に対応",
    ],
    watchouts: [
      "キャンペーンの種類がまだ少ない",
      "VIP・ロイヤリティプログラムは招待制のみ",
      "一部のゲームで起動や検索に不具合あり（改善中）",
      "ライブチャットの対応時間が限定的",
    ],
  },
  payments: {
    featured: [
      {
        name: "JCB",
        icon: "/assets/payments/jcb.svg",
        href: "https://casinotsu.com/payment/jcb",
        badge: "人気",
        note: "日本のプレイヤーに人気のクレジットカード",
      },
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "定番",
        note: "安心安全の国内銀行送金",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://casinotsu.com/payment/vega-wallet",
        badge: "Eウォレット",
        note: "ポイントで管理するスピーディーな決済",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "迅速かつ匿名性の高い決済手段",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://casinotsu.com/payment/payz",
        badge: "Eウォレット",
        note: "多くのカジノで採用されている信頼の決済",
      },
    ],
    deposits: [
      { name: "VISA", icon: "/assets/payments/visa.svg", href: "https://casinotsu.com/payment/visa" },
      { name: "MasterCard", icon: "/assets/payments/mastercard.svg", href: "https://casinotsu.com/payment/mastercard" },
      { name: "JCB", icon: "/assets/payments/jcb.svg", href: "https://casinotsu.com/payment/jcb" },
      { name: "American Express" },
      { name: "Discover" },
      { name: "Diners Club" },
      { name: "J-Pay（銀行送金）" },
      { name: "ダイレクト銀行送金" },
      { name: "銀行送金", icon: "/assets/payments/bank-transfer.svg", href: "https://casinotsu.com/payment/bank-transfer" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
      { name: "Jeton", icon: "/assets/payments/jeton.svg", href: "https://casinotsu.com/payment/jeton" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
      { name: "Tether", icon: "/assets/payments/usdt.svg", href: "https://casinotsu.com/payment/usdt" },
      { name: "Litecoin" },
      { name: "Ripple" },
      { name: "USD Coin" },
      { name: "Dai" },
      { name: "Bitcoin Cash" },
      { name: "Binance Coin" },
      { name: "Cardano" },
      { name: "Dogecoin" },
      { name: "Shiba Inu" },
      { name: "Stellar Lumens" },
      { name: "Tron" },
    ],
    withdrawals: [
      { name: "銀行送金", icon: "/assets/payments/bank-transfer.svg", href: "https://casinotsu.com/payment/bank-transfer" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
      { name: "Jeton", icon: "/assets/payments/jeton.svg", href: "https://casinotsu.com/payment/jeton" },
      { name: "仮想通貨", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/crypto" },
    ],
    notes: [
      "最低入金額は¥1,500、最低出金額は¥3,000です。",
      "出金時間は決済方法により異なり、Eウォレットや仮想通貨は数時間～24時間、銀行送金は1日～5営業日が目安です。",
      "出金には本人確認（KYC）が必要です。事前に書類を提出しておくとスムーズです。",
    ],
  },
  bonuses: {
    overview:
      "カジノスカイは、特に新規プレイヤー向けのボーナスが非常に豪華です。登録するだけでもらえる¥7,777の入金不要ボーナスに加え、初回入金では最大¥50,000のマネーバックが用意されています。",
    noDeposit:
      "当サイトからカジノスカイに新規登録するだけで、¥7,777の入金不要ボーナスが進呈されます。ボーナスコードやサポートへの申請は不要で、登録後すぐにアカウントに反映されます。賭け条件は40倍で、勝利金の最大出金額は¥15,000です。",
    extraSpins: {
      summary: "現在のウェルカムオファーにフリースピンは含まれていませんが、今後のキャンペーンで提供される可能性があります。",
      schedule: [],
      warning: "",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%マネーバック", cap: "¥50,000", code: "不要" },
    ],
    conditions: [
      "入金不要ボーナスの賭け条件は40倍、有効期限は3日間。",
      "初回入金マネーバックの賭け条件は40倍、有効期限は30日間。",
      "初回入金マネーバックは、登録後72時間以内の初回入金が対象で、入金後24時間以内に残高が100円以下になった場合に有効。",
      "ボーナス利用時の賭け条件反映率: スロット100%、ライブカジノ10%。",
      "一度でも出金を行うと、初回入金マネーバックの対象外となります。",
    ],
    prohibitedGames: [
      "ウィークリーキャッシュバックには一部対象外ゲームがあります。詳細は利用規約をご確認ください。",
    ],
  },
  offers: [
    {
      title: "ウィークリーキャッシュバック",
      description: "2回目以降の入金を対象に、毎週金曜日から木曜日までの純損失額の7%がキャッシュバックされます。最大¥300,000まで受け取ることができ、最低キャッシュバック額は¥3,000です。",
      highlight: "賭け条件なし！リアルマネーで進呈されるので即出金も可能",
    },
  ],
  facts: [
    { label: "名称", value: "Casino Sky (カジノスカイ)" },
    { label: "ローンチ", value: "2023年" },
    { label: "運営会社", value: "SweetSpot N.V. Limited" },
    { label: "ライセンス", value: "Antillephone License Validation (Curaçao)" },
    { label: "VIPプログラム", value: "✅ (招待制)" },
    { label: "対応言語", value: "日本語のみ" },
    { label: "対応通貨", value: "JPY" },
    {
      label: "ゲームタイプ",
      value: "バカラ, ブラックジャック, クラップス, ゲームショー, ライブカジノ, ポーカー, ルーレット, スロット",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/betsoft">BetSoft</Link>, <Link href="https://casinotsu.com/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="https://casinotsu.com/providers/blueprint-gaming">Blueprint Gaming</Link>, <Link href="https://casinotsu.com/providers/booongo">Booongo</Link>, <Link href="https://casinotsu.com/providers/endorphina">Endorphina</Link>, <Link href="https://casinotsu.com/providers/fantasma-games">Fantasma</Link>, <Link href="https://casinotsu.com/providers/hacksaw-gaming">Hacksaw Gaming</Link>, Lucksome, <Link href="https://casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://casinotsu.com/providers/nolimit-city">Nolimit City</Link>, <Link href="https://casinotsu.com/providers/playson">Playson</Link>, <Link href="https://casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/quickspin">Quickspin</Link>, <Link href="https://casinotsu.com/providers/red-tiger">Red Tiger</Link>, <Link href="https://casinotsu.com/providers/relax-gaming">Relax</Link>, <Link href="https://casinotsu.com/providers/spinomenal">Spinomenal</Link>, <Link href="https://casinotsu.com/providers/stakelogic">Stakelogic</Link>, <Link href="https://casinotsu.com/providers/thunderkick">Thunderkick</Link>, <Link href="https://casinotsu.com/providers/yolted">Yolted</Link>, BGAMING, Caleta Gaming, Evoplay, G Gaming, Gaming Corps, Mascot Gaming, Novomatic, Onlyplay, Slingo, Spearhead Studios, Spribe
        </span>
      ),
    },
    { label: "最小入金額", value: "¥1,500" },
    { label: "最小出金額", value: "¥3,000" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅ (24時間対応)" },
    { label: "Eメール", value: <Link href="mailto:support@casinoskyjp.com">support@casinoskyjp.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (日本時間 15:00～01:00)" },
    { label: "公式サイトURL", value: "www.casinoskyjp.com" },
    { label: "所在地", value: "Fransche Bloemweg 4, Curaçao" },
    { label: "姉妹サイト", value: "Mint.io, Amuletobet, Casitabi, Casino.me" },
    { label: "制限地域", value: "New Jersey, USA" },
    { label: "対象プレイヤー", value: "アジアおよび中東、特に日本在住プレイヤー" },
  ],
  intro: {
    paragraphs: [
      "2023年11月、日本市場で絶大な人気を誇る『カジ旅』の運営チームが手掛ける新ブランド【カジノスカイ（Casino Sky）】が誕生しました。",
      "カジ旅チームは、8年以上にわたり日本市場向けオンラインカジノを成功させてきた実績を持ち、その経験とノウハウがカジノスカイにも活かされています。",
      "爽やかでシンプルなサイトデザイン、豪華なウェルカムボーナス、そして何より魅力的なキャッシュバック制度が特徴です。CasinoTsuがその全貌を徹底的に調査しました。",
    ],
    ctas: [
      { text: "👉 カジノスカイで今すぐプレイ！", href: "https://go.casinotsu.com/go/casino-sky:casino-sky?referrer_path=%2Freviews%2Fcasino-sky" },
      { text: "🔰 オンラインカジノの始め方ガイド", href: "https://casinotsu.com/guides/account-management" },
    ],
  },
  games: [
    "カジノスカイでは、約40社以上のプロバイダーから提供される3,000種類以上のゲームを楽しめます。特に日本のプレイヤーに人気のスロットが豊富に揃っており、検索フィルターもシンプルで使いやすいです。",
    "ライブカジノも充実しており、EvolutionやPragmatic Playといった大手プロバイダーに加え、Bombay Liveなども参加しています。日本語対応のジャパニーズルーレットやバカラテーブルも用意されています。",
  ],
  features: [
    "サイトデザインは非常にシンプルで直感的。ごちゃごちゃした装飾がなく、ゲームに集中しやすい環境です。",
    "運営チームは『カジ旅』や『カジノミー』を成功させた実績があり、日本のプレイヤーのニーズを深く理解しているため、安心してプレイできます。",
  ],
  editorial: {
    author: "CasinoTsu編集部",
    profileHref: "/authors",
    hook: "カジ旅チームの新作という安心感と、賭け条件なしのキャッシュバックが最大の魅力です。",
    theGoodStuff: "¥7,777の入金不要ボーナスは、新しいカジノを試す絶好の機会です。さらに、毎週最大¥300,000が賭け条件なしで戻ってくるキャッシュバックは、継続的にプレイするプレイヤーにとって非常に大きなメリットです。",
    theHeadsUp: "リリース直後のため、キャンペーンの種類はまだ少なめです。また、VIPプログラムが招待制である点や、一部ゲームの不具合（現在対応中）は今後の改善に期待したいポイントです。",
    finalThought: "シンプルさを好み、特にキャッシュバックを重視するプレイヤーには最適なカジノです。運営の信頼性も高く、初心者からベテランまで幅広くおすすめできます。まずは入金不要ボーナスでサイトの雰囲気を確かめてみてください。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "CasinoTsuがカジノスカイをレビューする上で最も注目したのは、その運営背景です。日本市場で8年以上の成功実績を持つ『カジ旅』チームが手掛けるという事実は、プレイヤーにとって何よりの安心材料となります。彼らは日本のプレイヤーが何を求め、何を好むかを熟知しており、そのノウハウがサイトの隅々にまで反映されています。",
      "サイトは爽やかでシンプルなデザインに統一されており、初心者でも迷うことなく操作できます。ゲーム数は3,000種類以上と十分で、決済方法もクレジットカードから15種類以上の仮想通貨まで幅広く対応しており、利便性は非常に高いです。",
      "プロモーションの核となるのは、¥7,777の入金不要ボーナスと、賭け条件のないウィークリーキャッシュバックです。特に後者は、負けた場合でも損失の7%がリアルマネーで戻ってくるため、プレイヤーはより安心してゲームに臨むことができます。これは、プレイヤーとの長期的な関係を重視する運営の姿勢の表れと言えるでしょう。",
      "一方で、リリース直後ということもあり、常設キャンペーンの数はまだ少なく、VIPプログラムも招待制のため、全てのプレイヤーがその恩恵を受けられるわけではありません。また、一部で報告されているゲームの不具合については、早急な改善が望まれます。",
      "総じて、カジノスカイは、運営の信頼性、魅力的なキャッシュバック、シンプルな操作性という3つの大きな強みを持つ、非常にポテンシャルの高いオンラインカジノです。今後のさらなる発展に期待しつつ、現時点でも十分に試す価値のある優良カジノとして、CasinoTsuは推薦します。",
    ],
  },
  security: [
    "信頼性の高い『カジ旅』の姉妹カジノであり、Sweetspot N.V. Limitedによって運営",
    "キュラソー政府発行のAntillephone License Validationライセンスに基づき合法的に運営",
    "提供されるゲームはすべてライセンスを取得したプロバイダーのもので、RNGにより公平性が保証",
    "公式サイトに詳細なプライバシーポリシーを明記し、個人情報を保護",
  ],
  responsiblePlay: [
    "責任あるギャンブルに関する専門ページをサイトフッターに設置",
    "アカウントの一時閉鎖などのサポートをライブチャットを通じて申請可能",
    "プレイヤーが安全に楽しむための情報提供に努めている",
  ],
  complaintStats: [],
  awards: [],
  restrictedCountries: [
    "New Jersey, USA",
  ],
  userConcerns: [
    "一部ゲームの起動や検索に不具合がある（運営側で対応中）",
    "ライブチャットサポートの応答にやや時間がかかる場合がある",
  ],
  summary: [
    "『カジ旅』チーム運営という絶大な安心感と信頼性。",
    "¥7,777の入金不要ボーナスと、賭け条件なしのウィークリーキャッシュバックが非常に強力。",
    "サイトはシンプルで直感的、初心者でも安心してプレイできる。",
    "キャンペーンの拡充やロイヤリティプログラムの一般開放など、今後の成長に期待が持てる。",
  ],
  extraLinks: [
    { text: "💰 賭け条件なしのボーナスとは？", href: "https://casinotsu.com/bonuses/no-wagering" },
    { text: "🕵️‍♂️ オンラインカジノライセンスについて詳しく知る", href: "https://casinotsu.com/info/casino-license" },
  ],
  faq: [
    {
      question: "カジノスカイでは、どのような決済方法が利用できますか？",
      answer: "クレジットカード（Visa, MasterCard, JCB等）、銀行振込、Eウォレット（Payz, Vega Wallet, Jeton）、そして15種類以上の仮想通貨（ビットコイン、イーサリアム等）に対応しています。",
    },
    {
      question: "最低出金可能額はいくらですか？",
      answer: "最低出金可能額は3,000円です。なお、最低入金額は1,500円からとなっています。",
    },
  ],
  cta: {
    text: "¥7,777ボーナスを受け取ってカジノスカイを体験する！",
    href: "https://go.casinotsu.com/go/casino-sky:casino-sky?referrer_path=%2Freviews%2Fcasino-sky",
  },
};