import { type TouchableOpacityProps, TouchableOpacity } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { Menu } from "~/libs/assets/src/icons/Menu";

export type MenuButtonProps = Omit<TouchableOpacityProps, "children"> & {
  size?: number;
};

export const MenuButton = ({ size = 100, style, ...rest }: MenuButtonProps) => {
  const { styles } = useStyles(styleSheet);
  return (
    <TouchableOpacity style={[styles.button(size), style]} {...rest}>
      <Menu style={styles.menu(size)} />
    </TouchableOpacity>
  );
};

const styleSheet = createStyleSheet((theme) => ({
  button: (size: number) => ({
    height: size,
    width: size,
  }),
  menu: (size: number) => ({
    color: theme.colors.inverse,
    height: size,
    width: size,
  }),
}));
