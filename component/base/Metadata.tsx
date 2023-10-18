import Head from "next/head";

type Props = {
  subtitle?: string;
};

export default function Metadata({ subtitle }: Props) {
  const description =
    "システム工学研究会ってどういうサークル？システム工学研究会(通称シス研)は愛知工業大学公認の情報系サークルです。\
    このサークルの部室にはプログラミングや電子工作、インフラなどといった様々な情報の分野についての勉強ができる環境が整っています。\
    シス研では勉強会やサークル内ハッカソンを開催したり、大学祭では工科展に出展したりしています。\
    最近では外部のハッカソンに参加する人もいたり、自分の作りたいものを制作するなどして自由に活動しています。\
    またサークルのWebページやサーバーの管理も行っています。";

  return (
    <Head>
      {subtitle ? <title>{subtitle} | シス研</title> : <title>シス研</title>}
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
