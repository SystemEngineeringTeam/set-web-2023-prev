import { Menu } from "@/type";

export const Menus: readonly Menu[] = [
  { title: "Activity", link: "/activiity" },
  { title: "Member", link: "/member" },
  { title: "Access", link: "/access" },
  { title: "Award", link: "/award" },
  { title: "News", link: "/news" },
  { title: "Q&A", link: "/qa" },
] as const;

export const MenusBreakPoint = 800;
