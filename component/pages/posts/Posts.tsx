import { Center, Main, Title } from "@/component/share";
import { formatdate } from "@/component/util/util";
import { Post } from "@/type";
import { useRouter } from "next/router";
import styled from "styled-components";

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

export default function Posts({ posts }: Props) {
  const router = useRouter();

  return (
    <Main>
      <Center>
        <Title>Posts</Title>

        {posts.map((post) => (
          <Post onClick={() => router.push(`/posts/${post.id}`)} key={post.id}>
            <span>{formatdate(post.meta.created_at)}</span>
            <h2>{post.meta.title}</h2>
          </Post>
        ))}
      </Center>
    </Main>
  );
}
