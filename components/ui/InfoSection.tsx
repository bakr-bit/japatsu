import Link from "next/link";
import { ReactNode } from "react";
import MascotDialogueBlock, { MascotMessage } from "./MascotDialogueBlock";

type InfoSectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
};

type InfoBoxProps = {
  title: string;
  content: ReactNode;
  className?: string;
  titleClassName?: string;
};

type BulletListProps = {
  items: Array<{
    text: string;
    href?: string;
  }>;
  className?: string;
  itemClassName?: string;
};

type HighlightBoxProps = {
  icon?: string;
  title: string;
  content: ReactNode;
  linkHref?: string;
  linkText?: string;
  className?: string;
};

export function InfoSection({ title, children, className = "", titleClassName = "" }: InfoSectionProps) {
  return (
    <section className={`space-y-6 ${className}`}>
      <h2 className={`text-2xl font-extrabold text-gray-800 ${titleClassName}`}>
        {title}
      </h2>
      {children}
    </section>
  );
}

export function InfoBox({ title, content, className = "", titleClassName = "" }: InfoBoxProps) {
  return (
    <div className={`bg-blue-50 border border-blue-200 rounded-lg p-6 ${className}`}>
      <h3 className={`text-lg font-bold text-blue-800 mb-3 ${titleClassName}`}>
        {title}
      </h3>
      <div className="text-gray-700">
        {content}
      </div>
    </div>
  );
}

export function BulletList({ items, className = "", itemClassName = "" }: BulletListProps) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className={`flex items-start gap-2 ${itemClassName}`}>
          <span className="text-red-500 font-bold mt-1">•</span>
          {item.href ? (
            <Link
              href={item.href}
              className="text-blue-600 hover:underline hover:text-blue-800"
            >
              {item.text}
            </Link>
          ) : (
            <span className="text-gray-700">{item.text}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export function HighlightBox({ 
  icon = "🔰", 
  title, 
  content, 
  linkHref, 
  linkText = "詳細を見る",
  className = "" 
}: HighlightBoxProps) {
  return (
    <div className={`bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-lg font-bold text-yellow-800">{title}</h3>
      </div>
      <div className="text-gray-700 mb-4">
        {content}
      </div>
      {linkHref && (
        <Link
          href={linkHref}
          className="inline-flex items-center gap-1 text-blue-600 hover:underline font-semibold"
        >
          {linkText}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  );
}

export function MascotInfoSection({ 
  title, 
  content, 
  mascotConversations,
  className = "" 
}: {
  title: string;
  content: ReactNode;
  mascotConversations?: MascotMessage[];
  className?: string;
}) {
  return (
    <InfoSection title={title} className={className}>
      <div className="space-y-6">
        <div className="text-gray-700 leading-relaxed">
          {content}
        </div>
        {mascotConversations && mascotConversations.length > 0 && (
          <MascotDialogueBlock conversations={mascotConversations} />
        )}
      </div>
    </InfoSection>
  );
}

export function SearchToolSection({ 
  title, 
  content, 
  imageSrc,
  imageAlt = "Search Tool",
  mascotConversations,
  className = "" 
}: {
  title: string;
  content: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  mascotConversations?: MascotMessage[];
  className?: string;
}) {
  return (
    <div className={`space-y-6 ${className}`}>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="text-gray-700 leading-relaxed">
          {content}
        </div>
        {imageSrc && (
          <div className="text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageSrc}
              alt={imageAlt}
              className="mx-auto max-w-sm w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}
      </div>
      {mascotConversations && mascotConversations.length > 0 && (
        <MascotDialogueBlock conversations={mascotConversations} />
      )}
    </div>
  );
}

export function EvaluationCriteriaSection({ 
  title, 
  content, 
  criteria, 
  imageSrc,
  imageAlt = "Evaluation Criteria",
  mascotConversations,
  className = "" 
}: {
  title: string;
  content: ReactNode;
  criteria: string[];
  imageSrc?: string;
  imageAlt?: string;
  mascotConversations?: MascotMessage[];
  className?: string;
}) {
  return (
    <div className={`space-y-6 ${className}`}>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="space-y-4">
          <div className="text-gray-700 leading-relaxed">
            {content}
          </div>
          <ul className="space-y-2">
            {criteria.map((criterion, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-1">•</span>
                <span className="text-gray-700">{criterion}</span>
              </li>
            ))}
          </ul>
        </div>
        {imageSrc && (
          <div className="text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageSrc}
              alt={imageAlt}
              className="mx-auto max-w-sm w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}
      </div>
      {mascotConversations && mascotConversations.length > 0 && (
        <MascotDialogueBlock conversations={mascotConversations} />
      )}
    </div>
  );
}
