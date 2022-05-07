import { computed, defineComponent, h } from "vue";
export default defineComponent({
  name: "MCol",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { slots }) {
    const styleClass = computed(() => {
      const post = ["span", "offset"] as const;
      const allClass = [];
      post.forEach((item) => {
        const size = props[item];
        if (typeof size === "number" && size > 0) {
          allClass.push(`m-col-${item}-${props[item]}`);
        }
      });
      return ["m-col", ...allClass]
    });
    return () => {
      return h(
        props.tag,
        {
          class: styleClass.value,
        },
        slots.default?.()
      );
    };
  },
});
