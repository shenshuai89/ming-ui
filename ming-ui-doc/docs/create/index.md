# lerna创建组件

## 创建组件
``` shell
lerna create [componentName]
// 修改组件名，以 @ming-ui/ 开头
ming-ui shuai$ lerna create test
info cli using local version of lerna
lerna notice cli v4.0.0
package name: (test) @ming-ui/test
version: (0.0.0) 
description: 
keywords: 
homepage: 
license: (ISC) 
entry point: (lib/test.js) 
git repository: (https://github.com/shenshuai89/ming-ui.git) 
About to write to /Users/shuai/Desktop/code/nodeapp/ming-ui/packages/test/package.json:
```
成功后，会在packages下创建test目录。
- 修改test/lib为，test/src
- 在test下创建index.ts，作为单独组件的入口

``` typescript
import { App } from "vue";
import Test from "./src/test.vue";
Test.install = (app: App):void => {
    app.component(Test.name, Test)
};
type IWithInstall<T> = T & { install(app: App): void };
const _Test: IWithInstall<typeof Test> = Test;
export default _Test;
```
- 在test/src下创建test.vue文件，作为组件使用。一定要设置好组件name
``` vue
<template>
  <div>test component</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MTest",
});
</script>
```
- 将test组件路径添加的ming-ui/index.ts中，全量使用组件的入口
``` typescript
// ...
import MTest from "@ming-ui/test";
const components = [
    //...
    MTest,
]
const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
export default { install };
```

## 设置样式
- 在theme-chalk/src目录下，创建test.scss
- 在theme-chalk/src/index.scss文件中引入test.scss
- 样式编写采用bem规范
> Bem 是块（block）、元素（element）、修饰符（modifier）的简写，由 Yandex 团队提出的一种前端 CSS 命名方法论。
``` plain
- 中划线 ：仅作为连字符使用，表示某个块或者某个子元素的多单词之间的连接记号
__ 双下划线：双下划线用来连接块和块的子元素
_ 单下划线：单下划线用来描述一个块或者块的子元素的一种状态
```

## 安装使用
安装刚创建的组件
```
yarn install
```

