import styled from "styled-components";
import Color from "@/const/Color";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toDigits } from "@/util/util";
import Battery from "./Battery";
import Image from "next/image";

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

type SpanProps = {
  gap?: number;
};

const Propaty = styled.span<SpanProps>`
  cursor: pointer;
  padding-inline: ${(props) => (props.gap ? `${props.gap}px` : "0px")};
`;

type TimeProps = {
  width?: number;
};

const Time = styled.span<TimeProps>`
  width: ${(props) => (props.width ? `${props.width}px` : "initial")};
  text-align: center;
  display: inline-block;
`;

const Spacer = styled.span`
  margin-inline: auto;
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
  const router = useRouter();

  useEffect(() => {
    setTime(new Date());
    setInterval(() => {
      setTime(new Date());
    }, 1000);

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
    <HeaderEle>
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
        <Propaty gap={5}>活動内容</Propaty>
        <Propaty gap={5}>メンバー</Propaty>
        <Propaty gap={5}>アクセス・見学</Propaty>
        <Propaty gap={5}>NEWS</Propaty>
        <Propaty gap={5}>Q&A</Propaty>
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
    </HeaderEle>
  );
}
