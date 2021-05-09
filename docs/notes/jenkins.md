# Jenkins

>  Jenkins
>  是一个自包含的、开源的自动化服务器，可以用于自动化与构建、测试、交付或部署软件相关的各种任务。
>
>  Jenkins 可以通过本机系统包、Docker 安装，甚至可以由任何安装了 Java
>  运行时环境(JRE)的机器独立运行


## 参考相关资料

[Jenkins 自动化部署](https://juejin.im/post/6844903812088463374)

[嘿！Jenkins前端自动化部署](https://juejin.im/post/6844904067974561806#heading-12)

## 安装

> 通过docker安装jenkins
> [参考文档](https://github.com/jenkinsci/docker/blob/master/README.md)

```shell script
docker run \
  -u root \
  --rm \
  -d \
  -p 8080:8080 \
  -p 50000:50000 \
  -v jenkins-data:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  --name jenkins \
  jenkinsci/blueocean
```


