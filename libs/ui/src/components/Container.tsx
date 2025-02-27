"use client";

import { type ViewProps, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export type ContainerProps = ViewProps & { hasHeader?: boolean };

export const Container = ({ children, style, ...rest }: ContainerProps) => {
  const { styles } = useStyles(styleSheet);
  return (
    <View style={[styles.container, style]} {...rest}>
      {children}
    </View>
  );
};

const styleSheet = createStyleSheet((theme) => ({
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
