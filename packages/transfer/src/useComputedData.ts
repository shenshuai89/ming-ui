import { computed } from "vue";
import { ITransferProps } from "./transfer.type";

export const useComputedData = (props: ITransferProps) => {
  const propsKey = computed(() => props.props.key);
  /* const data = computed(() => {
    return props.data.reduce((memo, current) => {
      memo[current[propsKey.value]] = current;
      return memo;
    }, {});
  }); */

  const sourceData = computed(() => {
    return props.data.filter(
      (item) => !props.modelValue.includes(item[propsKey.value])
    );
  });

  const targetData = computed(() => {
    return props.data.filter((item) =>
      props.modelValue.includes(item[propsKey.value])
    );
    // return props.modelValue.reduce((memo, key) => {
    //   memo.push(data.value[key]);
    //   return memo;
    // }, []);
  });
  console.log(propsKey, targetData, sourceData);
  return { propsKey, targetData, sourceData };
};
