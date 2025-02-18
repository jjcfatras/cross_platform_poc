import { type ViewProps, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export type CardBodyProps = ViewProps;

export const CardBody = ({ children, ...rest }: CardBodyProps) => (
  <View style={styles.body} {...rest}>
    {children}
  </View>
);

const styles = StyleSheet.create((theme) => ({
  body: {
    alignItems: "center",
    padding: theme.spacing[1],
  },
}));
