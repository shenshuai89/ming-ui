import Avatar from "./src/avatar.vue";
import { App } from "vue";
Avatar.install = (app: App):void => {
    app.component(Avatar.name, Avatar)
};
type IWithInstall<T> = T & { install(app: App): void };
const _Avatar: IWithInstall<typeof Avatar> = Avatar;
export default _Avatar;
