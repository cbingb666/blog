# Charles

### 减少后台运行内存占用
由于创建session会开启监听，会消耗大量内存，建议后台运行时关闭无需要的session，并且关闭 `Settins => launch => Open a new session` 防止开机后占用资源 
