import Link from "next/link";
import { ReactNode } from "react";

type TextBannerProps = {
  title: string;
  subtitle?: string;
  cta?: { href: string; label: string };
  variant?: "neutral" | "blue" | "red";
  align?: "start" | "center";
  fullWidth?: boolean;
  className?: string;
  children?: ReactNode;
};

export default function TextBanner({
  title,
  subtitle,
  cta,
  variant = "neutral",
  align = "center",
  fullWidth = false,
  className = "",
  children,
}: TextBannerProps) {
  const base = "py-10";
  const variants: Record<string, string> = {
    neutral: "bg-gradient-to-r from-gray-50 to-white border-y",
    blue: "bg-gradient-to-r from-blue-50 to-white border-y border-blue-100",
    red: "bg-gradient-to-r from-blue-50 to-white border-y border-blue-100",
  };
  const isCenter = align === "center";

  return (
    <section className={`${variants[variant]} ${base} ${className}`}>
      <div className={`${fullWidth ? "w-full max-w-none" : "container mx-auto"} px-4`}>
        <div className={`${isCenter ? "text-center" : ""} space-y-2 max-w-3xl ${isCenter ? "mx-auto" : ""}`}>
          {subtitle ? (
            <p className="text-sm font-semibold text-[#4392f1] tracking-wide">{subtitle}</p>
          ) : null}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
          {children ? <div className="text-gray-700 leading-relaxed">{children}</div> : null}
          {cta ? (
            <div className={`mt-4 ${isCenter ? "justify-center" : ""} flex`}>
              <Link
                href={cta.href}
                className="inline-flex items-center gap-2 bg-[#4392f1] text-white font-bold py-2.5 px-5 rounded-md hover:bg-[#2f80e6] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4392f1]"
              >
                {cta.label}
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
