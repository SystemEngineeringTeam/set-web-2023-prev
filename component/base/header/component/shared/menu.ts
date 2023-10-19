import styled from "styled-components";

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 10px;
`;

export const Propaty = styled.span<{ gap?: number }>`
  cursor: pointer;
  padding-inline: ${(props) => (props.gap ? `${props.gap}px` : "0px")};
`;

export const Spacer = styled.span`
  margin-inline: auto;
`;
