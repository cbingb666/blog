# vue3 + vitejs

文档分详细文档vuepress和介绍文章

[awesome-vite](https://github.com/vitejs/awesome-vite#plugins)

## 初始项目

``` shell
yarn create @vitejs/app <project-name> --template vue
```

## 配置alias别名

在vite.config.ts中加入

```ts
const pathResolve = (dir: string): any => {
  return resolve(__dirname, ".", dir);
};

const alias: Record<string, string> = {
  "/@": pathResolve("src"),
  // 解决开发环境下的警告 You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.
  // "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias,
  },
  plugins: createVitePlugins(),
})

```

tsconfig.ts中配置加入paths

```json
{
  "compilerOptions": {
    ..., // other
    "paths": {
      "/@/*": ["src/*"],
      "/#/*": ["types/*"]
    },
  },
}
```

若报以下错误

```shell
throw new Error(`esbuild: Failed to install correctly
^

Error: esbuild: Failed to install correctly

Make sure you don't have "ignore-scripts" set to true. You can check this with
"npm config get ignore-scripts". If that returns true you can reset it back to
false using "npm config set ignore-scripts false" and then reinstall esbuild.

If you're using npm v7, make sure your package-lock.json file contains either
"lockfileVersion": 1 or the code "hasInstallScript": true. If it doesn't have
either of those, then it is likely the case that a known bug in npm v7 has
corrupted your package-lock.json file. Regenerating your package-lock.json file
should fix this issue.

    at Object.<anonymous> (/Users/cbh/resource/github/vue-cbin-admin/node_modules/esbuild/bin/esbuild:2:7)
    at Module._compile (internal/modules/cjs/loader.js:1133:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1153:10)
    at Module.load (internal/modules/cjs/loader.js:977:32)
    at Function.Module._load (internal/modules/cjs/loader.js:877:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
    at internal/main/run_main_module.js:18:47
failed to load config from /Users/cbh/resource/github/vue-cbin-admin/vite.config.ts
error when starting dev server:
Error: The service was stopped
    at /Users/cbh/resource/github/vue-cbin-admin/node_modules/esbuild/lib/main.js:1209:25
    at /Users/cbh/resource/github/vue-cbin-admin/node_modules/esbuild/lib/main.js:606:9
    at Socket.afterClose (/Users/cbh/resource/github/vue-cbin-admin/node_modules/esbuild/lib/main.js:584:7)
    at Socket.emit (events.js:322:22)
    at endReadableNT (_stream_readable.js:1187:12)
    at processTicksAndRejections (internal/process/task_queues.js:84:21)
```

则必须安装esbuild

```shell
yarn add -D esbuild
```




## jsx

安装@vitejs/plugin-vue-jsx

```shell
yarn add -D @vitejs/plugin-vue-jsx
```

配置vite.config.ts

```ts
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
export default defineConfig({
  plugins: [
    ..., // other plugin
    vueJsx()
  ]
})
```

使用tsx

```tsx
import { message } from 'ant-design-vue'
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export const App = defineComponent({
  name: 'App',
  setup() {
    message.success('success')
  },
  render() {
    return(
      <RouterView></RouterView>
    )
  }
}) 
```

## sass

[参考](https://cn.vitejs.dev/guide/features.html#css)

```shell
yarn add -D sass
```

## router

安装

```shell
npm install vue-router@4
```

## vuex
[typescript参考](https://dev.to/3vilarthas/vuex-typescript-m4j)

安装

```shell
yarn add vuex@next --save
```

创建目录结构

```shell
src/store/
├── index.ts
└── modules
    └── app.ts
```

store/index.ts

```ts
import { App } from "vue"
import { createStore } from "vuex"
import app from './modules/app'

const store = createStore({
  modules: {
    app,
  }
})

export const setupStore = (app: App<Element>) => {
  app.use(store)
}
```

store/modules/app.ts

```ts
// store app
const app = {
  namespace: true,
  state() {
    return {};
  },
  mutations: {},
  actions: {},
}
export default app
```

## ant-design-vue

[ant-design-vue文档](https://2x.antdv.com/docs/vue/getting-started-cn)

安装

```shell
yarn add ant-design-vue@next
```

创建setup/setupAntUI.ts

```ts
import { App } from '@vue/runtime-core';
import { Button, message } from 'ant-design-vue';

export function setupAntUI(app: App<Element>) {
  app.use(Button);
  
  app.config.globalProperties.$message = message;
}
```

在main.ts中调用setupAntUI进行装载

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { setupAntUI } from './setup/setupAntUI'

const app = createApp(App)
setupAntUI(app)
app.mount('#app')
```

按需加载

```ts
import { defineConfig } from 'vite'
import usePluginImport from 'vite-plugin-importer'

export default defineConfig({
  plugins: [
    ..., // other plugins
    usePluginImport({
      libraryName: "ant-design-vue",
      libraryDirectory: "es",
      style: "css",
    }),
  ]
})
```

## 高阶容器组件对全局进行配置

## 权限设计

### 路由权限

### 颗粒化权限

### 权限结构设计

## Image 自动压缩
