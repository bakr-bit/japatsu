import SectionTitle from "./SectionTitle";
import { ShieldCheck, Lock, CheckCircle2, AlertTriangle, BadgeCheck } from "lucide-react";

export default function TrustAndSafetySection({ fullWidth = false }: { fullWidth?: boolean }) {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50">
      <div className={`${fullWidth ? "w-full max-w-none" : "container mx-auto"} px-4 py-10`}>
        <SectionTitle subtitle="安心・安全" title="Trust & Safety" />

        {/* Top badges */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Badge title="ライセンス取得" icon={<BadgeCheck className="h-5 w-5" />} />
          <Badge title="通信暗号化" icon={<Lock className="h-5 w-5" />} />
          <Badge title="責任あるプレイ" icon={<ShieldCheck className="h-5 w-5" />} />
        </div>

        {/* Feature cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="暗号化とデータ保護"
            icon={<Lock className="h-6 w-6 text-red-600" />}
            items={["SSL/TLS による通信の暗号化", "個人情報の安全な取り扱い"]}
          />
          <Card
            title="公平性の監査"
            icon={<CheckCircle2 className="h-6 w-6 text-red-600" />}
            items={["RNG（乱数生成器）の認証", "第三者機関による定期監査"]}
          />
          <Card
            title="プレイヤー保護"
            icon={<ShieldCheck className="h-6 w-6 text-red-600" />}
            items={["自己排除・入金制限ツール", "24時間サポート"]}
          />
        </div>

        {/* Licensing + more info */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4 text-gray-700 leading-relaxed bg-white rounded-lg border p-5">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-red-600" /> ライセンス・認証機関
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-red-600">•</span><span>eCOGRA / iTech Labs / GLI / BMM Testlabs</span></li>
              <li className="flex items-start gap-2"><span className="text-red-600">•</span><span>英国GC / マルタMGA などの規制当局</span></li>
            </ul>
            <p>
              詳しくは <a href="/info/responsible-gambling" className="text-red-600 hover:text-gray-600 font-semibold">責任あるギャンブル</a> をご確認ください。
            </p>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed bg-white rounded-lg border p-5">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" /> 免責事項
            </h3>
            <p>
              当サイトは情報提供のみを目的としています。ギャンブルは節度を持ち、自己責任で行ってください。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 bg-white border rounded-full px-3 py-2 shadow-sm">
      <span className="text-red-600">{icon}</span>
      <span className="text-sm font-semibold text-gray-800">{title}</span>
    </div>
  );
}

function Card({ title, icon, items }: { title: string; icon: React.ReactNode; items: string[] }) {
  return (
    <div className="bg-white rounded-lg border p-5 shadow-sm">
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
    </div>
  );
}
