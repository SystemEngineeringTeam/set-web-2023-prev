import { SNS } from "@/const/base/sns";
import Color from "@/const/style/Color";

export type Menu = { title: string; link: string };

export type SNSName = keyof typeof SNS;

export type SNSAccountObj = {
  [key in SNSName]?: string;
};

export type Colors = keyof typeof Color;

export type PostMeta = {
  title: string;
  category: string;
  tags: string[];
  created_at: string;
  updated_at: string;
  published: boolean;
  number: number;
};

export type Post = {
  filename: string;
  id: number;
  meta: PostMeta;
  content: string;
};
