<template>
  <button :class="styleClass">
    <i :class="icon"></i>
    <span><slot></slot></span>
  </button>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
type BtnType =
  | "primary"
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
    return { styleClass };
  },
});
</script>
