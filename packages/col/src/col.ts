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
    xs: {
      type: Number,
      default: 0,
    },
    sm: {
      type: Number,
      default: 0,
    },
    md: {
      type: Number,
      default: 0,
    },
    lg: {
      type: Number,
      default: 0,
    },
    xl: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { slots }) {
    const gutter = inject("ZRow", 0);

    let styleClass = computed(() => {
      const post = ["span", "offset"] as const;
      const allClass = [];
      post.forEach((item) => {
        const size = props[item];
        if (typeof size === "number" && size > 0) {
          if(size<=24){
            allClass.push(`m-col-${item}-${props[item]}`);
          } else{
            allClass.push(`m-col-${item}-24`);
          }
        }
      });

      const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
      sizes.forEach((size) => {
        if (typeof props[size] === "number" && props[size] > 0) {
          allClass.push(`m-col-${size}-${props[size]}`);
        }
      });

      return ["m-col", ...allClass];
    });

    const styles = computed(() => {
      if (gutter) {
        return {
          paddingLeft: gutter / 2 + "px",
          paddingRight: gutter / 2 + "px",
        };
      }
    });

    return () => {
      return h(
        props.tag,
        {
          class: styleClass.value,
          style: styles.value,
        },
        slots.default?.()
      );
    };
  },
});
