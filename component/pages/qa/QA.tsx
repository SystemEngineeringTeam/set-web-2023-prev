import { Center, Main, Title } from "@/component/share";
import { MdStyled } from "@/component/share/md";
import Md2Html from "@/component/share/md2html";
import { Post } from "@/type";

type Props = {
  qa: Post;
};

export default function QAContent({ qa }: Props) {
  return (
    <Main>
      <Center>
        <Title>Q&A</Title>
        <MdStyled>
          <Md2Html child={qa.content} />
        </MdStyled>
      </Center>
    </Main>
  );
}
