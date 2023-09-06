import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/"
  },
  {
    id: 2,
    title: "Services",
    newTab: false,
    path: "/#features"
  },
  {
    id: 2.1,
    title: "News",
    newTab: false,
    path: "/blog"
  },
  {
    id: 2.3,
    title: "Dev-Docs",
    newTab: false,
    path: "/docs"
  },

  {
    id: 4,
    title: "Contact Us",
    newTab: false,
    path: "/support"
  },
];

export default menuData;
