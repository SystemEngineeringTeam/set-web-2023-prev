import TopSection from "@/component/pages/home/sections/top/Top";
import About from "./sections/about/About";
import ImageSection from "./sections/img/Image";
import RecentpostSection from "./sections/recentpost/Recentpost";
import { Post } from "@/type";

type Props = {
  posts: Post[];
};

export default function Home({ posts }: Props) {
  return (
    <main>
      <TopSection />
      <About />
      <ImageSection src="/img/top/room.webp" />
      <RecentpostSection posts={posts} />
    </main>
  );
}
