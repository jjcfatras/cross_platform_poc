import {
  type SafeAreaViewProps,
  SafeAreaView,
} from "react-native-safe-area-context";
import { StyleSheet, withUnistyles } from "react-native-unistyles";

import { HEADER_HEIGHT_MOBILE } from "../../constants";
import { Header } from "../Header";
import { StatusBar } from "../StatusBar";
import { View } from "../View";

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
    paddingTop: HEADER_HEIGHT_MOBILE,
  },
  header: {
    marginTop: rt.statusBar.height,
  },
  screen: {
    flex: 1,
  },
}));
