import GlobalStyle from "@/const/style/GlobalStyle";
import Metadata from "@/component/base/Metadata";
import Header from "@/component/base/header/Header";
import Footer from "@/component/base/footer/Footer";
import { GetStaticProps } from "next/types";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { Post } from "@/type";
import Secret from "@/component/pages/secret/Secret";

type Props = {
  secret: Post;
};

export default function Member({ secret }: Props) {
  return (
    <>
      <Metadata subtitle={"Secret"} />
      <GlobalStyle />

      <Header />
      <Secret secret={secret} />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const contentsDir = path.join(process.cwd(), "public/markdown/secret");
  const filenames = fs.readdirSync(contentsDir);

  const secrets = filenames.map((filename) => {
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

  const secret = secrets[0];
  secret.content = secrets.map((s) => s.content).join("\n");

  return {
    props: { secret: secret },
  };
};
