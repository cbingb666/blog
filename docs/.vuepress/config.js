const {join} = require('path')
const themeConfig = require("./themeConfig");

console.log(join(__dirname, './public/imgs'))
module.exports = {
  port: 8848,
  dest: './dist',
  title: 'CBingBing Blog',
  head: [
    ['link', {rel: 'icon', href: '/logo.png'}]
  ],
  themeConfig,
  configureWebpack: {
    resolve: {
      alias: {
        '@images': join(__dirname, './public/images')
      }
    }
  },
}
