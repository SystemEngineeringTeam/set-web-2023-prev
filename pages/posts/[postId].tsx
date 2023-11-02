import GlobalStyle from "@/const/style/GlobalStyle";
import Metadata from "@/component/base/Metadata";
import Header from "@/component/base/header/Header";
import Footer from "@/component/base/footer/Footer";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import { Post } from "@/type";
import PostComponent from "@/component/pages/post/Post";

type Props = {
  post: Post;
};

export default function Post({ post }: Props) {
  return (
    <>
      <Metadata subtitle={"Post"} />
      <GlobalStyle />

      <Header />
      <PostComponent post={post} />
      <Footer />
    </>
  );
}

type Context = {
  params: {
    postId: string;
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  const { params } = context as Context;
  const filename = `${params.postId}.html.md`;
  const filePath = path.join(
    process.cwd(),
    `public/markdown/posts/${filename}`
  );
  const fileContents = fs.readFileSync(filePath, "utf8");
  const md = matter(fileContents);

  const post = {
    filename,
    id: md.data.number,
    meta: md.data,
    content: md.content,
  };

  return {
    props: { post },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const contentsDir = path.join(process.cwd(), "public/markdown/posts");
  const filenames = fs.readdirSync(contentsDir);

  const postPaths = filenames.map((filename) => {
    const filePath = path.join(contentsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const md = matter(fileContents);

    return { params: { postId: `${md.data.number}` } };
  });

  return {
    paths: postPaths,
    fallback: false,
  };
};
