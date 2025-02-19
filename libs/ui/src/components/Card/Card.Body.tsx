import { type ViewProps, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

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
