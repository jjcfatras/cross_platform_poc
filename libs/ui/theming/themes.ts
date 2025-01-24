import { palette, sizing, spacing } from "./_constants";

export const lightTheme = {
  colors: {
    background: palette.base100,
    bad: palette.semanticBad40,
    good: palette.semanticGood25,
    typography: palette.base0,
  },
  fontSizing: sizing,
  spacing,
} as const;

export const darkTheme = {
  colors: {
    background: palette.base0,
    bad: palette.semanticBad60,
    good: palette.semanticGood30,
    typography: palette.base100,
  },
  fontSizing: sizing,
  spacing,
} as const;
