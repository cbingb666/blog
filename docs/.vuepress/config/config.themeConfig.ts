import { makeNavbarRoute, makeSidebarRoute } from "../utils/makeRoute";
import pkg from '../../../package.json'

export const themeConfig = {
  logo: "/images/logo.png",
  repo: pkg.repository,
  navbar: [...makeNavbarRoute("more", "more")],
  sidebar: {
    ...makeSidebarRoute("more", "more"),
  },
};
