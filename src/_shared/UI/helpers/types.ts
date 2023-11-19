export interface ThemeVariable<T> {
  [key: string]: T;
}
export interface Coordinator<T> {
  x: T;
  y: T;
}
export interface ColorObject {
  color: number[];
  valpha: number;
  isDark: () => boolean;
  isLight: () => boolean;
  hex: () => ColorObject;
  rgb: () => ColorObject;
  hsl: () => ColorObject;
  darken: (value: number) => ColorObject;
  alpha: (value: number) => ColorObject;
}
export type Shape = "default" | "square" | "rounded" | "circle";
export type Size = "small" | "default" | "large";

export type Variant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "light"
  | "dark"
  | "white"
  | "black"
  | "gray"
export interface TypeOptions {
  util?: boolean;
  alert?: boolean;
  breadcrumb?: boolean;
  button?: boolean;
  dropdown?: boolean;
  form?: boolean;
  pagination?: boolean;
  popover?: boolean;
  progressBar?: boolean;
  table?: boolean;
  waveEffect?: boolean;
  loader?: boolean;
}

export interface SizeStrictProps {
  size: string;
  sizeSm: string;
  sizeMd: string;
  sizeLg: string;
  sizeXl: string;
}

export type SetValue<T> = ((value: T) => void) | React.Dispatch<React.SetStateAction<T>>
