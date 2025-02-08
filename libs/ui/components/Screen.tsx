import { View, type ViewProps } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export type ScreenProps = ViewProps;

export const Screen = ({ children, style, ...rest }: ScreenProps) => (
  <View style={[styles.screen, style]} {...rest}>
    {children}
  </View>
);

const styles = StyleSheet.create((theme) => ({
  screen: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
}));
