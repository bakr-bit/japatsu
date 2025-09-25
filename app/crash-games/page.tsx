import CrashGamesTemplate, { CrashGamesPageData } from "@/components/templates/CrashGamesTemplate";

const data: CrashGamesPageData = {
  title: "クラッシュゲーム",
  banner: {
    title: "クラッシュゲーム入門",
    subheading: "Crash Games",
    description: "上昇する倍率でキャッシュアウト！仕組みとコツを解説。",
  },
  mechanics: ["ラウンドごとに倍率が上昇", "クラッシュ前にキャッシュアウトで確定", "自動キャッシュアウトや分割も活用"],
  tips: ["利確ラインを決める", "オート機能を活用", "無理な追いは禁物"],
};

export default function Page() {
  return <CrashGamesTemplate data={data} />;
}
