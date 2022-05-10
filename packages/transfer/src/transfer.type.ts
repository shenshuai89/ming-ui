export type TypeKey = string | number;

export type DataItem = {
  key: TypeKey;
  label: string;
  disabled: boolean;
};
export type Props = {
  key: string;
  label: string;
  disabled: boolean | string;
};
export interface ITransferProps {
  data: DataItem[];
  modelValue: TypeKey[];
  props: Props;
}
export interface ITransferPanelProps {
  title: string;
  data: unknown[];
  props: Props;
}

export interface IPanelState{
    checked: any[];
    isAllChecked: boolean;
}
