"use client";

import { createStyleSheet, useStyles } from "react-native-unistyles";

import { type TextProps, Text } from "../Text";

export type CardSubTitleProps = Omit<TextProps, "color" | "type">;

export const CardSubTitle = ({
  children,
  style,
  ...rest
}: CardSubTitleProps) => {
  const { styles } = useStyles(styleSheet);
  return (
    <Text
      color="secondary"
      style={[styles.subTitle, style]}
      type="h4"
      {...rest}
    >
      {children}
    </Text>
  );
};

const styleSheet = createStyleSheet({
  subTitle: {
    textAlign: "center",
  },
});
