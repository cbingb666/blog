# Docker

## 参考案例

- [自动发布案例](https://juejin.im/post/6844903946234904583)
- [私有镜像库案例](https://www.cnblogs.com/zhangxingeng/p/11558782.html)

## 安装

[https://www.docker.com/get-started](https://www.docker.com/get-started)

## 创建应用步骤

1. 写一个 **Dockerfile** 文件
2. 使用 `docker image build` 来将 Dockerfile 打包成镜像
3. 使用 `docker container create` 来根据镜像创建一个容器
4. 使用 `docker container start` 来启动一个创建好的容器

## 命令

```sh
# 打包镜像
# 基于路径./（当前路径）打包一个镜像，镜像的名字是hello-docker，版本号是1.0.0。该命令会自动寻找Dockerfile来打包出一个镜像
docker image build ./ -t hello-docker:1.0.0

# 据镜像创建容器
# docker container create来创建基于hello-docker:1.0.0镜像的一个容器，使用-p来指定端口绑定——将容器中的80端口绑定在宿主机的2333端口。执行完该命令，会返回一个容器ID
docker container create -p 2333:80 hello-docker:1.0.0

# 运行容器 xxx 为上一条命令运行得到的结果
docker container start xxx

# 进入容器执行bash xxx 为容器ID
docker container exec -it xxx /bin/bash

# stop停止所有容器
docker stop $(docker ps -a -q)
```

## linux

```sh
# 启动docker服务
service docker start

# 停止docker服务
service docker stop
```

## dockerfile 配置示例

官网配置 https://docs.docker.com/engine/reference/builder/  
菜鸟配置 https://www.runoob.com/docker/docker-compose.html

```sh
# 来源镜像
FROM nginx

# 从宿主机path复制到容器path
COPY ./index.html /usr/share/nginx/html/index.html

# 暴露80端口
EXPOSE 80
```

## docker-compose

> Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用
> YML 文件来配置应用程序需要的所有服务。然后，使用一个命令，就可以从 YML
> 文件配置中创建并启动所有服务。

官方文档 https://docs.docker.com/compose/install/#install-compose macos
安装 docker 中已内置, 以下安装方法 for linux

- 下载

```sh
sudo curl -L "https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

- 将可执行权限应用于二进制文件

```sh
sudo chmod +x /usr/local/bin/docker-compose
```

- 更新镜像和容器

```sh
docker-compose pull info
docker-compose stop info
docker-compose rm info
docker-compose up -d info # -d 代表后台运行
```

## 可视化
[portainer](https://documentation.portainer.io/v2.0/deploy/ceinstalldocker/)
