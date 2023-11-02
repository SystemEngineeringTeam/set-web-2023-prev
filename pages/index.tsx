import GlobalStyle from "@/const/style/GlobalStyle";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Metadata from "@/component/base/Metadata";
import Loading from "@/component/pages/loading/Loading";
import Header from "@/component/base/header/Header";
import Footer from "@/component/base/footer/Footer";
import { GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/type";

type Props = {
  posts: Post[];
};

const MainContent = dynamic(() => import("@/component/pages/home/Home"), {
  ssr: false,
});

export default function Home({ posts }: Props) {
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

      <Header />
      <Loading isLoading={isLoading} />
      <MainContent posts={posts} />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const contentsDir = path.join(process.cwd(), "public/markdown/posts");
  const filenames = fs.readdirSync(contentsDir);

  const posts = filenames.map((filename) => {
    const filePath = path.join(contentsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const md = matter(fileContents);

    return {
      filename,
      id: md.data.number,
      meta: md.data,
      content: md.content,
    };
  });

  posts.sort((a, b) => {
    if (a.meta.created_at < b.meta.created_at) {
      return 1;
    } else {
      return -1;
    }
  });

  return {
    props: { posts: posts.slice(0, 3) },
  };
};
