import { type ViewProps, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { Header } from "../Header";

export type ScreenProps = ViewProps;

export const Screen = ({ children, style, ...rest }: ScreenProps) => {
  console.log("Web Screen");
  return (
    <View style={[styles.screen, style]} {...rest}>
      <View style={styles.children}>{children}</View>
      <Header type="web" />
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  children: {
    padding: theme.spacing[0],
    paddingTop: 100,
  },
  screen: {
    _web: {
      _classNames: "screen",
    },
    flex: 1,
  },
}));
