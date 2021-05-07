# pm2

- [pm2](#pm2)
  - [官网](#官网)
  - [安装](#安装)
  - [命令](#命令)

---

## 官网

https://pm2.keymetrics.io/

## 安装

```sh
npm install pm2 -g
```

## 命令

```sh
# 启动app.js应用程序
# -watch 监听应用目录的变化，一旦发生变化，自动重启。如果要精确监听、不见听的目录，最好通过配置文件。
# --name 命名
pm2 start app.js

# 启动的所有的应用程序列表
pm2 list

# 显示应用程序的所有信息
pm2 show [app-name]

# 停止所有的应用程序
pm2 stop all

# 停止 id为 0的指定应用程序
pm2 stop [app-id]

# 重启所有应用
pm2 restart all

# 关闭并删除所有应用
pm2 delete all

# 删除指定应用 id 0
pm2 delete [app-id]

# 创建开机自启动命令
pm2 startup

# 保存当前应用列表
# 保存后的目录 Successfully saved in /root/.pm2/dump.pm2
pm2 save

# 重新加载保存的应用列表
pm2 resurrect

# 查看日志
pm2 logs
```
