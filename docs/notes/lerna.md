# lerna

## 命令

### 在所有包安装依赖

```sh
# 依赖
lerna add <npm-package-name>

# or

# 开发依赖
lerna add -D <package-name>
```

### 在所有包删除依赖

```sh
lerna exec -- yarn remove <package-name>
```
