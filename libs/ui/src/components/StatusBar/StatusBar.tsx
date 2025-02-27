"use client";

import {
  type StatusBarProps as ExpoStatusBarProps,
  StatusBar as ExpoStatusBar,
} from "expo-status-bar";
import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export type StatusBarProps = ExpoStatusBarProps & {
  type?: "filled" | "transparent";
};

export const StatusBar = () => {
  const { styles } = useStyles(styleSheet);
  return (
    <View style={styles.statusBar}>
      <ExpoStatusBar style={"inverted"} />
    </View>
  );
};

const styleSheet = createStyleSheet((theme, rt) => ({
  statusBar: {
    backgroundColor: theme.colors.brand,
    height: rt.statusBar.height,
  },
}));
