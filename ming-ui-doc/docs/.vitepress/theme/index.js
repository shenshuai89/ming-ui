import DefaultTheme from "vitepress/theme";
import MingUI from "ming-ui"
import "ming-ui/lib/theme-chalk/index.css"

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(MingUI);
  },
};
