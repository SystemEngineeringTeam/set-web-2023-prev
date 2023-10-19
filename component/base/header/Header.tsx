import styled from "styled-components";
import Color from "@/const/Color";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toDigits } from "@/util/util";
import Battery from "./Battery";
import Image from "next/image";
import { useMediaQuery } from "@mantine/hooks";
import { useRecoilState } from "recoil";
import { menuOpenState } from "@/state/state";
import CloseIcon from "@mui/icons-material/Close";

const HeaderEle = styled.header`
  height: 40px;
  padding: 0 10px;
  background-color: ${Color.WHITE};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 10px;
`;

const Propaty = styled.span<{ gap?: number }>`
  cursor: pointer;
  padding-inline: ${(props) => (props.gap ? `${props.gap}px` : "0px")};
`;

const Time = styled.span<{ width?: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : "initial")};
  text-align: center;
  display: inline-block;
`;

const Spacer = styled.span`
  margin-inline: auto;
`;

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

const Drawer = styled.div<{ open: boolean }>`
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

type Battery = {
  level: number;
  charging: boolean;
  addEventListener: (arg0: string, arg1: () => void) => void;
};

type NavigatorGetBattery = Navigator & {
  getBattery?: () => Promise<Battery>;
};

export default function Header() {
  const [time, setTime] = useState<null | Date>(null);
  const [batteryLevel, setBatteryLevel] = useState<number>(100);
  const [isCharging, setIsCharging] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(menuOpenState);
  const router = useRouter();

  const phoneSize = useMediaQuery("(max-width: 800px)");

  const menus = [
    { title: "Activity", link: "/activiity" },
    { title: "Member", link: "/member" },
    { title: "Access", link: "/access" },
    { title: "Award", link: "/award" },
    { title: "News", link: "/news" },
    { title: "Q&A", link: "/qa" },
  ];

  useEffect(() => {
    // 時計を動かす
    setTime(new Date());
    setInterval(() => {
      setTime(new Date());
    }, 1000);

    // バッテリー情報を取得する
    const nav = navigator as NavigatorGetBattery;
    if (nav.getBattery) {
      nav.getBattery().then((battery: Battery) => {
        setBatteryLevel(battery.level * 100);
        setIsCharging(battery.charging);
        battery.addEventListener("levelchange", () => {
          setBatteryLevel(battery.level * 100);
        });
        battery.addEventListener("chargingchange", () => {
          setIsCharging(battery.charging);
        });
      });
    }
  }, []);

  // ハンバーガーメニューの開閉
  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <HeaderEle>
      {phoneSize ? (
        <>
          <Menu>
            <Image
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

            <Hamberger open={isMenuOpen} onClick={toggleMenu}>
              <div></div>
              <div></div>
              <div></div>
            </Hamberger>
          </Menu>

          <Drawer open={isMenuOpen} onClick={() => setIsMenuOpen(false)}>
            <div>
              <DrawerClose onClick={() => setIsMenuOpen(false)}>
                <CloseIcon />
              </DrawerClose>

              <DrowerList>
                {menus.map((menu) => (
                  <li
                    key={menu.link}
                    onClick={() => {
                      router.push(menu.link);
                      toggleMenu();
                    }}
                  >
                    {menu.title}
                  </li>
                ))}
              </DrowerList>
            </div>
          </Drawer>
        </>
      ) : (
        <Menu>
          <Image
            src="/img/set.webp"
            alt="logo"
            height={40}
            width={40}
            css={`
              cursor: pointer;
            `}
            onClick={() => router.push("/")}
          />
          <Propaty gap={5} onClick={() => router.push("/")}>
            シス研
          </Propaty>
          {menus.map((menu) => (
            <Propaty
              gap={5}
              key={menu.link}
              onClick={() => router.push(menu.link)}
            >
              {menu.title}
            </Propaty>
          ))}
          {/* <Propaty gap={5}>活動内容</Propaty>
          <Propaty gap={5}>メンバー</Propaty>
          <Propaty gap={5}>アクセス・見学</Propaty>
          <Propaty gap={5}>NEWS</Propaty>
          <Propaty gap={5}>Q&A</Propaty> */}
          <Spacer />
          <Battery level={batteryLevel} isCharging={isCharging} />
          {time && (
            <>
              <Propaty>
                <Time width={17}>{time.getMonth() + 1}</Time>
                {"月"}
                <Time width={17}>{time.getDate()}</Time>
                {"日"}
              </Propaty>
              <Propaty>
                <Time width={17}>{toDigits(time.getHours(), 2)}</Time>
                {":"}
                <Time width={17}>{toDigits(time.getMinutes(), 2)}</Time>
              </Propaty>
            </>
          )}
        </Menu>
      )}
    </HeaderEle>
  );
}
