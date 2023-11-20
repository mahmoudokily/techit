export interface FontSizes {
  none: string;
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  xxxl: string;
}

export interface FontWeights {
  regular: number;
  medium: number;
  bold: number;
}

export const fontWeights: FontWeights = {
  regular: 400,
  medium: 600,
  bold: 700,
};

export const fontSizes: FontSizes = {
  none: "0px",
  xxs: "12px",
  xs: "14px",
  s: "16px",
  m: "18px",
  l: "20px",
  xl: "24px",
  xxl: "30px",
  xxxl: "40px",
};
export type FontSize = keyof FontSizes;
