import { App } from "vue";
import MButton from "@ming-ui/button";
import MIcon from "@ming-ui/icon";

const components = [MButton, MIcon];
const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
export default {
  install,
};
