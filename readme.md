## 安装ming-ui-plus
项目地址是ming-ui，由于该名称无法上传npmjs，添加了plus修饰。
```
yarn add ming-ui-plus -S
// 或者
npm install ming-ui-plus -S
```

## 全局使用组件
在main.ts中
``` js
// add
import MingUI from "ming-ui-plus"
import "ming-ui-plus/lib/theme-chalk/index.css"

createApp(App).use(MingUI).mount("#app")
```

## 按需使用组件
``` js
// add
import MButton from "ming-ui-plus/lib/button"
import "ming-ui-plus/lib/theme-chalk/index.css"

createApp(App).use(MButton).mount("#app")
```

## 组件使用文档地址
[doc文档](http://1.116.36.35:8601/)
也可[下载源码](https://github.com/shenshuai89/ming-ui)后，运行[ming-ui-doc](https://github.com/shenshuai89/ming-ui/tree/main/ming-ui-doc)项目

