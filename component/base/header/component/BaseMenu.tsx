import styled from "@emotion/styled";
import { toDigits } from "@/util/util";
import { useRouter } from "next/router";
import {
  MenuWrapper,
  Propaty,
  Spacer,
} from "@/component/base/header/component/shared/menu";
import Battery from "./Battery";
import { useEffect, useState } from "react";
import { Menu } from "@/type";

const Time = styled.span<{ width?: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : "initial")};
  text-align: center;
  display: inline-block;
`;

type Battery = {
  level: number;
  charging: boolean;
  addEventListener: (arg0: string, arg1: () => void) => void;
};

type NavigatorGetBattery = Navigator & {
  getBattery?: () => Promise<Battery>;
};

type Props = {
  menus: readonly Menu[];
};

export default function BaseMenu({ menus }: Props) {
  const [time, setTime] = useState<null | Date>(null);
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const [isCharging, setIsCharging] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    // 時計を動かす
    setTime(new Date());
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  useEffect(() => {
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

  return (
    <MenuWrapper>
      <img
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
        <Propaty gap={5} key={menu.link} onClick={() => router.push(menu.link)}>
          {menu.title}
        </Propaty>
      ))}

      <Spacer />

      {batteryLevel !== null && (
        <Battery level={batteryLevel} isCharging={isCharging} />
      )}
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
    </MenuWrapper>
  );
}
