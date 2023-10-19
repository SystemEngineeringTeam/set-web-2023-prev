import Color from "@/const/style/Color";
import styled from "styled-components";

const TopEle = styled.section`
  height: 100vh;
  padding-top: 40px;
  position: relative;
  background-color: ${Color.LIGHT};
  background-image: linear-gradient(
    135deg,
    ${Color.LIGHT} 0%,
    ${Color.PRIMARY} 100%
  );
`;

const Center = styled.div`
  margin: auto;
  height: fit-content;
  width: fit-content;
  inset: 0;
  position: absolute;
`;

const Title = styled.h1`
  color: ${Color.WHITE};
  font-size: 2.5rem;
  text-align: center;
`;

export default function TopSection() {
  return (
    <TopEle>
      <Center>
        <Title>ようこそ</Title>
        <Title>システム工学研究会へ</Title>
      </Center>
    </TopEle>
  );
}
