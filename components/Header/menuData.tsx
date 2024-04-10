import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Community",
    path: "/",
    newTab: false,
  },
  {
    id: 33,
    title: "Plans",
    path: "/",
    newTab: false,
  },
  {
    id: 3,
    title: "Blog",
    path: "/",
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Web Application",
        path: "/",
        newTab: false,
      },
      {
        id: 42,
        title: "Online Marketing",
        path: "/",
        newTab: false,
      },
      {
        id: 43,
        title: "E-commerce Solution",
        path: "/",
        newTab: false,
      },
      {
        id: 44,
        title: "Data Analysis",
        path: "/",
        newTab: false,
      },
      {
        id: 45,
        title: "Cyber security Measure",
        path: "/",
        newTab: false,
      },
      {
        id: 46,
        title: "Scalable Solutions",
        path: "/",
        newTab: false,
      }
    ],
  },
  {
    id: 5,
    title: "About",
    path: "/",
    newTab: false,
  }
];
export default menuData;
