import Link from "next/link";
import { ReactNode } from "react";

type BannerMenuItem = {
  href: string;
  label: string;
  icon?: ReactNode | string;
  "aria-label"?: string;
};

type HeaderBannerProps = {
  title: string;
  subheading?: string;
  description?: string;
  menuItems?: BannerMenuItem[];
  avatarSrc?: string;
  avatarAlt?: string;
  cta?: {
    href: string;
    label: string;
    badge?: string;
  };
  leftImageSrc?: string;
  leftImageAlt?: string;
  rightImageSrc?: string;
  rightImageAlt?: string;
  className?: string;
  containerClassName?: string;
  color?:
    | "red"
    | "rose"
    | "blue"
    | "sky"
    | "indigo"
    | "violet"
    | "purple"
    | "emerald"
    | "green"
    | "teal"
    | "cyan"
    | "amber"
    | "orange"
    | "slate"
    | "gray";
};

export default function HeaderBanner({
  title,
  subheading,
  description,
  menuItems = [],
  avatarSrc,
  avatarAlt = "",
  cta,
  leftImageSrc,
  leftImageAlt = "",
  rightImageSrc,
  rightImageAlt = "",
  className = "",
  containerClassName = "",
  color = "rose",
}: HeaderBannerProps) {
  const theme = (() => {
    switch (color) {
      case "red":
      case "rose":
        return {
          bg: "bg-rose-200",
          bgColor: "#fecdd3",
          ring: "focus-visible:ring-rose-400",
        };
      case "blue":
      case "sky":
        return {
          bg: "bg-sky-200",
          bgColor: "#bae6fd",
          ring: "focus-visible:ring-sky-400",
        };
      case "indigo":
        return {
          bg: "bg-indigo-200",
          bgColor: "#c7d2fe",
          ring: "focus-visible:ring-indigo-400",
        };
      case "violet":
      case "purple":
        return {
          bg: "bg-violet-200",
          bgColor: "#ddd6fe",
          ring: "focus-visible:ring-violet-400",
        };
      case "emerald":
      case "green":
        return {
          bg: "bg-emerald-200",
          bgColor: "#a7f3d0",
          ring: "focus-visible:ring-emerald-400",
        };
      case "teal":
        return {
          bg: "bg-teal-200",
          bgColor: "#99f6e4",
          ring: "focus-visible:ring-teal-400",
        };
      case "cyan":
        return {
          bg: "bg-cyan-200",
          bgColor: "#a5f3fc",
          ring: "focus-visible:ring-cyan-400",
        };
      case "amber":
      case "orange":
        return {
          bg: "bg-amber-200",
          bgColor: "#fde68a",
          ring: "focus-visible:ring-amber-400",
        };
      case "slate":
      case "gray":
      default:
        return {
          bg: "bg-gray-100",
          bgColor: "#f3f4f6",
          ring: "focus-visible:ring-gray-400",
        };
    }
  })();
  return (
    <div
      className={`banner-wrapper relative overflow-hidden py-10 ${theme.bg} ${className}`}
      style={{ backgroundColor: theme.bgColor }}
    >
      {/* Decorative flanking images */}
      {leftImageSrc ? (
        <div
          className="header-banner--image-left pointer-events-none select-none bg-no-repeat bg-left bg-contain"
          role="img"
          aria-label={leftImageAlt}
          style={{ backgroundImage: `url(${leftImageSrc})` }}
        />
      ) : null}
      {rightImageSrc ? (
        <div
          className="header-banner--image-right pointer-events-none select-none bg-no-repeat bg-right bg-contain"
          role="img"
          aria-label={rightImageAlt}
          style={{ backgroundImage: `url(${rightImageSrc})` }}
        />
      ) : null}

      {/* Content */}
      <div className={`container mx-auto px-4 text-center ${containerClassName}`}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          {title}
        </h1>
        {subheading ? (
          <span className="h2 d-block text-2xl sm:text-3xl font-semibold mt-2 text-gray-800">
            {subheading}
          </span>
        ) : null}
        {description ? (
          <p className="mb-0 mt-3 text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        ) : null}

        {avatarSrc ? (
          <div className="mt-6 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={avatarSrc}
              alt={avatarAlt || title}
              className="h-28 w-28 rounded-full border-4 border-white bg-white object-cover shadow-lg"
            />
          </div>
        ) : null}

        {cta ? (
          <div className="mt-6 flex justify-center">
            <Link
              href={cta.href}
              className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
            >
              {cta.badge ? (
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                  {cta.badge}
                </span>
              ) : null}
              <span>{cta.label}</span>
            </Link>
          </div>
        ) : null}

        {menuItems.length > 0 ? (
          <ul className="banner-menu mt-6 flex flex-wrap justify-center gap-3">
            {menuItems.map((item) => (
              <li key={item.href} className="inline-flex">
                <Link
                  href={item.href}
                  aria-label={item["aria-label"]}
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 backdrop-blur border shadow-sm text-sm font-semibold text-gray-800 hover:text-gray-900 hover:bg-white transition-all focus:outline-none focus-visible:ring-2 ${theme.ring}`}
                >
              {item.icon ? <span aria-hidden="true">{item.icon}</span> : null}
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    ) : null}
      </div>
    </div>
  );
}
