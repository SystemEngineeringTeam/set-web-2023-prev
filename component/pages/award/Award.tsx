import { Center, Main, Title } from "@/component/share";
import Md2Html from "@/component/share/md2html";
import { Post } from "@/type";

type Props = {
  award: Post;
};

export default function AwardContent({ award }: Props) {
  return (
    <Main>
      <Center>
        <Title>Award</Title>
        <Md2Html child={award.content} />
      </Center>
    </Main>
  );
}
