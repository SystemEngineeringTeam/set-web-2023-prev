import { Center, Main, Title } from "@/component/share";
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
        <Md2Html child={access.content} />
      </Center>
    </Main>
  );
}
