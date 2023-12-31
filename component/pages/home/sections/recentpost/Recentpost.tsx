import styled from "styled-components";
import Card from "./components/Card";
import { Post } from "@/type";

const RecentpostEle = styled.section`
  padding: 40px 10px 90px;
`;

const Title = styled.h2`
  padding: 20px;
  font-size: 1.5rem;
  text-align: center;
`;

const Grid = styled.div`
  margin-inline: auto;
  max-width: 1200px;
  padding: 0 20px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
  gap: 30px;
`;

type Props = {
  posts: Post[];
};

export default function RecentpostSection({ posts }: Props) {
  return (
    <RecentpostEle>
      <Title>Recent Post</Title>

      <Grid>
        {posts.slice(0, 3).map((post) => (
          <Card {...post} key={post.meta.title} />
        ))}
      </Grid>
    </RecentpostEle>
  );
}
