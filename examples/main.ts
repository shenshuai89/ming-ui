import { createApp } from "vue";
import MingUI from "ming-ui";
// import MingUI from "../lib/index.esm.js"
import "theme-chalk/src/index.scss";
import App from "./App.vue";

createApp(App).use(MingUI).mount("#app");
