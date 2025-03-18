import { StyleSheet } from "react-native-unistyles";

import { type ViewProps, View } from "../View";

export type CardBaseProps = ViewProps;

export const CardBase = ({ children, style, ...rest }: CardBaseProps) => (
  <View style={[styles.card, style]} {...rest}>
    {children}
  </View>
);

const styles = StyleSheet.create((theme) => ({
  card: {
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.brand,
    borderRadius: theme.sizing[2],
    borderWidth: 2,
    elevation: 5,
    flex: 1,
    minWidth: 300,
    padding: theme.spacing[4],
    shadowColor: theme.colors.shadow,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
}));
