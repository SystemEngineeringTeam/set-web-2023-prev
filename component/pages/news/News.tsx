import { Post } from "@/type";
import { useRouter } from "next/router";
import styled from "styled-components";

const Main = styled.main`
  margin-top: 40px;
  min-height: calc(100vh - 290px);
  padding: 30px;
`;

const Wrapper = styled.div`
  margin-inline: auto;
  width: 100%;
  max-width: 800px;
`;

const Post = styled.div`
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f5f5f5;
  }
`;

type Props = {
  posts: Post[];
};

export default function News({ posts }: Props) {
  const router = useRouter();

  function formatdate(date: string) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();

    return `${year}年${month}月${day}日`;
  }

  return (
    <Main>
      <Wrapper>
        {posts.map((post) => (
          <Post onClick={() => router.push(`/news/${post.id}`)} key={post.id}>
            <span>{formatdate(post.meta.created_at)}</span>
            <h2>{post.meta.title}</h2>
          </Post>
        ))}
      </Wrapper>
    </Main>
  );
}
