import GlobalStyle from "@/const/style/GlobalStyle";
import Metadata from "@/component/base/Metadata";
import Header from "@/component/base/header/Header";
import Footer from "@/component/base/footer/Footer";
import { GetStaticProps } from "next/types";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import LinksContent from "@/component/pages/links/Links";
import { Post } from "@/type";

type Props = {
  links: Post;
};

export default function Links({ links }: Props) {
  return (
    <>
      <Metadata subtitle={"Links"} />
      <GlobalStyle />

      <Header />
      <LinksContent links={links} />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const contentsDir = path.join(process.cwd(), "public/markdown/links");
  const filenames = fs.readdirSync(contentsDir);

  const links = filenames.map((filename) => {
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

  links.sort((a, b) => {
    if (a.meta.created_at < b.meta.created_at) {
      return 1;
    } else {
      return -1;
    }
  });

  return {
    props: { links: links[0] },
  };
};
