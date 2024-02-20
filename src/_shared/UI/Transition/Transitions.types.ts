import { Value } from "../helpers/CssHelper"

export type TransitionProps = {
  children: JSX.Element
  $status: boolean
  $display?: boolean
  $value?: Value
  $beforeShow?: () => Promise<void>
  $beforeHide?: () => Promise<void>
  $show?: (el: HTMLElement) => Promise<void>
  $hide?: (el: HTMLElement) => Promise<void>
  $afterShow?: () => void
  $afterHide?: () => void
  $type?: string
  $duration?: number
}

export interface GlobalStyleProps {
  idd: number
  type: string
  duration: number
}
