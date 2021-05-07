const fs = require("fs");
const path = require("path")

module.exports = function (plop) {
  plop.setGenerator('notes', {
    description: '生成notes sidebar config',
    prompts: [
      {
        type: 'confirm',
        name: 'submit',
        message: '确定要生成notes sidebar config，生成后将替换原来的config'
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
