import GlobalStyle from "@/const/style/GlobalStyle";
import Metadata from "@/component/base/Metadata";
import Header from "@/component/base/header/Header";
import Footer from "@/component/base/footer/Footer";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import { Post } from "@/type";
import AwardContent from "@/component/pages/award/Award";

type Props = {
  award: Post;
};

export default function Award({ award }: Props) {
  return (
    <>
      <Metadata subtitle={"Award"} />
      <GlobalStyle />

      <Header />
      <AwardContent award={award} />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const contentsDir = path.join(process.cwd(), "public/markdown/award");
  const filenames = fs.readdirSync(contentsDir);

  const awards = filenames.map((filename) => {
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

  awards.sort((a, b) => {
    if (a.meta.created_at < b.meta.created_at) {
      return 1;
    } else {
      return -1;
    }
  });

  return {
    props: { award: awards[0] },
  };
};
