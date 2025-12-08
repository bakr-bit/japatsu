import Link from "next/link";
import type { ReviewPageContent } from "@/components/templates/ReviewDetailTemplate";

export const reviewWilliamHill: ReviewPageContent = {
  hero: {
    title:
      "ウィリアムヒル（William Hill）カジノ 2025年最新評価｜入金・出金・安全性・ボーナス徹底解説",
    subheading:
      "世界三大ブックメーカーの老舗。スポーツとカジノを1アカウントで利用可能／ボーナスは最大$300・賭け条件25倍",
    description:
      "当編集部がウィリアムヒルのライセンス・ボーナス・入出金・ゲームラインナップ・サポート体制を精査。長所と留意点を明確化し、実際の利用で役立つ規約・消化率・対象ゲーム・処理時間を整理しました。",
    score: 3.7,
    scoreMax: 5,
    scoreBreakdown: [
      { label: "人気指数", percent: 72, note: "老舗のブランド力とスポーツの強さで安定した認知。" },
      {
        label: "規約",
        percent: 85,
        note:
          "カテゴリー別に異なるウェルカム。ベガス／ライブ側で最大$300・25倍。対象ゲームと消化率の限定に注意。",
      },
      {
        label: "操作性",
        percent: 67,
        note:
          "2020年刷新で改善したが、検索性やタブ間の導線、決済の限定・UIの視認性など改善余地あり。",
      },
      {
        label: "サポート",
        percent: 79,
        note:
          "メールは概ね良好・24h目安。ライブチャットは混雑等で接続しづらい時間帯あり（日本語対応の可用性にばらつき）。",
      },
    ],
    highlights: [
      "世界的ブックメーカーの信用力／スポーツとカジノを横断利用",
      "指定ゲーム中心のウェルカム最大$300（W/R25x）",
      "主要プロバイダーの人気機種を厳選導入",
    ],
    watchouts: [
      "カテゴリー（ベガス／ライブ等）ごとにボーナス・規約が分かれる",
      "対象外ゲームが多く、消化率0%のタイトルが存在",
      "決済手段が国・口座種で差異あり。ライブチャット接続性に波",
    ],
    avatarSrc: "/assets/casino/william-hill.png",
    avatarAlt: "William hillのロゴ",
  },

  payments: {
    featured: [
      {
        name: "Mastercard",
        icon: "/assets/payments/mastercard.svg",
        href: "https://www.casinotsu.com/payment/mastercard",
        badge: "最低入金 $/€20 目安",
        note: "数分で反映。原則カード出金不可、代替手段で出金。",
      },
      {
        name: "Payz",
        icon: "/assets/payments/payz.svg",
        href: "https://www.casinotsu.com/payment/payz",
        badge: "Eウォレット",
        note: "入金数分／出金1営業日目安。",
      },
      {
        name: "MuchBetter",
        icon: "/assets/payments/muchbetter.svg",
        href: "https://www.casinotsu.com/payment/muchbetter",
        badge: "Eウォレット",
        note: "入金数分／出金1営業日目安。",
      },
    ],
    deposits: [
      { name: "VISA", icon: "/assets/payments/visa.svg" },
      { name: "Mastercard", icon: "/assets/payments/mastercard.svg" },
      { name: "PayPal" },
      { name: "Skrill" },
      { name: "Neteller" },
      { name: "Paysafecard" },
      { name: "Trustly" },
      { name: "Apple Pay" },
      { name: "Diners Club" },
      { name: "EPS" },
      { name: "Giropay" },
      { name: "Maestro" },
      { name: "Postepay" },
      { name: "Revolut" },
      { name: "Sofort" },
      { name: "Todito Cash" },
      { name: "銀行振込" },
      { name: "Payz" },
      { name: "MuchBetter" },
    ],
    withdrawals: [
      { name: "Payz", icon: "/assets/payments/payz.svg" },
      { name: "MuchBetter", icon: "/assets/payments/muchbetter.svg" },
      { name: "Skrill" },
      { name: "Neteller" },
      { name: "PayPal" },
      { name: "銀行振込" },
      { name: "Trustly" },
    ],
    notes: [
      "最低入金は一般的に£5（銀行振込は£25）目安。ページ内の通貨・国により変動。",
      "入金は即時〜数分が目安。出金は1〜5営業日が一般的だが、審査状況で延びるケースあり。",
      "一部のEウォレット（PayPal／Skrill／Neteller等）はウェルカム対象外になる場合あり（要規約確認）。",
      "デビットカードの上限例：£99,000。PayPal入金上限£5,500／Skrill£80,000の表記例あり（国・口座により異なる）。",
    ],
  },

  bonuses: {
    overview:
      "ウィリアムヒルは“総合サイトの中にカテゴリ別サイト（スポーツ／ベガス／ライブカジノ／ポーカー／ビンゴ）”が内包され、各カテゴリでウェルカムが別建て。ここではベガス／ライブの新規向け最大$300（賭け条件25倍）を中心に整理します。",
    welcomeRows: [{ depositNumber: "初回", percent: "—", cap: "$300", code: "プロモ申請必須" }],
    conditions: [
      "プロモーション申請が必要。",
      "対象入金：$€30/¥3,000以上（申請ページを開いた状態で入金ボタンから実行）。",
      "対象ゲームのみ賭け条件に100%寄与／その他は0%。",
      "賭け条件：25x。ボーナスは申請後7日間有効。最大ベット$10。",
      "最大出金：$€1,000/¥100,000。",
      "お一人様1回まで。ベガス／ライブの新規限定。",
    ],
    extraSpins: { summary: "明示のFS特典は本稿範囲では未記載。日次系プロモやドロップでFS付与のケースあり。" },
    prohibitedGames: [
      "対象外ゲーム（寄与0%）が広範に存在。指定一覧以外の機種は原則0%。対象タイトルを必ず確認。",
    ],
  },

  offers: [
    {
      title: "デイリーボーナスドロップ",
      description: "毎日スピンやキャッシュの抽選。対象・条件は期間で変動。",
    },
    {
      title: "ライブ・トリビア・ゲームショー",
      description: "リアルタイムのクイズ参加で賞金獲得の機会。",
    },
    {
      title: "友達紹介プログラム",
      description: "紹介者・被紹介者の双方に特典。対象地域・条件あり。",
    },
  ],

  facts: [
    { label: "名称", value: "William Hill" },
    { label: "ローンチ", value: "1934（オンライン展開：1998／カジノオンライン 2001）" },
    { label: "ライセンス", value: "MGA（マルタ）／Gibraltar（英国向けWHG Int’l Ltd登録）" },
    { label: "運営会社", value: "William Hill Global PLC（Malta）／WHG (International) Limited" },
    { label: "VIPプログラム", value: "❌（明示の専用VIPは無し）" },
    {
      label: "ゲームタイプ",
      value:
        "Baccarat, Blackjack, Craps, Game Shows, Live Casino, Poker, Roulette, Slots（カテゴリ別に提供）",
    },
    {
      label: "ゲームプロバイダー（例）",
      value:
        "Big Time Gaming, Blueprint Gaming, Microgaming, NetEnt, Playtech, Play’n GO, Pragmatic Play, Quickspin, Red Tiger, Relax, Yggdrasil, IGT, ELK, Thunderkick, Ash, Inspired など",
    },
    { label: "電話サポート", value: "—（地域・言語により提供。日本語可否は事前確認推奨）" },
    { label: "メールサポート", value: "✅" },
    { label: "Eメール", value: <Link href="mailto:support.ja@willhill.com">support.ja@willhill.com</Link> },
    { label: "ライブチャット", value: "提供（混雑等で接続が難しい時間帯あり）" },
  ],

  intro: {
    paragraphs: [
      "ウィリアムヒルは世界三大ブックメーカーとしての実績に加え、オンラインカジノも併設する総合プラットフォームです。カテゴリ別（ベガス／ライブ／スポーツ等）でウェルカムが分かれており、目的に合わせて使い分ける設計です。",
      "本データは宣伝的表現や絵文字を整理し、規約・消化率・支払い手段・サポート体制など、実務上の論点を重点的に構造化しています。",
    ],
    ctas: [
      { text: "賭け条件の基礎を理解する", href: "https://www.casinotsu.com/guides" },
      { text: "ライセンスの見分け方", href: "https://www.casinotsu.com/info/casino-license" },
    ],
  },

  games: [
    "【ベガス】スロット／テーブル／ビデオポーカー／ビンゴ／ケノ／クラップス／スクラッチ等。人気機種の厳選導入が中心で総数は絞り気味（約570タイトル）。",
    "【ライブ】BJ・バカラ・ルーレット・ポーカー・ゲームショー等を多数のテーブルで提供。",
    "【スポーツ】主要競技からeスポーツ、エンタメ特殊ベットまで網羅。スポーツ専用ボーナスも別建て。",
  ],

  features: [
    "1998年からオンライン、2001年にオンラインカジノ領域を拡張した老舗基盤。",
    "カテゴリ別サイト構造（ベガス／ライブ／ポーカー／ビンゴ／スポーツ）と個別ウェルカム。",
    "指定ゲーム100%寄与の明確な消化ルール（対象外は0%）。",
  ],

  editorial: {
    author: "当編集部",
    profileHref: "/authors/rina-okabe",
    hook:
      "“老舗の安心感×カテゴリ分割の規約”が肝。対象ゲーム・寄与率・決済制限を理解できるなら堅実に活用できる。",
    theGoodStuff:
      "ブランド信頼性／スポーツの層の厚さ／指定ゲーム中心で消化しやすい設計／メール対応の安定感。",
    theHeadsUp:
      "UI検索性や導線に課題／ライブチャット接続性のばらつき／ウェルカム対象外の決済が存在／対象外ゲームが多く、規約精読が前提。",
    finalThought:
      "スポーツを主軸に、合間でカジノを遊ぶ構成と相性良好。カジノ特化派は機種総数に物足りなさを感じる可能性。",
  },

  longform: {
    kicker: "総合レビュー（詳細）",
    title: "ライセンス・規約運用・決済・UI/サポートまでを立体評価",
    paragraphs: [
      "【ライセンス／運営】MGA（マルタ）監督下でWilliam Hill Global PLCが運営。英国向けにはWHG (International) Limited（Gibraltar）登録。第三者検証（Test systems Testing）によりRNGの公平性・ペイアウト率の認証を受ける体制を採用し、通信はSSLで保護。",
      "【ボーナス設計】ウィリアムヒルはカテゴリ別サイトごとにウェルカムが独立。ベガス／ライブの新規は最大$300（申請必須・最低$€30入金・25x・最大ベット$10・7日有効・最大出金$1,000）。指定ゲームのみ100%寄与で、その他は0%。Moon Princess／Reactoonz系／Book of Dead／Legacy of Dead／Lucky Neko／Sweet Bonanza／Gonzo系／Crazy Time／Monopoly Live／Dream Catcher／Megaways系などが対象例。",
      "【入出金】カード・主要Eウォレット・銀行振込等に対応。一般的に入金は即時〜数分、出金は1〜5営業日。デビットカードの高上限例や、PayPal／Skrill／Neteller等の上限例が提示される一方、ウェルカム対象外になり得る決済もあるため、申請前に必ず対象手段を確認したい。",
      "【ゲーム】ベガスは人気どころを押さえた厳選型ラインアップ（約570）。ライブは主要テーブルとゲームショーが充実。プロバイダーはNetEnt／Playtech／Microgaming／Play’n GO／Pragmatic／BTG／Quickspin／Red Tiger／Relax／Yggdrasil／IGT／ELK／Thunderkick／Ash等を含む。",
      "【UI/UX】2020年の刷新で視認性が改善したが、検索性やタブ遷移、フッターの可読性など微細な改善余地が残る。モバイルはiOS/Android/タブレットに最適化、iOSアプリも供給される。",
      "【サポート】メールは24h以内の返信が目安。ライブチャットは混雑時間帯で接続が難しい事例があり、日本語接続の安定性にも揺らぎ。FAQや問い合わせ導線はフッターに集約。電話は地域により提供だが日本語可否は事前確認が無難。",
      "【責任あるプレイ】入金上限・セッションリマインダ・プレイ分析・一時停止（タイムアウト）・自己排除など主要ツールを提供。スポーツ主体の長時間プレイでも自己管理を支援する仕組みがある。",
      "【評判・論点】過去に外部サイトでのブラックリスト掲載（2009年のJP支払に関する報告）や、Trustpilot等の低評価・出金関連苦情（KYC遅延・アカウントロック等）の声も散見。老舗の安心感と相反するユーザー体験のばらつきが論点で、規約・本人確認・利用決済の選定が極めて重要。",
      "【適性】スポーツベットを主用途に、合間でカジノを楽しむユーザーと相性が良い。カジノに専念する場合は、対象ゲームや消化率・タイトル総数を踏まえて補完的に活用するとバランスが取りやすい。",
    ],
  },

  security: [
    "MGA／Gibraltarの規制下で運営",
    "第三者テスト機関によるRNG・RTP監査（記載：Test systems Testing）",
    "サイト全体のSSL/TLS暗号化",
    "プライバシーポリシーの明示と遵守",
  ],

  responsiblePlay: [
    "入金限度設定",
    "プレイスタイル／頻度の分析レポート",
    "アカウント制限設定",
    "セッション時間リマインダー",
    "ショートタイムアウト（クールダウン）",
    "完全自己除外（Self-Exclusion）",
  ],

  complaintStats: [
    "外部レビューサイトでの低評価事例（1.2〜1.4/5）や、出金・KYC遅延・アカウントロック等の苦情が散見される旨の記載あり。",
  ],

  awards: [
    "EGR Safer Gambling Operator",
    "EGR Brand of the Year",
    "Socially Responsible Casino of the Year 2021",
    "Sports Betting Operator",
    "Live Casino など受賞歴の掲示あり",
  ],

  restrictedCountries: [],

  userConcerns: [
    "対象外決済のウェルカム非適用／対象ゲームの限定（消化率0%多数）",
    "ライブチャットの接続不安定・定型対応の指摘",
    "出金関連（KYC遅延・ロック）に関する苦情報告",
    "UIの検索性・導線・可読性に改善余地",
  ],

  summary: [
    "“スポーツ×カジノの一体利用”が強み。老舗の信用力と指定ゲーム中心の明確な消化ルールで運用しやすい。",
    "一方で、対象決済／対象ゲーム／消化率／KYC運用など規約順守が前提。ライブチャットの可用性にも注意。",
    "スポーツ主体のユーザーに最適。カジノ専念派はタイトル総数や消化対象を踏まえ、補助的に活用すると◎。",
  ],

  extraLinks: [
    { text: "カジノの始め方（総合ガイド）", href: "https://www.casinotsu.com/guides" },
    { text: "ボーナスの仕組み・おすすめ", href: "https://www.casinotsu.com/bonuses" },
    { text: "責任あるギャンブル", href: "https://www.casinotsu.com/info/responsible-gambling" },
  ],

  faq: [
    {
      question: "ウェルカムボーナスはいくら？賭け条件は？",
      answer:
        "ベガス／ライブの新規向けで最大$300、賭け条件25倍。対象ゲームのみ100%寄与、その他は0%。申請必須・最低$€30入金・最大ベット$10・7日有効・最大出金$1,000。",
    },
    {
      question: "どの決済が使える？",
      answer:
        "VISA/Mastercard、Payz、MuchBetter、PayPal、Skrill、Neteller、Trustly、銀行振込ほか。国・口座で可否や上限が異なります。",
    },
    {
      question: "日本語サポートは？",
      answer:
        "メール（support.ja@willhill.com）は24時間以内の返信が目安。ライブチャットは日本語対応の可用性に波があり、混雑時は接続困難なことがあります。",
    },
    {
      question: "スマホで遊べる？",
      answer:
        "iOS/Android/タブレットに最適化。iOSアプリも提供。モバイルブラウザからもPC同等の体験が可能。",
    },
  ],

  cta: {
    text: "ウィリアムヒルの最新プロモと対象ゲームを確認する",
    href: "https://go.japanesecasino.com/go/william-hill-casino:william-hill?referrer_path=%2Freviews%2Fwilliam-hill",
  },
};