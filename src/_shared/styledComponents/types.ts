import {
  HTMLAttributes,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import {
  BackgroundProps,
  BordersProps,
  ColorProps,
  FlexboxProps,
  GridGapProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";

export type Variant = {
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "light"
    | "dark"
    | "info"
    | "gray";
  shape?: "rounded" | "square" | "default" | "circle";
  inputSize?: "small" | "medium" | "large" | "default";
  buttonSize?: "small" | "medium" | "large";
};
export type AllProps = SpaceProps &
  LayoutProps &
  FlexboxProps &
  BackgroundProps &
  BordersProps &
  PositionProps &
  ShadowProps &
  TypographyProps &
  GridGapProps &
  Variant & {
    inverse?: boolean;
    color?: string;
    fixedSize?: boolean;
    buttonSize: ButtonSizeProps;
  };

export type SectionProps = {
  inverse?: boolean;
  smPadding?: string;
  padding?: string;
} & AllProps;

export interface LabelProps
  extends HTMLAttributes<HTMLLabelElement>,
    TypographyProps,
    SpaceProps {
  color?: string;
}

export interface InputContainerProps
  extends InputHTMLAttributes<HTMLInputElement>,
    SpaceProps,
    BackgroundProps,
    Variant {
  onPrefixClick?: () => void;
  onSuffixClick?: () => void;
  prefix?: string;
  suffix?: string;
  label?: string;
  error?: string | null;
  description?: string | null;
  withShadow?: boolean;
  flex?: boolean;
  labelColor?: string;
  iconColor?: string;
}

export interface TextareaContainerProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    SpaceProps,
    BackgroundProps,
    Variant {
  onPrefixClick?: () => void;
  onSuffixClick?: () => void;
  label?: string;
  error?: string | null;
  description?: string | null;
  withShadow?: boolean;
  flex?: boolean;
  labelColor?: string;
  iconColor?: string;
}

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
}

export interface Type {
  main: string;
  font?: string;
  dark?: string;
  darker?: string;
  darkest?: string;
  light?: string;
  lighter?: string;
  lightest?: string;
  shadow?: string;

  // components
  alert?: {
    background?: string;
    border?: string;
    font?: string;
    fontFill?: string;
    linkFont?: string;
    hr?: string;
  };
  breadcrumb?: {
    background?: string;
    font?: string;
    fontFill?: string;
  };
  button?: {
    background?: string;
    placeholder?: string;
    placeholderFill?: string;
  };
  dropdown?: {
    background?: string;
    font?: string;
  };
  form?: {
    radioColor?: string;
    radioBorder?: string;
    inputBackground?: string;
    inputBorder?: string;
    inputFont?: string;
    inputPlaceholder?: string;
    inputPlaceholderFill?: string;
  };
  pagination?: {
    background?: string;
    border?: string;
    font?: string;
  };
  popover?: {
    background?: string;
    border?: string;
    headerBackground?: string;
    headerBorder?: string;
  };
  progressBar?: {
    background?: string;
    backgroundFill?: string;
    backgroundAlt?: string;
  };
  table?: {
    background?: string;
    border?: string;
    font?: string;
    stripedBackground?: string;
    stripedFont?: string;
    hoverBackground?: string;
    hoverFont?: string;
  };
  waveEffect?: {
    color?: string;
  };
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
export interface SizeStrictProps {
  size: string;
  sizeSm: string;
  sizeMd: string;
  sizeLg: string;
  sizeXl: string;
}
export interface JSXElementProps {
  [key: string]: any;
}
export type Value = string | number;
export interface ButtonSizeProps {
  buttonSize?: string;
  buttonSizeSm?: string;
  buttonSizeMd?: string;
  buttonSizeLg?: string;
  buttonSizeXl?: string;
}
