import styled from "styled-components";
import Card from "./components/Card";
import { Posts } from "@/const/md/home";

const RecentpostEle = styled.section`
  padding: 30px 10px 50px;
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

export default function RecentpostSection() {
  return (
    <RecentpostEle>
      <Title>Recent Post</Title>

      <Grid>
        {Posts.slice(0, 3).map((post) => (
          <Card {...post} key={post.title} />
        ))}
      </Grid>
    </RecentpostEle>
  );
}
