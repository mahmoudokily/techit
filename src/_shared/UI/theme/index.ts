import DV from "../helpers/DV";
import { Alert, alert } from "./alert";
import { Badge, badge } from "./badge";
import { BreakPoints, breakpoints } from "./breakpoints";
import { button, Button as ButtonProps } from "./button";
import { colors, Colors as ColorsTypes } from "./colors";
import { fontSizes, FontSizes as FontSizesTypes } from "./fonts";
import { form, Form } from "./form";
import { grid } from "./grid";
import { GridProps } from "./grid/grid.types";
import { iconSize, IconSize } from "./iconSize";
import { Pagination, pagination } from "./pagination";
import { Popover, popover } from "./popover";
import { type, Types } from "./type";
import { Typographies, typography } from "./typography";
import { zIndex, ZIndex } from "./zIndex";
export interface CustomTheme {
  colors: ColorsTypes;
  breakpoints: BreakPoints;
  typography: Typographies;
  fontSizes: FontSizesTypes;
  button: ButtonProps;
  type: Types;
  form: Form;
  popover: Popover;
  zIndex: ZIndex;
  alert: Alert;
  iconSize: IconSize;
  grid: GridProps;
  waveEffect: {
    transition: string;
  };
  pagination: Pagination;
  badge: Badge;
}

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
  export interface Colors extends ColorsTypes {}
  export interface FontSizes extends FontSizesTypes {}
}

const theme: CustomTheme = {
  typography,
  breakpoints,
  colors,
  fontSizes,
  button,
  type,
  form,
  popover,
  zIndex,
  alert,
  iconSize,
  waveEffect: {
    transition: `${DV.WAVE_EFFECT_TRANSITION_TYPE} ${DV.WAVE_EFFECT_TRANSITION_DURATION}ms 0ms`,
  },
  pagination,
  badge: badge,
  grid: grid,
};

export default theme;
