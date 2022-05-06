import { createApp } from "vue";
import MingUI from "ming-ui";
console.log(MingUI, "MingUI");
import App from "./App.vue";

createApp(App).use(MingUI).mount("#app");
