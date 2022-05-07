import { computed, defineComponent, h, inject } from "vue";
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
    const gutter = inject("ZRow", 0);

    const styleClass = computed(() => {
      const post = ["span", "offset"] as const;
      const allClass = [];
      post.forEach((item) => {
        const size = props[item];
        if (typeof size === "number" && size > 0) {
          allClass.push(`m-col-${item}-${props[item]}`);
        }
      });
      return ["m-col", ...allClass];
    });

    const styles = computed(() => {
        if(gutter){
            return {
                paddingLeft: gutter/2 + 'px',
                paddingRight: gutter/2 + 'px',
            }
        }
    })
    return () => {
      return h(
        props.tag,
        {
          class: styleClass.value,
          style: styles.value
        },
        slots.default?.()
      );
    };
  },
});
