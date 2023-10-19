import styled from "styled-components";
import { useRouter } from "next/router";
import Color from "@/const/style/Color";
import CloseIcon from "@mui/icons-material/Close";

const DrawerWrapper = styled.div<{ open: boolean }>`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: background-color 0.3s;
  background-color: rgba(0, 0, 0, ${(props) => (props.open ? 0.5 : 0)});
  pointer-events: ${(props) => (props.open ? "auto" : "none")};

  & > div {
    height: 100vh;
    width: min(100vw, 300px);
    background-color: ${Color.WHITE};
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1100;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(100%)"};
    transition: all 0.3s;

    box-shadow: -0.7px 0 3.6px rgba(0, 0, 0, 0.014),
      -2.7px 0 10px rgba(0, 0, 0, 0.02), 7.8px 7px 24.1px rgba(0, 0, 0, 0.026),
      -27px 0 80px rgba(0, 0, 0, 0.04);
  }
`;

const DrawerClose = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
`;

const DrowerList = styled.ul`
  padding: 20px 0 10px 30px;

  & > li {
    padding: 10px 0;
    list-style: none;
    position: relative;
    cursor: pointer;

    &:before {
      content: "";
      width: 8px;
      height: 1px;
      background-color: ${Color.PRIMARY};
      position: absolute;
      top: 22px;
      left: -14px;
    }
  }
`;

type Props = {
  menus: readonly Menu[];
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function Drawer({ menus, open, setOpen }: Props) {
  const router = useRouter();

  return (
    <DrawerWrapper open={open} onClick={() => setOpen(false)}>
      <div>
        <DrawerClose onClick={() => setOpen(false)}>
          <CloseIcon />
        </DrawerClose>

        <DrowerList>
          {menus.map((menu) => (
            <li
              key={menu.link}
              onClick={() => {
                setOpen(false);
                router.push(menu.link);
              }}
            >
              {menu.title}
            </li>
          ))}
        </DrowerList>
      </div>
    </DrawerWrapper>
  );
}
