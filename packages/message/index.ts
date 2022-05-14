import MMessage from "./src/message";
import type { App } from "vue";

type IWithInstall<T> = T & { install(app: App): void };
(MMessage as any).install = (app: App): void => {
    // app.component(Message.name, Message);
  app.config.globalProperties.$message = MMessage;
};

export { MMessage };
export default MMessage;
