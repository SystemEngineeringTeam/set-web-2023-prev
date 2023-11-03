import { Menus } from "@/const/page/header";
import Color from "@/const/style/Color";
import { useRouter } from "next/router";
import styled from "styled-components";

const FooterEle = styled.footer`
  /* height: 250px; */
  line-height: 25px;
  color: ${Color.WHITE};
  background-color: ${Color.LIGHT};
`;

const Container = styled.div`
  /* height: 220px; */
  padding: 30px 100px;

  @media (width < 800px) {
    padding: 30px 40px;
  }
`;

const Link = styled.div`
  cursor: pointer;
  transition: color .3s;

  &:hover {
    color: ${Color.SECOUNDARY_LIGHT};
  }
`;

const Copyright = styled.p`
  margin-inline: 20px;
  line-height: 28px;
  text-align: center;
  border-top: 1px solid ${Color.WHITE};
`;

export default function Footer() {
  const router = useRouter();

  return (
    <FooterEle>
      <Container>
        {Menus.map((menu) => (
          <Link key={menu.title} onClick={() => router.push(menu.link)}>
            {menu.title}
          </Link>
        ))}
      </Container>
      <Copyright>SET @ 2023 Copyright.</Copyright>
    </FooterEle>
  );
}
