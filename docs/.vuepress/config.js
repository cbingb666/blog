const themeConfig = require("./themeConfig");
module.exports = {
  port: 8848,
  dest: './dist',
  title: 'CBB Blog',
  head: [
    ['link', {rel: 'icon', href: 'logo.png'}]
  ],
  themeConfig
}
