"use client";

import { type ViewProps, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { HEADER_HEIGHT_WEB } from "../../constants";
import { Header } from "../Header";

export type ScreenProps = ViewProps;

export const Screen = ({ children, style, ...rest }: ScreenProps) => {
  const { styles } = useStyles(styleSheet);
  console.log("Web Screen");
  return (
    <View style={[styles.screen, style]} {...rest}>
      <View style={styles.children}>{children}</View>
      <Header type="web" />
    </View>
  );
};

const styleSheet = createStyleSheet((theme) => ({
  children: {
    padding: theme.spacing[0],
    paddingTop: HEADER_HEIGHT_WEB,
  },
  screen: {
    _web: {
      _classNames: "screen",
      overflow: "auto",
    },
    backgroundColor: theme.colors.background,
    flex: 1,
  },
}));
