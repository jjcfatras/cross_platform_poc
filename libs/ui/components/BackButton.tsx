"use client";

import { type TouchableOpacityProps, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { useLink } from "solito/navigation";

import { BackArrow } from "~/libs/assets/src/icons/BackArrow";

export type BackButtonProps = TouchableOpacityProps;

export const BackButton = ({ style, ...rest }: BackButtonProps) => {
  const linkProps = useLink({
    href: "/",
  });

  return (
    <TouchableOpacity style={[styles.button, style]} {...rest} {...linkProps}>
      <BackArrow style={styles.arrow} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create((theme) => ({
  arrow: {
    color: theme.colors.inverse,
    height: 50,
    width: 50,
  },
  button: {
    backgroundColor: theme.colors.brand,
    borderRadius: 25,
    height: 50,
    width: 50,
  },
}));
