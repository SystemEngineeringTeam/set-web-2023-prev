import { Menus } from "@/const/page/header";
import Color from "@/const/style/Color";
import styled from "styled-components";

const OtherEle = styled.section`
  padding: 40px 20px;
  background-color: ${Color.SECOUNDARY_LIGHT};
  display: flex;
  justify-content: space-around;
`;

const Link = styled.div`
  width: 80px;
  text-align: center;
`;

export default function OtherSection() {
  return (
    <OtherEle>
      {Menus.map((menu) => (
        <Link key={menu.title}>{menu.title}</Link>
      ))}
    </OtherEle>
  );
}
