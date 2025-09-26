import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewFutocasi: ReviewPageContent = {
  hero: {
    title: "フトカジ／FUTOCASI レビュー (閉鎖済み)",
    subheading: "最大$390ボーナス＋100回フリースピン (過去情報)",
    description: "斬新なコンセプトが特徴だったフトカジのレビュー。重要なお知らせ：このカジノは完全に閉鎖されており、運営を終了しています。このページは過去の記録として保持されています。",
    score: 3.7,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 68,
        note: "ユニークなコンセプトとグラフィックが印象的だったが、モダンさには欠けるという評価でした。",
      },
      {
        label: "規約",
        percent: 79,
        note: "3回までの入金ボーナスは魅力的で禁止ゲームも少なかったが、利用規約には不公平との指摘もありました。",
      },
      {
        label: "操作性",
        percent: 77,
        note: "サイトはスタイリッシュではなかったものの、決済方法が豊富で全体的な使いやすさは平均的でした。",
      },
      {
        label: "サポート",
        percent: 80,
        note: "サポートは丁寧との声がありましたが、対応時間が限られ、ネイティブ日本語サポートも限定的でした。",
      },
    ],
    highlights: [
      "豊富なゲームバラエティ",
      "仮想通貨を含む多様な決済方法",
      "プレイするだけで貯まる「スーパーポイント」システム",
      "ボーナス禁止ゲームが比較的少なかった",
    ],
    watchouts: [
      "カジノは完全に閉鎖済み",
      "利用規約が『不公平』または『搾取的』と外部サイトから評価されていた",
      "ボーナス没収や出金制限に関するプレイヤーからの苦情報告",
      "日本語サポートの対応が限定的だった",
    ],
  },
  payments: {
    featured: [
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "カード",
        note: "主要なクレジットカードに対応",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://casinotsu.com/payment/payz",
        badge: "Eウォレット",
        note: "多くのカジノで採用される電子ウォレット",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://casinotsu.com/payment/vega-wallet",
        badge: "ポイント制",
        note: "ポイントでの管理が便利な決済サービス",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "代表的な暗号資産での入出金",
      },
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        badge: "安心",
        note: "直接送金できる信頼性の高い方法",
      },
    ],
    deposits: [
      { name: "Visa", icon: "/assets/payments/visa.svg" },
      { name: "Master Card", icon: "/assets/payments/mastercard.svg" },
      { name: "VegaWallet", icon: "/assets/payments/vega-wallet.svg", href: "https://www.casinotsu.com/payment/vega-wallet" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://www.casinotsu.com/payment/payz" },
      { name: "AstroPay", icon: "/assets/payments/astropay.svg", href: "https://www.casinotsu.com/payment/astropay" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg", href: "https://www.casinotsu.com/payment/muchbetter" },
      { name: "MiFinity" },
      { name: "Neosurf" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://www.casinotsu.com/payment/bitcoin" },
      { name: "Bitcoin Cash" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://www.casinotsu.com/payment/ethereum" },
      { name: "Litecoin" },
      { name: "Tether (TRC20)", icon: "/assets/payments/usdt.svg", href: "https://www.casinotsu.com/payment/usdt" },
      { name: "Tether (ERC20)" },
      { name: "Tron (TRX)" },
      { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg" },
    ],
    withdrawals: [
      { name: "VegaWallet", icon: "/assets/payments/vega-wallet.svg" },
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "AstroPay", icon: "/assets/payments/astropay.svg" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg" },
      { name: "MiFinity" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
      { name: "Bitcoin Cash" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg" },
      { name: "Litecoin" },
      { name: "Tether (TRC20)" },
      { name: "Tether (ERC20)" },
      { name: "Tron (TRX)" },
      { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg" },
    ],
    notes: [
      "最小入金額は約¥1,200、最小出金額は約¥2,000でした。",
      "出金限度額が日/週/月あたりそれぞれ¥2,000/¥4,000/¥16,000と非常に低く設定されていました。",
      "出金処理時間は決済方法により異なり、eウォレットで2〜5営業日、銀行振込で3〜7営業日とされていました。",
    ],
  },
  bonuses: {
    overview:
      "フトカジでは、初回から3回目までの入金に対してウェルカムボーナスが提供されていました。合計で最大42,000円と100回のフリースピンという内容でした。",
    noDeposit:
      "入金なしでボーナスを受け取った場合、賭け条件は50倍、最大獲得額は¥6,000と定められていました。",
    extraSpins: {
      summary:
        "初回入金時に、Yggdrasil社の人気スロットで利用できる100回のフリースピンが5日間にわたって毎日20回ずつ付与されました。",
      schedule: [
        "1日目: Sunny Shores",
        "2日目: Valley of the Gods",
        "3日目: Dr. Fortuno",
        "4日目: Wild Robo Factory",
        "5日目: Vikings Go to Hell",
      ],
      warning: "フリースピンからの勝利金には35倍の賭け条件が適用され、最大出金額は¥10,000に制限されていました。また、フリースピン自体の有効期限は48時間でした。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "¥6,000", code: "フリースピン100回付き" },
      { depositNumber: "2回目", percent: "50%", cap: "¥12,000", code: "" },
      { depositNumber: "3回目", percent: "50%", cap: "¥24,000", code: "" },
    ],
    conditions: [
      "ウェルカムボーナスの賭け条件は（入金額＋ボーナス額）の30倍。",
      "フリースピン勝利金の賭け条件は35倍。",
      "ボーナスの有効期限は30日間、フリースピンや付与されたボーナスマネーの有効期限は48時間。",
      "ボーナスマネーでの最大ベット額は¥600。",
      "賭け条件消化率: スロット100%、ビデオポーカー30%、リアルカジノ25%、その他50%、ライブカジノ・テーブルゲーム0%。",
    ],
    prohibitedGames: [
      "ボーナスゲームやフィーチャーを購入できる機能のある全てのスロット (消化率0%)",
      "以下の特定スロットは消化率50%: 1429 Uncharted Seas, 888 Dragons, Bell of Fortune, Blood Suckers, Break Da Bank, Dead or Alive, Dead or Alive 2, Jack Hammer, Jack Hammer 2, Jackpot 6000, Jokerizer, Mega Joker, Mystery Joker, Secrets of Atlantis, Guns N Roses, Jimi Hendrix, Motorhead, Reel Rush",
      "進行型ゲームでのボーナス乱用は勝利金没収のリスクがありました: Koi Princess, Double Dragons, Dr. Jekyll & Mr. Hyde, Blood Suckers, Game of Thrones (15 lines), Eye of the Kraken, Tower Quest, The Wish Master, Scrooge, Robin Hood – Shifting Riches, Pearls of India, Royal Masquerade, Castle Builder, Untamed Bengal Tiger, Untamed Wolf Pack",
    ],
  },
  offers: [
    {
      title: "スーパーポイント（ロイヤリティプログラム）",
      description: "ログイン、入金、ゲームプレイなど、カジノでのほぼ全てのアクションで「スーパーポイント」が貯まる独自のシステムがありました。貯まったポイントは、フリースピン、入金ボーナス、フリーキャッシュなどと交換可能でした。",
      highlight: "アカウント登録で200ポイント、毎日のログインで25ポイントなど、貯めやすい仕組みでした。",
    },
  ],
  facts: [
    { label: "名称", value: "Futocasi (フトカジ)" },
    { label: "ローンチ", value: "2020年5月4日" },
    { label: "運営会社", value: "StarfishMedia N.V." },
    { label: "ライセンス", value: "情報なし" },
    { label: "VIPプログラム", value: "✅ (スーパーポイントシステム)" },
    { label: "対応言語", value: "日本語、英語" },
    { label: "対応通貨", value: "JPY, USD, EUR, GBP" },
    {
      label: "ゲームタイプ",
      value: "スロット, テーブルゲーム, ビデオポーカー, ライブカジノ",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://www.casinotsu.com/providers/play-n-go">Play’nGo</Link>, <Link href="https://www.casinotsu.com/providers/golden-hero-games">Golden Hero</Link>, <Link href="https://www.casinotsu.com/providers/yggdrasil">Yggdrasil</Link>, <Link href="https://www.casinotsu.com/providers/red-tiger">Red Tiger</Link>, <Link href="https://www.casinotsu.com/providers/relax-gaming">Relax Gaming</Link>, <Link href="https://www.casinotsu.com/providers/quickspin">Quickspin</Link>, <Link href="https://www.casinotsu.com/providers/pragmatic-play">Pragmatic</Link>, Authentic Gaming, NetEnt, Ezugi, Evolution Gaming, Playtech, Novomatic, Nolimit Cityなど48社
        </span>
      ),
    },
    { label: "最小入金額", value: "¥1,200" },
    { label: "最小出金額", value: "¥2,000" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@futocasi.com">support@futocasi.com</Link> },
    { label: "ライブチャット", value: "✅ (毎日16時〜26時、日本語は限定的)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "フトカジは、2020年5月にサービスを開始したオンラインカジノで、そのユニークなコンセプトと『スーパーポイント』と呼ばれるロイヤリティプログラムが特徴でした。",
      "豊富なゲームプロバイダーと決済方法を揃えていましたが、運営期間中から利用規約の公平性やプレイヤーからの苦情など、いくつかの懸念事項が指摘されていました。",
      "【重要】このカジノは現在完全に閉鎖されており、サービスを終了しています。このレビューは、あくまで過去の運営状況に関する記録として提供するものです。",
    ],
    ctas: [
      { text: "🌟 CasinoTsuが推薦する現在の優良カジノをチェック", href: "https://www.japanesecasino.com/reviews" },
    ],
  },
  games: [
    "フトカジは、Play’n GO, Yggdrasil, Pragmatic Playなどを含む48社ものプロバイダーと提携し、幅広いゲームセレクションを提供していました。",
    "特にライブカジノはEvolutionやPlaytechなど主要なスタジオを網羅し、マルタやロンドンの実在カジノからのライブ配信テーブルも楽しめるなど、非常に充実していました。",
  ],
  features: [
    "フトカジ最大の特徴は「スーパーポイント」システムでした。これは、登録、ログイン、入金、ベットといったほぼ全てのアクションでポイントが貯まるというもので、実質的なコンプポイント兼VIPプログラムとして機能していました。",
    "貯まったポイントはサイト内のロビーでフリースピンやボーナスと交換でき、プレイヤーの継続的なプレイを促す魅力的な仕組みでした。",
  ],
  editorial: {
    author: "CasinoTsu編集部",
    profileHref: "/authors",
    hook: "ユニークなポイント制度は魅力的でしたが、規約の不透明さと数々の警告がその評価を大きく下げていました。",
    theGoodStuff: "ゲームの種類、特にライブカジノの豊富さは特筆すべき点でした。また、プレイするだけで自然にポイントが貯まり、ボーナスと交換できる「スーパーポイント」は、プレイヤーにとって明確なメリットでした。",
    theHeadsUp: "しかし、その評価は数々の重大な懸念によって損なわれていました。外部レビューサイトから『不公平』と指摘された利用規約、ボーナス没収などのプレイヤーからの苦情、そして非常に低い出金限度額は、安心してプレイできる環境とは言い難いものでした。",
    finalThought: "結果として閉鎖に至りましたが、フトカジは、プレイヤーにとって魅力的なアイデアも、それを支える公正な規約と信頼性がなければ成り立たないという教訓を残したカジノと言えるでしょう。",
  },
  longform: {
    kicker: "CasinoTsuレビュー (過去情報)",
    title: "編集部による詳説：フトカジの光と影",
    paragraphs: [
      "フトカジは、2020年に登場した際、そのユニークなコンセプトとゲーミフィケーション要素で注目を集めました。特に『スーパーポイント』と名付けられたロイヤリティプログラムは、プレイヤーがカジノ内で行うほぼ全てのアクション（ログイン、入金、ベット）をポイント化し、それをボーナスに交換できるというもので、継続的にプレイするインセンティブとして非常にうまく機能していました。ゲームのラインナップも48社と豊富で、特にライブカジノの充実は高く評価できる点でした。",
      "しかし、その運営には当初から多くの疑問符がついていました。最大の懸念点は、利用規約の公平性です。Casino.Guruなどの外部機関は、フトカジの規約を『不公平』または『露骨に搾取的』と評価しました。具体的には、ボーナス利用中に特定のゲームをプレイしただけでボーナスを没収する可能性や、『低リスクベット』という曖昧な基準で賞金を没収するリスク、さらには長期間の非アクティブでアカウント残高を失効させる条項などが指摘されていました。これらの規約は、プレイヤーを不当なリスクに晒すものでした。",
      "さらに、プレイヤーからの苦情も散見されました。ボーナスの不当な没収や、非常に低く設定された出金限度額（月間わずか¥16,000）に関する問題など、資金の安全性に関わるトラブルが報告されていました。日本語サポートも限定的で、問題発生時に十分なケアを受けられない可能性も示唆されていました。",
      "フトカジのボーナスシステムも独特でした。ボーナスを受け取ると、まずリアルマネーから消費され、その間の勝利金はボーナスマネーに加算されるという仕組みでした。賭け条件をクリアする前にボーナスを放棄してリアルマネーを出金することは可能でしたが、その場合、勝利金も放棄することになるため、実質的に入金額以上を引き出すには厳しい賭け条件のクリアが必須でした。この複雑なシステムもまた、プレイヤーにとって分かりにくい点でした。",
      "総括すると、フトカジはプレイヤーを楽しませるための革新的なアイデアを持っていた一方で、その土台となるべき透明性、公平性、そして信頼性に深刻な問題を抱えていました。最終的に閉鎖という結果になりましたが、これはオンラインカジノを選ぶ際に、表面的な魅力だけでなく、その規約や評判を徹底的に精査することの重要性を示す好例と言えるでしょう。",
    ],
  },
  security: [
    "運営会社はStarfishMedia N.V.とされていました。",
    "実際のサービス開始は2020年5月4日でした。",
    "推定年間収益は100万ドル以上の中規模カジノとされていました。",
  ],
  responsiblePlay: [
    "責任あるギャンブルに関する具体的なツールやポリシーについての情報は限定的でした。",
  ],
  complaintStats: [
    "Casino.Guruの安全性指数は6.8/10（平均以上）でしたが、利用規約に『不公平』という重大な警告が付随していました。",
    "CasinoFreak.comやChipy.comなどの他のレビューサイトでも警告ステータスとされ、利用は推奨されていませんでした。",
  ],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "利用規約が不公平または搾取的であるとの外部評価",
    "ボーナス賭け条件消化中の制限ゲームプレイによるボーナス残高没収のリスク",
    "低リスクベットとみなされる行為による賞金没収のリスク",
    "12〜18ヶ月の非アクティブ期間でアカウント残高が失効する可能性",
    "一部の日本人プレイヤーからのボーナス没収や詐欺行為の告発",
    "非常に低い出金限度額（月額¥16,000）の適用に関する問題",
  ],
  summary: [
    "フトカジは現在、完全に閉鎖されています。",
    "運営当時は、豊富なゲームとユニークなポイントシステムが長所でした。",
    "一方で、不公平な利用規約、プレイヤーからの苦情、非常に低い出金限度額など、多くの重大な問題を抱えていました。",
    "複数の外部レビューサイトから警告が出されており、安全なプレイ環境とは言えない状況でした。",
  ],
  extraLinks: [
    { text: "🔰 オンラインカジノの賭け条件を理解する", href: "https://www.casinotsu.com/guides/wagering-requirements" },
  ],
  faq: [
    {
      question: "フトカジではどの通貨が使用できましたか？ (過去情報)",
      answer: "日本円、アメリカドル、ユーロ、イギリスポンドなどが利用可能でした。",
    },
    {
      question: "フトカジのスーパーポイントとは何でしたか？ (過去情報)",
      answer: "ログイン、入金、ゲームプレイなどで獲得できるポイントシステムで、貯まったポイントはボーナスオファーと交換できました。",
    },
    {
      question: "デイリードロップ＆ウィンやトーナメントは開催されていましたか？ (過去情報)",
      answer: "はい、開催されており、プロモーションページで確認できました。",
    },
  ],
  cta: {
    text: "CasinoTsuが推薦する現在の安全なカジノを探す",
    href: "https://www.japanesecasino.com/reviews",
  },
};