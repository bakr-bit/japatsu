import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewEnergyCasino: ReviewPageContent = {
  hero: {
    title: "エナジーカジノ（Energy Casino）レビュー",
    subheading: "最大$200ボーナス + CasinoTsu限定30回フリースピン",
    description: "海外で高い評価を得ていたエナジーカジノが日本市場に上陸。洗練されたデザイン、豊富なゲーム、魅力的なキャンペーンをCasinoTsuが安全性から評判まで徹底解説します。",
    score: 4.2,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 82,
        note: "海外での実績は十分。日本市場ではまだ発展途上だが、バランスの良さから人気上昇の可能性大。",
      },
      {
        label: "規約",
        percent: 85,
        note: "賭け条件25倍(入金額＋ボーナス額)は標準的。限定FSや賭け条件なしのキャッシュバックなど魅力的なオファー多数。",
      },
      {
        label: "操作性",
        percent: 91,
        note: "洗練されたウェブサイトデザインと直感的な操作性は高く評価できる。ゲーム検索もスムーズ。",
      },
      {
        label: "サポート",
        percent: 70,
        note: "日本語サポートはメールのみの対応。迅速な解決を求める場合は英語でのライブチャットが必要。",
      },
    ],
    highlights: [
      "信頼性の高いMGAおよびUKGCライセンスを保有",
      "CasinoTsu限定！入金不要フリースピン30回分",
      "3,950種類以上の豊富なゲームラインナップ",
      "賭け条件なしのライブカジノ専用キャッシュバック",
    ],
    watchouts: [
      "日本語のライブチャットサポートがない",
      "週に2回目以降の出金には手数料が発生する場合がある",
      "一部のプレイヤーから出金遅延やアカウント関連の問題が報告されている",
      "人気のGolden Hero社など一部プロバイダーのゲームがない",
    ],
  },
  payments: {
    featured: [
      {
        name: "クレジットカード",
        icon: "/assets/payments/credit-card.svg",
        badge: "即時反映",
        note: "VISA・Mastercardなど主要ブランドに対応",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://casinotsu.com/payment/payz",
        badge: "Eウォレット",
        note: "スピーディーな入出金で人気の電子決済",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://casinotsu.com/payment/vega-wallet",
        badge: "ポイント制",
        note: "ポイントでの資金管理が便利なサービス",
      },
      {
        name: "SticPay",
        icon: "/assets/payments/sticpay.svg",
        href: "https://casinotsu.com/payment/sticpay",
        badge: "Eウォレット",
        note: "多くのオンラインカジノで採用されている",
      },
      {
        name: "銀行送金",
        icon: "/assets/payments/bank-transfer.svg",
        badge: "安心",
        note: "時間はかかるが確実な決済手段",
      },
    ],
    deposits: [
      { name: "ベガウォレット", icon: "/assets/payments/vega-wallet.svg" },
      { name: "スティックペイ", icon: "/assets/payments/sticpay.svg" },
      { name: "マッチベター", icon: "/assets/payments/muchbetter.svg" },
      { name: "ペイズ", icon: "/assets/payments/payz.svg" },
      { name: "銀行送金", icon: "/assets/payments/bank-transfer.svg" },
      { name: "クレジットカード (VISA, Master)" },
      { name: "Jeton" },
      { name: "PayPal" },
      { name: "ApplePay" },
      { name: "Google Pay" },
      { name: "Interac" },
      { name: "WebMoney" },
      { name: "QIWI" },
      { name: "Yandex Money" },
    ],
    withdrawals: [
      { name: "ベガウォレット", icon: "/assets/payments/vega-wallet.svg" },
      { name: "スティックペイ", icon: "/assets/payments/sticpay.svg" },
      { name: "マッチベター", icon: "/assets/payments/muchbetter.svg" },
      { name: "ペイズ", icon: "/assets/payments/payz.svg" },
      { name: "銀行送金", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Jeton" },
      { name: "PayPal" },
      { name: "ApplePay" },
      { name: "Google Pay" },
      { name: "Interac" },
      { name: "WebMoney" },
      { name: "QIWI" },
      { name: "Yandex Money" },
    ],
    notes: [
      "1日の出金限度額は€5,000です。",
      "週に1回の出金は無料ですが、2回目以降は$7の手数料が課される場合があります。",
      "出金前に、入金額を最低1回はベットする必要があります。満たさない場合、3%の管理手数料が適用されることがあります。",
      "仮想通貨には対応していません。",
    ],
  },
  bonuses: {
    overview:
      "エナジーカジノは、CasinoTsu限定の入金不要ボーナスから始まり、スロット用・ライブカジノ用の2種類のウェルカムオファー、さらには毎週利用できるリロードボーナスまで、多彩なプロモーションでプレイヤーを迎えます。",
    noDeposit:
      "CasinoTsuからの新規登録者限定で、Pragmatic Play社の人気スロット『スイートボナンザ 1000』で使える30回のフリースピンが入金不要で提供されます。勝利金の賭け条件は30倍です。",
    extraSpins: {
      summary:
        "初回入金時には、入金額に応じて最大400回のフリースピンが追加で付与されます。対象ゲームはBF Games社の『777 Golden Hit』です。",
      schedule: [
        "入金額$10～$19: 50回",
        "入金額$20～$99: 100回",
        "入金額$100～$199: 250回",
        "入金額$200以上: 400回",
      ],
      warning: "フリースピンで得た勝利金には15倍の賭け条件が適用され、有効期限は7日間です。最大賞金上限は$400です。",
    },
    welcomeRows: [
      { depositNumber: "初回 (スロット用)", percent: "100%", cap: "$200", code: "不要" },
    ],
    conditions: [
      "スロット用ウェルカムボーナスの賭け条件は（入金額＋ボーナス額）の25倍。",
      "ボーナスからの勝利金には2倍のマルチプライヤーが適用されます。",
      "賭け条件の達成期限は7日間です。",
      "NETELLERまたはSkrillでの入金はボーナス対象外となる場合があります。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "ライブカジノ・ウェルカムキャッシュバック",
      description: "ライブカジノを初めてプレイする日に50ラウンド以上プレイすると、初日の純損失額の25%（最大$250）がキャッシュバックされます。最低ベット額は$5です。",
      highlight: "受け取ったキャッシュバックに賭け条件なし！",
    },
    {
      title: "ウィークリー・リロードボーナス",
      description: "毎週2回、入金額の50%（最大$50）のリロードボーナスとフリースピン20回分が獲得可能です。ボーナスの賭け条件は（入金額＋ボーナス額）の15倍です。",
      highlight: "毎週2回利用できるお得な定常プロモーション",
    },
    {
      title: "エナジーポイント",
      description: "リアルマネーでのプレイで貯まるポイント。100ポイント=€1相当の現金と交換でき、交換した現金に賭け条件はありません。",
      highlight: "プレイすればするほど貯まるキャッシュバックシステム",
    },
  ],
  facts: [
    { label: "名称", value: "Energy Casino (エナジーカジノ)" },
    { label: "ローンチ", value: "2013年 (日本市場参入は2021年)" },
    { label: "運営会社", value: "Probe Investments LTD." },
    { label: "ライセンス", value: "Malta Gaming Authority (MGA), UK Gambling Commission (UKGC)" },
    { label: "VIPプログラム", value: "✅ (非公開・招待制のロイヤリティプログラム)" },
    { label: "対応言語", value: "日本語、英語、その他多数" },
    { label: "対応通貨", value: "EUR, USD, JPYなど" },
    {
      label: "ゲームタイプ",
      value:
        "スロット、プログレッシブジャックポット、ライブカジノ、テーブルゲーム、ゲームショー、スポーツブック",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          Play’n GO, Microgaming, Red Tiger, Big Time Gaming, Pragmatic Play, NetEnt, Thunderkick, Evolution, Novomatic (Greentube), Oryx Gaming, Merkur Gaming, Wazdan, Gamomat, Bally Wulff, Games Global, LiveG24, Quik, Betgames.tv
        </span>
      ),
    },
    { label: "最小入金額", value: "¥1,500" },
    { label: "最小出金額", value: "€20" },
    { label: "電話サポート", value: "✅ (国際電話)" },
    { label: "メールサポート", value: "✅ (日本語対応)" },
    { label: "Eメール", value: <Link href="mailto:support@energycasino.com">support@energycasino.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (英語のみ)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "エナジーカジノは、2013年から海外で運営実績を積んできた信頼性の高いオンラインカジノで、2021年に待望の日本市場へ参入しました。",
      "その特徴は、取得が非常に困難とされるMGAとUKGCのダブルライセンスに裏打ちされた高い安全性、3,950種類を超える豊富なゲーム、そしてプレイヤーを飽きさせない多彩なプロモーションです。",
      "CasinoTsuでは、この総合力に優れたエナジーカジノの全貌を、ボーナス情報から実際のプレイヤーの評判まで、徹底的に掘り下げていきます。",
    ],
    ctas: [
      { text: "👉 エナジーカジノで限定ボーナスをゲット！", href: "https://go.japanesecasino.com/go/energy-casino" },
    ],
  },
  games: [
    "エナジーカジノは、3,950種類以上という圧倒的な数のスロットゲームを誇ります。これには『Mega Moolah』や『Hall of Gods』といった、一攫千金が狙えるプログレッシブジャックポットも含まれています。",
    "ライブカジノもEvolution社を筆頭に、Pragmatic Play Live、Quikなど複数のプロバイダーと提携しており、テーブル数も豊富です。さらにスポーツブックも提供しており、カジノゲームとスポーツベットの両方を楽しみたいプレイヤーに最適な環境です。",
  ],
  features: [
    "特筆すべきは「エナジーポイント」という独自のロイヤリティシステムです。リアルマネーでプレイするだけでポイントが貯まり、いつでも賭け条件なしの現金に交換できます。ハイローラーにとっては特に有利なシステムです。",
    "VIPプログラムは非公開ですが、長期的にプレイする優良顧客には、個別のプレイスタイルに合わせた特別なロイヤリティ特典が用意されています。",
  ],
  editorial: {
    author: "CasinoTsu編集部",
    profileHref: "/authors",
    hook: "安全性とゲームの豊富さは業界トップクラス。日本語サポートの拡充が待たれる優良カジノです。",
    theGoodStuff: "MGAとUKGCという最高峰のライセンスを保有している点は、何よりも大きな安心材料です。3,950以上のゲーム数と、賭け条件なしのキャッシュバックなど、プレイヤーにとって魅力的な要素が満載です。",
    theHeadsUp: "最大の懸念点は、日本語サポートがメールのみであることです。緊急の問題が発生した場合に迅速な解決が難しい可能性があります。また、一部のプレイヤーからは出金遅延などのネガティブな評判も報告されているため、その点は留意すべきです。",
    finalThought: "サポート面に課題は残るものの、カジノとしての基盤は非常に強固です。安全性を最優先し、多彩なゲームとボーナスを楽しみたいプレイヤーにとっては、非常に魅力的な選択肢となるでしょう。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "エナジーカジノは、2013年の設立以来、ヨーロッパ市場で確固たる地位を築き、その豊富な経験と実績を携えて2021年に日本市場へ進出しました。当レビューで最も強調したいのは、その圧倒的な信頼性です。オンラインカジノ業界で最も取得が厳しいとされるマルタ・ゲーミング・オーソリティ（MGA）とUKギャンブル委員会（UKGC）のダブルライセンスを保有している事実は、運営の公正性、透明性、そしてプレイヤーの資金保護に対する厳格な姿勢を物語っています。Casino.Guruによる安全性指数も9.0/10と非常に高く、安心してプレイできる基盤が整っています。",
      "ゲームのラインナップは3,950種類以上と非常に豊富で、Play’n GOやMicrogamingといった人気プロバイダーの最新スロットから、高額賞金が期待できるプログレッシブジャックポット、さらにはEvolution社を中心とした高品質なライブカジノまで、あらゆるプレイヤーのニーズに応えます。プロモーションも多彩で、CasinoTsu限定の入金不要フリースピンに始まり、スロット用の100%ボーナス、賭け条件のないライブカジノ用キャッシュバック、そして毎週2回も利用できるリロードボーナスと、プレイヤーを飽きさせない工夫が随所に見られます。",
      "決済方法は、各種Eウォレットやクレジットカード、銀行送金など幅広く対応しており利便性は高いです。ただし、週に2回目以降の出金には手数料が発生する可能性がある点や、仮想通貨に未対応である点は留意が必要です。また、最大の課題はカスタマーサポート体制にあります。日本語対応がメールのみで、ライブチャットは英語限定というのは、日本のプレイヤーにとって大きなハードルとなり得ます。Trustpilotなどで散見される出金遅延やアカウント凍結といったネガティブな評判も、このサポート体制の不備に起因する部分があるかもしれません。",
      "総括すると、エナジーカジノは、盤石の安全性と豊富なゲーム・プロモーションという強力な長所を持つ一方で、日本語サポートの欠如という明確な短所を抱えています。この点を許容でき、英語でのコミュニケーションに抵抗がないプレイヤーであれば、業界トップクラスの安全な環境で、非常に満足度の高いカジノ体験ができるでしょう。",
    ],
  },
  security: [
    "マルタ・ゲーミング・オーソリティ（MGA）およびUKギャンブル委員会（UKGC）のライセンスを保有",
    "運営会社Probe Investments LTD.は2011年設立の信頼ある企業",
    "プライバシーポリシーに基づき個人情報を厳重に保護",
    "RNG（乱数発生器）によりゲームの公平性を保証",
  ],
  responsiblePlay: [
    "アカウントの閉鎖や自己隔離プログラムなど、自己制限措置を提供",
    "詳細はウェブサイト下部の「責任あるギャンブル」ページで確認可能",
    "プログラムの申し込みはカスタマーサポートへのメール連絡が必要",
  ],
  complaintStats: [
    "Trustpilotでの評価: 2.4/5 (Poor) - 主に出金遅延、アカウント凍結、書類審査に関する苦情",
    "AskGamblersでの評価: 8.5/10 (Great) - プレイヤー評価は7.5/10と良好",
    "Casino.Guruの安全性指数: 9.0/10 (Very high)",
  ],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "出金遅延の報告",
    "アカウントが凍結されたとの報告",
    "書類審査の不備に関する苦情",
    "日本語カスタマーサポートの対応がメールのみ",
  ],
  summary: [
    "MGAとUKGCのダブルライセンスによる高い安全性が最大の魅力。",
    "3,950種類以上のゲームと、賭け条件なしのキャッシュバックを含む多彩なボーナスが揃っている。",
    "日本語のライブチャットサポートがなく、メール対応のみという点が大きな課題。",
    "海外での評価は高いが、一部で出金遅延などのネガティブな評判もあるため、リスクを理解した上で利用する価値のあるカジノ。",
  ],
  extraLinks: [
    { text: "⚖️ MGAやUKGCライセンスについて詳しく", href: "https://www.japanesecasino.com/info/casino-license" },
  ],
  faq: [
    {
      question: "エナジーカジノはどのライセンスを取得していますか？",
      answer: "MGA (Malta Gaming Authority) および UKギャンブル委員会 (UKGC) という、業界で最も信頼性の高いライセンスを2つ取得しています。",
    },
    {
      question: "エナジーカジノで仮想通貨は利用できますか？",
      answer: "いいえ、現時点では仮想通貨での入出金には対応していません。クレジットカードや各種Eウォレット（ベガウォレット、ペイズなど）が利用可能です。",
    },
  ],
  cta: {
    text: "CasinoTsu推薦！エナジーカジノでプレイする！",
    href: "https://go.japanesecasino.com/go/energy-casino",
  },
};