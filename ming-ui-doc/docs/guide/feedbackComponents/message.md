# message消息组件使用

## 基本使用
<div>
    <m-button @click="showMessage">提示消息</m-button>
</div>

<script setup>
import { MMessage } from "ming-ui-plus";
const showMessage = () => {
  MMessage({
    type: "success",
    offset: 60
  });
};
</script>

```html
<div>
    <m-button @click="showMessage">提示消息</m-button>
</div>
```
``` js
import { MMessage } from "ming-ui-plus";
const showMessage = () => {
  MMessage({
    type: "success",
  });
};
```

## 属性配置
|属性|	说明|	类型|	默认值|
|----|----|----|----|
|id|	标识|	string|	--|
|message|	消息文字|	string / VNode / (() => VNode)|	--|
|type|	消息类型|	'success' / 'warning' / 'info' / 'error'|	'info'|
|duration|	显示时间，单位为毫秒。 设为 0 则不会自动关闭|	number|	3000|
|center|	文字是否居中|	boolean|	false|
|onClose|	关闭时的回调函数, 参数为被关闭的 message 实例|	function|	--|
|offset|	Message 距离窗口顶部的偏移量|	number|	20|