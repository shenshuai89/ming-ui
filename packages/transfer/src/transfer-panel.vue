<template>
  <div class="m-transfer__panel">
    <p class="m-transfer__title">
      <m-checkbox
        v-model="isAllChecked"
        :indeterminate="computedIndeterminate"
        @change="handleIsAllChecked"
        >{{ title }}</m-checkbox
      >
    </p>
    <div class="m-transfer__body">
      <m-checkbox-group v-model="checked">
        <!-- item[keyProp]而不是item.key写死，这个可以改变这个key值 -->
        <m-checkbox
          v-for="item in data"
          :disabled="item[disabledProp]"
          :key="item[keyProp]"
          :label="item[keyProp]"
          >{{ item[labelProp] }}</m-checkbox
        >
      </m-checkbox-group>
    </div>
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  PropType,
  reactive,
  ref,
  toRefs,
  watch,
} from "vue";
import {
  IPanelState,
  ITransferPanelProps,
  Props,
  DataItem,
} from "./transfer.type";
import MCheckboxGroup from "@ming-ui/checkbox-group";
import MCheckbox from "@ming-ui/checkbox";
const useCheck = (props: ITransferPanelProps, panelState: IPanelState) => {
  const keyProp = computed(() => props.props.key);
  const labelProp = computed(() => props.props.label);
  const disabledProp = computed(() => props.props.disabled);
  const { emit } = getCurrentInstance();
  // 控制半选，如果选中的一部分数据，则title边上的选择框是半选状态
  const computedIndeterminate = ref(false);
  // 过滤掉 有disabled属性的选项

  const getCheckableData = () => {
    return props.data.filter((item) => !item[disabledProp.value as string]);
  };
  let checkableData = getCheckableData();
  // 点击是否进行全选和取消全选
  const handleIsAllChecked = (val: boolean) => {
    panelState.isAllChecked = val;
    console.log(
      checkableData,
      panelState.checked,
      props.data,
      "全选和取消全选"
    );
    panelState.checked = val
      ? checkableData.map((item) => item[keyProp.value])
      : [];
  };
  watch(
    () => props.data,
    (newVal, oldVal) => {
      checkableData = getCheckableData();
      // 原来选中的值
      const stashChecked = newVal.filter((item: DataItem) =>
        panelState.checked.includes(item.key)
      );
      if (stashChecked.length > 0) {
        panelState.checked = stashChecked.map((item: DataItem) => item.key);
      } else {
        panelState.checked = [];
      }
    }
  );

  watch(
    () => panelState.checked,
    (newVal, oldVal) => {
      // 监控显示是否需要全选状态
      let isAllCheckedState = checkableData
        .map((item) => item[keyProp.value])
        .every((item) => panelState.checked.includes(item));

      panelState.isAllChecked = isAllCheckedState;
      // 监控是否需要显示半选状态
      if (newVal.length > 0 && !isAllCheckedState) {
        computedIndeterminate.value = true;
      } else {
        computedIndeterminate.value = false;
      }
      emit("checked-change", newVal);
    },
    { immediate: true }
  );

  return {
    keyProp,
    labelProp,
    disabledProp,
    computedIndeterminate,
    handleIsAllChecked,
  };
};
export default defineComponent({
  name: "MTransferPanel",
  components: { MCheckboxGroup, MCheckbox },
  props: {
    title: {
      type: String,
    },
    data: {
      type: Array as PropType<DataItem[]>,
      default: () => [],
    },
    props: {
      type: Object as PropType<Props>,
    },
  },
  emits: ["checked-change"],
  setup(props) {
    const panelState = reactive({
      checked: [], // 选中的值
      isAllChecked: false, //表头中是否全选的值
    });
    return {
      ...toRefs(panelState),
      ...toRefs(useCheck(props, panelState)),
    };
  },
});
</script>
