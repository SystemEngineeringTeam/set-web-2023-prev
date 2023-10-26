import { Center, Main } from "@/component/share";
import { formatdate } from "@/component/util/util";
import { Post } from "@/type";
import styled from "styled-components";
import { MdStyled } from "@/component/share/md";
import Color from "@/const/style/Color";
import { useRouter } from "next/router";
import Md2Html from "@/component/share/md2html";

const Top = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  position: relative;

  &:after {
    content: "";
    width: 100%;
    height: 1px;
    display: block;
    background-color: #000;
    position: absolute;
  }
`;

const Date = styled.div`
  text-align: end;
`;

const Back = styled.span`
  background-color: ${Color.SECOUNDARY};
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const Bottom = styled.div`
  margin-top: 50px;
  padding: 20px 0;
  border-top: 1px solid #000;
`;

type Props = {
  post: Post;
};

export default function Post({ post }: Props) {
  const router = useRouter();

  return (
    <Main>
      <Center>
        <Top>
          <Title>{post.meta.title}</Title>
          <Date>投稿日: {formatdate(post.meta.created_at)}</Date>
        </Top>

        <MdStyled>
          <Md2Html child={post.content} />
        </MdStyled>

        <Bottom>
          <Back onClick={() => router.back()}>戻る</Back>
        </Bottom>
      </Center>
    </Main>
  );
}
