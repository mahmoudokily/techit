import { Coordinator, ThemeVariable } from "../helpers/types";

export interface Button {
  fixedSize: ThemeVariable<string>;
  padding: ThemeVariable<Coordinator<string> & { xHalf: string }>;
  radius: ThemeVariable<string>;
  fontSize: ThemeVariable<string>;
  disabledOpacity?: number;
  transition?: string;
}

export const button: Button = {
  fixedSize: {
    small: "30px",
    default: "36px",
    large: "40px"
  },
  padding: {
    small: {
      x: ".8rem",
      y: ".28rem",
      xHalf: ".4rem"
    },
    default: {
      x: ".9rem",
      y: ".45rem",
      xHalf: ".45rem"
    },
    large: {
      x: "1rem",
      y: ".5rem",
      xHalf: ".5rem"
    },
  },
  fontSize: {
    small: ".675rem",
    default: ".875rem",
    large: "1rem"
  },
  radius: {
    default: "0.3rem",
    square: "0",
    rounded: "2rem",
    circle: "50%",
  },
  disabledOpacity: 0.7,
};
