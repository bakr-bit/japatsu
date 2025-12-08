import type { Metadata } from "next";
import Image from "next/image";
import SectionScaffold from "@/components/shell/SectionScaffold";
import {
  MapPin,
  Calendar,
  Users,
  Award,
  BarChart3,
  Brain,
  Shield,
  Target,
  Code,
  Globe,
  CheckCircle,
  AlertTriangle,
  Network,
  Database,
  Briefcase,
  TrendingUp,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hiroshi - データアナリスト＆ゲーミング戦略専門家 | CasinoTsu",
  description: "オンラインカジノ業界におけるデータサイエンスの第一人者。15年以上の経験を持つHiroshiが、統計学とゲーム数学を駆使した分析と戦略を解説します。",
  keywords: "Hiroshi, データアナリスト, ゲーミング戦略, オンラインカジノ, 統計学, ゲーム数学, データサイエンス, RTP分析",
  authors: [{ name: "Hiroshi" }],
  openGraph: {
    title: "Hiroshi - データアナリスト＆ゲーミング戦略専門家",
    description: "オンラインカジノ業界で15年以上の経験を持つデータサイエンスの第一人者。統計学とゲーム数学を駆使した分析と戦略を解説。",
    type: "profile",
    siteName: "CasinoTsu",
    locale: "ja_JP",
  },
  alternates: {
    canonical: "/authors/hiroshi",
  },
};

export default function HiroshiPage() {
  return (
    <SectionScaffold title="Hiroshi - データアナリスト＆ゲーミング戦略専門家">
      <div className="space-y-12">
        {/* Custom Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-sky-600 to-cyan-700">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative mx-auto max-w-6xl px-8 py-16 md:py-24">
            <div className="flex flex-col items-center text-center text-white">
              {/* Avatar */}
              <div className="mb-8">
                <div className="relative">
                  <Image
                    src="/hiroshi/hiroshi.png"
                    alt="Hiroshi - データアナリスト"
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
                  Hiroshi
                </h1>
                <p className="text-xl text-blue-100 md:text-2xl">
                  データアナリスト & ゲーミング戦略専門家
                </p>
              </div>

              {/* Description */}
              <div className="mb-8 max-w-3xl">
                <p className="text-lg leading-relaxed text-blue-50 md:text-xl">
                  データサイエンス × ゲーミング戦略の専門家として、統計学的アプローチでオンラインカジノ業界を分析。確率論とリスク管理の観点から、価値ある洞察を提供します。
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-12">
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-white">15年</div>
                  <div className="text-sm text-blue-200">業界経験</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-white">20社+</div>
                  <div className="text-sm text-blue-200">年間プロジェクト</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-white">97.2%</div>
                  <div className="text-sm text-blue-200">予測モデル精度</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-4 top-4 h-24 w-24 rounded-full bg-white/5 blur-xl"></div>
          <div className="absolute right-8 top-1/3 h-32 w-32 rounded-full bg-white/5 blur-xl"></div>
          <div className="absolute bottom-8 left-1/3 h-20 w-20 rounded-full bg-white/5 blur-xl"></div>
        </section>

        {/* Profile Overview */}
        <section className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-4 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                        データサイエンティストとして15年間、金融・テクノロジー・ゲーミング業界で活動。東京大学数学科卒業後、外資系投資銀行でキャリアをスタートし、現在はオンラインゲーミング業界の統計分析とリスク評価に特化した独立コンサルタントとして活動しています。
                    </p>
                    <p>
                        私のモットーは「数学的に正確な情報提供」です。確率論、統計学、機械学習を駆使してゲームの公平性検証、RTP分析、プレイヤー行動予測モデルの構築を手がけ、感情論ではなくデータドリブンな分析を重視しています。
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="bg-blue-50/80 rounded-xl p-4 border border-blue-100">
                        <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-blue-600" /> 拠点
                        </h3>
                        <p className="text-sm text-gray-700">東京・シンガポール</p>
                    </div>
                    <div className="bg-blue-50/80 rounded-xl p-4 border border-blue-100">
                        <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-blue-600" /> 経験年数
                        </h3>
                        <p className="text-sm text-gray-700">15年（ゲーミング特化: 8年）</p>
                    </div>
                    <div className="bg-blue-50/80 rounded-xl p-4 border border-blue-100">
                        <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <Award className="h-4 w-4 text-blue-600" /> 専門資格
                        </h3>
                        <p className="text-sm text-gray-700">統計検定1級, CFA, FRM</p>
                    </div>
                </div>
            </div>
          </div>
        </section>
        
        {/* Experience Timeline */}
        <section className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/80 via-white to-white shadow-sm">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">キャリア・経歴（15年間） 📝</h2>
              </div>
              <div className="space-y-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">2020年 - 現在</span>
                    <span className="text-lg font-semibold text-gray-900">独立データコンサルタント</span>
                  </div>
                  <p className="text-gray-700">
                    オンラインカジノ運営会社向けの統計分析、リスク評価、RNG検証を担当。年間20社以上のプロジェクトを手がけ、業界標準の分析手法確立に貢献。
                  </p>
                </div>
                <div className="border-l-4 border-gray-400 pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">2016年 - 2020年</span>
                    <span className="text-lg font-semibold text-gray-900">シリコンバレー・フィンテック企業</span>
                  </div>
                  <p className="text-gray-700">
                    シニアデータサイエンティストとして不正検知アルゴリズムを開発。機械学習モデルで詐欺取引検知率を40%向上させた経験が、現在のセキュリティ分析に活かされている。
                  </p>
                </div>
                <div className="border-l-4 border-gray-400 pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">2009年 - 2016年</span>
                    <span className="text-lg font-semibold text-gray-900">外資系投資銀行</span>
                  </div>
                  <p className="text-gray-700">
                    クォンツアナリストとしてデリバティブ商品の価格モデルやリスク管理システムを構築。確率論と統計学の深い知識がゲーミング分野での分析力の基盤となっている。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Technical Expertise */}
        <section className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50/80 via-white to-white shadow-sm">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <Target className="h-6 w-6 text-sky-600" />
                <h2 className="text-2xl font-bold text-gray-900">技術的専門分野 💡</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: BarChart3, title: "統計分析・確率論", items: ["ベイズ統計学", "モンテカルロ法", "時系列分析", "A/Bテスト設計"] },
                  { icon: Brain, title: "機械学習・AI", items: ["プレイヤー行動予測", "異常検知・不正検出", "クラスタリング", "深層学習"] },
                  { icon: Shield, title: "ゲーミング数学", items: ["RTP計算・検証", "RNG統計的検定", "ボラティリティ分析", "ゲーム公平性監査"] },
                  { icon: Target, title: "リスク管理", items: ["VaRモデリング", "ストレステスト", "信用リスク評価", "規制コンプライアンス"] },
                  { icon: Code, title: "プログラミング", items: ["Python (Pandas, Scikit-learn)", "R", "SQL", "AWS・GCP"] },
                  { icon: Globe, title: "業界知識", items: ["国際ゲーミング規制", "第三者監査機関", "暗号資産技術", "責任あるギャンブル"] }
                ].map((skill, index) => (
                  <div key={index} className="bg-white/80 p-6 rounded-2xl border border-sky-100">
                    <div className="flex items-center gap-3 mb-3">
                        <skill.icon className="h-5 w-5 text-sky-600" />
                        <h3 className="font-semibold text-gray-900">{skill.title}</h3>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                      {skill.items.map(item => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-green-100 bg-gradient-to-br from-green-50/80 via-white to-white shadow-sm">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <FileText className="h-6 w-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">主要分析事例・プロジェクト</h2>
              </div>
              <div className="space-y-8">
                <div className="bg-white/90 p-8 rounded-2xl border border-green-200">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">大手カジノ運営会社のRTP検証プロジェクト</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>課題:</strong> 規制当局から「公表RTPと実際の支払い率に乖離がある」との指摘を受けた運営会社の緊急監査。</p>
                    <p><strong>解決策:</strong> 1億回以上のスピンデータを統計的に分析し、特定ゲームの設定ミスによる0.3%のRTP低下を発見。</p>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-green-800"><strong className="font-semibold">成果:</strong> 迅速な問題特定により規制当局との関係を回復。内部監査システムを改善し、業界標準を上回る透明性を実現。</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/90 p-8 rounded-2xl border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">プレイヤー行動予測モデルの構築</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>課題:</strong> 問題ギャンブラーの早期発見とプレイヤー保護システムの構築。</p>
                    <p><strong>解決策:</strong> 機械学習を用い、プレイパターンからリスクスコアを算出する高精度な予測モデル（精度85%）を開発。</p>
                     <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-blue-800"><strong className="font-semibold">成果:</strong> 問題ギャンブラーの検出率を60%向上。プレイヤー満足度と責任あるギャンブル推進を両立。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning from Failures */}
        <section className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50/80 via-white to-white shadow-sm">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">失敗から学んだ教訓 😓</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-white/90 p-6 rounded-2xl border border-red-200">
                  <h3 className="text-lg font-semibold text-red-700 mb-2">初期の過信による分析ミス（2017年）</h3>
                  <p className="text-sm text-gray-700">
                    「統計的に完璧」だと確信したモデルが実運用で性能を発揮せず、クライアントに損失を与えた。原因は「統計的優位性」と「実用的優位性」の混同。以降、実環境でのバックテストを徹底しています。
                  </p>
                </div>
                <div className="bg-white/90 p-6 rounded-2xl border border-red-200">
                  <h3 className="text-lg font-semibold text-red-700 mb-2">文化的要因の軽視（2019年）</h3>
                  <p className="text-sm text-gray-700">
                    アジア市場分析で数値データのみに頼り、文化的・感情的要因を軽視した結果、予測が大きく外れた。現在は必ず現地チームとの共同分析を実施しています。
                  </p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">学んだ原則: 「データドリブン」≠「データオンリー」</h3>
                  <p className="text-sm text-yellow-900">
                    数学的正確性を保ちつつ、人間の感情や文化などの「定性的要因」も分析に組み込むバランス感覚が、真に価値ある洞察を生むと学びました。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Professional Network */}
        <section className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-purple-100 bg-gradient-to-br from-purple-50/80 via-white to-white shadow-sm">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <Network className="h-6 w-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">業界ネットワークと協力関係 🤝</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/80 p-6 rounded-2xl border border-purple-100">
                    <h3 className="font-semibold text-purple-700 mb-3">規制当局・監査機関</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Malta Gaming Authority (MGA):</strong> 技術諮問委員</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>eCOGRA:</strong> 外部統計コンサルタント</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>iTech Labs:</strong> RNG検証プロジェクト協力</span></li>
                    </ul>
                </div>
                <div className="bg-white/80 p-6 rounded-2xl border border-purple-100">
                    <h3 className="font-semibold text-purple-700 mb-3">業界専門家・研究機関</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>MIT ゲーム理論研究所:</strong> 共同研究</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>欧州ギャンブル研究コンソーシアム:</strong> 理事</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>日本統計学会ギャンブル分科会:</strong> 委員長</span></li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Performance & Focus */}
        <section className="mx-auto max-w-6xl">
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm md:p-12">
                <div className="flex items-center gap-3 mb-8">
                    <TrendingUp className="h-6 w-6 text-gray-600" />
                    <h2 className="text-2xl font-bold text-gray-900">2025年現在のパフォーマンスと専門領域 🧠</h2>
                </div>
                <div className="grid lg:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">パフォーマンス指標（2024年）</h3>
                        <div className="grid grid-cols-2 gap-4">
                             <div className="text-center bg-blue-50 rounded-lg p-4 border border-blue-100">
                                <div className="text-2xl font-bold text-blue-600">97.2%</div>
                                <div className="text-xs text-gray-600 mt-1">予測精度 (行動)</div>
                            </div>
                            <div className="text-center bg-green-50 rounded-lg p-4 border border-green-100">
                                <div className="text-2xl font-bold text-green-600">24</div>
                                <div className="text-xs text-gray-600 mt-1">年間プロジェクト数</div>
                            </div>
                            <div className="text-center bg-purple-50 rounded-lg p-4 border border-purple-100">
                                <div className="text-2xl font-bold text-purple-600">15億+</div>
                                <div className="text-xs text-gray-600 mt-1">分析取引数</div>
                            </div>
                            <div className="text-center bg-orange-50 rounded-lg p-4 border border-orange-100">
                                <div className="text-2xl font-bold text-orange-600">8社</div>
                                <div className="text-xs text-gray-600 mt-1">長期契約クライアント</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">現在の取り組み</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" /><span><strong>AI・機械学習の応用:</strong> 生成AIを活用したプレイヤー体験最適化</span></li>
                            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-500" /><span><strong>責任あるギャンブル技術:</strong> 予防的介入アルゴリズムの研究開発</span></li>
                            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-500" /><span><strong>規制技術 (RegTech):</strong> 自動コンプライアンス監視システムの構築</span></li>
                            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-500" /><span><strong>ブロックチェーン透明性:</strong> 分散型乱数生成と公平性証明</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

      </div>
    </SectionScaffold>
  );
}