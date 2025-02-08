import { StyleSheet } from "react-native-unistyles";

import { Text, type TextProps } from "../Text";

export type CardSubTitleProps = Omit<TextProps, "color" | "type">;

export const CardSubTitle = ({
  children,
  style,
  ...rest
}: CardSubTitleProps) => (
  <Text color="secondary" style={[styles.subTitle, style]} type="h4" {...rest}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  subTitle: {
    textAlign: "center",
  },
});
