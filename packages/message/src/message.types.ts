export interface IMessageOptions {
  id?: string;
  message?: string;
  type?: "success" | "error" | "warning" | " info";
  duration?: number;
  center?: boolean;
  onClose?: (message?: string) => void;
  offset?: number;
}
export type IMessageParams = IMessageOptions | string;
