## 使用lerna创建monorepo项目
安装lerna
  - yarn add lerna -g
  - 初始化项目 lerna init
### 使用lerna创建组件包
先创建基本的button组件
```
lerna create button
```

## 添加typescript的支持
``` js
yarn add typescript -W
```
### 默认无法解析.vue文件后缀的文件，增加typings
typings/vue-shim.d.ts
``` js
declare module '*.vue' {
    import {App,defineComponent} from 'vue';
    const component: ReturnType<typeof defineComponent> & {
        install(app:App):void
    };;
    export default component
}
```
### 安装vue 
```
yarn add vue@next -W
```