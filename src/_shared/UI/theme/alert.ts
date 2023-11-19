import { Coordinator, ThemeVariable } from "../helpers/types";

export type Alert = {
  padding: ThemeVariable<Coordinator<string> & { xHalf: string }>;
  radius: string;
  fontSize: ThemeVariable<string>;
  linkFontWeight: string;
};

export const alert: Alert = {
  padding: {
    small: {
      x: "1.25rem",
      y: ".375rem",
      xHalf: ".625rem",
    },
    default: {
      x: "1.25rem",
      y: ".75rem",
      xHalf: ".625rem",
    },
    large: {
      x: "1.25rem",
      y: "1rem",
      xHalf: ".625rem",
    },
  },
  radius: ".25rem",
  fontSize: {
    small: "0.6rem",
    default: "0.8rem",
    large: "1rem",
  },
  linkFontWeight: "600",
};
