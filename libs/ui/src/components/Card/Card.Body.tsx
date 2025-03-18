import { StyleSheet } from "react-native-unistyles";

import { type ViewProps, View } from "../View";

export type CardBodyProps = ViewProps;

export const CardBody = ({ children, style, ...rest }: CardBodyProps) => (
  <View style={[styles.body, style]} {...rest}>
    {children}
  </View>
);

const styles = StyleSheet.create((theme) => ({
  body: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: theme.spacing[0],
  },
}));
