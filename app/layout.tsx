import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CasinoTsu",
  description: "",
};

const NAV_ITEMS = [
  {
    label: "カジノレビュー",
    href: "/reviews",
    items: [
      { label: "ローベット", href: "/reviews/roobet" },
      { label: "クイーンカジノ", href: "/reviews/queen-casino" },
      { label: "ベラジョン", href: "/reviews/vera-john" },
      { label: "ライブカジノハウス", href: "/reviews/live-casino-house" },
    ],
  },
  {
    label: "ボーナス",
    href: "/bonuses",
    items: [
      { label: "入金不要ボーナス", href: "/bonuses/no-deposit" },
      { label: "賭け条件なし", href: "/bonuses/no-wagering" },
      { label: "リロードボーナス", href: "/bonuses/reload" },
      { label: "VIPボーナス", href: "/bonuses/vip" },
    ],
  },
  {
    label: "スロット",
    href: "/slots",
    items: [
      { label: "高RTPスロット", href: "/slots/high-rtp" },
      { label: "メガウェイズ", href: "/slots/megaways" },
      { label: "プログレッシブジャックポット", href: "/slots/progressive-jackpot" },
      { label: "ボーナス購入機能", href: "/slots/bonus-buy" },
    ],
  },
  {
    label: "暗号資産",
    href: "/crypto",
    items: [
      { label: "暗号資産ガイド", href: "/crypto" },
      { label: "暗号資産ボーナス", href: "/bonuses/crypto" },
      { label: "ビットコイン決済", href: "/payment/bitcoin" },
      { label: "USDT決済", href: "/payment/usdt" },
    ],
  },
  {
    label: "決済方法",
    href: "/payment",
    items: [
      { label: "VISA", href: "/payment/visa" },
      { label: "Mastercard", href: "/payment/mastercard" },
      { label: "PayPay", href: "/payment/paypay" },
      { label: "ベガウォレット", href: "/payment/vega-wallet" },
    ],
  },
  {
    label: "ガイド",
    href: "/guides",
    items: [
      { label: "初心者向け", href: "/guides" },
      { label: "ライブカジノ", href: "/live-casino" },
      { label: "テーブルゲーム", href: "/games" },
      { label: "責任あるギャンブル", href: "/responsible-gambling" },
    ],
  },
  {
    label: "ニュース",
    href: "/news",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}>
        <Header
          logoSrc="/logo.png"
          logoAlt="CasinoTsu"
          nav={NAV_ITEMS}
          containerClassName="py-4"
        />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
