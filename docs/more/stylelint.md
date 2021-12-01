# stylelint

## 安装

```sh
npm install stylelint --save-dev                                // stylelint
npm install stylelint-config-standard --save-dev                // stylelint的推荐配置
npm install stylelint-order --save-dev                          // stylelint排序
```

## 创建配置文件

```json
// 在根目录下创建.stylelintrc配置文件
{
  "extends": "stylelint-config-standard",
  "plugins": ["stylelint-order"],
  "rules": []
}
```
