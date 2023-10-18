import { createGlobalStyle } from "styled-components";
import Color from "@/const/Color";
import Font from "@/const/Font";

const GlobalStyle = createGlobalStyle`
  body > div > main {
    background-color: ${Color.DARK};
    min-height: 100vh;
  }
  * {
    font-family: ${Font.zenkaku.style.fontFamily};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
