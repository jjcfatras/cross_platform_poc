import {
  type StatusBarProps as ExpoStatusBarProps,
  StatusBar as ExpoStatusBar,
} from "expo-status-bar";
import { View } from "react-native";
import { StyleSheet, withUnistyles } from "react-native-unistyles";

const UniStatusBar = withUnistyles(ExpoStatusBar);

export type StatusBarProps = ExpoStatusBarProps & {
  type?: "filled" | "transparent";
};

export const StatusBar = () => {
  return (
    <View style={styles.statusBar}>
      <UniStatusBar style={"inverted"} />
    </View>
  );
};

const styles = StyleSheet.create((theme, rt) => ({
  statusBar: {
    backgroundColor: theme.colors.brand,
    height: rt.statusBar.height,
  },
}));
