import { Coordinator, ThemeVariable } from "../helpers/types"

export const form: Form = {
  disabledOpacity: 0.7,
  radioSpanSpace: ".46875rem",
  radioSpanFontSize: {
    small: ".875rem",
    default: "1rem",
    large: "1rem"
  },
  inputPadding: {
    small: {
      x: ".8rem",
      y: ".38rem"
    },
    default: {
      x: ".9rem",
      y: ".45rem"
    },
    large: {
      x: "1rem",
      y: ".65rem"
    }
  },
  inputRadius: {
    default: "5px",
    square: "0",
    rounded: "2rem"
  },
  inputFontSize: {
    small: ".905rem",
    default: "1rem",
    large: "1rem"
  },
  optionPadding: {
    small: ".15625rem",
    default: ".3125rem",
    large: ".625rem"
  },
  optionMargin: {
    small: {
      x: ".28rem",
      y: ".06rem"
    },
    default: {
      x: ".45rem",
      y: ".125rem"
    },
    large: {
      x: ".5rem",
      y: ".175rem"
    }
  },
  optionFontSize: {
    small: ".975rem",
    default: ".875rem",
    large: "1rem"
  },
  inputBorder: "#737373"
}

export interface Form {
  disabledOpacity: number
  radioSpanSpace: string
  inputBorder?: string
  radioSpanFontSize: ThemeVariable<string>
  inputPadding?: ThemeVariable<Coordinator<string>>
  inputRadius?: ThemeVariable<string>
  inputFontSize?: ThemeVariable<string>
  optionPadding?: ThemeVariable<string>
  optionMargin?: ThemeVariable<Coordinator<string>>
  optionFontSize?: ThemeVariable<string>
}
