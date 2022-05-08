export interface ICheckboxProps {
  indeterminate?: boolean; //半选
  checked?: boolean; //选中
  name?: string; // 原生name名称
  disabled?: boolean; //是否可选
  label?: string | boolean | number; // group中使用
  modelValue?: string | boolean | number; //绑定值
}
