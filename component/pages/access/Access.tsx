import { Center, Main, Title } from "@/component/share";
import { MdStyled } from "@/component/share/md";
import Md2Html from "@/component/share/md2html";
import { Post } from "@/type";

type Props = {
  access: Post;
};

export default function AccessContent({ access }: Props) {
  return (
    <Main>
      <Center>
        <Title>Access</Title>
        <MdStyled>
          <Md2Html child={access.content} />
        </MdStyled>
      </Center>
    </Main>
  );
}
