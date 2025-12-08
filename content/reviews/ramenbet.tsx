import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewRamenbet: ReviewPageContent = {
  hero: {
    title: "ラーメンベット（Ramenbet）の入金不要ボーナス・評判",
    subheading: "最大¥303,000＋合計250回フリースピン",
    description: "スロットもライブカジノもスポーツも充実！豊富なウェルカムボーナスをもらって、気になるゲームで遊んでみよう！運営はボンズカジノやカジノエックスと同じで安心安全♪",
    score: 3.8,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 69,
        note: "日本に進出したばかりのため知名度はまだ低いが、ボンズカジノ等と同じ運営会社なので安心感がある。",
      },
      {
        label: "規約",
        percent: 82,
        note: "賭け条件5倍の入金不要ボーナスが魅力的。ウェルカムボーナスも充実しており、キャンペーンも定期的。",
      },
      {
        label: "操作性",
        percent: 90,
        note: "フィルター機能が使いやすく、決済方法やゲーム、プロバイダーの品揃えも豊富。",
      },
      {
        label: "サポート",
        percent: 57,
        note: "日本語サポートには対応しておらず、英語かロシア語での問い合わせが必要。今後の改善に期待。",
      },
    ],
    highlights: [
      "賭け条件5倍のCasinoTsu限定入金不要ボーナス",
      "最大30万円の初回入金ボーナス＋選べる特典",
      "ボンズカジノやカジノエックスと同じ運営会社で安心",
      "5,000種類以上の豊富なゲーム数と優れた検索機能",
    ],
    watchouts: [
      "日本語カスタマーサポートが不在",
      "1日3回目以降の出金に10%の手数料が発生",
    ],
    avatarSrc: "/assets/casino/ramenbet.png",
    avatarAlt: "Ramenbetのロゴ",
  },
  payments: {
    featured: [
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "定番",
        note: "主要銀行に対応し安心の入出金",
      },
      {
        name: "PayPay",
        icon: "/assets/payments/paypay.svg",
        href: "https://casinotsu.com/payment/paypay",
        badge: "人気",
        note: "スマホで簡単に入金できる",
      },
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "即時反映",
        note: "クレジット/デビットどちらも対応",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://casinotsu.com/payment/vega-wallet",
        badge: "Eウォレット",
        note: "スピーディーな入出金と日本語UI",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "迅速かつ安全な匿名決済",
      },
    ],
    deposits: [
      { name: "American Express", icon: "/assets/payments/american-express.svg" },
      { name: "Bank Transfer", icon: "/assets/payments/bank-transfer.svg", href: "https://casinotsu.com/payment/bank-transfer" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "EcoPayz", icon: "/assets/payments/ecopayz.svg" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
      { name: "JCB", icon: "/assets/payments/jcb.svg", href: "https://casinotsu.com/payment/jcb" },
      { name: "Litecoin" },
      { name: "MasterCard", icon: "/assets/payments/mastercard.svg", href: "https://casinotsu.com/payment/mastercard" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg", href: "https://casinotsu.com/payment/muchbetter" },
      { name: "PayPay", icon: "/assets/payments/paypay.svg", href: "https://casinotsu.com/payment/paypay" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "Ripple" },
      { name: "SticPay", icon: "/assets/payments/sticpay.svg", href: "https://casinotsu.com/payment/sticpay" },
      { name: "Tether" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
      { name: "VISA", icon: "/assets/payments/visa.svg", href: "https://casinotsu.com/payment/visa" },
    ],
    withdrawals: [
      { name: "Bank Transfer", icon: "/assets/payments/bank-transfer.svg", href: "https://casinotsu.com/payment/bank-transfer" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
      { name: "EcoPayz", icon: "/assets/payments/ecopayz.svg" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
      { name: "Tether" },
      { name: "Ripple" },
      { name: "Litecoin" },
      { name: "USD Coin" },
      { name: "Solana" },
      { name: "Binance Coin" },
    ],
    notes: [
      "1日2回までの出金は無料ですが、3回目以降は出金額の10%の手数料が発生します。",
      "出金処理時間の目安：電子マネー/仮想通貨0〜24時間、カード決済3〜5日、銀行送金2〜3日。1ヶ月の最大出金額は$100,000です。",
    ],
  },
  bonuses: {
    overview:
      "ラーメンベットでは、新規プレイヤーから既存プレイヤーまで楽しめる、様々なボーナスやキャンペーンが用意されています。トーナメントや宝くじなどのイベントも随時開催されています。",
    noDeposit:
      "【CasinoTsu限定】登録時にボーナスコード「JAPANCASINO30」を入力すると、3,000円の入金不要ボーナスがもらえます。賭け条件はわずか5倍という驚異的な条件で、現金化のチャンス大です。",
    extraSpins: {
      summary:
        "初回入金時の選べるギフトとして、人気スロット「Legacy of Dead」で使える250回のフリースピンを選択できます。",
      schedule: [
        "1日50スピンずつ、5日間にわたって付与されます。",
        "スピンの1ベット額は12円相当（合計3,000円分）。",
      ],
      warning: "フリースピンから得た賞金には、30倍の賭け条件が適用されます。",
    },
    welcomeRows: [
      { depositNumber: "初回 (¥1,500〜)", percent: "200%", cap: "¥7,500", code: "自動" },
      { depositNumber: "初回 (¥7,500〜)", percent: "150%", cap: "¥45,000", code: "自動" },
      { depositNumber: "初回 (¥75,000〜)", percent: "100%", cap: "¥300,000", code: "自動" },
    ],
    conditions: [
      "初回入金ボーナスの賭け条件は、入金額に応じて25倍または30倍。",
      "選べるギフト（ライブディーラーバウチャー、スポーツフリーベット）の勝利金には20倍の賭け条件が適用。",
      "1回あたり300ドル以上の出金には本人確認（KYC）が必要。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "選べるウェルカムギフト",
      description: "初回入金ボーナスに加え、「250フリースピン」「1,000円ライブディーラーバウチャー」「1,000円スポーツフリーベット」の3つから好きな特典を1つ選べます。",
      highlight: "自分のプレイスタイルに合わせて特典を選べる",
    },
    {
      title: "トーナメント＆コンテスト",
      description: "他のプレイヤーと競い合い、賞金プールからの配当を狙えるトーナメントやコンテスト（レース）が定期的に開催されています。",
    },
    {
      title: "VIPプログラム",
      description: "プレイするほどステータスが上がり、キャッシュバックやリベートボーナスの還元率がアップグレードされるロイヤリティプログラムです。",
    },
  ],
  facts: [
    { label: "名称", value: "Ramenbet" },
    { label: "ローンチ", value: "2023年12月1日" },
    { label: "運営会社", value: "Pomadorro N.V." },
    { label: "ライセンス", value: "Antillephone License (キュラソー), Kyrgyzstan" },
    { label: "VIPプログラム", value: "〇" },
    { label: "対応言語", value: "サイトは日本語対応（サポートは英語、ロシア語）" },
    { label: "対応通貨", value: "JPY, USD, EURなど" },
    {
      label: "ゲームタイプ",
      value:
        "Baccarat, Blackjack, Craps, Game Shows, Live Casino, Poker, Roulette, Slots",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="/providers/bgaming">BGAMING</Link>, <Link href="/providers/betsoft">BetSoft</Link>, <Link href="/providers/endorphina">Endorphina</Link>, <Link href="/providers/hacksaw-gaming">Hacksaw Gaming</Link>, <Link href="/providers/octoplay">Octoplay</Link>, <Link href="/providers/playtech">Playtech</Link>, <Link href="/providers/play-n-go">Play’n GO</Link>, <Link href="/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="/providers/relax-gaming">Relax</Link>, <Link href="/providers/spinomenal">Spinomenal</Link>, Amatic, Amusnet Interactive, Belatra Games, Big Time Gaming, Booming Games, Booongo, Caleta Gaming, NetEnt, Nolimit City, Push Gaming, Quickspin, Red Tiger Gaming, Thunderkick, Yggdrasil, Wazdan
        </span>
      ),
    },
    { label: "最小入金額", value: "¥1,500" },
    { label: "最小出金額", value: "出金方法による" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "〇" },
    { label: "Eメール", value: "en_support@ramenbet.com, ru_support@ramenbet.com" },
    { label: "ライブチャット", value: "24時間対応 (英語, ロシア語)" },
  ],
  intro: {
    paragraphs: [
      "日本市場に登場したばかりの新しいオンラインカジノ【ラーメンベット（Ramenbet）】を詳しくご紹介いたします！",
      "実は、ラーメンベットは日本でも既に人気を集めている『カジノエックス』や『ボンズカジノ』の姉妹カジノにあたります。",
      "そのため、その安全性には大変期待できるものと考えております。さらに、日本のプレイヤーが使いやすいゲームや決済方法も豊富に用意されており、ボーナスも充実している、まさに期待の新星カジノと言えるでしょう。",
    ],
    ctas: [
      { text: "👉 早速ラーメンベットに登録してボーナスをゲット！", href: "https://go.japanesecasino.com/go/ramenbet" },
    ],
  },
  games: [
    "ラーメンベットは、スロット、ライブカジノ、スポーツベッティングまで、とにかくゲームの種類が豊富です。スロットは驚異の5,000種類以上で、他のカジノと比較してもトップクラスの数を誇ります。",
    "ライブカジノも、EvolutionやPragmatic Play Liveなど7つの有名プロバイダーから提供されており、定番ゲームから迫力満点のゲームショーまで楽しめます。",
    "60社以上のゲームプロバイダーと提携しており、人気スタジオから新しいスタジオまで幅広いゲームが揃っています。",
  ],
  features: [
    "ゲームを探す際のフィルター機能が非常に優秀です。スロット検索では、ボラティリティ、賭け条件消化対象、プロバイダー、ゲームフィーチャー、テーマなどで細かく絞り込めるので、好みに合ったゲームを効率的に見つけられます。",
    "スマホからでも非常に快適にプレイできます。特別なアプリは不要で、ブラウザから直接アクセスするだけでPC版と同様の機能やゲームをスムーズに楽しめます。",
  ],
  editorial: {
    author: "Momo",
    profileHref: "/authors/rina-okabe",
    hook: "ゲームの豊富さと検索機能は業界トップクラス！日本語サポートの不在が唯一のネック。",
    theGoodStuff: "ボンズカジノ系列という安心感に加え、5,000を超える圧巻のゲームライブラリが最大の魅力です。特に、詳細な条件で絞り込める検索フィルターは秀逸。賭け条件5倍の限定入金不要ボーナスは、試してみる価値大です。",
    theHeadsUp: "現時点では日本語サポートがなく、英語かロシア語での問い合わせが必要です。また、1日に3回以上出金すると10%の手数料がかかる点も注意が必要です。",
    finalThought: "サポートの壁を乗り越えられるなら、豊富なゲームと優れた操作性、そして魅力的なボーナスを存分に楽しめる優良カジノです。まずは限定ボーナスでその実力を体験してみてください。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "CasinoTsuがレビューする『ラーメンベット』は、そのユニークな名前とは裏腹に、非常に堅実で信頼性の高いオンラインカジノです。運営は『ボンズカジノ』や『カジノエックス』を手掛けるPomadorro N.V.社であり、その実績から安全性は高く評価できます。",
      "最大の特長は、5,000種類を超える圧倒的なゲームライブラリと、その膨大なゲームの中から目的のものを簡単に見つけ出せる高性能なフィルター機能です。ボラティリティやゲームフィーチャーで絞り込めるため、初心者からベテランまでストレスなくゲーム選択ができます。",
      "ボーナス面も非常に強力です。特に、当サイト限定で提供される3,000円の入金不要ボーナスは、賭け条件がわずか5倍と破格の設定です。さらに、最大30万円に達する初回入金ボーナスと、フリースピンなどの選べるギフトも用意されており、スタートダッシュを決めやすい環境が整っています。",
      "決済方法はクレジットカード、銀行送金、PayPay、各種Eウォレットや仮想通貨に対応しており、日本人プレイヤーにとって利便性が高いです。ただし、1日3回目以降の出金には10%の手数料が発生する点には注意が必要です。",
      "現時点での最大の課題は、日本語のカスタマーサポートが提供されていないことです。サポートは24時間体制ですが、英語またはロシア語での対応となるため、言語に不安があるプレイヤーにはハードルとなるかもしれません。この点が改善されれば、さらに評価の高いカジノになることは間違いないでしょう。",
      "総じて、ラーメンベットはサポート面を除けば、ゲームの質・量、ボーナスの魅力、サイトの使いやすさの全てにおいて高水準なオンラインカジノです。特に限定入金不要ボーナスはリスクなく試せる絶好の機会なので、ぜひ活用してみてください。",
    ],
  },
  security: [
    "信頼性の高いキュラソーのAntillephone Licenseを取得",
    "ボンズカジノ等を運営する実績豊富なPomadorro N.V.社による運営",
    "「プライバシーポリシー」に基づきプレイヤーの個人情報を保護",
    "ライセンス取得済みのプロバイダーのみを採用し、RNG（乱数生成器）によりゲームの公平性を保証",
  ],
  responsiblePlay: [
    "自己評価テスト: ギャンブル習慣をチェック",
    "自己排除（セルフ・エクスクルージョン）: アカウントの一時的または永久的な停止",
    "クールオフ期間: 短期間のアカウント休止",
    "入金制限: 入金額の上限を設定",
    "ベット制限: 賭け金の上限を設定",
    "損失制限: 損失額の上限を設定",
    "プレイ時間制限: プレイ時間の上限を設定",
  ],
  complaintStats: [],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "カスタマーサポートに日本語対応がない（英語・ロシア語のみ）",
  ],
  summary: [
    "実績あるボンズカジノの姉妹カジノで安全性が高い。",
    "5,000種類を超えるスロットや豊富なライブカジノなど、ゲームのラインナップが圧巻。",
    "検索機能が非常に使いやすく、ストレスなくお気に入りのゲームを見つけられる。",
    "賭け条件5倍の入金不要ボーナスは非常にお得で試す価値あり。",
    "日本語サポートがまだ充実していない点が今後の課題。",
  ],
  extraLinks: [
    { text: "🔥 最新入金不要ボーナスをチェック！", href: "https://www.japanesecasino.com/bonuses/no-deposit" },
    { text: "💫 仮想通貨が使えるカジノ特集", href: "https://www.japanesecasino.com/crypto" },
  ],
  faq: [
    {
      question: "ラーメンベットとボンズカジノ、テッドベットの違いは何ですか？",
      answer: "これらは全て同じ運営会社（Pomadorro N.V.）の姉妹カジノですが、サイトデザイン、プロモーション内容、ボーナスの種類、サポート体制などがそれぞれ異なります。ご自身の好みに合ったカジノをお選びください。",
    },
    {
      question: "ラーメンベットには、日本語サポートはありますか？",
      answer: "現時点では、ライブチャットやメールでのサポートは英語とロシア語に対応しており、日本語での直接的なサポートは提供されていません。今後のアップデートに期待しましょう。",
    },
  ],
  cta: {
    text: "ラーメンベットに登録して限定ボーナスをゲット！🔥",
    href: "https://go.japanesecasino.com/go/ramenbet",
  },
};