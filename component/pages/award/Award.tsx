import { Center, Main, Title } from "@/component/share";
import { MdStyledMember } from "@/component/share/md";
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
        <MdStyledMember>
          <Md2Html child={award.content} />
        </MdStyledMember>
      </Center>
    </Main>
  );
}
