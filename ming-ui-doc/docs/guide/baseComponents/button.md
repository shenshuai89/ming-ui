# button按钮组件使用

## 基本使用
<div>
  <m-button
    icon="m-icon-notice"
    type="danger"
    :loading="btnIsLoading"
    @click="handleClick"
    >click</m-button
  >
  <m-button icon="m-icon-notice" type="danger">buton</m-button>
  <m-button icon="m-icon-notice" type="danger"></m-button><hr>
  <m-button-group type="success">
    <m-button icon="m-icon-arrow-left" type="success">上一页</m-button>
    <m-button>下一页 <i class="m-icon-arrow-right"></i></m-button>
  </m-button-group>
</div>


<script setup>
  import { ref, onMounted } from "vue";

  const btnIsLoading = ref(true);
  const handleClick = () => {
    console.log("use click");
  };
  onMounted(()=>{
    setTimeout(() => {
      btnIsLoading.value = false;
    }, 2000);
  })
</script>

``` html
<div>
  <m-button
    icon="m-icon-notice"
    type="danger"
    :loading="btnIsLoading"
    @click="handleClick"
    >click</m-button
  >
  <m-button icon="m-icon-notice" type="danger">buton</m-button>
  <m-button icon="m-icon-notice" type="danger"></m-button><hr>
  <m-button-group type="success">
    <m-button icon="m-icon-arrow-left" type="success">上一页</m-button>
    <m-button>下一页 <i class="m-icon-arrow-right"></i></m-button>
  </m-button-group>
</div>
```
```js
  import { ref, onMounted } from "vue";

  const btnIsLoading = ref(true);
  const handleClick = () => {
    console.log("use click");
  };
  onMounted(()=>{
    setTimeout(() => {
      btnIsLoading.value = false;
    }, 2000);
  })
```
按钮在loading的状态下，点击无效

## 属性配置
|属性|	说明|	类型|	可选值|	默认值|
|----|----|----|----|----|
|type|	类型|	string|	primary / success / warning / danger / info|	-- |
|disabled|	是否为禁用状态|	boolean|	--|	false|
|loading|	是否为加载中状态|	boolean|	--|	false|
|round|	是否为圆角按钮|	boolean|	--|	false|
|circle|	是否为圆形按钮|	boolean|	--|	false|
|icon|	图标组件|	string / Component|	--|	--|
