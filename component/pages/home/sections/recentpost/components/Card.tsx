import { Post } from "@/type";
import styled from "styled-components";

const CardEle = styled.div`
  height: 200px;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  background-color: var(--background-light);
  position: relative;
`;

const CardTitle = styled.h3`
  text-align: center;
  font-size: 1.6rem;
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

export default function Card(post: Post) {
  return (
    <CardEle>
      <CardTitle>{post.title}</CardTitle>
      <CardContent>{post.content}</CardContent>
    </CardEle>
  );
}
