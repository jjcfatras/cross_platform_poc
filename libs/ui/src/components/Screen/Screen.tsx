import {
  type SafeAreaViewProps,
  SafeAreaView,
} from "react-native-safe-area-context";
import { StyleSheet, withUnistyles } from "react-native-unistyles";

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
      {children}
    </UniSafeAreaView>
  );
};

const styles = StyleSheet.create((theme) => ({
  screen: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
}));
