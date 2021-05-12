const fs = require("fs");
const path = require("path")

module.exports = function (plop) {
  plop.setGenerator('notes', {
    description: '将根据docs/notes目录下的.md文件生成notes sidebar config',
    prompts: [
      {
        type: 'confirm',
        name: 'submit',
        message: '将根据docs/notes目录下的.md文件生成notes sidebar config，确定要生成吗？'
      }
    ],
    actions: function (answers) {
      if(!answers.submit) return []

      const dir = path.join(__dirname, 'docs/notes/')
      let filenames = fs.readdirSync(dir)
      filenames = filenames
        .filter(filename => filename.match(/\.md$/) && filename !== 'README.md')
        .map(filename => filename.replace(/\.md$/, ""))
      filenames = JSON.stringify(filenames)
      return [{
        type: 'add',
        path: 'docs/.vuepress/sidebarConfig/notes.js',
        templateFile: 'plop/template/notes.hbs',
        data: {
          filenames
        },
        transform: function (a) {
          return a.replace(/&quot\;/g,'"')
        },
        force: true
      }]
    }
  })
}
