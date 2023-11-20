import styled, { css } from "styled-components";
import { Box } from "./Box";

type Props = {
  fullSize?: boolean;
};
export const Flex = styled(Box) <Props>`
  display: flex !important;

  ${({ fullSize }) =>
    fullSize &&
    css`
      width: 100%;
      height: 100%;
    `}
`;

Flex.defaultProps = {
  flexDirection: "column",
  fullSize: false,
};
