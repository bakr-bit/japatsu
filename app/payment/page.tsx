import PaymentTemplate, { type PaymentPageData } from "@/components/templates/PaymentTemplate";

const relatedPayments = [
  { href: "/payment/astropay", name: "AstroPay" },
  { href: "/payment/bank-transfer", name: "Bank Transfer" },
  { href: "/payment/bitcoin", name: "Bitcoin" },
  { href: "/payment/bitflyer", name: "bitFlyer" },
  { href: "/payment/coincheck", name: "Coincheck" },
  { href: "/payment/crypto", name: "Crypto" },
  { href: "/payment/ethereum", name: "Ethereum" },
  { href: "/payment/ezeebill", name: "Ezeebill" },
  { href: "/payment/iwallet", name: "iWallet" },
  { href: "/payment/j-pay", name: "J-Pay" },
  { href: "/payment/japanese-yen-casinos", name: "Japanese Yen Casinos" },
  { href: "/payment/jcb", name: "JCB" },
  { href: "/payment/mastercard", name: "Mastercard" },
  { href: "/payment/matchpay", name: "MatchPay" },
  { href: "/payment/muchbetter", name: "MuchBetter" },
  { href: "/payment/paypal", name: "PayPal" },
  { href: "/payment/paypay", name: "PayPay" },
  { href: "/payment/payz", name: "Payz" },
  { href: "/payment/point66", name: "Point66" },
  { href: "/payment/slash-payment", name: "Slash Payment" },
  { href: "/payment/sticpay", name: "STICPAY" },
  { href: "/payment/sumopay", name: "SumoPay" },
  { href: "/payment/tiger-pay", name: "TigerPay" },
  { href: "/payment/usdt", name: "USDT" },
  { href: "/payment/vega-wallet", name: "Vega Wallet" },
  { href: "/payment/venuspoint", name: "Venus Point" },
  { href: "/payment/visa", name: "VISA" },
];

const data: PaymentPageData = {
  title: "オンラインカジノの入出金ガイド",
  banner: {
    title: "入出金方法を徹底解説",
    subheading: "安全性・手数料・選び方・出金手順",
    description:
      "オンラインカジノの主要な入出金方法（クレジットカード、電子マネー、仮想通貨、銀行送金）を安全性と手数料の観点から比較。よくあるトラブルの対処法や出金の流れもわかりやすく解説します。",
    menu: [
      { href: "#all-payments", label: "一覧", icon: "🗂️" },
      { href: "#fees", label: "人気の方法", icon: "⭐" },
      { href: "#comparison", label: "種類の比較", icon: "📊" },
      { href: "#issues", label: "解決策", icon: "🛠️" },
      { href: "#qa", label: "Q&A", icon: "💬" },
      { href: "#payout", label: "出金手順", icon: "💼" },
      { href: "#faq", label: "FAQ", icon: "❓" },
    ],
  },
  intro:
    "オンラインカジノではクレジットカード、電子マネー、仮想通貨、銀行送金など多彩な決済が利用できます。ライセンスを保有し第三者機関の監査を受ける信頼できるカジノなら、情報セキュリティと安全性も担保されています。",
  feeTable: {
    title: "よく使われている入出金方法（例）",
    columns: ["決済方法", "種類", "平均入金時間", "平均出金時間", "手数料"],
    rows: [
      ["VISA", "クレジットカード", "約5分", "—（銀行出金7営業日程度）", "約2%"],
      ["Mastercard", "クレジットカード", "約5分", "—（銀行出金7営業日程度）", "約1.5%"],
      ["Payz", "イーウォレット", "即時", "即時", "0〜1.5%"],
    ],
    caption: "記載は一般的な目安です。最新の条件は各カジノの入金・出金ページをご確認ください。",
  },
  comparison: {
    title: "入出金方法の種類と特徴",
    items: [
      {
        title: "クレジットカード",
        description: "対応カジノが最も多く、手軽で即時反映。ただし出金不可が基本で手数料がかかる場合あり。",
        meta: [
          { label: "主な銘柄", value: "VISA / Mastercard / JCB" },
          { label: "反映", value: "入金は即時" },
        ],
      },
      {
        title: "電子マネー（Eウォレット）",
        description: "入出金を一元管理でき利便性が高い。日本語サポートがあり対応カジノも多い。",
        meta: [
          { label: "例", value: "Payz / Vega Wallet / iWallet / STICPAY" },
          { label: "反映", value: "多くは即時" },
        ],
      },
      {
        title: "仮想通貨",
        description: "匿名性と処理速度、低コストが魅力。価格変動と対応範囲には注意。",
        meta: [
          { label: "例", value: "Bitcoin / Ethereum / USDT など" },
          { label: "反映", value: "入出金とも速い" },
        ],
      },
      {
        title: "銀行送金",
        description: "主に出金で利用。国内送金対応なら着金が速く手数料も抑えやすい。",
        meta: [
          { label: "用途", value: "出金メイン" },
          { label: "反映", value: "海外送金は数営業日" },
        ],
      },
    ],
  },
  extraTables: [
    {
      id: "compare-criteria",
      title: "入出金方法を選ぶときの比較項目",
      columns: ["項目", "ポイント"],
      rows: [
        ["処理速度", "入金は即時でも出金は差が出やすい"],
        ["安全性・セキュリティ", "ライセンスとKYC・3Dセキュア対応"],
        ["限度額", "最低・最大入金出金額を確認"],
        ["対応範囲", "入金のみ／入出金両対応か"],
        ["手数料（決済会社）", "為替・事務・送金手数料"],
        ["手数料（カジノ）", "入金・出金時の独自手数料の有無"],
        ["ボーナス条件", "特定の決済で対象外になるケースも"],
      ],
    },
    {
      id: "issues",
      title: "よくある問題と解決策",
      columns: ["問題", "解決策"],
      rows: [
        ["認証や登録の場所が分からない", "アカウント／入金ページで各決済の設定・通知を確認"],
        ["決済方法の変更方法が分からない", "入金ページの基本決済設定を編集"],
        ["登録済み決済が削除できない", "アカウント設定から編集／削除"],
        ["ゲーム内入金が反映されない", "少し待ってからサポートへ連絡（多重決済は避ける）"],
        ["出金依頼をしたのに残高がある", "リクエストが通っていない可能性。再申請またはサポートへ"],
        ["入金が反映されない", "24時間超で未反映なら決済会社またはカジノ側に要因あり。サポートへ"],
        ["勝利金を出金できない", "賭け条件や最少・最大金額、入金方法と同一決済などを確認"],
        ["出金のキャンセルができない", "カジノ側で手続き完了後はキャンセル不可"],
      ],
    },
    {
      id: "pros-cons-matrix",
      title: "主な決済のメリット／デメリット",
      columns: ["決済方法", "メリット", "デメリット"],
      rows: [
        [
          "クレジットカード",
          "対応カジノが多い／手軽で即時／3Dセキュアで安全",
          "手数料あり・出金不可・入金拒否の可能性",
        ],
        [
          "電子マネー（Eウォレット）",
          "入出金を一元管理／多くは即時／日本語サポート",
          "新規登録が必要・サービス停止のリスク・メンテ頻度",
        ],
        [
          "仮想通貨",
          "高い匿名性／高速・低コスト／本人確認不要のケースも",
          "価格変動・対応カジノが限定・単位が分かりづらい",
        ],
        [
          "銀行送金",
          "アカウント不要・国内送金は着金が速い",
          "入金非対応が多い・手数料が高くなりやすい",
        ],
      ],
    },
  ],
  payout: {
    title: "出金の基本手順",
    items: [
      "カジノにログインし「出金」ページへ",
      "決済方法を選択し、限度額に従って金額を入力",
      "必要事項を入力し確定。決済画面で追加認証がある場合は対応",
      "手続き完了後は着金まで待機（本人確認が必要な場合あり）",
    ],
    note: "第三者名義のカード・ウォレットは利用不可。KYC（本人確認）を事前に済ませるとスムーズです。",
  },
  safetyTips: [
    "第三者名義のクレジットカードや電子マネーは使用不可（詐欺・マネロン疑い）",
    "3Dセキュアを有効化し、登録電話番号・SMSの受信設定を確認",
    "クレカが通らない場合は電子マネーや仮想通貨を併用",
  ],
  qaConversations: [
    {
      mascot: "https://img.japanesecasino.com/svg/jp/mascots/happy/casiko.svg",
      name: "ビギナー",
      text: "オンラインカジノの入出金、どの方法を選べばいいか分かりません。おすすめの選び方を教えてください！",
    },
    {
      mascot: "https://img.japanesecasino.com/svg/jp/mascots/happy/oka-kyoju.svg",
      name: "エキスパート",
      align: "right",
      isHtml: true,
      bubbleClassName: "bg-blue-50 border border-blue-200",
      text:
        "<p>用途で選ぶのがコツです。まずは下の軸で比較しましょう。</p>\n<ul class=\"list-disc pl-5\">\n<li><b>手軽さ：</b> クレジットカード（即時反映。ただし出金は銀行経由）</li>\n<li><b>管理のしやすさ：</b> 電子マネー（Payz / Vega Wallet など）</li>\n<li><b>速さ・匿名性：</b> 仮想通貨（Bitcoin / Ethereum / USDT 等）</li>\n<li><b>出金の確実性：</b> 銀行送金（国内対応なら着金が速い）</li>\n</ul>\n<p>さらに <b>速度</b>・<b>安全性</b>・<b>対応範囲（入金のみ/入出金）</b>・<b>手数料</b>・<b>限度額</b>・<b>ボーナス対象</b> をチェックすると失敗しません。</p>",
    },
    {
      mascot: "https://img.japanesecasino.com/svg/jp/mascots/happy/casiko.svg",
      name: "ビギナー",
      text: "クレカが通らない/弾かれる時はどうすれば？",
    },
    {
      mascot: "https://img.japanesecasino.com/svg/jp/mascots/happy/oka-kyoju.svg",
      name: "エキスパート",
      align: "right",
      isHtml: true,
      bubbleClassName: "bg-blue-50 border border-blue-200",
      text:
        "3Dセキュアを有効化し、連続リトライは避けましょう。代替として <b>Payz / Vega Wallet</b> 等の電子マネー経由、または <b>仮想通貨</b> 入金が有効です。出金は <b>本人名義</b>のみ・KYC完了が前提です。",
    },
    {
      mascot: "https://img.japanesecasino.com/svg/jp/mascots/happy/casiko.svg",
      name: "ビギナー",
      text: "初心者への最初の組み合わせは？",
    },
    {
      mascot: "https://img.japanesecasino.com/svg/jp/mascots/happy/oka-kyoju.svg",
      name: "エキスパート",
      align: "right",
      isHtml: true,
      bubbleClassName: "bg-blue-50 border border-blue-200",
      text:
        "<b>Payz</b> または <b>Vega Wallet</b> を用意し、必要に応じてクレカ入金＋銀行出金を組み合わせるのが無難。2段階認証とKYCを先に済ませるとスムーズです。",
    },
  ],
  summary:
    "入出金方法は用途・スピード・コスト・対応範囲で選ぶのがコツ。クレカは手軽、電子マネーは管理しやすく、仮想通貨は速くて安い、銀行送金は出金向き。信頼できるカジノを選び、KYCや3Dセキュアを整えて安全・快適にプレイしましょう。",
  faq: [
    {
      q: "オンラインカジノに登録して個人情報は安全？",
      a: "ライセンスを保有し第三者機関の監査を受ける信頼できるカジノなら、個人情報の安全性は確保されています。",
    },
    {
      q: "おすすめの決済方法はどれ？",
      a: "入出金速度や手数料、すでに持っているアカウントなど自分の用途に合うものを。各方法にメリット・デメリットがあるため、本ページの比較表を参考に選びましょう。",
    },
  ],
  cta: { text: "入出金方法の詳細を見る", href: "/payment/visa" },
  relatedPayments,
  allPayments: relatedPayments,
};

export default function Page() {
  return <PaymentTemplate data={data} canonicalPath="/payment" />;
}
