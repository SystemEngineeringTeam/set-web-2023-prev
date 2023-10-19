import styled from "styled-components";
import Color from "@/const/style/Color";
import { useMediaQuery } from "@mantine/hooks";
import { useRecoilState } from "recoil";
import { menuOpenState } from "@/state/state";
import Drawer from "./component/Drawer";
import PhoneMenu from "./component/PhoneMenu";
import BaseMenu from "./component/BaseMenu";
import { Menus, MenusBreakPoint } from "@/const/page/header";

const HeaderEle = styled.header`
  height: 40px;
  padding: 0 10px;
  background-color: ${Color.SECOUNDARY};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(menuOpenState);
  const phoneSize = useMediaQuery(`(max-width: ${MenusBreakPoint}px)`);

  return (
    <HeaderEle>
      {phoneSize ? (
        <>
          <PhoneMenu />
          <Drawer menus={Menus} open={isMenuOpen} setOpen={setIsMenuOpen} />
        </>
      ) : (
        <BaseMenu menus={Menus} />
      )}
    </HeaderEle>
  );
}
