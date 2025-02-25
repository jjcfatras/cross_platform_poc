import { fontSizing, palette, sizing, spacing } from "./_constants";

export const lightTheme = {
  colors: {
    background: palette.base100,
    bad: palette.semanticBad40,
    black: palette.base0,
    brand: palette.brand30,
    divider: palette.base0,
    good: palette.semanticGood25,
    inverse: palette.base100,
    textPrimary: palette.base0,
    textSecondary: palette.base40,
    transparent: palette.transparent,
    white: palette.base100,
  },
  fontSizing,
  isDark: false,
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
    inverse: palette.base0,
    textPrimary: palette.base100,
    textSecondary: palette.base60,
    transparent: palette.transparent,
    white: palette.base100,
  },
  fontSizing,
  isDark: true,
  sizing,
  spacing,
} as const;
