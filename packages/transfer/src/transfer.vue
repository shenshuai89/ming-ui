<template>
  <div class="m-transfer">
    <m-transfer-panel
      title="左侧全选"
      :data="sourceData"
      :props="props"
      @checked-change="onSelectSource"
    ></m-transfer-panel>
    <div class="m-transfer__buttons">
      <m-button
        icon="m-icon-arrow-left"
        @click="addToLeft"
        :disabled="rightChecked.length === 0"
      ></m-button>
      <m-button
        icon="m-icon-arrow-right"
        @click="addToRight"
        :disabled="leftChecked.length === 0"
      ></m-button>
    </div>
    <m-transfer-panel
      title="右侧全选"
      :data="targetData"
      :props="props"
      @checked-change="onSelectTarget"
    ></m-transfer-panel>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive, ref, toRefs } from "vue";
import { DataItem, TypeKey, Props } from "./transfer.type";
import ZButton from "@ming-ui/button";
import MTransferPanel from "./transfer-panel.vue";
import { useComputedData } from "./useComputedData";
export default defineComponent({
  name: "MTransfer",
  props: {
    data: {
      type: Array as PropType<DataItem[]>,
    },
    modelValue: { type: Array as PropType<TypeKey[]> },
    props: {
      type: Object as PropType<Props>,
      default: () => ({
        label: "label",
        key: "key",
        disabled: "disabled",
      }),
    },
  },
  components: { ZButton, MTransferPanel },
  setup(props, { emit }) {
    const checkedState = reactive({
      leftChecked: [],
      rightChecked: [],
    });
    const onSelectSource = (leftVal) => {
      checkedState.leftChecked = leftVal;
    };
    const onSelectTarget = (rightVal) => {
      checkedState.rightChecked = rightVal;
    };
    const addToLeft = () => {
      const currentValue = props.modelValue.slice(0);
      checkedState.rightChecked.forEach((item) => {
        let index = currentValue.indexOf(item);
        if (index > -1) {
          currentValue.splice(index, 1);
        }
      });
      emit("update:modelValue", currentValue);
    };
    const addToRight = () => {
      const currentValue = props.modelValue.slice(0);
      checkedState.leftChecked.forEach((item) => {
        currentValue.push(item);
      });
      // 移动到右侧，左侧选择的内容要清空
      checkedState.leftChecked = [];
      emit("update:modelValue", currentValue);
    };

    return {
      ...toRefs(useComputedData(props)),
      onSelectSource,
      onSelectTarget,
      ...toRefs(checkedState),
      addToLeft,
      addToRight,
    };
  },
});
</script>
