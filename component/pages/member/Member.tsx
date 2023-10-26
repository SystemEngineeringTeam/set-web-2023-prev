import { Center, Main, Title } from "@/component/share";
import { MdStyledMember } from "@/component/share/md";
import Md2Html from "@/component/share/md2html";
import { Post } from "@/type";
import styled from "styled-components";

type Props = {
  member: Post;
};

export default function Member({ member }: Props) {
  return (
    <Main>
      <Center>
        <Title>Member</Title>
        <MdStyledMember>
          <Md2Html child={member.content} />
        </MdStyledMember>
      </Center>
    </Main>
  );
}
