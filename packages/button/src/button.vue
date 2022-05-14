<template>
  <button :class="styleClass" @click="handleClick">
    <!-- 处理loading状态时 显示loading图标 -->
    <i v-if="loading" class="m-icon-loading"></i>
    <!-- 不存在loading状态时 才显示icon -->
    <i v-if="icon && !loading" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
export type BtnType = "primary"
  | "success"
  | "warning"
  | "danger"
  | "default"
  | "info";
export default defineComponent({
  props: {
    type: {
      type: String as PropType<BtnType>,
      default: "primary",
      validator: (val: string) => {
        return [
          "primary",
          "success",
          "warning",
          "danger",
          "default",
          "info",
        ].includes(val);
      },
    },
    icon: {
      type: String,
      default: "",
    },
    disabled: Boolean,
    loading: Boolean,
    round: Boolean,
    circle: Boolean,
  },
  name: "MButton",
  emits: ['click'],
  setup(props, ctx) {
    const styleClass = computed(() => {
      return [
        "m-button",
        "m-button--" + props.type,
        { "is-disabled": props.disabled },
        { "is-loading": props.loading },
        { "is-round": props.round },
        { "is-circle": props.circle },
      ];
    });
    const handleClick = (e) => {
      ctx.emit("click", e);
    };
    return { styleClass, handleClick };
  },
});
</script>
