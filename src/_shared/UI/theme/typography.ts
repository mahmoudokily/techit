
type TypographyVariant = {
  fontSize: number;
  fontWeight: number;
}


export interface Typographies {
  display20: TypographyVariant,
  title40: TypographyVariant,
  title30: TypographyVariant,
  title20: TypographyVariant,
  title10: TypographyVariant,
  body30: TypographyVariant,
  body20: TypographyVariant,
  body10: TypographyVariant,
  caption30: TypographyVariant,
  caption20: TypographyVariant,
  caption10: TypographyVariant,


}


export const typography: Typographies = {
  display20: {
    fontSize: 36,
    fontWeight: 200
  },
  title40: {
    fontSize: 28,
    fontWeight: 300
  },
  title30: {
    fontSize: 22,
    fontWeight: 300
  },
  title20: {
    fontSize: 17,
    fontWeight: 500
  },
  title10: {
    fontSize: 13,
    fontWeight: 500
  },
  body30: {
    fontSize: 17,
    fontWeight: 400
  },
  body20: {
    fontSize: 15,
    fontWeight: 400
  },
  body10: {
    fontSize: 13,
    fontWeight: 400
  },
  caption30: {
    fontSize: 15,
    fontWeight: 400
  },
  caption20: {
    fontSize: 13,
    fontWeight: 400
  },
  caption10: {
    fontSize: 11,
    fontWeight: 400
  },

};

export type TypographyType = keyof Typographies;
