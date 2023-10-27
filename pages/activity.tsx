import GlobalStyle from "@/const/style/GlobalStyle";
import Metadata from "@/component/base/Metadata";
import Header from "@/component/base/header/Header";
import Footer from "@/component/base/footer/Footer";
import { GetStaticProps } from "next/types";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import ActivityContent from "@/component/pages/activity/Activity";
import { Post } from "@/type";

type Props = {
  activity: Post;
};

export default function Activity({ activity }: Props) {
  return (
    <>
      <Metadata subtitle={"Activity"} />
      <GlobalStyle />

      <Header />
      <ActivityContent activity={activity} />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const contentsDir = path.join(process.cwd(), "public/markdown/activity");
  const filenames = fs.readdirSync(contentsDir);

  const activities = filenames.map((filename) => {
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

  activities.sort((a, b) => {
    if (a.meta.created_at < b.meta.created_at) {
      return 1;
    } else {
      return -1;
    }
  });

  return {
    props: { activity: activities[0] },
  };
};
