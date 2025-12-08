import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

type CTA = {
  label: string;
  href: string;
  newTab?: boolean;
  className?: string;
};

type TopBannerProps = {
  bgClassName?: string;
  className?: string;
  containerClassName?: string;
  left?: ReactNode;
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  logoClassName?: string;
  children?: ReactNode;
  cta?: CTA;
  hideCtaOnMobile?: boolean;
};

export default function TopBanner({
  bgClassName = "bg-blue-800 text-white",
  className = "",
  containerClassName = "",
  left,
  logoSrc,
  logoAlt = "Logo",
  logoWidth = 120,
  logoHeight = 40,
  logoClassName = "h-10 w-auto",
  children,
  cta,
  hideCtaOnMobile = true,
}: TopBannerProps) {
  return (
    <div className={`${bgClassName} p-2 ${className}`}>
      <div
        className={`container mx-auto flex justify-between items-center text-sm ${containerClassName}`}
      >
        <div className="flex items-center space-x-4">
          {left ??
            (logoSrc ? (
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={logoWidth}
                height={logoHeight}
                className={logoClassName}
                priority
              />
            ) : null)}
        </div>
        <div className={`${hideCtaOnMobile ? "hidden md:flex" : "flex"} items-center space-x-2`}>
          {children}
          {cta ? (
            <Link
              href={cta.href}
              className={`bg-brand text-white px-4 py-2 rounded hover:bg-brand-hover transition-colors ${cta.className ?? ""}`}
              target={cta.newTab ? "_blank" : undefined}
              rel={cta.newTab ? "noopener noreferrer" : undefined}
            >
              {cta.label}
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
