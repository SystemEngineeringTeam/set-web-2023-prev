import Color from "@/const/style/Color";
import styled from "styled-components";

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 10px;
`;

export const Propaty = styled.span<{ gap?: number }>`
  padding-inline: ${(props) => (props.gap ? `${props.gap}px` : "0px")};
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${Color.LIGHT};
  }
`;

export const Spacer = styled.span`
  margin-inline: auto;
`;
