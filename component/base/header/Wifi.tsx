import styled from "styled-components";
import Color from "@/const/Color";

type Props = {
  strength: 1 | 2 | 3 | 4;
};

const Svg = styled.svg`
  height: 15px;
`;

const Path = styled.path`
  fill: ${Color.DARK};
`;

export default function Wifi({ strength }: Props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140.17 99.11">
      <Path d="M54.88,83.91l15.2,15.2,15.2-15.2h0c-8.38-8.38-22.02-8.38-30.41,0Z" />
      {strength >= 2 && (
        <Path d="M37.2,66.23l12.73,12.73c11.11-11.11,29.19-11.11,40.31,0h0s12.73-12.73,12.73-12.73h0c-18.13-18.13-47.63-18.13-65.76,0Z" />
      )}
      {strength >= 3 && (
        <Path d="M19.52,48.55l12.73,12.73c20.86-20.86,54.8-20.86,75.66,0h0s12.73-12.73,12.73-12.73h0c-27.88-27.88-73.24-27.88-101.12,0Z" />
      )}
      {strength >= 4 && (
        <Path d="M125.59,43.6h0s14.57-14.57,14.57-14.57c-38.71-38.71-101.46-38.71-140.17,0l14.57,14.57c30.61-30.61,80.41-30.61,111.02,0Z" />
      )}
    </Svg>
  );
}
