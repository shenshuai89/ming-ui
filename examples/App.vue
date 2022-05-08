<template>
  <header-view></header-view>
  <div class="container">
    <side-left></side-left>
    <side-right></side-right>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import HeaderView from "./view/HeaderView.vue";
import SideLeft from "./view/SideLeft.vue";
import SideRight from "./view/SideRight.vue";
export default defineComponent({
  components: { HeaderView, SideRight, SideLeft },
});
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.container {
  display: flex;
}
</style>
