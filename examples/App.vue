<template>
  <div>
    <button-test></button-test>
    <m-icon name="loading"></m-icon>
    <m-row>
      <m-col :span="6"><div style="background: red">111</div></m-col>
      <m-col :span="6" :offset="6" style="background: blue">22</m-col>
      <m-col :span="6" style="background: green">2</m-col>
    </m-row>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import ButtonTest from "./components/ButtonTest.vue";
export default defineComponent({
  components: { ButtonTest },
  setup(props) {},
});
</script>
