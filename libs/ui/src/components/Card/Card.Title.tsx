"use client";

import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { type TextProps, Text } from "../Text";

export type CardTitleProps = Omit<TextProps, "color" | "type">;

export const CardTitle = ({ children, style, ...rest }: CardTitleProps) => {
  const { styles } = useStyles(styleSheet);
  return (
    <View style={styles.container}>
      <Text style={[styles.title, style]} type="h2" {...rest}>
        {children}
      </Text>
    </View>
  );
};

const styleSheet = createStyleSheet({
  container: {
    alignSelf: "center",
    maxWidth: 300,
  },
  title: {
    textAlign: "center",
  },
});
