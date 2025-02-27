"use client";

import { View } from "react-native";
import {
  type SafeAreaViewProps,
  SafeAreaView,
} from "react-native-safe-area-context";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { HEADER_HEIGHT_MOBILE } from "../../constants";
import { Header } from "../Header";
import { StatusBar } from "../StatusBar";

export type ScreenProps = SafeAreaViewProps;

export const Screen = ({ children, style, ...rest }: ScreenProps) => {
  const { styles } = useStyles(styleSheet);
  console.log("Mobile Screen");
  return (
    <SafeAreaView
      edges={["bottom", "left", "right"]}
      style={[styles.screen, style]}
      {...rest}
    >
      <StatusBar />
      <View style={styles.children}>{children}</View>
      <Header style={styles.header} type="mobile" />
    </SafeAreaView>
  );
};

const styleSheet = createStyleSheet((theme, rt) => ({
  children: {
    padding: theme.spacing[0],
    paddingBottom: rt.insets.bottom,
    paddingTop: HEADER_HEIGHT_MOBILE,
  },
  header: {
    marginTop: rt.statusBar.height,
  },
  screen: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
}));
