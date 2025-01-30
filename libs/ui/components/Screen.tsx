import { View, type ViewProps } from "react-native";
import { StyleSheet } from "react-native-unistyles";

type ScreenProps = ViewProps;

export const Screen = ({ children, ...rest }: ScreenProps) => (
  <View style={styles.screen} {...rest}>
    {children}
  </View>
);

const styles = StyleSheet.create((theme) => ({
  screen: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.colors.background,
  },
}));
