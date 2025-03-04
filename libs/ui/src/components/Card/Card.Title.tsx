import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { type TextProps, Text } from "../Text";

export type CardTitleProps = Omit<TextProps, "color" | "type">;

export const CardTitle = ({ children, style, ...rest }: CardTitleProps) => (
  <View style={styles.container}>
    <Text style={[styles.title, style]} type="h3" {...rest}>
      {children}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    maxWidth: 300,
  },
  title: {
    textAlign: "center",
  },
});
