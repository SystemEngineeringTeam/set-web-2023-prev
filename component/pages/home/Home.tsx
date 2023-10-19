import TopSection from "@/component/pages/home/sections/top/Top";
import About from "./sections/about/About";
import ImageSection from "./sections/img/Image";
import RecentpostSection from "./sections/recentpost/Recentpost";

export default function Home() {
  return (
    <main>
      <TopSection />
      <About />
      <ImageSection src="/img/top/room.webp" />
      <RecentpostSection />
    </main>
  );
}
