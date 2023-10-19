import Color from "@/const/style/Color";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div<{ loaded: boolean }>`
  margin: auto;
  width: 100vw;
  height: 100vh;
  padding: 20px 10px;
  color: ${Color.WHITE};
  background-color: ${Color.DARK};
  font-size: 1.2rem;
  inset: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  transition: opacity 0.3s;
  opacity: ${(props) => (props.loaded ? 0 : 1)};
  pointer-events: ${(props) => (props.loaded ? "none" : "auto")};
`;

const Center = styled.div`
  margin: auto;
  height: fit-content;
  width: fit-content;
  inset: 0;
  position: absolute;
`;

type Props = {
  isLoading: boolean;
};

export default function Loading({ isLoading }: Props) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (isLoading) return;
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, [isLoading]);

  return (
    <Wrapper loaded={loaded}>
      <Center>Hello, World!</Center>
    </Wrapper>
  );
}
