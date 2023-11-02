import { Menu } from "@/type";

export const Menus: readonly Menu[] = [
  { title: "Home", link: "/" },
  { title: "Activity", link: "/activity" },
  { title: "Member", link: "/member" },
  { title: "Access", link: "/access" },
  { title: "Award", link: "/award" },
  { title: "Posts", link: "/posts" },
  { title: "Q&A", link: "/qa" },
] as const;

export const MenusBreakPoint = 800;
