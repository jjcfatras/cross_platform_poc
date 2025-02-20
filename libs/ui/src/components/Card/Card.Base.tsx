import { type ViewProps, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export type CardBaseProps = ViewProps;

export const CardBase = ({ children, style, ...rest }: CardBaseProps) => (
  <View style={[styles.card, style]} {...rest}>
    {children}
  </View>
);

const styles = StyleSheet.create((theme) => ({
  card: {
    backgroundColor: theme.colors.background,
    borderColor: theme.colors.brand,
    borderRadius: theme.sizing[1],
    borderWidth: 2,
    minWidth: 300,
    padding: theme.spacing[4],
  },
}));
