import {
  HTMLAttributes,
  InputHTMLAttributes,
  TextareaHTMLAttributes
} from "react"
import {
  BackgroundProps,
  BordersProps,
  FlexboxProps,
  GridGapProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps
} from "styled-system"

export type AllProps = SpaceProps &
  LayoutProps &
  FlexboxProps &
  BackgroundProps &
  BordersProps &
  PositionProps &
  ShadowProps &
  TypographyProps &
  GridGapProps &
  Variant & {
    inverse?: boolean
  }

export type SectionProps = {
  inverse?: boolean
  smPadding?: string
  padding?: string
} & AllProps

export interface LabelProps
  extends HTMLAttributes<HTMLLabelElement>,
    TypographyProps,
    SpaceProps {
  color?: string
}

export type Variant = {
  variant?: "primary" | "secondary" | "default"
  borderRadius?: "round" | "none" | "default"
}

export interface InputContainerProps
  extends InputHTMLAttributes<HTMLInputElement>,
    SpaceProps,
    BackgroundProps,
    Variant {
  onPrefixClick?: () => void
  onSuffixClick?: () => void
  prefix?: string
  suffix?: string
  label?: string
  error?: string | null
  description?: string | null
  withShadow?: boolean
  flex?: boolean
  labelColor?: string
  iconColor?: string
}

export interface TextareaContainerProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    SpaceProps,
    BackgroundProps,
    Variant {
  onPrefixClick?: () => void
  onSuffixClick?: () => void
  label?: string
  error?: string | null
  errorProps?: TypographyProps
  description?: string | null
  withShadow?: boolean
  flex?: boolean
  labelColor?: string
  iconColor?: string
}
