import { Center, Main, Title } from "@/component/share";
import { MdStyled } from "@/component/share/md";
import Md2Html from "@/component/share/md2html";
import { Post } from "@/type";

type Props = {
  links: Post;
};

export default function LinksComponent({ links }: Props) {
  return (
    <Main>
      <Center>
        <Title>Links</Title>
        <MdStyled>
          <Md2Html child={links.content} />
        </MdStyled>
      </Center>
    </Main>
  );
}
