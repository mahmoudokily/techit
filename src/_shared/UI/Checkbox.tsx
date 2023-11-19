import React from "react";
import { ReactNode } from "react";
import styled from "styled-components";
import { SpaceProps } from "styled-system";
import { JSXElementProps } from "./helpers/CssHelper";
import { Shape, Size, Variant } from "./helpers/types";
import { CustomTheme } from "./theme";
import size from "./theme/checkbox-size";
import { Typography } from "./Typography";
const Rectangle = styled.div``;

const StickContainer = styled.div``;

const ShortStick = styled.div``;

const LongStick = styled.div``;

interface RadioLabelProps extends SpaceProps {
  withSpace: boolean;
}

export const RadioLabel = styled.label.attrs<RadioLabelProps>(
  ({ withSpace, mr, my }) => ({
    mr: withSpace ? 3 : mr,
    my: withSpace ? 2 : my,
  })
)<RadioLabelProps>`
  display: inline-flex;
  align-items: center;
  word-wrap: break-word;
  word-break: break-word;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;

export const RadioSpan = styled.span(
  ({ theme }) => `
    flex: 1 1 auto;
    display: inline-block;
    margin-left: ${theme.form.radioSpanSpace};
`
);
interface InputProps
  extends Partial<React.InputHTMLAttributes<HTMLInputElement>> {
  variant?: Variant;
  $fill?: boolean;
  shape?: Shape;
  disabled?: boolean;
  $size?: Size;
}

const sizeStyles = (v = "default", t: CustomTheme, size: any) => `
        & + ${Rectangle} {
            width: ${size?.rectangle[v]};
            height: ${size?.rectangle[v]};
            > ${StickContainer} {
                left: ${size?.stickContainer?.[v]?.left};
                top: ${size?.stickContainer?.[v]?.top};
                > ${ShortStick} {
                    top: ${size?.shortStick?.[v].top};
                }
                > ${LongStick} {
                    top: ${size?.longStick?.[v].top};
                }
            }
        }
        &:checked + ${Rectangle} > ${StickContainer} > {
            ${ShortStick} {
                height: ${size?.shortStick?.[v]?.height};
            }
            ${LongStick} {
                width: ${size?.longStick?.[v]?.width};
            }
        }
        ~ ${RadioSpan} {
            font-size: ${t.form.radioSpanFontSize[v]};
        }
    `;

const Input = styled.input<InputProps>`
  ${({ theme, variant = "primary", $fill, shape, disabled, $size }) => `

    flex: 0 0 auto;
    display: none;
    + ${Rectangle} {
        position: relative;
        overflow: hidden;
        flex: 0 0 auto;
        box-sizing: border-box;
        border-radius: ${shape != "circle" ? "2px" : "100%"};
        border: solid 2px ${theme.type[variant]?.form?.radioBorder};
        background: ${
          $fill
            ? theme.type[variant]?.form?.radioBorder
            : theme.type[variant]?.form?.inputBackground
        };
        transition: 100ms 0s ease-in-out;
        transition-property: border, background;
        > ${StickContainer} {
            position: absolute;
            width: 100%;
            height: 100%;
            pointer-events: none;
            transform: rotate(-50deg);
            transform-origin: 0;
            > ${ShortStick} {
                position: absolute;
                left: 0;
                width: 2px;
                height: 0;
                background: ${theme.type[variant]?.form?.radioColor};
                transition: height 60ms 40ms ease-in-out;
            }
            > ${LongStick} {
                position: absolute;
                left: 0;
                width: 0;
                height: 2px;
                background: ${theme.type[variant]?.form?.radioColor};
                transition: width 40ms 0s ease-in-out;
            }
        }
    }
    &:checked + ${Rectangle} {
        border-color: ${theme.type[variant].main};
        background: ${theme.type[variant].main};
        > ${StickContainer} > {
            ${ShortStick} {
                transition: height 60ms 0s ease-in-out;
            }
            ${LongStick} {
                transition: width 40ms 60ms ease-in-out;
            }
        }
    }
    ${
      disabled
        ? `
        ~ * {
            opacity: ${theme.form.disabledOpacity};
            user-select: none;
        }
    `
        : ""
    }
    
`};

  ${({ $size, theme }) => sizeStyles($size, theme, size)};
`;

interface Props extends InputProps {
  containerProps?: JSXElementProps;
  inputProps?: InputProps;
  spanProps?: JSXElementProps;
  children?: ReactNode;
  fill?: boolean;
}
export const Checkbox = React.forwardRef<any, Props>(
  (
    {
      children,
      spanProps,
      inputProps,
      fill = true,
      variant = "primary",
      shape,
      containerProps,
      ...props
    },
    ref
  ) => {
    return (
      <RadioLabel withSpace={children ? true : false} {...containerProps}>
        <Input
          ref={ref}
          type="checkbox"
          shape={shape}
          $fill={fill}
          variant={variant}
          {...inputProps}
          {...props}
        />
        <Rectangle>
          <StickContainer>
            <ShortStick />
            <LongStick />
          </StickContainer>
        </Rectangle>
        {children && (
          <Typography capitalizeFirstLetter ml={2} {...spanProps}>
            {children}
          </Typography>
        )}
      </RadioLabel>
    );
  }
);
