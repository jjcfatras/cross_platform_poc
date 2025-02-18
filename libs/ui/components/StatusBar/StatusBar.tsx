import {
  type StatusBarProps as ExpoStatusBarProps,
  StatusBar as ExpoStatusBar,
} from "expo-status-bar";
import { View } from "react-native";
import {
  StyleSheet,
  UnistylesRuntime,
  withUnistyles,
} from "react-native-unistyles";

const UniStatusBar = withUnistyles(ExpoStatusBar);

export type StatusBarProps = ExpoStatusBarProps & {
  type?: "filled" | "transparent";
};

const _renderType = (type: StatusBarProps["type"]) => {
  if (type === "filled") {
    return "inverted";
  } else {
    return UnistylesRuntime.colorScheme === "dark" ? "inverted" : "auto";
  }
};

export const StatusBar = ({
  type = "transparent",
  ...rest
}: StatusBarProps) => {
  return (
    <View style={styles.statusBar(type)}>
      <UniStatusBar style={_renderType(type)} translucent={false} {...rest} />
    </View>
  );
};

const styles = StyleSheet.create((theme, rt) => ({
  statusBar: (type: StatusBarProps["type"]) => ({
    backgroundColor:
      type === "transparent" ? theme.colors.transparent : theme.colors.brand,
    height: rt.statusBar.height,
  }),
}));
