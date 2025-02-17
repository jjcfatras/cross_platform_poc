import { type ViewProps, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export type ScreenProps = ViewProps;

export const Screen = ({ children, style, ...rest }: ScreenProps) => {
  console.log("Web Screen");
  return (
    <View style={[styles.screen, style]} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  screen: {
    _web: {
      _classNames: "screen",
    },
    backgroundColor: theme.colors.background,
    flex: 1,
    minHeight: "100%",
  },
}));
