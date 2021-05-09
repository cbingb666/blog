# ssh config

---

## 配置文件路径

```sh
～/.ssh/config
```

## 配置实例

```sh
Host alias                      # Host alias  ssh别名
    HostName xxx.xxx.xxx.xxx

    Port 22

    User root

    IdentityFile ~/.ssh/id_rsa  # IdentityFile  证书路径
```
