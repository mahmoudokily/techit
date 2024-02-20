import styled from "styled-components"
import {
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  size,
  space
} from "styled-system"
import { DefaultProps } from "./helpers"

interface BoxProps extends React.HTMLAttributes<HTMLDivElement>, DefaultProps {
  withEffect?: boolean
  clickable?: boolean
}

export const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  ${({ clickable, theme }) =>
    clickable
      ? `
&:hover& ,&:focus {
  background-color: #d8edfe!important;
  cursor: pointer;
};

`
      : ``};

  ${compose(
    space,
    color,
    size,
    layout,
    background,
    flexbox,
    grid,
    border,
    shadow,
    position
  )}
`

// const AbsoluteShape = styled.div`
//   position: absolute;
//   height: 160px;
//   top: 40%;
//   z-index: 1;
//   opacity: 0.7;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   width: 100%;
//   overflow: hidden;
// `;

Box.defaultProps = {}
