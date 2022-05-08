<template>
  <div class="side-left">
    <h4>basic基础组件</h4>
    <li
      v-for="basic in basicComponents"
      :key="basic.name"
      :class="[activeComponent === basic.router ? 'active-router' : '']"
      @click="goToRouter(basic.router)"
    >
      {{ basic.name }}
      <!-- <router-link :to="basic.router">{{ basic.name }}</router-link> -->
    </li>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup(props) {
    const routerInstance = useRouter();
    const activeComponent = ref("button");
    const basicComponents = [
      { name: "button按钮", router: "button" },
      { name: "icon图标", router: "icon" },
      { name: "layout布局", router: "layout" },
    ];
    const goToRouter = (path) => {
      routerInstance.push("/" + path);
      activeComponent.value = path;
    };
    return { basicComponents, goToRouter, activeComponent };
  },
});
</script>
<style lang="scss">
.side-left {
  width: 240px;
  height: calc(100vh - 50px);
  flex: 240px 0 0;
  box-sizing: border-box;
  border-right: 1px solid #e3e3e3;
  h4 {
    margin: 10px 0;
    padding-left: 15px;
    color: #303133;
  }
  li {
    list-style: none;
    padding: 5px 20px;
    margin: 6px 0;
    font-size: 14px;
    color: #606266;
    &.active-router {
      background-color: rgba(64, 158, 255, 0.1);
      color: rgb(64, 158, 255);
    }
  }
}
</style>
