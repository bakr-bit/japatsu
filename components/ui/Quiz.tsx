"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type QuizOption = {
  label: string;
  correct: boolean;
  explain: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: QuizOption[]; // exactly 3
};

type QuizProps = {
  title?: string;
  questions?: QuizQuestion[];
  className?: string;
};

export default function Quiz({
  title = "理解度チェック",
  questions: inputQuestions,
  className = "",
}: QuizProps) {
  const questionsRef = useRef<QuizQuestion[]>(inputQuestions ?? getDefaultQuestions());
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);

  const questions = questionsRef.current;
  const q = questions[index];
  const progress = Math.round(((index + (revealed ? 1 : 0)) / questions.length) * 100);

  const onChoose = (i: number) => {
    if (revealed) return;
    setSelected(i);
  };

  const onReveal = () => {
    if (selected == null) return;
    const isCorrect = q.options[selected].correct;
    if (!revealed && isCorrect) setScore((s) => s + 1);
    setRevealed(true);
  };

  const onNext = () => {
    if (index < questions.length - 1) {
      setIndex((i) => i + 1);
      setSelected(null);
      setRevealed(false);
    }
  };

  const onRetake = () => {
    setIndex(0);
    setSelected(null);
    setRevealed(false);
    setScore(0);
  };

  const finished = index === questions.length - 1 && revealed;

  return (
    <section className={`bg-white rounded-lg border-gray-200 border shadow-sm overflow-hidden ${className}`}>
      <div className="px-4 py-4 sm:px-6 bg-gradient-to-r from-rose-50 to-white border-b">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <span className="text-xs font-semibold text-gray-700 bg-gray-100 border-gray-300 border rounded-full px-2 py-0.5">
            問 {index + 1} / {questions.length}
          </span>
        </div>
        <div className="mt-2 h-1.5 rounded bg-gray-200">
          <div className="h-full rounded bg-red-600 transition-all" style={{ width: finished ? "100%" : `${progress}%` }} />
        </div>
      </div>

      {/* Question */}
      <div className="p-5 space-y-4">
        <div className="text-base sm:text-lg font-semibold text-gray-900">
          {q.question}
        </div>
        <div className="grid gap-2" role="radiogroup" aria-label="Quiz options">
          {q.options.map((opt, i) => {
            const isSelected = selected === i;
            const isCorrect = opt.correct;
            const state = revealed ? (isCorrect ? "correct" : isSelected ? "wrong" : "idle") : isSelected ? "picked" : "idle";
            const cls = state === "correct"
              ? "border-green-600 bg-green-50"
              : state === "wrong"
              ? "border-red-600 bg-red-50"
              : state === "picked"
              ? "border-red-400 bg-rose-50"
              : "border-gray-200 hover:bg-gray-50";
            return (
              <button
                key={i}
                type="button"
                onClick={() => onChoose(i)}
                role="radio"
                aria-checked={isSelected}
                className={`text-left px-3 py-2 rounded-md border-gray-300 border transition-colors flex items-start gap-2 ${cls}`}
                disabled={revealed}
              >
                <span className={`mt-0.5 h-5 w-5 rounded-full flex items-center justify-center text-xs font-bold ${isSelected ? "bg-red-600 text-white" : "bg-gray-200 text-gray-700"}`}>
                  {String.fromCharCode(65 + i)}
                </span>
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>

        {/* Feedback as expert chat bubble */}
        {revealed && selected != null && (
          <div className="mt-3 flex justify-end">
            <div className="max-w-md">
              <div className={`relative rounded-2xl px-4 py-3 border shadow-sm ${q.options[selected].correct ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
                <div className={`text-sm ${q.options[selected].correct ? "text-green-800" : "text-red-800"}`}>
                  {q.options[selected].correct ? <strong>正解！</strong> : <strong>もう一歩！</strong>} {q.options[selected].explain}
                </div>
                <div className={`absolute top-1/2 -mt-2 w-4 h-4 rotate-45 border ${q.options[selected].correct ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"} right-[-6px]`} aria-hidden="true" />
              </div>
              <div className="mt-2 flex items-center justify-end gap-3 text-right">
                <div className="text-xs leading-tight text-gray-500">
                  <div className="font-semibold text-gray-700">Rina Okabe</div>
                  <div>CasinoTsu 編集長</div>
                </div>
                <Image
                  src="/rina/avatar.png"
                  alt="Rina Okabe"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="flex items-center gap-2 pt-2">
          {!revealed ? (
            <button
              type="button"
              onClick={onReveal}
              disabled={selected == null}
              className="px-4 py-2 bg-red-600 text-white font-bold rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-700"
            >
              回答を確定
            </button>
          ) : (
            <>
              {!finished ? (
                <button type="button" onClick={onNext} className="px-4 py-2 bg-gray-800 text-white font-bold rounded-md hover:bg-gray-900">次へ</button>
              ) : (
                <div className="flex items-center gap-3">
                  <div className="text-sm text-gray-700 font-semibold">結果: {score} / {questions.length}</div>
                  <button type="button" onClick={onRetake} className="px-3 py-1.5 bg-gray-100 border border-gray-300 rounded-md text-sm hover:bg-gray-200">もう一度</button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function getDefaultQuestions(): QuizQuestion[] {
  return [
    {
      id: "q1",
      question: "通信の安全性を確認する基本として最も適切なのはどれ？",
      options: [
        { label: "サイトの色合いが落ち着いている", correct: false, explain: "見た目ではなく、SSL/TLSなどの暗号化や証明書有効性を確認しましょう。" },
        { label: "SSL/TLS証明書の有効性を確認する", correct: true, explain: "SSL/TLSは通信内容を暗号化し、なりすましを防ぐ重要な要素です。" },
        { label: "トップページに大きなロゴがある", correct: false, explain: "ロゴの大きさは安全性と関係ありません。" },
      ],
    },
    {
      id: "q2",
      question: "プレイヤー保護の観点で信頼性が高い代表的な規制当局は？",
      options: [
        { label: "UKGCやMGAなどの主要当局", correct: true, explain: "UKGCやMGAは厳格な監督で知られ、プレイヤー保護やコンプライアンス要件が明確です。" },
        { label: "匿名のコミュニティ運営団体", correct: false, explain: "監督の実効性や法的根拠が不明確です。" },
        { label: "SNSで人気のある配信者の推奨", correct: false, explain: "推奨は参考情報に過ぎず、規制当局の監督とは異なります。" },
      ],
    },
    {
      id: "q3",
      question: "ゲームの公平性(RNG/RTP)を担保する要素として正しいのは？",
      options: [
        { label: "第三者監査(eCOGRA等)の認証", correct: true, explain: "第三者監査はRNG/RTPの実装と統計的公平性を検証します。" },
        { label: "配色がカラフルであること", correct: false, explain: "ビジュアルは公平性とは無関係です。" },
        { label: "レビューサイトの星の数のみ", correct: false, explain: "評判は参考になりますが、公平性は監査・技術仕様の確認が重要です。" },
      ],
    },
    {
      id: "q4",
      question: "匿名性・秘匿性の観点で比較すべきポイントはどれ？",
      options: [
        { label: "KYC有無・ウォレット運用・決済の反映速度", correct: true, explain: "これらは実名開示や痕跡の残り方、利便性に直結します。" },
        { label: "トップページの読み込み速度", correct: false, explain: "UXには影響しますが匿名性の主要因ではありません。" },
        { label: "ボタンの丸みの半径", correct: false, explain: "デザイン要素であり秘匿性とは無関係です。" },
      ],
    },
    {
      id: "q5",
      question: "責任あるギャンブルの基本として適切なのは？",
      options: [
        { label: "損失を取り返すまでベットを増やす", correct: false, explain: "追い上げは依存や過度な損失につながります。" },
        { label: "プレイ時間や入金額の上限を設定する", correct: true, explain: "リミット設定はセルフコントロールに有効で、健全なプレイを助けます。" },
        { label: "疲れたらカフェインで続行", correct: false, explain: "休息を取り、コンディションを整えることが大切です。" },
      ],
    },
  ];
}
