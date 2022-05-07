import { App } from "vue";
import MButton from "@ming-ui/button";
import MIcon from "@ming-ui/icon";
import MButtonGroup from "@ming-ui/button-group";
import MCol from "@ming-ui/col";
import MRow from "@ming-ui/row";

const components = [MButton, MIcon, MButtonGroup, MCol, MRow];
const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
export default {
  install,
};
