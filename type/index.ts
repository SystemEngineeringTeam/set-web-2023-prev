import { SNS } from "@/const/base/sns";
import Color from "@/const/style/Color";

export type Menu = { title: string; link: string };

export type SNSName = keyof typeof SNS;

export type SNSAccountObj = {
  [key in SNSName]?: string;
}

export type Colors = keyof typeof Color;
