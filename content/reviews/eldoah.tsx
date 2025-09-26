import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewEldoah: ReviewPageContent = {
  hero: {
    title: "エルドアカジノ（ELDOAH）レビュー",
    subheading: "【CasinoTsu限定】¥3,000入金不要ボーナス (賭け条件1倍)",
    description: "ハイローラーに絶大な支持を受けるエルドアカジノ。出金上限なし、業界最速級の出金スピード、豊富なライブカジノが魅力。ただし、第三者機関から深刻な安全性の警告も出ており、利用には注意が必要です。",
    score: 4.4,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 84,
        note: "出金上限なし・即時出金でハイローラーから絶大な支持。有名インフルエンサーの起用で注目度も高い。",
      },
      {
        label: "規約",
        percent: 90,
        note: "入金不要ボーナスやキャッシュバックの賭け条件が全て1倍。非常にシンプルでプレイヤーに有利な条件。",
      },
      {
        label: "操作性",
        percent: 83,
        note: "シンプルなプラットフォームで使いやすいが、詳細なゲーム検索機能がない点やプロバイダー毎のウォレットが難点。",
      },
      {
        label: "サポート",
        percent: 97,
        note: "24時間365日、日本語でのライブチャット・メールサポートに対応。迅速かつ丁寧な対応で評価が非常に高い。",
      },
    ],
    highlights: [
      "勝利金の出金上限額なし",
      "平均15分以内の業界最速級の出金スピード",
      "16社のプロバイダーから選べる豊富なライブカジノ",
      "賭け条件1倍の魅力的なボーナス多数",
      "24時間365日対応の高品質な日本語サポート",
    ],
    watchouts: [
      "Casino Guruによる安全指数が1.9/10と『非常に低い』評価",
      "プロバイダー毎にウォレットが分かれており資金管理が煩雑",
      "クレジットカード入金や銀行送金出金に5%の手数料が発生",
      "12ヶ月間利用がないと休眠口座として残高が没収される可能性",
    ],
  },
  payments: {
    featured: [
      {
        name: "銀行振込",
        icon: "/assets/payments/bank-transfer.svg",
        href: "https://casinotsu.com/payment/bank-transfer",
        badge: "上限あり",
        note: "安心の国内送金だが5%の手数料あり",
      },
      {
        name: "VISA",
        icon: "/assets/payments/visa.svg",
        href: "https://casinotsu.com/payment/visa",
        badge: "入金のみ",
        note: "主要なクレジットカードでの入金に対応",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://casinotsu.com/payment/payz",
        badge: "出金上限なし",
        note: "迅速な入出金で人気のEウォレット",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "匿名性が高くスピーディーな決済手段",
      },
      {
        name: "SticPay",
        icon: "/assets/payments/sticpay.svg",
        href: "https://casinotsu.com/payment/sticpay",
        badge: "Eウォレット",
        note: "多くのカジノで採用されている電子財布",
      },
    ],
    deposits: [
      { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg" },
      { name: "VISA", icon: "/assets/payments/visa.svg" },
      { name: "Mastercard", icon: "/assets/payments/mastercard.svg" },
      { name: "JCB", icon: "/assets/payments/jcb.svg" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "SticPay", icon: "/assets/payments/sticpay.svg", href: "https://casinotsu.com/payment/sticpay" },
      { name: "Jeton", icon: "/assets/payments/jeton.svg" },
      { name: "Jeton Bank" },
      { name: "Mikado Card" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Ripple" },
      { name: "Tether" },
      { name: "Binance USD (BUSD)" },
      { name: "Dogecoin" },
      { name: "Litecoin" },
    ],
    withdrawals: [
      { name: "銀行振込", icon: "/assets/payments/bank-transfer.svg" },
      { name: "Payz", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "SticPay", icon: "/assets/payments/sticpay.svg", href: "https://casinotsu.com/payment/sticpay" },
      { name: "Jeton", icon: "/assets/payments/jeton.svg" },
      { name: "Jeton Bank" },
      { name: "Mikado Card" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg", href: "https://casinotsu.com/payment/bitcoin" },
      { name: "Ripple" },
      { name: "Tether" },
      { name: "Binance USD (BUSD)" },
      { name: "Dogecoin" },
      { name: "Litecoin" },
    ],
    notes: [
      "銀行振込を除くすべての出金方法で、出金上限額は無制限です。",
      "平均出金時間は即時〜15分と業界トップクラスの速さを誇ります。",
      "クレジットカード（VISA, Master, JCB）での入金には5%、銀行振込での出金には5%の手数料が発生します。",
      "プロバイダー毎にウォレットが分かれているため、入金時にプレイしたいプロバイダーを選択する必要があります。",
    ],
  },
  bonuses: {
    overview:
      "エルドアカジノのボーナスは、賭け条件が1倍という破格の条件が最大の特徴です。複雑な条件を嫌うプレイヤーに最適で、CasinoTsu限定の入金不要ボーナスや初回入金キャッシュバックなど、魅力的なオファーが揃っています。",
    noDeposit:
      "【期間限定：2025年9月30日まで】CasinoTsu経由で登録し、ボーナスコード「japacasi3000」を入力すると、賭け条件1倍の¥3,000現金チップが進呈されます。有効期限は30日、最大出金額は¥30,000です。(通常時は¥2,000)",
    extraSpins: {
      summary:
        "エルドアカジノのプロモーションは現金チップやキャッシュバックが中心で、フリースピンが提供されることは稀です。",
      schedule: [],
      warning: "",
    },
    welcomeRows: [
      { depositNumber: "初回入金 (選択制)", percent: "70%キャッシュバック", cap: "¥50,000", code: "ジャパカジ70" },
      { depositNumber: "初回入金 (選択制)", percent: "50%入金ボーナス", cap: "¥10,000", code: "週末限定" },
    ],
    conditions: [
      "入金不要ボーナス、キャッシュバック、入金ボーナスなど、ほとんどのボーナスの賭け条件は1倍です。",
      "ライブカジノへのベットも賭け条件消化率100%としてカウントされます。",
      "ボーナス利用中は最大ベット額（入金不要ボーナスは¥500、キャッシュバックは¥10,000）が設定されます。",
      "キャッシュバックは、初回入金後に出金せず残高が100円未満になった場合にサポートへの申請が必要です。",
    ],
    prohibitedGames: [
        "スポーツベットは一部のボーナス（キャッシュバックなど）で利用対象外となります。",
    ],
  },
  offers: [
    {
      title: "仮想通貨入金5％還元ボーナス",
      description: "VIPランクがVIP2以上のプレイヤーが仮想通貨で入金すると、翌日に入金額の5%が還元されます。このボーナスも賭け条件は1倍です。",
      highlight: "VIPランクに応じて最大還元額もアップ",
    },
    {
      title: "進化したVIPプログラム",
      description: "2025年9月にリニューアルされたVIPプログラムは、一度昇格すると降格なし。累計ベット額でランクが上がり、ランクアップボーナスや還元率が向上したローリングチップ（リベート）、週次・月次のキャッシュバックなど、豪華な特典が満載です。",
      highlight: "ベットすればするほど還元される降格なしのVIP制度",
    },
  ],
  facts: [
    { label: "名称", value: "Eldoah Casino (エルドアカジノ)" },
    { label: "ローンチ", value: "2020年 (パイザカジノからリニューアル)" },
    { label: "運営会社", value: "GLOBAL SYSTEM TECHNOLOGIES INC" },
    { label: "ライセンス", value: "Anjouan Internet Gaming License, Kahnawake Gaming Commission (KGC), Comoros (AOFA)" },
    { label: "VIPプログラム", value: "✅" },
    { label: "対応言語", value: "日本語" },
    { label: "対応通貨", value: "JPY" },
    {
      label: "ゲームタイプ",
      value:
        "バカラ, ブラックジャック, クラップス, ゲームショー, ライブカジノ, ポーカー, ルーレット, スロット, スポーツベット",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/betsoft">BetSoft</Link>, <Link href="https://casinotsu.com/providers/big-time-gaming">Big Time Gaming</Link>, <Link href="https://casinotsu.com/providers/blueprint-gaming">Blueprint Gaming</Link>, <Link href="https://casinotsu.com/providers/hacksaw-gaming">Hacksaw Gaming</Link>, <Link href="https://casinotsu.com/providers/microgaming">Microgaming</Link>, <Link href="https://casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://casinotsu.com/providers/nolimit-city">Nolimit City</Link>, <Link href="https://casinotsu.com/providers/playson">Playson</Link>, <Link href="https://casinotsu.com/providers/playtech">Playtech</Link>, <Link href="https://casinotsu.com/providers/play-n-go">Play’n GO</Link>, <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/quickspin">Quickspin</Link>, <Link href="https://casinotsu.com/providers/red-tiger">Red Tiger</Link>, <Link href="https://casinotsu.com/providers/relax-gaming">Relax</Link>, <Link href="https://casinotsu.com/providers/yggdrasil">Yggdrasil</Link> など
        </span>
      ),
    },
    { label: "最小入金額", value: "¥2,000 (Payz, STICPAYなど)" },
    { label: "最小出金額", value: "情報なし" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@eldoah.com">support@eldoah.com</Link> },
    { label: "ライブチャット", value: "ライブチャットサポート (24時間365日日本語対応)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "2020年にパイザカジノからリニューアルした「エルドアカジノ（Eldoah）」は、特にハイローラーやライブカジノファンから絶大な支持を集めるオンラインカジノです。",
      "その最大の魅力は、出金上限額がなく、平均15分という業界最速レベルの出金スピードにあります。高額勝利金を手にしても、ストレスなく迅速に引き出せる体制は、多くのヘビープレイヤーを惹きつけてやみません。",
      "しかし、その一方で、独立評価サイトCasino Guruからは安全性を疑問視する厳しい評価も下されています。このレビューでは、エルドアカジノの輝かしい魅力と、プレイヤーが認識すべき潜在的なリスクの両面を、CasinoTsuが徹底的に解説します。",
    ],
    ctas: [
      { text: "👉 エルドアカジノで今すぐプレイ！", href: "https://go.japanesecasino.com/go/eldoah-casino:eldoah?referrer_path=%2Freviews%2Feldoah" },
      { text: "🔰 初心者向けカジノガイドはこちら", href: "https://casinotsu.com/guides" },
    ],
  },
  games: [
    "エルドアカジノのゲームライブラリは3,000種類以上と豊富です。特筆すべきはライブカジノで、Evolution Gamingをはじめとする全16社のプロバイダーから250以上のテーブルを選択できます。これは業界トップクラスの品揃えです。",
    "バカラ、ブラックジャック、ルーレットなどの定番テーブルはもちろん、日本市場では珍しいプロバイダーのゲームも楽しめます。ハイローラー向けには1ベット最大1,000万円のテーブルも用意されています。スロットも約40社のプロバイダーから提供されており、人気機種からジャックポットまで幅広くカバーしています。",
  ],
  features: [
    "エルドアカジノのVIPプログラムは、一度昇格すれば降格することがない点が最大の特徴です。累計ベット額に応じてランクが上がり、ランクアップボーナスやリベート率の向上、週次・月次キャッシュバックなど、プレイすればするほど恩恵が大きくなる仕組みです。",
    "サイトはモバイルにも完全対応しており、専用アプリはありませんが、どのデバイスのブラウザからでも快適にプレイできます。",
  ],
  editorial: {
    author: "Kotone",
    profileHref: "/authors/kotone",
    hook: "ハイローラーにとって天国のような条件と、深刻な安全性への警告が同居する、評価が二分されるカジノです。",
    theGoodStuff: "出金上限なし、平均15分の超高速出金、賭け条件1倍のボーナス。これらは他のカジノの追随を許さない、エルドアカジノだけの強力な魅力です。特に高額を賭けるプレイヤーにとって、これ以上ない環境と言えるでしょう。24時間対応の日本語サポートの質も極めて高いです。",
    theHeadsUp: "しかし、Casino Guruの安全指数1.9/10という評価は看過できません。『強く距離を置くこと』を推奨されるほどの低評価は、賞金の支払いや運営の公正性に深刻な懸念があることを示唆しています。プレイヤーはこのリスクを十分に理解した上で、自己責任でプレイする必要があります。",
    finalThought: "エルドアカジノは、その魅力とリスクが非常に明確なカジノです。提供されるサービスはハイローラーにとって理想的ですが、その土台となる信頼性には疑問符がついています。利用を検討する際は、この二面性を天秤にかけ、慎重に判断することが求められます。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "エルドアカジノは、オンラインカジノ業界において特異なポジションを確立しています。その核心は「ハイローラーファースト」という徹底した姿勢です。特筆すべきは、銀行振込を除き出金上限が一切ないこと、そして申請から平均15分で着金するそのスピードです。数千万円、あるいはそれ以上の高額勝利金を手にしたプレイヤーが、何の心配もなく即座に現金化できるという安心感は、他のカジノでは得難いものです。この一点だけでも、エルドアカジノが多くのヘビープレイヤーから選ばれる理由として十分でしょう。",
      "さらに、その魅力を支えるのが、業界随一のライブカジノのラインナップと、極めて有利なボーナス条件です。16社ものライブプロバイダーが提供する250以上のテーブルは、プレイヤーに無限の選択肢を与えます。そして、入金不要ボーナスやキャッシュバックに適用される「賭け条件1倍」というルールは、ボーナスが実質的な現金として機能することを意味し、プレイヤーにとって非常に価値が高いものです。これに降格なしのVIPプログラムが加わることで、プレイすればするほど有利になるという好循環が生まれます。",
      "しかし、この輝かしい魅力の裏には、深刻な影が潜んでいます。独立した評価機関であるCasino Guruが、エルドアカジノの安全性指数を1.9/10という危険水域のスコアに設定し、「強く距離を置くべき」と警告している事実は、決して軽視できません。この評価は、カジノのライセンスの信頼性、過去のプレイヤーからの苦情、そして推定される収益規模（年間100万ユーロ未満）からくる財政的な不安定さに基づいています。つまり、魅力的な条件でプレイヤーを集めている一方で、万が一の際の支払い能力や公正な運営に対する保証が弱い、という可能性を示唆しているのです。",
      "結論として、エルドアカジノは「ハイリスク・ハイリターン」を体現したカジノと言えます。提供されるサービスや条件は、間違いなく業界トップクラスです。しかし、その運営基盤の信頼性には重大な懸念が指摘されています。CasinoTsuとしては、その利便性と豪華さを認めつつも、プレイヤーの皆様には潜在的なリスクを十分に理解し、慎重に自己責任で利用を判断していただく必要があると結論付けます。",
    ],
  },
  security: [
    "アンジュアン、カナワケ（KGC）、コモロ（AOFA）の複数のライセンスを取得していると記載",
    "ゲームの公平性はRNG（乱数発生器）によって保証",
    "公式サイトにプライバシーポリシーを明記し、個人情報の取り扱いについて説明",
  ],
  responsiblePlay: [
    "公式サイトに「責任のあるプレイ」セクションを設置",
    "ギャンブル依存症のセルフチェックリストを提供",
    "自己規制ツールにより、ベット額や入金額を自身で設定・管理可能",
  ],
  complaintStats: [
    "Casino Guruによる安全性指数は1.9/10と『非常に低い』評価",
    "Casino Guruはエルドアカジノから『強く距離を置くこと』を推奨",
    "年間収益が100万ユーロ未満と推定され、財政的な不安定さが示唆されている",
  ],
  awards: [],
  restrictedCountries: [
    "ノルウェー",
  ],
  userConcerns: [
    "ゲームの検索機能がプロバイダーとキーワードのみで、やや使いにくい",
    "SNS上では出金処理の遅延を指摘する声も稀に見られる（ただし、速いという評判が多数）",
    "プロバイダー毎にウォレットが分かれているシステムが煩雑に感じられる可能性がある",
  ],
  summary: [
    "出金上限額がなく、平均15分という超高速出金はハイローラーにとって最大の魅力。",
    "16社のプロバイダーが提供するライブカジノは業界トップクラスの充実度。",
    "賭け条件1倍のボーナスは非常に有利だが、第三者機関からは深刻な安全性の警告が出ている。",
    "利便性は非常に高いが、運営の信頼性に関するリスクを理解した上で、自己責任での利用が前提となるカジノ。",
  ],
  extraLinks: [
    { text: "✅ オンラインカジノの本人確認（KYC）を徹底解説", href: "https://casinotsu.com/guides/document-verification" },
    { text: "💰 賭け条件1倍はどれだけお得？ボーナス条件を学ぶ", href: "https://casinotsu.com/guides/wagering-requirements" },
  ],
  faq: [
    {
      question: "エルドアカジノは日本語サポートがありますか？",
      answer: "はい、エルドアカジノはライブチャットおよびメールにて、24時間365日対応の日本語カスタマーサポートを提供しています。",
    },
    {
      question: "エルドアカジノの入金不要ボーナスはありますか？",
      answer: "はい、CasinoTsuからの登録限定で、賭け条件1倍の現金チップ¥3,000分が期間限定で提供されています。ボーナスコード『japacasi3000』の入力が必要です。",
    },
    {
      question: "エルドアカ지ノで、仮想通貨での入出金はできますか？",
      answer: "はい、エルドアカ지ノではビットコインをはじめとする6種類の仮想通貨での入出金に対応しています。",
    },
  ],
  cta: {
    text: "エルドアカジノでプレイしてみる！",
    href: "https://go.japanesecasino.com/go/eldoah-casino:eldoah?referrer_path=%2Freviews%2Feldoah",
  },
};