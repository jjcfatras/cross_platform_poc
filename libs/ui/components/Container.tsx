import { View, type ViewProps } from "react-native";
import { mq, StyleSheet } from "react-native-unistyles";

import { Header } from "./Header";

type ContainerProps = ViewProps & { hasHeader?: boolean };

export const Container = ({
  children,
  hasHeader = true,
  style,
  ...rest
}: ContainerProps) => (
  <View style={[styles.container(hasHeader), style]} {...rest}>
    {children}
    {hasHeader && <Header />}
  </View>
);

const styles = StyleSheet.create((theme) => ({
  container: (hasHeader: boolean) => ({
    alignSelf: "center",
    backgroundColor: "transparent",
    flex: 1,
    maxWidth: {
      //   md: 720,
      //   lg: 960,
      //   xl: 1140,
      //   xxl: 1320,
      [mq.only.width("md", "lg")]: 720,
      // eslint-disable-next-line perfectionist/sort-objects
      [mq.only.width("lg", "xl")]: 960,
      [mq.only.width("xl", "xxl")]: 1140,
      [mq.only.width("xxl")]: 1320,
    },
    padding: theme.spacing[4],
    paddingTop: hasHeader ? 116 : theme.spacing[4],
    width: "100%",
  }),
}));
