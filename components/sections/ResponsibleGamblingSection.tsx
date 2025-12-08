export type ResponsibleGamblingSectionProps = {
  title?: string;
  message?: string;
  helpUrl?: string;
  helpText?: string;
  className?: string;
};

/**
 * Responsible gambling awareness section.
 * Displays a warning message with link to support resources.
 */
export default function ResponsibleGamblingSection({
  title = "責任あるギャンブルの推奨",
  message = "オンラインカジノやゲームショーは、あくまで娯楽としてお楽しみください。「余裕資金の範囲内でプレイし、のめり込みすぎない」ことが大切です。万が一、ギャンブルによる問題や不安を感じた場合は、専門機関への相談もご検討ください。",
  helpUrl = "https://www.gambleaware.org/",
  helpText = "専門機関",
  className = "",
}: ResponsibleGamblingSectionProps) {
  return (
    <div className={`max-w-6xl mx-auto ${className}`}>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg shadow-sm text-center">
        <h4 className="text-lg font-bold text-yellow-700 mb-2">
          ⚠️ {title} ⚠️
        </h4>
        <p className="text-gray-800 text-sm leading-relaxed">
          {message.includes("専門機関") ? (
            <>
              {message.split("専門機関")[0]}
              <a
                href={helpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-700 hover:text-blue-900"
              >
                {helpText}
              </a>
              {message.split("専門機関")[1]}
            </>
          ) : (
            message
          )}
        </p>
      </div>
    </div>
  );
}
