import { StyleSheet } from "react-native-unistyles";

import { HEADER_HEIGHT_WEB } from "../../constants";
import { Header } from "../Header";
import { type ViewProps, View } from "../View";

export type ScreenProps = ViewProps;

export const Screen = ({ children, style, ...rest }: ScreenProps) => {
  console.log("Web Screen");
  return (
    <View style={[styles.screen, style]} {...rest}>
      <View style={styles.children}>{children}</View>
      <Header type="web" />
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  children: {
    padding: theme.spacing[0],
    paddingTop: HEADER_HEIGHT_WEB,
  },
  screen: {
    _web: {
      _classNames: "screen",
      overflow: "auto",
    },
    flex: 1,
  },
}));
