import { makeNavbarRoute, makeSidebarRoute } from "../utils/makeRoute";

export const themeConfig = {
  logo: "https://vuejs.org/images/logo.png",

  navbar: [...makeNavbarRoute("more", "more")],
  sidebar: {
    ...makeSidebarRoute("more", "more"),
  },
};
