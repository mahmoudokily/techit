import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";
import { DefaultProps, defaultProps } from "./helpers";
import { Variant } from "./helpers/types";
import IconElement from "./IconElement";
import { SimpleLoader } from "./Loader";
import { CustomTheme } from "./theme";
import { Typography } from "./Typography";
import WaveEffect from "./WaveEffect";

type Shape = "default" | "square" | "rounded" | "circle";
type Size = "small" | "default" | "large";

export interface Props extends HTMLAttributes<HTMLAnchorElement>, DefaultProps {
  variant?: Variant;
  iconPosition?: "left" | "right";
  icon?: ReactNode;
  $fill?: boolean;
  link?: boolean;
  withBorder?: boolean;
  shape?: Shape;
  block?: boolean;
  fixedSize?: boolean;
  disabled?: boolean;
  loading$?: boolean;
  $size?: Size;
}

const sizeStyles = (t: CustomTheme, v = "small", fixedSize = false) => `
   font-size: ${t.button.fontSize[v]};
   text-transform:uppercase;
        ${
          fixedSize
            ? `
            width: ${t.button.fixedSize[v]};
            height: ${t.button.fixedSize[v]}; width: ${t.button.fixedSize[v]};
            max-height: ${t.button.fixedSize[v]};
            min-height: ${t.button.fixedSize[v]};


        `
            : `
            padding: ${t.button.padding[v].y} ${t.button.padding[v].x};
            > ${IconElement} {
                padding: 0 ${t.button.padding[v].xHalf};
                margin-top: -${t.button.padding[v].y};
                margin-bottom: -${t.button.padding[v].y};
                &[data-src-icon-position="left"] {
                    margin-right: ${t.button.padding[v].xHalf};
                    margin-left: -${t.button.padding[v].x};
                }
                &[data-src-icon-position="right"] {
                    margin-right: -${t.button.padding[v].x};
                    margin-left: ${t.button.padding[v].xHalf};
                }
            }
        `
        }
`;

export const ButtonElement = styled.a<Props>`
  ${({
    variant = "primary",
    $fill = true,
    withBorder = true,
    shape = "default",
    fixedSize = false,
    theme,
    block = false,
    link,
    disabled,
    loading$,
  }) => `
    cursor:pointer;
    position: relative;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    text-align: center;
    border-radius:${theme.button.radius[shape]};
    ${withBorder ? `border: solid 1px ${theme.type[variant].main};` : ""}
    user-select: none;
    word-wrap: break-word;
    word-break: break-word;
    transition: ${theme.button.transition};
    transition-property: border, background, color, fill, box-shadow;
    a& {
        text-decoration: none;
    }
    ${
      block
        ? `
        justify-content: center;
        width: 100%;
    `
        : ""
    }
    ${
      fixedSize
        ? `       
        justify-content: center;
    `
        : ""
    }
    ${
      !link
        ? `
        ${
          $fill
            ? `
            background: ${theme.type[variant].main};
            color: ${theme.type[variant].font}!important;
            fill: ${theme.type[variant].font};
            > ${IconElement} {
                background: ${theme.type[variant].main};
            }
            &[data-src-placeholder-style="true"] {
                color: ${theme?.type?.[variant].button?.placeholderFill};
            }
            &:hover,
            &[data-src-active="true"] {
                border-color: ${theme.type[variant].dark};
                background: ${theme.type[variant].dark};
    
                > ${IconElement} {
                    background: ${theme.type[variant].main};
                }
            }
        `
            : `
            background: ${theme?.type[variant].button?.background};
            color: ${theme?.type[variant].main};
            fill: ${theme.type[variant].main};
            &[data-src-placeholder-style="true"] {
                color: ${theme?.type[variant].button?.placeholder};
            }
    
            &:hover,
            &[data-src-active="true"] {
                background: ${theme.type[variant].main};
                color: ${theme.type[variant].font};
                fill: ${theme?.type[variant].button?.background};
            }
        `
        }
    
        ${
          withBorder
            ? `
            &:focus,
            &:active,
            &[data-src-active="true"] {
                box-shadow: 0 0 0 .15rem ${theme.type[variant].shadow};
            }
        `
            : ""
        }
    `
        : `
        border-color: transparent;
        background: transparent;
        cursor: pointer;
        text-align: left;
        color: ${theme.type[variant].main};
        fill: ${theme.type[variant].main};
        &:hover,
        &[data-src-active="true"] {
            color: ${theme.type[variant].darkest};
            fill: ${theme.type[variant].darkest};
        }
    `
    }
    &:focus,
    &:active {
        outline: 0;
    }
    ${
      disabled
        ? `
        opacity: ${theme.button.disabledOpacity};
        pointer-events: none;
    `
        : ""
    }
    ${
      loading$
        ? `
        pointer-events: none;
        > *:not(.src-wave-ripple):not([data-src-loading="true"]) {
            visibility: hidden;
         
        }
    `
        : ""
    }

      
`}
  ${({ theme, $size, fixedSize }) => sizeStyles(theme, $size, fixedSize)}

  ${defaultProps}
`;

export const Button: React.FC<PropsWithChildren<Props>> = ({
  children,
  iconPosition = "left",
  icon,
  loading$: loading,
  variant,
  disabled,
  $size,
  ...props
}) => {
  const IconEl = icon ? (
    <IconElement data-src-icon-position={iconPosition}>{icon}</IconElement>
  ) : null;

  return (
    <WaveEffect>
      <ButtonElement
        disabled={disabled || loading}
        variant={variant}
        $size={$size}
        {...props}
      >
        {loading && <SimpleLoader size={$size} mr={props?.fixedSize ? 0 : 2} />}
        {iconPosition === "left" && IconEl}
        {!loading || typeof children !== "string" ? children : children}
        {iconPosition === "right" && IconEl}
      </ButtonElement>
    </WaveEffect>
  );
};
