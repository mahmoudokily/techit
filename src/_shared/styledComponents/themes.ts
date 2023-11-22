import { ColorHelper } from "./helper";
import { ColorObject, Type, TypeOptions } from "./types";
import DV from "./ui-components/DV";

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

  if (options === true || typeOptions.breadcrumb) {
    type.breadcrumb = type.breadcrumb || {};
    type.breadcrumb.background =
      type.breadcrumb.background || DV.BREADCRUMB_BG_COLOR;
    type.breadcrumb.font = type.breadcrumb.font || DV.BREADCRUMB_FONT_COLOR;
    type.breadcrumb.fontFill =
      type.breadcrumb.fontFill ||
      (color.isDark()
        ? DV.BREADCRUMB_FONT_FILL_LIGHT_COLOR
        : DV.BREADCRUMB_FONT_FILL_DARK_COLOR);
  }

  if (options === true || typeOptions.button) {
    type.button = type.button || {};
    type.button.background = type.button.background || DV.BUTTON_BG_COLOR;
    type.button.placeholder = type.button.placeholder || type.main;
    type.button.placeholderFill =
      type.button.placeholderFill || ColorHelper.getFontColor(type.main);
  }

  if (options == true || typeOptions.dropdown) {
    type.dropdown = type.dropdown || {};
    type.dropdown.background = type.dropdown.background || DV.DROPDOWN_BG_COLOR;
    type.dropdown.font =
      type.dropdown.font ||
      ColorHelper.getFontColor(type.dropdown.background as string);
  }

  if (options === true || typeOptions.form) {
    type.form = type.form || {};
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

  if (options === true || typeOptions.pagination) {
    type.pagination = type.pagination || {};
    type.pagination.background =
      type.pagination.background || DV.PAGINATION_BG_COLOR;
    type.pagination.border =
      type.pagination.border || DV.PAGINATION_BORDER_COLOR;
    type.pagination.font =
      type.pagination.font ||
      ColorHelper.getFontColor(type.pagination.background as string);
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

  if (options === true || typeOptions.progressBar) {
    type.progressBar = type.progressBar || {};
    type.progressBar.background =
      type.progressBar.background || DV.PROGRESS_BAR_BG;
    type.progressBar.backgroundFill =
      type.progressBar.backgroundFill || DV.PROGRESS_BAR_BG_FILL;
    type.progressBar.backgroundAlt =
      type.progressBar.backgroundAlt ||
      color.alpha(DV.PROGRESS_BAR_BG_ALT_FADE_LEVEL).rgb().toString();
  }

  if (options === true || typeOptions.table) {
    type.table = type.table || {};
    type.table.background =
      type.table.background || ColorHelper.mix(type.main, DV.TABLE_BG_LEVEL);
    type.table.border =
      type.table.border || ColorHelper.mix(type.main, DV.TABLE_BORDER_LEVEL);
    type.table.font =
      type.table.font || ColorHelper.getFontColor(type.table.background);
    type.table.stripedBackground =
      type.table.stripedBackground ||
      ColorHelper.mix(type.table.background, DV.TABLE_STRIPED_BG_LEVEL);
    type.table.stripedFont =
      type.table.stripedFont ||
      ColorHelper.getFontColor(type.table.stripedBackground);
    type.table.hoverBackground =
      type.table.hoverBackground ||
      ColorHelper.mix(type.table.background, DV.TABLE_HOVER_BG_LEVEL);
    type.table.hoverFont =
      type.table.hoverFont ||
      ColorHelper.getFontColor(type.table.hoverBackground);
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

export const theme = {
  id: "T_001",
  name: "Light",
  type: {
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
  },
  radius: {
    default: ".125rem",
    square: "0",
    rounded: "1.8rem",
    circle: "100%",
  },
  form: {
    disabledOpacity: 0.7,
    radioSpanSpace: ".46875rem",
    radioSpanFontSize: {
      small: ".875rem",
      default: "1rem",
      large: "1rem",
    },
    inputPadding: {
      small: {
        x: ".8rem",
        y: ".28rem",
      },
      default: {
        x: ".9rem",
        y: ".45rem",
      },
      large: {
        x: "1rem",
        y: ".5rem",
      },
    },
    inputRadius: {
      default: ".2rem",
      square: "0",
      rounded: "2rem",
    },
    inputFontSize: {
      small: ".875rem",
      default: "1rem",
      large: "1rem",
    },
    optionPadding: {
      small: ".15625rem",
      default: ".3125rem",
      large: ".625rem",
    },
    optionMargin: {
      small: {
        x: ".28rem",
        y: ".06rem",
      },
      default: {
        x: ".45rem",
        y: ".125rem",
      },
      large: {
        x: ".5rem",
        y: ".175rem",
      },
    },
    optionFontSize: {
      small: ".875rem",
      default: ".875rem",
      large: "1rem",
    },
  },
  fontFamily: {
    primary: "Nunito",
    secondary: "Open Sans",
    alert: "inherit",
    badge: "inherit",
    button: "inherit",
    dropdown: "inherit",
    radioSpan: "inherit",
    input: "inherit",
    option: "inherit",
    modal: "inherit",
    popover: "inherit",
    tooltip: "inherit",
  },
  colors: {
    white: "#ffffff",

    Typography: {
      primary: "#0c0c0d",
      secondary: "#737373",
      disabled: "rgba(255, 255, 255,0.5)",
    },
    buttons: {
      primary: "#0c0c0d",
      active: "#fff",
      hover: "rgba(255, 255, 255,0.8)",
      selected: "rgba(255, 255, 255,0.16)",
      disabled: "rgba(255, 255, 255,0.3)",
      disabledBackground: "rgba(255, 255, 255,0.12)",
    },
    primary: {
      main: "#0d47a1",
    },
    secondary: {
      main: "rgba(0, 0, 0, 0.87)",
    },
    background: {
      paper: "#ffffff",
      default: "#ffffff",
      secondary: "#212121",
      primary: "#212121",
      gray10: "#f9f9fa",
      gray30: "#d7d7db",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    a: {
      color: "#121212!important",
    },
    shape: {
      borderColor: "rgba(255, 255, 255,0.3)",
    },
  },
};
const dark = {
  type: {
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
  },
  id: "T_007",
  name: "Sea Wave",
  colors: {
    white: "#ffffff",
    Typography: {
      primary: "#ffffff",
      secondary: "#f9f9fa",
      disabled: "rgba(0, 0, 0, 0.38)",
    },

    buttons: {
      primary: "#ffffff",
      active: "rgba(0, 0, 0, 0.524)",
      hover: "rgba(0, 0, 0, 0.04)",
      selected: "rgba(0, 0, 0, 0.08)",
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
    },
    primary: {
      main: "#0d47a1",
      blue40: "#45a1ff",
      blue50: "#0a84ff",
      blue60: "#0060df",
      blue70: "#003eaa",
      blue80: "#002275",
      blue90: "#000f40",
    },
    secondary: {
      main: "#26a27b",
    },
    background: {
      paper: "#4a4a4f",
      default: "#38383d",
      grey60: "#0c0c0d",
      grey70: "#38383d",
      grey90: "#38383d",
    },
    divider: "rgba(0, 0, 0, 0.1)",
    a: {
      color: "#fff!important",
    },
    Link: {
      color: "#fff!important",
    },
  },
};

// get all themes and save it in local storage
// check if exist one theme in local storage if no set the light one
//get te theme from local storage and set it as selected theme
// create button to change the current theme
