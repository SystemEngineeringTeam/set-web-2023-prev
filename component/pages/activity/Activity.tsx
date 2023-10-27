import { Center, Main, Title } from "@/component/share";
import { MdStyledOther } from "@/component/share/md";
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
        <MdStyledOther>
          <Md2Html child={activity.content} />
        </MdStyledOther>
      </Center>
    </Main>
  );
}
