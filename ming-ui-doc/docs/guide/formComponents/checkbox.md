# checkbox选择框组件

## 基础使用
<div>
    <m-checkbox v-model="checkVal" @change="checkboxchange"
        >checkbox</m-checkbox
    >
    <m-checkbox-group v-model="checkgroupVal" @change="checkboxgroupchange">
        <m-checkbox v-for="c in checkArray" :key="c" :label="c"></m-checkbox>
    </m-checkbox-group>
    <p>选择的城市{{checkgroupVal}}</p>
</div>

<script setup>
import { ref } from "vue";
const checkVal = ref(true);
const checkgroupVal = ref(["北京"]);
const checkArray = ref(["北京", "上海", "香港", "澳门"]);
const checkboxchange = () => {
  console.log("checkboxchange1121212");
};
const checkboxgroupchange = () => {
  console.log("checkboxgroupchange34566");
};
</script>

``` html
<div>
    <m-checkbox v-model="checkVal" @change="checkboxchange"
        >checkbox</m-checkbox
    >
    <m-checkbox-group v-model="checkgroupVal" @change="checkboxgroupchange">
        <m-checkbox v-for="c in checkArray" :key="c" :label="c"></m-checkbox>
    </m-checkbox-group>
    <p>选择的城市{{checkgroupVal}}</p>
</div>
```
```js
import { ref } from "vue";
const checkVal = ref(true);
const checkgroupVal = ref(["北京"]);
const checkArray = ref(["北京", "上海", "香港", "澳门"]);
const checkboxchange = () => {
  console.log("checkboxchange1121212");
};
const checkboxgroupchange = () => {
  console.log("checkboxgroupchange34566");
};
```

## 属性设置
|属性|	说明|	类型|	可选值|	默认值|
|----|----|----|----|----|
|model-value / v-model|	选中项绑定值|	string / number / boolean|	--|	-- |
|label|	选中状态的值|	string / number / boolean / object|	--|	--|
|disabled|	是否禁用|	boolean|	--|	false|
|name|	原生 name 属性|	string|	--|	--|
|checked|	当前是否勾选|	boolean|	--|	false|
|indeterminate|	设置 indeterminate 状态，只负责样式控制|	boolean|	--|	false|