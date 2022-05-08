import { createApp } from "vue";
import MingUI from "ming-ui";
// import MingUI from "../lib/index.esm.js"
import "theme-chalk/src/index.scss";
import App from "./App.vue";
import Router from "./router/index"

createApp(App).use(MingUI).use(Router).mount("#app");
