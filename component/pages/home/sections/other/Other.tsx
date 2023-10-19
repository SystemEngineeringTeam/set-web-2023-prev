import Color from "@/const/style/Color";
import styled from "styled-components";

const OtherEle = styled.section`
  padding: 40px 20px;
  background-color: ${Color.SECOUNDARY_LIGHT};
`;

export default function OtherSection() {
  return <OtherEle></OtherEle>;
}
