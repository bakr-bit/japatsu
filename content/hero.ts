import { HeroSlide } from "@/components/ui/HeroSlider";

// Edit this array to manage the homepage hero slider.
// Each slide supports its own image(s), label(s) and target link.
// Images usually live in /public/banner, but any public path works.

const slides: HeroSlide[] = [
  {
    id: "announcement",
    desktopImg: "/banner/banner-announcement-01.png",
    mobileImg: "/banner/banner-announcement-01.png",
    link: "/news",
    navTitle: "最新告知",
    navSubtitle: "お知らせ",
    navIcon: "",
  },
  {
    id: "beginner",
    desktopImg: "/banner/banner-beginner-guide-01.png",
    mobileImg: "/banner/banner-beginner-guide-01.png",
    link: "/guides",
    navTitle: "ビギナーガイド",
    navSubtitle: "はじめての方へ",
    navIcon: "",
  },
  {
    id: "bonus-new",
    desktopImg: "/banner/banner-bonus-new-01.png",
    mobileImg: "/banner/banner-bonus-new-01.png",
    link: "/bonuses",
    navTitle: "最新ボーナス",
    navSubtitle: "見逃せない特典",
    navIcon: "",
  },
];

export default slides;
