import { createApp } from "vue";
// import MingUI from "ming-ui";
// import MingUI from "../lib/index.esm.js"
import "../lib/theme-chalk/index.css";
import MButton from "../lib/button/index.js"; //组件可以按需加载
import MIcon from "../lib/icon/index.js"; //
import App from "./App.vue";

createApp(App).use(MButton).use(MIcon).mount("#app");
