<template>
  <i :class="`m-icon-${name}`"></i>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MIcon",
  props: {
    name: {
      type: String,
      default: "",
    },
  },
});
</script>