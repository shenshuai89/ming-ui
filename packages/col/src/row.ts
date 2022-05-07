import { computed, defineComponent, h, PropType, provide } from "vue";
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
    const styleClass = computed(() => [
      "m-row",
      props.justify !== "start" ? `is-justify-${props.justify}` : "",
    ]);
    provide("ZRow", props.gutter);

    const styles = computed(() => {
      if (props.gutter) {
        return {
          marginLeft: -(props.gutter / 2) + "px",
          marginRight: -(props.gutter / 2) + "px",
        };
      }
    });
    return () => {
      return h(
        props.tag,
        { class: styleClass.value, style: styles.value },
        slots.default?.()
      );
    };
  },
});
