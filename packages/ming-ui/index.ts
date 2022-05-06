import { App } from "vue";
import Button from "@ming-ui/button";
import Icon from "@ming-ui/icon";

const components = [Button, Icon];
const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name);
  });
};
export default {
  install,
};
