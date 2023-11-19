import styled from "styled-components";
import { Box } from "./Box";
import { Shape, Size, Variant } from "./helpers/types";
import { CustomTheme } from "./theme";
import { Typography } from "./Typography";

export interface Props {
  variant?: Variant;
  shape?: Shape;
  fixedSize?: boolean;
  space?: boolean;
  $size?: Size;
  $fill?: boolean;
}

const sizeStyles = (t: CustomTheme, v = "small", fixedSize = false) => `
        font-size: ${t.badge.fontSize[v]};
        ${
          fixedSize
            ? `
            width: ${t.badge.fixedSize[v]};
            height: ${t.badge.fixedSize[v]};
        `
            : `
            padding: ${t.badge.padding[v].y} ${t.badge.padding[v].x}; 
            .badge-icon,
            .badge-text {
                padding: ${t.badge.padding[v].y} ${t.badge.padding[v].x};
                margin: -${t.badge.padding[v].y} -${t.badge.padding[v].x}; 
            }
    
            > *:first-child {
                margin-right: 0;
    
                + * {
                    margin-left: 0;
                }
            }
        `
        }
    `;
export const Badge = styled(Box)<Props>`
  ${({
    theme,
    variant = "primary",
    shape = "default",
    fixedSize = true,
    space,
    $size = "small",
    $fill = false,
  }) => `



    display: inline-flex;
    align-items: center;
    border-radius: ${theme.badge.radius[shape]};
     
    ${
      $fill
        ? ` 
        
         background: ${theme.type[variant].main};
         color: ${theme.type[variant].font}!important;
        span, div span , ul li , div{
          color: ${theme.type[variant].font};

        };


    `
        : ``
    };
    border: 1px solid ${theme.type[variant].darker};
    fill: ${theme.type[variant].font};
    word-wrap: break-word;
    word-break: break-word;
    .badge-icon {
        background: ${theme.type[variant].darker};
        &:active,
        &:focus {
            background: ${theme.type[variant].darkest};
        }
    }
    ${
      fixedSize
        ? `
        justify-content: center;
    `
        : ""
    }
    ${
      space
        ? `
        margin: ${theme.badge.margin.y} ${theme.badge.margin.x};
    `
        : ""
    }


`}
  ${({ theme, $size, fixedSize }) => sizeStyles(theme, $size, fixedSize)}
`;
