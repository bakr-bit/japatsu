import Link from "next/link";

type CallToActionSectionProps = {
  title?: string;
  content?: string;
  socialLinks?: Array<{
    platform: string;
    href: string;
    icon?: string;
  }>;
  className?: string;
};

export default function CallToActionSection({
  title = "ジャパカジでオンラインカジノを始めよう！",
  content = "ジャパカジでは、厳選されたオンラインカジノサイトの情報を提供しています。初心者から上級者まで、あなたに最適なカジノサイトを見つけて、安全で楽しいギャンブル体験を始めましょう。",
  socialLinks = [
    { platform: "Twitter", href: "#", icon: "🐦" },
    { platform: "Facebook", href: "#", icon: "📘" },
    { platform: "Instagram", href: "#", icon: "📷" },
    { platform: "YouTube", href: "#", icon: "📺" }
  ],
  className = ""
}: CallToActionSectionProps) {
  return (
    <section className={`bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg p-8 ${className}`}>
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-extrabold">{title}</h2>
        
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          {content}
        </p>

        {/* Social media links */}
        {socialLinks && socialLinks.length > 0 && (
          <div className="space-y-4">
            <p className="text-lg font-semibold">SNSでも最新情報をお届け！</p>
            <div className="flex justify-center gap-4 flex-wrap">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {social.icon && <span className="text-xl">{social.icon}</span>}
                  <span className="font-semibold">{social.platform}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/reviews"
            className="bg-white text-red-500 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            カジノレビューを見る
          </Link>
          <Link
            href="/bonuses"
            className="bg-yellow-400 text-red-500 font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            ボーナス特集を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
