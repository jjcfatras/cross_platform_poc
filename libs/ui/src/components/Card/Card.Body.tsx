"use client";

import { type ViewProps, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export type CardBodyProps = ViewProps;

export const CardBody = ({ children, style, ...rest }: CardBodyProps) => {
  const { styles } = useStyles(styleSheet);
  return (
    <View style={[styles.body, style]} {...rest}>
      {children}
    </View>
  );
};

const styleSheet = createStyleSheet((theme) => ({
  body: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: theme.spacing[0],
  },
}));
