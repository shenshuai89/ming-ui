# layout布局组件使用

## 基本使用
  <div>
    <m-row>
      <m-col :span="6"><div style="padding:5px; margin:5px 0; background: #eeeeee">111</div></m-col>
      <m-col :span="6" :offset="6" style="padding:5px; margin:5px 0; background: #cccccc">22</m-col>
      <m-col :span="6" style="padding:5px; margin:5px 0; background: #eeeeee">2</m-col>
    </m-row>
    <m-row :gutter="20">
      <m-col :span="8"><div style="padding:5px; margin:5px 0; background: #eeeeee">111</div></m-col>
      <m-col :span="8"><div style="padding:5px; margin:5px 0; background: #909399">222</div></m-col>
      <m-col :span="8"><div style="padding:5px; margin:5px 0; background: #eeeeee">333</div></m-col>
    </m-row>
    <m-row justify="space-around">
      <m-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
        ><div style="padding:5px; margin:5px 0; background: #cccccc">111</div></m-col
      >
      <m-col :span="34"><div style="padding:5px; margin:5px 0; background: #eeeeee">222</div></m-col>
      <m-col :span="2"><div style="padding:5px; margin:5px 0; background: #cccccc">333</div></m-col>
    </m-row>
  </div>


  ``` html
  <div>
    <m-row>
      <m-col :span="6"><div style="padding:5px; margin:5px 0; background: #eeeeee">111</div></m-col>
      <m-col :span="6" :offset="6" style="padding:5px; margin:5px 0; background: #cccccc">22</m-col>
      <m-col :span="6" style="padding:5px; margin:5px 0; background: #eeeeee">2</m-col>
    </m-row>
    <m-row :gutter="20">
      <m-col :span="8"><div style="padding:5px; margin:5px 0; background: #eeeeee">111</div></m-col>
      <m-col :span="8"><div style="padding:5px; margin:5px 0; background: #909399">222</div></m-col>
      <m-col :span="8"><div style="padding:5px; margin:5px 0; background: #eeeeee">333</div></m-col>
    </m-row>
    <m-row justify="space-around">
      <m-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
        ><div style="padding:5px; margin:5px 0; background: #cccccc">111</div></m-col
      >
      <m-col :span="34"><div style="padding:5px; margin:5px 0; background: #eeeeee">222</div></m-col>
      <m-col :span="2"><div style="padding:5px; margin:5px 0; background: #cccccc">333</div></m-col>
    </m-row>
  </div>
  ```

## 属性配置
**row属性**
|属性|	说明|	类型|	可选值|	默认值|
|----|----|----|----|----|
|gutter|	栅格间隔|	number|	--|	0|
|justify|	flex 布局下的水平排列方式|	string|	start/end/center/space-around/space-between/space-evenly|	start|
|tag|	自定义元素标签|	string|	--|	div|

**col属性**
|属性|	说明|	类型|	可选值|	默认值|
|----|----|----|----|----|
|span|	栅格占据的列数|	number|	--|	24|
|offset|	栅格左侧的间隔格数|	number|	--|	0|
|xs|	<768px 响应式栅格数或者栅格属性对象|	number/object (例如 {span: 4, offset: 4})|	--|	--|
|sm|	≥768px 响应式栅格数或者栅格属性对象|	number/object (例如 {span: 4, offset: 4})|	--|	--|
|md|	≥992px 响应式栅格数或者栅格属性对象|	number/object (例如 {span: 4, offset: 4})	|	--|	--|
|lg|	≥1200px 响应式栅格数或者栅格属性对象|	number/object (例如 {span: 4, offset: 4})	|	--|	--|
|xl|	≥1920px 响应式栅格数或者栅格属性对象|	number/object (例如 {span: 4, offset: 4})	|	--|	--|
|tag|	自定义元素标签|	string|	--|	div|




