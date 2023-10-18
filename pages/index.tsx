import Metadata from "@/component/base/Metadata";
import Header from "@/component/base/header/Header";
import TopSection from "@/component/pages/sections/top/Top";
import GlobalStyle from "@/const/GlobalStyle";

export default function Home() {
  return (
    <>
      <Metadata />

      <GlobalStyle />
      <main>
        <Header />
        <TopSection />
      </main>
    </>
  );
}
