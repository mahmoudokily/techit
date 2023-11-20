import {
  background,
  BackgroundColorProps,
  BackgroundProps,
  borders,
  BordersProps,
  color,
  compose,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  margin,
  MarginProps,
  padding,
  PaddingProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  size,
  SizeProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";

// all the default `styled-system` props

export const defaultProps = compose(
  grid,
  space,
  color,
  size,
  layout,
  margin,
  shadow,
  borders,
  padding,
  flexbox,
  position,
  typography,
  background
);
export type DefaultProps = SpaceProps &
  // ColorProps<CustomTheme, Color> &
  TypographyProps &
  LayoutProps &
  PaddingProps &
  MarginProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BordersProps &
  PositionProps &
  ShadowProps &
  SizeProps &
  BackgroundColorProps;
