import { atom } from "recoil";

export const menuOpenState = atom<boolean>({
  key: "menuOpenState",
  default: false,
});
