<template>
  <div>
    <m-checkbox v-model="checkVal" @change="checkboxchange"
      >checkbox</m-checkbox
    >
    {{checkgroupVal}}
    <m-checkbox-group v-model="checkgroupVal" @change="checkboxgroupchange">
      <m-checkbox v-for="c in checkArray" :key="c" :label="c"></m-checkbox>
    </m-checkbox-group>
  </div>
</template>
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
