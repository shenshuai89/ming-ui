import { App } from "vue";
import MButton from "@ming-ui/button";
import MIcon from "@ming-ui/icon";
import MButtonGroup from "@ming-ui/button-group";

const components = [MButton, MIcon, MButtonGroup];
const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
export default {
  install,
};
