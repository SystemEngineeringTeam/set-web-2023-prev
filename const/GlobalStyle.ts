import styled, { createGlobalStyle } from "styled-components";
import { color } from "@/const/Color";
import { Zen_Kaku_Gothic_Antique } from "next/font/google";

const zenkaku = Zen_Kaku_Gothic_Antique({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const GlobalStyle = createGlobalStyle`
  body > div > main {
    background-color: ${color.DARK};
    min-height: 100vh;
  }
  * {
    font-family: ${zenkaku.style.fontFamily};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
