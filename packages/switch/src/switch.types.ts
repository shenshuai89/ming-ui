
export interface ISwitchProps{
    disabled?:boolean;
    loading?: boolean;
    size?: "small" | "default" | "large";
    width?: number | string;
    inlinePrompt?: boolean;
    inactiveText?: string;
    activeValue?: boolean | string | number;
    inactiveValue?: boolean | string | number;
    activeColor?: string;
    inactiveColor?: string;
    borderColor?: string;
    name?: string;
}