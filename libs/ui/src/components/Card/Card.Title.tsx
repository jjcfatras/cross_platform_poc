import { StyleSheet } from "react-native-unistyles";

import { type TextProps, Text } from "../Text";

export type CardTitleProps = Omit<TextProps, "color" | "type">;

export const CardTitle = ({ children, style, ...rest }: CardTitleProps) => (
  <Text style={[styles.title, style]} type="h1" {...rest}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
  },
});
