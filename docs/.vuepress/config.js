const {join} = require('path')
const themeConfig = require("./themeConfig");

console.log(join(__dirname, './public/imgs'))
module.exports = {
  port: 8848,
  base: '/notes/',
  dest: './dist',
  title: 'CBingB666 Notes',
  head: [
    ['link', {rel: 'icon', href: '/logo.png'}]
  ],
  themeConfig,
  plugins: [
    'mermaidjs',
    'vuepress-plugin-flowchart',
    '@vuepress/medium-zoom',
    '@vuepress/nprogress',
    '@vuepress/active-header-links',
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@images': join(__dirname, './public/images')
      }
    }
  },
}
