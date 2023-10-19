import { Post } from "@/type";

export const TopText = ["ようこそ", "システム工学研究会へ"];

export const DescriptionContents = [
  "システム工学研究会(通称シス研)は愛知工業大学公認の情報系サークルです。",
  "このサークルの部室にはプログラミングや電子工作、インフラなどといった様々な情報の分野についての勉強ができる環境が整っています。\
  シス研では勉強会やサークル内ハッカソンを開催したり、大学祭では工科展に出展したりしています。\
  最近では外部のハッカソンに参加する人もいたり、自分の作りたいものを制作するなどして自由に活動しています。\
  またサークルのWebページやサーバーの管理も行っています。",
];

export const DescriptionTitle = "システム工学研究会とは";

export const DesctopImages = [
  "/img/top/room.webp",
  "/img/top/chair.webp",
  "/img/top/door.webp",
  "/img/top/building.webp",
] as const;

export const Posts: Post[] = [
  {
    title: "mocopiを触ってみた",
    date: new Date("2023-10-19"),
    content: "mocopiを触ってみた。mocopiはすごい。これは仮です。",
  },
  {
    title: "MetaQuestを触ってみた",
    date: new Date("2023-10-19"),
    content: "MetaQuestを触ってみた。MetaQuestはすごい。これは仮です。",
  },
  {
    title: "ペンギンと触れ合ってみた",
    date: new Date("2005-01-05"),
    content: "アデリーペンギンと触れ合った。とても可愛い。これは仮です。",
  },
];
