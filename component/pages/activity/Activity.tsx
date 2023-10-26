import { Center, Main, Title } from "@/component/share";
import { MdStyledMember } from "@/component/share/md";
import Md2Html from "@/component/share/md2html";
import { Post } from "@/type";

type Props = {
  activity: Post;
};

export default function ActivityContent({ activity }: Props) {
  return (
    <Main>
      <Center>
        <Title>Activity</Title>
        <MdStyledMember>
          <Md2Html child={activity.content} />
        </MdStyledMember>
      </Center>
    </Main>
  );
}
