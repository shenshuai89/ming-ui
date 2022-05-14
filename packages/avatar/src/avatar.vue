<template>
  <span class="m-avatar" :style="compStyle" :class="compClass">
    <img :src="src" v-if="src && !hasLoadError" :style="imgStyle" :alt="alt" @error="handleError"/>
    <m-icon v-else-if="icon">
      <component :is="icon" />
    </m-icon>
    <slot v-else />
  </span>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
export default defineComponent({
  name: "MAvatar",
  props: {
    alt: String,
    shape: {
      type: String as PropType<"circle" | "square">,
      default: "square",
    },
    fit: {
      type: String as PropType<
        "fill" | "contain" | "cover" | "none" | "scale-down"
      >,
      default: "cover",
    },
    size: {
      type: [Number, String],
      default: "default",
      validator: (val: unknown): val is number => typeof val === "number",
    },
    src: {
      type: String,
      default: "",
    },
    icon: String,
    error: {
      type: Function as PropType<() => void>,
    },
  },
  emits: ["error"],
  setup(props, { emit }) {
    const hasLoadError = ref(false);
    const compStyle = computed(() => {
      if (typeof props.size === "number") {
        return { width: props.size + "px", height: props.size + "px" };
      }
    });
    const compClass = computed(() => {
      return [
        props.shape === "circle" ? "m-avatar--circle" : "m-avatar--square",
        typeof props.size === "string" ? `m-avatar--${props.size}` : "",
      ];
    });
    const imgStyle = computed(() => {
      return { objectFit: props.fit };
    });
    const handleError = (e) => {
      hasLoadError.value = true;
      emit("error", e);
    }

    return { compStyle, compClass, imgStyle,hasLoadError, handleError };
  },
});
</script>
