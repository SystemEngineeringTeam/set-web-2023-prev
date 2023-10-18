import Metadata from "@/component/base/Metadata";
import Loading from "@/component/pages/loading/Loading";
import GlobalStyle from "@/const/GlobalStyle";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const MainContent = dynamic(() => import("@/component/pages/home/Home"), {
  ssr: false,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Metadata />
      <GlobalStyle />

      <Loading isLoading={isLoading} />
      <MainContent />
    </>
  );
}
