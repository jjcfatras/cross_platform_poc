import { PixelRatio } from "react-native";

export const scaleFont = (fontSize: number) =>
  fontSize * PixelRatio.getFontScale();

export const pxToRem = (px: number) => `${px / 16}rem`;

export const pxToEm = (px: number) => `${px / 16}em`;
