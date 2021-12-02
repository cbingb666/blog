# git 配置

## git 多账号配置

> 我们通常会有个人 and 公司各用一个 git 账号，在 ssh 连接中我们需要多两个账号配置两份 ssh 密钥，并且配置两份`user.name`and`user.email`

### 生成 ssh 密钥

```sh
ssh-keygen -t ed25519 -C "email@example.com"
```

1. 提示`Enter file in which to save the key`时，请输入你的密钥文件命名，如: `github_self` or `gitlab_company`

2. 接下来一路`enter`就可以了

3. 复制你公钥去 git 仓库配置

### 配置.ssh/config

> 配置此文件是为了让 ssh 能够根据不同 hosts 去使用不同的密钥

```config
# 域名别名
Host github.com
# 域名
HostName github.com
User github
# 首选认证方式 公钥
Preferredauthentications publickey
# 身份文件
IdentityFile ~/.ssh/github_self

# 域名别名
Host gitlab.company.com
# 域名
HostName gitlab.company.com
User gitlab
# 首选认证方式 公钥
Preferredauthentications publickey
# 身份文件
IdentityFile ~/.ssh/gitlab_company
```
