<template>
    <m-button
      icon="m-icon-notice"
      type="danger"
      :loading="btnIsLoading"
      @click="handleClick"
      >click</m-button
    >
    <m-button icon="m-icon-notice" type="danger">buton</m-button>
    <m-button icon="m-icon-notice" type="danger"></m-button>
    <m-button-group type="success">
      <m-button icon="m-icon-arrow-left" type="success">上一页</m-button>
      <m-button>下一页 <i class="m-icon-arrow-right"></i></m-button>
    </m-button-group>
</template>
<script>
import { defineComponent, ref, onMounted } from "vue";
const useButton = () => {
  const btnIsLoading = ref(true);
  const handleClick = () => {
    console.log("use click");
  };
  onMounted(()=>{
    setTimeout(() => {
      // loading状态时 按钮点击无效
      btnIsLoading.value = false;
    }, 2000);
  })
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