import Color from "@/const/style/Color";
import App from "./component/App";
import styled from "styled-components";
import { SNSName } from "@/type";
import { SNSAccount } from "@/const/md/sns";
import { TopText } from "@/const/md/home";

const TopEle = styled.section`
  height: 100vh;
  padding-top: 40px;
  position: relative;
  background-color: ${Color.LIGHT};
  background-image: linear-gradient(
    225deg,
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

const Desctop = styled.div`
  height: 100%;
  padding: 20px;
  display: grid;
  justify-content: right;
  gap: 20px;
  grid-auto-flow: column;
  grid-template-rows: repeat(auto-fit, 70px);
  grid-template-columns: repeat(auto-fit, 70px);
`;

export default function TopSection() {
  return (
    <TopEle>
      <Center>
        {TopText.map((text) => (
          <Title key={text}>{text}</Title>
        ))}
      </Center>

      <Desctop>
        {Object.keys(SNSAccount).map((snsName) => (
          <App
            snsName={snsName as SNSName}
            id={SNSAccount[snsName as SNSName]!}
            color={Color.DARK}
            fill={Color.WHITE}
            key={snsName}
          />
        ))}
      </Desctop>
    </TopEle>
  );
}
