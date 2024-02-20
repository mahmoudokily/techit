import { PropsWithChildren } from "react"
import styled, { css } from "styled-components"

import { Box } from "./Box"

type CardProps = {
  flex?: number
  withEffect?: boolean
}
export const Card = styled(Box)<PropsWithChildren<CardProps>>`
  max-width: 100%;
  max-height: 100%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 5px;
  background-color: white;
`

Card.defaultProps = {}
