import styled, { css } from "styled-components";
import Color from "@/const/Color";

type Props = {
  level: number;
  isCharging: boolean;
};

const Svg = styled.svg`
  height: 15px;
  transform: translateY(1.5px);
  margin-left: 3px;
`;

const Path = styled.path`
  fill: ${Color.DARK};
`;

const Polygon = styled.polygon<{ bg?: boolean }>`
  fill: ${(props) => (props.bg ? Color.WHITE : Color.DARK)};
`;

const Rect = styled.rect<{ level: number }>`
  fill: ${Color.DARK};
  width: ${(props) => `${props.level * 0.74}%`};
  height: 69%;
`;

export default function Battery({ level, isCharging }: Props) {
  return (
    <div>
      <span>{Math.round(level)}%</span>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.68 15">
        <Path d="M25.14,15H3.16c-1.74,0-3.16-1.42-3.16-3.16V3.16C0,1.42,1.42,0,3.16,0H25.14c1.74,0,3.16,1.42,3.16,3.16V11.84c0,1.74-1.42,3.16-3.16,3.16ZM3.16,1.42c-.96,0-1.74,.78-1.74,1.74V11.84c0,.96,.78,1.74,1.74,1.74H25.14c.96,0,1.74-.78,1.74-1.74V3.16c0-.96-.78-1.74-1.74-1.74H3.16Z" />
        <Path d="M29.72,4.64v5.62c1.14-.42,1.96-1.52,1.96-2.81s-.82-2.39-1.96-2.81Z" />
        <Rect level={level} x="2.41" y="2.28" />

        <Path d="M29.72,4.67v5.62c1.14-.42,1.96-1.52,1.96-2.81s-.82-2.39-1.96-2.81Z" />
        <Rect level={level} x="2.41" y="2.31" />
        <Path d="M10.78,13.61H3.16c-.96,0-1.74-.78-1.74-1.74V3.19c0-.96,.78-1.74,1.74-1.74H13.55L14.77,.03H3.16C1.42,.03,0,1.44,0,3.19V11.87c0,1.74,1.42,3.16,3.16,3.16h7.2l.42-1.42Z" />
        <Path d="M25.14,.03h-8l-.38,1.42h8.39c.96,0,1.74,.78,1.74,1.74V11.87c0,.96-.78,1.74-1.74,1.74H13.69l-1.21,1.42h12.66c1.74,0,3.16-1.42,3.16-3.16V3.19C28.3,1.44,26.88,.03,25.14,.03Z" />
        {isCharging && (
          <>
            <Polygon
              points="10.36 15.03 12.48 15.03 20.92 5.09 15.76 5.09 17.14 0 14.79 0 6.56 9.61 11.97 9.61 10.36 15.03"
              bg
            />
            <Polygon points="16.11 0 8.74 8.61 13.31 8.61 11.53 14.6 18.76 6.09 14.46 6.09 16.11 0" />
          </>
        )}
      </Svg>
    </div>
  );
}
