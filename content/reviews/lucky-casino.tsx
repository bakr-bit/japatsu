import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewLuckyCasino: ReviewPageContent = {
  hero: {
    title: "LuckyCasino / ラッキーカジノ｜オンラインカジノ徹底レビュー！",
    subheading: "最大$1,515ウェルカムボーナス",
    description: "【重要】ラッキーカジノは2022年11月14日に日本市場から撤退しました。本レビューは過去の情報として記録しています。CasinoTsuが、シンプルさが特徴だったラッキーカジノのボーナス、決済方法、サポート体制を徹底検証したレビューです。",
    score: 4.2,
    scoreMax: 5,
    scoreBreakdown: [
      {
        label: "人気指数",
        percent: 77,
        note: "シンプルさがゲーム好きに好評でしたが、際立った特徴が少なく印象に残りにくい側面もありました。",
      },
      {
        label: "規約",
        percent: 85,
        note: "ウェルカムボーナスの賭け条件は35倍と平均的。3回目までの入金が対象でした。",
      },
      {
        label: "操作性",
        percent: 84,
        note: "シンプルさが際立つユーザーフレンドリーなサイトで、初心者でも直感的に操作可能でした。",
      },
      {
        label: "サポート",
        percent: 91,
        note: "日本人ネイティブによる丁寧なサポートが提供されていましたが、対応時間は限定的でした。",
      },
    ],
    highlights: [
      "過去にCasinoTsu限定ボーナスを提供",
      "入金3回目まで最大$1,500のボーナスがあった",
      "低めに設定された最低入出金額（$10）",
      "スピーディーな出金が特徴だった",
    ],
    watchouts: [
      "2022年11月14日に日本市場から撤退済み",
      "際立った特徴が少ないとの評価",
      "一部ボーナスには最大勝利金上限が設定されていた",
      "プロモーションの頻度は低めだった",
    ],
  },
  payments: {
    featured: [
      {
        name: "Vega Wallet",
        icon: "/assets/payments/vega-wallet.svg",
        href: "https://casinotsu.com/payment/vega-wallet",
        badge: "Eウォレット",
        note: "低額からの入出金に対応",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://casinotsu.com/payment/payz",
        badge: "Eウォレット",
        note: "信頼性の高い定番決済手段",
      },
      {
        name: "Mastercard",
        icon: "/assets/payments/mastercard.svg",
        href: "https://casinotsu.com/payment/mastercard",
        badge: "カード入金",
        note: "手軽な入金が可能だった",
      },
      {
        name: "J-Pay",
        icon: "/assets/payments/j-pay.svg",
        href: "https://casinotsu.com/payment/j-pay",
        badge: "銀行送金",
        note: "銀行口座からの直接入金に対応",
      },
    ],
    deposits: [
      { name: "マスターカード", icon: "/assets/payments/mastercard.svg" },
      { name: "JCB" },
      { name: "ベガウォレット", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
      { name: "ペイズ", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "マッチベター", icon: "/assets/payments/muchbetter.svg", href: "https://casinotsu.com/payment/muchbetter" },
      { name: "J-Pay（銀行送金）", icon: "/assets/payments/j-pay.svg", href: "https://casinotsu.com/payment/j-pay" },
      { name: "Neteller" },
      { name: "Paysafecard" },
      { name: "iDEAL" },
      { name: "Sofort" },
      { name: "Giropay" },
      { name: "QIWI" },
      { name: "Trustly" },
      { name: "Skrill" },
      { name: "Zimpler" },
      { name: "Interac" },
      { name: "POLi" },
    ],
    withdrawals: [
      { name: "ベガウォレット", icon: "/assets/payments/vega-wallet.svg", href: "https://casinotsu.com/payment/vega-wallet" },
      { name: "ペイズ", icon: "/assets/payments/payz.svg", href: "https://casinotsu.com/payment/payz" },
      { name: "マッチベター", icon: "/assets/payments/muchbetter.svg", href: "https://casinotsu.com/payment/muchbetter" },
      { name: "Neteller" },
      { name: "Skrill" },
      { name: "Trustly" },
      { name: "Zimpler" },
    ],
    notes: [
      "最低入出金額は$10と低めに設定されていました。",
      "出金処理時間の目安：電子ウォレットは24時間以内、カード決済は3〜5日。最大48時間の保留期間がありました。",
      "月間出金上限は€100,000でした。",
    ],
  },
  bonuses: {
    overview:
      "【過去の情報】ラッキーカジノはシンプルさを重視し、ボーナスも分かりやすく整理されていました。3回目までの入金で最高$1,500のウェルカムボーナスや、CasinoTsu限定の入金不要ボーナスが提供されていました。",
    noDeposit:
      "過去にCasinoTsuからの登録者限定で、$15の入金不要ボーナスが進呈されていました。登録だけで受け取れ、カジノを試すのに最適でした。",
    extraSpins: {
      summary:
        "ウェルカムボーナスにはフリースピンは含まれていませんでしたが、「今週のゲーム」プロモーションで賭け条件なしのフリースピンを獲得できました。",
      schedule: [],
      warning: "",
    },
    welcomeRows: [
      { depositNumber: "初回", percent: "100%", cap: "$500", code: "" },
      { depositNumber: "2回目", percent: "25%", cap: "$500", code: "" },
      { depositNumber: "3回目", percent: "50%", cap: "$500", code: "" },
    ],
    conditions: [
      "賭け条件はボーナス額の35倍でした。",
      "有効期限はボーナス獲得から30日間でした。",
      "ボーナスマネー使用時の最大ベット額はスロット$5、テーブルゲーム$20でした。",
      "賭け条件を消化する前に現金残高を出金できる「早期出金システム」がありました。",
      "一部のボーナスには€2,500の最大勝利金上限が設定されている場合がありました。",
    ],
    prohibitedGames: [
      "有効なボーナスがある状態でのジャックポットゲームのプレイは禁止されていました。",
      "その他、ボーナス規約で指定された一部のゲームは除外対象でした。",
    ],
  },
  offers: [
    {
      title: "今週のゲーム",
      description: "毎週$100を入金し、スロットで同額をベットすると、対象ゲームで使える賭け条件なしのフリースピン20回が獲得できる人気のキャンペーンでした。",
      highlight: "毎週対象スロットが変わり、賭け条件なしのフリースピンが魅力でした",
    },
  ],
  facts: [
    { label: "名称", value: "LuckyCasino (ラッキーカジノ)" },
    {
      label: "ローンチ",
      value: "2015年",
    },
    { label: "運営会社", value: "Glitnor Services Limited" },
    { label: "ライセンス", value: "Malta Gaming Authority, Swedish Gambling Authority" },
    { label: "VIPプログラム", value: "❌" },
    {
      label: "対応言語",
      value: "日本語",
    },
    { label: "対応通貨", value: "日本円, AUD, CAD, NOK, SEK" },
    {
      label: "ゲームタイプ",
      value:
        "スロット, ビデオポーカー, プログレッシブジャックポット, ライブカジノ (Evolution, Swintt, Ezugi), スポーツベッティング",
    },
    {
      label: "ゲームプロバイダー",
      value: (
        <span>
          Big Time Gaming, Elk Studios, Golden Hero, Microgaming, NetEnt, Play’n GO, Push Gaming, Quickspin, Red Tiger, Thunderkick, Yggdrasil, Nolimit City, Pragmatic Play, Games Global, Oryx Gaming, Leander Games, Lightning Box, Just For The Win, 2 By 2 Gaming, Atomic Slot Lab, Indigo Magic
        </span>
      ),
    },
    { label: "最小入金額", value: "$10" },
    { label: "最小出金額", value: "$10" },
    { label: "電話サポート", value: "❌" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: "support.jp@luckycasino.com" },
    { label: "ライブチャット", value: "毎日 10:00 〜 深夜 0:00 CET (変動あり)" },
  ],
  intro: {
    paragraphs: [
      "⚠️Lucky Casino／ラッキーカジノは、2022年11月14日をもって日本市場を撤退いたしました。以下のレビューはサービス提供当時のものであり、現在は新規登録できません。",
      "ギャンボラの系列カジノであったラッキーカジノは、その名の通り、シンプルさを追求したサイトデザインが特徴でした。『煩わしいことは避けたい、シンプル・イズ・ザ・ベスト！』というプレイヤーに最適なオンラインカジノでした。",
      "実は、ラッキーカジノはベラジョンの創設者が立ち上げたカジノであり、特にスムーズな出金体験に力を入れていました。オンラインカジノ愛好家にとって非常に重要なポイントを押さえた運営がなされていました。",
    ],
    ctas: [
      { text: "超カンタン解説！🔰オンラインカジノのはじめ方", href: "https://casinotsu.com/guides" },
    ],
  },
  games: [
    "ラッキーカジノでは、数百種類に及ぶ豊富なスロットゲームが提供されていました。Big Time Gaming, Microgaming, NetEnt, Play’n GOといった人気プロバイダーはもちろん、Nolimit CityやPragmatic Playなどの新しいスタジオのゲームも楽しめました。",
    "ライブカジノは王道のEvolutionに加え, SwinttやEzugiも導入しており、ユニークなラインナップが特徴でした。また、Microgaming社提供のビデオポーカーも11種類プレイ可能でした。",
  ],
  features: [
    "トップページから一貫して紫を基調としたシンプルなデザインで、オンラインカジノ界のミニマリスト的存在でした。",
    "無駄を省き、純粋にゲームプレイに集中したいユーザーのために構成されており、サイト構成も直感的で、目的の機能を探すのに迷うことはありませんでした。",
  ],
  editorial: {
    author: "CasinoTsu 編集部",
    profileHref: "/authors",
    hook: "シンプル・イズ・ザ・ベストを体現したカジノでしたが、2022年に日本市場から撤退しました。",
    theGoodStuff: "迅速な出金、分かりやすいボーナス条件、そして質の高い日本語サポートは高く評価できました。特にカジノ初心者や、複雑なサイトを好まないプレイヤーにとっては非常に使いやすい存在でした。",
    theHeadsUp: "そのシンプルさゆえに、他のカジノと比べて際立った特徴が少なく、プロモーションの頻度も低めでした。長期的にプレイする上での魅力に欠けると感じるプレイヤーもいたかもしれません。",
    finalThought: "堅実な運営とユーザーフレンドリーな設計で、多くのプレイヤーに安心感を提供していましたが、市場撤退は残念です。このレビューが、オンラインカジノの歴史の一記録となれば幸いです。",
  },
  longform: {
    kicker: "CasinoTsuレビュー",
    title: "編集部による詳説",
    paragraphs: [
      "ラッキーカジノは、2022年11月14日に日本市場でのサービスを終了しました。このレビューは、同カジノが提供していたサービスを記録するためのものです。ラッキーカジノは、紫を基調としたミニマルなデザインを特徴とし、「シンプルにゲームを楽しみたい」というプレイヤー層から支持を集めていました。",
      "運営はベラジョンの創設者が関わり、ギャンボラの姉妹サイトとしても知られていました。その背景から、特にプレイヤー体験、中でも出金の迅速さには定評がありました。登録から入出金まで、すべてのプロセスがスムーズでストレスフリーに設計されていた点は、高く評価できるポイントです。",
      "ボーナスシステムもシンプルで、3回にわたるウェルカムボーナスは合計最大$1,500と魅力的でした。賭け条件はボーナス額の35倍と標準的で、プレイヤーにとって分かりやすい規約が好印象でした。ただし、プロモーションの頻度は少なく、長期的なプレイヤーを惹きつけるインセンティブは限定的でした。",
      "ゲームのラインナップは、主要なプロバイダーを網羅し、スロットからライブカジノまでバランス良く揃っていました。特にライブカジノではEvolution, Swintt, Ezugiという珍しい組み合わせを提供しており、他にはない楽しみ方ができました。",
      "カスタマーサポートは日本人ネイティブが対応し、非常に質が高かったものの、対応時間が限られていた点は少し残念なポイントでした。総じて、ラッキーカジノは派手さはないものの、オンラインカジノの基本を忠実に押さえた堅実で信頼性の高いサイトでした。",
    ],
  },
  security: [
    "標準的なSSL暗号化技術を採用し、プレイヤーのデータを保護",
    "ゲームは監査済みのベンダーから提供され、公平性を確保",
    "マルタおよびスウェーデンの信頼性が高いライセンスを取得して運営",
  ],
  responsiblePlay: [
    "入金制限",
    "ベット制限",
    "損失制限",
    "時間/セッション制限",
    "自己排除",
    "クールオフ/タイムアウト",
    "リアリティチェック",
    "自己診断テスト",
  ],
  complaintStats: [
    "AskGamblers: 6件中5件の苦情が解決済み。平均対応時間2日、平均解決期間7日。",
    "Trustpilot: 2.3/5（103件のレビューに基づく「Poor」評価）",
    "AskGamblers CasinoRank: 6.9/10",
  ],
  awards: [
    "特になし",
  ],
  restrictedCountries: [
    "ベルギー",
    "デンマーク",
    "フランス",
    "香港",
    "イタリア",
    "ナイジェリア",
    "オランダ",
    "イギリス",
    "アメリカ合衆国",
  ],
  userConcerns: [
    "ペイアウトが低い、または「不正な」ゲームに関する不満の報告。",
    "勝利金の出金が困難であるとの報告。",
    "本人確認プロセスや出金処理に時間がかかるとの意見。",
    "カスタマーサポートが24時間対応ではないことへの不満。",
    "一部ボーナスの高い賭け条件（最大50倍）や最大勝利金キャップ（€2,500）への不満。",
  ],
  summary: [
    "ラッキーカジノは、紫を基調としたシンプルなデザインが特徴のミニマリスト的なオンラインカジノでした。現在は日本市場から撤退しています。",
    "登録は簡単で出金も迅速、完全な日本語サポートも提供されており、特に初心者にとって使いやすいサイトでした。賭け条件も35倍と標準的でした。",
    "デザインがシンプルすぎるため物足りなさを感じる可能性もありましたが、オンラインカジノの基本を忠実に押さえた堅実なプラットフォームでした。",
    "シンプルにゲームを楽しみたいプレイヤーにとっては良い選択肢でしたが、残念ながら現在は利用できません。",
  ],
  extraLinks: [
    { text: "🔰 賭け条件ってなに？わかりやすく解説！", href: "https://casinotsu.com/guides/wagering-requirements" },
    { text: "様々なカジノボーナスの種類を知ろう！", href: "https://casinotsu.com/bonuses" },
  ],
  faq: [
    {
      question: "ラッキーカジノには入金不要ボーナスはある？",
      answer: "過去にCasinoTsuからの登録者限定で、$15の入金不要ボーナスが提供されていました。現在は日本市場から撤退しているため、このオファーは利用できません。",
    },
    {
      question: "ラッキーカジノでプレイ可能なゲームの種類は？",
      answer: "スロット、ビデオポーカー、ライブカジノなど数百種類以上のゲームがプレイ可能でした。Microgaming、NetEnt、Play’n GO、Nolimit Cityなど多数の人気プロバイダーのゲームを取り揃えていました。",
    },
    {
      question: "ラッキーカジノのおすすめポイントは？",
      answer: "究極にシンプルなデザインで、ゲームプレイに集中したいプレイヤーにおすすめでした。また、信頼性の高いマルタライセンスを取得しており、セキュリティ面でも安心できるカジノでした。",
    },
  ],
  cta: {
    text: "他の優良オンラインカジノを探す",
    href: "https://casinotsu.com/reviews",
  },
};