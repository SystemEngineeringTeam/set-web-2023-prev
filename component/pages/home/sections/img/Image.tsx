import Color from "@/const/style/Color";
import styled from "styled-components";

const ImageEle = styled.section<{ url: string }>`
  width: 100vw;
  height: 100vh;
  background-color: ${Color.WHITE};
  position: relative;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  filter: opacity(0.9);
`;

type Props = {
  src: string;
};

export default function ImageSection({ src }: Props) {
  return <ImageEle url={src}></ImageEle>;
}
