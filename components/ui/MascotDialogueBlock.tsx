import { ReactNode } from "react";
import fs from "fs";
import path from "path";

export type MascotMessage = {
  mascot?: string; // image URL
  name: string;
  text: ReactNode;
  align?: "left" | "right";
};

type MascotDialogueBlockProps = {
  conversations: MascotMessage[];
  className?: string;
};

export default function MascotDialogueBlock({ conversations, className = "" }: MascotDialogueBlockProps) {
  if (!conversations || conversations.length === 0) return null;

  // Load captain/pelican images (server-side)
  let captainImages: string[] = [];
  let pelicanImages: string[] = [];
  try {
    const dir = path.join(process.cwd(), "public", "captain");
    const files = fs.readdirSync(dir, { withFileTypes: true });
    captainImages = files.filter((f) => f.isFile() && /\.png$/i.test(f.name)).map((f) => `/captain/${f.name}`);
  } catch (_) {}
  try {
    const dir = path.join(process.cwd(), "public", "pelican");
    const files = fs.readdirSync(dir, { withFileTypes: true });
    pelicanImages = files.filter((f) => f.isFile() && /\.png$/i.test(f.name)).map((f) => `/pelican/${f.name}`);
  } catch (_) {}

  const pick = (arr: string[]) => (arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined);
  const pickCaptain = () => pick(captainImages);
  const pickPelican = () => pick(pelicanImages);

  function resolveAvatar(msg: MascotMessage): string | undefined {
    const name = (msg.name || "").toLowerCase();
    const isExpert = msg.align === "right" || name.includes("expert") || name.includes("専門家") || name.includes("編集部") || name.includes("教授");
    if (isExpert) return pickCaptain();
    const isBeginner = msg.align !== "right" || name.includes("beginner") || name.includes("初心者") || name.includes("ビギナー");
    if (isBeginner) return pickPelican();
    return undefined;
  }

  function resolveAlign(msg: MascotMessage): "left" | "right" {
    const name = (msg.name || "").toLowerCase();
    const isExpert = msg.align === "right" || name.includes("expert") || name.includes("専門家") || name.includes("編集部") || name.includes("教授");
    return isExpert ? "right" : "left";
  }

  function resolveDisplayName(msg: MascotMessage): string {
    const align = resolveAlign(msg);
    return align === "right" ? "専門家" : "初心者";
  }

  return (
    <div className={`bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 ${className}`}>
      <div className="space-y-4">
        {conversations.map((message, index) => (
          <div
            key={index}
            className={`flex items-start gap-4 ${resolveAlign(message) === "right" ? "flex-row-reverse" : ""}`}
          >
            <div className="flex-shrink-0 text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {resolveAvatar(message) ? (
                <img
                  src={resolveAvatar(message)!}
                  alt={message.name}
                  className="h-16 w-16 mx-auto rounded-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="h-16 w-16 mx-auto rounded-full bg-gray-200" aria-hidden="true" />
              )}
              <div className="text-sm font-bold mt-1 text-gray-700">{resolveDisplayName(message)}</div>
            </div>
            <div className="bg-white border-2 border-blue-200 rounded-lg p-4 max-w-md">
              <p className="text-gray-800">{message.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
