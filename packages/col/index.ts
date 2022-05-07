import Col from "./src/col";
import { App } from "vue";
Col.install = (app: App) => {
  app.component(Col.component, Col);
};
export default Col;
