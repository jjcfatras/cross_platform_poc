import { StyleSheet } from "react-native-unistyles";

import { type ViewProps, View } from "./View";

export type ContainerProps = ViewProps & { hasHeader?: boolean };

export const Container = ({ children, style, ...rest }: ContainerProps) => (
  <View style={[styles.container, style]} {...rest}>
    {children}
  </View>
);

const styles = StyleSheet.create((theme) => ({
  container: {
    _web: {
      _classNames: "container",
    },
    marginHorizontal: "auto",
    maxWidth: {
      md: 720,
      lg: 960,
      xl: 1140,
      xxl: 1320,
    },
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[4],
    width: "100%",
  },
}));
