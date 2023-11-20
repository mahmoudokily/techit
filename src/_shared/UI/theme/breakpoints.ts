export const breakpoints: any = [
  "0px",
  "576px",
  "768px",
  "992px",
  "1380px",
  "1400",
];

// aliases
breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];
breakpoints.xxl = breakpoints[5];

export interface BreakPoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export type BreakPoint = keyof BreakPoints;
