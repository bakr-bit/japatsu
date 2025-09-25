import { InfoSection, InfoBox, BulletList } from "./InfoSection";

type LegalitySafetySectionProps = {
  title?: string;
  content?: string;
  safetyMeasures?: string[];
  certificationBodies?: string[];
  licensingImageSrc?: string;
  licensingImageAlt?: string;
  licensingContent?: string;
  className?: string;
};

export default function LegalitySafetySection({
  title = "オンラインカジノで遊ぶのは合法で安全なの？",
  content = "オンラインカジノの合法性と安全性について詳しく説明します。適切なライセンスを持つカジノサイトを選ぶことで、安全にゲームを楽しむことができます。",
  safetyMeasures = [
    "SSL暗号化による通信の保護",
    "ライセンス認証機関による監査",
    "RNG（乱数生成器）の認証",
    "資金の分離管理",
    "24時間365日のカスタマーサポート",
    "責任あるギャンブル対策"
  ],
  certificationBodies = [
    "eCOGRA（eCommerce Online Gaming Regulation and Assurance）",
    "GLI（Gaming Laboratories International）",
    "TST（Technical Systems Testing）",
    "iTech Labs",
    "BMM Testlabs"
  ],
  licensingImageSrc = "/images/casino-licensing.png",
  licensingImageAlt = "Casino Licensing Information",
  licensingContent = "信頼性のあるライセンスを保有しているカジノサイトは、厳格な規制の下で運営されています。マルタ、キプロス、イギリスなどの認証機関から発行されたライセンスを持つカジノを選ぶことで、安全で公平なゲーム体験を得ることができます。",
  className = ""
}: LegalitySafetySectionProps) {
  return (
    <InfoSection title={title} className={className}>
      <div className="space-y-8">
        {/* Main content */}
        <div className="text-gray-700 leading-relaxed">
          <p className="text-lg mb-6">{content}</p>
          
          {/* Safety measures */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">安全対策</h3>
            <BulletList items={safetyMeasures.map(measure => ({ text: measure }))} />
          </div>
        </div>

        {/* Certification info box */}
        <InfoBox
          title="【オカ教授の知ってた❓】"
          content={
            <div>
              <p className="mb-4">RNG/RTP認証機関：</p>
              <ul className="space-y-1">
                {certificationBodies.map((body, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>{body}</span>
                  </li>
                ))}
              </ul>
            </div>
          }
        />

        {/* Licensing section */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-800">信頼性のあるライセンスを保有して合法に運営している</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="text-gray-700 leading-relaxed">
              <p>{licensingContent}</p>
            </div>
            {licensingImageSrc && (
              <div className="text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={licensingImageSrc}
                  alt={licensingImageAlt}
                  className="mx-auto max-w-sm w-full h-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </InfoSection>
  );
}
