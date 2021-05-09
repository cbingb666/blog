const themeConfig = require("./themeConfig");
module.exports = {
  port: 8848,
  dest: './dist',
  title: 'CBingBing Blog',
  head: [
    ['link', {rel: 'icon', href: '/logo.png'}]
  ],
  themeConfig
}
