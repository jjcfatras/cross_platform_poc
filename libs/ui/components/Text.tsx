import { Text as RNText, type TextProps as RNTextProps } from "react-native";
import {
  createStyleSheet,
  type UnistylesVariants,
  useStyles,
} from "react-native-unistyles";

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
    variants: {
      color: {
        default: {
          color: theme.colors.textPrimary,
        },
        secondary: {
          color: theme.colors.textSecondary,
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
      },
    },
  },
}));
