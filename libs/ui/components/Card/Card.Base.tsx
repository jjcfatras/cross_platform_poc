import { View, type ViewProps } from "react-native";
import { StyleSheet } from "react-native-unistyles";

type CardProps = ViewProps;

export const CardBase = ({ children, ...rest }: CardProps) => (
  <View style={styles.card} {...rest}>
    {children}
  </View>
);

const styles = StyleSheet.create((theme) => ({
  card: {
    alignItems: "center",
    backgroundColor: theme.colors.background,
    borderColor: theme.colors.brand,
    borderRadius: theme.sizing[1],
    borderWidth: 2,
    margin: theme.spacing[4],
    padding: theme.spacing[3],
  },
}));
