<template>
  <div class="z-checkbox">
    {{ modelValue }}
    <span class="z-checkbox__input">
      <input
        type="checkbox"
        v-model="model"
        :checked="isChecked"
        :name="name"
        :disabled="disabled"
        :indeterminate="indeterminate"
        @change="checkboxEvent"
      />
    </span>
    <span class="z-checkbox__label">
      <slot></slot>
    </span>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, getCurrentInstance } from "vue";
import { ICheckboxProps } from "./checkbox.types";

const useCheckbox = (props: ICheckboxProps) => {
    // 1:v-model绑定的属性；2:checked属性；3:处理 change 事件
  // 1.从父级传递过来的modelvalue，子组件可以接收，但是无法直接修改并返回，需要借助计算属性，将modelValue进行转化，
  // 使用计算属性的get、set方法，获取值和修改值。 在set里面通过emit派发事件，给父组件返回数据
  const { emit } = getCurrentInstance();
  const model = computed({
    get() {
      return props.modelValue;
    },
    set(newVal) {
      emit("update:modelValue", newVal);
    },
  });
  // 2.checkbox的 checked 属性设置，更新checkbox的value值，同时更新checked值
  const isChecked = computed(() => {
    const value = model.value;
    return value;
  });
  // 3 定义checkbox 内 change事件
  const checkboxEvent = (e: InputEvent) => {
    // console.log("checkboxEvent", e.target);
    const target = e.target as HTMLInputElement;
    const changeEventVal = target.checked ? true : false;
    // 通过emit【change】,可以触发到父级定义的event事件
    emit("change", changeEventVal);
  };

  return { model, isChecked, checkboxEvent };
};

export default defineComponent({
  name: "MCheckbox",
  props: {
    name: String,
    indeterminate: Boolean,
    checked: Boolean,
    disabled: Boolean,
    label: [String, Number, Boolean],
    modelValue: [String, Number, Boolean],
  },
  emits: ["update:modelValue", "change"],
  setup(props) {
    return useCheckbox(props);
  },
});
</script>
