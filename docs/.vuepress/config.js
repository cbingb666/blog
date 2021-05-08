const themeConfig = require("./themeConfig");
module.exports = {
  port: 8848,
  dest: './dist',
  title: 'CBB Notes',
  head: [
    ['link', {rel: 'icon', href: 'logo.png'}]
  ],
  themeConfig
}
