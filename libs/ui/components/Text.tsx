import { Text as RNText, type TextProps as RNTextProps } from "react-native";
import { StyleSheet, type UnistylesVariants } from "react-native-unistyles";

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
    fontSize: theme.sizing[4],
    variants: {
      color: {
        black: {
          color: theme.colors.black,
        },
        default: {
          color: theme.colors.textPrimary,
        },
        secondary: {
          color: theme.colors.textSecondary,
        },
        white: {
          color: theme.colors.white,
        },
      },
      type: {
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
        link: {
          textDecorationLine: "underline",
        },
      },
    },
  },
}));
