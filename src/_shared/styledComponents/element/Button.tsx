import styled from "styled-components";
import { AllProps } from "../types";
import { compose, typography, space, position } from "styled-system";
import IconElement from "./IconElement";

const variantStyles = (theme: any, variant = "primary") => `
    background: ${theme.type[variant as string].main};
    color: ${theme.type[variant as string].font};
    fill: ${theme.type[variant as string].font};         
`;
const shapeStyles = (theme: any, shape = "default") => `
border-radius: ${theme.radius[shape as string]}
`;

const sizeStyles = (t: any, v = "", fixedSize = false) => `
   font-size: ${t.button.fontSize[v]};

        ${
          fixedSize
            ? `
            width: ${t.button.fixedSize[v]};
            height: ${t.button.fixedSize[v]};
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
  ${({ theme, size, fixedSize }) => sizeStyles(theme, buttonSize, fixedSize)}
`;
