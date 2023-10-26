import Metadata from "@/component/base/Metadata";
import Footer from "@/component/base/footer/Footer";
import Header from "@/component/base/header/Header";
import { Main } from "@/component/share";
import Color from "@/const/style/Color";
import GlobalStyle from "@/const/style/GlobalStyle";
import { useRouter } from "next/router";
import styled from "styled-components";

const Wrapper = styled(Main)`
  height: calc(100vh - 40px);
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Center = styled.div`
  display: block;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 4rem;
  font-weight: bold;
`;

const ToTopBtn = styled.span`
  color: ${Color.WHITE};
  background-color: ${Color.LIGHT};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${Color.SECOUNDARY};
  }
`;

export default function NotFound() {
  const router = useRouter();

  return (
    <>
      <Metadata />
      <GlobalStyle />

      <Header />
      <Wrapper>
        <Center>
          <Title>404 not found.</Title>
          <ToTopBtn onClick={() => router.push("/")}>トップへ</ToTopBtn>
        </Center>
      </Wrapper>
    </>
  );
}
