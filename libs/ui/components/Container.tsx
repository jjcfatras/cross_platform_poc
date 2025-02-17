import { type ViewProps, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

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
    _web: {
      _classNames: "container",
    },
    backgroundColor: "transparent",
    marginHorizontal: "auto",
    maxWidth: {
      md: 720,
      lg: 960,
      xl: 1140,
      xxl: 1320,
    },
    paddingHorizontal: theme.spacing[4],
    paddingTop: hasHeader ? 100 : theme.spacing[4],
    width: "100%",
  }),
}));
