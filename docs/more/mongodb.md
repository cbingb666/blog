# Mongodb

- [mongodb](#mongodb)
  - [安装 MongoDB@4.4 for macos](#安装-mongodb44-for-macos)
    - [安装生成的配置/记录文件](#安装生成的配置记录文件)
  - [运行 MongoDB](#运行-mongodb)
    - [brew 启动](#brew-启动)
    - [brew 停止](#brew-停止)
    - [mongod 命令后台进程方式](#mongod-命令后台进程方式)

---

## 安装 MongoDB@4.4 for macos

```sh
# @ 符号后面的 4.4 是最新版本号。
brew tap mongodb/brew
brew install mongodb-community@4.4
```

### 安装生成的配置/记录文件

- 配置文件：/usr/local/etc/mongod.conf
- 日志文件路径：/usr/local/var/log/mongodb
- 数据存放路径：/usr/local/var/mongodb

## 运行 MongoDB

### brew 启动

```sh
brew services start mongodb-community@4.4
```

### brew 停止

```sh
brew services stop mongodb-community@4.4
```

### mongod 命令后台进程方式

```sh
mongod --config /usr/local/etc/mongod.conf --fork
```
