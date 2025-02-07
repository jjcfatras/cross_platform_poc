import { View, type ViewProps } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export const CardBody = ({ children, ...rest }: ViewProps) => (
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
