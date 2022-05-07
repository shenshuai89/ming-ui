<template>
  <div>
    <button-test></button-test>
    <m-icon name="loading"></m-icon>
    <m-row>
      <m-col :span="6"><div style="background: red">111</div></m-col>
      <m-col :span="6" :offset="6" style="background: blue">22</m-col>
      <m-col :span="6" style="background: green">2</m-col>
    </m-row>
    <m-row :gutter=20>
      <m-col :span="8"><div style="background: red">111</div></m-col>
      <m-col :span="8"><div style="background: pink">222</div></m-col>
      <m-col :span="8"><div style="background: purple">333</div></m-col>
    </m-row>
     <m-row justify="space-around">
      <m-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div style="background: red">111</div></m-col>
      <m-col :span=34><div style="background: pink">222</div></m-col>
      <m-col :span="2"><div style="background: purple">333</div></m-col>
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
