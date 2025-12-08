import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewKakeyo: ReviewPageContent = {
  hero: {
    title: "KaKeYo（カケヨカジノ）レビュー",
    subheading: "最大¥100,000ボーナス + 50回フリースピン",
    description: "カジノゲームとスポーツベットの両方が楽しめるKaKeYoをCasinoTsuが徹底解説。賭け条件の緩やかなボーナス、豊富な決済方法、日本円対応が魅力ですが、安全性評価など注意点もまとめています。",
    score: 3.9,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 75,
        note: "比較的新しいカジノだが、特にスポーツベットが楽しめる点で徐々に知名度を上げている。",
      },
      {
        label: "規約",
        percent: 76,
        note: "ウェルカムボーナスやフリースピンに適用される10倍の賭け条件は比較的緩やかで魅力的。(※ただし、規約詳細には60倍との記載もあり注意が必要)",
      },
      {
        label: "操作性",
        percent: 80,
        note: "SNSでの登録に対応。デスクトップでは文字が小さく、モバイルデバイスでの利用が推奨される。",
      },
      {
        label: "サポート",
        percent: 86,
        note: "日本人スタッフによるサポートは知識豊富で丁寧。返信も迅速で高評価。",
      },
    ],
    highlights: [
      "賭け条件10倍のウェルカムボーナス特典",
      "カジノゲームと本格的なスポーツベットの両方が楽しめる",
      "日本円（JPY）でのプレイに対応",
      "豊富なEウォレットと仮想通貨決済",
    ],
    watchouts: [
      "クレジットカード入金に関する情報に矛盾あり",
      "第三者機関による安全性評価が平均以下（6.4/10）",
      "12ヶ月以上利用がない口座は資金を没収される可能性がある",
      "ボーナスの賭け条件に関する記載に矛盾がある（10倍と60倍）",
    ],
    avatarSrc: "/assets/casino/kakeyo.png",
    avatarAlt: "Kakeyoのロゴ",
  },
  payments: {
    featured: [
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://casinotsu.com/payment/payz",
        badge: "Eウォレット",
        note: "多くのカジノで採用される定番Eウォレット",
      },
      {
        name: "MuchBetter",
        icon: "/assets/payments/muchbetter.svg",
        href: "https://casinotsu.com/payment/muchbetter",
        badge: "アプリ連携",
        note: "スマートフォンでの管理が便利な決済手段",
      },
      {
        name: "Bitcoin",
        icon: "/assets/payments/bitcoin.svg",
        href: "https://casinotsu.com/payment/bitcoin",
        badge: "仮想通貨",
        note: "迅速で匿名性の高い暗号資産決済",
      },
      {
        name: "Tiger Pay",
        icon: "/assets/payments/tiger-pay.svg",
        href: "https://casinotsu.com/payment/tiger-pay",
        badge: "新決済",
        note: "Eウォレットと仮想通貨の両替に対応",
      },
    ],
    deposits: [
      { name: "AstroPay", icon: "/assets/payments/astropay.svg" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg" },
      { name: "Litecoin" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg" },
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "Ripple" },
      { name: "Tether" },
      { name: "Tiger Pay", icon: "/assets/payments/tiger-pay.svg" },
      { name: "J-Pay" },
      { name: "Voucher" },
      { name: "Eco" }, // Likely another name for Payz/EcoPayz
      { name: "JCB" },
      { name: "MasterCard" },
      { name: "Venus Point" },
      { name: "Skrill" },
      { name: "Jeton" },
    ],
    withdrawals: [
      { name: "AstroPay", icon: "/assets/payments/astropay.svg" },
      { name: "Bitcoin", icon: "/assets/payments/bitcoin.svg" },
      { name: "Ethereum", icon: "/assets/payments/ethereum.svg" },
      { name: "Litecoin" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg" },
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "Ripple" },
      { name: "Tether" },
      { name: "Tiger Pay", icon: "/assets/payments/tiger-pay.svg" },
      { name: "J-Pay" },
      { name: "Voucher" },
      { name: "Eco" },
      { name: "Venus Point" },
      { name: "Skrill" },
      { name: "Jeton" },
      { name: "カード" },
      { name: "銀行送金" },
    ],
    notes: [
      "週3回までの出金は手数料無料。週4回目以降は1回あたり¥600の手数料が発生します。",
      "すべての入金は、出金前に1倍の賭け条件を満たす必要があります。",
      "12ヶ月以上利用のない休眠口座は、残高が没収される可能性があるため注意が必要です。",
      "「カード入金は利用不可」との記載と、「JCB、MasterCardは利用可能」との記載が混在しており、情報に矛盾があります。",
    ],
  },
  bonuses: {
    overview:
      "KaKeYoは、初回と2回目の入金で受け取れるカジノ用ウェルカムボーナスか、スポーツベット専用のウェルカムボーナスかを選択できます。ボーナス規約、特に賭け条件について、サイト内の複数の箇所で異なる記載（10倍と60倍）が見られるため、利用前にはサポートへの確認を強く推奨します。",
    noDeposit:
      "過去にはCasinoTsu限定で100回のフリースピンが提供されていましたが、現在このオファーは停止中です。",
    extraSpins: {
      summary:
        "ウェルカムボーナスの一部として50回のフリースピンが進呈されます。こちらの勝利金に対する賭け条件は10倍と比較的緩やかです。",
      schedule: [],
      warning: "",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "¥50,000", code: "不要" },
      { depositNumber: "2回目", percent: "50%", cap: "¥1,000", code: "不要" },
    ],
    conditions: [
      "賭け条件は「ボーナス金額の合計」の60倍です。（※サイトの別箇所には10倍との記載もあり、情報が矛盾しています）",
      "ボーナス獲得のための最低入金額は¥1,000です。",
      "ボーナスの有効期限は30日間です。",
      "ボーナスマネーでのベット上限額は1プレイあたり¥10,000です。",
      "ボーナス利用規約には21歳以上という年齢制限があります。",
    ],
    prohibitedGames: [
      "ブラックジャック",
      "クラップス",
      "ビデオポーカー",
      "その他テーブルゲーム",
      "全てのライブカジノゲーム",
    ],
  },
  offers: [
    {
      title: "スポーツ用ウェルカムボーナス",
      description: "カジノ用ボーナスの代わりに選択できるスポーツ専用オファー。初回入金100%で最大¥10,000のボーナスを獲得できます。",
      highlight: "ロールオーバー6倍、オッズ1.8倍以上",
    },
    {
      title: "ウィークリー・キャッシュバック",
      description: "毎週の純損失額の10%がキャッシュバックされます（最大¥5,000）。リアルマネーでのベットが対象です。",
      highlight: "カジノ・ライブカジノの両方が対象",
    },
  ],
  facts: [
    { label: "名称", value: "Kakeyo (カケヨ)" },
    { label: "ローンチ", value: "2020年" },
    { label: "オーナー/運営会社", value: "Chrysalis Ltd (または 247 Sports Interactive)" },
    { label: "ライセンス", value: "Isle of Man Gambling Surpervision Commission, Comoros (Anjouan Gaming - AOFA)" },
    { label: "VIPプログラム", value: "✅" },
    { label: "対応言語", value: "日本語、英語" },
    { label: "対応通貨", value: "JPY, USD" },
    {
      label: "ゲームタイプ",
      value: "バカラ, ブラックジャック, クラップス, ゲームショー, ライブカジノ, ポーカー, ルーレット, スロット, スポーツベット",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          <Link href="https://casinotsu.com/providers/netent">NetEnt</Link>, <Link href="https://casinotsu.com/providers/pragmatic-play">Pragmatic Play</Link>, <Link href="https://casinotsu.com/providers/red-tiger">Red Tiger</Link>, Evolution Gaming, Nolimit City, Quickspin, Thunderkick, Betsoft Gaming, Big Time Gaming, Playson, Ezugi, Push Gaming, BGamingなど48社以上
        </span>
      ),
    },
    { label: "最小入金額", value: "¥500" },
    { label: "最小出金額", value: "¥500" },
    { label: "電話サポート", value: "✅" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support@kakeyo.com">support@kakeyo.com</Link> },
    { label: "ライブチャット", value: "✅ (日本人スタッフによる9時間対応)" },
    { label: "スカイプサポート", value: "❌" },
  ],
  intro: {
    paragraphs: [
      "KaKeYo（カケヨ）は、その名の通り「賭けよう」というストレートなネーミングが印象的なオンラインカジノです。白を基調としたシンプルなデザインの裏には、本格的なブックメーカー機能と、非常に寛大なボーナス体系が隠されています。",
      "アカウント開設時に日本円または米ドルを選択でき、豊富な決済方法が用意されているなど、日本のプレイヤーにとって利便性の高い設計になっています。",
      "この記事では、KaKeYoの寛大なボーナス内容、ゲームのラインナップ、入出金のスムーズさ、そして日本語サポートの質まで、CasinoTsuが徹底的に調査した結果を詳しくお伝えします。",
    ],
    ctas: [
      { text: "👉 KaKeYoでお得にプレイを始める！", href: "https://go.japanesecasino.com/go/kakeyo" },
    ],
  },
  games: [
    "KaKeYoは48社以上のゲームプロバイダーと提携しており、スロットのセレクションにはNetEntやPragmatic Playといった人気どころが含まれています。NoLimit Cityのような新進気鋭のスタジオも導入されており、多様なゲームを楽しめます。ただし、レビュー時点ではPlay’N GOやRed Tigerは未導入（導入予定）で、スロットの総数としては他の大手カジノに比べるとやや少なめな印象です。",
    "ライブカジノはEvolution Gamingに加え、Lucky StreakやVivo Gamingも提供しており、複数のプロバイダーから選べる点は大きな魅力です。これにより、プレイヤーは好みに合わせて異なる雰囲気のライブゲームを体験できます。",
  ],
  features: [
    "KaKeYoの最大の特徴は、カジノゲームとスポーツベットが一体となっている点です。一つのアカウントで両方を楽しめるため、幅広いギャンブルファンにとって便利なプラットフォームです。スポーツベット専用のウェルカムボーナスも用意されています。",
    "サイトはモバイルデバイスに最適化されており、特にスマートフォンでの操作性が高く評価されています。SNSアカウントを利用した手軽な登録も可能です。",
  ],
  editorial: {
    author: "CasinoTsu編集部",
    profileHref: "/authors",
    hook: "ボーナスの条件は魅力的だが、サイト内の情報矛盾と安全性評価には注意が必要なカジノ。",
    theGoodStuff: "ボーナスの賭け条件が10倍（またはフリースピンの勝利金に対して10倍）と、非常に緩やかに設定されている点は最大の魅力です。日本人スタッフによるサポートの質も高く、迅速かつ丁寧な対応が期待できます。日本円対応や豊富な決済方法も、日本人プレイヤーにとって大きな利点です。",
    theHeadsUp: "最大の懸念点は、Casino Guruによる安全性評価が6.4/10と平均以下であることです。また、12ヶ月以上利用がない口座から資金が没収されるという厳しい休眠口座ポリシーも存在します。さらに、サイト内でボーナスの賭け条件（10倍と60倍）やカード決済の可否について矛盾した記載が見られ、プレイヤーに混乱を招く可能性があります。",
    finalThought: "KaKeYoは、特にスポーツベット好きで、緩い条件のボーナスを探しているプレイヤーにとっては非常に魅力的な選択肢です。ただし、利用する際はサイト内の矛盾した情報を鵜呑みにせず、必ずサポートに確認を取ること、そして休眠口座ポリシーを念頭に置いておくことが重要です。今後のゲーム数の拡充とサイト情報の整理に期待したいカジノです。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "KaKeYo、その名は「賭けよ」。シンプルで覚えやすいこのオンラインカジノは、一見すると白を基調としたミニマルなデザインで、他の派手なカジノとは一線を画しています。しかし、その中身を詳しく見ていくと、プレイヤーにとって実利の大きい特徴が数多く見つかりました。最大の魅力は、なんといってもその寛大なボーナス条件です。特にフリースピンの勝利金に対する賭け条件が10倍というのは、業界でもかなり甘い設定と言えるでしょう。ただし、入金ボーナス本体の賭け条件については、サイト内で10倍と60倍という矛盾した記述があり、これは明確なマイナスポイントです。利用者は必ず事前にサポートへ確認する必要があります。",
      "もう一つの大きな柱は、本格的なブックメーカー（スポーツベット）機能の統合です。これにより、スロットやライブカジノの合間に、好きなスポーツの試合に賭けるという楽しみ方が可能になります。スポーツ専用のウェルカムボーナスが用意されている点からも、その本気度がうかがえます。",
      "日本人プレイヤーへの配慮も行き届いています。アカウント通貨に日本円を選べること、そしてPayzやMuchBetter、各種仮想通貨など、日本で人気の決済方法を幅広くカバーしている点は高く評価できます。さらに、日本人スタッフによるライブチャットサポートは、対応が迅速かつ丁寧で、安心して問い合わせができます。",
      "一方で、課題も残されています。Casino Guruによる安全性評価が平均以下であることや、厳しい休眠口座ポリシーは、プレイヤーにとって無視できないリスクです。また、レビュー時点ではスロットのラインナップが他の大手カジノに比べてやや少ないため、特定のゲームプロバイダーのファンにとっては物足りなさを感じるかもしれません。しかし、まだ新しいカジノであるため、これらの点は今後の成長と共に改善されていく可能性に大いに期待できます。KaKeYoは、いくつかの注意点を理解した上で賢く利用すれば、非常に価値のある体験を提供してくれるポテンシャルを秘めたカジノです。",
    ],
  },
  security: [
    "Isle of Man Gambling Surpervision Commissionのライセンスを保持",
    "Comoros (Anjouan Gaming - AOFA)のライセンスを保持",
  ],
  responsiblePlay: [
    "KaKeYoは責任あるギャンブルを推奨しており、プレイヤーが自身のプレイを管理するためのツールを提供しています。",
    "具体的なツールに関する詳細はサイト上で確認するか、サポートへの問い合わせが必要です。",

  ],
  complaintStats: [
    "Casino Guruによる安全性評価は6.4/10と平均以下です。",
    "年間推定収益は100万ドル未満とされています。",
  ],
  awards: [],
  restrictedCountries: [],
  userConcerns: [
    "12ヶ月から18ヶ月利用がない休眠口座の資金は没収される可能性があります。",
    "ボーナスの賭け条件やカード決済の可否について、サイト内で情報が矛盾しています。",
    "安全性評価が業界平均を下回っています。",
  ],
  summary: [
    "カジノとスポーツベットの両方を楽しめる統合プラットフォームです。",
    "ボーナスの賭け条件が比較的緩やかで、プレイヤーにとって有利なオファーが多数あります。",
    "日本人スタッフによる質の高いサポートと、日本円対応・豊富な決済方法が魅力です。",
    "一方で、安全性評価が平均以下であることや、休眠口座に関する厳しいポリシー、サイト内の情報矛盾など、利用前に確認すべき注意点も存在します。",
  ],
  extraLinks: [],
  faq: [
    {
      question: "KaKeYo（カケヨ）にスポーツベットはありますか？",
      answer: "はい、本格的なスポーツベット機能があり、専用のウェルカムボーナスも用意されています。",
    },
    {
      question: "KaKeYo（カケヨ）で仮想通貨は利用できますか？",
      answer: "はい、ビットコイン、ライトコイン、イーサリアム、リップル、テザーなど、複数の仮想通貨が入出金に利用可能です。",
    },
    {
      question: "KaKeYo（カケヨ）に日本語サポートはありますか？",
      answer: "はい、日本人スタッフによるライブチャット（1日9時間）とメールでのサポートが提供されています。",
    },
    {
      question: "KaKeYo（カケヨ）の出金限度額は？",
      answer: "週間の出金限度額は¥200,000です。",
    },
    {
      question: "KaKeYo（カケヨ）は安全ですか？",
      answer: "Isle of ManとComorosのライセンスを保持していますが、第三者機関による安全性評価は平均以下です。また、長期間利用がない口座の資金を没収するポリシーがあるため、利用には注意が必要です。",
    },
    {
      question: "KaKeYo（カケヨ）でボーナスは利用できますか？",
      answer: "はい、ウェルカムボーナスやキャッシュバックなど様々なボーナスが利用できます。ただし、利用規約（年齢制限など）をよくご確認ください。",
    },
    {
      question: "KaKeYo（カケヨ）にアプリはありますか？",
      answer: "専用アプリはありませんが、ウェブサイトはモバイルに最適化されています。",
    },
    {
      question: "KaKeYo（カケヨ）にノーデポジットボーナスはありますか？",
      answer: "現在、常設の入金不要ボーナスはありません。過去に提供されていた限定オファーは停止中です。",
    },
  ],
  cta: {
    text: "KaKeYoでボーナスを受け取ってプレイを始める",
    href: "https://go.japanesecasino.com/go/kakeyo:kakeyo?referrer_path=%2Freviews%2Fkakeyo",
  },
};