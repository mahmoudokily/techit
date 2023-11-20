import React from "react";
import styled from "styled-components";
import { Flex } from "../Flex";
import { defaultProps, DefaultProps } from "../helpers";
import { Shape, Size, Variant } from "../helpers/types";
import { CustomTheme } from "../theme";
import { Typography, TypographyProps } from "../Typography";
import { InputIcon } from "./inputStyledElements";

const sizeStyles = (v = "large", t: CustomTheme) => `
        padding: ${t?.form?.inputPadding?.[v]?.y} ${t?.form?.inputPadding?.[v]?.x};
        font-size: ${t?.form?.inputFontSize?.[v]};
    `;

const placeholder = [
  "::-webkit-input-placeholder",
  "::-moz-placeholder",
  ":-moz-placeholder",
  ":-ms-input-placeholder",
  "::placeholder",
];
interface Props extends Partial<React.InputHTMLAttributes<HTMLInputElement>> {
  variant?: Variant;
  $fill?: boolean;
  withBorder?: boolean;
  shape?: Shape;
  inputElement?: boolean;
  prefixAbsolute?: boolean;
  suffixAbsolute?: boolean;
  $size?: Size;
  prefix?: any;
  suffix?: any;
  error?: string | any;
  hint?: string;
  prefixProps?: any;
  suffixProps?: any;
  containerProps?: DefaultProps;
  errorProps?: TypographyProps;
}

export const InputElement = styled.input<Props>`
  ${({
    theme,
    variant = "light",
    $fill = true,
    withBorder = true,
    shape = "default",
    disabled,
    prefix,
    prefixAbsolute,
    suffix,
    suffixAbsolute,
    inputElement = true,
  }) => `
    
    width:100%;
    max-width:100%;
    box-sizing: border-box;
    border-radius: ${theme?.form?.inputRadius?.[shape]};
    border: ${withBorder ? "solid 1px" : "0"};
    transition: 200ms 0s ease-in-out;
    transition-property: border, background;
    &:focus,
    &:active {
        outline: 0;
    }
  
    ${
      $fill
        ? `
        border-color: ${theme.type[variant]?.main};
        background: ${theme.type[variant]?.main};
        color: ${theme.type[variant]?.font};
        fill: ${theme.type[variant]?.font};
        &:focus,
        &[data-src-active="true"] {
            border-color: ${theme.type[variant]?.darkest};
            background: ${theme.type[variant]?.dark};
        }
    `
        : `
        border-color ${theme?.type[variant]?.form?.inputBorder};
        background: ${theme?.type[variant].form?.inputBackground};
        color: ${"#122967" || theme?.type[variant].form?.inputFont};
        fill: ${theme?.type[variant].form?.inputFont};
        &:focus,
        &[data-src-active="true"] {
            border-color: ${theme.type[variant].main};
        }
        &:invalid {
        outline: 2px solid red;
        border-color: red;
    }
    `
    }

 
    ${
      inputElement
        ? `
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
        ${placeholder
          .map(
            (item) => `
            &${item} {
                opacity: 1;
                color: ${
                  $fill
                    ? theme?.type[variant]?.form?.inputPlaceholderFill
                    : theme?.type[variant]?.form?.inputPlaceholder
                };
            }
        `
          )
          .join(" ")}
    `
        : `
        cursor: default;
        user-select: none;
        
        &[data-src-placeholder-style="true"] {
            color: ${
              $fill
                ? theme?.type[variant]?.form?.inputPlaceholderFill
                : theme?.type[variant]?.form?.inputPlaceholder
            };
        }
    `
    }
    ${
      disabled
        ? `
        opacity: ${theme?.form?.disabledOpacity};
         ${
           $fill
             ? ""
             : `background:${theme?.type[variant]?.form?.disabledBackgroundColor};`
         }
            border: none;
            ::placeholder{
              opacity:0;
            }
    `
        : ""
    }
    ${
      prefix && !prefixAbsolute
        ? `
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    `
        : ""
    }
    ${
      suffix && !suffixAbsolute
        ? `
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    `
        : ""
    }
  

`};
  ${({ $size, theme }) => sizeStyles($size, theme)};
  ${defaultProps};
`;

export const Input = React.forwardRef<any, Props>(
  (
    {
      prefix,
      suffix,
      shape,
      prefixProps,
      prefixAbsolute = false,
      suffixProps,
      suffixAbsolute = false,
      errorProps,
      error,
      hint,
      $size,
      containerProps,
      ...props
    },
    ref
  ) => {
    return (
      <Flex flexDirection="column" width="100%" {...containerProps}>
        {prefix || suffix ? (
          <Flex
            flexDirection="row"
            width="100%"
            height="100%"
            position="relative"
          >
            {prefix && (
              <InputIcon
                type="left"
                size$={$size}
                shape={shape}
                absolute={prefixAbsolute}
                {...prefixProps}
              >
                {prefix}
              </InputIcon>
            )}
            <InputElement
              shape={shape}
              prefixAbsolute={prefixAbsolute}
              suffixAbsolute={suffixAbsolute}
              suffix={suffix}
              prefix={prefix}
              $size={$size}
              ref={ref}
              {...props}
            />
            {suffix && (
              <InputIcon
                type="right"
                shape={shape}
                absolute={suffixAbsolute}
                {...suffixProps}
              >
                {suffix}
              </InputIcon>
            )}
          </Flex>
        ) : (
          <InputElement shape={shape} ref={ref} $size={$size} {...props} />
        )}

        {hint && (
          <Typography variant="caption20" color="#737373" mt={2}>
            {hint}
          </Typography>
        )}
        {error && (
          <Typography
            maxWidth="100%"
            display="flex"
            width="auto"
            flexWrap="wrap"
            capitalizeFirstLetter
            variant="caption10"
            color="red"
            py={1}
            textAlign="left"
            alignItems="center"
            {...errorProps}
          >
            {error}
          </Typography>
        )}
      </Flex>
    );
  }
);
