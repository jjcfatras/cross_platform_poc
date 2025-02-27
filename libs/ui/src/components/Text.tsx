"use client";

import { type TextProps as RNTextProps, Text as RNText } from "react-native";
import {
  type UnistylesVariants,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";

import { pxToRem } from "../utils";

export type TextProps = RNTextProps & UnistylesVariants<typeof styleSheet>;

export const Text = ({ children, color, style, type, ...rest }: TextProps) => {
  const { styles } = useStyles(styleSheet, { color, type });
  return (
    <RNText style={[styles.text, style]} {...rest}>
      {children}
    </RNText>
  );
};

const styleSheet = createStyleSheet((theme) => ({
  text: {
    fontFamily: "Roboto",
    variants: {
      color: {
        black: {
          color: theme.colors.black,
        },
        default: {
          color: theme.colors.textPrimary,
        },
        inverse: {
          color: theme.colors.inverse,
        },
        secondary: {
          color: theme.colors.textSecondary,
        },
        white: {
          color: theme.colors.white,
        },
      },
      type: {
        bold: {
          fontWeight: "bold",
        },
        default: {
          _web: {
            fontSize: pxToRem(theme.fontSizing[4]),
          },
          fontSize: theme.fontSizing[4],
        },
        h1: {
          _web: {
            fontSize: pxToRem(theme.fontSizing[8]),
          },
          fontSize: theme.fontSizing[8],
          fontWeight: "bold",
        },
        h2: {
          _web: {
            fontSize: pxToRem(theme.fontSizing[7]),
          },
          fontSize: theme.fontSizing[7],
          fontWeight: "bold",
        },
        h3: {
          _web: {
            fontSize: pxToRem(theme.fontSizing[6]),
          },
          fontSize: theme.fontSizing[6],
          fontWeight: "bold",
        },
        h4: {
          _web: {
            fontSize: pxToRem(theme.fontSizing[5]),
          },
          fontSize: theme.fontSizing[5],
          fontWeight: "bold",
        },
        italic: {
          _web: {
            fontSize: pxToRem(theme.fontSizing[4]),
          },
          fontFamily: "Roboto-Italic",
          fontSize: theme.fontSizing[4],
        },
        link: {
          _web: {
            fontSize: pxToRem(theme.fontSizing[4]),
          },
          fontSize: theme.fontSizing[4],
          textDecorationLine: "underline",
        },
      },
    },
  },
}));
