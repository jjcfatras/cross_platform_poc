import { type TextProps as RNTextProps, Text as RNText } from "react-native";
import { type UnistylesVariants, StyleSheet } from "react-native-unistyles";

export type TextProps = RNTextProps & UnistylesVariants<typeof styles>;

export const Text = ({ children, color, style, type, ...rest }: TextProps) => {
  styles.useVariants({ color, type });
  return (
    <RNText style={[styles.text, style]} {...rest}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create((theme) => ({
  text: {
    fontFamily: "Roboto",
    fontSize: theme.sizing[4],
    variants: {
      color: {
        black: {
          color: theme.colors.black,
        },
        default: {
          color: theme.colors.textPrimary,
        },
        inverse: {
          color: theme.colors.background,
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
          fontSize: theme.sizing[4],
        },
        h1: {
          fontSize: theme.sizing[8],
          fontWeight: "bold",
        },
        h2: {
          fontSize: theme.sizing[7],
          fontWeight: "bold",
        },
        h3: {
          fontSize: theme.sizing[6],
          fontWeight: "bold",
        },
        h4: {
          fontSize: theme.sizing[5],
          fontWeight: "bold",
        },
        italic: {
          fontFamily: "Roboto-Italic",
        },
        link: {
          textDecorationLine: "underline",
        },
      },
    },
  },
}));
