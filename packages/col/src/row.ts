import { computed, defineComponent, h, PropType } from "vue";
export default defineComponent({
  name: "MRow",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    gutter: {
      type: Number,
      default: 0,
    },
    justify: {
      type: String as PropType<
        "start" | "end" | "center" | "space-round" | "space-between"
      >,
      default: "start",
    },
  },
  setup(props, { slots }) {
    const styleClass = computed(() => ["m-row"]);
    return () => {
      return h(props.tag, { class: styleClass.value }, slots.default?.());
    };
  },
});
