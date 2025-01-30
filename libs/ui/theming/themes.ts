import { palette, sizing, spacing } from "./_constants";

export const lightTheme = {
  colors: {
    background: palette.base100,
    bad: palette.semanticBad40,
    black: palette.base0,
    brand: palette.brand30,
    divider: palette.base0,
    good: palette.semanticGood25,
    textPrimary: palette.base0,
    textSecondary: palette.base40,
    white: palette.base100,
  },
  sizing,
  spacing,
} as const;

export const darkTheme = {
  colors: {
    background: palette.base0,
    bad: palette.semanticBad60,
    black: palette.base0,
    brand: palette.brand80,
    divider: palette.base100,
    good: palette.semanticGood30,
    textPrimary: palette.base100,
    textSecondary: palette.base60,
    white: palette.base100,
  },
  sizing,
  spacing,
} as const;
