import GlobalStyle from "@/const/style/GlobalStyle";
import Metadata from "@/component/base/Metadata";
import Header from "@/component/base/header/Header";
import Footer from "@/component/base/footer/Footer";
import { GetStaticProps } from "next/types";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import AccessContent from "@/component/pages/access/Access";
import { Post } from "@/type";

type Props = {
  access: Post;
};

export default function Access({ access }: Props) {
  return (
    <>
      <Metadata subtitle={"Access"} />
      <GlobalStyle />

      <Header />
      <AccessContent access={access} />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const contentsDir = path.join(process.cwd(), "public/markdown/access");
  const filenames = fs.readdirSync(contentsDir);

  const accesses = filenames.map((filename) => {
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

  accesses.sort((a, b) => {
    if (a.meta.created_at < b.meta.created_at) {
      return 1;
    } else {
      return -1;
    }
  });

  return {
    props: { access: accesses[0] },
  };
};
