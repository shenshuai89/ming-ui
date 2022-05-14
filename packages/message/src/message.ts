import { createVNode, render, VNode } from "vue";
import type { IMessageParams } from "./message.types";
import MessageComponent from "./message.vue";

let instances = [];
let seed = 1;
const MMessage = (options: IMessageParams) => {
  if (typeof options === "string") {
    options = { message: options };
  }
  
  // 计算多次触发message，多个实例之间的位置偏移
  let verticalOffset = options.offset || 20;
  instances.forEach(({vm}) => {
    verticalOffset += (vm.el?.offsetHeight || 0) + 16;
  });
  verticalOffset += 16;

  // 劫持用户操作的onClose
  let userOnClose = options.onClose;
  const id = `message_${seed++}`;
  let opts = {
    ...options,
    offset: verticalOffset,
    id,
    onClose: () => {
      close(id, userOnClose as any);
    },
  };

  const container = document.createElement("div");
  // 把组件 转换成虚拟节点vnode
  const vm = createVNode(MessageComponent, opts);
  vm.props!.onDestroy = () => {
    render(null, container);
  };
  render(vm, container);
  document.body.appendChild(container.firstElementChild!);
  instances.push({ vm });
  // 调用实例，最后会返回close函数，调用close函数时,将实例隐藏
  return {
    close: () => (vm.component!.props.visible = false),
  };
};

function close(id: string, userOnClose?: (vm: VNode) => void): void {
  const idx = instances.findIndex(({ vm }) => id === vm.component!.props.id);
  if (idx === -1) return;

  const { vm } = instances[idx];
  if (!vm) return;
  userOnClose?.(vm);
  // 实例对象上自身的高度
  const removedHeight = vm.el!.offsetHeight;
  instances.splice(idx, 1);

  // 调整其它实例对象的 vertical offset
  const len = instances.length;
  if (len < 1) return;
  for (let i = idx; i < len; i++) {
    const pos =
      Number.parseInt(instances[i].vm.el!.style["top"], 10) -
      removedHeight -
      16;
    // 重新设置 实例的偏移 高度
    instances[i].vm.component!.props.offset = pos;
  }
}

export default MMessage;
