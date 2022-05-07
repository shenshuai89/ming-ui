import Row from "../col/src/row";
import { App } from "vue";
Row.install = (app: App) => {
  app.component(Row.component, Row);
};
export default Row;
