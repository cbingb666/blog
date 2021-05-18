# RegExp 正则表达式

### 常用正则

#### 匹配http://非紧接着www

`/http:\/\/(?!www)/`


#### php/html文件http改https

搜索
`((href\s*=\s*["']\s*)|(src\s*=\s*["']\s*))(http)://`

替换
`$1$4s:`
