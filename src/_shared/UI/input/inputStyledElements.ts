import styled from "styled-components";
import { Box } from "../Box";
import { Shape, Size } from "../helpers/types";
import { Typography } from "../Typography";

type InputIconProps = {
  absolute?: boolean;
  type: "left" | "right";
  shape: Shape;
  size$?: Size;
};

export const InputError = styled(Typography).attrs({ variant: "caption10" })`
  margin-top: 2px;
  color: ${({ theme }) => theme.type.danger.main};
`;

export const InputIcon = styled(Box)<InputIconProps>`
  ${({ theme, type, shape = "default", absolute, size$ = "small" }) => `
    overflow: hidden;
    flex: 0 0 auto;
    display: inline-flex;
    cursor: pointer;
    font-size: ${theme?.form?.inputFontSize?.[size$]};
    
    ${
      !absolute
        ? `
        ${
          type === "left"
            ? `
            border-top-left-radius: ${theme?.form?.inputRadius?.[shape]};
            border-bottom-left-radius: ${theme?.form?.inputRadius?.[shape]};
        `
            : `
            border-top-right-radius: ${theme?.form?.inputRadius?.[shape]};
            border-bottom-right-radius: ${theme?.form?.inputRadius?.[shape]};
        `
        }

    `
        : `
        position: absolute;
        height:100%;
        width:30px;
        top:50%;
        bottom:50%;
        transform: translate(50% , -50%);
        ${type === "left" ? `left : 0px;` : `right:0px;`}

            `
    }
`}
`;
