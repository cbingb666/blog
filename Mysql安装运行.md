# Mysql安装运行

## For Mac

[brew 安装文档](https://formulae.brew.sh/formula/mysql#)

安装

```sh
brew install mysql
```

启动 / 停止

```sh
mysql.server start
mysql.server stop
```

安装后默认没有密码，请执行以下命令

```sh
mysql_secure_installation
```

运行

```sh
mysql -uroot
```
