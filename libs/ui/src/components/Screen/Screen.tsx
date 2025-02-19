import { View } from "react-native";
import {
  type SafeAreaViewProps,
  SafeAreaView,
} from "react-native-safe-area-context";
import { StyleSheet, withUnistyles } from "react-native-unistyles";

import { Header } from "../Header";
import { type StatusBarProps, StatusBar } from "../StatusBar";

export type ScreenProps = SafeAreaViewProps & {
  statusBarProps?: StatusBarProps;
};

const UniSafeAreaView = withUnistyles(SafeAreaView);

export const Screen = ({
  children,
  statusBarProps,
  style,
  ...rest
}: ScreenProps) => {
  console.log("Mobile Screen");
  return (
    <UniSafeAreaView
      edges={["bottom", "left", "right"]}
      style={[styles.screen, style]}
      {...rest}
    >
      <StatusBar {...statusBarProps} />
      <View style={styles.children}>{children}</View>
      <Header style={styles.header} type="mobile" />
    </UniSafeAreaView>
  );
};

const styles = StyleSheet.create((theme, rt) => ({
  children: {
    marginTop: rt.insets.top + theme.spacing[4],
    padding: theme.spacing[0],
  },
  header: {
    marginTop: rt.statusBar.height,
  },
  screen: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
}));
