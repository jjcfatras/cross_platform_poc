"use client";

import { type TouchableOpacityProps, TouchableOpacity } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { type TextProps, Text } from "./Text";

export type ButtonProps = Omit<TouchableOpacityProps, "children"> &
  Pick<TextProps, "children">;

export const Button = ({ children, style, ...rest }: ButtonProps) => {
  const { styles } = useStyles(styleSheet);
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text color="inverse" type="bold">
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styleSheet = createStyleSheet((theme) => ({
  button: {
    alignItems: "center",
    backgroundColor: theme.colors.brand,
    borderRadius: theme.sizing[4],
    minWidth: 100,
    padding: theme.spacing[4],
  },
}));
