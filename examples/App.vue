<template>
  <div>
    <m-button
      icon="m-icon-notice"
      type="danger"
      :loading="btnIsLoading"
      @click="handleClick"
      >click</m-button
    >
    <m-button icon="m-icon-notice" type="danger">buton</m-button>
    <m-button icon="m-icon-notice" type="danger"></m-button>
    <m-icon name="loading"></m-icon>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
const useButton = () => {
  const btnIsLoading = ref(true);
  const handleClick = () => {
    console.log("use click");
  };
  setTimeout(() => {
    // loading状态时 按钮点击无效
    btnIsLoading.value = false;
  }, 2000);
  return { handleClick, btnIsLoading };
};
export default defineComponent({
  setup(props) {
    return {
      ...useButton(),
    };
  },
});
</script>
