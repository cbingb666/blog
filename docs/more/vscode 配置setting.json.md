# vscode 配置 setting.json

- [vscode 配置 setting.json](#vscode-配置-settingjson)

---

```json5
{
  // 配置 path-intellisense 别名路径
  "path-intellisense.mappings": {
    "@": "${workspaceRoot}/src",
    "@api": "${workspaceRoot}/src/api"
  },
  // 缩进
  "editor.tabSize": 2,
  // 语言
  "commentTranslate.targetLanguage": "zh-CN",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  }
}
```
