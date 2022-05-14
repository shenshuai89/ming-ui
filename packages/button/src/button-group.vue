<template>
  <div :class="styleClass">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
type BtnType = "primary"
  | "success"
  | "warning"
  | "danger"
  | "default"
  | "info";
export default defineComponent({
  name: "MButtonGroup",
  props:{
    type: {
      type: String as PropType<BtnType>,
      default: "", // 默认type为空，取内部button的类型，如果设置则覆盖 子button中设置的type
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
  },
  setup(props){
    const styleClass = computed(()=>{
      return [
        "m-button-group",
        props.type ? "m-button-group--" + props.type:"",
      ];
    })
    return {
      styleClass
    }
  }
});
</script>
