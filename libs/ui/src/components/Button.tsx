import { type TouchableOpacityProps, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { HOVER_OPACITY } from "../constants";

import { type TextProps, Text } from "./Text";

export type ButtonProps = Omit<TouchableOpacityProps, "children"> &
  Pick<TextProps, "children">;

export const Button = ({ children, style, ...rest }: ButtonProps) => (
  <TouchableOpacity style={styles.button} {...rest}>
    <Text color="inverse" type="bold">
      {children}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create((theme) => ({
  button: {
    _web: {
      _hover: {
        opacity: HOVER_OPACITY,
      },
    },
    alignItems: "center",
    backgroundColor: theme.colors.brand,
    borderRadius: theme.sizing[4],
    maxWidth: 400,
    minWidth: 100,
    padding: theme.spacing[4],
  },
}));
