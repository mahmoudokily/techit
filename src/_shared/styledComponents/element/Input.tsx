import { ComponentType, HTMLAttributes, InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { AllProps, Variant } from "../types";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    Variant {
  fill?: boolean;
  border?: boolean;
  as?: string | ComponentType<any>;
  disabled?: boolean;
  leftAddon?: boolean;
  leftAddonAbsolute?: boolean;
  rightAddon?: boolean;
  rightAddonAbsolute?: boolean;
  inputElement?: boolean;
}

const variantStyles = (theme: any, variant = "primary", fill = true) => `
${
  fill
    ? `
        border-color: ${theme.type[variant].main};
        background: ${theme.type[variant as string].main};
        color: ${theme.type[variant as string].font};
        fill: ${theme.type[variant as string].font};
        &:focus,
            &[data-src-active="true"] {
                border-color: ${theme.type[variant].darkest};
                background: ${theme.type[variant].dark};
            }
    `
    : ` 
            width:100%;
            height:100%;
            border-color ${theme.type[variant].form.inputBorder};
            background: ${theme.type[variant].form.inputBackground};
            color: ${theme.type[variant].form.inputFont};
            fill: ${theme.type[variant].form.inputFont};
            &:focus,
            &[data-src-active="true"] {
                border-color: ${theme.type[variant].main};
            }
    `
}

`;
const sizeStyles = (theme: any, inputSize = "large") => `
    padding:
     ${theme.form.inputPadding[inputSize as string].y} ${
  theme.form.inputPadding[inputSize as string].x
};
    font-size: ${theme.form.inputFontSize[inputSize as string]};
`;
const shapeStyles = (theme: any, shape = "default") => `
    border-radius: ${theme.radius[shape as string]}
    `;

const placeholder = [
  "::-webkit-input-placeholder",
  "::-moz-placeholder",
  ":-moz-placeholder",
  ":-ms-input-placeholder",
  "::placeholder",
];

export const Input = styled.input<InputProps>`
  ${({ theme, inputSize }) => sizeStyles(theme, inputSize)}
  ${({ theme, variant, fill }) => variantStyles(theme, variant, fill)}
  ${({ theme, shape }) => shapeStyles(theme, shape)}


  box-sizing: border-box;
  border: ${(props) => (props.border ? "solid 1px" : "0")};
  font-family: ${({ theme }) => theme.fontFamily.input};
  transition: 200ms 0s ease-in-out;
  transition-property: border, background;

  ${(props) =>
    props.inputElement
      ? `
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
        ${placeholder
          .map(
            (item) => `
            &${item} {
                opacity: 1;
                color: ${({ fill, theme, variant }: any) =>
                  fill
                    ? theme.type[variant as string].form.inputPlaceholderFill
                    : theme.type[variant as string].form.inputPlaceholder};
            }
        `
          )
          .join(" ")}
        `
      : `
        cursor: default;
        user-select: none;
        &[data-src-placeholder-style="true"] {
            color: ${({ fill, theme, variant }: any) =>
              fill
                ? theme.type[variant as string].form.inputPlaceholderFill
                : theme.type[variant as string].form.inputPlaceholder};
        }
    `}
  ${({ disabled, theme, fill, variant }) =>
    disabled
      ? `
        opacity: ${theme.form.disabledOpacity};
        ${
          !fill
            ? `background:${theme.type[variant as string].form.inputBorder};`
            : ""
        }
    `
      : ""}

    ${({ leftAddon, leftAddonAbsolute }) =>
    leftAddon && !leftAddonAbsolute
      ? `
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    `
      : ""}

    ${({ rightAddon, rightAddonAbsolute }) =>
    rightAddon && !rightAddonAbsolute
      ? `
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    `
      : ""}
&:focus,&:active {
    outline: 0;
  }
`;

Input.defaultProps = {
  border: false,
  fill: true,
  inputElement: true,
  inputSize: "default",
};
