import React from "react";
import styled from "styled-components";
import { Box } from "./Box";
import { defaultProps, DefaultProps } from "./helpers";
import { Size, Variant } from "./helpers/types";
import IconElement from "./IconElement";
import { CustomTheme } from "./theme";

interface AlertElementProps extends DefaultProps {
  variant?: Variant;
  $fill?: boolean;
  icon?: boolean;
  iconVariant?: Variant;
  iconPosition?: string;
  size$?: Size;
}

const sizeStyles = (v: Size, t: CustomTheme, fill = true) => `
        padding: ${t.alert.padding[v].y} ${t.alert.padding[v].x};
        font-size: ${t.alert.fontSize[v]};
        >${Box}{
          font-size: ${t.alert.fontSize[v]};
        }
        > ${IconElement} {
            ${fill
    ? `
                padding: 0 ${t.alert.padding[v].xHalf};
                margin-top: -${t.alert.padding[v].y};
                margin-bottom: -${t.alert.padding[v].y};

                &[data-src-icon-position="left"] {
                    margin-right: ${t.alert.padding[v].xHalf};
                    margin-left: -${t.alert.padding[v].x};
                }
    
                &[data-src-icon-position="right"] {
                    margin-right: -${t.alert.padding[v].x};
                    margin-left: ${t.alert.padding[v].xHalf};
                }
            `
    : `
                &[data-src-icon-position="left"] {
                    margin-right: ${t.alert.padding[v].xHalf};
                    margin-left: -${t.alert.padding[v].xHalf};
                }

                &[data-src-icon-position="right"] {
                    margin-right: -${t.alert.padding[v].xHalf};
                    margin-left: ${t.alert.padding[v].xHalf};
                }
            `
  }
        }
    `;

const AlertElement = styled(Box) <AlertElementProps>`
  ${({ theme, variant = "primary", $fill, icon, iconVariant = "primary" }) => `
    box-sizing: border-box;
    border: solid 1px;
    border-radius: ${theme.alert.radius};
    word-wrap: break-word;
    word-break: break-word;

    ${$fill
      ? `
        border-color: ${theme.type[variant].main};
        background: ${theme.type[variant].main};
        color: ${theme.type[variant]?.alert?.fontFill};    
        fill: ${theme.type[variant]?.alert?.fontFill};

        a {
            color: ${theme.type[variant]?.alert?.fontFill};    
        }

        hr {
            background: ${theme.type[variant].darkest};
        }
    `
      : `
        border-left-width: 10px;
        border-color: ${theme.type[variant]?.alert?.border};
        background: ${theme.type[variant]?.alert?.background};
        color: ${theme.type[variant]?.alert?.font};   
        fill: ${theme.type[variant]?.alert?.font}; 

        a {
            color: ${theme.type[variant]?.alert?.linkFont};
        }

        hr {
            background: ${theme.type[variant]?.alert?.hr};
        }
    `
    }
    
    ${icon
      ? `
        display: flex;
        > ${IconElement} {
            ${$fill
        ? `
                background: ${iconVariant == variant
          ? theme.type[iconVariant].darker
          : theme.type[iconVariant].main
        };
                fill: ${theme.type[iconVariant]?.alert?.fontFill};
            `
        : `
                fill: ${iconVariant == variant
          ? theme.type[iconVariant]?.alert?.font
          : theme.type[iconVariant]?.main
        };
            `
      }
        }

        .src-alert-content {
            flex: 1 1 auto;
        }
    `
      : ""
    }


`}
  ${({ size$ = "default", theme, $fill }) => sizeStyles(size$, theme, $fill)};
  ${defaultProps};
`;

type Props = {
  children: any;
  variant?: Variant;
  $fill?: boolean;
  icon?: JSX.Element;
  elementProps?: DefaultProps;
  iconVariant?: Variant;
  iconPosition?: string;
  size$?: Size;
};

export const Alert: React.FC<Props> = ({
  size$ = "default",
  children,
  variant = "primary",
  $fill = true,
  icon,
  iconVariant = "primary",
  iconPosition = "left",
  elementProps,
}) => {
  const IconEl = icon ? (
    <IconElement data-src-icon-position={iconPosition}>{icon}</IconElement>
  ) : null;

  return (
    <AlertElement
      size$={size$}
      variant={variant}
      $fill={$fill}
      icon={icon ? true : false}
      iconVariant={iconVariant}
      iconPosition={iconPosition}
      {...elementProps}
    >
      {iconPosition == "left" && IconEl}
      {icon ? <Box className="src-alert-content">{children}</Box> : children}
      {iconPosition == "right" && IconEl}
    </AlertElement>
  );
};
