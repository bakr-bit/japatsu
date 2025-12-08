import Link from "next/link";
import SectionTitle from "./SectionTitle";
import { MascotMessage } from "./MascotDialogueBlock";
import { InfoSection, HighlightBox } from "./InfoSection";
import { ChevronRight } from "lucide-react";

type CategoryIntroductionSectionProps = {
  title?: string;
  dialogue?: MascotMessage[];
  categories?: Array<{
    text: string;
    href: string;
  }>;
  highlightBox?: {
    title: string;
    content: string;
    linkHref: string;
    linkText?: string;
  };
  className?: string;
};

export default function CategoryIntroductionSection({
  title = "おすすめオンラインカジノ｜カテゴリー別にご紹介！",
  dialogue = [],
  categories = [
    { text: "最新カジノ", href: "/new-casinos" },
    { text: "モバイルカジノ", href: "/mobile" },
    { text: "ライブカジノ", href: "/live-casino" },
    { text: "ボーナス特集", href: "/bonuses" },
    { text: "スロット特集", href: "/slots" },
    { text: "入金方法別", href: "/payment" },
    { text: "仮想通貨カジノ", href: "/crypto" },
    { text: "VIPカジノ", href: "/bonuses/vip" },
    { text: "無料プレイ", href: "/free-spins" }
  ],
  highlightBox = {
    title: "🔰 初心者必見！",
    content: "オンラインカジノを始める前に知っておきたい基本情報をまとめました。",
    linkHref: "/guides",
    linkText: "オンラインカジノガイドを見る"
  },
  className = ""
}: CategoryIntroductionSectionProps) {
  return (
    <section className={`space-y-8 ${className}`}>
      <SectionTitle subtitle="カテゴリー紹介" title={title} />
      <div className="space-y-8">
        {/* Mascot dialogue */}
        {dialogue && dialogue.length > 0 && (
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
            <div className="space-y-4">
              {dialogue.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 ${message.align === "right" ? "flex-row-reverse" : ""}`}
                >
                  <div className="flex-shrink-0 text-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {message.mascot ? (
                      <img
                        src={message.mascot}
                        alt={message.name}
                        className="h-16 w-16 mx-auto rounded-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="h-16 w-16 mx-auto rounded-full bg-gray-200" aria-hidden="true" />
                    )}
                    <div className="text-sm font-bold mt-1 text-gray-700">{message.name}</div>
                  </div>
                  <div className="bg-white border-2 border-blue-200 rounded-lg p-4 max-w-md">
                    <p className="text-gray-800">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category grid */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">カテゴリー別に探す</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {categories.map((cat, i) => (
              <Link
                key={`${cat.text}-${i}`}
                href={cat.href}
                className="group flex items-center justify-between rounded-md border-gray-200 border bg-white px-3 py-2 hover:bg-gray-50 hover:border-gray-300 transition-colors"
              >
                <span className="text-sm font-semibold text-gray-800 line-clamp-1">{cat.text}</span>
                <ChevronRight className="h-4 w-4 text-red-600 group-hover:text-gray-600" />
              </Link>
            ))}
          </div>
        </div>

        {/* Highlight box */}
        <HighlightBox
          icon={highlightBox.title.split(' ')[0]}
          title={highlightBox.title.split(' ').slice(1).join(' ')}
          content={highlightBox.content}
          linkHref={highlightBox.linkHref}
          linkText={highlightBox.linkText}
        />
      </div>
    </section>
  );
}
