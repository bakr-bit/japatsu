import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const review1win: ReviewPageContent = {
  hero: {
    title: "1win（1ウィンカジノ）レビュー",
    subheading: "最大$75,000の500%ウェルカムボーナス + 70回フリースピン",
    description: "11,000種類以上のゲームと仮想通貨決済が魅力の1winカジノをCasinoTsuが徹底レビュー。ボーナス、決済方法、安全性、プレイヤーの評判まで詳しく解説します。",
    score: 3.9,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 78,
        note: "豊富なゲーム数とプロモーションが魅力だが、まだ知名度は低い。今後の成長に期待。",
      },
      {
        label: "規約",
        percent: 78,
        note: "最大500%のウェルカムボーナスは非常に魅力的。フリーマネーなど独自のイベントも豊富。",
      },
      {
        label: "操作性",
        percent: 80,
        note: "専用アプリが完備され動作は軽快。一部ページの未翻訳やカテゴリ分けが今後の改善点。",
      },
      {
        label: "サポート",
        percent: 77,
        note: "24時間365日対応は心強いが、翻訳ベースの日本語対応で、接続に時間がかかる場合がある。",
      },
    ],
    highlights: [
      "11,000種類以上の圧倒的なゲームラインナップ",
      "最大500%の超高還元ウェルカムボーナス",
      "人気の仮想通貨決済に幅広く対応",
      "原則として本人確認（KYC）不要で出金可能",
    ],
    watchouts: [
      "日本語サポートは翻訳を介した対応",
      "ライブチャットの応答に時間がかかることがある",
      "休眠アカウントの残高が没収されるリスク",
    ],
  },
  payments: {
    featured: [
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "匿名性と迅速な決済で人気",
      },
      {
        name: "Ethereum",
        icon: "/assets/payments/ethereum.svg",
        href: "https://casinotsu.com/payment/ethereum",
        badge: "仮想通貨",
        note: "主要なアルトコインとして広く利用",
      },
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "即時反映",
        note: "クレジット/デビット両対応の定番",
      },
      {
        name: "Mastercard",
        icon: "/assets/payments/mastercard.svg",
        href: "https://casinotsu.com/payment/mastercard",
        badge: "人気",
        note: "世界中で利用される信頼のブランド",
      },
      {
        name: "MuchBetter",
        icon: "/assets/payments/muchbetter.svg",
        href: "https://casinotsu.com/payment/muchbetter",
        badge: "Eウォレット",
        note: "アプリで手軽に管理できる決済手段",
      },
    ],
    deposits: [
      { name: "USDT", icon: "/assets/payments/usdt.svg" },
      { name: "BNB", icon: "/assets/payments/bnb.svg" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
      { name: "Litecoin", icon: "/assets/payments/ltc.svg" },
      { name: "TRON", icon: "/assets/payments/tron.svg" },
      { name: "Dogecoin", icon: "/assets/payments/dogecoin.svg" },
      { name: "TON" },
      { name: "USDC", icon: "/assets/payments/usdc.svg" },
      { name: "Ripple", icon: "/assets/payments/xrp.svg" },
      { name: "VISA", icon: "/assets/payments/visa.svg" },
      { name: "MasterCard", icon: "/assets/payments/mastercard.svg" },
      { name: "PayDo" },
      { name: "Perfect Money" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg", href: "https://casinotsu.com/payment/muchbetter" },
      { name: "Sofort" },
      { name: "AstroPay Card" },
      { name: "Bank transfer", icon: "/assets/payments/bank-transfer.svg" },
    ],
    withdrawals: [
      { name: "USDT", icon: "/assets/payments/usdt.svg" },
      { name: "BNB", icon: "/assets/payments/bnb.svg" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg", href: "https://casinotsu.com/payment/ethereum" },
      { name: "Litecoin", icon: "/assets/payments/ltc.svg" },
      { name: "TRON", icon: "/assets/payments/tron.svg" },
      { name: "Dogecoin", icon: "/assets/payments/dogecoin.svg" },
      { name: "TON" },
      { name: "USDC", icon: "/assets/payments/usdc.svg" },
      { name: "Ripple", icon: "/assets/payments/xrp.svg" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg", href: "https://casinotsu.com/payment/muchbetter" },
      { name: "PayDo" },
      { name: "Perfect Money" },
    ],
    notes: [
      "仮想通貨決済が中心。15種類以上の仮想通貨に対応しています。",
      "最低入金額・出金額は選択した仮想通貨によって異なります。入金前に必ず確認してください。",
      "カジノ側での手数料は無料ですが、仮想通貨のネットワーク手数料が発生する場合があります。",
      "出金処理時間は通常0〜24時間ですが、承認待ち時間として最大5日かかる場合があります。",
    ],
  },
  bonuses: {
    overview:
      "1winカジノは、特にウェルカムボーナスが非常に豪華です。初回から4回目までの入金で最大500%のボーナスが受け取れるほか、フリースピンやキャッシュバックなど、多彩なプロモーションが用意されています。",
    noDeposit:
      "現在、1winカジノでは通常の入金不要ボーナスは提供されていません。ただし、「フリーマネー」セクションでの特別イベントや、アプリのインストールでボーナスコインが付与される場合がありますので、公式サイトのプロモーションページを定期的に確認することをおすすめします。",
    extraSpins: {
      summary:
        "初回入金で20ドル以上を入金すると、70回分のフリースピンがプレゼントされます。ウェルカムボーナスと併用して、序盤から多くのゲームを楽しめます。",
      schedule: [
        "対象：初回20ドル以上の入金者",
        "フリースピン数：70回",
        "有効期限：2日間",
        "賭け条件：勝利金に対して50倍",
        "賭け条件消化期限：2日間",
        "最大出金額：4,500円",
      ],
      warning: "フリースピンの有効期限と賭け条件の消化期限が2日間と非常に短いため、獲得後は速やかに利用する必要があります。",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "200%", cap: "$700相当", code: "不要" },
      { depositNumber: "2回目", percent: "150%", cap: "$700相当", code: "不要" },
      { depositNumber: "3回目", percent: "100%", cap: "$700相当", code: "不要" },
      { depositNumber: "4回目", percent: "50%", cap: "$700相当", code: "不要" },
    ],
    conditions: [
      "ウェルカムボーナスの賭け条件は30倍です。",
      "各ボーナスの有効期限は約7日間です。",
      "ボーナスからの最大出金額は、ボーナス額の2倍までです。",
      "ボーナスを利用した低リスクベット（例：ルーレットの赤黒両賭け）は禁止されています。",
    ],
    prohibitedGames: [
        "ボーナス利用中の低リスクベット（ルーレットの赤黒同時賭けなど）は禁止されており、ボーナスや勝利金が没収される可能性があります。",
        "詳細な禁止ゲームリストは利用規約でご確認ください。",
    ],
  },
  offers: [
    {
      title: "最大30%ウィークリーキャッシュバック",
      description: "毎週、スロットゲームでのベット総額に応じて最大30%がキャッシュバックされます。損失額ではなくベット総額が対象となるのが大きな特徴です。",
      highlight: "負けても勝ってもベット額に応じて還元される",
    },
    {
      title: "「フリーマネー」イベント",
      description: "プロモーションページとは別に設けられたイベントページ。入金でチケットがもらえる豪華景品（高級車や最新iPhoneなど）の抽選会や、ミッションクリアでコインがもらえる「クエスト」が開催されています。",
      highlight: "ゲームプレイ以外でも稼げるチャンスが満載",
    },
    {
      title: "スポーツベット＆ポーカー専用プロモーション",
      description: "複数試合へのベットでボーナス率が上がる「マルチベットボーナス」や、賞金総額$10,000の「ポーカー・トーナメント」、最大50%の「レーキバック」など、カジノゲーム以外のプレイヤー向けオファーも充実しています。",
      highlight: "スポーツファンやポーカープレイヤーにも手厚い",
    },
  ],
  facts: [
    { label: "名称", value: "1win（1ウィンカジノ）" },
    { label: "ローンチ", value: "2018年" },
    { label: "運営会社", value: "ARGYRIA LIMITED / MFI INVESTMENTS LIMITED" },
    { label: "ライセンス", value: "オランダ領キュラソー (8048/JAZ 2018-040)" },
    { label: "VIPプログラム", value: "✅ (招待制)" },
    {
      label: "対応言語",
      value: "日本語、英語、スペイン語、ポルトガル語、ロシア語、ドイツ語、韓国語など27言語以上",
    },
    { label: "対応通貨", value: "入金通貨による（アカウント内ではJPYに換算）" },
    {
      label: "ゲームタイプ",
      value:
        "スロット、ライブカジノ、ゲームショー、オンラインポーカー、オリジナルゲーム（プリンコ、ダイス等）、クラッシュゲーム、スポーツベット",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/evolution">Evolution</Link>, <Link href="https://casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://casinotsu.com/providers/relax-gaming">Relax Gaming</Link>, <Link href="https://casinotsu.com/providers/hacksaw-gaming">Hacksaw Gaming</Link> など119社以上
        </span>
      ),
    },
    { label: "最小入金額", value: "決済方法により異なる (例: 5 USDT)" },
    { label: "最小出金額", value: "決済方法により異なる (例: ¥1,500)" },
    { label: "電話サポート", value: "✅" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@1win.social">support@1win.social</Link> },
    { label: "ライブチャット", value: "24時間365日対応" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "2018年にオープンした1win（1ウィンカジノ）は、11,000種類以上という膨大なゲームセレクションを誇るオンラインカジノです。",
      "定番のスロットやライブカジノはもちろん、対人オンラインポーカーやオリジナルゲーム、さらにはスポーツベットまで、あらゆるギャンブルを一つのプラットフォームで楽しめます。",
      "特に仮想通貨決済に力を入れており、本人確認不要でスピーディーな入出金が可能な点も大きな魅力です。CasinoTsuでは、そんな1winカジノの全貌を徹底的にレビューします。",
    ],
    ctas: [
      { text: "👉 1winカジノで今すぐプレイ！", href: "https://go.japanesecasino.com/go/1win" },
      { text: "👀 仮想通貨での始め方をチェック", href: "https://www.japanesecasino.com/crypto" },
    ],
  },
  games: [
    "1winカジノの最大の強みは、その圧倒的なゲーム数です。119以上のプロバイダーから提供されるゲームは11,000種類を超え、中には14,000種類以上と表示されることもあります。",
    "スロットだけでも7,000〜9,000種類、ライブカジノは800テーブル以上、ゲームショーも約70種類と、あらゆるジャンルを網羅。さらに、1winでしか遊べないオリジナルゲームや、Pragmatic Play、Evolution提供の限定ライブカジノテーブルも用意されています。実践的なスキルが磨ける対人オンラインポーカーもプレイ可能です。",
  ],
  features: [
    "1winカジノは、Android、iOS、Windowsに対応した専用アプリを提供しています。アプリをインストールするとボーナスコインがもらえる特典もあり、ブラウザ版よりもさらに快適なプレイ環境を求める方におすすめです。",
    "もう一つの大きな特徴は、原則として本人確認（KYC）が不要である点です。メールアドレスと電話番号の認証だけで出金まで可能なので、匿名性を重視するプレイヤーにとっては非常に利便性が高いと言えます。",
  ],
  editorial: {
    author: "Nanami",
    profileHref: "/authors/nanami",
    hook: "ゲーム数とボーナスの豪華さは業界トップクラス。ただし、サポート面など、経験者向けの一面も。",
    theGoodStuff: "11,000を超えるゲーム数と最大500%のウェルカムボーナスは、他の追随を許さないほどの魅力です。KYC不要で仮想通貨決済がスムーズな点も、現代のニーズに合っています。",
    theHeadsUp: "一方で、日本語サポートが翻訳ベースであることや、ライブチャットの応答に時間がかかる点は注意が必要です。サイト内に説明不足な部分も見られるため、自身で問題を解決できる経験者向けの側面があります。",
    finalThought: "カジノ自体のポテンシャルは非常に高いです。多少の不便さを受け入れられるのであれば、他では味わえないほどのゲーム体験とボーナスメリットを享受できるでしょう。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "CasinoTsuが1winカジノを調査した結果、これは「圧倒的な物量を誇る、ポテンシャルの塊のようなカジノ」であると評価します。11,000種類以上というゲーム数は、プレイヤーに無限の選択肢を与え、飽きることなく長期間楽しむことを可能にします。",
      "プロモーションも非常に強力です。特に、初回から4回目まで合計で最大500%にもなるウェルカムボーナスは、新規プレイヤーにとって大きなアドバンテージとなるでしょう。さらに、ベット総額が対象のキャッシュバックや、豪華景品が当たる抽選会など、ユニークなオファーが継続的なプレイを促します。",
      "仮想通貨への全面対応と原則KYC不要というポリシーは、スピードと匿名性を重視するプレイヤー層に強くアピールします。必要なのは電話番号とメールアドレスの認証のみで、スムーズな出金体験が期待できます。",
      "しかし、いくつかの注意点も存在します。決済方法に関する説明不足や、一部ページの未翻訳など、サイトの完成度には改善の余地があります。また、カスタマーサポートは24時間対応ですが、日本語は翻訳を介しており、複雑な問題の解決には時間がかかる可能性があります。",
      "これらの点を総合的に判断すると、1winカジノは、オンラインカジノに慣れており、多少のことは自己解決できる経験豊富なプレイヤーに特におすすめできます。その膨大なゲームの海と魅力的なボーナスを最大限に活用できるならば、1winは最高の遊び場となる可能性を秘めています。",
    ],
  },
  security: [
    "オランダ領キュラソー政府発行のライセンス（8048/JAZ 2018-040）を取得して合法的に運営",
    "公式サイトのプライバシーポリシーで個人情報の保護方針を明記",
    "提携するゲームプロバイダーはすべてライセンスを保有し、RNG（乱数発生器）によるゲームの公平性を保証",
    "第三者機関（Casino Guru, AskGamblers）からも高い安全性の評価",
  ],
  responsiblePlay: [
    "自己診断: ギャンブル依存症の傾向をセルフチェックするための質問リストを提供",
    "外部支援機関へのリンク: 専門的なサポートを受けられる機関の連絡先を紹介",
    "各種制限機能: 入金制限、賭け金制限、損失制限、プレイ時間制限を自己設定可能",
    "アカウントの閉鎖: カスタマーサポートに連絡することでアカウントの閉鎖が可能",
  ],
  complaintStats: [
    "Casino Guruによる安全性指数: 8.6/10（高い評価）",
    "AskGamblersにおけるプレイヤー評価: 9.3/10（非常に高い評価）",
  ],
  awards: [
    "特筆すべき受賞歴は記載されていませんが、第三者機関やプレイヤーから高い評価を得ています。",
  ],
  restrictedCountries: [
    "フランス", "スペイン", "イタリア", "イギリス", "アメリカ合衆国", "オーストラリア", "オーストリア", "アルジェリア", "アンゴラ", "アフガニスタン", "アルゼンチン", "アルバニア", "バハマ", "バーレーン", "バルバドス", "ベラルーシ", "ベルギー", "ボツワナ", "ブルガリア", "ブルンジ", "カンボジア", "カメルーン", "カナダ", "中央アフリカ共和国", "チャド", "コロンビア", "コンゴ民主共和国", "キューバ", "キプロス", "デンマーク", "ジブチ", "ドミニカ共和国", "エクアドル", "エジプト", "エリトリア", "エストニア", "エチオピア", "フィンランド", "ガボン", "ガンビア", "ガーナ", "ギリシャ", "グアテマラ", "ギニア", "ガイアナ", "ハイチ", "ホンジュラス", "ハンガリー", "イラン", "イラク", "アイルランド", "ヨルダン", "ケニア", "クウェート", "レバノン", "リベリア", "リビア", "リトアニア", "マカオ", "マダガスカル", "マラウイ", "マレーシア", "マリ", "マルタ", "モーリタニア", "モーリシャス", "モロッコ", "モザンビーク", "ミャンマー", "ナミビア", "ネパール", "オランダ", "ニカラグア", "ニジェール", "ナイジェリア", "北朝鮮", "ノルウェー", "オマーン", "パキスタン", "パナマ", "パプアニューギニア", "パラグアイ", "ペルー", "フィリピン", "ポルトガル", "プエルトリコ", "カタール", "ルーマニア", "ロシア", "ルワンダ", "サウジアラビア", "セネガル", "セルビア", "シェラレオネ", "シンガポール", "ソマリア", "南アフリカ", "南スーダン", "スウェーデン", "スイス", "シリア", "台湾", "タンザニア", "タイ", "トーゴ", "トリニダード・トバゴ", "チュニジア", "トルコ", "ウガンダ", "ウクライナ", "アラブ首長国連邦", "ウルグアイ", "ベネズエラ", "ベトナム", "イエメン", "ザンビア", "ジンバブエ",
  ],
  userConcerns: [
    "未解決の苦情: 一部のプレイヤーから問題が未解決であるとの報告あり",
    "出金の遅延やアカウントブロック: 稀に出金の遅延やアカウントがブロックされる事例が報告されている",
    "本人確認の問題: KYC不要が原則だが、場合によって求められる本人確認プロセスで問題が生じたとの声がある",
    "自己排除ポリシーに関する懸念: 自己排除の仕組みについて懸念を示す意見がある",
  ],
  summary: [
    "11,000種類を超えるゲーム数と最大500%のウェルカムボーナスは業界でもトップクラスの魅力。",
    "仮想通貨に完全対応し、原則KYC不要でスピーディーな入出金が可能。",
    "一方で、日本語サポートが翻訳ベースである点や、サイトの作り込みが甘い部分があるため、オンラインカジノ初心者よりは経験者向けのサイトと言える。",
    "デメリットを理解した上で利用すれば、他では得られないほどのメリットを享受できるポテンシャルの高いカジノ。",
  ],
  extraLinks: [
    { text: "🔰 オンカジの本人確認（KYC）について", href: "https://www.japanesecasino.com/guides/document-verification" },
    { text: "💰 オンカジのボーナス完全ガイド", href: "https://www.japanesecasino.com/bonuses" },
  ],
  faq: [
    {
      question: "1winカジノに入金不要ボーナスはありますか？",
      answer: "通常の入金不要ボーナスはありませんが、特別なイベントやプロモーションで提供されることがあります。公式サイトの「フリーマネー」セクションなどを確認してください。",
    },
    {
      question: "1winカジノでは、法定通貨と仮想通貨のどちらでも入金・出金できますか？",
      answer: "クレジットカードや電子ウォレットでの入金も可能ですが、決済の主体は仮想通貨です。入金された資金はアカウント内で日本円に換算され、出金時に再度仮想通貨などに換算されます。",
    },
    {
      question: "1winカジノは、本人確認（KYC）なしでもプレイできますか？",
      answer: "はい、原則として本人確認なしでゲームプレイから出金まで可能です。ただし、高額出金時など、カジノ側の判断で追加の本人確認が求められる場合があります。",
    },
  ],
  cta: {
    text: "CasinoTsu推薦！早速1winカジノでプレイ！",
    href: "https://go.japanesecasino.com/go/1win",
  },
};