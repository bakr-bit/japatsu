import { ReactNode } from "react";
import fs from "fs";
import path from "path";

export type QaMessage = {
  id?: string | number;
  mascot?: string; // image url (ignored for experts; beginners use pelican)
  name: string;
  text: string | ReactNode; // string, HTML, or node
  align?: "left" | "right"; // default left
  isHtml?: boolean; // when true and text is string, render as HTML
  bubbleClassName?: string;
};

type QaBlockProps = {
  conversations: QaMessage[];
  className?: string;
};

export default function QaBlock({ conversations, className = "" }: QaBlockProps) {
  // Discover available captain images from /public/captain (server-side)
  let captainImages: string[] = [];
  let pelicanImages: string[] = [];
  try {
    const dir = path.join(process.cwd(), "public", "captain");
    const files = fs.readdirSync(dir, { withFileTypes: true });
    captainImages = files
      .filter((f) => f.isFile() && /\.png$/i.test(f.name))
      .map((f) => `/captain/${f.name}`);
  } catch (_) {
    captainImages = [];
  }
  try {
    const dir = path.join(process.cwd(), "public", "pelican");
    const files = fs.readdirSync(dir, { withFileTypes: true });
    pelicanImages = files
      .filter((f) => f.isFile() && /\.png$/i.test(f.name))
      .map((f) => `/pelican/${f.name}`);
  } catch (_) {
    pelicanImages = [];
  }

  function pickCaptain(): string | undefined {
    if (!captainImages.length) return undefined;
    const idx = Math.floor(Math.random() * captainImages.length);
    return captainImages[idx];
  }
  function pickPelican(): string | undefined {
    if (!pelicanImages.length) return undefined;
    const idx = Math.floor(Math.random() * pelicanImages.length);
    return pelicanImages[idx];
  }

  function resolveMascot(convo: QaMessage): string | undefined {
    const name = (convo.name || "").toLowerCase();
    const isExpert =
      convo.align === "right" ||
      name.includes("expert") ||
      name.includes("専門家") ||
      name.includes("編集部") ||
      name.includes("教授");
    // Always use a captain image for experts
    if (isExpert) return pickCaptain();

    // Beginner: prefer pelican image
    const isBeginner =
      convo.align !== "right" ||
      name.includes("beginner") ||
      name.includes("初心者") ||
      name.includes("ビギナー");
    if (isBeginner) return pickPelican() || convo.mascot || undefined;

    // Otherwise, fall back to provided mascot if any
    return convo.mascot || undefined;
  }

  function resolveAlign(convo: QaMessage): "left" | "right" {
    const name = (convo.name || "").toLowerCase();
    const isExpert =
      convo.align === "right" ||
      name.includes("expert") ||
      name.includes("専門家") ||
      name.includes("編集部") ||
      name.includes("教授");
    // Policy: Beginner ALWAYS left, Expert ALWAYS right
    return isExpert ? "right" : "left";
  }

  function resolveDisplayName(convo: QaMessage): string {
    const align = resolveAlign(convo);
    return align === "right" ? "専門家" : "初心者";
  }
  return (
    <div className={`space-y-4 ${className}`} role="list" aria-label="Q&A conversation">
      {conversations.map((convo, index) => {
        const key = convo.id ?? index;
        const right = resolveAlign(convo) === "right";
        const bubbleClasses = convo.bubbleClassName ?? "bg-orange-100 border border-orange-200";
        const mascot = resolveMascot(convo);
        const displayName = resolveDisplayName(convo);

        return (
          <div
            key={key}
            className={`flex items-start gap-4 ${right ? "flex-row-reverse" : ""}`}
            role="listitem"
          >
            <div className="flex-shrink-0 text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {mascot ? (
                <img
                  src={mascot}
                  alt={convo.name}
                  className="h-16 w-16 mx-auto"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="h-16 w-16 mx-auto rounded-full bg-gray-200" aria-hidden="true" />
              )}
              <div className="text-sm font-bold mt-1">{displayName}</div>
            </div>
            <div
              className={`relative p-4 rounded-lg ${bubbleClasses} ${right ? "mr-4" : "ml-4"}`}
              aria-label={`${displayName} says`}
            >
              <div
                className={`absolute top-1/2 -mt-2 w-4 h-4 ${bubbleClasses} transform rotate-45 ${
                  right ? "-right-2 border-t border-r" : "-left-2 border-b border-l"
                }`}
                aria-hidden="true"
              />

              <div className="text-gray-700 space-y-2">
                {typeof convo.text === "string" && convo.isHtml ? (
                  <div dangerouslySetInnerHTML={{ __html: convo.text }} />
                ) : (
                  <>{convo.text}</>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
