# 快速开始

## 安装ming-ui
```
yarn add ming-ui-plus -D
```
## 全量引入组件
``` js
import MingUI from "ming-ui-plus"
import "ming-ui-plus/lib/theme-chalk/index.css"

const app = createApp();
app.use(MingUI).mount("#app)
```
## 按需引入组件
单独引入需要使用的组件
``` js
import MButton from "ming-ui-plus/lib/button";
import "ming-ui-plus/lib/theme-chalk/index.css"

const app = createApp();
app.use(MButton).mount("#app)
```