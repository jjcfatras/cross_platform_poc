import { Platform } from "react-native";

export const pxToRem = (px: number) => {
  if (Platform.OS === "web") {
    return `${(px / 16).toFixed(2)}rem`;
  }
  return px;
};
