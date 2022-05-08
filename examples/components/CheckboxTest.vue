<template>
  <div>
    <m-checkbox v-model="checkVal" @change="checkboxchange"
        disabled
      >checkbox</m-checkbox
    >
    <m-checkbox-group></m-checkbox-group>
  </div>
</template>
<script setup>
import { ref } from "vue";
const checkVal = ref(true);
const checkboxchange = () => {
  console.log("checkboxchange1121212");
};
</script>
