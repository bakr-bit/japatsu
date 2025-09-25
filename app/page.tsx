import TopBanner from "../components/ui/TopBanner";
import HeroSlider from "../components/ui/HeroSlider";
import MarqueeStrip from "../components/ui/MarqueeStrip";
import ImageBannerGrid from "../components/ui/ImageBannerGrid";
import FeaturedOfferStrip from "../components/ui/FeaturedOfferStrip";
import CuratedPicksGrid from "../components/ui/CuratedPicksGrid";
import TrustAndSafetySection from "../components/ui/TrustAndSafetySection";
import InformationHubSection from "../components/ui/InformationHubSection";
import TextBanner from "../components/ui/TextBanner";
import Quiz from "../components/ui/Quiz";
import SectionTitle from "../components/ui/SectionTitle";
import BonusCard from "../components/ui/BonusCard";
import HorizontalScroller from "../components/ui/HorizontalScroller";
import RankingCard from "../components/ui/RankingCard";
import ArticleCard from "../components/ui/ArticleCard";
import SidebarSection from "../components/ui/SidebarSection";
import SidebarMediaGrid from "../components/ui/SidebarMediaGrid";
import SidebarList from "../components/ui/SidebarList";
import CategoryIntroductionSection from "../components/ui/CategoryIntroductionSection";
import { homeBonuses, toplistCasinos, sidebarContents, paymentIcons, newsArticles, featuredOffers, slotBanners } from "../lib/data";
import heroSlides from "@/content/hero";

export default function Home() {
  

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header is now provided globally in RootLayout */}

      {/* Hero */}
      {heroSlides && heroSlides.length > 0 ? <HeroSlider slides={heroSlides as any} /> : null}
      
      
      {/* Featured offers strip under hero */}
      <FeaturedOfferStrip items={featuredOffers} />

      {/* Main content */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column */}
        <div className="lg:col-span-9 space-y-10">
          {/* Bonuses */}
          <section>
            <SectionTitle subtitle="おすすめ ✨" title="最新ボーナス 🎁" />
           
            <HorizontalScroller>
              {homeBonuses.map((b) => (
                <div key={b.id} className="snap-start">
                  <BonusCard bonus={b} />
                </div>
              ))}
            </HorizontalScroller>
          </section>


          {/* Slot banners */}
          <section>
            <SectionTitle subtitle="" title="スロット！ 🎰" />
            <ImageBannerGrid items={slotBanners} className="mt-4" />
          </section>


          {/* Rankings */}
          <section>
            <SectionTitle subtitle="今月のおすすめ ✨" title="人気ランキング 🔥" />
            <div className="space-y-6">
              {toplistCasinos.map((c) => (
                <RankingCard
                  key={c.id}
                  casino={{
                    ...c,
                    img: c.image,
                    name: c.title,
                    description: c.info ?? '',
                    playHref: "#",
                    detailsHref: "#",
                    responsibleHref: "/info/responsible-gambling",
                  }}
                  paymentIconMap={paymentIcons}
                />
              ))}
            </div>
          </section>

          {/* Curated picks */}
          <CuratedPicksGrid
            items={toplistCasinos.slice(0, 6).map((c) => ({
              img: c.image,
              name: c.title,
              ratingScore: c.rating ?? 0,
              description: c.info ?? '',
              playHref: c.link,
              detailsHref: c.link,
            }))}
          />


          {/* News */}
          <section>
            <SectionTitle subtitle="最新情報 🗞️" title="ニュース 📰" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {newsArticles.map((a) => (
                <ArticleCard
                  key={a.id}
                  article={{ ...a, href: "/news" }}
                />
              ))}
            </div>
          </section>

          {/* Page-wide content begins after this container */}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-3 space-y-6">
          <SidebarSection title="人気ランキング" seeMoreHref="/reviews">
            <SidebarList
              items={toplistCasinos.slice(0, 5).map((c, index) => ({
                href: c.link,
                name: c.title,
                img: c.image,
              }))}
            />
          </SidebarSection>



          {/* Exclusive Offers */}
          <SidebarSection title="CasinoTsu限定！ 激アツオファー 🔥" seeMoreHref="/offers">
            <SidebarMediaGrid
              items={[
                { href: "#", img: "", alt: "Offer 1" },
                { href: "#", img: "", alt: "Offer 2" },
                { href: "#", img: "", alt: "Offer 3" },
              ]}
            />
          </SidebarSection>

          {/* Popular Slots */}
          <SidebarSection title="人気スロット 🎰" seeMoreHref="/slots">
            <SidebarList
              items={[
                { href: "/slots/free", name: "無料スロット", img: "/assets/slot/big-bass-bonanza.png" },
                { href: "/slots/megaways", name: "メガウェイズ", img: "/assets/slot/gonzos-quest-megaways.jpg" },
                { href: "/slots/high-rtp", name: "高RTP", img: "/assets/slot/blood-suckers-2.png" },
                { href: "/slots/progressive-jackpot", name: "プログレッシブ", img: "/assets/slot/geisha-story-jackpot.jpg" },
                { href: "/slots/high-volatility", name: "高ボラティリティ", img: "/assets/slot/1429-uncharted-seas.jpg" },
              ]}
            />
          </SidebarSection>

          {/* Popular Game Providers */}
          <SidebarSection title="人気ゲームプロバイダー 🧩" seeMoreHref="/providers">
            <SidebarList
              items={[
                { href: "/providers", name: "NetEnt", img: "/assets/provider/netent.png" },
                { href: "/providers", name: "Play'n GO", img: "/assets/provider/playn-go.png" },
                { href: "/providers", name: "Pragmatic Play", img: "/assets/provider/pragmatic-play.png" },
                { href: "/providers", name: "Microgaming", img: "/assets/provider/microgaming.png" },
                { href: "/providers", name: "Yggdrasil", img: "/assets/provider/yggdrasil.png" },
              ]}
            />
          </SidebarSection>

          {/* Deposit/Withdrawal Methods */}
          <SidebarSection title="入出金方法 💳" seeMoreHref="/payment">
            <SidebarList
              items={[
                { href: "/payment/visa", name: "VISA", img: paymentIcons["visa"] },
                { href: "/payment/mastercard", name: "Mastercard", img: paymentIcons["mastercard"] },
                { href: "/payment/bank-transfer", name: "銀行振込", img: paymentIcons["bank-transfer"] },
                { href: "/payment/bitcoin", name: "Bitcoin", img: paymentIcons["bitcoin"] },
                { href: "/payment/ethereum", name: "Ethereum", img: paymentIcons["ethereum"] },
              ]}
            />
          </SidebarSection>
        </div>
      </div>
      

      {/* Trust & Safety (wide, not full) */}
      <div className="mx-auto max-w-screen-xl">
        <TrustAndSafetySection fullWidth />
      </div>

      {/* Info banner (wide, not full) */}
      <div className="mx-auto max-w-screen-xl">
      <TextBanner
        subtitle="インフォメーション"
        title="ポリシー・評価基準・ガイドはこちら"
        cta={{ href: "/info", label: "詳しく見る" }}
        variant="neutral"
        align="center"
        fullWidth
      >
        透明性の高い評価プロセスと、信頼と安全のための実践的ガイドをまとめました。
      </TextBanner>
      </div>

      {/* Information hub (wide, not full) */}
      <div className="mx-auto max-w-screen-xl">
        <InformationHubSection fullWidth />
      </div>


      {/* QA handoff to quiz (wide, not full) */}

      {/* Mini quiz (wide, not full) */}
      <div className="px-4">
        <div className="mx-auto max-w-screen-xl">
          <Quiz className="mt-4" />
        </div>
      </div>

      {/* Category intro (wide, not full) */}
      <div className="px-4 py-8">
        <div className="mx-auto max-w-screen-xl">
          <CategoryIntroductionSection />
        </div>
      </div>
    </div>
  );
}
