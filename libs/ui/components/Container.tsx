/* eslint-disable perfectionist/sort-objects */
import { View, type ViewProps } from "react-native";
import { mq, StyleSheet } from "react-native-unistyles";

type ContainerProps = ViewProps;

export const Container = ({ children, style, ...rest }: ContainerProps) => (
  <View style={[styles.container, style]} {...rest}>
    {children}
  </View>
);

const styles = StyleSheet.create((theme) => ({
  container: {
    alignSelf: "center",
    borderColor: theme.colors.good,
    borderWidth: 2,
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
    maxWidth: {
      // [mq.only.width("xs", "sm")]: "100%",
      [mq.only.width("sm", "md")]: 540,
      [mq.only.width("md", "lg")]: 720,
      [mq.only.width("lg", "xl")]: 960,
      [mq.only.width("xl", "xxl")]: 1140,
      [mq.only.width("xxl")]: 1320,
    },
  },
}));
