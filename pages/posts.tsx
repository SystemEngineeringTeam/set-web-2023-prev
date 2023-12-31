import GlobalStyle from "@/const/style/GlobalStyle";
import Metadata from "@/component/base/Metadata";
import Header from "@/component/base/header/Header";
import Footer from "@/component/base/footer/Footer";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import { Post } from "@/type";
import NewsContent from "@/component/pages/posts/Posts";

type Props = {
  posts: Post[];
};

export default function News({ posts }: Props) {
  return (
    <>
      <Metadata subtitle={"Posts"} />
      <GlobalStyle />

      <Header />
      <NewsContent posts={posts} />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
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
    props: { posts },
  };
};
