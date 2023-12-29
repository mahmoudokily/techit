import { ColorHelper } from "../helpers/ColorHelper";
import DV from "../helpers/DV";
import { ColorObject, TypeOptions } from "../helpers/types";

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
  loader?: {
    borderRight?: string;
    borderBottom?: string;
    borderTop?: string;
    borderLeft?: string;
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
    disabledBackgroundColor?: string;
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

export type Types = {
  [key: string]: Type;
};

export const createType = (
  value: string | Type,
  options: boolean | TypeOptions = true
): Type => {
  const typeOptions = options as TypeOptions;
  let type: Type;
  let color: ColorObject;

  if (typeof value === "string")
    type = {
      main: value,
    };
  else type = value;

  try {
    color = ColorHelper.getColor(type.main);
  } catch (ignored) {
    throw "Main color is not valid.";
  }
  if (options === true || typeOptions.util) {
    type.font = type.font || ColorHelper.getFontColor(type.main);
    type.dark = type.dark || color.darken(DV.DARK_LEVEL).hex().toString();
    type.darker = type.darker || color.darken(DV.DARKER_LEVEL).hex().toString();
    type.darkest =
      type.darkest ||
      ColorHelper.getColor(type.darker).darken(DV.DARK_LEVEL).hex().toString();
    type.light = type.light || color.darken(DV.LIGHT_LEVEL).hex().toString();
    type.lighter =
      type.lighter || color.darken(DV.LIGHTER_LEVEL).hex().toString();
    type.lightest =
      type.lightest ||
      ColorHelper.getColor(type.lighter)
        .darken(DV.LIGHT_LEVEL)
        .hex()
        .toString();
    type.shadow =
      type.shadow || color.alpha(DV.SHADOW_FADE_LEVEL).rgb().toString();
  }

  if (options === true || typeOptions.alert) {
    type.alert = type.alert || {};
    type.alert.background =
      type.alert.background || ColorHelper.mix(type.main, DV.ALERT_BG_LEVEL);
    type.alert.border =
      type.alert.border || ColorHelper.mix(type.main, DV.ALERT_BORDER_LEVEL);
    type.alert.font =
      type.alert.font || ColorHelper.mix(type.main, DV.ALERT_FONT_LEVEL);
    type.alert.fontFill =
      type.alert.fontFill || type.font || ColorHelper.getFontColor(type.main);
    type.alert.linkFont =
      type.alert.linkFont ||
      ColorHelper.getColor(type.alert.font)
        .darken(DV.ALERT_LINK_FONT_DARKEN_LEVEL)
        .rgb()
        .toString();
    type.alert.hr =
      type.alert.hr ||
      ColorHelper.getColor(type.alert.border)
        .darken(DV.ALERT_HR_DARKEN_LEVEL)
        .rgb()
        .toString();
  }

  if (options === true || typeOptions.button) {
    type.button = type.button || {};
    type.button.background = type.button.background || DV.BUTTON_BG_COLOR;

    type.button.placeholder = type.button.placeholder || type.dark;
    type.button.placeholderFill =
      type.button.placeholderFill || ColorHelper.getFontColor(type.main);
  }
  if (options === true || typeOptions.loader) {
    type.loader = type.loader || {};
    type.loader.borderBottom = type.loader.borderBottom || "white";
    type.loader.borderLeft = type.loader.borderLeft || type.main;
    type.loader.borderRight = type.loader.borderRight || "white";
    type.loader.borderTop = type.loader.borderTop || "white";
  }
  if (options === true || typeOptions.popover) {
    type.popover = type.popover || {};
    type.popover.background = type.popover.background || type.main;
    const popoverBgColor = ColorHelper.getColor(type.popover.background);
    type.popover.border =
      type.popover.border ||
      popoverBgColor.darken(DV.POPOVER_BORDER_DARKEN_LEVEL).hex().toString();
    type.popover.headerBackground =
      type.popover.headerBackground ||
      popoverBgColor.darken(DV.POPOVER_HEADER_BG_DARKEN_LEVEL).hex().toString();
    const popoverHeaderBgColor = ColorHelper.getColor(
      type.popover.headerBackground
    );
    type.popover.headerBorder =
      type.popover.headerBorder ||
      popoverHeaderBgColor
        .darken(DV.POPOVER_BORDER_DARKEN_LEVEL)
        .hex()
        .toString();
  }
  if (options === true || typeOptions.form) {
    type.form = type.form || {};
    type.form.disabledBackgroundColor = DV.FORM_DISABLED_BG_COLOR;
    type.form.radioColor = type.form.radioColor || DV.FORM_RADIO_COLOR;
    type.form.radioBorder = type.form.radioBorder || DV.FORM_RADIO_BORDER_COLOR;
    type.form.inputBackground =
      type.form.inputBackground || DV.FORM_INPUT_BG_COLOR;
    type.form.inputBorder = type.form.inputBorder || DV.FORM_INPUT_BORDER_COLOR;
    type.form.inputFont =
      type.form.inputFont ||
      ColorHelper.getFontColor(type.form.inputBackground as string);
    type.form.inputPlaceholder =
      type.form.inputPlaceholder || DV.FORM_INPUT_PLACEHOLDER_COLOR;
    type.form.inputPlaceholderFill =
      type.form.inputPlaceholderFill ||
      ColorHelper.getColor(type.font as string)
        .alpha(DV.FORM_INPUT_PLACEHOLDER_FILL_FADE_LEVEL)
        .rgb()
        .toString();
  }
  if (options === true || typeOptions.waveEffect) {
    type.waveEffect = type.waveEffect || {};
    const waveEffectColor = ColorHelper.getColor(
      type.waveEffect.color || type.main
    );
    type.waveEffect.color = `radial-gradient(${waveEffectColor
      .alpha(0.2)
      .toString()} 0, ${waveEffectColor
      .alpha(0.3)
      .toString()} 40%, ${waveEffectColor
      .alpha(0.4)
      .toString()} 50%, ${waveEffectColor
      .alpha(0.5)
      .toString()} 60%, ${waveEffectColor.alpha(0).toString()} 70%)`;
  }
  return type;
};

export const type = {
  primary: createType(DV.BLUE),
  secondary: createType(DV.GRAY_700),
  success: createType({
    main: DV.GREEN,
    font: DV.LIGHT_FONT_COLOR,
  }),
  danger: createType({
    main: DV.RED,
    font: DV.LIGHT_FONT_COLOR,
  }),
  warning: createType(DV.YELLOW),
  info: createType(DV.CYAN),
  light: createType({
    main: DV.GRAY_100,
    table: {
      background: DV.TABLE_LIGHT_BG_COLOR,
      border: DV.TABLE_LIGHT_BORDER_COLOR,
    },
    waveEffect: {
      color: DV.WHITE,
    },
  }),
  gray: createType(DV.GRAY_500),
  dark: createType({
    main: DV.GRAY_900,
    table: {
      background: DV.TABLE_DARK_BG_COLOR,
      border: DV.TABLE_DARK_BORDER_COLOR,
    },
    waveEffect: {
      color: DV.BLACK,
    },
  }),
  white: createType(DV.WHITE),
  black: createType(DV.BLACK),
};
