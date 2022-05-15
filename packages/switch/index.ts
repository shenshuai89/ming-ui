import type {App} from "vue";
import Switch from "./src/switch.vue";
Switch.install = (app: App) =>{
    app.component(Switch.name, Switch)
}
type WrapInstall<T> = T & {install(app: App): void};
const _Switch:WrapInstall<typeof Switch> = Switch;
export default _Switch;