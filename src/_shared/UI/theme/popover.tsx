import { Coordinator, ThemeVariable } from "../helpers/types";

export type Popover = {
  radius: string;
  fontSize: ThemeVariable<string>;
  headerPadding: ThemeVariable<Coordinator<string>>;
  bodyPadding: ThemeVariable<Coordinator<string>>;
};

export const popover: Popover = {
  radius: ".25rem",
  fontSize: {
    small: ".875rem",
    default: ".875rem",
    large: "1rem",
  },
  headerPadding: {
    small: {
      x: ".5rem",
      y: ".4rem",
    },
    default: {
      x: ".8rem",
      y: ".7rem",
    },
    large: {
      x: "1.1rem",
      y: "1rem",
    },
  },
  bodyPadding: {
    small: {
      x: ".5rem",
      y: ".25rem",
    },
    default: {
      x: ".75rem",
      y: ".5rem",
    },
    large: {
      x: "1rem",
      y: ".75rem",
    },
  },
};
