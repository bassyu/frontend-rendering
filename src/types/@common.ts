export interface ToastItem {
  id: string;
  type: "info" | "success" | "warning" | "error";
  message: string;
  time?: number;
  buttonContent?: string;
  onClickButton?: () => void;
}

export interface ImageFormData<T> {
  requestForm: T;
  imageData: Blob | null;
}
