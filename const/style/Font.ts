import { Zen_Kaku_Gothic_Antique } from "next/font/google";
import { Zen_Maru_Gothic } from "next/font/google";

const zenkaku = Zen_Kaku_Gothic_Antique({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const zenmaru = Zen_Maru_Gothic({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const Font = { zenkaku, zenmaru };

export default Font;
