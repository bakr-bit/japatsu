import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewLiveCasinoHouse: ReviewPageContent = {
  hero: {
    title: "ライブカジノハウスのボーナスや出金方法を徹底解説！ CasinoTsu 厳選レビュー",
    subheading: "最大 ¥50,000 初回入金ボーナス",
    description: "ライブカジノゲームはもちろん、多種多様なカジノゲームをお楽しみいただける「ライブカジノハウス」について、CasinoTsu が詳細にレビューいたします。珍しいプロバイダーのゲームも遊べる魅力を徹底分析しました。",
    score: 4.1,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 82,
        note: "合計6社の豊富なライブカジノプロバイダーと3,000種類以上のスロットが魅力。長く楽しめるプロモーションも豊富です。",
      },
      {
        label: "規約",
        percent: 69,
        note: "最大50,000円の初回入金ボーナスは魅力的ですが、賭け条件がやや厳しめとの声もあります。",
      },
      {
        label: "操作性",
        percent: 87,
        note: "サイトデザインはシンプルかつ機能的。チャットウィンドウやゲーム検索フィルターが使いやすいと評価しています。",
      },
      {
        label: "サポート",
        percent: 90,
        note: "日本語ネイティブによる丁寧で迅速なサポートを長時間提供。LINEや電話にも対応しており安心です。",
      },
    ],
    highlights: [
      "ライブカジノゲームを6社採用し、マイナーなプロバイダーのゲームも楽しめる！",
      "毎日もらえる無制限キャッシュバックあり！",
      "選べる初回入金ボーナスは最大50,000円！",
      "完全日本語対応の親切なカスタマーサポート",
    ],
    watchouts: [
      "ボーナスの賭け条件がやや厳しめ",
      "決済方法の種類がやや少なめ",
      "出金時に8%の手数料がかかる",
      "出金には入金額の5倍の賭けが必要",
    ],
    avatarSrc: "/assets/casino/live-casino-house.png",
    avatarAlt: "Live casino houseのロゴ",
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
        note: "スピーディーな入出金と低い最低入金額が魅力",
      },
      {
        name: "クレジットカード",
        icon: "/assets/payments/visa.svg",
        badge: "即時反映",
        note: "主要ブランドに対応し手軽に入金可能",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "主要な仮想通貨での入出金に対応",
      },
    ],
    deposits: [
        { name: "ベガウォレット", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
        { name: "クレジットカード (Visa, MasterCard, JCB, Amex, Discover)", icon: "/assets/payments/visa.svg" },
        { name: "AstroPay Card" },
        { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
        { name: "Neteller" },
        { name: "Skrill" },
        { name: "Venus Point", icon: "/assets/payments/venus-point.svg" },
        { name: "iWallet", icon: "/assets/payments/iwallet.svg", href: "https://casinotsu.com/payment/iwallet" },
        { name: "Jeton" },
        { name: "仮想通貨 (Bitcoin, Litecoin, Ethereum, Bitcoin Cash, Ripple)", icon: "/assets/payments/bitcoin.svg" },
        { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg" },
        { name: "PayPay" },
        { name: "MoMo Pay" },
        { name: "True Money" },
        { name: "PromptPay" },
    ],
    withdrawals: [
        { name: "ベガウォレット", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
        { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg" },
        { name: "仮想通貨 (Bitcoin, Litecoin, Ethereum, Bitcoin Cash, Ripple)", icon: "/assets/payments/bitcoin.svg" },
        { name: "AstroPay Card" },
        { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
        { name: "Neteller" },
        { name: "Skrill" },
        { name: "Venus Point", icon: "/assets/payments/venus-point.svg" },
        { name: "iWallet", icon: "/assets/payments/iwallet.svg", href: "https://casinotsu.com/payment/iwallet" },
        { name: "Jeton" },
    ],
    notes: [
      "全ての出金方法で8%の手数料が発生します。",
      "出金申請の承認には、入金額の5倍以上を賭ける必要があります。",
      "1日の出金限度額は$5,000ですが、月間限度額は日本円で21,750,000円と高額です。",
    ],
  },
  bonuses: {
    overview:
      "ライブカジノハウスでは、プレイヤーのスタイルに合わせて選べるウェルカムボーナスや、毎日もらえるキャッシュバック、ユニークな『クエスト』機能など、多彩なプロモーションが用意されています。",
    noDeposit:
      "新規登録者限定で$30の入金不要ボーナスと、人気スロット『888 Dragons』で使える20回のフリースピンを進呈。入金前にカジノの雰囲気を試せる絶好の機会です。",
    extraSpins: {
      summary:
        "入金不要ボーナスの一部として、20回のフリースピンが提供されます。",
      schedule: [
        "登録完了後、『888 Dragons』で20回分のフリースピンが利用可能",
      ],
      warning: "フリースピンから得た勝利金には出金条件が適用されます。",
    },
    welcomeRows: [
      { depositNumber: "初回（ライブカジノ用）", percent: "100%", cap: "¥50,000", code: "ボーナス受取ボタン" },
      { depositNumber: "初回（スロット用）", percent: "150%", cap: "¥50,000", code: "ボーナス受取ボタン" },
    ],
    conditions: [
      "ライブカジノ専用ボーナスの賭け条件は20倍です。",
      "スロット専用ボーナスの賭け条件は18倍です。",
      "ボーナスマネーからの最大出金可能額は(入金額 + ボーナス額)の5倍、最大250,000円です。",
      "他のオファーやクエスト機能との併用はできません。",
    ],
    prohibitedGames: [
        "（ボーナスごとに利用可能なゲームタイプが指定されています）",
    ],
  },
  offers: [
    {
      title: "毎日貰える無制限リベートボーナス",
      description: "スロットゲームをプレイするだけで毎日リベートボーナスがもらえます。VIPレベルに応じて還元率がアップし、上限額に制限がないのが特徴です。",
      highlight: "賭け条件1倍で上限なし！スロット好き必見の常設オファー",
    },
    {
      title: "毎日貰える無制限キャッシュバック",
      description: "純損失額に応じて、毎日キャッシュバックが進呈されます。VIPランクによって還元率は最大9%（スロット）までアップし、こちらも上限額はありません。",
      highlight: "賭け条件1倍！負けても毎日チャンスがある安心の制度",
    },
    {
        title: "クエスト機能",
        description: "ログインやゲームプレイなど、指定のタスクを達成することでポイントを獲得。集めたポイントは景品や現金と交換できる独自のシステムです。",
        highlight: "遊べば遊ぶほどお得になるやり込み要素",
    },
    {
        title: "お友達紹介プログラム",
        description: "紹介した友達の損失額の一部がキャッシュバックとして毎日還元されます。紹介人数に応じて還元率もレベルアップします。",
    },
  ],
  facts: [
    { label: "名称", value: "Live Casino House" },
    {
      label: "ローンチ",
      value: "2018年",
    },
    { label: "運営会社", value: "Class Innovation B.V." },
    { label: "ライセンス", value: "Anjouan Gaming License, Curacao (GCB), Philippines" },
    { label: "VIPプログラム", value: "✅" },
    {
      label: "対応言語",
      value: "日本語、英語、その他",
    },
    { label: "対応通貨", value: "JPY, USD, THB, VND" },
    {
      label: "ゲームタイプ",
      value:
        "Baccarat, Blackjack, Craps, Game Shows, Live Casino, Poker, Roulette, Slots, Crash Games, Fishing Games",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="/providers/blueprint-gaming">Blueprint Gaming</Link>, <Link href="/providers/fa-chai-gaming">Fa Chai Gaming</Link>, <Link href="/providers/fantasma-games">Fantasma</Link>, <Link href="/providers/habanero">Habanero</Link>, <Link href="/providers/hacksaw-gaming">Hacksaw Gaming</Link>, <Link href="/providers/nolimit-city">Nolimit City</Link>, <Link href="/providers/octoplay">Octoplay</Link>, <Link href="/providers/pg-soft">PG SOFT</Link>, <Link href="/providers/play-n-go">Play’n GO</Link>, <Link href="/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="/providers/relax-gaming">Relax</Link>, Evolution, We Gaming, WMCASINO, AE Sexy, and more.
        </span>
      ),
    },
    { label: "最小入金額", value: "200円 (Vega Wallet)" },
    { label: "最小出金額", value: "1,500円" },
    { label: "電話サポート", value: "✅" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support.jp@livecasinohouse.com">support.jp@livecasinohouse.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (日本語対応 09:00～27:00)" },
    { label: "スカイプサポート", value: "✅" },
  ],
  intro: {
    paragraphs: [
      "サイトの雰囲気はクラシックスタイル。種類豊富なゲーム、そして何より複数プロバイダーのライブカジノが楽しめるオンラインカジノ、それがライブカジノハウス（Live Casino House）です！",
      "このライブカジノハウスは、その名の通り、ライブカジノを『売り』としてスタートしたカジノなのです。最近はライブカジノだけに集中しているわけではなく、スロット、クラッシュゲーム、釣りゲームなどの幅広いゲームもバランスよく取り揃えています。",
      "そんなライブカジノハウスの特徴や強みを、CasinoTsu と一緒に見ていきましょう！",
    ],
    ctas: [
      { text: "👉 ライブカジノハウスはこちら！ CasinoTsu 推薦リンク", href: "https://go.japanesecasino.com/go/live-casino-house" },
      { text: "🤓 これからオンカジを始める初心者必見！カジノガイド", href: "https://www.japanesecasino.com/guides" },
    ],
  },
  games: [
    "ライブカジノハウスは、その名の通りライブカジノに力を入れており、EvolutionやPragmatic Playといった王道から、We GamingやWMCASINOのような珍しいプロバイダーまで合計6社のゲームを提供しています。",
    "ライブカジノ以外も充実しており、スロットは3,000種類以上、さらにクラッシュゲーム、テーブルゲーム、釣りゲームなど、3,500種類以上の多彩なゲームラインナップを誇ります。",
  ],
  features: [
    "サイトデザインはクラシックで非常にシンプル。分かりやすく、シックなカジノらしさが出ています。",
    "見た目だけでなく機能性も高く、特にチャットウィンドウやゲーム検索フィルターが整理されており、目的のゲームにすぐアクセスできる点も高評価です。",
  ],
  editorial: {
    author: "Nanami",
    profileHref: "/authors/rina-okabe",
    hook: "ライブカジノ好きにはたまらないラインナップ！でも、出金条件の厳しさは覚悟が必要かも。",
    theGoodStuff: "6社のライブカジノプロバイダーと3,000以上のスロットは、ゲーム好きには申し分ない品揃えです。完全日本語対応の親切なサポートも、安心して遊べる大きなポイントです。",
    theHeadsUp: "一番の注意点は、出金に入金額の5倍の賭けが必要なことと、8%の手数料がかかること。これを厳しいと感じるプレイヤーは多いでしょう。ボーナス条件もよく確認が必要です。",
    finalThought: "出金条件のハードルはありますが、それを補って余りあるゲームの多様性と充実したプロモーションが魅力です。特に珍しいライブカジノを試したい方には、一度は訪れてみてほしいカジノです。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "CasinoTsuがライブカジノハウスをレビューする上で最も注目したのは、やはりその名の通りのライブカジノの充実度です。Evolutionなどの大手はもちろん、他ではあまり見かけないWMCASINOやAE Sexyといったプロバイダーのテーブルも楽しめるのは、ライブゲームファンにとって大きな魅力と言えるでしょう。現在6社と、以前よりは減ったものの、ユニークな選択肢を提供している点は高く評価できます。",
      "ライブカジノだけでなく、スロットやその他のゲームも3,500種類以上と豊富で、バランスの取れたゲームライブラリを構築しています。サイトはクラシックでシンプルなデザインながら、検索機能などが使いやすく、ストレスなくゲームを探せます。",
      "ボーナス面では、ライブカジノ用とスロット用から選べる初回入金ボーナスに加え、上限なしの毎日もらえるキャッシュバックやリベート、独自のクエスト機能など、プレイヤーを飽きさせない工夫が随所に見られます。",
      "しかし、手放しでおすすめできない点もあります。最大の懸念は出金条件の厳しさです。入金額の5倍を賭けなければ出金できず、さらに全ての出金に8%の手数料がかかるというルールは、他の多くのカジノと比較してプレイヤーに不利な条件です。この点を許容できるかどうかが、このカジノを選ぶ上での大きな分かれ目になるでしょう。",
      "サポート体制は素晴らしく、日本語ネイティブによる丁寧な対応が長時間受けられます。LINEや電話にも対応しているため、初心者でも安心して利用できます。",
      "総じて、ライブカジノハウスは厳しい出金条件という大きなデメリットを抱えつつも、それを上回るかもしれないゲームの多様性と強力な日本語サポート、ユニークなプロモーションを持つカジノです。特にライブカジノの新しい体験を求めるプレイヤーには、試してみる価値があるでしょう。",
    ],
  },
  security: [
    "Anjouan, Curacao (GCB), Philippinesの3つの信頼性が高いライセンスを取得",
    "運営会社はキュラソー拠点のClass Innovation B.V.",
    "128ビットのSSL暗号化通信方式で個人情報と決済情報を保護",
    "全てのゲームにRNG（乱数発生器）を使用し、iTech-Labsの認証も受けて公平性を確保",
  ],
  responsiblePlay: [
    "ログイン制限: カスタマーサポートへの連絡により、一定期間のログインを制限可能",
    "自己制限: ギャンブル行動をコントロールするための制限設定が可能",
    "（詳細は利用規約の「責任あるプレイ」で確認できます）",
  ],
  complaintStats: [
    "（公的な苦情統計データは提供されていません）",
  ],
  awards: [
    "（特筆すべき受賞歴はありません）",
  ],
  restrictedCountries: [
    "（公式サイトに明確なリストは提供されていません）",
  ],
  userConcerns: [
    "出金条件の厳しさ: 入金額の5倍の賭けが必要な点は、多くのプレイヤーから厳しいとの声が上がっています。",
    "出金手数料: 全ての出金に一律8%の手数料がかかる点は大きなデメリットです。",
    "ゲームプレイ中の接続問題: ユーザーレポートによると、プレイ中に通信や再接続の問題が発生することがあるようです。",
  ],
  summary: [
    "ライブカジノハウスは、テーブルゲームと3,000以上のスロットをバランス良く提供しており、ゲームの充実度は素晴らしいです。",
    "プレイヤーに嬉しいボーナスも盛りだくさんで、口コミや評判も全体的に良好です。特に、プロバイダーごとに見やすく分けられたライブカジノのインターフェースは高く評価できます。",
    "厳しい出金条件は注意が必要ですが、いつものライブカジノに飽き気味という方には、ぜひ試していただきたいオンラインカジノです。",
  ],
  extraLinks: [
    { text: "🤔 出金条件が甘いボーナスはどこ？", href: "https://www.japanesecasino.com/bonuses/low-wagering" },
    { text: "🌟 VIP特典を狙うならこのカジノ！", href: "https://www.japanesecasino.com/bonuses/vip" },
  ],
  faq: [
    {
      question: "ライブカジノハウスでは何社のプロバイダーのライブカジノが楽しめますか？",
      answer: "現在、6社のライブカジノプロバイダーのゲームをプレイ可能です。大手だけでなく、珍しいプロバイダーも含まれています。",
    },
    {
      question: "ライブカジノハウスのウェルカムボーナスは何ですか？",
      answer: "ライブカジノ用（100%最大¥50,000）とスロット用（150%最大¥50,000）の2種類から選べる初回入金ボーナスがあります。また、別途$30の入金不要ボーナスも提供されています。",
    },
    {
      question: "カスタマーサポートの特徴はありますか？",
      answer: "日本語ネイティブによるメールとライブチャットサポートに加え、LINEや電話での問い合わせも可能です。対応時間が長く、丁寧なことで評判です。",
    },
    {
        question: "ライブカジノハウスでは、仮想通貨を決済に利用することは可能ですか？",
        answer: "はい、ビットコイン、ライトコイン、イーサリアム、ビットコインキャッシュ、リップルなどの主要な仮想通貨での入出金が可能です。",
    },
  ],
  cta: {
    text: "今すぐライブカジノハウスでプレイ！",
    href: "https://go.japanesecasino.com/go/live-casino-house:live-casino-house",
  },
    images: {
    casino: [
      "/assets/casino/live-casino-house.png",
      "/assets/casino/live-casino-house.jpg",
    ],
  },
};