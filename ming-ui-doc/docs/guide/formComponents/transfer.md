# transfer穿梭框组件
## 基本使用
  <div>
    <m-transfer class="transfer-box" :data="transferData" v-model="rightValue"></m-transfer>
  </div>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const generateData = () => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `Option ${i}`,
          disabled: i % 4 === 0,
        });
      }
      return ref(data);
    };
    return { transferData: generateData(), rightValue: ref([1, 4, 9]) };
  },
});
</script>

```html
  <div>
    <m-transfer class="transfer-box" :data="transferData" v-model="rightValue"></m-transfer>
  </div>
```
```js
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const generateData = () => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `Option ${i}`,
          disabled: i % 4 === 0,
        });
      }
      return ref(data);
    };
    return { transferData: generateData(), rightValue: ref([1, 4, 9]) };
  },
});
```


## 属性配置
|属性|	说明|	类型|	可选值|	默认值|
|----|----|----|----|----|
|model-value|	选中项绑定值|	array|	--|	-- |
|props|	数据源的字段别名|	object [key, label, disabled] |	--|	-- |
|data |	Transfer 的数据源|	array [key, label, disabled]  |	--|	[]|