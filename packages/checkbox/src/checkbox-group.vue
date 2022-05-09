<template>
  <div class="m-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
import { defineComponent, computed, provide } from "vue";
export default defineComponent({
  name: "MCheckboxGroup",
  props: {
    modelValue: Array,
  },
  emits: ["change", "update:modelValue"],
  setup(props, { emit }) {
    const modelValue = computed(() => props.modelValue);
    const changeEvent = (val) => {
      emit("change", val); // 更新change事件的val值
      emit("update:modelValue", val); //更新v-model绑定的modelValue
    };
    provide("MCheckboxGroup", {
      name: "MCheckboxGroup",
      modelValue,
      changeEvent,
    });
  },
});
</script>
