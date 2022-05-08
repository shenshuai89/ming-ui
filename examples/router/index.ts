import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/button",
    component: () => import("../components/ButtonTest.vue"),
  },
  {
    path: "/layout",
    component: () => import("../components/LayoutTest.vue"),
  },
  {
    path: "/icon",
    component: () => import("../components/IconTest.vue"),
  },
];
const router = createRouter({
  // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
