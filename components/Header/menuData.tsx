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
    path: "/community",
    newTab: false,
  },
  {
    id: 33,
    title: "Projects",
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
        title: "Project Discovery",
        path: "/",
        newTab: false,
      },
      {
        id: 42,
        title: "Community Collobration",
        path: "/",
        newTab: false,
      },
      {
        id: 43,
        title: "Mentorship Program",
        path: "/",
        newTab: false,
      },
      {
        id: 44,
        title: "Learning Resources",
        path: "/",
        newTab: false,
      },
      {
        id: 45,
        title: "Progress Tracking",
        path: "/",
        newTab: false,
      },
      {
        id: 46,
        title: "Event Listing",
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
