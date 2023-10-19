import {
  GithubIcon,
  InstagramIcon,
  QiitaIcon,
  TwitterIcon,
} from "@/component/base/icons";
import { SNS } from "@/const/base/sns";
import { SNSName } from "@/type";
import { getSNSUrl } from "@/util/util";
import styled from "styled-components";

const Icon = styled.div<{ color: string; fill: string; snsName: string }>`
  width: 50px;
  height: 50px;
  font-size: 40px;
  display: flex;
  background-color: ${(props) => props.color};
  justify-content: end;
  border-radius: 8px;
  cursor: pointer;

  box-shadow: 2px 2px white;

  &::after {
    content: ${(props) => props.snsName};
  }

  & > svg {
    inset: 0;
    margin: auto;

    & path {
      fill: ${(props) => props.fill};
    }
  }
`;

type Props = {
  snsName: SNSName;
  id: string;
  color: string;
  fill: string;
};

export default function App({ snsName, id, color, fill }: Props) {
  const url = getSNSUrl(SNS[snsName], id);

  function getSNSIcon(sns: SNSName) {
    switch (sns) {
      case "twitter":
        return <TwitterIcon />;
      case "instagram":
        return <InstagramIcon />;
      case "github":
        return <GithubIcon />;
      case "qiita":
        return <QiitaIcon />;
      default:
        return <TwitterIcon />;
    }
  }

  function jumpToLink(link: string) {
    window.open(link, "_blank");
  }

  return (
    <Icon
      color={color}
      fill={fill}
      snsName={snsName}
      onClick={() => jumpToLink(url)}
    >
      {getSNSIcon(snsName)}
    </Icon>
  );
}
