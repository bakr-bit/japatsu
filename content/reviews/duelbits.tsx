import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewDafabet: ReviewPageContent = {
  hero: {
    title: "ダファベット（Dafabet）レビュー",
    subheading: "最大$500ボーナス＋寛容な賭け条件",
    description: "セルティックFCのスポンサーとしても知られる、2004年設立の老舗カジノDafabet。スポーツベットとユニークなゲームが満載ですが、注意点も。CasinoTsuがその評判と実態を徹底解説します。",
    score: 3.8,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 69,
        note: "運営歴は長いが、日本市場での知名度はまだ発展途上。今後の展開に期待。",
      },
      {
        label: "規約",
        percent: 73,
        note: "賭け条件が10倍または20倍と比較的寛容で、プレイヤーにとって魅力的。",
      },
      {
        label: "操作性",
        percent: 87,
        note: "専用アプリや2種類のスポーツブックは良いが、ゲームセクション毎の個別ウォレットは不便に感じる可能性あり。",
      },
      {
        label: "サポート",
        percent: 74,
        note: "無料の国際電話サポートは珍しく高評価。しかし、現代の標準であるライブチャットが無いのは大きな欠点。",
      },
    ],
    highlights: [
      "幅広いゲームの種類とオリジナルスロット",
      "プロモーションが豊富で賭け条件が優しい",
      "国際的なサッカークラブのスポンサーで信頼性あり",
      "無料の国際電話による日本語サポート",
    ],
    watchouts: [
      "ライブチャットサポートが無い",
      "ゲームセクションごとにウォレットが分かれている",
      "出金遅延やアカウント閉鎖など、深刻なユーザーからの苦情が多数報告されている",
      "一部の人気スロットがプレイできない",
    ],
  },
  payments: {
    featured: [
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "定番",
        note: "日本のプレイヤーに広く利用される安心の決済手段",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://casinotsu.com/payment/payz",
        badge: "Eウォレット",
        note: "迅速な処理が可能な人気の電子ウォレット",
      },
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://casinotsu.com/payment/vega-wallet",
        badge: "Eウォレット",
        note: "ポイントでの管理が便利な決済サービス",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "高額決済にも対応する代表的な暗号資産",
      },
    ],
    deposits: [
      { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg", href: "https://casinotsu.com/payment/bank-transfer" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Dogecoin (DOGE)" },
      { name: "Ethereum (ETH)" },
      { name: "Tether (USDT)" },
      { name: "USD Coin (USDC)" },
      { name: "Litecoin (LTC)" },
      { name: "DASH" },
      { name: "EOS" },
      { name: "Gocash" },
      { name: "AstroPay" },
      { name: "Todito cash" },
      { name: "WebMoney" },
      { name: "Paysafe Card" },
      { name: "Unified Payments Interface (UPI)" },
    ],
    withdrawals: [
      { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg", href: "https://casinotsu.com/payment/bank-transfer" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "Vega Wallet", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
      { name: "Bitcoin (BTC)", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Dogecoin (DOGE)" },
      { name: "Ethereum (ETH)" },
      { name: "Tether (USDT)" },
      { name: "USD Coin (USDC)" },
      { name: "Litecoin (LTC)" },
      { name: "DASH" },
      { name: "EOS" },
    ],
    notes: [
      "クレジットカードは利用できません。",
      "ゲームセクション（カジノ、スポーツブックなど）ごとにウォレットが分かれています。ウォレット間の資金移動は可能ですが、最低$15からです。",
      "出金時間は電子ウォレットで0〜24時間、銀行振込で2〜5日、保留期間は最大96時間です。",
    ],
  },
  bonuses: {
    overview:
      "Dafabetは特に賭け条件が寛容なボーナスを提供しているのが特徴です。初回入金ボーナスは入金額に応じて2つのプランから選べます。",
    noDeposit:
      "現在、入金不要ボーナスは提供されていません。",
    extraSpins: {
      summary: "ウェルカムボーナスにフリースピンは含まれていませんが、VIPプログラムや他のプロモーションで提供される場合があります。",
      schedule: [],
      warning: "",
    },
    welcomeRows: [
      { depositNumber: "初回 ($15-$250)", percent: "100%", cap: "$250", code: "DFGMFDB250JP" },
      { depositNumber: "初回 ($251-$500)", percent: "100%", cap: "$500", code: "DFGMFDB500JP" },
    ],
    conditions: [
      "初回入金額に応じて賭け条件が異なります（$250まで: 10倍、$500まで: 20倍）。",
      "ボーナスの受け取りには、入金時に対応するボーナスコードの入力が必須です。",
      "最低入金額は$15です。",
      "一部のゲームは賭け条件の消化から除外されるか、消化率が低く設定されています。",
    ],
    prohibitedGames: [],
  },
  offers: [
    {
      title: "最大$25の100%リファンドボーナス",
      description: "新規プレイヤー向けに、ベット初日の損失額を最大$25まで100%還元するボーナスです。受け取ったボーナスには10倍の賭け条件が適用されます。最初のベット前に申請が必要です。",
      highlight: "初回入金ボーナスとの併用は不可",
    },
    {
      title: "ビットコインボーナス",
      description: "ビットコインでの入金者向けに、最大10 mBTCの50%ボーナスが提供されています。",
    },
    {
      title: "カジノリロードボーナス",
      description: "1日に3回まで請求可能な5%リロードボーナス（最大$45）。賭け条件は5倍です。",
    },
    {
      title: "多彩なスポーツボーナス",
      description: "通常ボーナスに加え、インド市場向けの200%ボーナスや、代替スポーツボーナスなど、地域やプレイスタイルに応じた複数のスポーツベット用ボーナスが用意されています。",
    },
  ],
  facts: [
    { label: "名称", value: "Dafabet (ダファベット)" },
    { label: "ローンチ", value: "2004" },
    { label: "運営会社", value: "Osmila N.V." },
    { label: "ライセンス", value: "Antillephone (Curaçao), Cagayan Economic Zone Authority (CEZA), UK Gaming Commission" },
    { label: "VIPプログラム", value: "✅" },
    { label: "対応言語", value: "日本語, 英語など" },
    {
      label: "ゲームタイプ",
      value: "バカラ, ブラックジャック, クラップス, ゲームショー, ライブカジノ, ポーカー, ルーレット, スロット, ビンゴ, キノ, スクラッチカード, 宝くじ, バーチャルスポーツ, クラッシュゲーム, eスポーツ, フィナンシャルベット, アーケードゲーム",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/betsoft">BetSoft</Link>, <Link href="https://casinotsu.com/providers/blueprint-gaming">Blueprint Gaming</Link>, <Link href="https://casinotsu.com/providers/booming-games">Booming Games</Link>, <Link href="https://casinotsu.com/providers/habanero">Habanero</Link>, <Link href="https://casinotsu.com/providers/hacksaw-gaming">Hacksaw Gaming</Link>, <Link href="https://casinotsu.com/providers/microgaming">Microgaming</Link>, <Link href="https://casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://casinotsu.com/providers/nolimit-city">Nolimit City</Link>, <Link href="https://casinotsu.com/providers/pg-soft">PG SOFT</Link>, <Link href="https://casinotsu.com/providers/playtech">Playtech</Link>, <Link href="https://casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/red-tiger">Red Tiger</Link>, <Link href="https://casinotsu.com/providers/relax-gaming">Relax</Link>, Slingshot Studios, <Link href="https://casinotsu.com/providers/yggdrasil">Yggdrasil</Link>, Evolution Gaming, Ezugi, GamePlay
        </span>
      ),
    },
    { label: "最小入金額", value: "$10 (銀行振込)" },
    { label: "最小出金額", value: "情報なし" },
    { label: "電話サポート", value: "✅" },
    { label: "電話番号", value: "800-7423-2274" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:jpsupport@dafabet.com">jpsupport@dafabet.com</Link> },
    { label: "ライブチャット", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "Dafabet（ダファベット）は、2004年に設立された長い歴史を持つオンラインカジノで、特にアジア市場とスポーツベットに強みを持っています。日本人選手が所属するサッカーチーム「セルティックFC」のスポンサーとしても知られ、その信頼性は高い評価を得ています。",
      "フィリピンでスポーツブックとして始まった背景から、ライブカジノにはフィリピンのスタジオが多く参加しており、他のカジノとは一味違った体験ができます。また、オリジナルのスロットゲームも提供しています。",
      "CasinoTsuでは、この老舗カジノの魅力的なボーナス、豊富なゲーム、そしてライブチャットがないなどの注意点まで、あらゆる側面から徹底的にレビューします。",
    ],
    ctas: [
      { text: "👉 ダファベットで今すぐプレイ！", href: "https://go.japanesecasino.com/go/dafabet" },
      { text: "🔰 カジノ用語集をチェック", href: "https://casinotsu.com/guides/glossary" },
    ],
  },
  games: [
    "Dafabetは3,000種類以上のスロットを提供しており、中にはDafabet限定のオリジナルゲームも含まれます。ただし、『ムーンプリンセス』のような一部の超人気機種がプレイできない点は注意が必要です。",
    "ライブカジノは特筆すべき充実度で、Evolutionなどの大手だけでなく、フィリピンのライブスタジオも含む10社以上のプロバイダーが参加し、合計23のロビーに300以上のテーブルが用意されています。",
    "さらに、ポーカー、ビンゴ、宝くじ、フィナンシャルベットまで、非常に幅広いジャンルのゲームを提供しています。",
  ],
  features: [
    "Dafabetの最大の特徴は、「OWスポーツ」と「Dafaスポーツ」という2つの独立したスポーツブックを提供している点です。それぞれでラインナップやオッズが異なるため、プレイヤーはより有利な条件を選んでベットできます。",
    "Androidユーザー向けには、スポーツ用とカジノ用に分かれた専用アプリが提供されており、快適なモバイルプレイが可能です。また、モバイル専用のロビー「iPlay」も用意されています。",
  ],
  editorial: {
    author: "Kotone",
    profileHref: "/authors/kotone",
    hook: "長い歴史と信頼性、寛容なボーナス条件が魅力。しかし、ライブチャットの不在と多数のユーザーからの苦情は無視できない。",
    theGoodStuff: "2004年からの運営実績と複数の有力ライセンスは、安全性を重視するプレイヤーにとって大きな安心材料です。賭け条件が10倍からと非常に緩やかで、初心者でもボーナスを活用しやすい点は高く評価できます。",
    theHeadsUp: "最大の問題は、現代のオンラインカジノの標準装備であるライブチャットサポートが完全に欠如していることです。さらに、Trustpilotなどには出金の大幅な遅延や理由なきアカウント閉鎖といった深刻な苦情が多数寄せられており、これは非常に大きなリスク要因です。",
    finalThought: "Dafabetは、専門家レビューと実際のユーザー体験の間に大きな隔たりがあるカジノです。寛容なボーナスや豊富なゲームは魅力的ですが、サポート体制の不備と深刻なユーザーからの苦情を十分に理解した上で、自己責任で利用を判断する必要があります。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "Dafabetは、2004年の設立以来、特にアジアのスポーツベット市場で確固たる地位を築いてきたベテランのオンラインカジノです。セルティックFCのような著名なサッカークラブのスポンサーを務めることで、そのブランド力と信頼性を世界に示しています。複数の権威あるライセンスを保持し、強力な暗号化技術を導入している点からも、運営の安全性と公平性に対する姿勢は評価できます。",
      "このカジノの魅力の一つは、非常にプレイヤーフレンドリーなボーナス規約にあります。初回入金ボーナスの賭け条件が最大でも20倍、最低では10倍というのは、業界標準と比較しても際立って寛容です。これにより、プレイヤーはボーナスを現実的な勝利金に変えるチャンスを十分に得られます。",
      "ゲームの多様性もDafabetの強みです。3,000を超えるスロット、そして特筆すべきは10社以上のプロバイダーがひしめくライブカジノのセクションです。フィリピンのスタジオが提供するユニークなテーブルは、他では味わえない独特の雰囲気を提供します。さらに、2つの異なるスポーツブックや、ポーカー、宝くじまで網羅するそのラインナップは圧巻です。",
      "しかし、Dafabetにはいくつかの大きな欠点が存在します。最も不可解なのは、即時性が求められる現代において、ライブチャットサポートを一切提供していない点です。無料の国際電話があるとはいえ、これは大きな利便性の損失です。また、ゲームセクションごとに資金を管理する個別ウォレットシステムは、プレイヤーによっては煩雑に感じられるでしょう。",
      "そして、最も深刻な懸念点は、ユーザーレビューサイトに見られる数々の否定的な報告です。専門家からの評価が高い一方で、Trustpilotなどでは「詐欺」という言葉まで使われるほどの深刻な苦情が後を絶ちません。数ヶ月に及ぶ出金遅延、理由なきアカウント凍結、機能しないサポートといった報告は、Dafabetの信頼性に大きな影を落としています。",
      "結論として、Dafabetは確かな運営基盤と魅力的なコンテンツを持つ一方で、時代遅れのサポート体制と、無視できない深刻なユーザーからの苦情という二面性を持っています。利用を検討する際は、これらのリスクを十分に天秤にかけ、慎重に判断することが不可欠です。",
    ],
  },
  security: [
    "キュラソー、フィリピン(CEZA)、英国(UKGC)の複数のライセンスを取得",
    "448ビットBlowfishキーブロック暗号化と1024ビットRSAキー交換暗号化による強固なデータ保護",
    "業界標準のファイアウォールを導入",
    "ライセンス当局による定期的な監査を実施 (公表ペイアウト率97.76%)",
  ],
  responsiblePlay: [
    "サイトフッターの「責任あるゲーミング」セクションで情報を提供",
    "ギャンブル依存症に関する情報や自己診断ツールへのアクセス",
  ],
  complaintStats: [],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "出金遅延（数週間から数ヶ月に及ぶとの報告あり）",
    "入金がアカウントに反映されない問題",
    "理由なくアカウントが閉鎖・凍結される事例",
    "サポートからの返信が機械的で問題解決に至らないとの苦情",
    "ユーザーレビューサイト（例: Trustpilot）での評価が非常に低い",
  ],
  summary: [
    "2004年設立の老舗で、特にスポーツベットに強みを持つ信頼性の高いブランド。",
    "ボーナスの賭け条件が10倍からと非常に緩やかで、プレイヤーに有利。",
    "ライブチャットサポートがなく、電話かメールでの問い合わせのみ。",
    "ユーザーレビューサイトでは出金遅延などの深刻な苦情が多数報告されており、利用には注意が必要。",
  ],
  extraLinks: [
    { text: "🔰 オンラインカジノの本人確認（KYC）について", href: "https://casinotsu.com/guides/document-verification" },
  ],
  faq: [
    {
      question: "ダファベットに入金不要ボーナスはありますか？",
      answer: "いいえ、現在のところ、Dafabetでは入金不要ボーナスは提供されていません。",
    },
    {
      question: "ダファベットのチャットサポートはどこから問い合わせできますか？",
      answer: "残念ながら、Dafabetではライブチャットサポートは提供されていません。問い合わせはメール、無料の国際電話、またはWhatsApp/Lineを利用する必要があります。",
    },
  ],
  cta: {
    text: "ダファベットのボーナスとゲームをチェックする",
    href: "https://go.japanesecasino.com/go/dafabet:dafabet?referrer_path=%2Freviews%2Fdafabet",
  },
};