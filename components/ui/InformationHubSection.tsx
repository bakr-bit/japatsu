import Link from "next/link";
import SectionTitle from "./SectionTitle";
import QaBlock from "./QaBlock";
import { ShieldCheck, FileText, Users, Workflow, Lock, CreditCard, ScanLine, Landmark, HelpCircle, Bitcoin, Wallet, Sigma, Newspaper } from "lucide-react";
import AuthorBadge from "./AuthorBadge";

export default function InformationHubSection({ fullWidth = false }: { fullWidth?: boolean }) {
  return (
    <section className="bg-white">
      <div className={`${fullWidth ? "w-full max-w-none" : "container mx-auto"} px-4 py-10 space-y-10`}>
        <SectionTitle subtitle="インフォメーション" title="Information Center" />

        {/* Part 1: Core Principles & Methodology */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-red-600" /> 私たちの理念と方法論</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InfoCard
              icon={<FileText className="h-5 w-5 text-red-600" />}
              title="ミッション＆編集方針"
              items={[
                "オンラインゲーミングの教育的リソース",
                "各地域の法令遵守はユーザーの責任",
                "客観的・データ重視・責任あるギャンブル",
              ]}
              cta={{ href: "/about", label: "ポリシーを見る" }}
            />
            <InfoCard
              icon={<Users className="h-5 w-5 text-red-600" />}
              title="エキスパート紹介"
              items={[
                "国際経験・分析的バックグラウンド",
                "サイバーセキュリティ・FinTech・ゲーム数学",
              ]}
              cta={{ href: "/authors", label: "著者プロフィール" }}
            />
            <InfoCard
              icon={<Workflow className="h-5 w-5 text-red-600" />}
              title="レビュー手法（検証プロセス）"
              items={[
                "登録～プレイ～出金まで実測",
                "セキュリティ・匿名性・秘匿性の評価",
                "支払い速度・規約・UX など総合評価",
              ]}
              cta={{ href: "/reviews", label: "評価基準" }}
            />
            <InfoCard
              icon={<HelpCircle className="h-5 w-5 text-red-600" />}
              title="ブラックリスト（要注意）"
              items={[
                "無許可運営・脆弱性・不正事例",
                "プレイヤー保護ルールの不履行",
              ]}
              cta={{ href: "/info/blacklisted-casinos", label: "ブラックリスト" }}
            />
          </div>
          {/* Part 1 detail */}
          <div className="bg-white rounded-lg border p-5 text-gray-700 leading-relaxed">
            <AuthorBadge name="編集部" role="編集方針・著者" className="mb-3" />
            <p className="mb-3">
              私たちは国際的な読者に向けて、オンラインゲーミング産業を客観的に解説する教育的メディアです。法令遵守はユーザーの居住国・地域ごとに異なるため、各自で最新の法的要件を確認し、自己責任での利用をお願いします。
            </p>
            <p className="mb-3">
              すべてのコンテンツはデータドリブンで、編集部の一貫した基準と二重チェック体制に基づき作成。実際の登録～入金～プレイ～出金までの挙動を検証し、透明性の高い評価を行います。特に「セキュリティ・匿名性・秘匿性」の評価に重点を置き、<strong>暗号化（SSL/TLS）</strong>、<strong>プライバシーポリシー</strong>、<strong>支払い手段の秘匿性・速度</strong>、<strong>プライバシーツールのサポート</strong>を厳密に確認します。
            </p>
            <p>
              また、悪質な運営や無許可事業者の情報はブラックリストとして定期的に更新し、ユーザー保護を最優先に発信します。
            </p>
          </div>
        </div>

        {/* Part 2: Essential Guides for Trust & Safety */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-red-600" /> 信頼＆安全のための必読ガイド</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InfoCard
              icon={<Lock className="h-5 w-5 text-red-600" />}
              title="デジタルセキュリティ＆匿名性"
              items={["VPN の基礎と選び方", "安全な支払いの仕組み", "危険サイトの見分け方"]}
              cta={{ href: "/guides", label: "ガイド一覧" }}
            />
            <InfoCard
              icon={<Landmark className="h-5 w-5 text-red-600" />}
              title="国際ライセンスの理解"
              items={["MGA・UKGC・Curaçao など", "プレイヤー保護と監督体制"]}
              cta={{ href: "/info/casino-license", label: "ライセンス解説" }}
            />
            <InfoCard
              icon={<ScanLine className="h-5 w-5 text-red-600" />}
              title="ゲームの公正性（RNG/RTP）"
              items={["RNG・RTP の基礎", "eCOGRA・iTech Labs 監査"]}
              cta={{ href: "/info/10-gambling-innovations", label: "詳しく読む" }}
            />
            <InfoCard
              icon={<HelpCircle className="h-5 w-5 text-red-600" />}
              title="責任あるギャンブル"
              items={["リミット設定・自己排除", "支援団体リンク"]}
              cta={{ href: "/info/responsible-gambling", label: "サポート情報" }}
            />
          </div>
          {/* Part 2 detail */}
          <div className="bg-white rounded-lg border p-5 text-gray-700 leading-relaxed">
            <AuthorBadge name="専門家" role="監修" className="mb-3" />
            <p className="mb-3">
              センシティブな環境にいるユーザーほど、実践的な安全対策が重要です。本セクションでは、<strong>VPN の基本と選定ポイント</strong>、<strong>匿名性の高い決済手段の仕組み</strong>、<strong>危険サイトのチェックリスト（SSLの有無・ライセンス表記・不当な規約など）</strong>をわかりやすく解説。さらに主要ライセンスの役割や監督範囲、RNG・RTPの監査プロセスまで、基礎から実務レベルの知識を整理しました。
            </p>
            <p>
              ユーザーが自らリスクを見極め、健全なプレイ環境を選択できるよう、<strong>責任あるギャンブル</strong>の考え方と世界的な支援機関の情報も併せて提供します。
            </p>
          </div>
        </div>

        {/* Part 3: Advanced Knowledge & Industry Insights */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2"><FileText className="h-5 w-5 text-red-600" /> アドバンスト知識＆業界分析</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard
              icon={<Bitcoin className="h-5 w-5 text-red-600" />}
              title="暗号資産ハブ（入出金）"
              items={["BTC/ETH/USDT の使い方", "ウォレットの安全管理", "入金・出金の流れ"]}
              cta={{ href: "/crypto", label: "クリプトガイド" }}
            />
            <InfoCard
              icon={<Wallet className="h-5 w-5 text-red-600" />}
              title="Eウォレット徹底比較"
              items={["手数料・速度・KYC", "主要サービスの長所短所"]}
              cta={{ href: "/payment", label: "入出金特集" }}
            />
            <InfoCard
              icon={<Sigma className="h-5 w-5 text-red-600" />}
              title="上級戦略＆数学"
              items={["オッズ・ボラティリティ", "ブラックジャック/ポーカー戦略"]}
              cta={{ href: "/guides", label: "戦略ガイド" }}
            />
            <InfoCard
              icon={<Newspaper className="h-5 w-5 text-red-600" />}
              title="グローバル iGaming ニュース"
              items={["規制・技術・市場動向", "ライブディーラーの革新"]}
              cta={{ href: "/news", label: "ニュース＆分析" }}
              className="md:col-span-2 lg:col-span-1"
            />
          </div>
          {/* Part 3 detail */}
          <div className="bg-white rounded-lg border p-5 text-gray-700 leading-relaxed">
            <AuthorBadge name="編集部 × 専門家" role="共同執筆" className="mb-3" />
            <p className="mb-3">
              初心者向けの基礎情報にとどまらず、<strong>暗号資産の安全な取り扱い</strong>や<strong>eウォレットの手数料・KYC比較</strong>、<strong>ゲーム数学に基づく最適戦略</strong>まで踏み込むことで、より高度なリテラシー醸成を目指します。これにより、ユーザーは手段・コスト・リスクを定量的に比較し、効率的かつ安全な選択が可能になります。
            </p>
            <p>
              さらに、国際規制や技術革新のニュースを継続的に分析し、<strong>市場動向・規制の影響・新技術の実装</strong>をタイムリーにフォロー。単なるレビューサイトを超え、意思決定に直結する「実務的な知見」を提供します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  title,
  items,
  icon,
  cta,
  className = "",
}: {
  title: string;
  items: string[];
  icon?: React.ReactNode;
  cta?: { href: string; label: string };
  className?: string;
}) {
  return (
    <div className={`bg-white rounded-lg border p-5 shadow-sm ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h4 className="font-bold text-gray-900">{title}</h4>
      </div>
      <ul className="space-y-2 text-gray-700">
        {items.map((t, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
      {cta && (
        <div className="mt-3">
          <Link href={cta.href} className="text-red-600 hover:text-gray-700 font-semibold text-sm">
            {cta.label} →
          </Link>
        </div>
      )}
    </div>
  );
}
