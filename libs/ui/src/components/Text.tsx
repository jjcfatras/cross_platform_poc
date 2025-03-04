import {
  type TextProps as RNTextProps,
  Platform,
  Text as RNText,
} from "react-native";
import { type UnistylesVariants, StyleSheet } from "react-native-unistyles";
import { type TextProps as RNWTextProps } from "react-native-web";

import { HOVER_OPACITY } from "../constants";
import { pxToEm } from "../utils";

const _getAccessibilityProps = (
  type: UnistylesVariants<typeof styles>["type"],
) => {
  let _props: RNTextProps | RNWTextProps | undefined = {};

  switch (type) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6": {
      _props = Platform.select<RNTextProps | RNWTextProps>({
        native: { accessibilityRole: "heading" },
        web: { "aria-level": Number(type[1]), role: "heading" },
      });
      break;
    }
    case "link": {
      _props = Platform.select<RNTextProps | RNWTextProps>({
        native: { accessibilityRole: "link" },
        web: { role: "link" },
      });
      break;
    }
    default:
      break;
  }

  // use casting to make TS happy
  return _props as RNTextProps;
};

export type TextProps = RNTextProps & UnistylesVariants<typeof styles>;

export const Text = ({ children, color, style, type, ...rest }: TextProps) => {
  styles.useVariants({ color, type });
  return (
    <RNText
      style={[styles.text, style]}
      {..._getAccessibilityProps(type)}
      {...rest}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create((theme) => ({
  text: {
    _web: {
      fontSize: pxToEm(theme.fontSizing[4]),
    },
    fontFamily: "Roboto",
    fontSize: theme.fontSizing[4],
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
        default: {},
        h1: {
          _web: {
            fontSize: pxToEm(theme.fontSizing[8]),
          },
          fontSize: theme.fontSizing[8],
          fontWeight: "bold",
        },
        h2: {
          _web: {
            fontSize: pxToEm(theme.fontSizing[6]),
          },
          fontSize: theme.fontSizing[6],
          fontWeight: "bold",
        },
        h3: {
          _web: {
            fontSize: pxToEm(theme.fontSizing[5]),
          },
          fontSize: theme.fontSizing[5],
          fontWeight: "bold",
        },
        h4: {
          _web: {
            fontSize: pxToEm(theme.fontSizing[4]),
          },
          fontSize: theme.fontSizing[4],
          fontWeight: "bold",
        },
        h5: {
          _web: {
            fontSize: pxToEm(theme.fontSizing[3]),
          },
          fontSize: theme.fontSizing[3],
          fontWeight: "bold",
        },
        h6: {
          _web: {
            fontSize: pxToEm(theme.fontSizing[2]),
          },
          fontSize: theme.fontSizing[2],
          fontWeight: "bold",
        },
        italic: {
          fontFamily: "Roboto-Italic",
        },
        link: {
          _web: {
            _hover: {
              opacity: HOVER_OPACITY,
            },
          },
          textDecorationLine: "underline",
        },
        strike: {
          textDecorationLine: "line-through",
        },
      },
    },
  },
}));
