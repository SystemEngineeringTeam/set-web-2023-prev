import { formatdate, getTextFromMd } from "@/component/util/util";
import { Post } from "@/type";
import { useRouter } from "next/router";
import styled from "styled-components";

const CardEle = styled.div`
  height: 230px;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  background-color: var(--background-light);
  position: relative;
  cursor: pointer;
`;

const CardTitle = styled.h3`
  text-align: center;
  font-size: 1.4rem;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CardContent = styled.p`
  height: 150px;
  line-height: 1.5rem;
  overflow: hidden;
  overflow-wrap: break-word;
`;

const CardFooter = styled.div`
  height: 30px;
  text-align: end;
`;

export default function Card(post: Post) {
  const router = useRouter();

  return (
    <CardEle onClick={() => router.push(`/posts/${post.id}`)}>
      <CardTitle>{post.meta.title}</CardTitle>
      <CardContent>{getTextFromMd(post.content)}</CardContent>
      <CardFooter>{formatdate(post.meta.created_at)}</CardFooter>
    </CardEle>
  );
}
