// --- MOCK DATA (Centralized for reusability) ---

import fs from "fs";
import path from "path";
import { ContentItem, ToplistContent, BannerContent, SidebarContent } from "./types"; // Import types

export const toplistCasinos: ToplistContent[] = [
  {
    id: "toplist-casino-1",
    title: "Wonder Casino",
    info: "入金不要ボーナスをゲット！",
    rating: 4.5,
    link: "/reviews/wonder-casino",
    image: "/assets/casino/wonder-casino.jpg",
    type: "toplist",
    rank: 1,
    bonus: "$540",
    spins: "–",
    payments: [],
    morePayments: 0,
  },
  {
    id: "toplist-casino-2",
    title: "Mystino",
    info: "評判や入金不要ボーナスを徹底解説！",
    rating: 4.0,
    link: "/reviews/mystino",
    image: "/assets/casino/mystino.jpg",
    type: "toplist",
    rank: 2,
    bonus: "¥154,500",
    spins: "–",
    payments: [],
    morePayments: 0,
  },
  {
    id: "toplist-casino-3",
    title: "Eldoah Casino",
    info: "エルドア カジノ徹底レビュー",
    rating: 4.5,
    link: "/reviews/eldoah-casino",
    image: "/assets/casino/eldoah-casino.jpg",
    type: "toplist",
    rank: 3,
    bonus: "¥2,000",
    spins: "–",
    payments: [],
    morePayments: 0,
  },
  {
    id: "toplist-casino-4",
    title: "Parimatch",
    info: "Parimatchの魅力を総まとめ",
    rating: 4.3,
    link: "/reviews/parimatch",
    image: "/assets/casino/parimatch.jpg",
    type: "toplist",
    rank: 4,
    bonus: "$300",
    spins: "–",
    payments: [],
    morePayments: 0,
  },
  {
    id: "toplist-casino-5",
    title: "Duelbits",
    info: "暗号資産に強い注目サイト",
    rating: 4.2,
    link: "/reviews/duelbits",
    image: "/assets/casino/duelbits.jpg",
    type: "toplist",
    rank: 5,
    bonus: "$250",
    spins: "–",
    payments: [],
    morePayments: 0,
  },
  {
    id: "toplist-casino-6",
    title: "1win",
    info: "スポーツとカジノの両立",
    rating: 4.1,
    link: "/reviews/1win",
    image: "/assets/casino/1win.jpg",
    type: "toplist",
    rank: 6,
    bonus: "$500",
    spins: "–",
    payments: [],
    morePayments: 0,
  },
  {
    id: "toplist-casino-7",
    title: "Cybet",
    info: "トレンドのプロモが豊富",
    rating: 4.0,
    link: "/reviews/cybet",
    image: "/assets/casino/cybet.jpg",
    type: "toplist",
    rank: 7,
    bonus: "$200",
    spins: "–",
    payments: [],
    morePayments: 0,
  },
  {
    id: "toplist-casino-8",
    title: "Katsuwin",
    info: "キャッシュバックが魅力",
    rating: 4.0,
    link: "/reviews/katsuwin",
    image: "/assets/casino/katsuwin.jpg",
    type: "toplist",
    rank: 8,
    bonus: "$180",
    spins: "–",
    payments: [],
    morePayments: 0,
  },
  {
    id: "toplist-casino-9",
    title: "Betgoat",
    info: "初心者にもうれしい特典",
    rating: 3.9,
    link: "/reviews/betgoat",
    image: "/assets/casino/betgoat.jpg",
    type: "toplist",
    rank: 9,
    bonus: "$150",
    spins: "–",
    payments: [],
    morePayments: 0,
  },
  {
    id: "toplist-casino-10",
    title: "Miki",
    info: "新作スロットが充実",
    rating: 3.9,
    link: "/reviews/miki",
    image: "/assets/casino/miki.jpg",
    type: "toplist",
    rank: 10,
    bonus: "$120",
    spins: "–",
    payments: [],
    morePayments: 0,
  },
];

export const banners: BannerContent[] = [
  {
    id: "banner-promo-1",
    title: "お得な初回入金ボーナス！",
    info: "今すぐチェック！",
    link: "/bonuses/welcome-bonus",
    image: "/images/banners/welcome-bonus.png",
    type: "banner",
  },
  {
    id: "banner-promo-2",
    title: "人気スロットで遊ぼう！",
    info: "高RTP・新作",
    link: "/slots",
    image: "/images/banners/popular-slots.png",
    type: "banner",
  },
];

export const sidebarContents: SidebarContent[] = [
  {
    id: "sidebar-casino-1",
    title: "Wonder Casino",
    info: "おすすめ！",
    rating: 4.5,
    link: "/reviews/wonder-casino",
    image: "/images/casinos/wonder-casino-logo.png",
    type: "sidebar",
  },
  {
    id: "sidebar-news-1",
    title: "最新ニュース：業界の動向",
    info: "2025.08.28",
    link: "/news/latest-trends",
    image: "/images/news/industry-trends.png",
    type: "sidebar",
  },
];

export const heroSlides = [
  {
    id: 1,
    desktopImg: "",
    mobileImg: "",
    link: "#",
    navIcon: "",
    navTitle: "おすすめボーナス",
    navSubtitle: "最新オファーをチェック",
  },
  {
    id: 2,
    desktopImg: "",
    mobileImg: "",
    link: "#",
    navIcon: "",
    navTitle: "人気スロット",
    navSubtitle: "高RTP・新作",
  },
  {
    id: 3,
    desktopImg: "",
    mobileImg: "",
    link: "#",
    navIcon: "",
    navTitle: "入金方法",
    navSubtitle: "手数料・反映速度",
  },
] as const;

// Build hero slides from /public/banner if available
export function getHeroSlides() {
  try {
    const dir = path.join(process.cwd(), "public", "banner");
    const files = fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((f) => f.isFile() && /\.(png|jpe?g|webp|avif)$/i.test(f.name))
      .map((f) => f.name)
      .sort();
    if (files.length === 0) return heroSlides as any[];
    return files.map((name, idx) => {
      const url = `/banner/${name}`;
      const base = name.replace(/\.(png|jpe?g|webp|avif)$/i, "");
      return {
        id: base || idx + 1,
        desktopImg: url,
        mobileImg: url,
        link: "#",
        navIcon: "",
        navTitle: base || `バナー${idx + 1}`,
        navSubtitle: "",
      };
    });
  } catch (_) {
    return heroSlides as any[];
  }
}

export const homeBonuses = [
  { id: 1, img: "/assets/casino/wonder-casino.jpg", link: "#", text: "お得な初回入金ボーナス！", expiry: "2025-12-31" },
  { id: 2, img: "/assets/casino/mystino.jpg", link: "#", text: "最大還元ウェルカムボーナス！", expiry: "2025-12-31" },
  { id: 3, img: "/assets/casino/eldoah-casino.jpg", link: "#", text: "登録だけで貰える入金不要ボーナス！", expiry: "2025-12-31" },
  { id: 4, img: "/assets/casino/parimatch.jpg", link: "#", text: "限定入金ボーナスをチェック！", expiry: "2025-12-31" },
];

export const sidebarCasinos = [
  { rank: 1, name: "Wonder Casino", logo: "", rating: "" },
  { rank: 2, name: "Mystino", logo: "", rating: "" },
  { rank: 3, name: "Eldoah Casino", logo: "", rating: "" },
  { rank: 4, name: "Parimatch", logo: "", rating: "" },
  { rank: 5, name: "Duelbits", logo: "", rating: "" },
  { rank: 6, name: "1win", logo: "", rating: "" },
  { rank: 7, name: "Cybet", logo: "", rating: "" },
  { rank: 8, name: "Katsuwin", logo: "", rating: "" },
  { rank: 9, name: "Betgoat", logo: "", rating: "" },
  { rank: 10, name: "Miki", logo: "", rating: "" },
];

export const newsArticles = [
  { id: 1, img: "", title: "最新ニュース：業界の動向", date: "2025.08.28", category: "News" },
  { id: 2, img: "", title: "買収・提携の噂まとめ", date: "2025.08.13", category: "News" },
  { id: 3, img: "", title: "北米市場の拡大が続く", date: "2025.07.08", category: "News" },
  { id: 4, img: "", title: "新規法案の最新情報", date: "2025.04.07", category: "News" },
  { id: 5, img: "", title: "カジノリゾート計画の行方", date: "2025.03.19", category: "News" },
];

export const featuredOffers = [
  { href: "/reviews/wonder-casino", logo: "/assets/casino/wonder-casino.png", text: "🎉 Wonder Casino: 入金不要特典" },
  { href: "/bonuses/no-wagering", logo: "/assets/casino/bitstarz.png", text: "🔥 ノーウェージャーボーナス特集" },
  { href: "/payment/bitcoin", logo: "/assets/payments/bitcoin.svg", text: "⚡ Bitcoin: 高速入出金" },
];

export const slotBanners = [
  { href: "/slots/megaways", img: "/assets/slot/gonzos-quest-megaways.jpg", alt: "Gonzo's Quest Megaways", label: "メガウェイズ" },
  { href: "/slots/progressive-jackpot", img: "/assets/slot/geisha-story-jackpot.jpg", alt: "Geisha Story Jackpot", label: "プログレッシブジャックポット" },
  { href: "/slots/high-rtp", img: "/assets/slot/blood-suckers-2.png", alt: "Blood Suckers 2", label: "高RTP" },
];

export const paymentIcons: Record<string, string> = {
  "visa": "/assets/payments/visa.svg",
  "mastercard": "/assets/payments/mastercard.svg",
  "jcb": "/assets/payments/jcb.svg",
  "american-express": "/assets/payments/american-express.svg",
  "bank-transfer": "/assets/payments/bank-transfer.svg",
  "bitcoin": "/assets/payments/bitcoin.svg",
  "ethereum": "/assets/payments/ethereum.svg",
  "tether": "/assets/payments/tether.svg",
  "bitcoin-cash": "/assets/payments/bitcoin-cash.svg",
  "litecoin": "/assets/payments/litecoin.svg",
  "ripple": "/assets/payments/ripple.svg",
  "dash": "/assets/payments/dash.svg",
  "solana": "/assets/payments/solana.svg",
  "shiba-inu": "/assets/payments/shiba-inu.svg",
  "polygon": "/assets/payments/polygon.svg",
  "polkadot": "/assets/payments/polkadot.svg",
  "stellar": "/assets/payments/stellar.svg",
  "payz": "/assets/payments/payz.svg",
  "ecopayz": "/assets/payments/ecopayz.svg",
  "iwallet": "/assets/payments/iwallet.svg",
  "sticpay": "/assets/payments/sticpay.svg",
  "vega-wallet": "/assets/payments/vega-wallet.svg",
  "venus-point": "/assets/payments/venus-point.svg",
  "j-pay": "/assets/payments/j-pay.svg",
  "tiger-pay": "/assets/payments/tiger-pay.svg",
  "muchbetter": "/assets/payments/muchbetter.svg",
  "astropay": "/assets/payments/astropay.svg",
  "paypay": "/assets/payments/paypay.svg",
  "webmoney": "/assets/payments/webmoney.svg",
  "paxos": "/assets/payments/paxos.svg",
  "usdp-stablecoin": "/assets/payments/usdp-stablecoin.svg",
  "terrausd": "/assets/payments/terrausd.svg",
};