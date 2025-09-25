import { MascotMessage } from "./MascotDialogueBlock";
import { InfoSection, MascotInfoSection } from "./InfoSection";

type JapanCasinoHelpsSectionProps = {
  title?: string;
  content?: string;
  imageSrc?: string;
  imageAlt?: string;
  mascotConversations?: MascotMessage[];
  className?: string;
};

export default function JapanCasinoHelpsSection({
  title = "業界のプロ『ジャパカジ』がアナタに合ったオンカジサイト探しをお助け❗️",
  content = "オンラインカジノの世界は複雑で、初心者には分からないことがたくさんあります。ジャパカジは業界のプロとして、あなたに最適なオンラインカジノサイトを見つけるお手伝いをします。",
  imageSrc = "/images/online-casino-complete-guide.png",
  imageAlt = "Online Casino Complete Guide",
  mascotConversations = [
    {
      mascot: "/mascots/casiko.png",
      name: "Casiko",
      text: "ジャパカジなら安心してオンラインカジノを選べるね！",
      align: "left"
    },
    {
      mascot: "/mascots/oka-kyoju.png",
      name: "オカ教授",
      text: "そうだ！業界のプロが厳選した情報だから、信頼できるカジノサイトを見つけられるぞ！",
      align: "right"
    }
  ],
  className = ""
}: JapanCasinoHelpsSectionProps) {
  return (
    <MascotInfoSection
      title={title}
      content={
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {content}
          </p>
          {imageSrc && (
            <div className="text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageSrc}
                alt={imageAlt}
                className="mx-auto max-w-md w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
          )}
        </div>
      }
      mascotConversations={mascotConversations}
      className={className}
    />
  );
}
