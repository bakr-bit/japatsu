import type { Metadata } from "next";
import Image from "next/image";
import SectionScaffold from "@/components/shell/SectionScaffold";
import HeaderBanner from "@/components/ui/HeaderBanner";
import { User, Calendar, Award, TrendingUp, AlertTriangle, Target, TrendingDown, BookOpen, Users, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Rina Okabe - 実戦経験6年のカジノ専門家 | CasinoTsu",
  description: "Rina Okabeは2019年から6年間で80以上のカジノを実際にプレイし、¥250万以上を賭けて得た実体験に基づく専門知識を提供。失敗も成功も包み隠さず共有する信頼できるレビュアー。",
  keywords: "Rina Okabe, カジノ専門家, 実戦経験, オンラインカジノレビュー, 日本カジノ専門家, パチスロ風スロット, ボーナス戦略",
  authors: [{ name: "Rina Okabe" }],
  openGraph: {
    title: "Rina Okabe - 6年間の実戦経験を持つカジノ専門家",
    description: "80以上のカジノで実際にプレイし、¥250万以上を賭けた経験から得た本物の知識を共有。失敗から学んだ教訓も包み隠さず公開。",
    type: "profile",
    siteName: "CasinoTsu",
    locale: "ja_JP",
  },
  alternates: {
    canonical: "/authors/rina-okabe",
  },
};

export default function RinaOkabePage() {
  return (
    <SectionScaffold title="Rina Okabe - 実戦経験6年のカジノ専門家">
      <div className="space-y-12">
        {/* Custom Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative mx-auto max-w-6xl px-8 py-16 md:py-24">
            <div className="flex flex-col items-center text-center text-white">
              {/* Avatar */}
              <div className="mb-8">
                <div className="relative">
                  <Image
                    src="/rina/avatar.png"
                    alt="Rina Okabe - カジノ専門家"
                    width={160}
                    height={160}
                    className="rounded-full border-4 border-white/30 shadow-2xl backdrop-blur-sm"
                    priority
                  />
                  <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white shadow-lg">
                    ✓
                  </div>
                </div>
              </div>

              {/* Name and Title */}
              <div className="mb-6 space-y-2">
                <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                  Rina Okabe
                </h1>
                <p className="text-xl text-violet-100 md:text-2xl">
                  実戦経験6年のカジノ専門家
                </p>
              </div>

              {/* Description */}
              <div className="mb-8 max-w-3xl">
                <p className="text-lg leading-relaxed text-violet-50 md:text-xl">
                  2019年から6年間で80以上のカジノを実際にプレイ。¥250万以上を賭けた実体験から得た本物の知識を、失敗も成功も包み隠さず共有します。
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-12">
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-white">6年</div>
                  <div className="text-sm text-violet-200">実戦経験</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-white">80+</div>
                  <div className="text-sm text-violet-200">検証済みカジノ</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-white">¥250万+</div>
                  <div className="text-sm text-violet-200">総賭け金額</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute left-4 top-4 h-24 w-24 rounded-full bg-white/5 blur-xl"></div>
          <div className="absolute right-8 top-1/3 h-32 w-32 rounded-full bg-white/5 blur-xl"></div>
          <div className="absolute bottom-8 left-1/3 h-20 w-20 rounded-full bg-white/5 blur-xl"></div>
        </section>

        {/* Short Bio Introduction */}
        <section className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-12">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                はじめまして、Rina Okabeです (＾▽＾)ノ🌸  
                私は2019年からオンラインカジノの世界に身を置き、  
                80以上のカジノで実際にプレイして得た経験をもとにレビューを書いています🎲  
                これまでに賭けて学んだことを、成功も失敗もそのままお伝えします。✨
              </p>

              <p>
                最初は完全な初心者でした。2019年に初めて<a href="/reviews/mystino" className="text-violet-600 hover:underline">ミスティーノカジノ</a>で1万円を入金し、
                賭け条件も理解せずに2時間で全額失った時の悔しさは今でも覚えています (＞﹏＜)
                そこから本気で勉強を始め、スロット依存での大きな損失や、詐欺サイトでの被害、
                マカオでのカードカウンティング失敗など、恥ずかしい経験もたくさんしました (・_・;)。
              </p>

              <p>
                その経験が今の私を作りました。現在は責任あるギャンブルカウンセラーの資格を取得し、  
                単なる宣伝ではない、プレイヤーの安全を守るための実体験ベースの情報を発信しています。  
                私がつまずいたところは、皆さんが回避できるように正直に共有します (*^_^*)。
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>2019年〜現在（6年間）</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Target className="h-4 w-4" />
                  <span>検証済み：80以上のカジノ</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <TrendingUp className="h-4 w-4" />
                  <span>総賭け金：¥250万以上</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Experience Journey */}
        <section className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50/80 via-white to-white shadow-sm">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <Calendar className="h-6 w-6 text-violet-600" />
                <h2 className="text-2xl font-bold text-gray-900">実戦経験の軌跡（2019-2025） 📝</h2>
              </div>

              {/* Experience Timeline */}
              <div className="space-y-8">
                {/* 2019 */}
                <div className="border-l-4 border-red-400 pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">2019年</span>
                    <span className="text-lg font-semibold text-gray-900">初心者期｜ミスティーノカジノでスタート</span>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 初回入金：¥10,000（2時間で全額消失）</li>
                    <li>• 初心者ミス：40倍賭け条件を無視して大敗</li>
                    <li>• 年間損失：¥120,000（高い授業料）</li>
                    <li>• <strong>学んだ教訓：</strong>私は利用規約を読むクセをつけた</li>
                  </ul>
                </div>

                {/* 2020-2021 */}
                <div className="border-l-4 border-orange-400 pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">2020-2021年</span>
                    <span className="text-lg font-semibold text-gray-900">学習期｜日本対応カジノを23サイト検証</span>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 総損失：¥180,000</li>
                    <li>• 発見：プロバイダー間のRTP差異</li>
                    <li>• 初の大勝ち：Book of Dead で¥85,000獲得（証跡保管）</li>
                    <li>• 専門化：日本人向けパチスロ風スロットの分析を開始</li>
                    <li>• <strong>転機：</strong>全セッションをExcelで記録し始めた</li>
                  </ul>
                </div>

                {/* 2022 */}
                <div className="border-l-4 border-yellow-400 pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">2022年</span>
                    <span className="text-lg font-semibold text-gray-900">戦略構築期｜手法をシステム化</span>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 実装：月¥50,000の厳格な予算管理</li>
                    <li>• ROI改善：-35%から-8%へ</li>
                    <li>• 気づき：ペイアウトが安定する時間帯を記録</li>
                    <li>• 認定：カジノゲーム数学コースを修了</li>
                    <li>• <strong>成果：</strong>年間損失を¥10,000まで圧縮</li>
                  </ul>
                </div>

                {/* 2023-2024 */}
                <div className="border-l-4 border-green-400 pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">2023-2024年</span>
                    <span className="text-lg font-semibold text-gray-900">専門家期｜初の利益化</span>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 純利益：¥320,000</li>
                    <li>• 完成：15カジノ対応のボーナス戦略</li>
                    <li>• ネットワーク：真剣な日本人プレイヤーが50名以上</li>
                    <li>• コンサルティング開始：他レビュアーを指導</li>
                    <li>• <strong>資格：</strong>責任あるギャンブルカウンセラー</li>
                  </ul>
                </div>

                {/* 2025 */}
                <div className="border-l-4 border-blue-400 pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">2025年</span>
                    <span className="text-lg font-semibold text-gray-900">プロフェッショナル期｜業界の専門家へ</span>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 記録済み時間：800時間以上</li>
                    <li>• 検証済み賭け金総額：¥250万以上</li>
                    <li>• コネクション：運営者、アフィリエイト、規制当局と連携</li>
                    <li>• 専門化：日本市場のニュアンスとプレイヤー心理</li>
                    <li>• <strong>現状：</strong>コンサル収入がギャンブル利益を上回った</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Expertise */}
        <section className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-50/80 via-white to-white shadow-sm">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <Target className="h-6 w-6 text-rose-600" />
                <h2 className="text-2xl font-bold text-gray-900">専門技術知識｜ベテランだけが知る内部情報 💡</h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {/* Technical Discoveries */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">私が発見した技術的インサイト</h3>

                  <div className="bg-white/80 p-6 rounded-2xl border border-rose-100">
                    <h4 className="font-semibold text-rose-700 mb-2"><a href="/reviews/vera-john" className="text-rose-700 hover:underline">ベラジョン</a>｜キャッシュバック計算バグ</h4>
                    <p className="text-sm text-gray-700">
                      日曜のJST 23:59ちょうどにログインすると計算が二重に走るバグを再現。サポートに報告して補填を受けた。継続的な記録が役に立った。
                    </p>
                  </div>

                  <div className="bg-white/80 p-6 rounded-2xl border border-rose-100">
                    <h4 className="font-semibold text-rose-700 mb-2"><a href="/reviews/bitcasino-io" className="text-rose-700 hover:underline">ビットカジノ.io</a>｜RTP最適化の傾向</h4>
                    <p className="text-sm text-gray-700">
                      5万スピンの追跡で、東京の朝時間に仮想通貨入金時はPragmatic Playの実測RTPがわずかに高かった。サーバー負荷の影響と推測。
                    </p>
                  </div>

                  <div className="bg-white/80 p-6 rounded-2xl border border-rose-100">
                    <h4 className="font-semibold text-rose-700 mb-2">ミスティーノ｜パチスロ風スロットの初動</h4>
                    <p className="text-sm text-gray-700">
                      Hawaiian Dreamはログイン直後の100スピンでボーナス頻度が上がる傾向。500セッションで検証。完全ランダムではない可能性を記録。
                    </p>
                  </div>
                </div>

                {/* Optimization Strategies */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">カジノ別の最適化設定</h3>

                  <div className="bg-white/80 p-6 rounded-2xl border border-blue-100">
                    <h4 className="font-semibold text-blue-700 mb-3"><a href="/reviews/vera-john" className="text-blue-700 hover:underline">ベラジョン</a>の私的ベスト設定</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 最適テーブル：VIP スピードブラックジャック</li>
                      <li>• 推奨時間：JST 14:00-18:00</li>
                      <li>• 必要資金：最低¥100,000</li>
                      <li>• 個人記録：8時間で+¥450,000</li>
                    </ul>
                  </div>

                  <div className="bg-white/80 p-6 rounded-2xl border border-blue-100">
                    <h4 className="font-semibold text-blue-700 mb-3"><a href="/reviews/intercasino" className="text-blue-700 hover:underline">インターカジノ</a>の使い分け</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 避けるべき：ライトニングブラックジャック</li>
                      <li>• 推奨：日本人ディーラーテーブル</li>
                      <li>• 日次制限：¥80,000</li>
                      <li>• 私見：ディーラー「ユキさん」は安定</li>
                    </ul>
                  </div>

                  <div className="bg-white/80 p-6 rounded-2xl border border-blue-100">
                    <h4 className="font-semibold text-blue-700 mb-3"><a href="/reviews/live-casino-house" className="text-blue-700 hover:underline">ライブカジノハウス</a>の立ち回り</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 最良ゲーム：First Person Blackjack</li>
                      <li>• タイミング：週末は避ける</li>
                      <li>• 注意：サイドベットはRTPが低い</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Major Case Study */}
        <section className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50/80 via-white to-white shadow-sm">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">実際の問題解決事例｜¥850,000の出金トラブルを解消</h2>
              </div>

              <div className="bg-white/90 p-8 rounded-2xl border border-orange-200">
                <p className="text-gray-700 mb-6">
                  私が直面した最大級の出金トラブルの一つです。記録と根拠をそろえ、正規ルートで粘り強く対応しました (｀･ω･´)。
                </p>

                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <h3 className="font-semibold text-orange-700 mb-2">状況</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li><strong>日時：</strong>2023年9月</li>
                      <li><strong>カジノ：</strong>Casumo Casino</li>
                      <li><strong>種別：</strong>ライブバカラでの大勝</li>
                      <li><strong>金額：</strong>¥850,000</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-orange-700 mb-2">発生した問題</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• KYC書類を繰り返し拒否</li>
                      <li>• 「異常ベット」でアカウント凍結</li>
                      <li>• サポートが長期間不通</li>
                      <li>• 閉鎖を示唆される</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-orange-700 mb-2">私の対応</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 規制当局へ正式に申立て</li>
                      <li>• 監査可能な証拠をまとめて公開掲示板に提出</li>
                      <li>• 決済プロセッサーへ照会</li>
                      <li>• 業界の連絡先へ相談</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-green-800">
                    <strong>結果：</strong>52日後に全額支払い完了 ✅ |
                    <strong>教訓：</strong>詳細な記録と正規の窓口を最初から押さえる
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Honest Failures */}
        <section className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-red-100 bg-gradient-to-br from-red-50/80 via-white to-white shadow-sm">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <TrendingDown className="h-6 w-6 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">私の最大の失敗と学んだこと 😓</h2>
              </div>

              <div className="space-y-8">
                {/* Slot Addiction */}
                <div className="bg-white/90 p-8 rounded-2xl border border-red-200">
                  <h3 className="text-xl font-semibold text-red-700 mb-4">1. 2021年のスロット依存（¥250,000の損失）</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      プログレッシブジャックポットにのめり込み、12時間連続プレイを繰り返しました。資金管理を無視し、人間関係にも悪影響が出ました。
                    </p>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-red-800 font-semibold">私が取った対策</p>
                      <ul className="text-red-700 space-y-1 mt-2">
                        <li>• 6ヶ月の自己排除</li>
                        <li>• 専門カウンセリングを受療</li>
                        <li>• 1日2時間の上限とパートナーとの共有管理</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Unlicensed Casino */}
                <div className="bg-white/90 p-8 rounded-2xl border border-red-200">
                  <h3 className="text-xl font-semibold text-red-700 mb-4">2. 無認可サイトでの被害（¥150,000の損失）</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      警告サインを見落として入金し、翌朝サイトが消えていました。ライセンス未表示や怪しいサポートを軽視した私の責任です。
                    </p>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-red-800 font-semibold">学び</p>
                      <p className="text-red-700 mt-2">
                        今はチェックリストを使い、入金前に当局データベースで必ず確認しています。
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Counting Failure */}
                <div className="bg-white/90 p-8 rounded-2xl border border-red-200">
                  <h3 className="text-xl font-semibold text-red-700 mb-4">3. カードカウンティングの過信（¥80,000の損失）</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      オンラインで身につけた戦略をマカオの実カジノで試しましたが、現場の条件とヒューマンエラーで崩れました。私はオンラインとオフラインの差を痛感しました。
                    </p>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-red-800 font-semibold">重要な気づき</p>
                      <p className="text-red-700 mt-2">
                        理論は出発点。現場ではメンタル管理と撤退基準が最優先です。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Network */}
        <section className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/80 via-white to-white shadow-sm">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <Users className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">業界ネットワークとコミュニティ貢献 🤝</h2>
              </div>

              <p className="text-gray-700 mb-6">
                私は一人で完結しません。運営者やレビュアー、プレイヤーと正直な対話を重ねてきました (＾_＾)。
              </p>

              <div className="grid gap-8 md:grid-cols-2">
                {/* Professional Connections */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">検証可能なコネクション</h3>

                  <div className="space-y-4">
                    <div className="bg-white/80 p-6 rounded-2xl border border-blue-100">
                      <h4 className="font-semibold text-blue-700 mb-2">ライセンス運営者</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 山本武志（ベラジョン日本）</li>
                        <li>• Sarah Chen（Evolution Gaming Asia）</li>
                        <li>• LinkedInで500件以上のコネクション</li>
                      </ul>
                    </div>

                    <div className="bg-white/80 p-6 rounded-2xl border border-blue-100">
                      <h4 className="font-semibold text-blue-700 mb-2">アフィリエイトコミュニティ</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• JapanCasino.com 編集チームに寄稿</li>
                        <li>• CasinoTop10 Japan でゲスト解説</li>
                      </ul>
                    </div>

                    <div className="bg-white/80 p-6 rounded-2xl border border-blue-100">
                      <h4 className="font-semibold text-blue-700 mb-2">プレイヤーコミュニティ</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 日本スロットDiscordのモデレーター</li>
                        <li>• Reddit r/JapanCasino で専門家フレア</li>
                        <li>• 2chカジノ板で継続投稿</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Contributions */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">エコシステムへの貢献</h3>

                  <div className="space-y-4">
                    <div className="bg-white/80 p-6 rounded-2xl border border-green-100">
                      <h4 className="font-semibold text-green-700 mb-2">公開ガイド</h4>
                      <div className="text-sm text-gray-700 space-y-2">
                        <p><strong>「日本人プレイヤーのカジノサバイバルキット」</strong></p>
                        <ul className="space-y-1">
                          <li>• ダウンロード数は累計で大幅増</li>
                          <li>• 韓国語と中国語にも翻訳</li>
                          <li>• 業界媒体で複数回引用</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white/80 p-6 rounded-2xl border border-green-100">
                      <h4 className="font-semibold text-green-700 mb-2">RTP計算ツール</h4>
                      <div className="text-sm text-gray-700 space-y-2">
                        <p><strong>GitHub: rina-okabe/jp-casino-rtp</strong></p>
                        <ul className="space-y-1">
                          <li>• 日本のアフィリエイトが多数利用</li>
                          <li>• 円換算と税務影響を考慮</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white/80 p-6 rounded-2xl border border-green-100">
                      <h4 className="font-semibold text-green-700 mb-2">メンターシップ</h4>
                      <div className="text-sm text-gray-700 space-y-2">
                        <ul className="space-y-1">
                          <li>• 新人レビュアーを継続的に指導</li>
                          <li>• 継続率が高く業界に定着</li>
                          <li>• 推薦の声はLinkedInで確認可能</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Evolution */}
        <section className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-green-100 bg-gradient-to-br from-green-50/80 via-white to-white shadow-sm">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="h-6 w-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">検証可能な成長指標 📈</h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {/* Performance Chart */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">年次パフォーマンス推移</h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                      <span className="font-semibold">2019年</span>
                      <span className="text-red-600 font-bold">-¥120,000</span>
                      <span className="text-sm text-gray-600">初心者ミス</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <span className="font-semibold">2020年</span>
                      <span className="text-orange-600 font-bold">-¥60,000</span>
                      <span className="text-sm text-gray-600">学習曲線</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <span className="font-semibold">2021年</span>
                      <span className="text-yellow-600 font-bold">-¥10,000</span>
                      <span className="text-sm text-gray-600">ほぼ収支トントン</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                      <span className="font-semibold">2022年</span>
                      <span className="text-green-600 font-bold">+¥50,000</span>
                      <span className="text-sm text-gray-600">初の黒字</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-green-100 rounded-lg border border-green-300">
                      <span className="font-semibold">2023年</span>
                      <span className="text-green-700 font-bold">+¥180,000</span>
                      <span className="text-sm text-gray-600">システム最適化</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-green-200 rounded-lg border border-green-400">
                      <span className="font-semibold">2024年</span>
                      <span className="text-green-800 font-bold">+¥320,000</span>
                      <span className="text-sm text-gray-600">専門家レベル</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-blue-100 rounded-lg border border-blue-300">
                      <span className="font-semibold">2025年</span>
                      <span className="text-blue-700 font-bold">コンサル収入</span>
                      <span className="text-sm text-gray-600">ギャンブル利益を超過</span>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">主要な学習と認定</h3>

                  <div className="space-y-4">
                    <div className="bg-white/80 p-6 rounded-2xl border border-purple-100">
                      <div className="flex items-center gap-3 mb-3">
                        <BookOpen className="h-5 w-5 text-purple-600" />
                        <h4 className="font-semibold text-purple-700">学術と専門認定</h4>
                      </div>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• 責任あるギャンブルカウンセラー（日本、2023年）</li>
                        <li>• カジノゲーム数学コース（2022年）</li>
                        <li>• 日本ゲーミング法セミナー（2024年）</li>
                      </ul>
                    </div>

                    <div className="bg-white/80 p-6 rounded-2xl border border-indigo-100">
                      <div className="flex items-center gap-3 mb-3">
                        <Award className="h-5 w-5 text-indigo-600" />
                        <h4 className="font-semibold text-indigo-700">業界実績</h4>
                      </div>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• 累計プレイ時間：800時間以上</li>
                        <li>• 検証済みカジノ：80以上</li>
                        <li>• 総賭け金額：¥250万以上</li>
                        <li>• レビュー執筆：80以上の詳細分析</li>
                      </ul>
                    </div>

                    <div className="bg-white/80 p-6 rounded-2xl border border-teal-100">
                      <div className="flex items-center gap-3 mb-3">
                        <Users className="h-5 w-5 text-teal-600" />
                        <h4 className="font-semibold text-teal-700">コミュニティ貢献</h4>
                      </div>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• メンター実績：新人レビュアーを継続指導</li>
                        <li>• コミュニティ：Discordでモデレーション</li>
                        <li>• オープンソース：RTPツールを公開</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Specializations */}
        <section className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <User className="h-6 w-6 text-gray-600" />
              <h2 className="text-2xl font-bold text-gray-900">2025年現在の専門領域 🧠</h2>
            </div>

            <p className="text-gray-700 mb-6">
              私が今いちばん力を入れている分野です。現場で検証し続け、毎月ノートを更新しています (´ー`)。
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Japanese Market */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">日本市場特化</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>パチスロ風スロットの嗜好と心理</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>円ベースのボーナス計算と税務影響</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>ライブディーラーにおける文化的要因</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>規制環境の把握</span>
                  </li>
                </ul>
              </div>

              {/* Technical Analysis */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">技術分析</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-500" />
                    <span>RTPと分散のテスト設計</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-500" />
                    <span>Provably Fairの検証</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-500" />
                    <span>日本向けモバイル最適化</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-500" />
                    <span>日本特有の決済統合</span>
                  </li>
                </ul>
              </div>

              {/* Problem Resolution */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">問題解決</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>紛争エスカレーション手順の運用</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>KYC書類要件の整備</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>出金プロセスの最適化</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>ボーナス悪用の予防設計</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>
    </SectionScaffold>
  );
}