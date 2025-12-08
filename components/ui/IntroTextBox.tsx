import { ReactNode } from "react";

interface IntroTextBoxProps {
  children: ReactNode;
  className?: string;
}

export default function IntroTextBox({ children, className = "" }: IntroTextBoxProps) {
  return (
    <div className={`rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-white p-6 shadow-sm text-black ${className}`}>
      <div className="prose prose-gray max-w-none text-black">
        {children}
      </div>
    </div>
  );
}