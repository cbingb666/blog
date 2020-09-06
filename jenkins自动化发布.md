# jenkins 自动化发布

- [jenkins 自动化发布](#jenkins-自动化发布)
  - [参考相关资料](#参考相关资料)
  - [JENKINS 是什么](#jenkins-是什么)
  - [在 centos 系统上安装 jenkins](#在-centos-系统上安装-jenkins)
  - [配置测试项目](#配置测试项目)
  - [搭建推送邮箱](#搭建推送邮箱)

---

## 参考相关资料

https://juejin.im/post/6844903812088463374
https://juejin.im/post/6844904067974561806#heading-12

## JENKINS 是什么

Jenkins 是一个自包含的、开源的自动化服务器，可以用于自动化与构建、测试、交付或部署软件相关的各种任务。

Jenkins 可以通过本机系统包、Docker 安装，甚至可以由任何安装了 Java 运行时环境(JRE)的机器独立运行

## 在 centos 系统上安装 jenkins

三种方式

- 通过 docker 安装， 此方法必须掌握 docker 基础
- 通过 jenkins.war 在 tomcat 中运行
- 通过 yum 的方式安装

官方安装文档，请以此文档为准，部分帖子安装方法过时可能导致各种错误

https://www.jenkins.io/zh/doc/book/installing/#setup-wizard

## 配置测试项目

https://www.cnblogs.com/xiaohuochai/p/9096873.html

## 搭建推送邮箱

https://zhuanlan.zhihu.com/p/125020401
