import GlobalStyle from "@/const/style/GlobalStyle";
import Metadata from "@/component/base/Metadata";
import Header from "@/component/base/header/Header";
import Footer from "@/component/base/footer/Footer";
import { GetStaticProps } from "next/types";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import QAContent from "@/component/pages/qa/QA";
import { Post } from "@/type";

type Props = {
  qa: Post;
};

export default function QA({ qa }: Props) {
  return (
    <>
      <Metadata subtitle={"Q&A"} />
      <GlobalStyle />

      <Header />
      <QAContent qa={qa} />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const contentsDir = path.join(process.cwd(), "public/markdown/qa");
  const filenames = fs.readdirSync(contentsDir);

  const qas = filenames.map((filename) => {
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

  qas.sort((a, b) => {
    if (a.meta.created_at < b.meta.created_at) {
      return 1;
    } else {
      return -1;
    }
  });

  return {
    props: { qa: qas[0] },
  };
};
