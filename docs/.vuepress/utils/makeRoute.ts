import fs from 'fs';
import { NavbarConfig, SidebarConfigObject } from '@vuepress/theme-default/lib/shared/nav';
import path from 'path';

function getAbsolutePath(folder: string): string {
	return path.resolve(__dirname,'../../',folder);
}

/**
 * screen child file name which under the specified folder. Only return extension name is '.md'
 * @param text nav item title
 * @param folderName specified folder name
 * @returns \{ title, children: [...fileName] }[]
 */
export function makeNavbarRoute(folderName: string, text?: string): NavbarConfig {
	const extension = ".md";
	const basePath = getAbsolutePath(folderName);

	const files: string[] = fs
		.readdirSync(basePath)
		.filter(
			(fileName: string) => {
				if (fileName.toLowerCase() === "readme.md") return false;

				return fs.statSync(path.join(basePath, fileName)).isFile() &&
					(path.extname(fileName)) === extension;
			}
		)
		.map((fileName: string) => `/${folderName}/${fileName}`);

	return [{ text: text ? text : folderName, children: [...files] }];
}

// 

/**
 * 
 * @param text sidebar item title
 * @param subPathName sub path name, is equal to folder name
 * @returns \{ '/subPathName/': [ { text, children: [ ...childFileName ] } ] }
}
 */
export function makeSidebarRoute(subPathName: string, text?: string): SidebarConfigObject {
	return { [`/${subPathName}/`]: makeNavbarRoute(subPathName, text) };
}

export const getCategory = (dirs: string[]) => {
  const navbar = [];
  const sidebar = {};
  dirs.forEach(dir => {
		console.log(dir)
    navbar.push(...makeNavbarRoute(dir))
    sidebar[`/${dir}/`] = makeNavbarRoute(dir)
  })

  return {navbar, sidebar}
};