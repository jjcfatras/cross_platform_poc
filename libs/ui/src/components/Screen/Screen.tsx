import { View } from "react-native";
import {
  type SafeAreaViewProps,
  SafeAreaView,
} from "react-native-safe-area-context";
import { StyleSheet, withUnistyles } from "react-native-unistyles";

import { Header } from "../Header";
import { StatusBar } from "../StatusBar";

export type ScreenProps = SafeAreaViewProps;

const UniSafeAreaView = withUnistyles(SafeAreaView);

export const Screen = ({ children, style, ...rest }: ScreenProps) => {
  console.log("Mobile Screen");
  return (
    <UniSafeAreaView
      edges={["bottom", "left", "right"]}
      style={[styles.screen, style]}
      {...rest}
    >
      <StatusBar />
      <View style={styles.children}>{children}</View>
      <Header style={styles.header} type="mobile" />
    </UniSafeAreaView>
  );
};

const styles = StyleSheet.create((theme, rt) => ({
  children: {
    padding: theme.spacing[0],
    paddingBottom: rt.insets.bottom,
    paddingTop: rt.insets.top,
  },
  header: {
    marginTop: rt.statusBar.height,
  },
  screen: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
}));
