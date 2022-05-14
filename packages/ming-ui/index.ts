import type { App, Plugin } from "vue";
import MButton from "@ming-ui/button";
import MIcon from "@ming-ui/icon";
import MButtonGroup from "@ming-ui/button-group";
import MCol from "@ming-ui/col";
import MRow from "@ming-ui/row";
import MCheckbox from "@ming-ui/checkbox";
import MCheckboxGroup from "@ming-ui/checkbox-group";
import MTransfer from "@ming-ui/transfer";
import MMessage from "@ming-ui/message";

const components = [
  MButton,
  MIcon,
  MButtonGroup,
  MCol,
  MRow,
  MCheckbox,
  MCheckboxGroup,
  MTransfer,
];
const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
export default { install };
export { MMessage };
