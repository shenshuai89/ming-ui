<template>
  <transition
    name="z-message-fade"
    @before-leave="onClose"
    @after-leave="$emit('destroy')"
  >
    <div class="m-message" :class="compClass" :style="compStyle" v-show="visible">message</div>
  </transition>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  PropType,
  ref,
} from "vue";
type TMsg = "success" | "error" | "warning" | "info";
export default defineComponent({
  props: {
    id: { type: String, default: "" },
    message: { type: String, default: "" },
    type: { type: String as PropType<TMsg>, default: "info" },
    duration: { type: Number, default: 2000 },
    center: { type: String, default: "" },
    onClose: { type: Function as PropType<() => void> },
    offset: { type: Number, default: 20 },
  },
  setup(props) {
    const visible = ref(false);
    const compClass = computed(() => [
      "m-message--" + props.type,
      props.center ? "is-center" : "",
    ]);
    let timer = null;
    onMounted(() => {
      visible.value = true;
      timer = setTimeout(() => {
        visible.value = false;
      }, props.duration);
    });
    onUnmounted(() => {
      clearTimeout(timer);
    });

    const compStyle = computed(() => ({
      top: `${props.offset}px`,
    }));
    return { compClass, compStyle, visible };
  },
});
</script>
