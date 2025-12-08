import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const review10bet: ReviewPageContent = {
  hero: {
    title: "10bet（10ベット）レビュー",
    subheading: "最大$1,000のウェルカムボーナス",
    description: "スポーツベットに強い老舗カジノ10betをCasinoTsuがレビュー。しかし、10betは2025年7月をもって新規登録の受付を終了しました。このページは記録として保持されています。",
    score: 3.9,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 73,
        note: "賭けリンからの移行組には知られているが、サイト移行直後で今後の復活劇に注目が集まっていた。",
      },
      {
        label: "規約",
        percent: 74,
        note: "カジノとスポーツ両方にボーナスがあるのは良いが、一体型で賭け条件40倍はかなり厳しめ。",
      },
      {
        label: "操作性",
        percent: 87,
        note: "AndroidとiOSの両方にアプリが対応し快適にプレイ可能。ただしサイト内に旧名の名残が見られる。",
      },
      {
        label: "サポート",
        percent: 80,
        note: "24時間対応だが自動翻訳のAIボットが中心。複雑な質問には不向きで改善の余地が大きい。",
      },
    ],
    highlights: [
      "スポーツベットのラインナップが豊富",
      "カジノとスポーツの両方に豪華なボーナスを提供",
      "iOSとAndroidの両方で専用アプリが利用可能",
      "信頼性の高いマン島ライセンスを取得",
    ],
    watchouts: [
      "2025年7月に新規登録受付を終了",
      "ライブチャットサポートがAIボット対応",
      "ボーナスの賭け条件が40倍と厳しい",
      "FAQページがない",
    ],
    avatarSrc: "/assets/casino/10bet.png",
    avatarAlt: "10betのロゴ",
  },
  payments: {
    featured: [
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "即時反映",
        note: "信頼性の高い定番クレジットカード",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://casinotsu.com/payment/payz",
        badge: "Eウォレット",
        note: "迅速な入出金で人気の電子ウォレット",
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
        note: "匿名性とスピードが魅力の暗号資産",
      },
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "安心",
        note: "多くのプレイヤーに利用される送金方法",
      },
    ],
    deposits: [
      { name: "VISA", icon: "/assets/payments/visa.svg" },
      { name: "MasterCard", icon: "/assets/payments/mastercard.svg" },
      { name: "JCB" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "SticPay", icon: "/assets/payments/sticpay.svg", href: "https://casinotsu.com/payment/sticpay" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vegawallet" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg", href: "https://casinotsu.com/payment/muchbetter" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/crypto" },
      { name: "Bitcoin Cash" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg" },
      { name: "Litecoin" },
      { name: "Ripple" },
      { name: "Tether" },
      { name: "Dogecoin" },
      { name: "PayPal" },
      { name: "Trustly" },
      { name: "Apple Pay" },
      { name: "Paysafecard" },
      { name: "AstroPay" },
      { name: "VenusPoint" },
      { name: "Interac" },
    ],
    withdrawals: [
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "SticPay", icon: "/assets/payments/sticpay.svg", href: "https://casinotsu.com/payment/sticpay" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vegawallet" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg", href: "https://casinotsu.com/payment/muchbetter" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/crypto" },
      { name: "Ethereum" },
      { name: "Litecoin" },
    ],
    notes: [
      "1ヶ月の最大出金額は25,000ユーロ（または相当額）です。",
      "出金前に、入金額と同額分をベットする必要があります。",
      "電子ウォレットでの出金は通常2〜3時間以内に完了し、業界平均より約6%速いとされています。",
      "入金と出金で異なる決済方法を利用できるのが特徴です。",
    ],
  },
  bonuses: {
    overview:
      "⚠️重要なお知らせ⚠️ 10betは2025年7月をもって新規登録受付を終了しました。以下のボーナス情報は過去の記録として掲載しています。10betでは、カジノとスポーツベットの両方で豊富なボーナスが提供されていました。",
    noDeposit:
      "特定の入金不要ボーナスはありませんでしたが、ロイヤリティクラブの特典などで獲得の機会がありました。",
    extraSpins: {
      summary: "ウェルカムボーナスにはフリースピンは含まれていませんでしたが、VIPプログラムの特典として提供されることがありました。",
      schedule: [],
      warning: "",
    },
    welcomeRows: [
      { depositNumber: "初回 (選択制)", percent: "100%", cap: "$500", code: "CASINO100" },
      { depositNumber: "初回 (選択制)", percent: "50%", cap: "$1,000", code: "CASINO50" },
    ],
    conditions: [
      "ボーナスの賭け条件は（入金額＋ボーナス額）の40倍。",
      "最低入金額は$10。",
      "ボーナスの有効期限は15日間。",
      "ボーナスからの最大勝利金は、受け取ったボーナス額の5倍まで。",
      "バカラやクラッシュゲームなどの低リスクゲームは賭け条件にカウントされない場合があります。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "スポーツ専用ウェルカムボーナス",
      description: "初回入金額に対し、最大$200の100%ボーナスが提供されていました。賭け条件は（入金額＋ボーナス額）の5倍と、カジノボーナスより緩やかでした。",
      highlight: "ボーナスコード『SPORT100』が必要",
    },
    {
      title: "ウィークリー・パワープレイ",
      description: "毎週利用できるリロードボーナスとして、入金額の30%（最大$1,000）が進呈されていました。",
    },
    {
      title: "キャッシュバックボーナス",
      description: "毎週の損失額の10%（最大$1,000）がキャッシュバックされていました。",
    },
  ],
  facts: [
    { label: "名称", value: "10bet (10ベット)" },
    { label: "ローンチ", value: "2024年 (ブランド復活)" },
    { label: "運営会社", value: "Autonomode Limited" },
    { label: "ライセンス", value: "Isle of Man Gambling Supervision Commission" },
    { label: "VIPプログラム", value: "✅" },
    { label: "対応言語", value: "日本語、英語" },
    { label: "対応通貨", value: "USD, JPYなど" },
    {
      label: "ゲームタイプ",
      value: "バカラ, ブラックジャック, クラップス, ゲームショー, ライブカジノ, ポーカー, ルーレット, スロット, スポーツベット, eスポーツ",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="https://casinotsu.com/providers/blueprint-gaming">Blueprint Gaming</Link>, <Link href="https://casinotsu.com/providers/hacksaw-gaming">Hacksaw Gaming</Link>, <Link href="https://casinotsu.com/providers/microgaming">Microgaming</Link>, <Link href="https://casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/red-tiger">Red Tiger</Link>, Slingshot Studios, <Link href="https://casinotsu.com/providers/thunderkick">Thunderkick</Link>
        </span>
      ),
    },
    { label: "最小入金額", value: "$10" },
    { label: "最小出金額", value: "情報なし" },
    { label: "電話サポート", value: "❌ (カナダ向けには有り)" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@10bet.com">support@10bet.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間AI対応)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "⚠️重要なお知らせ⚠️ 10betは2025年7月をもって新規登録受付を終了しました。今後は他のカジノでお楽しみください。",
      "10betは、2003年に設立された20年以上の歴史を持つ老舗ブランドです。日本では一時「賭けリン」として知られていましたが、2024年2月に再び『10bet』として復活を遂げ、特にスポーツベットに力を入れたプラットフォームとして注目されていました。",
      "このレビューは、同カジノが提供していたサービスや特徴を記録としてまとめたものです。",
    ],
    ctas: [
      { text: "🌟 CasinoTsu推薦の優良カジノをチェック", href: "https://casinotsu.com/reviews" },
    ],
  },
  games: [
    "10betでは約1,500種類のスロットが提供されており、メガウェイズやドロップ＆ウィンなどの人気カテゴリは簡単にアクセスできました。大手カジノに比べると数は少なめですが、主要なタイトルは揃っていました。",
    "ライブカジノは5つの主要プロバイダーが参加し、充実したラインナップでした。しかし、10betの最大の強みはスポーツベットにあり、40種類以上のスポーツ、特にオッズが有利なサッカーベットが人気でした。",
  ],
  features: [
    "10betはiPhoneとAndroidの両方に対応した専用アプリを提供しており、ブラウザ版よりもさらに快適なモバイル体験が可能でした。",
    "全てのプレイヤーが自動参加できるロイヤリティクラブ（VIPプログラム）があり、プレイするほどXPが貯まり、豪華な特典と交換できる仕組みでした。",
  ],
  editorial: {
    author: "Kotone",
    profileHref: "/authors/rina-okabe",
    hook: "スポーツベットの強みと厳しいボーナス条件、そしてAIサポートが特徴的なカジノでした。",
    theGoodStuff: "スポーツベットの種類の多さと有利なオッズは、ファンにとって大きな魅力でした。また、マン島やMGAなど信頼性の高いライセンスを複数保有しており、安全性への評価は高かったです。",
    theHeadsUp: "一方で、カジノボーナスの賭け条件が（入金額＋ボーナス額）の40倍と非常に厳しく、達成は困難でした。また、24時間対応のチャットサポートがAIボットのみで、問題解決に時間がかかる点が大きな弱点でした。",
    finalThought: "最終的に新規受付を終了しましたが、強力なスポーツブックと厳しいボーナス規約、そして自動化されたサポートという、長所と短所が明確なカジノでした。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "10betは、20年以上の歴史を持つブランドが「賭けリン」から名を戻し、2024年に日本市場で再始動したことで注目を集めました。その核となる強みは、間違いなくスポーツベットにありました。40種類を超えるスポーツ、業界平均を上回ることもあるオッズ、そしてライブベッティング機能の充実は、スポーツファンにとって非常に魅力的な環境を提供していました。",
      "安全性に関しても、取得が困難とされるマン島ライセンスをはじめ、MGAやUKGCなど複数の権威あるライセンスを保有し、eCOGRAの認証も受けている点から、公正で信頼性の高い運営がなされていたと評価できます。年間収益が2,000万ドル以上という財務的な安定性も、プレイヤーにとって安心材料でした。",
      "しかし、カジノとしての側面にはいくつかの課題がありました。特に、ウェルカムボーナスの賭け条件が（入金額＋ボーナス額）の40倍という設定は、現在の市場基準から見ても非常に厳しく、多くのプレイヤーにとってボーナスの恩恵を享受するのは難しかったでしょう。さらに、カスタマーサポートが24時間対応でありながらAIボットに依存している点は、ユーザー体験を大きく損なう要因でした。簡単な質問ならまだしも、複雑な問題が発生した際の解決には多大な労力を要したことでしょう。",
      "最終的に2025年7月での新規登録受付終了という決断に至りましたが、10betは強力なスポーツブックと厳しい規約、そして自動化されたサポート体制という、光と影を併せ持ったプラットフォームとして記憶されることになります。",
    ],
  },
  security: [
    "信頼性の高いマン島ギャンブリング監督委員会のライセンスを取得",
    "英国ギャンブル委員会（UKGC）、マルタゲーミングオーソリティ（MGA）など複数のライセンスを保有",
    "eCOGRAの認証を受け、ゲームの公平性を保証",
    "独立紛争解決機関IBASに登録",
    "128ビットSSL暗号化技術と二段階認証（2FA）でデータを保護",
  ],
  responsiblePlay: [
    "自己排除: ヘルプチームへの連絡でプレイを一時停止",
    "リアリティチェック: プレイ時間や収支を通知",
    "自己評価テスト: ギャンブル行動を客観的に評価",
    "タイムアウト期間: 24時間から6週間の短期的なプレイ停止",
    "入金制限: 日・週・月単位で入金額を制限",
    "オンライン取引履歴: 過去の入出金履歴をいつでも確認可能",
  ],
  complaintStats: [],
  awards: [
    "2019年 Fresh Awards for design and branding 受賞",
  ],
  restrictedCountries: [],
  userConcerns: [
    "サイトのナビゲーション（メニューが小さい、ヘッダーが大きいなど）",
    "ウェブサイトやスロットゲームの動作が遅いとの報告",
    "AIチャットボットの対応品質が低い",
  ],
  summary: [
    "2025年7月に新規受付を終了。このレビューは過去の記録です。",
    "スポーツベットに非常に強い老舗カジノで、有利なオッズを提供していました。",
    "カジノボーナスの賭け条件は40倍と厳しく、サポートはAIチャットボットが中心でした。",
    "マン島やMGAなど信頼性の高いライセンスを複数取得しており、安全性は高かったと評価できます。",
  ],
  extraLinks: [
    { text: "🔰 オンラインカジノの本人確認（KYC）について", href: "https://casinotsu.com/guides/document-verification" },
  ],
  faq: [
    {
      question: "10betのサポートは24時間対応でしたか？",
      answer: "はい、24時間対応でしたが、ライブチャットはAIボットによる対応が中心でした。",
    },
    {
      question: "10betではスロットやライブカジノも遊べましたか？",
      answer: "はい、スポーツベットが中心でしたが、スロットやライブカジノを含む様々なカジノゲームも楽しむことができました。",
    },
  ],
  cta: {
    text: "CasinoTsuが推薦する他の優良カジノを探す",
    href: "https://casinotsu.com/reviews",
  },
};