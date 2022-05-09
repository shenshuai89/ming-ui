<template>
  <label class="m-checkbox" :class="[isCheckedClass ? 'is-checked': '']">
    <span class="m-checkbox__input">
      <input
        type="checkbox"
        v-model="model"
        :value="label"
        :checked="isChecked"
        :name="label"
        :disabled="disabled"
        :indeterminate="indeterminate"
        @change="checkboxEvent"
      />
      <!-- vue3中input需要绑定下value的值，现在默认v-model是给modelValue设置值。 -->
    </span>
    <span class="m-checkbox__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
<script lang="ts">
import { computed, defineComponent, getCurrentInstance, inject, ref } from "vue";
import { ICheckboxGroupProvide, ICheckboxProps } from "./checkbox.types";

const useCheckbox = (props: ICheckboxProps) => {
  let isCheckedClass = ref(false);
  // 1:v-model绑定的属性；2:checked属性；3:处理 change 事件
  // 1.从父级传递过来的modelvalue，子组件可以接收，但是无法直接修改并返回，需要借助计算属性，将modelValue进行转化，
  // 使用计算属性的get、set方法，获取值和修改值。 在set里面通过emit派发事件，给父组件返回数据

  // 添加checkboxGroup传递的值
  const { isGroup, checkboxGroup } = useCheckboxGroup();
  const checkboxGroupValue = computed(() =>
    // checkboxGroup.modelValue是checkboxGroup中通过computed获取的props的modelValue的值
    // 如果isGroup为真，说明 checkboxGroup 上设置了v-model
    isGroup ? checkboxGroup.modelValue?.value : props.modelValue
  );

  const { emit } = getCurrentInstance();
  const model = computed({
    get() {
      // 先判断是否存在checkboxGroupValue数据，group组数据
      return isGroup ? checkboxGroupValue.value : props.modelValue;
    },
    set(newVal) {
      if (isGroup) {
        return checkboxGroup.changeEvent(newVal);
      }
      emit("update:modelValue", newVal);
    },
  });
  // 2.checkbox的 checked 属性设置，更新checkbox的value值，同时更新checked值
  const isChecked = computed(() => {
    const value = model.value;
    // 判断checkboxGroup中选中的值是哪些
    if (Array.isArray(value)) {
      isCheckedClass.value = value.includes(props.label)
      return value.includes(props.label);
    } else {
      isCheckedClass.value = value as boolean;
      return value;
    }
  });
  // 3 定义checkbox 内 change事件
  const checkboxEvent = (e: InputEvent) => {
    // console.log("checkboxEvent", e.target);
    const target = e.target as HTMLInputElement;
    const changeEventVal = target.checked ? true : false;
    // 通过emit【change】,可以触发到父级定义的event事件
    emit("change", changeEventVal);
  };

  return { model, isChecked, checkboxEvent, isCheckedClass };
};

// 通过checkboxGroup给内部子组件checkbox 注入值
const useCheckboxGroup = () => {
  const checkboxGroup = inject<ICheckboxGroupProvide>("MCheckboxGroup", {});
  const isGroup = checkboxGroup.name === "MCheckboxGroup";
  return {
    checkboxGroup,
    isGroup,
  };
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
