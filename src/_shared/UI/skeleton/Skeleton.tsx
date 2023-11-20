import styled, { css } from "styled-components";
import { Box } from "../Box";

export const Skeleton = styled(Box) <{ translucent?: boolean }>`
  display: inline-block;
  height: 100%;
   border-radius: 5px;
  width: 100%;
  background: ${({ translucent = false }) =>
      translucent
         ? css`linear-gradient(-90deg, #C1C1C1 0%, #F8F8F8 50%, #C1C1C1 100%)`
         : css`linear-gradient(-90deg, #F0F0F0 0%, #F8F8F8 50%, #F0F0F0 100%)`};  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;


export const SkeletonLine = styled(Skeleton)`
  width: 5.5em;
  border-radius: 5px;

  &::before {
    content: "\00a0";
  }
`;