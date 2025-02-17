import {
  type StatusBarProps as ExpoStatusBarProps,
  StatusBar as ExpoStatusBar,
} from "expo-status-bar";
import { View } from "react-native";
import { StyleSheet, withUnistyles } from "react-native-unistyles";

const Test = withUnistyles(ExpoStatusBar);

export type StatusBarProps = ExpoStatusBarProps & {
  type?: "filled" | "transparent";
};

export const StatusBar = ({
  type = "transparent",
  ...rest
}: StatusBarProps) => {
  return (
    <View style={styles.statusBar(type)}>
      <Test
        style={type === "filled" ? "inverted" : "auto"}
        translucent={false}
        {...rest}
      />
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
