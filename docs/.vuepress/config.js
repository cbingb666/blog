const themeConfig = require("./themeConfig");
module.exports = {
  port: 8848,
  dest: '.',
  title: 'CBB Notes',
  head: [
    ['link', {rel: 'icon', href: 'logo.png'}]
  ],
  themeConfig
}
