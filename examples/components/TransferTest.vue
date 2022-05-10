<template>
  <div>
    <m-transfer class="transfer-box" :data="transferData" v-model="rightValue"></m-transfer>
  </div>
</template>
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
