import styled, { css } from "styled-components";
import { color } from "@/const/Color";

type Props = {
  level: number;
};

const Svg = styled.svg`
  height: 15px;
  transform: translateY(1.5px);
  margin-left: 3px;
`;

const Path = styled.path`
  fill: ${color.DARK};
`;

const Rect = styled.rect<{ level: number }>`
  fill: ${color.DARK};
  width: ${(props) => `${props.level * 0.74}%`};
  height: 73.45px;
`;

export default function Battery({ level }: Props) {
  return (
    <div>
      <span>
        {Math.round(level)}%
      </span>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 223.08 105.61">
        <Path d="M177,105.61H22.25c-12.27,0-22.25-9.98-22.25-22.25V22.25C0,9.98,9.98,0,22.25,0H177c12.27,0,22.25,9.98,22.25,22.25v61.12c0,12.27-9.98,22.25-22.25,22.25ZM22.25,10c-6.75,0-12.25,5.5-12.25,12.25v61.12c0,6.75,5.5,12.25,12.25,12.25H177c6.75,0,12.25-5.5,12.25-12.25V22.25c0-6.75-5.5-12.25-12.25-12.25H22.25Z" />
        <Path d="M209.26,32.7v39.6c8.06-2.98,13.81-10.71,13.81-19.8s-5.75-16.82-13.81-19.8Z" />
        <Rect level={level} x="17" y="16.08" />
      </Svg>
    </div>
  );
}
