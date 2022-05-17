import DefaultTheme from "vitepress/theme";
import MingUI from "ming-ui-plus"
import "ming-ui-plus/lib/theme-chalk/index.css"

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(MingUI);
  },
};
