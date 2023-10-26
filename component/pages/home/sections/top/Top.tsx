import Color from "@/const/style/Color";
import App from "./component/App";
import styled from "styled-components";
import { SNSName } from "@/type";
import { SNSAccount } from "@/const/md/sns";
import { DesctopImages, TopText } from "@/const/md/home";
import { useEffect, useState } from "react";

const TopEle = styled.section`
  height: 100vh;
  padding-top: 40px;
  position: relative;
  background-color: ${Color.WHITE};
`;

const Center = styled.div`
  margin: auto;
  height: fit-content;
  width: fit-content;
  inset: 0;
  position: absolute;
  z-index: 2;
`;

const Title = styled.h1`
  color: ${Color.DARK};
  font-size: 2.5rem;
  text-align: center;
  text-shadow: 3px 3px white;

  @media (width < 800px) {
    font-size: 2rem;
  }
`;

const Desctop = styled.div`
  height: 100%;
  padding: 40px;
  display: grid;
  justify-content: right;
  gap: 20px;
  grid-auto-flow: column;
  grid-template-rows: repeat(auto-fit, 50px);
  grid-template-columns: repeat(auto-fit, 50px);
  position: relative;
  z-index: 1;

  @media (width < 800px) {
    grid-auto-flow: row;
    justify-content: left;
  }
`;

const ImageSwitch = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  inset: 0px;
  object-fit: cover;
  color: transparent;
  filter: opacity(0.7) blur(1px);
  animation: easing 5s;

  @keyframes easing {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default function TopSection() {
  const [img, setImg] = useState<string | null>(null);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    if (img) return;
    setInterval(() => {
      setImgIndex((imgIndex) => (imgIndex + 1) % DesctopImages.length);
    }, 5000);
  }, [img]);

  useEffect(() => {
    setImg(DesctopImages[imgIndex % DesctopImages.length]);
  }, [imgIndex]);

  function ImageSwicher() {
    if (!img) return null;
    return <ImageSwitch src={img} alt="デスクトップ背景" />;
  }

  return (
    <TopEle>
      <Center>
        {TopText.map((text) => (
          <Title key={text}>{text}</Title>
        ))}
      </Center>

      <ImageSwicher />

      <Desctop>
        {Object.keys(SNSAccount).map((snsName) => (
          <App
            snsName={snsName as SNSName}
            id={SNSAccount[snsName as SNSName]!}
            color={Color.DARK}
            fill={Color.SECOUNDARY}
            key={snsName}
          />
        ))}
      </Desctop>
    </TopEle>
  );
}
