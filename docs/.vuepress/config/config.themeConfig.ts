import { getCategory } from "../utils/makeRoute";
import pkg from "../../../package.json";



const category = getCategory(["环境配置","more"]);

export const themeConfig = {
  logo: "/images/logo.png",
  repo: pkg.repository,
  navbar: [
    ...category.navbar
  ],
  sidebar: {
    ...category.sidebar
  }
};
