import styled, { DefaultTheme } from "styled-components";
import {
  space,
  layout,
  flexbox,
  background,
  border,
  position,
  shadow,
  compose,
  gridGap,
  typography,
  color,
} from "styled-system";
import { AllProps, LabelProps, SectionProps } from "./types";

export const Box = styled.div<AllProps>`
  ${compose(
    space,
    layout,
    flexbox,
    background,
    border,
    position,
    shadow,
    typography,
    gridGap
  )}
`;
export const Flex = styled(Box)<Partial<AllProps>>`
  display: flex;
`;
export const Row = styled(Flex)<AllProps>`
  flex-direction: row;
`;
export const Column = styled(Flex)<AllProps>`
  flex-direction: column;

};
`;
export const Absolute = styled(Flex)<AllProps>`
  position: absolute;
`;

const variantStyles = (theme: any, variant = "primary") => `
    background: ${theme.type[variant as string].main};
    color: ${theme.type[variant as string].font};
    fill: ${theme.type[variant as string].font};         
`;
const shapeStyles = (theme: any, shape = "default") => `
border-radius: ${theme.radius[shape as string]}
`;

export const Button = styled.button<AllProps>`
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 1.54px;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 1.54px;
  text-transform: uppercase;
  cursor: pointer;

  border: none;
  transition: all 0.6s ease;
  opacity: 0.9;
  &:hover {
    opacity: 1;
    white-space: nowrap;
    outline: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  ${compose(typography, space, position)}
  ${({ theme, variant }) => variantStyles(theme, variant)}
  ${({ theme, shape }) => shapeStyles(theme, shape)}
`;
export const Container = styled(Box)<AllProps>`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;
  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const Section = styled(Box)<SectionProps>`
  max-width: 100%;
  overflow: hidden;
  padding: ${({ padding }) => (padding ? padding : "140px 0px")};
  background: ${({ inverse, theme }) =>
    inverse === true ? "#ffffff" : theme.colors.primary};
  color: ${({ inverse, theme }) => (inverse === true ? "#0c0c0d" : "white")};
  a,
  span,
  button,
  p {
    color: ${({ inverse, theme }) =>
      inverse === true ? "#0c0c0d" : theme.colors.white};
  }
  svg {
    fill: ${({ inverse, theme }) =>
      inverse === true ? "#0c0c0d" : theme.colors.white};
    color: ${({ inverse, theme }) =>
      inverse === true ? theme.colors.primary : theme.colors.white};
  }
  @media screen and (max-width: 768px) {
    padding: ${({ smPadding }) => (smPadding ? smPadding : "70px 0")};
  }
`;

export const Typography = styled.span<AllProps>`
  ${compose(typography, space)}
`;

export const Label = styled.label<LabelProps>`
  padding-bottom: 5px;
  font-weight: bold;
  color: ${({ color }) => (color ? color : "black")};
  font-size: 16px;
`;
