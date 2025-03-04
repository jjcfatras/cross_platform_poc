import { type TouchableOpacityProps, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { Menu } from "~/libs/assets/src/icons/Menu";

import { HOVER_OPACITY } from "../constants";

export type MenuButtonProps = Omit<TouchableOpacityProps, "children"> & {
  size?: number;
};

export const MenuButton = ({ size = 100, style, ...rest }: MenuButtonProps) => (
  <TouchableOpacity style={[styles.button(size), style]} {...rest}>
    <Menu style={styles.menu(size)} />
  </TouchableOpacity>
);

const styles = StyleSheet.create((theme) => ({
  button: (size: number) => ({
    _web: {
      _hover: {
        opacity: HOVER_OPACITY,
      },
    },
    height: size,
    width: size,
  }),
  menu: (size: number) => ({
    color: theme.colors.inverse,
    height: size,
    width: size,
  }),
}));
