import styled from "styled-components";
import Color from "@/const/style/Color";
import {
  MenuWrapper,
  Propaty,
  Spacer,
} from "@/component/base/header/component/shared/menu";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { menuOpenState } from "@/state/state";

const Hamberger = styled.div<{ open: boolean }>`
  height: 20px;
  width: 30px;
  position: relative;
  counter-reset: i 0;

  & > div {
    height: 2px;
    width: 100%;
    background-color: ${Color.DARK};
    position: absolute;
    top: calc(var(--i) * 9px);
    transition: all 0.3s;

    &:nth-of-type(1) {
      top: ${(props) => (props.open ? "10px" : "0px")};
      rotate: ${(props) => (props.open ? "45deg" : "0deg")};
    }
    &:nth-of-type(2) {
      top: 9px;
      opacity: ${(props) => (props.open ? "0" : "1")};
    }
    &:nth-of-type(3) {
      top: ${(props) => (props.open ? "10px" : "18px")};
      rotate: ${(props) => (props.open ? "-45deg" : "0deg")};
    }
  }
`;

export default function PhoneMenu() {
  const [open, setOpen] = useRecoilState(menuOpenState);
  const router = useRouter();

  return (
    <MenuWrapper>
      <img
        src="/img/set.webp"
        alt="logo"
        height={60}
        width={60}
        css={`
          cursor: pointer;
        `}
        onClick={() => router.push("/")}
      />
      <Propaty gap={5} onClick={() => router.push("/")}>
        シス研
      </Propaty>

      <Spacer />

      <Hamberger open={open} onClick={() => setOpen(true)}>
        <div></div>
        <div></div>
        <div></div>
      </Hamberger>
    </MenuWrapper>
  );
}
