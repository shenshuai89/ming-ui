# avatar头像组件使用

## 基本使用
<div>
  <m-avatar :size="60" src="https://empty" @error="loadError">
      <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
    </m-avatar>
    <m-avatar
      size="50"
      shape="circle"
      src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    ></m-avatar>
    <m-avatar
      size="small"
      src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    ></m-avatar>
</div>

<script setup>
const loadError = (e) => {
  console.log("load error: ",e);
};
</script>


``` html
<div>
  <m-avatar :size="60" src="https://empty" @error="loadError">
    <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
  </m-avatar>
  <m-avatar
    size="50"
    shape="circle"
    src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
  ></m-avatar>
  <m-avatar
    size="small"
    src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
  ></m-avatar>
</div>
```
``` js
const loadError = (e) => {
  console.log("load error: ",e);
};
```


## 属性配置
|属性|	说明|	类型|	可选值|	默认值|
|----|----|----|----|----|
|alt|	图片 Avatar 的原生 alt 属性|	string|	--|	否 |
|fit|	展示类型为图片的时候，设置图片如何适应容器|	'fill' | 'contain' | 'cover' | 'none' | 'scale-down'|	'cover'|	否 |
|shape|	Avatar 形状|	'circle' | 'square'|	'circle'|	否 |
|src|	Avatar 图片的源地址|	string|	--|	否 |
|icon|	设置 Avatar 的图标类型，具体参考 Icon 组件|	string | Component|	--|	否 |
|size|	Avatar 大小|	number | 'large' | 'default' | 'small'|	'default'|	否 |
