"use client";

import { type TouchableOpacityProps, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { useLink } from "solito/navigation";

import { BackArrow } from "~/libs/assets/src/icons/BackArrow";

export type BackButtonProps = Omit<TouchableOpacityProps, "style"> & {
  size?: number;
};

export const BackButton = ({ size = 50, ...rest }: BackButtonProps) => {
  const linkProps = useLink({
    href: "/",
  });

  return (
    <TouchableOpacity style={styles.button(size)} {...rest} {...linkProps}>
      <BackArrow style={styles.arrow(size)} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create((theme) => ({
  arrow: (size: number) => ({
    color: theme.colors.inverse,
    height: size,
    width: size,
  }),
  button: (size: number) => ({
    backgroundColor: theme.colors.brand,
    borderRadius: size / 2,
    height: size,
    width: size,
  }),
}));
