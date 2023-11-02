import { Center, Main } from "@/component/share";
import { MdStyled } from "@/component/share/md";
import Md2Html from "@/component/share/md2html";
import { Post } from "@/type";
import styled from "styled-components";

const MainMember = styled(Main)`
  margin-bottom: 60px;
`;

type Props = {
  secret: Post;
};

export default function Secret({ secret }: Props) {
  return (
    <MainMember>
      <Center>
        <MdStyled>
          <Md2Html child={secret.content} />
        </MdStyled>
      </Center>
    </MainMember>
  );
}
