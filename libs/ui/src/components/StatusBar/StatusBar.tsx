import {
  type StatusBarProps as ExpoStatusBarProps,
  StatusBar as ExpoStatusBar,
} from "expo-status-bar";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export type StatusBarProps = ExpoStatusBarProps & {
  type?: "filled" | "transparent";
};

export const StatusBar = () => (
  <View style={styles.statusBar}>
    <ExpoStatusBar style="inverted" />
  </View>
);

const styles = StyleSheet.create((theme, rt) => ({
  statusBar: {
    backgroundColor: theme.colors.brand,
    height: rt.statusBar.height,
  },
}));
